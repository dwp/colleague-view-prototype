const express = require('express');
const router = express.Router();

const moment = require('moment');
const data = require('./a/data.json');
const paymentData = require('./a/payment-data.json');
const paymentDataDiffentUserMVP1_0 = require('./a/different-type-contact-user/payment-data.json');


// for MVP 1.0 (both type of users)
router.get(
  '/a/call-log-journey/unHappy_journey/noBenefit/added-call-info',
  function (req, res, next) {
    let notes = '';
    if (req.session.data.notes) {
      if (req.session.data.notes.length > 0) {
        notes = req.session.data.notes + '. ' + req.session.data['addNote'];
      } else {
        notes = req.session.data['addNote'];
      }
    } else {
      notes = req.session.data['addNote'];
    }
    req.session.data.notes = notes;
    next();
  }
);

router.get(
  '/a/different-type-contact-user/call-log-journey/unHappy_journey/noBenefit/added-details',
  function (req, res, next) {
    let notes = '';
    if (req.session.data.notes) {
      if (req.session.data.notes.length > 0) {
        notes = req.session.data.notes + '. ' + req.session.data['addNote'];
      } else {
        notes = req.session.data['addNote'];
      }
    } else {
      notes = req.session.data['addNote'];
    }
    req.session.data.notes = notes;
    next();
  }
);

router.get('/a/contact-history-detail', function (req, res) {
  // console.log('Details GET route is getting invoked',req.session.data.contextID);
  const detailRec = data.contacts.filter((context) => {
    context = req.session.data.contextID.includes(context.contextID);
    return context;
  });
  req.session.data.detailRec = detailRec;
  res.redirect(
    '/prototype-sprint-wise/sprint23/opt2/contact-history-viewDetails/viewDetail'
  );
  // next();
});

router.get(
  '/a/different-type-contact-user/contact-history-detail',
  function (req, res) {
    console.log(
      'Details GET route is getting invoked',
      req.session.data.contextID
    );
    const detailRec = data.contacts.filter((context) => {
      context = req.session.data.contextID.includes(context.contextID);
      return context;
    });
    req.session.data.detailRec = detailRec;
    res.redirect(
      '/prototype-sprint-wise/sprint23/opt2/contact-history-viewDetails/viewDetail'
    );
    // next();
  }
);

router.get('/a/call-log-journey/added-details', function (req, res) {
  let notes = '';
  if (req.session.data.notes) {
    if (req.session.data.notes.length > 0) {
      notes = req.session.data.notes + '. ' + req.session.data['addNote'];
    } else {
      notes = req.session.data['addNote'];
    }
  } else {
    notes = req.session.data['addNote'];
  }
  req.session.data.notes = notes;
  res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-details', {
    notes: req.session.data.notes,
  });
});

router.get(
  '/a/different-type-contact-user/call-log-journey/added-details',
  function (req, res) {
    let notes = '';
    if (req.session.data.notes) {
      if (req.session.data.notes.length > 0) {
        notes = req.session.data.notes + '. ' + req.session.data['addNote'];
      } else {
        notes = req.session.data['addNote'];
      }
    } else {
      notes = req.session.data['addNote'];
    }
    req.session.data.notes = notes;
    res.render(
      'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/added-details',
      {
        notes: req.session.data.notes,
      }
    );
  }
);

router.get(
  '/a/call-log-journey/confirmation-complete-session',
  function (req, res, next) {
    let notes = '';
    if (req.session.data.notes) {
      if (req.session.data.notes.length > 0) {
        notes = req.session.data.notes + '. ' + req.session.data['addNote'];
      } else {
        notes = req.session.data['addNote'];
      }
    } else {
      notes = req.session.data['addNote'];
    }
    req.session.data.notes = notes;
    next();
  }
);

router.get(
  '/a/different-type-contact-user/call-log-journey/confirmation-complete-session',
  function (req, res, next) {
    let notes = '';
    if (req.session.data.notes) {
      if (req.session.data.notes.length > 0) {
        notes = req.session.data.notes + '. ' + req.session.data['addNote'];
      } else {
        notes = req.session.data['addNote'];
      }
    } else {
      notes = req.session.data['addNote'];
    }
    req.session.data.notes = notes;
    next();
  }
);

// this is all about baseline MVP 1.0 - (Design iteration1)

// this is for NINO number
router.post('/a/index', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-sprint-wise/ur-8/a/index');
});

router.post('/a/why-checking-info', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  // req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['esaPayment'] = '';
  req.session.data['pipPayment'] = '';
  req.session.data['caPayment'] = '';
  req.session.data['ca-payment'] = '';
  req.session.data['esa-payment'] = '';
  req.session.data['pip-payment'] = '';
  req.session.data['esa-process-chasing'] = '';
  req.session.data['pip-process-chasing'] = '';
  req.session.data['ca-process-chasing'] = '';
  req.session.data['esa-coc'] = '';
  req.session.data['pip-coc'] = '';
  req.session.data['ca-coc'] = '';
  req.session.data['esa-general'] = '';
  req.session.data['pip-general'] = '';
  req.session.data['ca-general'] = '';
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    // Send user to next page
    // console.log('This is correct')
    // res.render('prototype-sprint-wise/ur-8/a/why-you-checking-benefit-Info');
    res.redirect('/prototype-sprint-wise/ur-8/a/why-checking-info');
  } else {
    var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      errMsg = "Enter the customer's National Insurance number";
    } else {
      errMsg =
        "Enter the customer's National Insurance number in the correct format";
    }
    // Send user to error page
    res.render(
      '/prototype-sprint-wise/ur-8/a/showValidationMsg/error-nino-number',
      { errMsg: errMsg }
    );
  }
});

router.post('/a/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';

  if (req.session.data['What-type-of-contact'] == 'Telephone call with') {
    res.redirect('/prototype-sprint-wise/ur-8/a/call-with');
  } else {
    if (req.session.data['What-type-of-contact'] == 'Contact with') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with'
      );
    } else {
      res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
    }
  }
  // res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
});

// router.post('/a/view-only-user/home', function (req, res) {
//     if (req.session.data['why-to-check-customer-inforomaton'] == '') {
//     res.redirect('back');
//     } else {
//     if (req.session.data['why-to-check-customer-inforomaton'] == 'To view information only') {
//     res.render('prototype-sprint-wise/ur-8/a/view-only-user/home');
//     } else {
//     res.redirect('/prototype-sprint-wise/ur-8/a/contact-type')
//     }
//     }
// });

// router.post('/a/view-only-user/home', function (req, res) {
//   if (req.session.data['why-to-check-customer-inforomaton'] == 'To view information only') {
//   res.render('prototype-sprint-wise/ur-8/a/view-only-user/home');
//   } else {
//     if (req.session.data['why-to-check-customer-inforomaton'] == '') {
//       res.redirect('back');
//       } else {
//         res.redirect('/prototype-sprint-wise/ur-8/a/contact-type')
//       }
//     }
// });

router.post('/a/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-sprint-wise/ur-8/a/call-with');
    res.redirect('back');
  } else {
    if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    // var b = "with";
    // req.session.data['Who-is-the-phone-call-with-ur8'] = b + " " + contactType;
    res.redirect('/prototype-sprint-wise/ur-8/a/home');
  }
});

router.post('/a/different-type-contact-user/home', function (req, res) {
  var contactType = req.session.data['Who-is-contact-with'];

  if (req.session.data['Who-is-contact-with'] == '') {
    // Send user to error page
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with'
    );
  } else {
    if (
      req.session.data['Who-is-contact-with'] == 'someone else' ||
      req.session.data['Who-is-contact-with'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    // var b = "with";
    // req.session.data['Who-is-contact-with'] = b + " " + contactType;
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/home'
    );
  }
});

// check on pressing complete session button
router.post(
  '/a/call-log-journey/confirmation-complete-session',
  function (req, res) {
    // console.log('Value of the session varaible: --------------------------------->',req.session.data['What-services-have-they-called-about']);
    if (req.session.data['whichBenefitDiscussed'].includes('esa')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session'
      );
    } else if (req.session.data['whichBenefitDiscussed'].includes('pip')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session'
      );
    }
    if (req.session.data['whichBenefitDiscussed'].includes('ca')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/no-contact-added'
      );
    }
  }
);

// this is for radio selection for Session complete
router.post('/a/engagement-log-journey/add-note', function (req, res) {
  var addMore = req.session.data['add-another'];

  // Check whether the variable matches a condition
  if (addMore == 'Yes') {
    // Send user to next page
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/engagement-log-journey/add-note'
    );
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/engagement-log-journey/call-details-added-withoutNote'
    );
  }
});

// this is for radio selection for Session complete
router.post('/a/engagement-log-journey/session-completed', function (req, res) {
  var completeSession2 =
    req.session.data['Do-you-want-to-complete-the-session-opt2'];

  // Check whether the variable matches a condition
  if (completeSession2 == 'Yes') {
    // Send user to next page
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/engagement-log-journey/what-service-called-about'
    );
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/engagement-log-journey/session-completed'
    );
  }
});

router.post('/a/contact-history-ui', function (req, res) {
  res.render('/prototype-sprint-wise/ur-8/a/contact-history');
});

router.post('/a/call-log-journey/selectBenefit', function (req, res) {
  // req.session.data['whichBenefitDiscussed'] = ''; Bhavin
  req.session.data['questionAsk'] = '';
  req.session.data['questionAsk-ca'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
  req.session.data['npd_wasQuestionResolved'] = '';
  req.session.data['npa_wasQuestionResolved'] = '';
  req.session.data['ma_wasQuestionResolved'] = '';
  req.session.data['chpa_wasQuestionResolved'] = '';
  req.session.data['othQ_wasQuestionResolved'] = '';
  req.session.data['addNote'] = '';

  // console.log('value of the req.session.data.outcomePage: ------------>',req.session.data.outcomePage);

  if (
    req.session.data.outcomePage === '' ||
    req.session.data.outcomePage === undefined
  ) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed'
    );
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/add-another-benefit-for-call'
    );
  }
});

