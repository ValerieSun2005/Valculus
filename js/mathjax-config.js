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
            RR: "{\\mathbb R}",
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
            baf: "\\begin{flalign*}",  // this environment allows a word to be left-aligned in an equation
            eaf: "\\end{flalign*}",
            laWord: ["\\hspace{0em}\\text{#1}", 1], // left aligned word — e.g., "or"
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
            fahrenheit: "\\degree \\text{F}",
            celcius: "\\degree \\text{C}",
            pH: "\\text{pH}",
            txtSlope: "\\text{slope}",
            length: ["\\abs{#1}", 1], // measure of line segment — e.g., the number |AB|
            segment: ["\\overline{#1}", 1], // line segment itself (NOT measure) — e.g., the line segment AB 
            angleM: ["\\text{m} \\angle #1", 1], // angle measure — e.g., m<A
            andThree: ["#1  \\cmaa  #2 \\; \\cmaa \\text{and} \\; \\; #3", 3],
            andFour: ["#1  \\comma  #2 \\; \\comma #3 \\; \\comma \\text{and} \\; #4", 4],
            and: "\\qquad \\text{and} \\qquad",
            so: "\\qquad \\text{so} \\qquad",
            as: "\\qquad \\text{as} \\qquad",
            or: "\\qquad \\text{or} \\qquad",
            for: "\\qquad \\text{for} \\qquad",
            if: "\\qquad \\text{if} \\qquad",
            vdotss: "\\; \\; \\vdots", // \vdots aligned with equals sign
            sspace: "\\hspace{1em}",  // space between inline math
            lspace: "\\hspace{6.5em}",
            comma: "\\, , \\,",
            period: "\\, .",
            pd: "\\period",
            cma:"\\comma",
            cmaa: "\\comma \\; \\; \\;",
            ques: "\\, ?",
            col: "\\! :",
            scol: "\\, ; \\,",
            scoll: "\\, ; \\; \\; \\;",
            abt: ["\\textrm{about } #1", 1],  // e.g., "about y = 4"
            abtAxis: ["\\textrm{about } #1\\textrm{-axis}", 1],  // e.g., "about y = 4"
            nonum: "\\nonumber",
            eqRef: ["\\eqref{#1}", 1],
            eqRefer: ["\\text{Equation } \\eqref{#1}", 1],
            eqReferTwo: ["\\text{Equations } \\eqref{#1} \\text{ and } \\eqref{#2}", 2],
            eqrefer: ["\\text{Equation } \\eqref{#1}", 1],
            eqlabel: ["\\tag*{\\eqref{#1}}", 1],
            diffDelta: ["\\, \\frac{\\Delta #1}{\\Delta #2} \\, ", 2],
            deriv: ["\\hspace{0.05em} \\frac{\\dd #1}{\\dd #2} \\hspace{0.05em}", 2],
            derivOrder: ["\\, \\frac{\\dd^{#3} #1}{\\dd #2^{#3}} \\, ", 3],
            textDeriv: ["\\dd #1 / \\dd #2", 2],
            textderiv: ["\\dd #1 / \\dd #2", 2],
            textderivOrder: ["\\dd^{#3} #1 / \\dd #2^{#3}", 3],
            abs: ["\\left \\lvert #1 \\right \\rvert", 1],
            par: ["\\left ( #1 \\right )", 1],
            parbr: ["\\left [ #1 \\right ]", 1],
            parbrace: ["\\left \\{#1 \\right\\}", 1],
            parBig: ["\\Big(#1 \\Big)", 1],
            parbrBig: ["\\Big[#1 \\Big]", 1],
            di: "\\, \\dd",
            nl: "\\\\[1ex]",
            nonum: "\\nonumber",
            inv: ["#1^{-1}", 1], // inverse prefix "^{-1}"
            asin: "\\sin^{-1}",
            acos: "\\cos^{-1}",
            atan: "\\tan^{-1}",
            asec: "\\sec^{-1}",
            acsc: "\\csc^{-1}",
            acot: "\\cot^{-1}",
            indZero: "\\frac{0}{0}",
            indInfty: "\\infty/\\infty",
            out: ["#1_{\\text{out}}", 1], // r_out
            inn: ["#1_{\\text{in}}", 1], // r_in
            qed: "\\tag*{$\\blacksquare$}",
            muUnit: ["\\un{µ#1}", 1],
            un: ["\\, \\textrm{#1} ", 1],
            undiv: ["\\; \\textrm{#1}/\\textrm{#2}", 2],
            subsuper:["_{\\hspace{0.1em} #1}^{\\Large^#2}",2],
            textAbove: ["\\buildrel \\rm #1 \\over #2", 2],
            slashFrac: ["{}^{#1} \\hspace{-0.4em} / \\hspace{-0.4em} {}_{#2}", 2],
            cancelColor: ["{\\color{#1} \\cancel{\\color{white} #2}}", 2],
            equalsCheck: "\\textAbove{\\large \\color{green}\\checkmark}{=}",
            orange: ["{\\color{orange}#1}", 1],
            teal: ["{\\color{SkyBlue}#1}", 1],
            qedproof: "\\tag*{$\\color{Emerald} \\blacksquare$}",
            arrowTwoWay: "\\; \\Longleftrightarrow \\;",
            iffArrow: "\\; \\Longleftrightarrow \\;",
            intEval: "{\\Bigg|}",
            doublingTime: "\\mathcal{t_2}",
            halfLife: "\\mathcal{t_{\\slashFrac{1}{2}}}",
            triplingTime: "\\mathcal{t_3}",
            emf: "\\mathcal{E}",
            chem: ["\\text{}", 1],
            avg: ["#1_{\\text{avg}}", 1],
            secText: ["#1_{\\text{sec}}", 1],
            maxSub: ["#1_{\\text{max}}", 1],
            arc: ["\\text{arc} \\, #1", 1],
            arcHat: ["\\overset{\\LARGE\\frown}{#1}",1],
            floor: ["\\lfloor #1 \\rfloor", 1],
            sinLim: ["\\lim_{#1 \\to 0} (\\sin #1)/#1", 1], 
            cosLim: ["\\lim_{#1 \\to 0} (1 - \\cos #1)/#1", 1], 
            clockTime: ["{#1}\\hspace{-0.2em}:\\hspace{-0.2em}{#2}", 2],
            normalPdf: ["\\frac{1}{(#2) \\sqrt{2 \\pi}} \\, e^{-(#3 - #1)^2/\\parbr{2(#2)^2}}", 3],
            div: "\\; \\; \\text{diverges}",
            conv: "\\; \\; \\text{converges}",
            divBoxed: "\\; \\; \\boxed{\\textbf{diverges}}",
            convBoxed: "\\; \\; \\boxed{\\textbf{converges}}",
            min: ["\\text{min} \\left\\{#1, #2\\right\\}", 2],
            max: ["\\text{max} \\left\\{#1, #2\\right\\}", 2],
            comment: ["&&\\hspace{3em} \\parbr{#1}", 1], // use in \baat environment for comments like "[Because f(x) is even]"
            wrongMath: ["{\\color{BrickRed} \\xcancel{\\color{white} #1}}", 1]
        }
    },
};
    
