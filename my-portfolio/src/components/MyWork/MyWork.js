import './MyWork.css';
import { useCallback, useEffect, useState } from 'react';
import { getProjectsPage } from '../../services/getProjects';
import MyWorkItem from './MyWorkITem';

const PAGE_SIZE = 4;

export default function MyWork() {
    const [pages, setPages] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const currentPage = pages[pageIndex];

    const loadFirstPage = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await getProjectsPage(null, PAGE_SIZE);
            setPages([{ items: result.projects, cursor: result.lastDocument, hasMore: result.hasMore }]);
            setPageIndex(0);
        } catch { setError(true); }
        finally { setLoading(false); }
    }, []);

    useEffect(() => { loadFirstPage(); }, [loadFirstPage]);

    const nextPage = async () => {
        if (pages[pageIndex + 1]) {
            setPageIndex((index) => index + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (!currentPage?.hasMore) return;
        setLoading(true);
        setError(false);
        try {
            const result = await getProjectsPage(currentPage.cursor, PAGE_SIZE);
            setPages((current) => [...current, { items: result.projects, cursor: result.lastDocument, hasMore: result.hasMore }]);
            setPageIndex((index) => index + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch { setError(true); }
        finally { setLoading(false); }
    };

    const previousPage = () => {
        if (pageIndex === 0) return;
        setPageIndex((index) => index - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const removeProject = (id) => setPages((current) => current.map((page, index) => index === pageIndex ? { ...page, items: page.items.filter((item) => item.id !== id) } : page));
    const projects = currentPage?.items || [];

    return <section className="section work-page">
        <div className="container">
            <header className="work-heading">
                <div><p className="kicker">03 · SELECTED WORK</p><h1>Projects built with<br/><em>purpose & precision.</em></h1></div>
                <p>A growing collection of products, experiments, and ideas brought to life through code.</p>
            </header>

            {currentPage && <div className="work-toolbar">
                <span>Collection <strong>{String(pageIndex + 1).padStart(2, '0')}</strong></span>
                <i><b style={{ width: currentPage.hasMore ? `${Math.min(85, 35 + pageIndex * 18)}%` : '100%' }} /></i>
                <span>{currentPage.hasMore ? 'More to explore' : 'End of collection'}</span>
            </div>}

            {!loading && <div className="projects-grid" key={pageIndex}>
                {projects.map((project, index) => <MyWorkItem key={project.id} project={project} index={pageIndex * PAGE_SIZE + index} onDelete={() => removeProject(project.id)} />)}
            </div>}

            {loading && <div className="project-skeletons" aria-label="Loading projects">{[1,2,3,4].map((item) => <div key={item}><i /><span /><span /></div>)}</div>}
            {error && <div className="work-error"><p>Projects couldn’t be loaded.</p><button onClick={pageIndex === 0 ? loadFirstPage : nextPage}>Try again</button></div>}
            {!loading && !error && projects.length === 0 && pageIndex === 0 && <div className="work-empty"><span>✦</span><h2>Work in progress</h2><p>New projects will appear here soon.</p></div>}

            {!error && currentPage && (pageIndex > 0 || currentPage.hasMore) && <nav className="work-pagination" aria-label="Project pages">
                <button onClick={previousPage} disabled={pageIndex === 0}><i>←</i><span><small>PREVIOUS</small>Back</span></button>
                <div><span className="active-page">{String(pageIndex + 1).padStart(2, '0')}</span><i />{currentPage.hasMore && <span>{String(pageIndex + 2).padStart(2, '0')}</span>}</div>
                <button className="next" onClick={nextPage} disabled={!currentPage.hasMore}><span><small>NEXT</small>More work</span><i>→</i></button>
            </nav>}
        </div>
    </section>;
}
