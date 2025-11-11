export const SetInitialTheme = () => {
    const code = `
        (function() {
            // Check for existing theme setting in localStorage
            const storedTheme = localStorage.getItem('theme');
            let initialTheme = storedTheme;

            // If no theme is stored, check user preference (prefers-color-scheme)
            if (!initialTheme) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                initialTheme = prefersDark ? 'dark' : 'light';
            }

            // Apply the theme class to the document's root element
            if (initialTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        })();
    `;
    return <script dangerouslySetInnerHTML={{ __html: code }} />;
};