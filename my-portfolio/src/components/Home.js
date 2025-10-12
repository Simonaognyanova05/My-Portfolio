export default function Home() {
    return (
        <div id="home" class="page active">
            <div class="container">
                <div class="content-wrapper">
                    <section class="hero glass">
                        <div class="hero-image">
                            <img src="images/templatemo-futuristic-girl.jpg" alt="Modern Technology Interaction" />
                        </div>
                        <div class="hero-content">
                            <h1>Welcome to the Future</h1>
                            <p>Experience cutting-edge glass morphism design that brings depth and elegance to modern web
                                interfaces. Clean, translucent, and beautifully interactive.</p>
                            <a href="#" class="cta-button" onclick="showPage('about')">Learn More</a>
                        </div>
                    </section>

                    <section class="features">
                        <div class="feature-card glass">
                            <div class="feature-icon">✨</div>
                            <h3>Modern Design</h3>
                            <p>Beautiful glass morphism effects with backdrop blur and translucent elements that create
                                depth and visual hierarchy.</p>
                        </div>

                        <div class="feature-card glass">
                            <div class="feature-icon">⚡</div>
                            <h3>Fast Performance</h3>
                            <p>Optimized animations and effects that maintain smooth 60fps performance across all modern
                                browsers and devices.</p>
                        </div>

                        <div class="feature-card glass">
                            <div class="feature-icon">📱</div>
                            <h3>Responsive</h3>
                            <p>Fully responsive design that adapts beautifully to any screen size, from mobile phones to
                                desktop displays.</p>
                        </div>

                        <div class="feature-card glass">
                            <div class="feature-icon">🎨</div>
                            <h3>Interactive UI</h3>
                            <p>Engaging hover effects, smooth transitions, and micro-animations that create delightful user
                                experiences.</p>
                        </div>

                        <div class="feature-card glass">
                            <div class="feature-icon">🔒</div>
                            <h3>Secure & Safe</h3>
                            <p>Built with modern security standards and best practices to ensure your data and user privacy
                                are protected.</p>
                        </div>

                        <div class="feature-card glass">
                            <div class="feature-icon">🚀</div>
                            <h3>Easy Integration</h3>
                            <p>Simple to implement and customize for any project with clean, well-documented code and
                                flexible components.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}