// Try for multiple benefite selection
router.post('/a/call-log-journey/selectQuestion', function (req, res) {
  let outcomePageData = [];
  outcomePageData = req.session.data.outcomePage
    ? req.session.data.outcomePage
    : [];
  if (req.session.data['whichBenefitDiscussed'] == '') {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error'
    );
  } else if (req.session.data['whichBenefitDiscussed'] == 'No benefit') {
    outcomePageData.push({
      benefit: 'No benefit',
      question: 'Does not apply',
      result: 'Does not apply',
    });
    req.session.data.outcomePage = outcomePageData;
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/noBenefit/what-did-you-discuss'
    );
  } else {
    if (req.session.data['whichBenefitDiscussed'].length > 1) {
      req.session.benefitList = req.session.data['whichBenefitDiscussed'];
      req.session.benefitLength = req.session.data['whichBenefitDiscussed'].length;
      req.session.save();
 
      console.log(
        'Multiple benefits: ------------>',
        req.session.data['whichBenefitDiscussed']
      );

      var isCA =
        req.session.data['whichBenefitDiscussed'].includes('Carer Allowance');
      var isESA = req.session.data['whichBenefitDiscussed'].includes(
        'Employment and Support Allowance'
      );
      var isPIP = req.session.data['whichBenefitDiscussed'].includes(
        'Personal Independence Payment'
      );

      if (isCA && isESA && !isPIP) {
        console.log('CA and ESA selected');
        req.session.data['questionAsk-ca'] = '';
        req.session.data['npd_wasQuestionResolved'] = '';
        req.session.data['npa_wasQuestionResolved'] = '';
        req.session.data['ma_wasQuestionResolved'] = '';
        req.session.data['chpa_wasQuestionResolved'] = '';
        req.session.data['othQ_wasQuestionResolved'] = '';
        req.session.data['questionAsk-esa'] = '';
        req.session.data['npd_wasQuestionResolved'] = '';
        req.session.data['npa_wasQuestionResolved'] = '';
        req.session.data['ma_wasQuestionResolved'] = '';
        req.session.data['chpa_wasQuestionResolved'] = '';
        req.session.data['othQ_wasQuestionResolved'] = '';
        // res.redirect(
        //   '/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/ca-questions-asked'
        // );
        // res.render(
        //   'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/ca-questions-asked'
        // );
        res.render('/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/ca-questions-asked');
      }

      if (isESA && isPIP && !isCA) {
        console.log('EAS and PIP selected');
        req.session.data['questionAsk-esa'] = '';
        req.session.data['npd_wasQuestionResolved'] = '';
        req.session.data['npa_wasQuestionResolved'] = '';
        req.session.data['ma_wasQuestionResolved'] = '';
        req.session.data['chpa_wasQuestionResolved'] = '';
        req.session.data['othQ_wasQuestionResolved'] = '';
        req.session.data['questionAsk-pip'] = '';
        req.session.data['npd_wasQuestionResolved'] = '';
        req.session.data['npa_wasQuestionResolved'] = '';
        req.session.data['ma_wasQuestionResolved'] = '';
        req.session.data['chpa_wasQuestionResolved'] = '';
        req.session.data['othQ_wasQuestionResolved'] = '';
        // res.render(
        //   'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/eas-pip/esa-questions-asked'
        // );
        res.render('/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/eas-pip/esa-questions-asked');
      }
      if (isCA && isPIP && !isESA) {
        console.log('CA and PIP selected');
      }

      if (isCA && isESA && isPIP) {
        console.log('CA, EAS and PIP selected');
      }

      // if(req.session.data['whichBenefitDiscussed'].includes("Carer's Allowance")) {
      //   res.redirect("benefit-question-asked/ca-questions-asked")
      // res.render(
      //   'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-questions-asked',
      //   {}
      //   );
      // }
      // else if(req.session.data['whichBenefitDiscussed'].includes("Employment and Support Allowance")) {
      //   res.redirect("benefit-question-asked/esa-questions-asked")
      // res.render(
      //   'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked',
      //   {}
      //   );
      // }
      //  else if(req.session.data['whichBenefitDiscussed'].includes("Personal Independence Payment")) {
      //   res.redirect("benefit-question-asked/pip-questions-asked")
      // res.render(
      //   'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/pip-questions-asked',
      //   {}
      //   );
      // }
    } else {
      console.log('Single benefits');
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-asked'
      );
    }
  }
});

router.post('/a/call-log-journey/questions-outcomes', function (req, res) {
  var isNpd = 'govuk-!-display-none';
  var isNpa = 'govuk-!-display-none';
  var isMp = 'govuk-!-display-none';
  var isRfch = 'govuk-!-display-none';
  var isOthQ = 'govuk-!-display-none';

  if (req.session.data['questionAsk'].includes('Something else')) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else'
    );
  } else {
    if (req.session.data['questionAsk'].includes('Next payment date')) {
      isNpd = 'govuk-!-display-block';
    }
    if (req.session.data['questionAsk'].includes('Next payment amount')) {
      isNpa = 'govuk-!-display-block';
    }
    if (req.session.data['questionAsk'].includes('Missing payment')) {
      isMp = 'govuk-!-display-block';
    }
    if (req.session.data['questionAsk'].includes('Change in payment amount')) {
      isRfch = 'govuk-!-display-block';
    }
    if (req.session.data['questionAsk'].includes('Other questions')) {
      isOthQ = 'govuk-!-display-block';
    }
    //All variable render here
    res.render(
      'prototype-sprint-wise/ur-8/a/call-log-journey/questionAnswered',
      {
        isNpd: isNpd,
        isNpa: isNpa,
        isMp: isMp,
        isRfch: isRfch,
        isOthQ: isOthQ,
      }
    );
  }
});

// Question answer for multipme benefit

// ----for CA with ESA----
router.post('/a/call-log-journey/benefit-question-asked/ca-eas/questions-outcomes-ca', function(req, res) {
  var isNpdCA = 'govuk-!-display-none';
  var isNpaCA = 'govuk-!-display-none';
  var isMpCA = 'govuk-!-display-none';
  var isRfchCA = 'govuk-!-display-none';
  var isOthQCA = 'govuk-!-display-none';

  // var benefitName = req.session.data['benefitList'];
  console.log('Benefit name:', req.session.data['benefitList']);
  try{
  if (req.session.data['benefitList'].includes("Carer Allowance")){
  
    if (req.session.data['questionAsk-ca'].includes('Something else')) {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else")
    } else {
    if(req.session.data['questionAsk-ca'].includes('Next payment date')) {
    isNpdCA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-ca'].includes('Next payment amount')) {
    isNpaCA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-ca'].includes('Missing payment')) {
    isMpCA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-ca'].includes('Change in payment amount')) {
    isRfchCA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-ca'].includes('Other questions')) {
      isOthQCA = 'govuk-!-display-block';
      }
    
    //All variable render here
    res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/questionAnswered-ca', {
      "isNpdCA": isNpdCA,
      "isNpaCA": isNpaCA,
      "isMpCA": isMpCA,
      "isRfchCA": isRfchCA,
      "isOthQCA": isOthQCA,
      })
    }
}
}
  catch(e){
    throw(e);
  }
})

// ----for ESA with CA----
router.post('/a/call-log-journey/benefit-question-asked/ca-eas/questions-outcomes-esa', function(req, res) {
  var isNpdESA = 'govuk-!-display-none';
  var isNpaESA = 'govuk-!-display-none';
  var isMpESA = 'govuk-!-display-none';
  var isRfchESA = 'govuk-!-display-none';
  var isOthQESA = 'govuk-!-display-none';


if (req.session.data['benefitList'].includes("Employment and Support Allowance")){
  if (req.session.data['questionAsk-esa'].includes('Something else')) {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else")
    } else {
    if(req.session.data['questionAsk-esa'].includes('Next payment date')) {
    isNpdESA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-esa'].includes('Next payment amount')) {
    isNpaESA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-esa'].includes('Missing payment')) {
    isMpESA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-esa'].includes('Change in payment amount')) {
    isRfchESA = 'govuk-!-display-block';
    }
    if(req.session.data['questionAsk-esa'].includes('Other questions')) {
      isOthQESA = 'govuk-!-display-block';
      }
    
    //All variable render here
    res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/questionAnswered-esa', {
      "isNpdESA": isNpdESA,
      "isNpaESA": isNpaESA,
      "isMpESA": isMpESA,
      "isRfchESA": isRfchESA,
      "isOthQESA": isOthQESA,
      })

    }
}
})

// ----for ESA with CA----
router.post(
  '/a/call-log-journey/benefit-question-asked/eas-pip/questions-outcomes-esa',
  function (req, res) {
    var isNpdESA = 'govuk-!-display-none';
    var isNpaESA = 'govuk-!-display-none';
    var isMpESA = 'govuk-!-display-none';
    var isRfchESA = 'govuk-!-display-none';
    var isOthQESA = 'govuk-!-display-none';

    if (
      req.session.data['whichBenefitDiscussed'].includes(
        'Employment and Support Allowance'
      )
    ) {
      if (req.session.data['questionAsk-esa'].includes('Something else')) {
        res.redirect(
          '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else'
        );
      } else {
        if (req.session.data['questionAsk-esa'].includes('Next payment date')) {
          isNpdESA = 'govuk-!-display-block';
        }
        if (
          req.session.data['questionAsk-esa'].includes('Next payment amount')
        ) {
          isNpaESA = 'govuk-!-display-block';
        }
        if (req.session.data['questionAsk-esa'].includes('Missing payment')) {
          isMpESA = 'govuk-!-display-block';
        }
        if (
          req.session.data['questionAsk-esa'].includes(
            'Change in payment amount'
          )
        ) {
          isRfchESA = 'govuk-!-display-block';
        }
        if (req.session.data['questionAsk-esa'].includes('Other questions')) {
          isOthQESA = 'govuk-!-display-block';
        }

        //All variable render here
        res.render(
          'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/eas-pip/questionAnswered-esa',
          {
            isNpdESA: isNpdESA,
            isNpaESA: isNpaESA,
            isMpESA: isMpESA,
            isRfchESA: isRfchESA,
            isOthQESA: isOthQESA,
          }
        );
      }
    }
  }
);

