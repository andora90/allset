/* @ds-bundle: {"format":3,"namespace":"GGEDesignSystem_335809","components":[],"sourceHashes":{"slides/Cover.jsx":"f4f467817def","slides/Divider.jsx":"4998de4be093","slides/KpiDashboard.jsx":"1dee8edbfabd","slides/ProcessFlow.jsx":"3c7a3ae43990","slides/Quadrant.jsx":"80394b2c3f02","slides/Sommaire.jsx":"dcff7471c9b5","slides/Steps.jsx":"0c5b2920b3d2","slides/ThreeCol.jsx":"d5dad4a7e95a","slides/Timeline.jsx":"8f1245e68626","slides/TwoColAnalyse.jsx":"96bc2fed72d1","slides/components.jsx":"57bc54eec8ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GGEDesignSystem_335809 = window.GGEDesignSystem_335809 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// slides/Cover.jsx
try { (() => {
/* Layout 1 — COVER : split 56/44, white left + marine right */
function Cover() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56%',
      height: '100%',
      padding: '56px 60px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 54
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gge-eyebrow",
    style: {
      marginBottom: 22
    }
  }, "Direction des Op\xE9rations\xA0\xA0\xB7\xA0\xA0Codir France"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 62,
      lineHeight: 1.02,
      color: 'var(--gge-marine)',
      letterSpacing: '.3px'
    }
  }, "Bilan ProCertif &", /*#__PURE__*/React.createElement("br", null), "feuille de route 26/27"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 3,
      background: 'var(--accent)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "gge-cover-sub",
    style: {
      maxWidth: 560,
      fontSize: 19
    }
  }, "4 irritants identifi\xE9s sur le d\xE9ploiement, plan d'action en place. D\xE9cisions attendues sur le sponsoring m\xE9tier.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 40,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      letterSpacing: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "JUIN 2026"), /*#__PURE__*/React.createElement("span", null, "GALILEO GLOBAL EDUCATION FRANCE"))), /*#__PURE__*/React.createElement("div", {
    className: "diag",
    style: {
      width: '44%',
      height: '100%',
      background: 'var(--gge-marine)',
      position: 'relative',
      padding: '60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      bottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gge-kpi-label",
    style: {
      color: 'rgba(255,255,255,.55)',
      marginBottom: 14
    }
  }, "D\xE9ploiement au 31/05/26"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 132,
      lineHeight: .9,
      color: '#fff'
    }
  }, "26"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'rgba(255,255,255,.85)',
      marginTop: 8
    }
  }, "campuses raccord\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.5)',
      marginTop: 6
    }
  }, "sur 28 cibles \xB7 cl\xF4ture T1 26/27 confirm\xE9e"))));
}
window.Cover = Cover;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Cover.jsx", error: String((e && e.message) || e) }); }

// slides/Divider.jsx
try { (() => {
/* Layout 3 — DIVIDER : full marine, XXL watermark number, concentric circles */
function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    className: "diag",
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--gge-marine)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 760,
      height: 760,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 560,
      height: 560,
      borderRadius: '50%',
      border: '1px solid rgba(224,18,137,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 460,
      color: 'rgba(255,255,255,.03)',
      lineHeight: 1,
      userSelect: 'none'
    }
  }, "01"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gge-eyebrow",
    style: {
      letterSpacing: 4,
      marginBottom: 22
    }
  }, "Section 1"), /*#__PURE__*/React.createElement("h1", {
    className: "gge-divider-title"
  }, "\xC9tat du d\xE9ploiement"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 3,
      background: 'var(--accent)',
      margin: '26px auto 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "slide-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gge-footer",
    style: {
      color: 'rgba(255,255,255,.45)'
    }
  }, "Galileo Global Education\xA0\xA0|\xA0\xA0Confidentiel"), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      color: 'rgba(255,255,255,.45)'
    }
  }, "03")));
}
window.Divider = Divider;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Divider.jsx", error: String((e && e.message) || e) }); }

