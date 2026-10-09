(function () {
    "use strict";

    /* ============================================================
       ICONS
    ============================================================ */
    const ICONS = {
        home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
        compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-3 6-3-3 3-3z"/>',
        'book-open': '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>',
        play: '<polygon points="5 3 19 12 5 21"/>',
        'check-circle': '<circle cx="12" cy="12" r="9"/><polyline points="8 12 11 15 16 9"/>',
        check: '<polyline points="20 6 9 17 4 12"/>',
        star: '<polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/>',
        trophy: '<path d="M8 4h8v4a4 4 0 01-8 0V4z"/><path d="M8 4H4v2a4 4 0 004 4"/><path d="M16 4h4v2a4 4 0 01-4 4"/><line x1="12" y1="12" x2="12" y2="17"/><path d="M8 21h8"/><path d="M9 17h6l1 4H8z"/>',
        clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
        code: '<polyline points="9 6 3 12 9 18"/><polyline points="15 6 21 12 15 18"/>',
        layers: '<polygon points="12 2 22 8 12 14 2 8"/><polyline points="2 14 12 20 22 14"/>',
        flame: '<path d="M12 2c2 4-2 5-2 9a4 4 0 008 0c0-2-1-3-1-3s2 1 2 5a7 7 0 11-11-6c1-3 3-3 4-5z"/>',
        sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4" y1="12" x2="1" y2="12"/><line x1="23" y1="12" x2="20" y2="12"/><line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.8" y2="19.8"/><line x1="4.2" y1="19.8" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.8" y2="4.2"/>',
        moon: '<path d="M20 14A9 9 0 1110 3a7 7 0 0010 11z"/>',
        menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
        x: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
        'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
        'chevron-right': '<polyline points="9 6 15 12 9 18"/>',
        'chevron-left': '<polyline points="15 6 9 12 15 18"/>',
        'arrow-right': '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>',
        'arrow-left': '<line x1="20" y1="12" x2="4" y2="12"/><polyline points="10 18 4 12 10 6"/>',
        'external-link': '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
        target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
        'bar-chart': '<line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/>',
        terminal: '<polyline points="4 6 9 12 4 18"/><line x1="12" y1="18" x2="20" y2="18"/>',
        brain: '<path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3"/><path d="M15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3"/><line x1="12" y1="3" x2="12" y2="21"/>',
        database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
        git: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M6 8a6 6 0 0012 4"/>',
        react: '<circle cx="12" cy="12" r="1.6" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>',
        python: '<circle cx="12" cy="12" r="9"/><circle cx="9.5" cy="9.5" r="1" fill="currentColor"/><circle cx="14.5" cy="14.5" r="1" fill="currentColor"/>',
        css: '<path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z"/><path d="M8 8h8l-.3 3H8.3M8.5 12h6.7l-.5 5-2.7 1-2.7-1-.2-2"/>',
        js: '<path d="M8 4c-2 0-3 1-3 3v3c0 2-1 2-2 2 1 0 2 0 2 2v3c0 2 1 3 3 3"/><path d="M16 4c2 0 3 1 3 3v3c0 2 1 2 2 2-1 0-2 0-2 2v3c0 2-1 3-3 3"/>',
        award: '<circle cx="12" cy="8" r="5"/><path d="M8 13l-2 7 6-3 6 3-2-7"/>',
        shield: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/>',
        cloud: '<path d="M7 18a4 4 0 010-8 6 6 0 0111.5-1.5A4.5 4.5 0 0117 18H7z"/>',
        palette: '<path d="M12 2a10 10 0 000 20c1.5 0 2-1 2-2s-.5-1.5-.5-2 .5-1 1.5-1h2a3 3 0 003-3c0-6-4-12-8-12z"/><circle cx="7" cy="10" r="1" fill="currentColor"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="17" cy="10" r="1" fill="currentColor"/>',
        users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
        pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
    };
    function icon(name) {
        return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
    }

    /* ============================================================
       COURSE DATA (from Google Sheet)
    ============================================================ */
    const COURSE_MODULES = [
        {
            id: 'aspirasys-intro',
            name: 'AspiraSys Introduction',
            icon: 'compass',
            color: '#1d4ed8',
            week: 'Week 1',
            description: 'Introduction to AspiraSys and career guidance',
            lessons: [
                { topic: 'AspiraSys Introduction', hindi: 'https://youtu.be/Y000saOU8RE?si=x42vEKQ8dhUKXuYM', tamil: 'https://youtu.be/Y000saOU8RE?si=x42vEKQ8dhUKXuYM', type: 'video' },
                { topic: 'Quiz: AspiraSys Intro 1', hindi: 'https://as-intro-1.netlify.app', tamil: 'https://as-intro-1.netlify.app', type: 'quiz' },
                { topic: 'Unlock Your Dream IT Career', hindi: 'https://youtu.be/Lmm_FHz1L88?si=1aymDj2tt_GlitCN', tamil: 'https://youtu.be/Lmm_FHz1L88?si=1aymDj2tt_GlitCN', type: 'video' },
                { topic: 'Quiz: Career Guidance', hindi: 'https://as-intro-2.netlify.app', tamil: 'https://as-intro-2.netlify.app', type: 'quiz' },
                { topic: 'HIGH-PAYING Career Formula', hindi: 'https://youtu.be/eK5jC3l0rQc?si=Ni8EiImizj9a5dj5', tamil: 'https://youtu.be/eK5jC3l0rQc?si=Ni8EiImizj9a5dj5', type: 'video' },
                { topic: 'Quiz: Career Formula', hindi: 'https://as-intro-3.netlify.app', tamil: 'https://as-intro-3.netlify.app', type: 'quiz' },
                { topic: 'Start a Career in IT', hindi: 'https://youtu.be/1BftCD5YtjQ?si=fG9zcDTNzcB-YMMZ', tamil: 'https://youtu.be/1BftCD5YtjQ?si=fG9zcDTNzcB-YMMZ', type: 'video' },
                { topic: 'Quiz: IT Career', hindi: 'https://as-intro-4.netlify.app', tamil: 'https://as-intro-4.netlify.app', type: 'quiz' }
            ]
        },
        {
            id: 'web-basics',
            name: 'Web Basics & Tools',
            icon: 'terminal',
            color: '#0ea5e9',
            week: 'Week 1',
            description: 'Web development intro, IDE, GitHub & Netlify setup',
            lessons: [
                { topic: 'What Is Web Development', hindi: 'https://www.youtube.com/watch?v=tSHdBIYEACk', tamil: 'https://www.youtube.com/watch?v=tSHdBIYEACk', type: 'video' },
                { topic: 'VS Code Installation', hindi: 'https://www.youtube.com/watch?v=fJEbVCrEMSE', tamil: 'https://www.youtube.com/watch?v=fJEbVCrEMSE', type: 'video' },
                { topic: 'GitHub Intro & Installation', hindi: 'https://www.youtube.com/watch?v=SW3emX9TJ4g', tamil: 'https://www.youtube.com/watch?v=SW3emX9TJ4g', type: 'video' },
                { topic: 'Netlify Intro & Installation', hindi: 'https://www.youtube.com/watch?v=cUMUTS2ybhg', tamil: 'https://www.youtube.com/watch?v=cUMUTS2ybhg', type: 'video' },
                { topic: 'Quiz: Web Basics', hindi: 'https://as-intro-5.netlify.app', tamil: 'https://as-intro-5.netlify.app', type: 'quiz' }
            ]
        },
        {
            id: 'html',
            name: 'HTML5',
            icon: 'code',
            color: '#f97316',
            week: 'Week 1',
            description: 'Learn the building blocks of web pages',
            lessons: [
                { topic: 'Headings & Paragraphs', hindi: 'https://www.youtube.com/watch?v=ulv_q6-b7uI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=5', tamil: 'https://www.youtube.com/watch?v=c7myDIKFjFg&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=2', type: 'video' },
                { topic: 'Image and Anchor Tags', hindi: 'https://www.youtube.com/watch?v=z6H22xGAZEA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=6', tamil: 'https://www.youtube.com/watch?v=6ukVlU9ScIs&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=3', type: 'video' },
                { topic: 'Lists & Tables', hindi: 'https://www.youtube.com/watch?v=N69xumSjg5Q&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=7', tamil: 'https://www.youtube.com/watch?v=e8wvygLG1ww&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=5', type: 'video' },
                { topic: 'Forms and Input Tags', hindi: 'https://www.youtube.com/watch?v=KqJikDzb3l4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=8', tamil: 'https://www.youtube.com/watch?v=yGmiVqCAlsI&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=6', type: 'video' },
                { topic: 'Inline Element Tags', hindi: 'https://www.youtube.com/watch?v=DFT9qxVCF6k&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=9', tamil: 'https://www.youtube.com/watch?v=2RmKJAN8d_0&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=7', type: 'video' },
                { topic: 'Ids & Classes', hindi: 'https://www.youtube.com/watch?v=BucLTOfLQsk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=10', tamil: 'https://www.youtube.com/watch?v=tDLLIq95VZU&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=8', type: 'video' },
                { topic: 'HTML Entities', hindi: 'https://www.youtube.com/watch?v=gw1efv5WF_Q&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=11', tamil: 'https://www.youtube.com/watch?v=w-I83PKOGrU&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=9', type: 'video' },
                { topic: 'Semantic Tags', hindi: 'https://www.youtube.com/watch?v=FKfsmV6otEM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=12', tamil: 'https://www.youtube.com/watch?v=2sqr8-AoEz8&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=10', type: 'video' },
                { topic: 'Introduction to CSS', hindi: 'https://www.youtube.com/watch?v=ua24185-rcw&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=13', tamil: 'https://as-html.netlify.app', type: 'video' },
                { topic: 'Inline, Internal & External CSS', hindi: 'https://www.youtube.com/watch?v=ArUL-He_AN0&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=14', tamil: 'https://www.youtube.com/watch?v=w46i7nY9Zt4&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=11', type: 'video' },
                { topic: 'Quiz: HTML (30 Questions)', hindi: 'https://as-html.netlify.app', tamil: 'https://www.youtube.com/watch?v=7bSsn-Frv9w&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=12', type: 'quiz' }
            ]
        },
        {
            id: 'css',
            name: 'CSS3',
            icon: 'css',
            color: '#1e40af',
            week: 'Week 2',
            description: 'Style beautiful, responsive websites with modern CSS',
            lessons: [
                { topic: 'Selectors in CSS', hindi: 'https://www.youtube.com/watch?v=oPPym7UaSIo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=15', tamil: 'https://www.youtube.com/watch?v=oWerFE7tp-s&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=13', type: 'video' },
                { topic: 'Chrome Developer Tools', hindi: 'https://www.youtube.com/watch?v=buxedopZbKM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=16', tamil: 'https://www.youtube.com/watch?v=TH-V-vrqnYI&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=14', type: 'video' },
                { topic: 'Fonts & Colors In CSS', hindi: 'https://www.youtube.com/watch?v=5Gz7j4gDrXM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=17', tamil: 'https://www.youtube.com/watch?v=R-w14nOTNCU&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=15', type: 'video' },
                { topic: 'Color Properties', hindi: 'https://www.youtube.com/watch?v=EEw5OJCsiDs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=18', tamil: 'https://www.youtube.com/watch?v=hsxsytK6IJE&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=16', type: 'video' },
                { topic: 'Borders and Backgrounds', hindi: 'https://www.youtube.com/watch?v=2zcHiaHo4Jo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=19', tamil: 'https://www.youtube.com/watch?v=ZLC2PmuHfME&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=17', type: 'video' },
                { topic: 'CSS Box Model, Margin & Padding', hindi: 'https://www.youtube.com/watch?v=5koxb4JaDqc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=20', tamil: 'https://www.youtube.com/watch?v=RbSDotsYSj0&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=18', type: 'video' },
                { topic: 'Float & Clear Explained', hindi: 'https://www.youtube.com/watch?v=6G42rXal5-g&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=21', tamil: 'https://www.youtube.com/watch?v=l-gyhFxODkc&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=19', type: 'video' },
                { topic: 'Styling Links & Buttons', hindi: 'https://www.youtube.com/watch?v=3lAl7RNqp1c&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=22', tamil: 'https://www.youtube.com/watch?v=pFxcuw62KOk&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=20', type: 'video' },
                { topic: 'Creating a Navigation Menu', hindi: 'https://www.youtube.com/watch?v=OsPOBsclJLU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=23', tamil: 'https://www.youtube.com/watch?v=jOsKp9gwfPc&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=21', type: 'video' },
                { topic: 'CSS Display Property', hindi: 'https://www.youtube.com/watch?v=YJtlXrzXXFk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=24', tamil: 'https://www.youtube.com/watch?v=YavGZaHeaB4&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=22', type: 'video' },
                { topic: 'CSS Position (absolute, relative, fixed, sticky)', hindi: 'https://www.youtube.com/watch?v=MwGHiVl-gqk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=25', tamil: 'https://www.youtube.com/watch?v=vzbyes05szE&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=23', type: 'video' },
                { topic: 'Visibility & z-index', hindi: 'https://www.youtube.com/watch?v=Uzuq2FGxgK4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=27', tamil: 'https://www.youtube.com/watch?v=VN9hkmTvq3Y&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=24', type: 'video' },
                { topic: 'CSS Flexbox', hindi: 'https://www.youtube.com/watch?v=4ykmsTpIn08&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=28', tamil: 'https://www.youtube.com/watch?v=4-bJX9xLGAQ&list=PLYM2_EX_xVvXZ2A08faQ_7Iz4unlGs176&index=25', type: 'video' },
                { topic: 'Media Queries', hindi: 'https://www.youtube.com/watch?v=WTz4A8IdeEQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=30', tamil: 'https://as-css.netlify.app', type: 'video' },
                { topic: 'More on CSS Selectors', hindi: 'https://www.youtube.com/watch?v=WwUM7qOimbo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=31', tamil: 'https://youtu.be/OcnBAwpMpdI', type: 'video' },
                { topic: 'CSS Animations & Keyframes', hindi: 'https://www.youtube.com/watch?v=jiK6Mf-ILSg&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=36', tamil: 'https://as-domain-hosting.netlify.app', type: 'video' },
                { topic: 'CSS Transitions', hindi: 'https://www.youtube.com/watch?v=k4Dr0PJKidI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=37', tamil: 'https://www.youtube.com/watch?v=k4Dr0PJKidI', type: 'video' },
                { topic: 'Transform Property', hindi: 'https://www.youtube.com/watch?v=K0Gz7CKNJzY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=38', tamil: 'https://youtu.be/2RVuXd-3YCo', type: 'video' },
                { topic: 'CSS Grid: Introduction', hindi: 'https://www.youtube.com/watch?v=MPl9bevckUE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=40', tamil: 'https://as-about-ai.netlify.app', type: 'video' },
                { topic: 'CSS Grid: Rows & Gaps', hindi: 'https://www.youtube.com/watch?v=Aec0xLKzBWk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=41', tamil: 'https://youtu.be/8Gn8qT-3uR4', type: 'video' },
                { topic: 'em, rem, vh, vw Units', hindi: 'https://www.youtube.com/watch?v=Aec0xLKzBWk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=29', tamil: 'https://youtu.be/GT4dEfksAag', type: 'video' },
                { topic: 'Quiz: CSS (30 Questions)', hindi: 'https://as-css.netlify.app', tamil: 'https://as-css.netlify.app', type: 'quiz' }
            ]
        },
        {
            id: 'bootstrap',
            name: 'Bootstrap & Projects',
            icon: 'layers',
            color: '#8b5cf6',
            week: 'Week 2',
            description: 'Bootstrap framework and portfolio project',
            lessons: [
                { topic: 'Bootstrap Tutorial', hindi: 'https://www.youtube.com/watch?v=vpAJ0s5S2t0', tamil: 'https://youtu.be/tv8ulM6y3t8', type: 'video' },
                { topic: 'Quiz: Bootstrap', hindi: 'https://as-bootstrap.netlify.app', tamil: 'https://as-bootstrap.netlify.app', type: 'quiz' },
                { topic: 'Domain & Hosting Explanation', hindi: 'https://youtu.be/jxcfx9Q7GbY?si=bmdueSFd9QQhBa94', tamil: 'https://youtu.be/jxcfx9Q7GbY', type: 'video' },
                { topic: 'Quiz: Domain & Hosting', hindi: 'https://as-domain-hosting.netlify.app', tamil: 'https://as-domain-hosting.netlify.app', type: 'quiz' }
            ]
        },
        {
            id: 'ai-tools',
            name: 'AI Tools & Canva',
            icon: 'brain',
            color: '#ec4899',
            week: 'Week 3-4',
            description: 'AI for development, Canva, Deepsite, Framer & Replit',
            lessons: [
                { topic: 'What is Artificial Intelligence', hindi: 'https://youtu.be/rJ1Qao09CFI?si=8jwPmEWuR1onHFG1', tamil: 'https://youtu.be/rJ1Qao09CFI', type: 'video' },
                { topic: 'Quiz: About AI', hindi: 'https://as-about-ai.netlify.app', tamil: 'https://as-about-ai.netlify.app', type: 'quiz' },
                { topic: 'Introduction to LLM Tools', hindi: 'https://youtu.be/uTSGHBsvplg?si=qkakpUMXuslTgqu3', tamil: 'https://youtu.be/uTSGHBsvplg', type: 'video' },
                { topic: 'Quiz: LLM Tools', hindi: 'https://as-llm-tools.netlify.app', tamil: 'https://as-llm-tools.netlify.app', type: 'quiz' },
                { topic: 'Create Websites using AI Tools', hindi: 'https://youtu.be/yGwbdTsIc8I?si=gJd0qjO_ophYKPMT', tamil: 'https://youtu.be/yGwbdTsIc8I', type: 'video' },
                { topic: 'Canva Logo Design', hindi: 'https://youtu.be/H3S0dEbR8rU?si=k1nRLeWSvFSDxYtv', tamil: 'https://youtu.be/H3S0dEbR8rU', type: 'video' },
                { topic: 'Deepsite Tutorial', hindi: 'https://youtu.be/lpQiR7kyiuI', tamil: 'https://youtu.be/lpQiR7kyiuI', type: 'video' },
                { topic: 'Framer AI', hindi: 'https://youtu.be/Bj2EQs_X578', tamil: 'https://youtu.be/Bj2EQs_X578', type: 'video' },
                { topic: 'Replit AI', hindi: 'https://youtu.be/yMdOZ0a9yHM', tamil: 'https://youtu.be/yMdOZ0a9yHM', type: 'video' },
                { topic: 'SDLC Overview', hindi: 'https://youtu.be/kSU2MPeptpM?si=pji9qaZ60RiUoXdY', tamil: 'https://youtu.be/kSU2MPeptpM', type: 'video' },
                { topic: 'Web Dev Skills 2025', hindi: 'https://youtu.be/1IVopxj8q8U', tamil: 'https://youtu.be/1IVopxj8q8U', type: 'video' },
                { topic: 'Quiz: IT Fields', hindi: 'https://as-webdev-2025.netlify.app', tamil: 'https://as-webdev-2025.netlify.app', type: 'quiz' },
                { topic: 'Cybersecurity Basics', hindi: 'https://youtu.be/iGqQahWV-xA', tamil: 'https://youtu.be/iGqQahWV-xA', type: 'video' },
                { topic: 'Ethical Hacking Intro', hindi: 'https://youtu.be/vK4Mno4QYqk?si=3hnFyzMJ5P0R3Z7D', tamil: 'https://youtu.be/vK4Mno4QYqk', type: 'video' },
                { topic: 'Cloud Computing', hindi: 'https://youtu.be/8C_kHJ5YEiA?si=r4hZhs5H_Qc33AbF', tamil: 'https://youtu.be/8C_kHJ5YEiA', type: 'video' },
                { topic: 'DevOps Overview', hindi: 'https://youtu.be/h7LDnVsNRVI?si=XZgIXvJHl-UoyVnR', tamil: 'https://youtu.be/h7LDnVsNRVI', type: 'video' }
            ]
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            icon: 'js',
            color: '#eab308',
            week: 'Week 5-8',
            description: 'Complete JavaScript from basics to async programming',
            lessons: [
                { topic: 'Introduction to JavaScript', hindi: 'https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=1', tamil: 'https://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=1', type: 'video' },
                { topic: 'Understanding Variables', hindi: 'https://www.youtube.com/watch?v=Q4p8vRQX8uY&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=2', tamil: 'https://www.youtube.com/watch?v=DBe9w9oEelA&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=2', type: 'video' },
                { topic: 'const, let, and var', hindi: 'https://www.youtube.com/watch?v=Icev9Oxf0WA&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=3', tamil: 'https://www.youtube.com/watch?v=KYxldBXRUU4&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=3', type: 'video' },
                { topic: 'Data Types: Primitives vs Objects', hindi: 'https://www.youtube.com/watch?v=qpU3WIqRz9I&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=4', tamil: 'https://www.youtube.com/watch?v=EkXutEZAocE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=4', type: 'video' },
                { topic: 'Operators and Expressions', hindi: 'https://www.youtube.com/watch?v=lsV8JQgSW1s&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=6', tamil: 'https://www.youtube.com/watch?v=GYdao3CV1DY&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=5', type: 'video' },
                { topic: 'Conditional Statements: if, else, switch', hindi: 'https://www.youtube.com/watch?v=s5Lu4QTjeL0&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=7', tamil: 'https://www.youtube.com/watch?v=GqKuUNyLyR4&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=6', type: 'video' },
                { topic: 'For Loops', hindi: 'https://www.youtube.com/watch?v=XKyyM1VWtUE&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=9', tamil: 'https://www.youtube.com/watch?v=dRp6vxlYDcQ&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=7', type: 'video' },
                { topic: 'Functions in JavaScript', hindi: 'https://www.youtube.com/watch?v=a_gwOwkbhZ0&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=11', tamil: 'https://www.youtube.com/watch?v=uVh5dvKz58k&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=8', type: 'video' },
                { topic: 'Strings in JavaScript', hindi: 'https://www.youtube.com/watch?v=Yafji9PB1lM&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=13', tamil: 'https://www.youtube.com/watch?v=9ZztZYj-fzw&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=9', type: 'video' },
                { topic: 'String Methods', hindi: 'https://www.youtube.com/watch?v=8yg4RUEnaIk&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=14', tamil: 'https://www.youtube.com/watch?v=Z5ZUZvTAVkg&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=10', type: 'video' },
                { topic: 'Arrays and Their Usage', hindi: 'https://www.youtube.com/watch?v=a_Bz5ciBHQ0&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=16', tamil: 'https://www.youtube.com/watch?v=zMyz6fx3b0Q&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=11', type: 'video' },
                { topic: 'Array Methods (Part 1)', hindi: 'https://www.youtube.com/watch?v=BLIrBThPTXc&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=17', tamil: 'https://www.youtube.com/watch?v=AV81g2I6N9k&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=12', type: 'video' },
                { topic: 'map, filter, reduce', hindi: 'https://www.youtube.com/watch?v=bAUMuuRH99o&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=20', tamil: 'https://www.youtube.com/watch?v=v1tUT4fcjaU&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=13', type: 'video' },
                { topic: 'Console Debugging', hindi: 'https://www.youtube.com/watch?v=1WNtGvrLisg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=25', tamil: 'https://www.youtube.com/watch?v=y_dx6GO3gjY&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=14', type: 'video' },
                { topic: 'alert, prompt, confirm', hindi: 'https://www.youtube.com/watch?v=540NIdeKW3I&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=27', tamil: 'https://www.youtube.com/watch?v=pH1-NkLSOcs&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=15', type: 'video' },
                { topic: 'DOM, BOM, Window Object', hindi: 'https://www.youtube.com/watch?v=xOCzjgjedRc&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=28', tamil: 'https://www.youtube.com/watch?v=7woUGy9G9DU&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=16', type: 'video' },
                { topic: 'DOM Tables', hindi: 'https://www.youtube.com/watch?v=4e5L4i-mmxg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=35', tamil: 'https://www.youtube.com/watch?v=D4zVibKLtw8&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=17', type: 'video' },
                { topic: 'innerHTML and outerHTML', hindi: 'https://www.youtube.com/watch?v=M8AUk6gDe2c&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=41', tamil: 'https://www.youtube.com/watch?v=FOTM2OGMyRw&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=18', type: 'video' },
                { topic: 'HTML Attributes', hindi: 'https://www.youtube.com/watch?v=viUbOtj2o_4&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=42', tamil: 'https://www.youtube.com/watch?v=6XEabt6lqLc&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=20', type: 'video' },
                { topic: 'Inserting DOM Elements', hindi: 'https://www.youtube.com/watch?v=wyAZuYatCOI&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=43', tamil: 'https://www.youtube.com/watch?v=gRZ8xaC5Krg&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=19', type: 'video' },
                { topic: 'setTimeout & setInterval', hindi: 'https://www.youtube.com/watch?v=Ruq4sEw9h_8&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=46', tamil: 'https://www.youtube.com/watch?v=FvRRXtBObDc&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=21', type: 'video' },
                { topic: 'Event Listeners', hindi: 'https://www.youtube.com/watch?v=rFq0HVOdDo4&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=48', tamil: 'https://www.youtube.com/watch?v=rFq0HVOdDo4&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=48', type: 'video' },
                { topic: 'Callbacks', hindi: 'https://www.youtube.com/watch?v=IJlGpI6l92U&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=52', tamil: 'https://www.youtube.com/watch?v=R8Cwf_t2s6g&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=22', type: 'video' },
                { topic: 'Promises', hindi: 'https://www.youtube.com/watch?v=Dadlf6YsTHA&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=54', tamil: 'https://www.youtube.com/watch?v=3u4khijsrKQ&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=23', type: 'video' },
                { topic: 'then() and catch()', hindi: 'https://www.youtube.com/watch?v=Fsv4IEH-4Lw&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=55', tamil: 'https://www.youtube.com/watch?v=9vopGVasGH0&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=24', type: 'video' },
                { topic: 'Async / Await', hindi: 'https://www.youtube.com/watch?v=bLre6Uf4Op0&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=59', tamil: 'https://www.youtube.com/watch?v=x8STlzGB4XU&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=25', type: 'video' },
                { topic: 'Fetch API: GET Requests', hindi: 'https://www.youtube.com/watch?v=Atq7VjVbaA8&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=66', tamil: 'https://www.youtube.com/watch?v=88Eb5Z1-FX8&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=26', type: 'video' },
                { topic: 'Fetch API: POST Requests', hindi: 'https://www.youtube.com/watch?v=57SrCBCxdgc&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=67', tamil: 'https://www.youtube.com/watch?v=GoHnJDwfATE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=27', type: 'video' },
                { topic: 'localStorage', hindi: 'https://www.youtube.com/watch?v=A98SPz5XLwY&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=69', tamil: 'https://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28', type: 'video' },
                { topic: 'Destructuring & Spread', hindi: 'https://www.youtube.com/watch?v=_BsE5kmJk6Q&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=87', tamil: 'https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29', type: 'video' },
                { topic: 'Scope: Local vs Global', hindi: 'https://www.youtube.com/watch?v=CNk33k5nScg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=88', tamil: 'https://www.youtube.com/watch?v=tMgXbOs0jLc&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=30', type: 'video' },
                { topic: 'Variable Hoisting', hindi: 'https://www.youtube.com/watch?v=_FmHfOqJ4SY&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=89', tamil: 'https://www.youtube.com/watch?v=biD_kt-ynao&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=31', type: 'video' },
                { topic: 'Closures', hindi: 'https://www.youtube.com/watch?v=Ze-JGb4I9zU&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=90', tamil: 'https://www.youtube.com/watch?v=q7XpUlkgfnY&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=32', type: 'video' },
                { topic: 'Arrow Functions', hindi: 'https://www.youtube.com/watch?v=bJKjtC9MnZ8&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=91', tamil: 'https://www.youtube.com/watch?v=sVv5agTxoUE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=33', type: 'video' },
                { topic: 'Quiz: JavaScript (20 Questions)', hindi: 'https://as-js-quiz.netlify.app/', tamil: 'https://as-js-quiz.netlify.app/', type: 'quiz' }
            ]
        },
        {
            id: 'ai-dev-tools',
            name: 'AI Dev Tools',
            icon: 'brain',
            color: '#a855f7',
            week: 'Week 9',
            description: 'Copilot, Claude AI, Cursor AI for coding',
            lessons: [
                { topic: 'GitHub Copilot in VS Code', hindi: 'https://youtu.be/X_Aet9ndh_Y?si=xR_Nrj2THU_eL4oB', tamil: 'https://youtu.be/pExQHYRxFQo', type: 'video' },
                { topic: 'Claude AI Introduction', hindi: 'https://youtu.be/gNR3XI5Eb0k?si=0stHK--pCICuVwjI', tamil: 'https://youtu.be/jkr5NzQrEDY', type: 'video' },
                { topic: 'Cursor AI Introduction', hindi: 'https://youtu.be/rwxRoYzwkyM?si=_OZ9PajRJLzpca-I', tamil: 'https://youtu.be/HxKC3zXWwzs', type: 'video' }
            ]
        },
        {
            id: 'git-oops-sql',
            name: 'Git, OOPs & SQL',
            icon: 'git',
            color: '#f43f5e',
            week: 'Week 9',
            description: 'Version control, OOP concepts and SQL database',
            lessons: [
                { topic: 'Git Commands', hindi: 'https://www.youtube.com/watch?v=gwWKnnCMQ5c', tamil: 'https://youtu.be/VIBWdLLq9kQ', type: 'video' },
                { topic: 'OOPs Concepts', hindi: 'https://www.youtube.com/watch?v=cdCkwcYKk2o', tamil: 'https://youtu.be/IEYUcGwPpEQ', type: 'video' },
                { topic: 'MySQL / SQL', hindi: 'https://www.youtube.com/watch?v=hlGoQC332VM', tamil: 'https://youtu.be/QvTo1_-n0UE?list=PLvepBxfiuao2y4Pgdfregh7hOpxaJ5oxd', type: 'video' }
            ]
        },
        {
            id: 'react',
            name: 'React JS',
            icon: 'react',
            color: '#06b6d4',
            week: 'Week 10-13',
            description: 'Build modern UIs with React, Redux Toolkit & Saga',
            lessons: [
                { topic: 'Introduction to React', hindi: 'https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ', tamil: 'https://www.youtube.com/watch?v=UYFtY7Acngw&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=1', type: 'video' },
                { topic: 'Prerequisites for React', hindi: 'https://www.youtube.com/watch?v=UUEJ-AnM_E8&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=2', tamil: 'https://www.youtube.com/watch?v=SAUBFF4e50k&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=2', type: 'video' },
                { topic: 'React Environment Setup', hindi: 'https://www.youtube.com/watch?v=tg73NsiQOUE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=4', tamil: 'https://www.youtube.com/watch?v=-kGdnjwTQww&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=3', type: 'video' },
                { topic: 'Hello World & Folder Structure', hindi: 'https://www.youtube.com/watch?v=Y2pA6pz-ffM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=6', tamil: 'https://www.youtube.com/watch?v=c1KKItIY8tg&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=4', type: 'video' },
                { topic: 'JSX in React', hindi: 'https://www.youtube.com/watch?v=p9m_v9OxfAM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=7', tamil: 'https://www.youtube.com/watch?v=ODcSDqr9nDM&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=5', type: 'video' },
                { topic: 'JS Expressions in JSX', hindi: 'https://www.youtube.com/watch?v=LBpUF-OppB4&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=11', tamil: 'https://www.youtube.com/watch?v=8Viv14aUQfY&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=6', type: 'video' },
                { topic: 'Functional Components', hindi: 'https://www.youtube.com/watch?v=YcXVT2udeu8&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=19', tamil: 'https://www.youtube.com/watch?v=_0b9h0IKnA0&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=7', type: 'video' },
                { topic: 'ES6 Import/Export', hindi: 'https://www.youtube.com/watch?v=b7JJCGXlACM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=21', tamil: 'https://www.youtube.com/watch?v=d4hjjP6Hbqg&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=8', type: 'video' },
                { topic: 'Props in React', hindi: 'https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=23', tamil: 'https://www.youtube.com/watch?v=R0chQjbH6vw&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=9', type: 'video' },
                { topic: 'Arrays & Map in React', hindi: 'https://www.youtube.com/watch?v=2OQOm7dIrqA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25', tamil: 'https://www.youtube.com/watch?v=oSmvHbnPCHA&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=10', type: 'video' },
                { topic: 'React DevTools & Debugging', hindi: 'https://www.youtube.com/watch?v=EG0LhIfmUSo&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=28', tamil: 'https://www.youtube.com/watch?v=H8M9K-UVfsU&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=13', type: 'video' },
                { topic: 'Conditional Rendering', hindi: 'https://www.youtube.com/watch?v=KwVokrPGjYo&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=29', tamil: 'https://www.youtube.com/watch?v=V8JYYvF7EcI&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=14', type: 'video' },
                { topic: 'Hooks in React (useState)', hindi: 'https://www.youtube.com/watch?v=SS1I7m-G2kk&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=33', tamil: 'https://www.youtube.com/watch?v=zSGbY6yxxqA&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=16', type: 'video' },
                { topic: 'Event Handling', hindi: 'https://www.youtube.com/watch?v=smRtYZHv8Bk&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=36', tamil: 'https://www.youtube.com/watch?v=SgmX0arGOfc&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=17', type: 'video' },
                { topic: 'Forms in React', hindi: 'https://www.youtube.com/watch?v=c0fcKnSwbfo&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=37', tamil: 'https://www.youtube.com/watch?v=3nrHzlf9lWo&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=18', type: 'video' },
                { topic: 'Login Form Submit', hindi: 'https://www.youtube.com/watch?v=C2IVQFGobA0&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=38', tamil: 'https://www.youtube.com/watch?v=zHqjYRtN0OA&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=19', type: 'video' },
                { topic: 'Context API', hindi: 'https://www.youtube.com/watch?v=EynAnD8nDfc&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=55', tamil: 'https://www.youtube.com/watch?v=KBeFeGg3PEo&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=22', type: 'video' },
                { topic: 'useEffect Hook', hindi: 'https://www.youtube.com/watch?v=ZbUcN0LBqwY&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=57', tamil: 'https://www.youtube.com/watch?v=zxZiZfb8GWo&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=24', type: 'video' },
                { topic: 'API Calls with Axios', hindi: 'https://www.youtube.com/watch?v=FhBWK4NZeLQ&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=60', tamil: 'https://www.youtube.com/watch?v=rfSNiDErYyY&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=25', type: 'video' },
                { topic: 'React Router', hindi: 'https://www.youtube.com/watch?v=1N_Vh0bRK3c&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=61', tamil: 'https://www.youtube.com/watch?v=ez6dGvx4tBU&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=26', type: 'video' },
                { topic: 'React Navbar with Router', hindi: 'https://www.youtube.com/watch?v=D58Lwdd0-xw&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=62', tamil: 'https://www.youtube.com/watch?v=QkJThGZcNkM&list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&index=27', type: 'video' },
                { topic: 'Redux Toolkit Intro', hindi: 'https://www.youtube.com/watch?v=DXlnr7rDDR0&list=PLwGdqUZWnOp2nz2T6SfWX9t6D6SYn3XlN', tamil: 'https://www.youtube.com/watch?v=DXlnr7rDDR0', type: 'video' },
                { topic: 'createSlice Method', hindi: 'https://www.youtube.com/watch?v=jSuB8elMLJA&list=PLwGdqUZWnOp2nz2T6SfWX9t6D6SYn3XlN&index=3', tamil: 'https://www.youtube.com/watch?v=jSuB8elMLJA', type: 'video' },
                { topic: 'useDispatch & useSelector', hindi: 'https://www.youtube.com/watch?v=0LePYfbkvXk&list=PLwGdqUZWnOp2nz2T6SfWX9t6D6SYn3XlN&index=6', tamil: 'https://www.youtube.com/watch?v=0LePYfbkvXk', type: 'video' },
                { topic: 'Quiz: React JS (20 Questions)', hindi: 'https://as-react-quiz.netlify.app/', tamil: 'https://as-react-quiz.netlify.app/', type: 'quiz' },
                { topic: 'React Project with Cursor AI', hindi: 'https://youtu.be/IJ7vnQGAQto?si=V1u-PYEZTe6pkjas', tamil: 'https://youtu.be/IJ7vnQGAQto', type: 'video' }
            ]
        },
        {
            id: 'python',
            name: 'Python',
            icon: 'python',
            color: '#1d4ed8',
            week: 'Week 14-16',
            description: 'Complete Python programming from basics to advanced',
            lessons: [
                { topic: 'Introduction to Python', hindi: 'https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=1', tamil: 'https://www.youtube.com/watch?v=BVIoAILnZ4Q&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=1', type: 'video' },
                { topic: 'Amazing Python Programs', hindi: 'https://www.youtube.com/watch?v=Tto8TS-fJQU&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=2', tamil: 'https://www.youtube.com/watch?v=Rtmgt2Qfqr4&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=2', type: 'video' },
                { topic: 'Modules and Pip', hindi: 'https://www.youtube.com/watch?v=xwKO_y2gHxQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=3', tamil: 'https://www.youtube.com/watch?v=rqkkd-h087A&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=3', type: 'video' },
                { topic: 'First Python Program', hindi: 'https://www.youtube.com/watch?v=7IWOYhfAcVg&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=4', tamil: 'https://www.youtube.com/watch?v=eYtf9a8LoIg&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=4', type: 'video' },
                { topic: 'Comments & Print Statement', hindi: 'https://www.youtube.com/watch?v=qxPMmW93eDs&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=5', tamil: 'https://www.youtube.com/watch?v=TQTnqQ6CypM&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=5', type: 'video' },
                { topic: 'Variables and Data Types', hindi: 'https://www.youtube.com/watch?v=ORCuz7s5cCY&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=6', tamil: 'https://www.youtube.com/watch?v=KYmMV9tABjU&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=6', type: 'video' },
                { topic: 'Calculator Exercise', hindi: 'https://www.youtube.com/watch?v=FLVqcxnJP_E&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=7', tamil: 'https://www.youtube.com/watch?v=hqD4pfTPAMk&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=7', type: 'video' },
                { topic: 'Typecasting', hindi: 'https://www.youtube.com/watch?v=Pu5bqySSSS0&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=9', tamil: 'https://www.youtube.com/watch?v=WMh9yACCYwI&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=9', type: 'video' },
                { topic: 'User Input', hindi: 'https://www.youtube.com/watch?v=WvG-R-xXouA&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=10', tamil: 'https://www.youtube.com/watch?v=ChMbB1TC0BE&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=10', type: 'video' },
                { topic: 'Strings in Python', hindi: 'https://www.youtube.com/watch?v=kMNFQYArrLg&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=11', tamil: 'https://www.youtube.com/watch?v=wuKfqoPsf7E&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=11', type: 'video' },
                { topic: 'String Slicing & Operations', hindi: 'https://www.youtube.com/watch?v=8jW7lpT8HW8&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=12', tamil: 'https://www.youtube.com/watch?v=Np3fzqoaYQw&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=12', type: 'video' },
                { topic: 'If-Else Statements', hindi: 'https://www.youtube.com/watch?v=ceiuLR2ysas&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=14', tamil: 'https://www.youtube.com/watch?v=Gb1oZy6kAWA&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=14', type: 'video' },
                { topic: 'For Loops', hindi: 'https://www.youtube.com/watch?v=fIYVzKp0q5w&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=17', tamil: 'https://www.youtube.com/watch?v=K3HD0gJXJYQ&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=17', type: 'video' },
                { topic: 'While Loops', hindi: 'https://www.youtube.com/watch?v=-tCFyIyKVx0&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=18', tamil: 'https://www.youtube.com/watch?v=PJxwAJdWpVY&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=18', type: 'video' },
                { topic: 'Functions in Python', hindi: 'https://www.youtube.com/watch?v=dyvxxJSGUsE&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=20', tamil: 'https://www.youtube.com/watch?v=5AKE_lm_XTI&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=20', type: 'video' },
                { topic: 'Lists in Python', hindi: 'https://www.youtube.com/watch?v=eF6nK5bSlmg&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=22', tamil: 'https://www.youtube.com/watch?v=tEzYlonaKYs&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=22', type: 'video' },
                { topic: 'Tuples in Python', hindi: 'https://www.youtube.com/watch?v=PipsOUDKrVk&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=24', tamil: 'https://www.youtube.com/watch?v=OFjHWCdCCcs&list=PLvepBxfiuao1hO1vPOskQ1X4dbjGXF9bm&index=24', type: 'video' },
                { topic: 'Exception Handling', hindi: 'https://www.youtube.com/watch?v=4LKo6dlku7M&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=36', tamil: 'https://www.youtube.com/watch?v=4LKo6dlku7M', type: 'video' },
                { topic: 'OOP: Classes & Objects', hindi: 'https://www.youtube.com/watch?v=a7baAGCBA9U&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=57', tamil: 'https://www.youtube.com/watch?v=a7baAGCBA9U', type: 'video' },
                { topic: 'Inheritance', hindi: 'https://www.youtube.com/watch?v=-KsfUaQEY9Y&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=61', tamil: 'https://www.youtube.com/watch?v=-KsfUaQEY9Y', type: 'video' },
                { topic: 'Decorators', hindi: 'https://www.youtube.com/watch?v=PTBZ674EsvI&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=59', tamil: 'https://www.youtube.com/watch?v=PTBZ674EsvI', type: 'video' },
                { topic: 'Lambda, Map, Filter, Reduce', hindi: 'https://www.youtube.com/watch?v=OErhjT4f5Cs&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=53', tamil: 'https://www.youtube.com/watch?v=OErhjT4f5Cs', type: 'video' },
                { topic: 'File I/O', hindi: 'https://www.youtube.com/watch?v=eDBPlcWYses&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=49', tamil: 'https://www.youtube.com/watch?v=eDBPlcWYses', type: 'video' },
                { topic: 'Regex', hindi: 'https://www.youtube.com/watch?v=TCWOwavqFrw&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=95', tamil: 'https://www.youtube.com/watch?v=TCWOwavqFrw', type: 'video' },
                { topic: 'Async IO', hindi: 'https://www.youtube.com/watch?v=lgoB3_-ejnI&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=96', tamil: 'https://www.youtube.com/watch?v=lgoB3_-ejnI', type: 'video' },
                { topic: 'Multithreading', hindi: 'https://www.youtube.com/watch?v=ICbU6zAKtqQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&index=97', tamil: 'https://www.youtube.com/watch?v=ICbU6zAKtqQ', type: 'video' },
                { topic: 'Quiz: Python (20 Questions)', hindi: 'https://as-python-quiz.netlify.app/', tamil: 'https://as-python-quiz.netlify.app/', type: 'quiz' }
            ]
        }
    ];

    /* ============================================================
       STATE
    ============================================================ */
    const STORAGE_KEY = 'skillforge_course_v2';
    function defaultState() {
        return {
            lang: 'hindi', theme: 'light',
            completedLessons: {}, // { "module-id": [0,1,2,...] }
            currentModule: 0, currentLesson: 0,
            lastActivity: null
        };
    }
    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return Object.assign(defaultState(), JSON.parse(raw));
        } catch (e) { }
        return defaultState();
    }
    function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    let state = loadState();

    let currentPage = 'dashboard';

    /* ============================================================
       HELPERS
    ============================================================ */
    function getYouTubeId(url) {
        if (!url) return null;
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&?\s#]+)/);
        return match ? match[1] : null;
    }
    function isYouTubeUrl(url) { return !!getYouTubeId(url); }
    function getModuleProgress(modId) {
        const mod = COURSE_MODULES.find(m => m.id === modId);
        if (!mod) return 0;
        const completed = (state.completedLessons[modId] || []).length;
        return Math.round((completed / mod.lessons.length) * 100);
    }
    function getTotalLessons() { return COURSE_MODULES.reduce((s, m) => s + m.lessons.length, 0); }
    function getTotalCompleted() {
        let n = 0;
        COURSE_MODULES.forEach(m => { n += (state.completedLessons[m.id] || []).length; });
        return n;
    }
    function showToast(msg, type) {
        const c = document.getElementById('toast-container');
        const t = document.createElement('div');
        t.className = 'toast toast-' + (type || 'info');
        t.textContent = msg;
        c.appendChild(t);
        requestAnimationFrame(() => t.classList.add('show'));
        setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
    }

    /* ============================================================
       NAVIGATION
    ============================================================ */
    function updateMobileNavProgress() {
        const total = getTotalLessons(), done = getTotalCompleted();
        const pct = total ? Math.round(done / total * 100) : 0;
        const fill = document.getElementById('mnp-fill');
        const pctEl = document.getElementById('mnp-pct');
        const countEl = document.getElementById('mnp-count');
        if (fill) fill.style.width = pct + '%';
        if (pctEl) pctEl.textContent = pct + '%';
        if (countEl) countEl.textContent = done + ' of ' + total + ' lessons completed';
    }

    function openCourseDrawer() {
        const sb = document.getElementById('course-sidebar');
        const ov = document.getElementById('course-sidebar-overlay');
        if (sb) sb.classList.add('mobile-open');
        if (ov) ov.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (sb) {
                const active = sb.querySelector('.sidebar-lesson.active');
                if (active) active.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }, 150);
    }
    function closeCourseDrawer() {
        const sb = document.getElementById('course-sidebar');
        const ov = document.getElementById('course-sidebar-overlay');
        if (sb) sb.classList.remove('mobile-open');
        if (ov) ov.classList.remove('open');
        document.body.style.overflow = '';
    }
    function toggleCourseDrawer() {
        const sb = document.getElementById('course-sidebar');
        if (sb && sb.classList.contains('mobile-open')) closeCourseDrawer();
        else openCourseDrawer();
    }

    function navigate(page, params) {
        params = params || {};
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById('page-' + page);
        if (target) target.classList.add('active');
        document.querySelectorAll('[data-page]').forEach(el => {
            el.classList.toggle('active-link', el.dataset.page === page);
        });
        if (currentPage === 'about' && page !== 'about') {
            pauseAboutVideo();
        }
        currentPage = page;
        closeMobileMenu();
        closeCourseDrawer();
        updateMobileNavProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        switch (page) {
            case 'dashboard': renderDashboard(); break;
            case 'course': renderCourse(params.moduleIdx, params.lessonIdx); break;
            case 'curriculum': renderCurriculum(); break;
            case 'about': renderAbout(params); break;
        }
    }

    /* ============================================================
       RENDER: DASHBOARD
    ============================================================ */
    function renderDashboard() {
        const total = getTotalLessons(), done = getTotalCompleted();
        const pct = total ? Math.round(done / total * 100) : 0;
        document.getElementById('dashboard-stats').innerHTML = [
            statCard('layers', 'Total Lessons', total, 'purple'),
            statCard('check-circle', 'Completed', done, 'green'),
            statCard('bar-chart', 'Progress', pct + '%', 'orange'),
            statCard('flame', 'Modules', COURSE_MODULES.length, 'cyan')
        ].join('');
        document.getElementById('module-cards').innerHTML = COURSE_MODULES.map((m, i) => {
            const p = getModuleProgress(m.id);
            const completed = (state.completedLessons[m.id] || []).length;
            return '<div class="module-card" data-action="open-module" data-idx="' + i + '">' +
                '<div class="mc-icon" style="background:' + m.color + '15;color:' + m.color + '">' + icon(m.icon) + '</div>' +
                '<div class="mc-content">' +
                '<h3>' + m.name + '</h3>' +
                '<p>' + m.description + '</p>' +
                '<div class="mc-meta">' +
                '<span>' + icon('clock') + ' ' + m.week + '</span>' +
                '<span>' + icon('play') + ' ' + m.lessons.length + ' lessons</span>' +
                '<span>' + icon('check-circle') + ' ' + completed + ' done</span>' +
                '</div>' +
                '<div class="mc-progress"><div class="progress-track"><div class="progress-fill" style="width:' + p + '%"></div></div></div>' +
                '</div>' +
                '</div>';
        }).join('');
    }
    function statCard(ic, label, value, colorClass) {
        return '<div class="stat-card"><div class="stat-icon ' + colorClass + '">' + icon(ic) + '</div><div><div class="stat-value">' + value + '</div><div class="stat-label">' + label + '</div></div></div>';
    }

    /* ============================================================
       RENDER: COURSE (VIDEO PLAYER)
    ============================================================ */
    function renderCourse(modIdx, lessonIdx) {
        if (modIdx === undefined) modIdx = state.currentModule;
        if (lessonIdx === undefined) lessonIdx = state.currentLesson;
        modIdx = parseInt(modIdx) || 0;
        lessonIdx = parseInt(lessonIdx) || 0;
        if (modIdx >= COURSE_MODULES.length) modIdx = 0;
        const mod = COURSE_MODULES[modIdx];
        if (lessonIdx >= mod.lessons.length) lessonIdx = 0;
        state.currentModule = modIdx;
        state.currentLesson = lessonIdx;
        saveState();
        updateMobileNavProgress();

        // Sidebar HTML with mobile drawer header
        const sidebar = document.getElementById('course-sidebar');
        const drawerHeader = '<div class="sidebar-drawer-header">' +
            '<div style="display:flex;align-items:center;gap:10px;">' +
            '<span style="font-size:1.15rem;">📚</span>' +
            '<div><div style="font-size:.86rem;font-weight:800;color:var(--navy);">Course Curriculum</div><div style="font-size:.7rem;color:var(--slate-500);">11 Modules • 160 Lessons</div></div>' +
            '</div>' +
            '<button class="icon-btn" data-action="close-course-drawer" aria-label="Close menu">' + icon('x') + '</button>' +
            '</div>';

        sidebar.innerHTML = drawerHeader + COURSE_MODULES.map((m, mi) => {
            const isOpen = mi === modIdx;
            const prog = getModuleProgress(m.id);
            const completedArr = state.completedLessons[m.id] || [];
            return '<div class="sidebar-module">' +
                '<button class="sidebar-module-header' + (isOpen ? ' active' : '') + '" data-action="toggle-module" data-idx="' + mi + '">' +
                '<div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">' +
                '<div class="module-icon" style="background:' + m.color + '15;color:' + m.color + '">' + icon(m.icon) + '</div>' +
                '<div style="flex:1;min-width:0;">' +
                '<div style="font-size:.82rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + m.name + '</div>' +
                '<div class="module-progress-bar"><div class="module-progress-fill" style="width:' + prog + '%"></div></div>' +
                '</div>' +
                '</div>' +
                '<span style="transform:rotate(' + (isOpen ? '180' : '0') + 'deg);transition:transform .2s;">' + icon('chevron-down') + '</span>' +
                '</button>' +
                '<div class="sidebar-lessons' + (isOpen ? ' open' : '') + '">' +
                m.lessons.map((l, li) => {
                    const isDone = completedArr.includes(li);
                    const isActive = mi === modIdx && li === lessonIdx;
                    return '<button class="sidebar-lesson' + (isActive ? ' active' : '') + (isDone ? ' completed' : '') + '" data-action="select-lesson" data-mod="' + mi + '" data-lesson="' + li + '">' +
                        '<span class="lesson-num">' + (isDone ? '✓' : (li + 1)) + '</span>' +
                        '<span class="lesson-title-text">' + (l.type === 'quiz' ? '📝 ' : '') + l.topic + '</span>' +
                        '</button>';
                }).join('') +
                '</div>' +
                '</div>';
        }).join('');

        // Main area
        const lesson = mod.lessons[lessonIdx];
        const url = lesson[state.lang] || lesson.hindi;
        const ytId = getYouTubeId(url);
        const completedArr = state.completedLessons[mod.id] || [];
        const isDone = completedArr.includes(lessonIdx);
        const isQuiz = lesson.type === 'quiz';

        // Mobile quick selector bar
        const mobileBarHTML = '<div class="mobile-course-bar">' +
            '<button class="mcb-btn" data-action="open-course-drawer">' +
            '<div class="mcb-left">' +
            '<span class="mcb-icon">' + icon('layers') + '</span>' +
            '<div class="mcb-text">' +
            '<span class="mcb-tag">' + mod.name + ' • Lesson ' + (lessonIdx + 1) + '/' + mod.lessons.length + '</span>' +
            '<span class="mcb-title">' + (lesson.type === 'quiz' ? '📝 ' : '') + lesson.topic + '</span>' +
            '</div>' +
            '</div>' +
            '<span class="mcb-arrow">' + icon('chevron-right') + ' 160 Lessons</span>' +
            '</button>' +
            '</div>';

        let videoHTML;
        if (isQuiz) {
            videoHTML = '<div class="video-container" style="background:linear-gradient(135deg,#1e1b4b,#312e81);display:flex;align-items:center;justify-content:center;">' +
                '<div style="text-align:center;color:#fff;padding:clamp(20px, 4vw, 36px);">' +
                '<div style="font-size:2.8rem;margin-bottom:12px;">📝</div>' +
                '<h3 style="font-size:clamp(1.1rem, 3.5vw, 1.35rem);font-weight:800;margin-bottom:8px;">' + lesson.topic + '</h3>' +
                '<p style="opacity:.75;margin-bottom:20px;font-size:.88rem;">Interactive quiz for ' + mod.name + '. Test your understanding!</p>' +
                '<a href="' + url + '" target="_blank" rel="noopener" class="btn btn-primary btn-lg" style="text-decoration:none;">Open Quiz in New Tab ' + icon('external-link') + '</a>' +
                '</div>' +
                '</div>';
        } else if (ytId) {
            videoHTML = '<div class="video-container"><iframe src="https://www.youtube.com/embed/' + ytId + '?rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" title="' + lesson.topic + '"></iframe></div>';
        } else if (url && url.startsWith('http')) {
            videoHTML = '<div class="video-container" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e);">' +
                '<div style="text-align:center;color:#fff;padding:24px;">' +
                '<h3 style="font-size:1.2rem;font-weight:700;margin-bottom:12px;">' + lesson.topic + '</h3>' +
                '<a href="' + url + '" target="_blank" rel="noopener" class="btn btn-primary" style="text-decoration:none;">Open Resource ' + icon('external-link') + '</a>' +
                '</div>' +
                '</div>';
        } else {
            videoHTML = '<div class="video-container"><div class="video-placeholder"><div class="play-icon">' + icon('play') + '</div><h3>' + lesson.topic + '</h3><p>Hands-on project or practical task. Follow along and code!</p></div></div>';
        }

        const hasPrev = lessonIdx > 0 || modIdx > 0;
        const hasNext = lessonIdx < mod.lessons.length - 1 || modIdx < COURSE_MODULES.length - 1;

        // Upcoming lessons in this module
        const remainingLessons = mod.lessons.map((l, li) => ({ lesson: l, idx: li })).filter(item => item.idx > lessonIdx).slice(0, 3);
        let upNextHTML = '';
        if (remainingLessons.length > 0) {
            upNextHTML = '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">' +
                '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
                '<span style="font-size:.75rem;font-weight:700;color:var(--slate-500);text-transform:uppercase;letter-spacing:.04em;">Up Next in this Module</span>' +
                '<button class="btn btn-ghost btn-sm" data-action="open-course-drawer" style="font-size:.76rem;padding:4px 8px;min-height:30px;">All Lessons (' + mod.lessons.length + ') ▾</button>' +
                '</div>' +
                '<div style="display:flex;flex-direction:column;gap:6px;">' +
                remainingLessons.map(item => {
                    const isItemDone = completedArr.includes(item.idx);
                    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;background:var(--slate-100);cursor:pointer;transition:all var(--transition);" data-action="select-lesson" data-mod="' + modIdx + '" data-lesson="' + item.idx + '">' +
                        '<span style="width:22px;height:22px;border-radius:50%;background:var(--slate-200);color:var(--slate-600);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;flex-shrink:0;">' + (item.idx + 1) + '</span>' +
                        '<span style="flex:1;font-size:.82rem;font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + (item.lesson.type === 'quiz' ? '📝 ' : '') + item.lesson.topic + '</span>' +
                        (isItemDone ? '<span style="color:var(--success);font-size:.75rem;font-weight:700;">✓ Done</span>' : '<span style="font-size:.72rem;color:var(--primary);font-weight:600;">Play →</span>') +
                        '</div>';
                }).join('') +
                '</div>' +
                '</div>';
        }

        document.getElementById('course-main').innerHTML = mobileBarHTML + videoHTML +
            '<div class="lesson-info">' +
            '<h2>' + lesson.topic + '</h2>' +
            '<div class="lesson-meta">' +
            '<span class="meta-chip" style="background:' + mod.color + '15;color:' + mod.color + '">' + icon(mod.icon) + ' ' + mod.name + '</span>' +
            '<span class="meta-chip"><span class="week-badge">' + mod.week + '</span></span>' +
            '<span class="meta-chip">' + icon('play') + ' Lesson ' + (lessonIdx + 1) + '/' + mod.lessons.length + '</span>' +
            '<span class="meta-chip">🌐 ' + (state.lang === 'hindi' ? 'Hindi (हिन्दी)' : 'Tamil (தமிழ்)') + '</span>' +
            '</div>' +
            '<div class="lesson-actions">' +
            (isDone ?
                '<button class="btn btn-secondary" disabled>' + icon('check-circle') + ' Completed</button>' :
                '<button class="btn btn-primary" data-action="mark-complete" data-mod="' + modIdx + '" data-lesson="' + lessonIdx + '">' + icon('check') + ' Mark as Complete</button>'
            ) +
            (url && url.startsWith('http') ? '<a href="' + url + '" target="_blank" rel="noopener" class="btn btn-outline" style="text-decoration:none;">' + icon('external-link') + ' Open in YouTube</a>' : '') +
            '</div>' +
            '<div class="lesson-nav">' +
            (hasPrev ? '<button class="btn btn-ghost" data-action="prev-lesson">' + icon('arrow-left') + ' Previous</button>' : '<span></span>') +
            (hasNext ? '<button class="btn btn-primary btn-sm" data-action="next-lesson">Next Lesson ' + icon('arrow-right') + '</button>' : '<span></span>') +
            '</div>' +
            upNextHTML +
            '</div>';
    }

    /* ============================================================
       RENDER: CURRICULUM
    ============================================================ */
    function renderCurriculum() {
        document.getElementById('curriculum-content').innerHTML = COURSE_MODULES.map((m, mi) => {
            const prog = getModuleProgress(m.id);
            const completedArr = state.completedLessons[m.id] || [];
            return '<div class="welcome-card" style="margin-bottom:18px;">' +
                '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">' +
                '<div class="mc-icon" style="background:' + m.color + '15;color:' + m.color + ';width:44px;height:44px;border-radius:12px;">' + icon(m.icon) + '</div>' +
                '<div style="flex:1;min-width:0;">' +
                '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">' +
                '<h3 style="font-size:clamp(1rem,2.8vw,1.15rem);font-weight:800;">' + m.name + '</h3>' +
                '<span class="week-badge">' + m.week + '</span>' +
                '<span style="font-size:.75rem;color:var(--slate-500);font-weight:600;">' + completedArr.length + '/' + m.lessons.length + ' done</span>' +
                '</div>' +
                '<div class="progress-track" style="height:4px;margin-top:6px;"><div class="progress-fill" style="width:' + prog + '%"></div></div>' +
                '</div>' +
                '</div>' +
                '<div style="display:flex;flex-direction:column;gap:6px;">' +
                m.lessons.map((l, li) => {
                    const isDone = completedArr.includes(li);
                    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;transition:background .2s;cursor:pointer;min-height:44px;' + (isDone ? 'background:var(--success-light);' : 'background:var(--slate-100);') + '" data-action="goto-lesson" data-mod="' + mi + '" data-lesson="' + li + '">' +
                        '<span style="width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0;' + (isDone ? 'background:var(--success);color:#fff;' : 'background:var(--slate-200);color:var(--slate-500);') + '">' + (isDone ? '✓' : (li + 1)) + '</span>' +
                        '<span style="flex:1;font-size:clamp(.8rem,2vw,.86rem);font-weight:600;min-width:0;line-height:1.35;' + (isDone ? 'color:var(--success);' : '') + '">' + l.topic + '</span>' +
                        '<span style="font-size:.68rem;font-weight:600;padding:3px 8px;border-radius:6px;flex-shrink:0;background:' + (l.type === 'quiz' ? 'var(--warning-light);color:var(--warning);' : 'var(--primary-light);color:var(--primary);') + '">' + (l.type === 'quiz' ? 'Quiz' : 'Video') + '</span>' +
                        '</div>';
                }).join('') +
                '</div>' +
                '</div>';
        }).join('');
    }

    /* ============================================================
       RENDER: ABOUT US & CINEMA VIDEO PLAYER
    ============================================================ */
    let aboutVideoInitialized = false;

    function pauseAboutVideo() {
        const vid = document.getElementById('about-video-element');
        if (vid && !vid.paused) {
            vid.pause();
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function initAboutVideoPlayer() {
        if (aboutVideoInitialized) return;
        aboutVideoInitialized = true;

        const video = document.getElementById('about-video-element');
        const bigPlayBtn = document.getElementById('about-big-play-btn');
        const playBtn = document.getElementById('vc-play-btn');
        const rewindBtn = document.getElementById('vc-rewind-btn');
        const fwdBtn = document.getElementById('vc-forward-btn');
        const progressContainer = document.getElementById('video-progress-container');
        const progressFill = document.getElementById('video-progress-fill');
        const progressHandle = document.getElementById('video-progress-handle');
        const timeCurrent = document.getElementById('vc-time-current');
        const timeDuration = document.getElementById('vc-time-duration');
        const volBtn = document.getElementById('vc-volume-btn');
        const volRange = document.getElementById('vc-volume-range');
        const speedSelect = document.getElementById('vc-playback-rate');
        const fsBtn = document.getElementById('vc-fullscreen-btn');
        const videoWrapper = document.getElementById('about-video-wrapper');
        const jumpToVideoBtn = document.getElementById('btn-jump-to-video');

        if (!video) return;

        if (videoWrapper) videoWrapper.classList.add('is-paused');
        updatePlayPauseUI(false);

        let hideControlsTimeout = null;
        function showControlsTemporarily() {
            if (!videoWrapper) return;
            videoWrapper.classList.add('show-controls');
            if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
            if (!video.paused && !video.ended) {
                hideControlsTimeout = setTimeout(function () {
                    videoWrapper.classList.remove('show-controls');
                }, 2800);
            }
        }

        if (videoWrapper) {
            videoWrapper.addEventListener('mousemove', showControlsTemporarily);
            videoWrapper.addEventListener('touchstart', function () {
                showControlsTemporarily();
            }, { passive: true });
        }

        function updatePlayPauseUI(isPlaying) {
            if (bigPlayBtn) {
                bigPlayBtn.classList.toggle('playing', isPlaying);
                bigPlayBtn.style.display = isPlaying ? 'none' : 'flex';
            }
            if (videoWrapper) {
                videoWrapper.classList.toggle('is-playing', isPlaying);
                videoWrapper.classList.toggle('is-paused', !isPlaying);
            }
            if (playBtn) {
                playBtn.innerHTML = isPlaying
                    ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
                    : '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>';
            }
        }

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play().catch(function (err) {
                    console.log('Video autoplay prevented:', err);
                });
            } else {
                video.pause();
            }
        }

        if (bigPlayBtn) bigPlayBtn.addEventListener('click', togglePlay);
        if (playBtn) playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', function (e) {
            // On desktop click toggles play; on mobile tap shows controls if hidden
            if (videoWrapper && !videoWrapper.classList.contains('show-controls') && !video.paused) {
                showControlsTemporarily();
            } else {
                togglePlay();
            }
        });

        // Double-tap to seek on touch screens (Mobile YouTube style)
        let lastTapTime = 0;
        video.addEventListener('touchend', function (e) {
            const currentTime = new Date().getTime();
            const tapGap = currentTime - lastTapTime;
            const touch = e.changedTouches ? e.changedTouches[0] : null;
            if (touch && tapGap < 340 && tapGap > 0) {
                const rect = video.getBoundingClientRect();
                const tapX = touch.clientX - rect.left;
                if (tapX < rect.width * 0.42) {
                    video.currentTime = Math.max(0, video.currentTime - 10);
                    showToast('⏪ Rewound 10s', 'info');
                    if (e.cancelable) e.preventDefault();
                } else if (tapX > rect.width * 0.58) {
                    if (video.duration) {
                        video.currentTime = Math.min(video.duration, video.currentTime + 10);
                    } else {
                        video.currentTime += 10;
                    }
                    showToast('⏩ Forwarded 10s', 'info');
                    if (e.cancelable) e.preventDefault();
                }
            }
            lastTapTime = currentTime;
        });

        video.addEventListener('play', function () {
            updatePlayPauseUI(true);
            if (videoWrapper) {
                videoWrapper.classList.remove('is-paused');
            }
            showControlsTemporarily();
        });

        video.addEventListener('pause', function () {
            updatePlayPauseUI(false);
            if (videoWrapper) {
                videoWrapper.classList.add('is-paused');
                videoWrapper.classList.add('show-controls');
            }
            if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
        });

        video.addEventListener('ended', function () {
            updatePlayPauseUI(false);
            if (videoWrapper) {
                videoWrapper.classList.add('is-paused');
                videoWrapper.classList.add('show-controls');
            }
            if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
            if (progressFill) progressFill.style.width = '100%';
            if (progressHandle) progressHandle.style.left = '100%';
        });

        // Time update & Scrubber
        video.addEventListener('timeupdate', function () {
            if (!video.duration) return;
            const pct = (video.currentTime / video.duration) * 100;
            if (progressFill) progressFill.style.width = pct + '%';
            if (progressHandle) progressHandle.style.left = pct + '%';
            if (timeCurrent) timeCurrent.textContent = formatTime(video.currentTime);
            if (timeDuration && !isNaN(video.duration)) timeDuration.textContent = formatTime(video.duration);
            if (progressContainer) progressContainer.setAttribute('aria-valuenow', Math.round(pct));
        });

        video.addEventListener('loadedmetadata', function () {
            if (timeDuration && !isNaN(video.duration)) {
                timeDuration.textContent = formatTime(video.duration);
            }
        });

        // Seeking
        if (progressContainer) {
            function seek(e) {
                const rect = progressContainer.getBoundingClientRect();
                const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                if (video.duration) {
                    video.currentTime = pos * video.duration;
                }
            }
            let isDragging = false;
            progressContainer.addEventListener('mousedown', function (e) {
                isDragging = true;
                seek(e);
            });
            window.addEventListener('mousemove', function (e) {
                if (isDragging) seek(e);
            });
            window.addEventListener('mouseup', function () {
                isDragging = false;
            });
            progressContainer.addEventListener('touchstart', function (e) {
                if (e.touches && e.touches.length > 0) seek(e.touches[0]);
            }, { passive: true });
        }

        // -10s / +10s
        if (rewindBtn) {
            rewindBtn.addEventListener('click', function () {
                video.currentTime = Math.max(0, video.currentTime - 10);
                showToast('⏪ Rewound 10 seconds', 'info');
            });
        }
        if (fwdBtn) {
            fwdBtn.addEventListener('click', function () {
                if (video.duration) {
                    video.currentTime = Math.min(video.duration, video.currentTime + 10);
                } else {
                    video.currentTime += 10;
                }
                showToast('⏩ Forwarded 10 seconds', 'info');
            });
        }

        // Volume & Mute
        function updateVolumeUI() {
            if (!volBtn) return;
            if (video.muted || video.volume === 0) {
                volBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
            } else {
                volBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>';
            }
        }

        if (volBtn) {
            volBtn.addEventListener('click', function () {
                video.muted = !video.muted;
                updateVolumeUI();
            });
        }

        if (volRange) {
            volRange.addEventListener('input', function () {
                video.volume = parseFloat(this.value);
                video.muted = (video.volume === 0);
                updateVolumeUI();
            });
        }

        // Speed
        if (speedSelect) {
            speedSelect.addEventListener('change', function () {
                video.playbackRate = parseFloat(this.value);
                showToast('Playback speed set to ' + this.value + 'x', 'info');
            });
        }

        // Fullscreen
        if (fsBtn && videoWrapper) {
            fsBtn.addEventListener('click', function () {
                if (!document.fullscreenElement) {
                    if (videoWrapper.requestFullscreen) videoWrapper.requestFullscreen();
                    else if (videoWrapper.webkitRequestFullscreen) videoWrapper.webkitRequestFullscreen();
                } else {
                    if (document.exitFullscreen) document.exitFullscreen();
                }
            });
        }

    }

    function renderAbout(params) {
        initAboutVideoPlayer();
        if (params && params.autoplay) {
            const video = document.getElementById('about-video-element');
            if (video) {
                video.play().catch(function () {});
            }
        }
    }

    /* ============================================================
       ACTIONS
    ============================================================ */
    function markComplete(modIdx, lessonIdx) {
        modIdx = parseInt(modIdx); lessonIdx = parseInt(lessonIdx);
        const mod = COURSE_MODULES[modIdx];
        if (!mod) return;
        if (!state.completedLessons[mod.id]) state.completedLessons[mod.id] = [];
        if (!state.completedLessons[mod.id].includes(lessonIdx)) {
            state.completedLessons[mod.id].push(lessonIdx);
            saveState();
            showToast('✅ Lesson marked as completed!', 'success');
        }
        renderCourse(modIdx, lessonIdx);
    }

    function nextLesson() {
        let mi = state.currentModule, li = state.currentLesson;
        const mod = COURSE_MODULES[mi];
        if (li < mod.lessons.length - 1) { li++; }
        else if (mi < COURSE_MODULES.length - 1) { mi++; li = 0; }
        navigate('course', { moduleIdx: mi, lessonIdx: li });
    }
    function prevLesson() {
        let mi = state.currentModule, li = state.currentLesson;
        if (li > 0) { li--; }
        else if (mi > 0) { mi--; li = COURSE_MODULES[mi].lessons.length - 1; }
        navigate('course', { moduleIdx: mi, lessonIdx: li });
    }

    /* ============================================================
       LANGUAGE & THEME
    ============================================================ */
    function setLang(lang) {
        state.lang = lang;
        saveState();
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
        document.querySelectorAll('.mobile-lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
        if (currentPage === 'course') renderCourse();
        showToast('Language switched to ' + (lang === 'hindi' ? 'Hindi' : 'Tamil'), 'info');
    }
    function toggleTheme() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        saveState(); applyTheme();
    }
    function applyTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.innerHTML = icon(state.theme === 'dark' ? 'sun' : 'moon');
    }
    function openMobileMenu() {
        document.getElementById('mobile-nav').classList.add('open');
        document.getElementById('mobile-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        updateMobileNavProgress();
    }
    function closeMobileMenu() {
        document.getElementById('mobile-nav').classList.remove('open');
        document.getElementById('mobile-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    /* ============================================================
       EVENT BINDING
    ============================================================ */
    function bindEvents() {
        document.getElementById('hamburger-btn').addEventListener('click', openMobileMenu);
        document.getElementById('mobile-close').addEventListener('click', closeMobileMenu);
        document.getElementById('mobile-overlay').addEventListener('click', closeMobileMenu);
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

        // course sidebar overlay
        const sbOv = document.getElementById('course-sidebar-overlay');
        if (sbOv) sbOv.addEventListener('click', closeCourseDrawer);

        // header language toggle
        document.getElementById('lang-toggle').addEventListener('click', function (e) {
            const btn = e.target.closest('.lang-btn');
            if (btn) setLang(btn.dataset.lang);
        });

        // mobile drawer language grid
        const mobLang = document.getElementById('mobile-lang-grid');
        if (mobLang) {
            mobLang.addEventListener('click', function (e) {
                const btn = e.target.closest('.mobile-lang-btn');
                if (btn) {
                    setLang(btn.dataset.lang);
                    closeMobileMenu();
                }
            });
        }

        // global click delegation
        document.addEventListener('click', function (e) {
            const actionEl = e.target.closest('[data-action]');
            if (actionEl) {
                const action = actionEl.dataset.action;
                switch (action) {
                    case 'open-course-drawer':
                        openCourseDrawer();
                        break;
                    case 'close-course-drawer':
                        closeCourseDrawer();
                        break;
                    case 'open-module':
                        navigate('course', { moduleIdx: actionEl.dataset.idx, lessonIdx: 0 });
                        break;
                    case 'toggle-module':
                        var idx = parseInt(actionEl.dataset.idx);
                        state.currentModule = idx; state.currentLesson = 0;
                        renderCourse(idx, 0);
                        break;
                    case 'select-lesson':
                        closeCourseDrawer();
                        navigate('course', { moduleIdx: actionEl.dataset.mod, lessonIdx: actionEl.dataset.lesson });
                        break;
                    case 'goto-lesson':
                        closeCourseDrawer();
                        navigate('course', { moduleIdx: actionEl.dataset.mod, lessonIdx: actionEl.dataset.lesson });
                        break;
                    case 'mark-complete':
                        markComplete(actionEl.dataset.mod, actionEl.dataset.lesson);
                        break;
                    case 'next-lesson': nextLesson(); break;
                    case 'prev-lesson': prevLesson(); break;
                }
                return;
            }
            const pageEl = e.target.closest('[data-page]');
            if (pageEl) {
                const pg = pageEl.dataset.page;
                if (pg === 'course' && pageEl.dataset.module !== undefined) {
                    navigate('course', { moduleIdx: pageEl.dataset.module, lessonIdx: 0 });
                } else {
                    navigate(pg);
                }
            }
        });

        // keyboard nav
        document.addEventListener('keydown', function (e) {
            if (currentPage === 'course') {
                if (e.key === 'ArrowRight' && !e.ctrlKey) nextLesson();
                else if (e.key === 'ArrowLeft' && !e.ctrlKey) prevLesson();
            }
        });
    }

    /* ============================================================
       INIT
    ============================================================ */
    function init() {
        applyTheme();
        // set initial lang toggle
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === state.lang);
        });
        document.querySelectorAll('.mobile-lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === state.lang);
        });

        // inject nav
        const navItems = [
            { page: 'dashboard', label: 'Home', icon: 'home' },
            { page: 'course', label: 'Course', icon: 'play' },
            { page: 'curriculum', label: 'Curriculum', icon: 'book-open' },
            { page: 'about', label: 'About Us', icon: 'users' }
        ];
        document.getElementById('main-nav').innerHTML = navItems.map(n =>
            '<button class="nav-link" data-page="' + n.page + '">' + icon(n.icon) + '<span>' + n.label + '</span></button>'
        ).join('');
        document.getElementById('mobile-nav-links').innerHTML = navItems.map(n =>
            '<button class="nav-link" data-page="' + n.page + '">' + icon(n.icon) + '<span>' + n.label + '</span></button>'
        ).join('');

        // inject icons into mobile bottom bar
        const icHome = document.getElementById('mbb-icon-home');
        const icCourse = document.getElementById('mbb-icon-course');
        const icCurriculum = document.getElementById('mbb-icon-curriculum');
        const icAbout = document.getElementById('mbb-icon-about');
        if (icHome) icHome.innerHTML = icon('home');
        if (icCourse) icCourse.innerHTML = icon('play');
        if (icCurriculum) icCurriculum.innerHTML = icon('book-open');
        if (icAbout) icAbout.innerHTML = icon('users');

        // inject static icons
        document.getElementById('hamburger-btn').innerHTML = icon('menu');
        document.getElementById('mobile-close').innerHTML = icon('x');

        bindEvents();
        updateMobileNavProgress();

        // Transparent Navbar scroll listener
        window.addEventListener('scroll', function () {
            const header = document.querySelector('.site-header');
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 20);
            }
        }, { passive: true });

        // 3D Tilt Interaction for Hero Showcase
        const heroScene = document.getElementById('hero-3d-scene');
        const heroCard = document.getElementById('hero-3d-card');
        if (heroScene && heroCard) {
            heroScene.addEventListener('mouseenter', () => {
                heroCard.style.animation = 'none';
            });
            heroScene.addEventListener('mousemove', (e) => {
                const rect = heroScene.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const rotX = -y * 18;
                const rotY = x * 22;
                heroCard.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

                // Parallax depth for floating badges
                const badges = heroCard.querySelectorAll('.floating-badge');
                badges.forEach(b => {
                    const depth = parseFloat(b.dataset.depth || '40');
                    const shiftX = x * (depth * 0.4);
                    const shiftY = y * (depth * 0.4);
                    b.style.transform = `translateZ(${depth}px) translate(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px)`;
                });
            });
            heroScene.addEventListener('mouseleave', () => {
                heroCard.style.transform = '';
                heroCard.style.animation = 'float3d 6s ease-in-out infinite';
                const badges = heroCard.querySelectorAll('.floating-badge');
                badges.forEach(b => {
                    b.style.transform = '';
                });
            });
        }

        navigate('dashboard');
    }
    document.addEventListener('DOMContentLoaded', init);

})();