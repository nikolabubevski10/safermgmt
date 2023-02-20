export default [
  {
    text: `Are you isolating or quarantining because 
        you tested positive for COVID-19 or are worried 
        that you may be sick with COVID-19?`,
    explainYes: true,
    explainNo: false,
    failAnswers: [true],
  },
  {
    text: `Have you been within 6 feet of a person 
        with a lab-confirmed case of COVID-19 for at least 
        5 minutes, or had direct contact with their mucus 
        or saliva, in the past 14 days?`,
    explainYes: true,
    failAnswers: [true],
  },
  {
    text: `Are you fully vaccinated*? OR Have you recovered 
        from a documented COVID-19 infection in the last 3 months?`,
    subtext: `*To be considered fully vaccinated, you must 
        be ≥2 weeks following receipt of the second dose in a 2-dose 
        series or ≥2 weeks following receipt of one dose of a 
        single-dose vaccine.`,
    explainNo: true,
    failAnswers: [false],
  },
  {
    text: `Are you currently waiting on the results of a COVID-19 test?`,
    failAnswers: [],
  },
  {
    text: `Have you traveled* in the past 10 days?`,
    subtext: `*Travel is defined as any trip that is 
        overnight AND on public transportation (plane, train, 
            bus, Uber, Lyft, cab, etc.) OR any trip that is 
            overnight AND with people who are not in your household.`,
    failAnswers: [],
  },
];