// slides/KpiDashboard.jsx
try { (() => {
/* Layout 9 — KPI DASHBOARD : 3×2 grid of key metrics */
function KpiDashboard() {
  const kpis = [{
    label: 'Campuses raccordés',
    value: '26',
    sub: 'sur 28 cibles · clôture T1 26/27 confirmée'
  }, {
    label: 'Satisfaction UX',
    value: '78',
    sub: 'sur 100',
    trend: '+18 pts'
  }, {
    label: 'Délai de synchro',
    value: '4h',
    sub: 'contre 1h cible · recette au 30/06'
  }, {
    label: 'Référents formés',
    value: '142',
    sub: "sur l'ensemble des sites raccordés"
  }, {
    label: 'Comptes provisionnés',
    value: '61%',
    sub: 'automatisation spécifiée en T3'
  }, {
    label: 'Adoption hebdo',
    value: '83%',
    sub: 'des référents actifs sur le dashboard'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Indicateurs d'adoption",
    title: "Le d\xE9ploiement avance, l'adoption reste \xE0 consolider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '1fr 1fr',
      gap: 1,
      background: 'var(--surface-border)',
      border: '1px solid var(--surface-border)',
      flex: 1
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(242,242,244,0.3)',
      padding: '30px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kpi, k)))), /*#__PURE__*/React.createElement(Footer, {
    n: "09"
  }));
}
window.KpiDashboard = KpiDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/KpiDashboard.jsx", error: String((e && e.message) || e) }); }

// slides/ProcessFlow.jsx
try { (() => {
/* Layout 7 — PROCESS FLOW : 5–8 parallel workstreams, fuchsia rail on top, base socle */
function ProcessFlow() {
  const cols = [['Cadrage', ['Périmètre arrêté', 'Sponsors nommés', 'Cibles validées en Copil']], ['Annuaire', ['Synchro stabilisée', 'Écarts en reprise', 'Flux à 1h visé']], ['Provisioning', ['Spec en T3', 'Auto à venir', 'Comptes par vague']], ['Émargement', ['Fiabilisation en cours', 'Recette 30/06', 'API à consolider']], ['Dashboard', ['V2 en sept. 26', 'KPI d\'adoption', 'Revue mensuelle']], ['RUN', ['Bascule N2', 'Support outillé', 'Clôture T1 26/27']]];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Chantiers parall\xE8les",
    title: "Six chantiers cadencent le passage en mode RUN"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--accent)',
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 1,
      background: 'var(--surface-border)'
    }
  }, cols.map(([t, items], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      padding: '26px 20px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      color: 'var(--gge-marine)',
      lineHeight: 1
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--gge-marine)',
      margin: '14px 0 22px',
      textTransform: 'uppercase',
      letterSpacing: .5
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, items.map((x, j) => /*#__PURE__*/React.createElement(Bullet, {
    key: j
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      background: 'var(--bg-card)',
      padding: '24px 30px',
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Marker, {
    emoji: "\uD83D\uDCCC",
    color: "var(--gge-marine)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 22,
      color: 'var(--fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--gge-marine)'
    }
  }, "Fondement transversal \u2014"), " gouvernance Copil mensuelle et sponsor m\xE9tier unique sur l'ensemble des chantiers."))), /*#__PURE__*/React.createElement(Footer, {
    n: "07"
  }));
}
window.ProcessFlow = ProcessFlow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ProcessFlow.jsx", error: String((e && e.message) || e) }); }

// slides/Quadrant.jsx
try { (() => {
/* Layout 6 — QUADRANT 2×2 : four balanced dimensions, one priority cell */
function Quadrant() {
  const cells = [{
    emoji: '🎓',
    label: 'Pédagogie',
    priority: false,
    items: ['Référentiel ProCertif unifié', 'Parcours certifiants alignés', 'Suivi des acquis par campus']
  }, {
    emoji: '⚙️',
    label: 'Systèmes & SI',
    priority: true,
    items: ['Provisioning à automatiser — priorité', 'Synchro annuaire 4h → 1h', 'API émargement à fiabiliser']
  }, {
    emoji: '👥',
    label: 'Opérations campus',
    priority: false,
    items: ['Référents formés sur 26 sites', 'Procédures de reprise d\'écart', 'Support N1 outillé']
  }, {
    emoji: '📊',
    label: 'Pilotage',
    priority: false,
    items: ['Dashboard V2 en sept. 26', 'KPI d\'adoption hebdomadaires', 'Revue mensuelle en Copil']
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "D\xE9composition du programme",
    title: "Quatre dimensions, une priorit\xE9 SI \xE0 d\xE9bloquer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cols-lg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 4,
      background: 'var(--gge-fuchsia)',
      flex: 1,
      border: 'none'
    }
  }, cells.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      background: '#fff',
      padding: '34px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Marker, {
    emoji: c.emoji,
    color: c.priority ? 'var(--gge-fuchsia)' : 'var(--gge-marine)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 33,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--gge-marine)'
    }
  }, c.label)), c.items.map((t, j) => /*#__PURE__*/React.createElement(Bullet, {
    key: j,
    crit: c.priority && j === 0
  }, t))))), /*#__PURE__*/React.createElement(Footer, {
    n: "06"
  }));
}
window.Quadrant = Quadrant;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Quadrant.jsx", error: String((e && e.message) || e) }); }