// ----for PIP with ESA----
router.post(
  '/a/call-log-journey/benefit-question-asked/eas-pip/questions-outcomes-pip',
  function (req, res) {
    var isNpdPIP = 'govuk-!-display-none';
    var isNpaPIP = 'govuk-!-display-none';
    var isMpPIP = 'govuk-!-display-none';
    var isRfchPIP = 'govuk-!-display-none';
    var isOthQPIP = 'govuk-!-display-none';

    if (
      req.session.data['whichBenefitDiscussed'].includes(
        'Personal Independence Payment'
      )
    ) {
      if (req.session.data['questionAsk-pip'].includes('Something else')) {
        res.redirect(
          '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else'
        );
      } else {
        if (req.session.data['questionAsk-pip'].includes('Next payment date')) {
          isNpdPIP = 'govuk-!-display-block';
        }
        if (
          req.session.data['questionAsk-pip'].includes('Next payment amount')
        ) {
          isNpaPIP = 'govuk-!-display-block';
        }
        if (req.session.data['questionAsk-pip'].includes('Missing payment')) {
          isMpPIP = 'govuk-!-display-block';
        }
        if (
          req.session.data['questionAsk-pip'].includes(
            'Change in payment amount'
          )
        ) {
          isRfchPIP = 'govuk-!-display-block';
        }
        if (req.session.data['questionAsk-pip'].includes('Other questions')) {
          isOthQPIP = 'govuk-!-display-block';
        }

        //All variable render here
        res.render(
          'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/eas-pip/questionAnswered-pip',
          {
            isNpdPIP: isNpdPIP,
            isNpaPIP: isNpaPIP,
            isMpPIP: isMpPIP,
            isRfchPIP: isRfchPIP,
            isOthQPIP: isOthQPIP,
          }
        );
      }
    }
  }
);

// ----end here-----

router.post('/questions-outcomes-pip', function (req, res) {
  var isNpdPIP = 'govuk-!-display-none';
  var isNpaPIP = 'govuk-!-display-none';
  var isMpPIP = 'govuk-!-display-none';
  var isRfchPIP = 'govuk-!-display-none';
  var isOthQPIP = 'govuk-!-display-none';
  var isCA =
    req.session.data['whichBenefitDiscussed'].includes('Carer Allowance');
  var isESA = req.session.data['whichBenefitDiscussed'].includes(
    'Employment and Support Allowance'
  );
  var isPIP = req.session.data['whichBenefitDiscussed'].includes(
    'Personal Independence Payment'
  );

  if (
    req.session.data['whichBenefitDiscussed'].includes(
      'Personal Independence Payment'
    )
  ) {
    if (req.session.data['questionAsk-pip'].includes('Something else')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else'
      );
    } else {
      if (req.session.data['questionAsk-pip'].includes('Next payment date')) {
        isNpdPIP = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk-pip'].includes('Next payment amount')) {
        isNpaPIP = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk-pip'].includes('Missing payment')) {
        isMpPIP = 'govuk-!-display-block';
      }
      if (
        req.session.data['questionAsk-pip'].includes('Change in payment amount')
      ) {
        isRfchPIP = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk-pip'].includes('Other questions')) {
        isOthQPIP = 'govuk-!-display-block';
      }

      if (isPIP && isESA) {
        //All variable render here
        res.render(
          'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-pip/questionAnswered-pip',
          {
            isNpdPIP: isNpdPIP,
            isNpaPIP: isNpaPIP,
            isMpPIP: isMpPIP,
            isRfchPIP: isRfchPIP,
            isOthQPIP: isOthQPIP,
          }
        );
      }
      if (isPIP && isCA) {
        //All variable render here
        res.render(
          'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-pip/questionAnswered-pip',
          {
            isNpdPIP: isNpdPIP,
            isNpaPIP: isNpaPIP,
            isMpPIP: isMpPIP,
            isRfchPIP: isRfchPIP,
            isOthQPIP: isOthQPIP,
          }
        );
      }
    }
  }
});

// ----end here----

// check your answer page for single benefits
router.post('/a/call-log-journey/added-call-details', function (req, res) {
  var benefitLenght = req.session.data['whichBenefitDiscussed'].length;
  // console.log('length is', benefitLenght);

  if (benefitLenght > 1) {
    var isCA =
      req.session.data['whichBenefitDiscussed'].includes('Carer Allowance');
    var isESA = req.session.data['whichBenefitDiscussed'].includes(
      'Employment and Support Allowance'
    );
    var isPIP = req.session.data['whichBenefitDiscussed'].includes(
      'Personal Independence Payment'
    );

    var isCACard = 'govuk-!-display-none';
    var isESACard = 'govuk-!-display-none';
    var isPIPCard = 'govuk-!-display-none';
    var isGENERALCard = 'govuk-!-display-none';

    if (isCA && isESA && !isPIP) {
      console.log('Display check answer for CA and ESA');
      isCACard = '';
      isESACard = '';
      isPIPCard = 'govuk-!-display-none';
      isGENERALCard = 'govuk-!-display-none';
      // for ca
      var isNpdCA = 'govuk-!-display-none';
      var isNpaCA = 'govuk-!-display-none';
      var isMpCA = 'govuk-!-display-none';
      var isRfchCA = 'govuk-!-display-none';
      var isOthQCA = 'govuk-!-display-none';
      var isSECA = 'govuk-!-display-none';
      var isNpdResolvedCA = '';
      var isNpaResolvedCA = '';
      var isMaRresolvedCA = '';
      var isRfchRresolvedCA = '';
      var isOthQresolvedCA = '';

      if (req.session.data['questionAsk-ca'].includes('Next payment date')) {
        isNpdCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Next payment amount')) {
        isNpaCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Missing payment')) {
        isMpCA = '';
      }
      if (
        req.session.data['questionAsk-ca'].includes('Change in payment amount')
      ) {
        isRfchCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Other questions')) {
        isOthQCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Something else')) {
        isSECA = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedCA = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedCA = 'govuk-tag--grey';
      }

      // for esa
      var isNpdESA = 'govuk-!-display-none';
      var isNpaESA = 'govuk-!-display-none';
      var isMpESA = 'govuk-!-display-none';
      var isRfchESA = 'govuk-!-display-none';
      var isOthQESA = 'govuk-!-display-none';
      var isSEESA = 'govuk-!-display-none';
      var isNpdResolvedESA = '';
      var isNpaResolvedESA = '';
      var isMaRresolvedESA = '';
      var isRfchRresolvedESA = '';
      var isOthQresolvedESA = '';

      if (req.session.data['questionAsk-esa'].includes('Next payment date')) {
        isNpdESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Next payment amount')) {
        isNpaESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Missing payment')) {
        isMpESA = '';
      }
      if (
        req.session.data['questionAsk-esa'].includes('Change in payment amount')
      ) {
        isRfchESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Other questions')) {
        isOthQESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Something else')) {
        isSEESA = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedESA = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedESA = 'govuk-tag--grey';
      }

      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
        {
          isCACard: isCACard,
          isESACard: isESACard,
          isPIPCard: isPIPCard,
          isGENERALCard: isGENERALCard,

          isNpdCA: isNpdCA,
          isNpaCA: isNpaCA,
          isMpCA: isMpCA,
          isRfchCA: isRfchCA,
          isOthQCA: isOthQCA,
          isSECA: isSECA,
          isNpdResolvedCA: isNpdResolvedCA,
          isNpaResolvedCA: isNpaResolvedCA,
          isMaRresolvedCA: isMaRresolvedCA,
          isRfchRresolvedCA: isRfchRresolvedCA,
          isOthQresolvedCA: isOthQresolvedCA,

          isNpdESA: isNpdESA,
          isNpaESA: isNpaESA,
          isMpESA: isMpESA,
          isRfchESA: isRfchESA,
          isOthQESA: isOthQESA,
          isSEESA: isSEESA,
          isNpdResolvedESA: isNpdResolvedESA,
          isNpaResolvedESA: isNpaResolvedESA,
          isMaRresolvedESA: isMaRresolvedESA,
          isRfchRresolvedESA: isRfchRresolvedESA,
          isOthQresolvedESA: isOthQresolvedESA,
        }
      );
    }
    if (isESA && isPIP && !isCA) {
      console.log('Display check answer for CA and ESA');
      isCACard = 'govuk-!-display-none';
      isGENERALCard = 'govuk-!-display-none';
      isESACard = '';
      isPIPCard = '';

      // for esa
      var isNpdESA = 'govuk-!-display-none';
      var isNpaESA = 'govuk-!-display-none';
      var isMpESA = 'govuk-!-display-none';
      var isRfchESA = 'govuk-!-display-none';
      var isOthQESA = 'govuk-!-display-none';
      var isSEESA = 'govuk-!-display-none';
      var isNpdResolvedESA = '';
      var isNpaResolvedESA = '';
      var isMaRresolvedESA = '';
      var isRfchRresolvedESA = '';
      var isOthQresolvedESA = '';

      if (req.session.data['questionAsk-esa'].includes('Next payment date')) {
        isNpdESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Next payment amount')) {
        isNpaESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Missing payment')) {
        isMpESA = '';
      }
      if (
        req.session.data['questionAsk-esa'].includes('Change in payment amount')
      ) {
        isRfchESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Other questions')) {
        isOthQESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Something else')) {
        isSEESA = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedESA = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedESA = 'govuk-tag--grey';
      }

      // for pip
      var isNpdPIP = 'govuk-!-display-none';
      var isNpaPIP = 'govuk-!-display-none';
      var isMpPIP = 'govuk-!-display-none';
      var isRfchPIP = 'govuk-!-display-none';
      var isOthQPIP = 'govuk-!-display-none';
      var isSEPIP = 'govuk-!-display-none';
      var isNpdResolvedPIP = '';
      var isNpaResolvedPIP = '';
      var isMaRresolvedPIP = '';
      var isRfchRresolvedPIP = '';
      var isOthQresolvedPIP = '';

      if (req.session.data['questionAsk-pip'].includes('Next payment date')) {
        isNpdPIP = '';
      }
      if (req.session.data['questionAsk-pip'].includes('Next payment amount')) {
        isNpaPIP = '';
      }
      if (req.session.data['questionAsk-pip'].includes('Missing payment')) {
        isMpPIP = '';
      }
      if (
        req.session.data['questionAsk-pip'].includes('Change in payment amount')
      ) {
        isRfchPIP = '';
      }
      if (req.session.data['questionAsk-pip'].includes('Other questions')) {
        isOthQPIP = '';
      }
      if (req.session.data['questionAsk-pip'].includes('Something else')) {
        isSEPIP = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedPIP = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedPIP = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedPIP = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedPIP = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedPIP = 'govuk-tag--grey';
      }

      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
        {
          isCACard: isCACard,
          isESACard: isESACard,
          isPIPCard: isPIPCard,
          isGENERALCard: isGENERALCard,

          isNpdPIP: isNpdPIP,
          isNpaPIP: isNpaPIP,
          isMpPIP: isMpPIP,
          isRfchPIP: isRfchPIP,
          isOthQPIP: isOthQPIP,
          isSEPIP: isSEPIP,
          isNpdResolvedPIP: isNpdResolvedPIP,
          isNpaResolvedPIP: isNpaResolvedPIP,
          isMaRresolvedPIP: isMaRresolvedPIP,
          isRfchRresolvedPIP: isRfchRresolvedPIP,
          isOthQresolvedPIP: isOthQresolvedPIP,

          isNpdESA: isNpdESA,
          isNpaESA: isNpaESA,
          isMpESA: isMpESA,
          isRfchESA: isRfchESA,
          isOthQESA: isOthQESA,
          isSEESA: isSEESA,
          isNpdResolvedESA: isNpdResolvedESA,
          isNpaResolvedESA: isNpaResolvedESA,
          isMaRresolvedESA: isMaRresolvedESA,
          isRfchRresolvedESA: isRfchRresolvedESA,
          isOthQresolvedESA: isOthQresolvedESA,
        }
      );
    }
  } else {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isNpdResolved = '';
    var isNpaResolved = '';
    var isMaRresolved = '';
    var isRfchRresolved = '';
    var isOthQresolved = '';

    if (req.session.data['questionAsk'].includes('Next payment date')) {
      isNpd = '';
    }
    if (req.session.data['questionAsk'].includes('Next payment amount')) {
      isNpa = '';
    }
    if (req.session.data['questionAsk'].includes('Missing payment')) {
      isMp = '';
    }
    if (req.session.data['questionAsk'].includes('Change in payment amount')) {
      isRfch = '';
    }
    if (req.session.data['questionAsk'].includes('Other questions')) {
      isOthQ = '';
    }
    if (req.session.data['questionAsk'].includes('Something else')) {
      isSE = '';
    }
    if (req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
      isNpdResolved = 'govuk-tag--grey';
    }
    if (req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
      isNpaResolved = 'govuk-tag--grey';
    }
    if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
      isMaRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
      isRfchRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')) {
      isOthQresolved = 'govuk-tag--grey';
    }

    // if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
    if (
      req.session.data['npd_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npd_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Resolved')
    ) {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    } else {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    }
  }
});


