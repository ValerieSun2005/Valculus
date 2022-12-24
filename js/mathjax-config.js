window.MathJax = {
    options: {
        enableMenu: false,    
    },

    "fast-preview": { 
        "disabled": false 
    }, 
    

    loader: {load: ['[tex]/color']},
    tex: {packages: {'[+]': ['color']}},

    svg: {
        fontCache: 'global'
      },

    tex: {
        packages: {'[+]': ['color']},
        tags: 'ams',
        macros: {
            RR: "{\\bf R}",
            bold: ["{\\bf #1}", 1],
            notimplies: "\, \, \; \not \!\!\!\!\!\!\! \implies",
            dd: "{\\textrm{d}}",
            box: "\\bbox[border: 2px solid white, 2pt]",
            ppkn: "\\text{Ѽ}",
            heart:"\\text{♡}",
            flower: "\\text{✿}",
            ds: "\\displaystyle",
            ba: "\\begin{aligned}",
            ea: "\\end{aligned}",
            baat: "\\begin{alignedat}",
            eaat: "\\end{alignedat}",
            bc: "\\begin{cases}",
            ec: "\\end{cases}",
            nspace: "\\hspace{2.52mm}",
            geq: "\\geqslant",
            leq: "\\leqslant",
            txt: "\\textrm",
            deg: "\\textrm{deg}",
<<<<<<< HEAD
=======
            degree: "^{\\circ}",
>>>>>>> 5fc3516 (related rates done; display modifications)
            be: "\\begin{equation}",
            ee: "\\end{equation}",
            andThree: ["#1 \\; \\comma \\; #2 \\; \\comma \\text{and} \\; #3", 3],
            and: "\\qquad \\text{and} \\qquad",
            as: "\\qquad \\text{as} \\qquad",
            or: "\\qquad \\text{or} \\qquad",
            for: "\\qquad \\text{for} \\qquad",
            lspace: "\\hspace{6.5em}",
            comma: "\\, , \\,",
            period: "\\, .",
            pd: "\\period",
            cma:"\\comma",
            ques: "\\; ?",
            col: "\\! :",
            scol: "\\, ; \\,",
            eqRefer: ["\\text{Equation } \\eqref{#1}", 1],
            eqReferTwo: ["\\text{Equations } \\eqref{#1} \\text{ and } \\eqref{#2}", 2],
            deriv: ["\\frac{\\dd #1}{\\dd #2}", 2],
            textDeriv: ["\\dd #1 / \\dd #2", 2],
            abs: ["\\left \\lvert #1 \\right \\rvert", 1],
            par: ["\\left ( #1 \\right )", 1],
            di: "\\, \\dd",
            nl: "\\\\[1ex]",
            indZero: "\\frac{0}{0}",
            indInfty: "\\infty/\\infty",
            qed: "\\tag*{$\\blacksquare$}",
            un: ["\\, \\textrm{#1} ", 1],
<<<<<<< HEAD
            undiv: ["\\; \\textrm{#1}/\\textrm{#2}", 2]
=======
            undiv: ["\\; \\textrm{#1}/\\textrm{#2}", 2],
            subsuper:["_{\\hspace{0.1em} #1}^{\\Large^#2}",2],
            // labelandremember: ["{\\expandafter\\gdef\\csname labeled:#1\\endcsname{#2}\\label{#1}#2}", 2],
            // recalllabel: ["\\csname labeled:#1\\endcsname\\tag{\\ref{#1}}", 1]
>>>>>>> 5fc3516 (related rates done; display modifications)
        }
    },
};
    
