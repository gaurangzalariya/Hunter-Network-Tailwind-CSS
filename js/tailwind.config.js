// tailwind.config.js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primaryBlue': '#113163', 
        'backgroundColor': '#FFCF80', 
        'primaryTextColor': '#555555'
    },
    
    gap: {
        'xlGap': '80px', 
        'largGap': '65px', 
        'mediumGap': '40px', 
        'smallGap': '30px',
    },
    
    fontFamily: {
      'sp-g': ['Space Grotesk', 'sans-serif'], // 'sp-g'
      'kanit': ['Kanit', 'sans-serif'], // Updated naming for 
    },
  
    
    fontSize: {
        '2xlText': '50px',
        'xlText': '40px',
        'largText': '34px',
        'mediumText': '25px', 
        'smallText': '20px', 
        'largeParagraph': '18px', 
        'smallparagraph': '16px', 
    },
    
    lineHeight: {
        'large-lh': '1.5', 
        'medium-lh': '1.2', 
        'small-lh': '1.1', 
        
    },
    
    fontWeight: {
        'extraBold': '700', // 'w-xbold'//
        'normalWeight': '400' // 'pw'//
    },
    
    margin: {
        'mediumMargin': '24px', // 'md-m'//
    },
    
    maxWidth: {
        'containerWidth': '1440px', // 'custom'//
        'sectionWidth': '1307px', // 'p-section'//
    },
    
    }
  }
};