// check your answer page for CA and ESA
router.post('/a/call-log-journey/benefit-question-asked/ca-eas/added-call-details', function (req, res) {
  req.session.data['whichBenefitDiscussed'] = ['Carer Allowance', 'Employment and Support Allowance']
  // var benefitLenght = req.session.data['whichBenefitDiscussed'].length;
  // console.log('length is', benefitLenght);

    var isCA =
      req.session.data['whichBenefitDiscussed'].includes('Carer Allowance');
    var isESA = req.session.data['whichBenefitDiscussed'].includes(
      'Employment and Support Allowance'
    );
    // var isPIP = req.session.data['whichBenefitDiscussed'].includes(
    //   'Personal Independence Payment'
    // );

    var isCACard = 'govuk-!-display-none';
    var isESACard = 'govuk-!-display-none';
    var isPIPCard = 'govuk-!-display-none';
    var isGENERALCard = 'govuk-!-display-none';

      console.log('Display check answer for CA and ESA');
      isCACard = '';
      isESACard = '';
      isPIPCard = 'govuk-!-display-none';
      isGENERALCard = 'govuk-!-display-none';
      // for ca
      var isNpdCA = 'govuk-!-display-none';
      var isNpaCA = 'govuk-!-display-none';
      var isMpCA = 'govuk-!-display-none';
      var isRfchCA = 'govuk-!-display-none';
      var isOthQCA = 'govuk-!-display-none';
      var isSECA = 'govuk-!-display-none';
      var isNpdResolvedCA = '';
      var isNpaResolvedCA = '';
      var isMaRresolvedCA = '';
      var isRfchRresolvedCA = '';
      var isOthQresolvedCA = '';

      if (req.session.data['questionAsk-ca'].includes('Next payment date')) {
        isNpdCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Next payment amount')) {
        isNpaCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Missing payment')) {
        isMpCA = '';
      }
      if (
        req.session.data['questionAsk-ca'].includes('Change in payment amount')
      ) {
        isRfchCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Other questions')) {
        isOthQCA = '';
      }
      if (req.session.data['questionAsk-ca'].includes('Something else')) {
        isSECA = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedCA = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedCA = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedCA = 'govuk-tag--grey';
      }

      // for esa
      var isNpdESA = 'govuk-!-display-none';
      var isNpaESA = 'govuk-!-display-none';
      var isMpESA = 'govuk-!-display-none';
      var isRfchESA = 'govuk-!-display-none';
      var isOthQESA = 'govuk-!-display-none';
      var isSEESA = 'govuk-!-display-none';
      var isNpdResolvedESA = '';
      var isNpaResolvedESA = '';
      var isMaRresolvedESA = '';
      var isRfchRresolvedESA = '';
      var isOthQresolvedESA = '';

      if (req.session.data['questionAsk-esa'].includes('Next payment date')) {
        isNpdESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Next payment amount')) {
        isNpaESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Missing payment')) {
        isMpESA = '';
      }
      if (
        req.session.data['questionAsk-esa'].includes('Change in payment amount')
      ) {
        isRfchESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Other questions')) {
        isOthQESA = '';
      }
      if (req.session.data['questionAsk-esa'].includes('Something else')) {
        isSEESA = '';
      }
      if (
        req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpdResolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isNpaResolvedESA = 'govuk-tag--grey';
      }
      if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
        isMaRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
      ) {
        isRfchRresolvedESA = 'govuk-tag--grey';
      }
      if (
        req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
      ) {
        isOthQresolvedESA = 'govuk-tag--grey';
      }

      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/added-call-details',
        {
          isCACard: isCACard,
          isESACard: isESACard,
          isPIPCard: isPIPCard,
          isGENERALCard: isGENERALCard,

          isNpdCA: isNpdCA,
          isNpaCA: isNpaCA,
          isMpCA: isMpCA,
          isRfchCA: isRfchCA,
          isOthQCA: isOthQCA,
          isSECA: isSECA,
          isNpdResolvedCA: isNpdResolvedCA,
          isNpaResolvedCA: isNpaResolvedCA,
          isMaRresolvedCA: isMaRresolvedCA,
          isRfchRresolvedCA: isRfchRresolvedCA,
          isOthQresolvedCA: isOthQresolvedCA,

          isNpdESA: isNpdESA,
          isNpaESA: isNpaESA,
          isMpESA: isMpESA,
          isRfchESA: isRfchESA,
          isOthQESA: isOthQESA,
          isSEESA: isSEESA,
          isNpdResolvedESA: isNpdResolvedESA,
          isNpaResolvedESA: isNpaResolvedESA,
          isMaRresolvedESA: isMaRresolvedESA,
          isRfchRresolvedESA: isRfchRresolvedESA,
          isOthQresolvedESA: isOthQresolvedESA,
        }
      );
    // if (isESA && isPIP && !isCA) {
    //   console.log('Display check answer for CA and ESA');
    //   isCACard = 'govuk-!-display-none';
    //   isGENERALCard = 'govuk-!-display-none';
    //   isESACard = '';
    //   isPIPCard = '';

    //   // for esa
    //   var isNpdESA = 'govuk-!-display-none';
    //   var isNpaESA = 'govuk-!-display-none';
    //   var isMpESA = 'govuk-!-display-none';
    //   var isRfchESA = 'govuk-!-display-none';
    //   var isOthQESA = 'govuk-!-display-none';
    //   var isSEESA = 'govuk-!-display-none';
    //   var isNpdResolvedESA = '';
    //   var isNpaResolvedESA = '';
    //   var isMaRresolvedESA = '';
    //   var isRfchRresolvedESA = '';
    //   var isOthQresolvedESA = '';

    //   if (req.session.data['questionAsk-esa'].includes('Next payment date')) {
    //     isNpdESA = '';
    //   }
    //   if (req.session.data['questionAsk-esa'].includes('Next payment amount')) {
    //     isNpaESA = '';
    //   }
    //   if (req.session.data['questionAsk-esa'].includes('Missing payment')) {
    //     isMpESA = '';
    //   }
    //   if (
    //     req.session.data['questionAsk-esa'].includes('Change in payment amount')
    //   ) {
    //     isRfchESA = '';
    //   }
    //   if (req.session.data['questionAsk-esa'].includes('Other questions')) {
    //     isOthQESA = '';
    //   }
    //   if (req.session.data['questionAsk-esa'].includes('Something else')) {
    //     isSEESA = '';
    //   }
    //   if (
    //     req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isNpdResolvedESA = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isNpaResolvedESA = 'govuk-tag--grey';
    //   }
    //   if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
    //     isMaRresolvedESA = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isRfchRresolvedESA = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isOthQresolvedESA = 'govuk-tag--grey';
    //   }

    //   // for pip
    //   var isNpdPIP = 'govuk-!-display-none';
    //   var isNpaPIP = 'govuk-!-display-none';
    //   var isMpPIP = 'govuk-!-display-none';
    //   var isRfchPIP = 'govuk-!-display-none';
    //   var isOthQPIP = 'govuk-!-display-none';
    //   var isSEPIP = 'govuk-!-display-none';
    //   var isNpdResolvedPIP = '';
    //   var isNpaResolvedPIP = '';
    //   var isMaRresolvedPIP = '';
    //   var isRfchRresolvedPIP = '';
    //   var isOthQresolvedPIP = '';

    //   if (req.session.data['questionAsk-pip'].includes('Next payment date')) {
    //     isNpdPIP = '';
    //   }
    //   if (req.session.data['questionAsk-pip'].includes('Next payment amount')) {
    //     isNpaPIP = '';
    //   }
    //   if (req.session.data['questionAsk-pip'].includes('Missing payment')) {
    //     isMpPIP = '';
    //   }
    //   if (
    //     req.session.data['questionAsk-pip'].includes('Change in payment amount')
    //   ) {
    //     isRfchPIP = '';
    //   }
    //   if (req.session.data['questionAsk-pip'].includes('Other questions')) {
    //     isOthQPIP = '';
    //   }
    //   if (req.session.data['questionAsk-pip'].includes('Something else')) {
    //     isSEPIP = '';
    //   }
    //   if (
    //     req.session.data['npd_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isNpdResolvedPIP = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['npa_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isNpaResolvedPIP = 'govuk-tag--grey';
    //   }
    //   if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
    //     isMaRresolvedPIP = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isRfchRresolvedPIP = 'govuk-tag--grey';
    //   }
    //   if (
    //     req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')
    //   ) {
    //     isOthQresolvedPIP = 'govuk-tag--grey';
    //   }

    //   //All variable render here
    //   res.render(
    //     'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
    //     {
    //       isCACard: isCACard,
    //       isESACard: isESACard,
    //       isPIPCard: isPIPCard,
    //       isGENERALCard: isGENERALCard,

    //       isNpdPIP: isNpdPIP,
    //       isNpaPIP: isNpaPIP,
    //       isMpPIP: isMpPIP,
    //       isRfchPIP: isRfchPIP,
    //       isOthQPIP: isOthQPIP,
    //       isSEPIP: isSEPIP,
    //       isNpdResolvedPIP: isNpdResolvedPIP,
    //       isNpaResolvedPIP: isNpaResolvedPIP,
    //       isMaRresolvedPIP: isMaRresolvedPIP,
    //       isRfchRresolvedPIP: isRfchRresolvedPIP,
    //       isOthQresolvedPIP: isOthQresolvedPIP,

    //       isNpdESA: isNpdESA,
    //       isNpaESA: isNpaESA,
    //       isMpESA: isMpESA,
    //       isRfchESA: isRfchESA,
    //       isOthQESA: isOthQESA,
    //       isSEESA: isSEESA,
    //       isNpdResolvedESA: isNpdResolvedESA,
    //       isNpaResolvedESA: isNpaResolvedESA,
    //       isMaRresolvedESA: isMaRresolvedESA,
    //       isRfchRresolvedESA: isRfchRresolvedESA,
    //       isOthQresolvedESA: isOthQresolvedESA,
    //     }
    //   );
    // } 
});

