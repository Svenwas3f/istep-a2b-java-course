// Navigation Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    if (menuToggle && sidebar) {
        // Toggle sidebar on menu button click
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when a link is clicked (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Only close sidebar on mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
                
                // Get page to load
                const page = this.getAttribute('data-page');
                loadPage(page);
            });
        });
        
        // Handle submenu toggles
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parentLi = this.parentElement;
                const isOpen = parentLi.classList.contains('open');
                
                // Close all other submenus
                document.querySelectorAll('.has-submenu.open').forEach(item => {
                    if (item !== parentLi) {
                        item.classList.remove('open');
                    }
                });
                
                // Toggle current submenu
                parentLi.classList.toggle('open');
            });
        });

        // Close sidebar when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }

    // Load initial content from URL or default to home
    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = urlParams.get('page') || 'home';
    loadPage(initialPage);
});

// Load page content dynamically
async function loadPage(page) {
    try {
        console.log('Loading page:', page);
        
        const filePath = `pages/${page}.html`;
        console.log('Fetch URL:', filePath);
        
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const content = await response.text();
        const mainContent = document.querySelector('.main-content');
        
        if (mainContent) {
            mainContent.innerHTML = content;
            console.log('Content loaded successfully');
            
            // Highlight code blocks
            highlightCodeBlocks();
            
            // Attach event listeners to internal navigation links
            attachInternalNavigation();
        }
        
        // Update URL without page reload
        window.history.pushState({ page: page }, '', `?page=${page}`);
        
        // Update active link
        updateActiveLink(page);
    } catch (error) {
        console.error('Error loading content:', error);
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.innerHTML = `<div class="section"><h2>Error loading page</h2><p>Could not load the requested page.</p><p style="color: #666; font-size: 0.9em;">Error: ${error.message}</p></div>`;
        }
    }
}

// Attach event listeners to internal navigation links in loaded content
function attachInternalNavigation() {
    const internalLinks = document.querySelectorAll('.main-content a[data-page]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                loadPage(page);
                
                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    const sidebar = document.querySelector('.sidebar');
                    if (sidebar) {
                        sidebar.classList.remove('active');
                    }
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
        });
    });
}

// Apply syntax highlighting to code blocks
function highlightCodeBlocks() {
    if (typeof hljs !== 'undefined') {
        // Highlight all code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            // Remove any existing highlighting
            block.classList.remove('hljs');
            
            // If no language class is specified, add language-java as default
            if (!block.className || block.className === '') {
                block.classList.add('language-java');
            }
            
            // Apply highlighting
            hljs.highlightElement(block);
        });
    }
}

function updateActiveLink(page) {
    const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === page) {
            link.classList.add('active');
            
            // If in a submenu, open the parent menu
            const parentSubmenu = link.closest('.submenu');
            if (parentSubmenu) {
                const parentLi = parentSubmenu.closest('.has-submenu');
                if (parentLi) {
                    parentLi.classList.add('open');
                }
            }
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll behavior
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]') && !e.target.getAttribute('data-page')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    const page = event.state?.page || 'home';
    loadPage(page);
});