// slides/Sommaire.jsx
try { (() => {
/* Layout 2 — SOMMAIRE : 2-col × N grid, numbered sections */
function Sommaire() {
  const items = [['01', 'État du déploiement ProCertif'], ['02', 'Irritants actifs & plan d\'action'], ['03', 'Indicateurs d\'adoption'], ['04', 'Feuille de route 26/27'], ['05', 'Sponsoring & gouvernance'], ['06', 'Décisions attendues']];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Codir France \xB7 Juin 2026",
    title: "Sommaire"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(3, auto)',
      gridAutoFlow: 'column',
      gap: '38px 80px',
      marginTop: 18,
      maxWidth: 1500
    }
  }, items.map(([n, label]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      borderTop: '1px solid var(--surface-border)',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      color: 'var(--gge-marine)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 3,
      background: 'var(--accent)',
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      color: 'var(--fg-secondary)',
      fontWeight: 500,
      paddingTop: 6
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 34,
      borderTop: '1px solid var(--surface-border)',
      paddingTop: 18,
      display: 'flex',
      gap: 16,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gge-kpi-label"
  }, "Annexes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg-muted)'
    }
  }, "D\xE9tail des sprints \xB7 matrice RACI provisioning \xB7 trajectoire budg\xE9taire")), /*#__PURE__*/React.createElement(Footer, {
    n: "02"
  }));
}
window.Sommaire = Sommaire;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Sommaire.jsx", error: String((e && e.message) || e) }); }

// slides/Steps.jsx
try { (() => {
/* Layout 5 — ÉTAPES NUMÉROTÉES : horizontal row of numbered pastilles */
function Steps() {
  const steps = [['Cadrer', 'Périmètre, sponsors et cibles arrêtés en Copil avant tout raccordement.'], ['Raccorder', 'Synchronisation annuaire et provisioning des comptes par vague de campus.'], ['Fiabiliser', 'Recette des flux, reprise des écarts, fiabilisation de l\'émargement.'], ['Adopter', 'Formation des référents, dashboard V2, suivi de l\'usage hebdomadaire.'], ['Industrialiser', 'Passage en mode RUN, automatisation et bascule en run support N2.']];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Trajectoire de d\xE9ploiement",
    title: "Cinq \xE9tapes du PoC au mode RUN industrialis\xE9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 24,
      flex: 1,
      alignContent: 'center'
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, i < 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 32,
      left: '50%',
      right: '-50%',
      height: 1,
      background: 'var(--surface-border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Pastille, {
    n: String(i + 1).padStart(2, '0'),
    accent: i === 4,
    size: 64
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 29,
      color: 'var(--gge-marine)',
      marginTop: 26,
      letterSpacing: .3
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "gge-body",
    style: {
      fontSize: 18,
      lineHeight: 1.45,
      marginTop: 12,
      maxWidth: 280
    }
  }, d)))), /*#__PURE__*/React.createElement(Footer, {
    n: "05"
  }));
}
window.Steps = Steps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Steps.jsx", error: String((e && e.message) || e) }); }