router.post('/a/call-log-journey/checkAnswer2', function (req, res) {
  var isNpd = 'govuk-!-display-none';
  var isNpa = 'govuk-!-display-none';
  var isMp = 'govuk-!-display-none';
  var isRfch = 'govuk-!-display-none';
  var isOthQ = 'govuk-!-display-none';
  var isSE = 'govuk-!-display-none';
  var isNpdResolved = '';
  var isNpaResolved = '';
  var isMaRresolved = '';
  var isRfchRresolved = '';
  var isOthQresolved = '';

  if (req.session.data['questionAsk'].includes('Next payment date')) {
    isNpd = '';
  }
  if (req.session.data['questionAsk'].includes('Next payment amount')) {
    isNpa = '';
  }
  if (req.session.data['questionAsk'].includes('Missing payment')) {
    isMp = '';
  }
  if (req.session.data['questionAsk'].includes('Change in payment amount')) {
    isRfch = '';
  }
  if (req.session.data['questionAsk'].includes('Other questions')) {
    isOthQ = '';
  }
  if (req.session.data['questionAsk'].includes('Something else')) {
    isSE = '';
  }
  if (req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
    isNpdResolved = 'govuk-tag--grey';
  }
  if (req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
    isNpaResolved = 'govuk-tag--grey';
  }
  if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
    isMaRresolved = 'govuk-tag--grey';
  }
  if (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
    isRfchRresolved = 'govuk-tag--grey';
  }
  if (req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')) {
    isOthQresolved = 'govuk-tag--grey';
  }

  //All variable render here
  res.render(
    'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
    {
      isNpd: isNpd,
      isNpa: isNpa,
      isMp: isMp,
      isRfch: isRfch,
      isOthQ: isOthQ,
      isSE: isSE,
      isNpdResolved: isNpdResolved,
      isNpaResolved: isNpaResolved,
      isMaRresolved: isMaRresolved,
      isRfchRresolved: isRfchRresolved,
      isOthQresolved: isOthQresolved,
    }
  );
});

// check answer for something else question type
router.post(
  '/a/call-log-journey/added-call-details-for-something-else',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isSERresolved = '';

    if (req.session.data['questionAsk'].includes('Something else')) {
      isSE = '';
    }
    if (
      req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')
    ) {
      isSERresolved = 'govuk-tag--grey';
    }

    if (
      req.session.data['smelse_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')
    ) {
      // console.log('Rahul')
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isSERresolved: isSERresolved,
        }
      );
    } else {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/somethingElse-Error',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isSERresolved: isSERresolved,
          // "isNpdResolved": isNpdResolved,
          // "isNpaResolved": isNpaResolved,
          // "isMaRresolved": isMaRresolved,
          // "isRfchRresolved": isRfchRresolved,
        }
      );
    }
  }
);

router.post('/a/call-log-journey/check-for-add-note', function (req, res) {
  if (req.session.data['whichBenefitDiscussed'].length > 1) {
    if (req.session.data['discussAnthingElse'] == 'Yes') {
      res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/add-note');
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/added-details'
      );
    }
  } else {
    //All variable render here
    let outcomePageData = [];
    outcomePageData = req.session.data.outcomePage
      ? req.session.data.outcomePage
      : [];
    req.session.data['questionAsk'].map((item) => {
      if (item === 'Next payment date') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['npd_wasQuestionResolved'],
        });
      }
      if (item === 'Next payment amount') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['npa_wasQuestionResolved'],
        });
      }
      if (item === 'Missing payment') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['ma_wasQuestionResolved'],
        });
      }
      if (item === 'Change in payment amount') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['chpa_wasQuestionResolved'],
        });
      }
      if (item === 'Other questions') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['othQ_wasQuestionResolved'],
        });
      }
      if (item === 'Something else') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['smelse_wasQuestionResolved'],
        });
      }
    });
    req.session.data.outcomePage = outcomePageData;
    if (req.session.data['discussAnthingElse'] == 'Yes') {
      res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/add-note');
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/added-details'
      );
    }
  }
});

router.get('/a/call-log-journey/added-details', function (req, res) {
  res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-details', {
    outcomePage: req.session.data.outcomePage,
  });
});

// /add view already added note
router.post(
  '/a/call-log-journey/add-another-benefit-for-call',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/add-another-benefit-for-call'
    );
  }
);

// check phone call progress and complete confirmation.
router.post(
  '/a/call-log-journey/confirm_Complete_PhoneCall',
  function (req, res) {
    if (req.session.data.outcomePage === '') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/no-contact-added'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/add-more-reasons-for-call'
      );
    }

    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/add-more-reasons-for-call'
    );
  }
);

// update note before complete phone call
router.post(
  '/a/call-log-journey/updateNote_beforeCompleteCall',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session'
    );
  }
);

// Complete session
// router.post('/a/call-log-journey/check-phoneCall-completed', function (req, res) {
//     var checkPhoneCallCompleted = req.session.data['Do-you-want-to-complete-the-telephony-session'];
//     if (checkPhoneCallCompleted == 'Yes') {
//     res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed");
//     }
//     if (checkPhoneCallCompleted == 'No') {
//     res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/call-completed");
//     }
//     else {
//     res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/confirmation-complete-session-Error");
//     }
//     });

// Complete session
router.post(
  '/a/call-log-journey/check-phoneCall-completed',
  function (req, res) {
    var completeSession =
      req.session.data['Do-you-want-to-complete-the-telephony-session'];
    // Check whether the variable matches a condition
    if (completeSession == 'Yes') {
      req.session.data['whichBenefitDiscussed'] = '';
      req.session.data['questionAsk'] = '';
      req.session.data['npd_wasQuestionResolved'] = '';
      req.session.data['npa_wasQuestionResolved'] = '';
      req.session.data['ma_wasQuestionResolved'] = '';
      req.session.data['chpa_wasQuestionResolved'] = '';
      req.session.data['othQ_wasQuestionResolved'] = '';
      req.session.data['addNote'] = '';
      // Send user to next page
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/call-log-journey/call-completed'
      );
    }
  }
);

router.post('/a/addAnotherBenefit', function (req, res) {
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['questionAsk'] = '';
  req.session.data['npd_wasQuestionResolved'] = '';
  req.session.data['npa_wasQuestionResolved'] = '';
  req.session.data['ma_wasQuestionResolved'] = '';
  req.session.data['chpa_wasQuestionResolved'] = '';
  req.session.data['othQ_wasQuestionResolved'] = '';
  req.session.data['addNote'] = '';
  if (req.session.data['addAnotherBenefit'] == 'Yes') {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed'
    );
  } else {
    res.redirect('/prototype-sprint-wise/ur-8/a/home');
  }
});

// Unhappy scenario condition - add another reason?
router.post('/a/goToHome', function (req, res) {
  if (req.session.data['unHappyAddreason'] == 'Yes') {
    req.session.data['whichBenefitDiscussed'] = '';
    req.session.data['questionAsk'] = '';
    req.session.data['npd_wasQuestionResolved'] = '';
    req.session.data['npa_wasQuestionResolved'] = '';
    req.session.data['ma_wasQuestionResolved'] = '';
    req.session.data['chpa_wasQuestionResolved'] = '';
    req.session.data['othQ_wasQuestionResolved'] = '';
    req.session.data['addNote'] = '';
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed'
    );
  } else {
    res.redirect('/prototype-sprint-wise/ur-8/a/home');
  }
});

// Filter for payment history and contact history (Bhavin)

// Payment history
router.post('/a/payment', function (req, res) {
  let paymentTableData;
  if (
    req.body.benefit !== undefined &&
    req.body.benefit !== '' &&
    req.body.benefit !== '_unchecked'
  ) {
    paymentTableData = paymentData.data.filter((context) => {
      context = req.body.benefit.includes(context.benefit);
      return context;
    });
    req.session.data.paymentTableData = paymentTableData;
    req.session.data.paymentTableFilterEsa = req.body.benefit.includes(
      'Employment and Support Allowance'
    )
      ? true
      : false;
    req.session.data.paymentTableFilterCa = req.body.benefit.includes(
      "Carer's Allowance"
    )
      ? true
      : false;
    req.session.data.paymentTableFilterPip = req.body.benefit.includes(
      'Personal Independence Payment'
    )
      ? true
      : false;
  } else {
    req.session.data.paymentTableFilterEsa = false;
    req.session.data.paymentTableFilterCa = false;
    req.session.data.paymentTableFilterPip = false;
    req.session.data.paymentTableData = paymentData.data;
  }
  res.redirect('payment#history');
});

