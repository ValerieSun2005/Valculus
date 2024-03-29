window.MathJax = {
    options: {
        enableMenu: false,    
    },

    "fast-preview": { 
        "disabled": false 
    }, 
    
    loader: {load: ['[tex]/color']},
    tex: {packages: {'[+]': ['color']}},

    loader: {load: ['[tex]/mhchem']},
    tex: {packages: {'[+]': ['mhchem']}},

    svg: {
        fontCache: 'global'
      },

    tex: {
        packages: {'[+]': ['color']},
        packages: {'[+]': ['mhchem']},
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
            be: "\\begin{equation}",
            ee: "\\end{equation}",
            nspace: "\\hspace{2.52mm}",
            geq: "\\geqslant",
            leq: "\\leqslant",
            txt: "\\textrm",
            deg: "\\textrm{deg}",
            degree: "^{\\circ}",
            farenheit: "\\degree \\text{F}",
            celcius: "\\degree \\text{C}",
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
            ques: "\\, ?",
            col: "\\! :",
            scol: "\\, ; \\,",
            eqRefer: ["\\text{Equation } \\eqref{#1}", 1],
            eqReferTwo: ["\\text{Equations } \\eqref{#1} \\text{ and } \\eqref{#2}", 2],
            eqrefer: ["\\text{Equation } \\eqref{#1}", 1],
            deriv: ["\\, \\frac{\\dd #1}{\\dd #2} \\, ", 2],
            textDeriv: ["\\dd #1 / \\dd #2", 2],
            abs: ["\\left \\lvert #1 \\right \\rvert", 1],
            par: ["\\left ( #1 \\right )", 1],
            parbr: ["\\left [ #1 \\right ]", 1],
            di: "\\, \\dd",
            nl: "\\\\[1ex]",
            indZero: "\\frac{0}{0}",
            indInfty: "\\infty/\\infty",
            qed: "\\tag*{$\\blacksquare$}",
            un: ["\\, \\textrm{#1} ", 1],
            undiv: ["\\; \\textrm{#1}/\\textrm{#2}", 2],
            subsuper:["_{\\hspace{0.1em} #1}^{\\Large^#2}",2],
            textAbove: ["\\buildrel \\rm #1 \\over #2", 2],
            slashFrac: ["{}^{#1} \\hspace{-0.4em} / \\hspace{-0.4em} {}_{#2}", 2],
            equalsCheck: "\\textAbove{\\checkmark}{=}",
            orange: ["{\\color{orange}#1}", 1],
            teal: ["{\\color{teal}#1}", 1],
            qedproof: "\\tag*{$\\color{Emerald} \\blacksquare$}",
            arrowTwoWay: "\\; \\Longleftrightarrow \\;",
            intEval: "{\\Bigg|}",
            doublingTime: "\\mathcal{t_2}",
            halfLife: "\\mathcal{t_{\\slashFrac{1}{2}}}",
            triplingTime: "\\mathcal{t_3}",
            chem: ["\\text{}", 1],
        }
    },
};
    