// slides/ThreeCol.jsx
try { (() => {
/* Layout 4 — 3-COL : comparative columns Acquis / Irritants / Plan d'action */
function ThreeCol() {
  const cols = [{
    emoji: '✅',
    color: 'var(--gge-marine)',
    label: 'Acquis',
    items: [['26 campuses raccordés sur 28 cibles'], ['Synchronisation annuaire stabilisée'], ['+18 pts de satisfaction UX vs 25/26'], ['Référentiel ProCertif unifié livré']]
  }, {
    emoji: '⚡',
    color: 'var(--gge-fuchsia)',
    label: 'Irritants actifs',
    items: [['Émargement manuel non fiabilisé', true], ['Synchro à 4h vs 1h cible'], ['Provisioning des comptes non automatisé'], ['Double saisie sur 3 campuses pilotes']]
  }, {
    emoji: '➡️',
    color: 'var(--gge-marine)',
    label: 'Plan d\'action',
    items: [['Recette synchro — 30/06 · Ops'], ['Spec provisioning — T3 · SI'], ['MEP Dashboard V2 — sept. 26 · Produit'], ['Sponsor métier à nommer — Codir']]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Bilan ProCertif \xB7 D\xE9ploiement",
    title: "3 irritants bloquent le passage en mode RUN"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cols-lg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      flex: 1
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      padding: '8px 44px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--surface-border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Marker, {
    emoji: c.emoji,
    color: c.color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--gge-marine)'
    }
  }, c.label)), c.items.map(([t, crit], j) => /*#__PURE__*/React.createElement(Bullet, {
    key: j,
    crit: crit
  }, t))))), /*#__PURE__*/React.createElement(Footer, {
    n: "04"
  }));
}
window.ThreeCol = ThreeCol;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ThreeCol.jsx", error: String((e && e.message) || e) }); }

// slides/Timeline.jsx
try { (() => {
/* Layout 8 — TIMELINE / ROADMAP : milestones on a horizontal line */
function Timeline() {
  const milestones = [['15/06/26', 'Sprint #7', 'Livraison des correctifs synchro et émargement.', false], ['30/06/26', 'Recette synchro', 'Validation des flux annuaire à 1h, clôture des écarts.', true], ['T3 26/27', 'Spec provisioning', 'Cadrage de l\'automatisation des comptes campus.', false], ['Sept. 26', 'MEP Dashboard V2', 'Mise en production du pilotage d\'adoption.', false], ['T1 26/27', 'Mode RUN', 'Bascule en run support N2, clôture du projet.', false]];
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad"
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Feuille de route 26/27",
    title: "Livraison T1 26/27 confirm\xE9e, MEP dashboard en sept. 26"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: 1,
      background: 'var(--surface-border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      width: '100%'
    }
  }, milestones.map(([date, title, desc, crit], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      paddingRight: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: crit ? 'var(--accent)' : 'var(--gge-marine)',
      position: 'absolute',
      top: -16,
      left: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 46
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: 1,
      color: crit ? 'var(--accent)' : 'var(--fg-secondary)',
      textTransform: 'uppercase'
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 25,
      color: 'var(--gge-marine)',
      margin: '8px 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "gge-body",
    style: {
      fontSize: 17,
      lineHeight: 1.45,
      maxWidth: 270
    }
  }, desc)))))), /*#__PURE__*/React.createElement(Footer, {
    n: "08"
  }));
}
window.Timeline = Timeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Timeline.jsx", error: String((e && e.message) || e) }); }