// Contact history filter code start here
router.post('/a/contact-history', function (req, res) {
  console.log(req);
  let fromDate;
  let toDate;
  if (
    req.body['from-date-day'] !== undefined &&
    req.body['from-date-day'] !== ''
  ) {
    fromDate = new Date(
      `${req.body['from-date-month']}/${req.body['from-date-day']}/${req.body['from-date-year']}`
    );
    req.session.data.fromDay = parseInt(req.body['from-date-day']);
    req.session.data.fromMonth = parseInt(req.body['from-date-month']);
    req.session.data.fromYear = parseInt(req.body['from-date-year']);
  }
  if (req.body['to-date-day'] !== undefined && req.body['to-date-day'] !== '') {
    toDate = new Date(
      `${req.body['to-date-month']}/${req.body['to-date-day']}/${req.body['to-date-year']} 23:59:59`
    );
    req.session.data.toDay = parseInt(req.body['to-date-day']);
    req.session.data.toMonth = parseInt(req.body['to-date-month']);
    req.session.data.toYear = parseInt(req.body['to-date-year']);
  }
  let tableValue = data.contacts.filter((context) => {
    if (
      req.body['from-date-day'] !== undefined &&
      req.body['from-date-day'] !== ''
    ) {
      context =
        new Date(context.createdDate) >= fromDate &&
        new Date(context.createdDate) <= toDate;
    }
    return context;
  });
  if (
    req.body.benefit !== undefined &&
    req.body.benefit !== '' &&
    req.body.benefit !== '_unchecked'
  ) {
    // console.log('Executing benefit logic: ',req.body.benefit);
    tableValue = tableValue.filter((context) => {
      context = req.body.benefit.includes(context.benefit);
      return context;
    });
  }
  tableValue.map((item) => {
    item.createdDate = moment(new Date(item.createdDate)).format('llll');
  });
  req.session.data.tableValue = tableValue;
  req.session.data.fromDay = req.body['from-date-day']
    ? req.body['from-date-day']
    : '';
  req.session.data.fromMonth = req.body['from-date-month']
    ? req.body['from-date-month']
    : '';
  req.session.data.fromYear = req.body['from-date-year']
    ? req.body['from-date-year']
    : '';

  req.session.data.toDay = req.body['to-date-day']
    ? req.body['to-date-day']
    : '';
  req.session.data.toMonth = req.body['to-date-month']
    ? req.body['to-date-month']
    : '';
  req.session.data.toYear = req.body['to-date-year']
    ? req.body['to-date-year']
    : '';

  req.session.data.tableFilterEsa = req.body.benefit.includes(
    'Employment and support Allowance'
  )
    ? true
    : false;
  req.session.data.tableFilterJa = req.body.benefit.includes(
    'Jobseeker Allowance'
  )
    ? true
    : false;
  req.session.data.tableFilterPip = req.body.benefit.includes(
    'Personal Independence Payment'
  )
    ? true
    : false;

  req.session.data.tableFilterNpd = req.body.querySubContext.includes(
    'Next payment date'
  )
    ? true
    : false;
  req.session.data.tableFilterNpa = req.body.querySubContext.includes(
    'Next payment amount'
  )
    ? true
    : false;
  req.session.data.tableFilterMp = req.body.querySubContext.includes(
    'Missing payment'
  )
    ? true
    : false;
  req.session.data.tableFilterCPA = req.body.querySubContext.includes(
    'Change in payment amount'
  )
    ? true
    : false;
  req.session.data.tableFilterOQ = req.body.querySubContext.includes(
    'Other questions'
  )
    ? true
    : false;
  res.redirect('contact-history');
});


// Payment history
router.post('/a/different-type-contact-user/payment', function (req, res) {
  let paymentTableData;
  if (
    req.body.benefit !== undefined &&
    req.body.benefit !== '' &&
    req.body.benefit !== '_unchecked'
  ) {
    paymentTableData = paymentDataDiffentUserMVP1_0.data.filter((context) => {
      context = req.body.benefit.includes(context.benefit);
      return context;
    });
    req.session.data.paymentTableData = paymentTableData;
    req.session.data.paymentTableFilterEsa = req.body.benefit.includes(
      'Employment and Support Allowance'
    )
      ? true
      : false;
    req.session.data.paymentTableFilterCa = req.body.benefit.includes(
      "Carer's Allowance"
    )
      ? true
      : false;
    req.session.data.paymentTableFilterPip = req.body.benefit.includes(
      'Personal Independence Payment'
    )
      ? true
      : false;
  } else {
    req.session.data.paymentTableFilterEsa = false;
    req.session.data.paymentTableFilterCa = false;
    req.session.data.paymentTableFilterPip = false;
    req.session.data.paymentTableData = paymentDataDiffentUserMVP1_0.data;
  }
  res.redirect('payment#history');
});

// Filter code for UR8
// router.post('/a/contact-history',function(req,res){

// });

// Contact log details fro A different contact type

router.post(
  '/a/different-type-contact-user/call-log-journey/confirmation-complete-session',
  function (req, res) {
    // console.log('Value of the session varaible: --------------------------------->',req.session.data['What-services-have-they-called-about']);
    if (req.session.data['whichBenefitDiscussed'].includes('esa')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session'
      );
    } else if (req.session.data['whichBenefitDiscussed'].includes('pip')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session'
      );
    }
    if (req.session.data['whichBenefitDiscussed'].includes('ca')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/no-contact-added'
      );
    }
  }
);
// this is for radio selection for Session complete
router.post(
  '/a/different-type-contact-user/engagement-log-journey/add-note',
  function (req, res) {
    var addMore = req.session.data['add-another'];

    // Check whether the variable matches a condition
    if (addMore == 'Yes') {
      // Send user to next page
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/add-note'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/call-details-added-withoutNote'
      );
    }
  }
);

// this is for radio selection for Session complete
router.post(
  '/a/different-type-contact-user/engagement-log-journey/session-completed',
  function (req, res) {
    var completeSession2 =
      req.session.data['Do-you-want-to-complete-the-session-opt2'];

    // Check whether the variable matches a condition
    if (completeSession2 == 'Yes') {
      // Send user to next page
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/what-service-called-about'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/session-completed'
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/contact-history-ui',
  function (req, res) {
    res.render(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-history'
    );
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/selectBenefit',
  function (req, res) {
    req.session.data['whichBenefitDiscussed'] = '';
    req.session.data['questionAsk'] = '';
    req.session.data['questionAsk-ca'] = '';
    req.session.data['questionAsk-esa'] = '';
    req.session.data['questionAsk-pip'] = '';
    req.session.data['npd_wasQuestionResolved'] = '';
    req.session.data['npa_wasQuestionResolved'] = '';
    req.session.data['ma_wasQuestionResolved'] = '';
    req.session.data['chpa_wasQuestionResolved'] = '';
    req.session.data['othQ_wasQuestionResolved'] = '';
    req.session.data['addNote'] = '';

    if (req.session.data.outcomePage === '') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call'
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/selectQuestion',
  function (req, res) {
    let outcomePageData = [];
    outcomePageData = req.session.data.outcomePage
      ? req.session.data.outcomePage
      : [];
    // Send user to error page
    if (req.session.data['whichBenefitDiscussed'] == '') {
      // errMsg_Benefit = "Select which benefit did you discuss with the caller";
      // res.render('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error', { "errMsg_Benefit": errMsg_Benefit });
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error'
      );
    } else if (
      req.session.data['whichBenefitDiscussed'] == 'A different benefit'
    ) {
      outcomePageData.push({
        benefit: 'A different benefit',
        question: 'Does not apply',
        result: 'Does not apply',
      });
      req.session.data.outcomePage = outcomePageData;
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/noBenefit/what-was-contact-about-notes'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/what-was-contact-about'
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/questions-outcomes',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';

    if (req.session.data['questionAsk'].includes('Something else')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/questions-outcomes-for-something-else'
      );
    } else {
      if (req.session.data['questionAsk'].includes('Next payment date')) {
        isNpd = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Next payment amount')) {
        isNpa = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Missing payment')) {
        isMp = 'govuk-!-display-block';
      }
      if (
        req.session.data['questionAsk'].includes('Change in payment amount')
      ) {
        isRfch = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Other questions')) {
        isOthQ = 'govuk-!-display-block';
      }
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/questionAnswered',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
        }
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/wasQuestionResolved',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';

    if (req.session.data['questionAsk'].includes('Something else')) {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/noQuestion/askedClQ'
      );
    } else {
      if (req.session.data['questionAsk'].includes('Next payment date')) {
        isNpd = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Next payment amount')) {
        isNpa = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Missing payment')) {
        isMp = 'govuk-!-display-block';
      }
      if (
        req.session.data['questionAsk'].includes('Change in payment amount')
      ) {
        isRfch = 'govuk-!-display-block';
      }
      if (req.session.data['questionAsk'].includes('Other questions')) {
        isOthQ = 'govuk-!-display-block';
      }

      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/questionAnswered',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
        }
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/check-answers',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isNpdResolved = '';
    var isNpaResolved = '';
    var isMaRresolved = '';
    var isRfchRresolved = '';
    var isOthQresolved = '';

    if (req.session.data['questionAsk'].includes('Next payment date')) {
      isNpd = '';
    }
    if (req.session.data['questionAsk'].includes('Next payment amount')) {
      isNpa = '';
    }
    if (req.session.data['questionAsk'].includes('Missing payment')) {
      isMp = '';
    }
    if (req.session.data['questionAsk'].includes('Change in payment amount')) {
      isRfch = '';
    }
    if (req.session.data['questionAsk'].includes('Other questions')) {
      isOthQ = '';
    }
    if (req.session.data['questionAsk'].includes('Something else')) {
      isSE = '';
    }
    if (req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
      isNpdResolved = 'govuk-tag--grey';
    }
    if (req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
      isNpaResolved = 'govuk-tag--grey';
    }
    if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
      isMaRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
      isRfchRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')) {
      isOthQresolved = 'govuk-tag--grey';
    }

    // if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
    if (
      req.session.data['npd_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npd_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Resolved')
    ) {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-details',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    } else {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    }
  }
);

// router.post('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', function(req, res) {

//     var isNpd = 'govuk-!-display-none';
//     var isNpa = 'govuk-!-display-none';
//     var isMp = 'govuk-!-display-none';
//     var isRfch = 'govuk-!-display-none';
//     var isSE = 'govuk-!-display-none';
//     var isNpdResolved = '';
//     var isNpaResolved = '';
//     var isMaRresolved = '';
//     var isRfchRresolved = '';

//     if(req.session.data['questionAsk'].includes('Next payment date')) {
//       isNpd = '';
//     }
//     if(req.session.data['questionAsk'].includes('Next payment amount')) {
//       isNpa = '';
//     }
//     if(req.session.data['questionAsk'].includes('Missing payment')) {
//       isMp = '';
//     }
//     if(req.session.data['questionAsk'].includes('Change in payment amount')) {
//       isRfch = '';
//     }
//     if(req.session.data['questionAsk'].includes('Something else')) {
//       isSE = '';
//     }
//     if(req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
//       isNpdResolved = 'govuk-tag--grey';
//     }
//     if(req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
//       isNpaResolved = 'govuk-tag--grey';
//     }
//     if(req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
//       isMaRresolved = 'govuk-tag--grey';
//     }
//     if(req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
//       isRfchRresolved = 'govuk-tag--grey';
//     }

//     // if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
//     if ((req.session.data['npd_wasQuestionResolved'].includes('Not resolved') || req.session.data['npd_wasQuestionResolved'].includes('Resolved')) || (req.session.data['npa_wasQuestionResolved'].includes('Not resolved') || req.session.data['npa_wasQuestionResolved'].includes('Resolved')) || (req.session.data['ma_wasQuestionResolved'].includes('Not resolved') || req.session.data['ma_wasQuestionResolved'].includes('Resolved')) || (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') || req.session.data['chpa_wasQuestionResolved'].includes('Resolved'))) {
//       //All variable render here
//         res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', {
//           "isNpd": isNpd,
//           "isNpa": isNpa,
//           "isMp": isMp,
//           "isRfch": isRfch,
//           "isSE": isSE,
//           "isNpdResolved": isNpdResolved,
//           "isNpaResolved": isNpaResolved,
//           "isMaRresolved": isMaRresolved,
//           "isRfchRresolved": isRfchRresolved,
//           })

//     } else {
//       //All variable render here
//       res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error', {
//         "isNpd": isNpd,
//         "isNpa": isNpa,
//         "isMp": isMp,
//         "isRfch": isRfch,
//         "isSE": isSE,
//         "isNpdResolved": isNpdResolved,
//         "isNpaResolved": isNpaResolved,
//         "isMaRresolved": isMaRresolved,
//         "isRfchRresolved": isRfchRresolved,
//         });
//     }

// })

router.post(
  '/a/different-type-contact-user/call-log-journey/checkAnswer2',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isNpdResolved = '';
    var isNpaResolved = '';
    var isMaRresolved = '';
    var isRfchRresolved = '';

    if (req.session.data['questionAsk'].includes('Next payment date')) {
      isNpd = '';
    }
    if (req.session.data['questionAsk'].includes('Next payment amount')) {
      isNpa = '';
    }
    if (req.session.data['questionAsk'].includes('Missing payment')) {
      isMp = '';
    }
    if (req.session.data['questionAsk'].includes('Change in payment amount')) {
      isRfch = '';
    }
    if (req.session.data['questionAsk'].includes('Something else')) {
      isSE = '';
    }
    if (req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
      isNpdResolved = 'govuk-tag--grey';
    }
    if (req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
      isNpaResolved = 'govuk-tag--grey';
    }
    if (req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
      isMaRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
      isRfchRresolved = 'govuk-tag--grey';
    }

    //All variable render here
    res.render(
      'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-details',
      {
        isNpd: isNpd,
        isNpa: isNpa,
        isMp: isMp,
        isRfch: isRfch,
        isSE: isSE,
        isNpdResolved: isNpdResolved,
        isNpaResolved: isNpaResolved,
        isMaRresolved: isMaRresolved,
        isRfchRresolved: isRfchRresolved,
      }
    );
  }
);

// check answer for something else question type
router.post(
  '/a/different-type-contact-user/call-log-journey/checkAnswerForsomethingElse',
  function (req, res) {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isSERresolved = '';

    if (req.session.data['questionAsk'].includes('Something else')) {
      isSE = '';
    }
    if (
      req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')
    ) {
      isSERresolved = 'govuk-tag--grey';
    }

    if (
      req.session.data['smelse_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')
    ) {
      // console.log('Rahul')
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-details',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isSE: isSE,
          isSERresolved: isSERresolved,
        }
      );
    } else {
      console.log('Neha');
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/somethingElse-Error',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isSE: isSE,
          isSERresolved: isSERresolved,
          // "isNpdResolved": isNpdResolved,
          // "isNpaResolved": isNpaResolved,
          // "isMaRresolved": isMaRresolved,
          // "isRfchRresolved": isRfchRresolved,
        }
      );
    }
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/check-for-add-note',
  function (req, res) {
    //All variable render here
    let outcomePageData = [];
    outcomePageData = req.session.data.outcomePage
      ? req.session.data.outcomePage
      : [];
    req.session.data['questionAsk'].map((item) => {
      if (item === 'Next payment date') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['npd_wasQuestionResolved'],
        });
      }
      if (item === 'Next payment amount') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['npa_wasQuestionResolved'],
        });
      }
      if (item === 'Missing payment') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['ma_wasQuestionResolved'],
        });
      }
      if (item === 'Change in payment amount') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['chpa_wasQuestionResolved'],
        });
      }
      if (item === 'Something else') {
        outcomePageData.push({
          benefit: req.session.data['whichBenefitDiscussed'],
          question: item,
          result: req.session.data['smelse_wasQuestionResolved'],
        });
      }
    });
    req.session.data.outcomePage = outcomePageData;
    if (req.session.data['discussAnthingElse'] == 'Yes') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-note'
      );
    } else {
      res.render(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/added-details',
        {
          outcomePage: req.session.data.outcomePage,
        }
      );
    }
  }
);

