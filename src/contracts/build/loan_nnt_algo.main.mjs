// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc0,
    amount: ctc2,
    maturation: ctc2,
    principal: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const LoanViews_amountPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v547, v548, v549, v550, v555, v557, v558] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v547, v548, v558, v569, v737, v762, v763, v770, v771, v793] = svs;
      return (await ((async () => {
        
        
        return v763;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v547, v548, v549, v550, v555, v557, v558] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v547, v548, v558, v569, v737, v762, v763, v770, v771, v793] = svs;
      return (await ((async () => {
        
        
        return v737;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599] = svs;
      return (await ((async () => {
        
        
        return v599;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v547, v548, v549, v550, v555, v557, v558] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v547, v548, v558, v569, v737, v762, v763, v770, v771, v793] = svs;
      return (await ((async () => {
        
        
        return v793;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      LoanViews: {
        amountPaid: {
          decode: LoanViews_amountPaid,
          dom: [],
          rng: ctc2
          },
        isLive: {
          decode: LoanViews_isLive,
          dom: [],
          rng: ctc4
          },
        loanPaid: {
          decode: LoanViews_loanPaid,
          dom: [],
          rng: ctc4
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function B(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for B expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for B expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    address: ctc0,
    amount: ctc1,
    collateral: ctc1,
    maturation: ctc1,
    principal: ctc1,
    tokLoan: ctc2
    });
  const ctc4 = stdlib.T_Object({
    address: ctc0,
    amount: ctc1,
    maturation: ctc1,
    principal: ctc1
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Borrower_close0_93: ctc6,
    Lender_lend0_93: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v525 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v526 = [v525];
  const v532 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_algo.rsh:40:43:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:38:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v533 = v532.address;
  const v534 = v532.amount;
  const v535 = v532.collateral;
  const v536 = v532.maturation;
  const v537 = v532.principal;
  const v538 = v532.tokLoan;
  const v545 = stdlib.lt(v537, v534);
  stdlib.assert(v545, {
    at: './src/contracts/loan_nnt_algo.rsh:42:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:38:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v546 = {
    address: v533,
    amount: v534,
    maturation: v536,
    principal: v537
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v538, v535, v546],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v548, v549, v550], secs: v552, time: v551, didSend: v43, from: v547 } = txn1;
      
      const v553 = v526[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0')];
      const v554 = stdlib.Array_set(v553, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0'));
      const v555 = stdlib.Array_set(v526, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0'), v554);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v548
        });
      ;
      const v557 = v550.principal;
      const v558 = v550.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v548, v549, v550], secs: v552, time: v551, didSend: v43, from: v547 } = txn1;
  const v553 = v526[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0')];
  const v554 = stdlib.Array_set(v553, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0'));
  const v555 = stdlib.Array_set(v526, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:44:11:dot', stdlib.UInt_max, '0'), v554);
  ;
  ;
  const v557 = v550.principal;
  const v558 = v550.amount;
  const v559 = stdlib.lt(v557, v558);
  stdlib.assert(v559, {
    at: './src/contracts/loan_nnt_algo.rsh:45:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v547, v548, v549, v550, v555, v557, v558],
    evt_cnt: 0,
    funcNum: 1,
    lct: v551,
    onlyIf: true,
    out_tys: [],
    pay: [v549, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v562, time: v561, didSend: v53, from: v560 } = txn2;
      
      sim_r.txns.push({
        amt: v549,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v568 = true;
      const v569 = v547;
      const v570 = false;
      const v571 = v561;
      const v577 = v555;
      const v578 = v549;
      
      if (await (async () => {
        const v593 = v570 ? false : v568;
        
        return v593;})()) {
        const v598 = v570 ? false : v568;
        const v599 = v598 ? true : v570;
        sim_r.isHalt = false;
        }
      else {
        const v736 = v570 ? false : v568;
        const v737 = v736 ? true : v570;
        if (v570) {
          const v749 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v750 = v749[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v756 = stdlib.sub(v750, v750);
          const v758 = stdlib.Array_set(v749, '0', v756);
          const v759 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v758);
          sim_r.txns.push({
            kind: 'from',
            to: v547,
            tok: v548
            });
          const v761 = v550.maturation;
          const v762 = stdlib.safeAdd(v571, v761);
          const v763 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
          const v764 = v571;
          const v770 = v759;
          const v771 = v578;
          
          if (await (async () => {
            const v788 = stdlib.le(v764, v762);
            const v790 = stdlib.lt(v763, v558);
            const v791 = v788 ? v790 : false;
            
            return v791;})()) {
            const v793 = stdlib.ge(v763, v558);
            sim_r.isHalt = false;
            }
          else {
            const v883 = stdlib.lt(v763, v558);
            const v884 = v883 ? v569 : v547;
            sim_r.txns.push({
              kind: 'from',
              to: v884,
              tok: undefined /* Nothing */
              });
            const v889 = v770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v890 = v889[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v893 = v883 ? v547 : v569;
            sim_r.txns.push({
              kind: 'from',
              to: v893,
              tok: v548
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v548
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v547,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v548
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1, ctc4, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v562, time: v561, didSend: v53, from: v560 } = txn2;
  ;
  const v565 = stdlib.addressEq(v547, v560);
  stdlib.assert(v565, {
    at: './src/contracts/loan_nnt_algo.rsh:47:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v561), {
    at: './src/contracts/loan_nnt_algo.rsh:48:27:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:48:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:48:27:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:48:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_algo.rsh:48:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v568 = true;
  let v569 = v547;
  let v570 = false;
  let v571 = v561;
  let v577 = v555;
  let v578 = v549;
  
  let txn3 = txn2;
  while (await (async () => {
    const v593 = v570 ? false : v568;
    
    return v593;})()) {
    const v598 = v570 ? false : v568;
    const v599 = v598 ? true : v570;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v636], secs: v638, time: v637, didSend: v196, from: v635 } = txn4;
    switch (v636[0]) {
      case 'Borrower_close0_93': {
        const v639 = v636[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v672 = null;
        await txn4.getOutput('Borrower_close', 'v672', ctc5, v672);
        const cv568 = false;
        const cv569 = v569;
        const cv570 = v570;
        const cv571 = v637;
        const cv577 = v577;
        const cv578 = v578;
        
        v568 = cv568;
        v569 = cv569;
        v570 = cv570;
        v571 = cv571;
        v577 = cv577;
        v578 = cv578;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v687 = v636[1];
        undefined /* setApiDetails */;
        ;
        const v713 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
        const v714 = v713[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
        const v715 = stdlib.add(v714, v557);
        const v717 = stdlib.Array_set(v713, '0', v715);
        const v718 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0'), v717);
        ;
        const v728 = true;
        await txn4.getOutput('Lender_lend', 'v728', ctc8, v728);
        const cv568 = v568;
        const cv569 = v635;
        const cv570 = true;
        const cv571 = v637;
        const cv577 = v718;
        const cv578 = v578;
        
        v568 = cv568;
        v569 = cv569;
        v570 = cv570;
        v571 = cv571;
        v577 = cv577;
        v578 = cv578;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v736 = v570 ? false : v568;
  const v737 = v736 ? true : v570;
  if (v570) {
    const v749 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
    const v750 = v749[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
    const v756 = stdlib.sub(v750, v750);
    const v758 = stdlib.Array_set(v749, '0', v756);
    const v759 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v758);
    ;
    const v761 = v550.maturation;
    const v762 = stdlib.safeAdd(v571, v761);
    let v763 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
    let v764 = v571;
    let v770 = v759;
    let v771 = v578;
    
    let txn4 = txn3;
    while (await (async () => {
      const v788 = stdlib.le(v764, v762);
      const v790 = stdlib.lt(v763, v558);
      const v791 = v788 ? v790 : false;
      
      return v791;})()) {
      const v793 = stdlib.ge(v763, v558);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v828], secs: v830, time: v829, didSend: v407, from: v827 } = txn5;
      undefined /* setApiDetails */;
      const v832 = v828[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:95:30:spread', stdlib.UInt_max, '0')];
      const v833 = stdlib.addressEq(v827, v547);
      stdlib.assert(v833, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:96:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v835 = stdlib.safeAdd(v832, v763);
      const v837 = stdlib.gt(v835, v558);
      let v838;
      if (v837) {
        const v841 = stdlib.safeSub(v835, v558);
        v838 = v841;
        }
      else {
        v838 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
        }
      const v842 = stdlib.safeSub(v832, v838);
      ;
      const v847 = v770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
      const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
      const v849 = stdlib.add(v848, v842);
      const v851 = stdlib.Array_set(v847, '0', v849);
      const v852 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0'), v851);
      ;
      let v859;
      if (v837) {
        const v862 = stdlib.safeSub(v835, v558);
        v859 = v862;
        }
      else {
        v859 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
        }
      const v863 = stdlib.safeSub(v832, v859);
      const v865 = stdlib.safeAdd(v763, v863);
      const v867 = stdlib.ge(v865, v558);
      const v869 = [v867, v865, v558];
      await txn5.getOutput('Borrower_repay', 'v869', ctc10, v869);
      const cv763 = v865;
      const cv764 = v829;
      const cv770 = v852;
      const cv771 = v771;
      
      v763 = cv763;
      v764 = cv764;
      v770 = cv770;
      v771 = cv771;
      
      txn4 = txn5;
      continue;
      
      }
    const v883 = stdlib.lt(v763, v558);
    const v884 = v883 ? v569 : v547;
    ;
    const v889 = v770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
    const v890 = v889[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
    const v893 = v883 ? v547 : v569;
    ;
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  };
export async function _Borrower_close7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Borrower_close7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Borrower_close7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc0,
    amount: ctc2,
    maturation: ctc2,
    principal: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_93: ctc7,
    Lender_lend0_93: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v602 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:71:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:71:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:50:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:71:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v606 = ['Borrower_close0_93', v602];
  
  const txn1 = await (ctc.sendrecv({
    args: [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599, v606],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:71:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:59:26:decimal', stdlib.UInt_max, '0'), v548]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v636], secs: v638, time: v637, didSend: v196, from: v635 } = txn1;
      
      switch (v636[0]) {
        case 'Borrower_close0_93': {
          const v639 = v636[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v672 = null;
          const v673 = await txn1.getOutput('Borrower_close', 'v672', ctc9, v672);
          
          const v1314 = false;
          const v1315 = v569;
          const v1316 = v570;
          const v1318 = v577;
          const v1319 = v578;
          const v1320 = v570 ? false : false;
          if (v1320) {
            const v1322 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1324 = v570;
            if (v570) {
              const v1325 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
              const v1326 = v1325[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
              const v1327 = stdlib.sub(v1326, v1326);
              const v1328 = stdlib.Array_set(v1325, '0', v1327);
              const v1329 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v1328);
              sim_r.txns.push({
                kind: 'from',
                to: v547,
                tok: v548
                });
              const v1330 = v550.maturation;
              const v1331 = stdlib.safeAdd(v637, v1330);
              const v1370 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
              const v1372 = v1329;
              const v1373 = v578;
              const v1374 = stdlib.le(v637, v1331);
              const v1375 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
              const v1376 = v1374 ? v1375 : false;
              if (v1376) {
                const v1377 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
                sim_r.isHalt = false;
                }
              else {
                const v1380 = v1375 ? v569 : v547;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1380,
                  tok: undefined /* Nothing */
                  });
                const v1381 = v1329[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
                const v1382 = v1381[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
                const v1383 = v1375 ? v547 : v569;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1383,
                  tok: v548
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v548
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v547,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v548
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Lender_lend0_93': {
          const v687 = v636[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v636], secs: v638, time: v637, didSend: v196, from: v635 } = txn1;
  switch (v636[0]) {
    case 'Borrower_close0_93': {
      const v639 = v636[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v672 = null;
      const v673 = await txn1.getOutput('Borrower_close', 'v672', ctc9, v672);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v639, v673), {
          at: './src/contracts/loan_nnt_algo.rsh:71:22:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:71:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:71:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:72:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:71:44:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:71:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:71:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1314 = false;
      const v1315 = v569;
      const v1316 = v570;
      const v1318 = v577;
      const v1319 = v578;
      const v1320 = v570 ? false : false;
      if (v1320) {
        const v1322 = true;
        return;
        }
      else {
        const v1324 = v570;
        if (v570) {
          const v1325 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v1326 = v1325[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v1327 = stdlib.sub(v1326, v1326);
          const v1328 = stdlib.Array_set(v1325, '0', v1327);
          const v1329 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v1328);
          ;
          const v1330 = v550.maturation;
          const v1331 = stdlib.safeAdd(v637, v1330);
          const v1370 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
          const v1372 = v1329;
          const v1373 = v578;
          const v1374 = stdlib.le(v637, v1331);
          const v1375 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
          const v1376 = v1374 ? v1375 : false;
          if (v1376) {
            const v1377 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
            return;
            }
          else {
            const v1380 = v1375 ? v569 : v547;
            ;
            const v1381 = v1329[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v1382 = v1381[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v1383 = v1375 ? v547 : v569;
            ;
            return;
            }}
        else {
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v687 = v636[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Borrower_repay5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Borrower_repay5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Borrower_repay5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v547, v548, v558, v569, v737, v762, v763, v770, v771, v793] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v794 = ctc.selfAddress();
  const v796 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v797 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v799 = stdlib.addressEq(v794, v547);
  stdlib.assert(v799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:96:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v801 = stdlib.safeAdd(v797, v763);
  const v803 = stdlib.gt(v801, v558);
  
  let v818;
  if (v803) {
    const v821 = stdlib.safeSub(v801, v558);
    v818 = v821;
    }
  else {
    v818 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
    }
  const v822 = stdlib.safeSub(v797, v818);
  
  const txn1 = await (ctc.sendrecv({
    args: [v547, v548, v558, v569, v737, v762, v763, v770, v771, v793, v796],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:103:42:decimal', stdlib.UInt_max, '0'), [[v822, v548]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v828], secs: v830, time: v829, didSend: v407, from: v827 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v832 = v828[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:95:30:spread', stdlib.UInt_max, '0')];
      const v835 = stdlib.safeAdd(v832, v763);
      const v837 = stdlib.gt(v835, v558);
      let v838;
      if (v837) {
        const v841 = stdlib.safeSub(v835, v558);
        v838 = v841;
        }
      else {
        v838 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
        }
      const v842 = stdlib.safeSub(v832, v838);
      ;
      const v847 = v770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
      const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
      const v849 = stdlib.add(v848, v842);
      const v851 = stdlib.Array_set(v847, '0', v849);
      const v852 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0'), v851);
      sim_r.txns.push({
        amt: v842,
        kind: 'to',
        tok: v548
        });
      let v859;
      if (v837) {
        const v862 = stdlib.safeSub(v835, v558);
        v859 = v862;
        }
      else {
        v859 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
        }
      const v863 = stdlib.safeSub(v832, v859);
      const v865 = stdlib.safeAdd(v763, v863);
      const v867 = stdlib.ge(v865, v558);
      const v869 = [v867, v865, v558];
      const v870 = await txn1.getOutput('Borrower_repay', 'v869', ctc7, v869);
      
      const v1454 = v865;
      const v1456 = v852;
      const v1457 = v771;
      const v1458 = stdlib.le(v829, v762);
      const v1459 = stdlib.lt(v865, v558);
      const v1460 = v1458 ? v1459 : false;
      if (v1460) {
        sim_r.isHalt = false;
        }
      else {
        const v1464 = v1459 ? v569 : v547;
        sim_r.txns.push({
          kind: 'from',
          to: v1464,
          tok: undefined /* Nothing */
          });
        const v1465 = v852[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
        const v1466 = v1465[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
        const v1467 = v1459 ? v547 : v569;
        sim_r.txns.push({
          kind: 'from',
          to: v1467,
          tok: v548
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v548
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v828], secs: v830, time: v829, didSend: v407, from: v827 } = txn1;
  undefined /* setApiDetails */;
  const v832 = v828[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:95:30:spread', stdlib.UInt_max, '0')];
  const v833 = stdlib.addressEq(v827, v547);
  stdlib.assert(v833, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:96:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:95:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v835 = stdlib.safeAdd(v832, v763);
  const v837 = stdlib.gt(v835, v558);
  let v838;
  if (v837) {
    const v841 = stdlib.safeSub(v835, v558);
    v838 = v841;
    }
  else {
    v838 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
    }
  const v842 = stdlib.safeSub(v832, v838);
  ;
  const v847 = v770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
  const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0')];
  const v849 = stdlib.add(v848, v842);
  const v851 = stdlib.Array_set(v847, '0', v849);
  const v852 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:50:dot', stdlib.UInt_max, '0'), v851);
  ;
  let v859;
  if (v837) {
    const v862 = stdlib.safeSub(v835, v558);
    v859 = v862;
    }
  else {
    v859 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:100:51:decimal', stdlib.UInt_max, '0');
    }
  const v863 = stdlib.safeSub(v832, v859);
  const v865 = stdlib.safeAdd(v763, v863);
  const v867 = stdlib.ge(v865, v558);
  const v869 = [v867, v865, v558];
  const v870 = await txn1.getOutput('Borrower_repay', 'v869', ctc7, v869);
  if (v407) {
    stdlib.protect(ctc8, await interact.out(v828, v870), {
      at: './src/contracts/loan_nnt_algo.rsh:95:31:application',
      fs: ['at ./src/contracts/loan_nnt_algo.rsh:95:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:95:31:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:106:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:104:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:104:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:104:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1454 = v865;
  const v1456 = v852;
  const v1457 = v771;
  const v1458 = stdlib.le(v829, v762);
  const v1459 = stdlib.lt(v865, v558);
  const v1460 = v1458 ? v1459 : false;
  if (v1460) {
    return;
    }
  else {
    const v1464 = v1459 ? v569 : v547;
    ;
    const v1465 = v852[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
    const v1466 = v1465[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
    const v1467 = v1459 ? v547 : v569;
    ;
    return;
    }
  
  
  };
export async function _Lender_lend7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Lender_lend7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Lender_lend7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc0,
    amount: ctc2,
    maturation: ctc2,
    principal: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_93: ctc7,
    Lender_lend0_93: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v610 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:61:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:61:39:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:50:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:61:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v614 = ['Lender_lend0_93', v610];
  
  const txn1 = await (ctc.sendrecv({
    args: [v547, v548, v550, v557, v558, v568, v569, v570, v577, v578, v599, v614],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:63:34:decimal', stdlib.UInt_max, '0'), [[v557, v548]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v636], secs: v638, time: v637, didSend: v196, from: v635 } = txn1;
      
      switch (v636[0]) {
        case 'Borrower_close0_93': {
          const v639 = v636[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v687 = v636[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v713 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
          const v714 = v713[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
          const v715 = stdlib.add(v714, v557);
          const v717 = stdlib.Array_set(v713, '0', v715);
          const v718 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0'), v717);
          sim_r.txns.push({
            amt: v557,
            kind: 'to',
            tok: v548
            });
          const v728 = true;
          const v729 = await txn1.getOutput('Lender_lend', 'v728', ctc4, v728);
          
          const v1539 = v635;
          const v1548 = true;
          const v1549 = v718[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v1550 = v1549[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v1551 = stdlib.sub(v1550, v1550);
          const v1552 = stdlib.Array_set(v1549, '0', v1551);
          const v1553 = stdlib.Array_set(v718, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v1552);
          sim_r.txns.push({
            kind: 'from',
            to: v547,
            tok: v548
            });
          const v1554 = v550.maturation;
          const v1555 = stdlib.safeAdd(v637, v1554);
          const v1594 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
          const v1596 = v1553;
          const v1597 = v578;
          const v1598 = stdlib.le(v637, v1555);
          const v1599 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
          const v1600 = v1598 ? v1599 : false;
          if (v1600) {
            const v1601 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
            sim_r.isHalt = false;
            }
          else {
            const v1604 = v1599 ? v635 : v547;
            sim_r.txns.push({
              kind: 'from',
              to: v1604,
              tok: undefined /* Nothing */
              });
            const v1605 = v1553[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v1606 = v1605[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
            const v1607 = v1599 ? v547 : v635;
            sim_r.txns.push({
              kind: 'from',
              to: v1607,
              tok: v548
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v548
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v636], secs: v638, time: v637, didSend: v196, from: v635 } = txn1;
  switch (v636[0]) {
    case 'Borrower_close0_93': {
      const v639 = v636[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v687 = v636[1];
      undefined /* setApiDetails */;
      ;
      const v713 = v577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
      const v714 = v713[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0')];
      const v715 = stdlib.add(v714, v557);
      const v717 = stdlib.Array_set(v713, '0', v715);
      const v718 = stdlib.Array_set(v577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:50:62:dot', stdlib.UInt_max, '0'), v717);
      ;
      const v728 = true;
      const v729 = await txn1.getOutput('Lender_lend', 'v728', ctc4, v728);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v687, v729), {
          at: './src/contracts/loan_nnt_algo.rsh:61:23:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:61:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:61:23:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:65:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:64:42:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:64:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1539 = v635;
      const v1548 = true;
      const v1549 = v718[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
      const v1550 = v1549[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:33:application', stdlib.UInt_max, '0')];
      const v1551 = stdlib.sub(v1550, v1550);
      const v1552 = stdlib.Array_set(v1549, '0', v1551);
      const v1553 = stdlib.Array_set(v718, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:80:55:application', stdlib.UInt_max, '0'), v1552);
      ;
      const v1554 = v550.maturation;
      const v1555 = stdlib.safeAdd(v637, v1554);
      const v1594 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0');
      const v1596 = v1553;
      const v1597 = v578;
      const v1598 = stdlib.le(v637, v1555);
      const v1599 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
      const v1600 = v1598 ? v1599 : false;
      if (v1600) {
        const v1601 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:51:decimal', stdlib.UInt_max, '0'), v558);
        return;
        }
      else {
        const v1604 = v1599 ? v635 : v547;
        ;
        const v1605 = v1553[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
        const v1606 = v1605[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:113:33:application', stdlib.UInt_max, '0')];
        const v1607 = v1599 ? v547 : v635;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Borrower_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Borrower_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Borrower_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Borrower_close7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Borrower_repay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Borrower_repay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Borrower_repay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Borrower_repay5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Lender_lend(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lender_lend expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lender_lend expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Lender_lend7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEFBAcgCCjZ9qi8Btfx250HnpLWlQi+86bXA/augPQDoI0GJgMBAAEBACI1ADEYQQWKKmRJIls1ASEGWzUCNhoAF0lBAK8iNQQjNQZJIQgMQAA8SSEJDEAAH0khCgxAAA4hChJEKjX/KDT/UEIAoiEJEkQ2GgFCAWMhCBJENAEkEkQoZEk1A1dZCDUHQgUlSSELDEAAK0khDAxAAA4hDBJEKjX/KTT/UEIAZiELEkQ0ASQSRChkSTUDV3oBNQdCBPOBj8bFKhJENAFJIQQMQAAUIQQSRChkKWRQSTUDV6sBNQdCBM8kEkQoZEk1A1dQATUHQgS/NhoCFzUENhoDNhoBF0klDEABz0kkDEAAzSQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBVs1/lcoODX9gWBbNfyBaFs1+1eSETX6gaMBWzX5STUFNfiABLGZIkU0+FCwNPgiVUAALYAIAAAAAAAAAqCwKjUHNP80/jT9NPw0+yI0A1dxIDQDV5EBFzIGNPo0+UICUjT6VwARNfc0/DT+iARPgAkAAAAAAAAC2AGwKTUHNP80/jT9NPw0+zQDV3ABFzEAIzIGNPo090kiWzT8CBZcAFwANPlCAgxIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEHWzX9gVlbNfxXYRE1+0k1BTX6gATOPHBmNPpQsDT6FzX5MQA0/xJENPk0/AhJNfg0/Q1JNfdBAAo0+DT9CTX2QgADIjX2NPk09gk19TT7VwARNfQ09TT+iAOYNPdBAAo0+DT9CTXzQgADIjXzNPw0+TTzCQg18oAIAAAAAAAAA2U08jT9DxZRBwg08hZQNP0WUFCwNPI0/Q8WUQcINPIWUDT9FlA1BzT/NP40/TQDVzAgNANXUAEXNAOBUVs08jIGNPs09EkiWzT1CBZcAFwANAOBcltCAeBJIwxAAF8jEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hB1s1/oAEmouRdLA0/ogCyzT/MQASRDT/NAMhBVs0A1cwODQDgXlbNAOBgQFbIzT/IjIGNANXaBE0/kIAq0ghDYgCmCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/lcQODX9gARb8vLKNP8WUDT+FlA0/VCwgRGvSTX8SVcAESEGr1wAXAA1+yENiAJLsSKyASKyEiWyEDIKshQ0/7IRszT9gTBbNfo0/SEFWzX5NPo0+QxEMQA0/xZQNP4WUDT9UDT7UDT6FlA0+RZQKEsBVwB/ZylLAVd/CmdIIzUBMgY1AkIBoTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/BQ0+hBBADs09TT2FlA091A0+BZQNPkWUClQNPtQKFA0/lA0/xZQKVAoSwFXAH9nKUsBV38tZ0ghBDUBMgY1AkIBRzT8QQBHNP5XABFJNfQiWzXzsSKyATTzshIlshA09bIUNPayEbM09TT2NPk0+zT8NP009yEHWwgiNP00/jT0NPNJCRZcAFwANP9CACqxIrIBNP+yCCOyEDT1sgezsSKyASKyEiWyEDIJshUyCrIUNPayEbNCALY1/zX+Nf01/DX7Nfo1+TX4Nfc19jT8NPgMNfU0/TT7DjT1EEEAQzT8NPgPNfQ09jT3FlA0+BZQNPlQNPoWUQcIUDT7FlA0/BZQNP5QNP8WUDT0FlEHCFAoSwFXAHtnSCQ1ATIGNQJCAGixIrIBNP+yCCOyEDT2NPk09U2yB7OxIrIBNP5XABEiW7ISJbIQNPk09jT1TbIUNPeyEbOxIrIBIrISJbIQMgmyFTIKshQ097IRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 172,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"internalType":"struct T11","name":"v1629","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v672","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v728","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v869","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1620","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1631","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1643","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1649","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002a5a38819003601f8101601f191683016001600160401b03811184821017620004eb578392829160405283398101039060e08212620005ef576080604051926200004d84620005f4565b825184526200005f6020840162000648565b602085015260408301516040850152605f190112620005ef5760c0604051916200008983620005f4565b620000976060820162000648565b83526080810151602084015260a0810151604084015201516060820152606082015243600355600060c0604051620000cf8162000610565b828152826020820152620000e26200065d565b60408201528260608201528260808201528260a08201520152604051906200010a826200062c565b620001146200065d565b825260208201620001246200067e565b8152620001306200067e565b604084015260ff60045416620005d6577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001a160608601516080830190620006c5565ba181518015908115620005c9575b5015620005b057600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620001ee836200062c565b6000835260208301526040820152620002066200067e565b9160005b60018110620005605750508152604083015234620005475760608101516020606082015191015111156200052e57606060209160408051946200024d8662000610565b6000865260008587015260008287015281516200026a81620005f4565b60008152600086820152600083820152600085820152848701526200028e6200067e565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200032360608201516080840190620006c5565b6080810151600061010084015b60018210620005015760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620004eb5760405280516001600160401b038111620004eb57600254600181811c91168015620004e0575b6020821014620004ca57601f811162000460575b50602091601f8211600114620003f657918192600092620003ea575b50508160011b916000199060031b1c1916176002555b60405161234090816200071a8239f35b015190508280620003c4565b601f19821692600260005260206000209160005b85811062000447575083600195106200042d575b505050811b01600255620003da565b015160001960f88460031b161c191690558280806200041e565b919260206001819286850151815501940192016200040a565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004bf575b601f0160051c01905b818110620004b25750620003a8565b60008155600101620004a3565b90915081906200049a565b634e487b7160e01b600052602260045260246000fd5b90607f169062000394565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000330565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b6200056c8183620006f1565b51620005798286620006f1565b52620005868185620006f1565b5060001981146200059a576001016200020a565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b90506001541438620001af565b60405163100960cb60e01b8152600b6004820152602490fd5b600080fd5b608081019081106001600160401b03821117620004eb57604052565b60e081019081106001600160401b03821117620004eb57604052565b606081019081106001600160401b03821117620004eb57604052565b51906001600160a01b0382168203620005ef57565b604051906200066c826200062c565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004eb576040528260005b828110620006ae57505050565b8290620006ba6200065d565b8184015201620006a1565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007035760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780633c496554146100ff57806340410cd5146100f65780634cd87555146100ed578063573b8510146100e4578063823c0a8d146100db57806383230757146100d25780638dca4147146100c957806394134348146100c0578063ab53f2c6146100b7578063ea121ca3146100ae5763f9d773330361000e576100a961067f565b61000e565b506100a9610600565b506100a961058b565b506100a96104e2565b506100a9610463565b506100a9610444565b506100a96103f6565b506100a961026d565b506100a96101f0565b506100a9610198565b506100a961012c565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b50346101275760003660031901126101275761014661098c565b60056000540361017f57608060209160c0610170610162610845565b858082518301019101610abe565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b506000366003190112610127576020806101b061098c565b6101e4816101bc6109cb565b84810190600082515251151585825101526101d56109cb565b90600082525185820152611656565b01511515604051908152f35b50346101275760003660031901126101275761020a61098c565b6005600054036102545760c061025091610120610237610228610845565b60208082518301019101610abe565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b8152600a6004820152602490fd5b5060203660031901126101275761028261098c565b506103de61028f36612259565b6102aa6102a56102a160045460ff1690565b1590565b610b61565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a16102ea600160005414610b81565b6103196103076102f8610845565b60208082518301019101612279565b915180159081156103ea575b50610ba1565b6040810161032981513414610bc1565b6103453360018060a01b0361033e8551610a0c565b1614610be1565b608061034f6115f5565b9261036361035d8251610a0c565b85610fce565b61037c6103736020830151610a0c565b60208601610fce565b6060810151604085015260a0810151606085015260c0810151828501526103a660a0850160019052565b6103bc6103b38251610a0c565b60c08601610fce565b600060e085015243610100850152015161012083015251610140820152611c9b565b60405160008152602090f35b90506001541438610313565b506000366003190112610127576020606061040f61098c565b6101e48161041b6109cb565b8581019060018251525115156040825101526104356109cb565b90600082525186820152611656565b5034610127576000366003190112610127576020600154604051908152f35b5060803660031901126101275761047861098c565b6040519061048582610756565b6004358252606036602319011261012757604051916104a38361077e565b602435926002841015610127576103de9381526044356104c281610a2c565b60208201526064356104d381610a2c565b60408201526020820152611656565b50346101275760003660031901126101275761025061053e60a061050461098c565b600054600781101561055057600561051c9114610c21565b61052f610536608061052f610228610845565b0151151590565b151582840152565b60405190151581529081906020820190565b600761055c9114610c01565b61058661014061057c61056d610845565b60208082518301019101610e42565b0151151582840152565b61052f565b5034610127576000806003193601126105fd5780546105a8610845565b906040519283918252602090604082840152835191826040850152815b8381106105e657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016105c5565b80fd5b5060403660031901126101275761061561098c565b6040519061062282610756565b60043582526020366023190112610127576106529160405161064381610799565b60243581526020820152611004565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101275761069461094f565b506102506106a061098c565b6040816106f8829383516106b381610799565b84516106be81610799565b80825260043590528451906106d282610756565b60008252602082019086516106e681610799565b60008152825260008352519052611004565b015190519182918261065d565b90600182811c92168015610735575b602083101461071f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610714565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761077157604052565b61077961073f565b604052565b606081019081106001600160401b0382111761077157604052565b602081019081106001600160401b0382111761077157604052565b60e081019081106001600160401b0382111761077157604052565b61014081019081106001600160401b0382111761077157604052565b61016081019081106001600160401b0382111761077157604052565b60a081019081106001600160401b0382111761077157604052565b601f909101601f19168101906001600160401b0382119082101761077157604052565b604051906000826002549161085983610705565b8083526001938085169081156108cf5750600114610881575b5061087f92500383610822565b565b6002600090815260008051602061231483398151915294602093509091905b8183106108b757505061087f935082010138610872565b855488840185015294850194879450918301916108a0565b905061087f94506020925060ff191682840152151560051b82010138610872565b6040519061014082016001600160401b0381118382101761077157604052565b6040519061016082016001600160401b0381118382101761077157604052565b60405190606082016001600160401b0381118382101761077157604052565b60405190606082016001600160401b0381118382101761097f575b60405260006040838281528260208201520152565b61098761073f565b61096a565b60405190610999826107b4565b8160c06000918281528260208201526109b061094f565b60408201528260608201528260808201528260a08201520152565b604051906109d882610756565b816000815260206109e761094f565b910152565b600211156109f657565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361012757565b8015150361012757565b519061087f82610a2c565b9080601f8301121561012757604091825192610a5c84610799565b836060938484019381851161012757915b848310610a7d5750505050505090565b85838303126101275783518691610a938261077e565b84518252602091828601518382015286860151610aaf81610a2c565b87820152815201920191610a6d565b6101808183031261012757610160610b5891610b41610adb6108f0565b94610ae583610a18565b8652610af360208401610a18565b602087015260408301516040870152610b0e60608401610a18565b6060870152610b1f60808401610a36565b608087015260a083015160a087015260c083015160c087015260e08301610a41565b60e085015261014081015161010085015201610a36565b61012082015290565b15610b6857565b60405163100960cb60e01b8152600f6004820152602490fd5b15610b8857565b60405163100960cb60e01b815260106004820152602490fd5b15610ba857565b60405163100960cb60e01b815260116004820152602490fd5b15610bc857565b60405163100960cb60e01b815260126004820152602490fd5b15610be857565b60405163100960cb60e01b815260136004820152602490fd5b15610c0857565b60405163100960cb60e01b815260096004820152602490fd5b15610c2857565b60405163100960cb60e01b815260086004820152602490fd5b15610c4857565b60405163100960cb60e01b815260146004820152602490fd5b15610c6857565b60405163100960cb60e01b815260156004820152602490fd5b15610c8857565b60405163100960cb60e01b815260166004820152602490fd5b15610ca857565b60405163100960cb60e01b815260176004820152602490fd5b15610cc857565b60405163100960cb60e01b815260186004820152602490fd5b15610ce857565b60405163100960cb60e01b815260196004820152602490fd5b15610d0857565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d2857565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d4857565b60405163100960cb60e01b8152601c6004820152602490fd5b15610d6857565b60405163100960cb60e01b8152601f6004820152602490fd5b15610d8857565b60405163100960cb60e01b815260206004820152602490fd5b15610da857565b60405163100960cb60e01b8152601d6004820152602490fd5b15610dc857565b60405163100960cb60e01b8152601e6004820152602490fd5b919082608091031261012757604051608081016001600160401b03811182821017610e35575b6040526060808294610e1881610a18565b845260208101516020850152604081015160408501520151910152565b610e3d61073f565b610e07565b906102008282031261012757610efb6101e0610e5c610910565b93610e6681610a18565b8552610e7460208201610a18565b6020860152610e868460408301610de1565b604086015260c0810151606086015260e08101516080860152610100610ead818301610a36565b60a087015261012090610ec1828401610a18565b60c0880152610ee761014096610ed8888601610a36565b60e08a01526101608501610a41565b908701526101c08201519086015201610a36565b9082015290565b60405190610f0f826107b4565b81600080825280602083015280604083015280606083015280608083015260a082015260c06109e761094f565b6001600160a01b03169052565b60405190610f5682610799565b8160005b60208110610f66575050565b602090610f7161094f565b8184015201610f5a565b60405190610f88826107cf565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610fc4610f49565b6101008201520152565b6001600160a01b039091169052565b906001811015610fee5760051b0190565b634e487b7160e01b600052603260045260246000fd5b61100c610f02565b9061102461101f6102a160045460ff1690565b610c41565b60408051338152825160208083019190915283015151818301529093611094917f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611078600560005414610c61565b84611081610845565b6020938185808094518301019101610abe565b946110aa815180159081156112d7575b50610c81565b6110c66110bf6110ba8851610a0c565b610a0c565b3314610ca1565b0192835151906110dc60c08701928351906112fa565b808852838701805191909110828901818152989190156112cc57611103825182519061131c565b858301525b865151858301516111189161131c565b606083019081529561112a3415610cc1565b838901998a5161113990610a0c565b8851611145913361139f565b61114e90610ce1565b5115156000149a6111936112aa9961118d6112a59861087f9f6112c057611178885188519061131c565b60808901525b5191515160808801519061131c565b906112fa565b936111b160c060a08301968088528651111592019182519015159052565b84518682510152835182825101527f7de679a8367324feccf7184948de2a5250965335572721539ddc0784727ad9936111f0825184519182918261065d565b0390a15191015261122761121f611205610f7b565b9a6112196112138c51610a0c565b8d610fce565b51610a0c565b848b01610fce565b518489015261124561123c6060890151610a0c565b60608a01610fce565b61125e6112556080890151151590565b151560808a0152565b60a087015160a08901525160c08801524360e088015260e0860151928351948551905101948183820151910151151592611296610930565b96875286015284019015159052565b6114a4565b9061010091828401520151610120820152612083565b6000608089015261117e565b600085830152611108565b905060015414386110a4565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161130f575b821061012757565b6113176112e3565b611307565b9081039081116113295790565b6113316112e3565b90565b6000611331928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261137881610807565b5193165af161138f6113886113e2565b8092611444565b506020808251830101910161142f565b6000916113319383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261137881610807565b3d1561142a573d906001600160401b03821161141d575b60405191611411601f8201601f191660200184610822565b82523d6000602084013e565b61142561073f565b6113f9565b606090565b90816020910312610127575161133181610a2c565b1561144c5790565b80511561145b57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b1561147c5790565b80511561148b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906114ae610f49565b9260005b600181106114c05750508252565b806114cd60019284610fdd565b516114d88288610fdd565b526114e38187610fdd565b5060001981146114f4575b016114b2565b6114fc6112e3565b6114ee565b919061150b610f49565b9260005b6001811061151d5750508252565b8061152a60019284610fdd565b516115358288610fdd565b526115408187610fdd565b506000198114611551575b0161150f565b6115596112e3565b61154b565b90929160209060a083019460018060a01b031683528051828401520151805160028110156109f6576080916040918285015260208101511515606085015201511515910152565b5160028110156109f65790565b60405190608082016001600160401b038111838210176115e8575b60405260006060838281528260208201528260408201520152565b6115f061073f565b6115cd565b60405190611602826107eb565b8161014060009182815282602082015261161a6115b2565b60408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015261164c610f49565b6101208201520152565b906116cf9161167261166d6102a160045460ff1690565b610d01565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8151806116a385338361155e565b0390a16116b4600760005414610d21565b6116bc610845565b6020948186808094518301019101610e42565b926116e581518015908115611950575b50610d41565b016116f081516115a5565b6116f9816109ec565b6117fc575061178661087f9461170f3415610da1565b6000818086019661173161172c6117268a51610a0c565b33611334565b610dc1565b8551600081527f0932affeab6f62507d68182f50f8048c9518090235836ac644262bccd41e7e9e90602090a1015261177e61176a6115f5565b956112196117788751610a0c565b88610fce565b908501610fce565b80820151908301526060810151606083015260808101516080830152600060a08301526117c26117b960c0830151610a0c565b60c08401610fce565b6117db6117d260e0830151151590565b151560e0840152565b61010043818401528101519061012091828401520151610140820152611c9b565b61180b600191959495516115a5565b611814816109ec565b14611820575b50505050565b61194793611931916118323415610d61565b61192c8585019561189460606118488951610a0c565b9561186161185c838b01988951903361139f565b610d81565b8551600181527ff63b14d81d2d772ce3ab67c6ada2f275ea428af0abde92a92f835e658008fa9890602090a10160019052565b6118be6118b66118a26115f5565b986112196118b08a51610a0c565b8b610fce565b828901610fce565b828601518388015283516060880152608086015160808801526118f06118e760a0880151151590565b151560a0890152565b6118fd3360c08901610fce565b600160e08801526101004381890152860151928351948551905101948183820151910151151592611296610930565b611501565b9061012091828401520151610140820152611c9b565b3880808061181a565b905060015414386116df565b506040513d6000823e3d90fd5b818110611974575050565b60008155600101611969565b61198b600254610705565b806119935750565b601f81116001146119a657506000600255565b60026000526119eb90601f0160051c600080516020612314833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611969565b6000602081208160025555565b60405190611a05826107eb565b81610140600091828152826020820152611a1d6115b2565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611a48610f49565b610100820152826101208201520152565b6000915b60018310611a6a57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611a5d565b61087f909291926101e0610200820194611ab4838251610f3c565b611ac660208201516020850190610f3c565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611b24610100928386019015159052565b60c0810151611b396101209182870190610f3c565b611b6160e083015193611b53610140958689019015159052565b830151610160870190611a59565b8101516101c085015201511515910152565b90601f8211611b80575050565b61087f9160026000526020600020906020601f840160051c83019310611bae575b601f0160051c0190611969565b9091508190611ba1565b80519091906001600160401b038111611c8e575b611be081611bdb600254610705565b611b73565b602080601f8311600114611c1c5750819293600092611c11575b50508160011b916000199060031b1c191617600255565b015190503880611bfa565b6002600052601f19831694909190600080516020612314833981519152926000905b878210611c76575050836001959610611c5d575b505050811b01600255565b015160001960f88460031b161c19169055388080611c52565b80600185968294968601518155019501930190611c3e565b611c9661073f565b611bcc565b60e08101805115158015611ef85760005b15611d95575050611d82611d9061087f92611d60611cc86119f8565b91611cdc611cd68251610a0c565b84610fce565b611cf5611cec6020830151610a0c565b60208501610fce565b604081015160408401526060810151606084015260808101516080840152611d2060a0840160019052565b611d39611d3060c0830151610a0c565b60c08501610fce565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b611d6a6007600055565b611d7343600155565b60405192839160208301611a99565b03601f198101835282610822565b611bb8565b15611ea2579061087f916101406020830192611db18451610a0c565b611e34611e2b611dc18451610a0c565b95611de06101209788870195865151519160018060a01b031690611f04565b611e0b611e02611dee610f7b565b99611219611dfc8951610a0c565b8c610fce565b60208a01610fce565b60808501516040890152611e2561123c60c0870151610a0c565b51151590565b15156080870152565b611e9361010091828401611e5181516040808801510151906112fa565b60a0890152600060c08901525160e0880152518051906112a5604060208401519301511515611e7e610930565b93600085526020850152604084019015159052565b90850152015190820152612083565b506000808083610140611eb96110ba849751610a0c565b91015190828215611eef575bf115611ee2575b60008055611eda6000600155565b61087f611980565b611eea61195c565b611ecc565b506108fc611ec5565b60a08301511515611cac565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611f7093600093849392849190608081016001600160401b03811182821017611f77575b6040525193165af161138f611f696113e2565b8092611474565b1561012757565b611f7f61073f565b611f56565b60405190611f9182610756565b60006020838281520152565b60405190611faa826107cf565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152611fe0610f49565b60e0820152826101008201520152565b61087f9092919261016061012061018083019561200e848251610f3c565b61202060208201516020860190610f3c565b6040810151604085015261203c60608201516060860190610f3c565b60808181015115159085015260a081015160a085015260c081015160c085015261206e60e082015160e0860190611a59565b61010081015161014085015201511515910152565b61208b611f84565b60c08201805160408401805191909111835292919060e083015160a0840180519091600091106122545750825115155b156121a157611d8293612177611d90948461217f946120ea602061087f9b985189511115940193849015159052565b6120f2611f9d565b966121066121008751610a0c565b89610fce565b612116611e026020880151610a0c565b51604088015261213561212c6060870151610a0c565b60608901610fce565b61214e6121456080870151151590565b15156080890152565b5160a08701525160c08601526101008084015160e0870152610120809401519086015251151590565b151590830152565b6121896005600055565b61219243600155565b60405192839160208301611ff0565b50508051611ecc935015612245576121bc6060830151610a0c565b600080808061012087015181811561223c575b6001600160a01b0396871690f11561222f575b6121f96121f26020850151610a0c565b9251151590565b156122195761010061220b8451610a0c565b935b01515151921690611f04565b6101006122296060850151610a0c565b9361220d565b61223761195c565b6121e2565b506108fc6121cf565b61224f8251610a0c565b6121bc565b6120bb565b6020906003190112610127576040519061227282610799565b6004358252565b61018081830312610127576040519161016091906122ec9060e085016001600160401b03811186821017612306575b6040526122b483610a18565b85526122c260208401610a18565b6020860152604083015160408601526122de8160608501610de1565b606086015260e08301610a41565b608084015261014081015160a0840152015160c082015290565b61230e61073f565b6122a856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10842,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_algo.rsh:46:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_algo.rsh:117:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_algo.rsh:83:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_algo.rsh:77:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_algo.rsh:50:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "B": B,
  "Borrower_close": Borrower_close,
  "Borrower_repay": Borrower_repay,
  "Lender_lend": Lender_lend
  };
export const _APIs = {
  Borrower: {
    close: Borrower_close,
    repay: Borrower_repay
    },
  Lender: {
    lend: Lender_lend
    }
  };