// slides/TwoColAnalyse.jsx
try { (() => {
/* Layout 10 — 2-COL ANALYSE : split 60/40, constat (white) + recommandation (grey) */
function TwoColAnalyse() {
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-pad",
    style: {
      paddingRight: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(SlideHead, {
    eyebrow: "Synth\xE8se & recommandation",
    title: "ProCertif reste pertinent mais n\xE9cessite un sponsor m\xE9tier renforc\xE9"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cols-xl",
    style: {
      display: 'flex',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60%',
      paddingRight: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 2.5,
      textTransform: 'uppercase',
      color: 'var(--gge-marine)',
      marginBottom: 30
    }
  }, "Constat"), /*#__PURE__*/React.createElement(Bullet, null, "Le socle technique est livr\xE9 : 26 campuses raccord\xE9s, satisfaction UX en hausse de 18 points."), /*#__PURE__*/React.createElement(Bullet, null, "L'adoption progresse mais reste port\xE9e par les \xE9quipes Ops, sans relais m\xE9tier formalis\xE9."), /*#__PURE__*/React.createElement(Bullet, null, "Trois irritants \u2014 \xE9margement, synchro, provisioning \u2014 freinent le passage en mode RUN."), /*#__PURE__*/React.createElement(Bullet, null, "Faute de sponsor m\xE9tier, les arbitrages de priorisation remontent trop tard au Copil.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40%',
      background: 'rgba(242,242,244,0.3)',
      padding: '48px 48px 52px',
      marginBottom: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 2.5,
      textTransform: 'uppercase',
      color: 'var(--gge-marine)',
      marginBottom: 30
    }
  }, "Recommandation"), /*#__PURE__*/React.createElement(Bullet, {
    crit: true
  }, "Nommer un sponsor m\xE9tier unique en Codir avant le 30/06."), /*#__PURE__*/React.createElement(Bullet, null, "Sanctuariser la recette synchro et la spec provisioning en T3."), /*#__PURE__*/React.createElement(Bullet, null, "Maintenir la gouvernance Copil mensuelle jusqu'au passage en RUN."))), /*#__PURE__*/React.createElement("div", {
    className: "slide-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gge-footer"
  }, "Galileo Global Education\xA0\xA0|\xA0\xA0Confidentiel"), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "10")));
}
window.TwoColAnalyse = TwoColAnalyse;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TwoColAnalyse.jsx", error: String((e && e.message) || e) }); }

// slides/components.jsx
try { (() => {
/* Shared slide chrome — exported to window for use by per-layout files */

function Wordmark({
  dark,
  height
}) {
  const src = dark ? '../assets/gge-logo-white.png' : '../assets/gge-logo-color.png';
  return /*#__PURE__*/React.createElement("img", {
    className: "wm-logo",
    src: src,
    alt: "Galileo Global Education",
    style: {
      height: (height || 64) + 'px',
      width: 'auto',
      display: 'block',
      alignSelf: 'flex-start',
      flex: 'none'
    }
  });
}

/* Standard content-slide header: eyebrow + conclusion title + fuchsia bar */
function SlideHead({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gge-eyebrow eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "gge-slide-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "accent-bar"
  }));
}
function Footer({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gge-footer"
  }, "Galileo Global Education\xA0\xA0|\xA0\xA0Confidentiel"), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n));
}

/* Bullet row. crit -> the single fuchsia critical item */
function Bullet({
  children,
  crit
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'bul' + (crit ? ' crit' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, children));
}

/* 26×26 white chip + colored border holding a functional emoji marker (R9) */
function Marker({
  emoji,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "gge-marker"
  }, emoji);
}
function Pastille({
  n,
  accent,
  size
}) {
  const s = size || 48;
  return /*#__PURE__*/React.createElement("div", {
    className: "gge-pastille",
    style: {
      width: s,
      height: s,
      fontSize: Math.round(s * 0.46),
      ...(accent ? {
        background: 'var(--gge-fuchsia)'
      } : {})
    }
  }, n);
}

/* KPI block */
function Kpi({
  label,
  value,
  sub,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gge-kpi-label",
    style: {
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "gge-kpi-num"
  }, value, trend && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gge-fuchsia)',
      fontSize: 30,
      marginLeft: 10
    }
  }, trend)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--fg-secondary)',
      marginTop: 14,
      lineHeight: 1.4,
      maxWidth: 380
    }
  }, sub));
}

/* Mount one slide component, scaled to fit the viewport (contain) */
function mountSlide(Component) {
  const stage = document.createElement('div');
  stage.className = 'gge-stage';
  document.body.appendChild(stage);
  const host = document.createElement('div');
  stage.appendChild(host);
  ReactDOM.createRoot(host).render(/*#__PURE__*/React.createElement("div", {
    className: "gge-slide"
  }, /*#__PURE__*/React.createElement(Component, null)));
  function fit() {
    const slide = host.querySelector('.gge-slide');
    if (!slide) return;
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    slide.style.transform = 'scale(' + s + ')';
  }
  const ro = new ResizeObserver(fit);
  ro.observe(document.body);
  setTimeout(fit, 30);
  setTimeout(fit, 200);
  window.addEventListener('resize', fit);
}
Object.assign(window, {
  Wordmark,
  SlideHead,
  Footer,
  Bullet,
  Marker,
  Pastille,
  Kpi,
  mountSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/components.jsx", error: String((e && e.message) || e) }); }

})();