// /add view already added note
router.post(
  '/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call'
    );
  }
);

// check phone call progress and complete confirmation.
router.post(
  '/a/different-type-contact-user/call-log-journey/confirm_Complete_PhoneCall',
  function (req, res) {
    if (req.session.data.outcomePage === '') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/no-contact-added'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-details-option'
      );
    }

    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-details-option'
    );
  }
);

// update note before complete phone call
router.post(
  '/a/different-type-contact-user/call-log-journey/updateNote_beforeCompleteCall',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session'
    );
  }
);

// Complete session
router.post(
  '/a/different-type-contact-user/call-log-journey/phoneCall-completed',
  function (req, res) {
    var completeSession =
      req.session.data['Do-you-want-to-complete-the-session-opt2'];
    // Check whether the variable matches a condition
    if (completeSession == 'Yes') {
      req.session.data['whichBenefitDiscussed'] = '';
      req.session.data['questionAsk'] = '';
      req.session.data['npd_wasQuestionResolved'] = '';
      req.session.data['npa_wasQuestionResolved'] = '';
      req.session.data['ma_wasQuestionResolved'] = '';
      req.session.data['chpa_wasQuestionResolved'] = '';
      req.session.data['othQ_wasQuestionResolved'] = '';
      // Send user to next page
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for'
      );
    } else {
      res.redirect('/prototype-sprint-wise/ur-8/scenario-1/index');
    }
  }
);

// Start New Session -Ask before Complete phone call

router.post('/a/start-new-session', function (req, res) {
  var completeSession = req.session.data['add-callDetails'];
  // Check whether the variable matches a condition
  if (completeSession == 'No') {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/ur-8/a/index');
  } else {
    req.session.data['whichBenefitDiscussed'] = '';
    req.session.data['questionAsk'] = '';
    req.session.data['npd_wasQuestionResolved'] = '';
    req.session.data['npa_wasQuestionResolved'] = '';
    req.session.data['ma_wasQuestionResolved'] = '';
    req.session.data['chpa_wasQuestionResolved'] = '';
    req.session.data['othQ_wasQuestionResolved'] = '';
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for'
    );
  }
});

router.post(
  '/a/different-type-contact-user/addAnotherBenefit',
  function (req, res) {
    req.session.data['whichBenefitDiscussed'] = '';
    req.session.data['questionAsk'] = '';
    req.session.data['npd_wasQuestionResolved'] = '';
    req.session.data['npa_wasQuestionResolved'] = '';
    req.session.data['ma_wasQuestionResolved'] = '';
    req.session.data['chpa_wasQuestionResolved'] = '';
    req.session.data['addNote'] = '';
    if (req.session.data['addAnotherBenefit'] == 'Yes') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/home'
      );
    }
  }
);

// Unhappy scenario condition - add another reason?
router.post('/a/different-type-contact-user/goToHome', function (req, res) {
  if (req.session.data['unHappyAddreason'] == 'Yes') {
    req.session.data['whichBenefitDiscussed'] = '';
    req.session.data['questionAsk'] = '';
    req.session.data['npd_wasQuestionResolved'] = '';
    req.session.data['npa_wasQuestionResolved'] = '';
    req.session.data['ma_wasQuestionResolved'] = '';
    req.session.data['chpa_wasQuestionResolved'] = '';
    req.session.data['othQ_wasQuestionResolved'] = '';
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for'
    );
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/home'
    );
  }
});

router.post(
  '/a/call-log-journey/do-you-want-to-complete-call',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/check-call-completion'
    );
  }
);

router.post(
  '/a/different-type-contact-user/call-log-journey/do-you-want-to-complete-call',
  function (req, res) {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-call-completion'
    );
  }
);

// Do you want to complete the call?
router.post('/a/call-log-journey/call-completed', function (req, res) {
  // Check whether the variable matches a condition
  var checkPhoneCallCompleted =
    req.session.data['Do you want to complete the call'];
  if (checkPhoneCallCompleted == 'back to home page') {
    res.redirect('/prototype-sprint-wise/ur-8/a/home');
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/a/call-log-journey/call-completed'
    );
  }
});

// Do you want to complete the call?
router.post(
  '/a/different-type-contact-user/call-log-journey/call-completed',
  function (req, res) {
    // Check whether the variable matches a condition
    var checkPhoneCallCompleted =
      req.session.data['Do you want to complete the call'];
    if (checkPhoneCallCompleted == 'back to home page') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/home'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/call-completed'
      );
    }
  }
);

router.post(
  '/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/benefitPages',
  function (req, res) {
    var pageLength = '';
    var isAa = req.session.data['whichBenefitDiscussed'].includes(
      'Attendance Allowance'
    );
    var isEsa = req.session.data['whichBenefitDiscussed'].includes(
      'Employment and Support Allowance'
    );
    var isPip = req.session.data['whichBenefitDiscussed'].includes(
      'Personal Independence Payment'
    );
    if (req.session.data['whichBenefitDiscussed'].length == 1) {
      pageLength = 'Services 1 of 1';
    } else if (req.session.data['whichBenefitDiscussed'].length == 2) {
      pageLength = 'Services 1 of 2';
    } else {
      pageLength = 'Services 1 of 3';
    }

    if (isAa && isEsa) {
      res.render(
        'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/aa-questions-asked',
        {
          nextUrl:
            'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked',
          pageLength: pageLength,
        }
      );
    }
  }
);


router.get(
  '/a/call-log-journey/benefit-question-asked/ca-eas/ca-questions-asked',
  function (req, res) {
    console.log('Inside my route  a------------------------->');
    res.render(
      'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/ca-questions-asked',
      {}
    );
  }
);

router.get(
  '/a/call-log-journey/benefit-question-asked/ca-eas/esa-questions-asked',
  function (req, res) {
    console.log('Inside my route a------------------------->');
    res.render(
      'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/ca-eas/esa-questions-asked',
      {}
    );
  }
);



// ---------------------> startic screens for UR8 scenarios <-----------------------------



// --------------------> scenarios-1 start here <----------------------

// this is for NINO number
router.post('/scenario-1/index', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-sprint-wise/ur-8/scenario-1/index');
});

router.post('/scenario-1/why-checking-info', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  // req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['esaPayment'] = '';
  req.session.data['pipPayment'] = '';
  req.session.data['caPayment'] = '';
  req.session.data['ca-payment'] = '';
  req.session.data['esa-payment'] = '';
  req.session.data['pip-payment'] = '';
  req.session.data['esa-process-chasing'] = '';
  req.session.data['pip-process-chasing'] = '';
  req.session.data['ca-process-chasing'] = '';
  req.session.data['esa-coc'] = '';
  req.session.data['pip-coc'] = '';
  req.session.data['ca-coc'] = '';
  req.session.data['esa-general'] = '';
  req.session.data['pip-general'] = '';
  req.session.data['ca-general'] = '';
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    // Send user to next page
    // console.log('This is correct')
    // res.render('prototype-sprint-wise/ur-8/a/why-you-checking-benefit-Info');
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/why-checking-info');
  } else {
    res.redirect('back');
    // var errMsg = '';
    // if (
    //   req.session.data['nino-number-ur-8'] == '' ||
    //   req.session.data['nino-number-ur-8'] == undefined
    // ) {
    //   errMsg = "Enter the customer's National Insurance number";
    // } else {
    //   errMsg =
    //     "Enter the customer's National Insurance number in the correct format";
    // }
    // // Send user to error page
    // res.render(
    //   '/prototype-sprint-wise/ur-8/scenario-1/error-nino-number',
    //   { errMsg: errMsg }
    // );
  }
});

router.post('/scenario-1/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';

  if (req.session.data['What-type-of-contact'] == 'Telephone call with') {
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-with');
  } else {
    if (req.session.data['What-type-of-contact'] == 'Contact with') {
      res.redirect(
        '/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with'
      );
    } else {
      res.redirect('/prototype-sprint-wise/ur-8/scenario-1/view-only-user/home');
    }
  }
  // res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
});

router.post('/scenario-1/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-sprint-wise/ur-8/a/call-with');
    res.redirect('back');
  } else {
    if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    // var b = "with";
    // req.session.data['Who-is-the-phone-call-with-ur8'] = b + " " + contactType;
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/home');
  }
});

router.post('/scenario-1/call-log-journey/benefits-discussed', function (req, res) {
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['questionAsk'] = '';
  req.session.data['questionAsk-ca'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
  
  req.session.data['npd_wasQuestionResolved-esa'] = '';
  req.session.data['npa_wasQuestionResolved-esa'] = '';
  req.session.data['ma_wasQuestionResolved-esa'] = '';
  req.session.data['chpa_wasQuestionResolved-esa'] = '';
  req.session.data['othQ_wasQuestionResolved-esa'] = '';
  
  req.session.data['npd_wasQuestionResolved-pip'] = '';
  req.session.data['npa_wasQuestionResolved-pip'] = '';
  req.session.data['ma_wasQuestionResolved-pip'] = '';
  req.session.data['chpa_wasQuestionResolved-pip'] = '';
  req.session.data['othQ_wasQuestionResolved-pip'] = '';
  req.session.data['addNote'] = '';

  res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/benefits-discussed');
});

router.post('/scenario-1/call-log-journey/questions-asked', function (req, res) {
  req.session.data['questionAsk'] = '';
  req.session.data['npd_wasQuestionResolved']= '';
  req.session.data['npa_wasQuestionResolved']= '';
  if (req.session.data['whichBenefitDiscussed'].length>1){
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questions-asked-esa');
  } else{
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questions-asked');
  }
});

router.post('/scenario-1/call-log-journey/questions-outcomes', function (req, res) {
  if (req.session.data['whichBenefitDiscussed']>1){
    res.redirect('prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questions-asked-esa');
  } else {
  var isNpd = 'govuk-!-display-none';
  var isNpa = 'govuk-!-display-none';
  var isMp = 'govuk-!-display-none';
  var isRfch = 'govuk-!-display-none';
  var isOthQ = 'govuk-!-display-none';

  if (req.session.data['questionAsk'] == 'Something else') {
    res.redirect(
      '/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questions-outcomes-for-something-else'
    );
  } else {

    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questionAnswered');
    // if (req.session.data['questionAsk'].includes('Next payment date')) {
    //   isNpd = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'].includes('Next payment amount')) {
    //   isNpa = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'].includes('Missing payment')) {
    //   isMp = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'].includes('Change in payment amount')) {
    //   isRfch = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'].includes('Other questions')) {
    //   isOthQ = 'govuk-!-display-block';
    // }

    // if (req.session.data['questionAsk'] == 'Next payment date') {
    //   isNpd = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk']== 'Next payment amount') {
    //   isNpa = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'] == 'Missing payment') {
    //   isMp = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'] == 'Change in payment amount') {
    //   isRfch = 'govuk-!-display-block';
    // }
    // if (req.session.data['questionAsk'] == 'Other questions') {
    //   isOthQ = 'govuk-!-display-block';
    // }


    // //All variable render here
    // res.render(
    //   'prototype-sprint-wise/ur-8/scenario-1/call-log-journey/questionAnswered',
    //   {
    //     isNpd: isNpd,
    //     isNpa: isNpa,
    //     isMp: isMp,
    //     isRfch: isRfch,
    //     isOthQ: isOthQ,
    //   }
    // );

  }
  }
});

// check your answer page for single benefits
router.post('/scenario-1/call-log-journey/added-call-details', function (req, res) {
  var benefitLenght = req.session.data['whichBenefitDiscussed'].length;
  // console.log('length is', benefitLenght);

  if (benefitLenght > 1) {
    console.log('this is working');
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/added-call-details');
  } else {
    var isNpd = 'govuk-!-display-none';
    var isNpa = 'govuk-!-display-none';
    var isMp = 'govuk-!-display-none';
    var isRfch = 'govuk-!-display-none';
    var isOthQ = 'govuk-!-display-none';
    var isSE = 'govuk-!-display-none';
    var isNpdResolved = '';
    var isNpaResolved = '';
    var isMaRresolved = '';
    var isRfchRresolved = '';
    var isOthQresolved = '';

    if (req.session.data['questionAsk'] =='Next payment date') {
      isNpd = '';
    }
    if (req.session.data['questionAsk'] == 'Next payment amount') {
      isNpa = '';
    }
    if (req.session.data['questionAsk'] =='Missing payment' ) {
      isMp = '';
    }
    if (req.session.data['questionAsk'] == 'Change in payment amount') {
      isRfch = '';
    }
    if (req.session.data['questionAsk'] == 'Other questions') {
      isOthQ = '';
    }
    if (req.session.data['questionAsk'] == 'Something else') {
      isSE = '';
    }
    if (req.session.data['npd_wasQuestionResolved'] == 'Not resolved') {
      isNpdResolved = 'govuk-tag--grey';
    }
    if (req.session.data['npa_wasQuestionResolved'] == 'Not resolved') {
      isNpaResolved = 'govuk-tag--grey';
    }
    if (req.session.data['ma_wasQuestionResolved'] == 'Not resolved') {
      isMaRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['chpa_wasQuestionResolved'] == 'Not resolved') {
      isRfchRresolved = 'govuk-tag--grey';
    }
    if (req.session.data['othQ_wasQuestionResolved'] == 'Not resolved') {
      isOthQresolved = 'govuk-tag--grey';
    }

    // if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
    if (
      req.session.data['npd_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npd_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['npa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['ma_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['chpa_wasQuestionResolved'].includes('Resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Not resolved') ||
      req.session.data['othQ_wasQuestionResolved'].includes('Resolved')
    ) {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/scenario-1/call-log-journey/added-call-details',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    } else {
      //All variable render here
      res.render(
        'prototype-sprint-wise/ur-8/scenario-1/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error',
        {
          isNpd: isNpd,
          isNpa: isNpa,
          isMp: isMp,
          isRfch: isRfch,
          isOthQ: isOthQ,
          isSE: isSE,
          isNpdResolved: isNpdResolved,
          isNpaResolved: isNpaResolved,
          isMaRresolved: isMaRresolved,
          isRfchRresolved: isRfchRresolved,
          isOthQresolved: isOthQresolved,
        }
      );
    }
  }
});

router.post('/scenario-1/call-log-journey/check-for-add-note', function (req, res) {

  if (req.session.data['discussAnthingElse']== 'Yes'){
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/add-note');
  } else{
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/added-details');
  }
})

router.post('/scenario-1/call-log-journey/do-you-want-complete-call', function (req, res) {

  if (req.session.data['Do-you-want-to-complete-the-call'] == "Complete phone call"){
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/call-completed');
  } else{
    res.redirect('/prototype-sprint-wise/ur-8/scenario-1/home');
  }
})

// check phone call progress and complete confirmation.
router.post('/scenario-1/call-log-journey/confirm_Complete_PhoneCall', function (req, res) {
  // if (req.session.data.outcomePage === '') {
  if (req.session.data['whichBenefitDiscussed'] =='') {
    res.redirect(
      '/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/no-contact-added'
    );
  } else {
    res.redirect(
      '/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/add-more-reasons-for-call'
    );
  }
}
);


// Complete session
router.post(
  '/scenario-1/call-log-journey/check-phoneCall-completed',
  function (req, res) {
    var completeSession =
      req.session.data['Do-you-want-to-complete-the-telephony-session'];
    // Check whether the variable matches a condition
    if (completeSession == 'Yes') {
      req.session.data['whichBenefitDiscussed'] = '';
      req.session.data['questionAsk'] = '';
      req.session.data['npd_wasQuestionResolved'] = '';
      req.session.data['npa_wasQuestionResolved'] = '';
      req.session.data['ma_wasQuestionResolved'] = '';
      req.session.data['chpa_wasQuestionResolved'] = '';
      req.session.data['othQ_wasQuestionResolved'] = '';
      req.session.data['addNote'] = '';
      // Send user to next page
      res.redirect(
        '/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/benefits-discussed'
      );
    } else {
      res.redirect(
        '/prototype-sprint-wise/ur-8/scenario-1/call-log-journey/call-completed'
      );
    }
  }
);

// End of baseline MVP 1.0 here

module.exports = router;
