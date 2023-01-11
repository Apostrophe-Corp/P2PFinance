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
      const [v582, v583, v584, v585, v590, v592, v593] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = svs;
      return (await ((async () => {
        
        
        return v745;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v582, v583, v584, v585, v590, v592, v593] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = svs;
      return (await ((async () => {
        
        
        return v610;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v582, v583, v584, v585, v590, v592, v593] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = svs;
      return (await ((async () => {
        
        
        return v714;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = svs;
      return (await ((async () => {
        
        
        return v638;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v582, v583, v584, v585, v590, v592, v593] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = svs;
      return (await ((async () => {
        
        
        return v775;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = svs;
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
        beginBlock: {
          decode: LoanViews_beginBlock,
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
      5: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
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
    tokCollateral: ctc2
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
  const ctc10 = stdlib.T_Data({
    Borrower_claimRefund0_237: ctc6,
    Borrower_repay0_237: ctc9,
    Lender_claim0_237: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v560 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v561 = [v560];
  const v567 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v568 = v567.address;
  const v569 = v567.amount;
  const v570 = v567.collateral;
  const v571 = v567.maturation;
  const v572 = v567.principal;
  const v573 = v567.tokCollateral;
  const v580 = stdlib.lt(v572, v569);
  stdlib.assert(v580, {
    at: './src/contracts/loan_algo_nnt.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v581 = {
    address: v568,
    amount: v569,
    maturation: v571,
    principal: v572
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v573, v570, v581],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v583, v584, v585], secs: v587, time: v586, didSend: v43, from: v582 } = txn1;
      
      const v588 = v561[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v589 = stdlib.Array_set(v588, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v590 = stdlib.Array_set(v561, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v589);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v583
        });
      ;
      const v592 = v585.principal;
      const v593 = v585.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v583, v584, v585], secs: v587, time: v586, didSend: v43, from: v582 } = txn1;
  const v588 = v561[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v589 = stdlib.Array_set(v588, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v590 = stdlib.Array_set(v561, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v589);
  ;
  ;
  const v592 = v585.principal;
  const v593 = v585.amount;
  const v594 = stdlib.lt(v592, v593);
  stdlib.assert(v594, {
    at: './src/contracts/loan_algo_nnt.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v582, v583, v584, v585, v590, v592, v593],
    evt_cnt: 0,
    funcNum: 1,
    lct: v586,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), [[v584, v583]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v597, time: v596, didSend: v53, from: v595 } = txn2;
      
      ;
      const v598 = v590[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v599 = v598[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v600 = stdlib.add(v599, v584);
      const v602 = stdlib.Array_set(v598, '0', v600);
      const v603 = stdlib.Array_set(v590, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v602);
      sim_r.txns.push({
        amt: v584,
        kind: 'to',
        tok: v583
        });
      
      const v607 = true;
      const v608 = v582;
      const v609 = false;
      const v610 = v596;
      const v616 = v603;
      const v617 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v632 = v609 ? false : v607;
        
        return v632;})()) {
        const v637 = v609 ? false : v607;
        const v638 = v637 ? true : v609;
        sim_r.isHalt = false;
        }
      else {
        const v713 = v609 ? false : v607;
        const v714 = v713 ? true : v609;
        if (v609) {
          const v741 = stdlib.sub(v617, v617);
          sim_r.txns.push({
            kind: 'from',
            to: v582,
            tok: undefined /* Nothing */
            });
          const v743 = v585.maturation;
          const v744 = stdlib.safeAdd(v610, v743);
          const v745 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v746 = v610;
          const v752 = v616;
          const v753 = v741;
          
          if (await (async () => {
            const v770 = stdlib.lt(v746, v744);
            const v772 = stdlib.lt(v745, v593);
            const v773 = v770 ? v772 : false;
            
            return v773;})()) {
            const v775 = stdlib.ge(v745, v593);
            sim_r.isHalt = false;
            }
          else {
            const v1017 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v1018 = v1017[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v1020 = stdlib.lt(v745, v593);
            const v1021 = v1020 ? v608 : v582;
            sim_r.txns.push({
              kind: 'from',
              to: v1021,
              tok: v583
              });
            const v1034 = v1020 ? v582 : v608;
            sim_r.txns.push({
              kind: 'from',
              to: v1034,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v583
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v716 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v717 = v716[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v582,
            tok: v583
            });
          sim_r.txns.push({
            kind: 'from',
            to: v582,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v583
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
    tys: [ctc0, ctc2, ctc1, ctc4, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v597, time: v596, didSend: v53, from: v595 } = txn2;
  ;
  const v598 = v590[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v599 = v598[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v600 = stdlib.add(v599, v584);
  const v602 = stdlib.Array_set(v598, '0', v600);
  const v603 = stdlib.Array_set(v590, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v602);
  ;
  const v604 = stdlib.addressEq(v582, v595);
  stdlib.assert(v604, {
    at: './src/contracts/loan_algo_nnt.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v596), {
    at: './src/contracts/loan_algo_nnt.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v607 = true;
  let v608 = v582;
  let v609 = false;
  let v610 = v596;
  let v616 = v603;
  let v617 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v632 = v609 ? false : v607;
    
    return v632;})()) {
    const v637 = v609 ? false : v607;
    const v638 = v637 ? true : v609;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v659], secs: v661, time: v660, didSend: v158, from: v658 } = txn4;
    switch (v659[0]) {
      case 'Borrower_close0_93': {
        const v662 = v659[1];
        undefined /* setApiDetails */;
        ;
        const v672 = null;
        await txn4.getOutput('Borrower_close', 'v672', ctc5, v672);
        const cv607 = false;
        const cv608 = v608;
        const cv609 = v609;
        const cv610 = v660;
        const cv616 = v616;
        const cv617 = v617;
        
        v607 = cv607;
        v608 = cv608;
        v609 = cv609;
        v610 = cv610;
        v616 = cv616;
        v617 = cv617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v687 = v659[1];
        undefined /* setApiDetails */;
        const v695 = stdlib.add(v617, v592);
        ;
        const v705 = true;
        await txn4.getOutput('Lender_lend', 'v705', ctc8, v705);
        const cv607 = v607;
        const cv608 = v658;
        const cv609 = true;
        const cv610 = v660;
        const cv616 = v616;
        const cv617 = v695;
        
        v607 = cv607;
        v608 = cv608;
        v609 = cv609;
        v610 = cv610;
        v616 = cv616;
        v617 = cv617;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v713 = v609 ? false : v607;
  const v714 = v713 ? true : v609;
  if (v609) {
    const v741 = stdlib.sub(v617, v617);
    ;
    const v743 = v585.maturation;
    const v744 = stdlib.safeAdd(v610, v743);
    let v745 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
    let v746 = v610;
    let v752 = v616;
    let v753 = v741;
    
    let txn4 = txn3;
    while (await (async () => {
      const v770 = stdlib.lt(v746, v744);
      const v772 = stdlib.lt(v745, v593);
      const v773 = v770 ? v772 : false;
      
      return v773;})()) {
      const v775 = stdlib.ge(v745, v593);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn5;
      switch (v829[0]) {
        case 'Borrower_claimRefund0_237': {
          const v832 = v829[1];
          undefined /* setApiDetails */;
          ;
          const v853 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v853', ctc5, v853);
          const cv745 = v745;
          const cv746 = v830;
          const cv752 = v752;
          const cv753 = v753;
          
          v745 = cv745;
          v746 = cv746;
          v752 = cv752;
          v753 = cv753;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_237': {
          const v893 = v829[1];
          undefined /* setApiDetails */;
          const v899 = v893[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
          const v900 = stdlib.addressEq(v828, v582);
          stdlib.assert(v900, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v902 = stdlib.safeAdd(v899, v745);
          const v904 = stdlib.gt(v902, v593);
          let v905;
          if (v904) {
            const v908 = stdlib.safeSub(v902, v593);
            v905 = v908;
            }
          else {
            v905 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v909 = stdlib.safeSub(v899, v905);
          const v912 = stdlib.add(v753, v909);
          ;
          let v927;
          if (v904) {
            const v930 = stdlib.safeSub(v902, v593);
            v927 = v930;
            }
          else {
            v927 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v931 = stdlib.safeSub(v899, v927);
          const v933 = stdlib.safeAdd(v745, v931);
          const v935 = stdlib.ge(v933, v593);
          const v937 = [v935, v933, v593];
          await txn5.getOutput('Borrower_repay', 'v937', ctc11, v937);
          const cv745 = v933;
          const cv746 = v830;
          const cv752 = v752;
          const cv753 = v912;
          
          v745 = cv745;
          v746 = cv746;
          v752 = cv752;
          v753 = cv753;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_237': {
          const v954 = v829[1];
          undefined /* setApiDetails */;
          ;
          const v1009 = null;
          await txn5.getOutput('Lender_claim', 'v1009', ctc5, v1009);
          const cv745 = v745;
          const cv746 = v830;
          const cv752 = v752;
          const cv753 = v753;
          
          v745 = cv745;
          v746 = cv746;
          v752 = cv752;
          v753 = cv753;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1017 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
    const v1018 = v1017[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
    const v1020 = stdlib.lt(v745, v593);
    const v1021 = v1020 ? v608 : v582;
    ;
    const v1034 = v1020 ? v582 : v608;
    ;
    return;
    }
  else {
    const v716 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v717 = v716[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  };
export async function _Borrower_claimRefund5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Borrower_claimRefund5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Borrower_claimRefund5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_237: ctc6,
    Borrower_repay0_237: ctc7,
    Lender_claim0_237: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v778 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:122:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_claimRefund0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:122:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v782 = ['Borrower_claimRefund0_237', v778];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775, v782],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
      
      switch (v829[0]) {
        case 'Borrower_claimRefund0_237': {
          const v832 = v829[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          const v853 = null;
          const v854 = await txn1.getOutput('Borrower_claimRefund', 'v853', ctc9, v853);
          
          const v2058 = v745;
          const v2060 = v752;
          const v2061 = v753;
          const v2062 = stdlib.lt(v830, v744);
          const v2063 = stdlib.lt(v745, v593);
          const v2064 = v2062 ? v2063 : false;
          if (v2064) {
            const v2065 = stdlib.ge(v745, v593);
            sim_r.isHalt = false;
            }
          else {
            const v2067 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2068 = v2067[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2070 = v2063 ? v608 : v582;
            sim_r.txns.push({
              kind: 'from',
              to: v2070,
              tok: v583
              });
            const v2071 = v2063 ? v582 : v608;
            sim_r.txns.push({
              kind: 'from',
              to: v2071,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v583
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_237': {
          const v893 = v829[1];
          
          break;
          }
        case 'Lender_claim0_237': {
          const v954 = v829[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
  switch (v829[0]) {
    case 'Borrower_claimRefund0_237': {
      const v832 = v829[1];
      undefined /* setApiDetails */;
      ;
      const v853 = null;
      const v854 = await txn1.getOutput('Borrower_claimRefund', 'v853', ctc9, v853);
      if (v431) {
        stdlib.protect(ctc9, await interact.out(v832, v854), {
          at: './src/contracts/loan_algo_nnt.rsh:122:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:122:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:123:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:122:58:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:122:58:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2058 = v745;
      const v2060 = v752;
      const v2061 = v753;
      const v2062 = stdlib.lt(v830, v744);
      const v2063 = stdlib.lt(v745, v593);
      const v2064 = v2062 ? v2063 : false;
      if (v2064) {
        const v2065 = stdlib.ge(v745, v593);
        return;
        }
      else {
        const v2067 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2068 = v2067[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2070 = v2063 ? v608 : v582;
        ;
        const v2071 = v2063 ? v582 : v608;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_237': {
      const v893 = v829[1];
      return;
      break;
      }
    case 'Lender_claim0_237': {
      const v954 = v829[1];
      return;
      break;
      }
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
  
  
  const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v641 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v645 = ['Borrower_close0_93', v641];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638, v645],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:76:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v659], secs: v661, time: v660, didSend: v158, from: v658 } = txn1;
      
      switch (v659[0]) {
        case 'Borrower_close0_93': {
          const v662 = v659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v672 = null;
          const v673 = await txn1.getOutput('Borrower_close', 'v672', ctc9, v672);
          
          const v2100 = false;
          const v2101 = v608;
          const v2102 = v609;
          const v2103 = v660;
          const v2104 = v616;
          const v2105 = v617;
          const v2106 = v609 ? false : false;
          if (v2106) {
            const v2108 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2110 = v609;
            if (v609) {
              const v2111 = stdlib.sub(v617, v617);
              sim_r.txns.push({
                kind: 'from',
                to: v582,
                tok: undefined /* Nothing */
                });
              const v2112 = v585.maturation;
              const v2113 = stdlib.safeAdd(v660, v2112);
              const v2157 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
              const v2159 = v616;
              const v2160 = v2111;
              const v2161 = stdlib.lt(v660, v2113);
              const v2162 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
              const v2163 = v2161 ? v2162 : false;
              if (v2163) {
                const v2164 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
                sim_r.isHalt = false;
                }
              else {
                const v2166 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
                const v2167 = v2166[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
                const v2169 = v2162 ? v608 : v582;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2169,
                  tok: v583
                  });
                const v2170 = v2162 ? v582 : v608;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2170,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v583
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2155 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v2156 = v2155[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v582,
                tok: v583
                });
              sim_r.txns.push({
                kind: 'from',
                to: v582,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v583
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
          const v687 = v659[1];
          
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
  const {data: [v659], secs: v661, time: v660, didSend: v158, from: v658 } = txn1;
  switch (v659[0]) {
    case 'Borrower_close0_93': {
      const v662 = v659[1];
      undefined /* setApiDetails */;
      ;
      const v672 = null;
      const v673 = await txn1.getOutput('Borrower_close', 'v672', ctc9, v672);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v662, v673), {
          at: './src/contracts/loan_algo_nnt.rsh:76:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:77:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:76:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2100 = false;
      const v2101 = v608;
      const v2102 = v609;
      const v2103 = v660;
      const v2104 = v616;
      const v2105 = v617;
      const v2106 = v609 ? false : false;
      if (v2106) {
        const v2108 = true;
        return;
        }
      else {
        const v2110 = v609;
        if (v609) {
          const v2111 = stdlib.sub(v617, v617);
          ;
          const v2112 = v585.maturation;
          const v2113 = stdlib.safeAdd(v660, v2112);
          const v2157 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2159 = v616;
          const v2160 = v2111;
          const v2161 = stdlib.lt(v660, v2113);
          const v2162 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
          const v2163 = v2161 ? v2162 : false;
          if (v2163) {
            const v2164 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
            return;
            }
          else {
            const v2166 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2167 = v2166[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2169 = v2162 ? v608 : v582;
            ;
            const v2170 = v2162 ? v582 : v608;
            ;
            return;
            }}
        else {
          const v2155 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v2156 = v2155[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v687 = v659[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_237: ctc7,
    Borrower_repay0_237: ctc6,
    Lender_claim0_237: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v792 = ctc.selfAddress();
  const v794 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v795 = v794[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v797 = stdlib.addressEq(v792, v582);
  stdlib.assert(v797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v799 = stdlib.safeAdd(v795, v745);
  const v801 = stdlib.gt(v799, v593);
  const v812 = ['Borrower_repay0_237', v794];
  
  let v822;
  if (v801) {
    const v825 = stdlib.safeSub(v799, v593);
    v822 = v825;
    }
  else {
    v822 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
    }
  const v826 = stdlib.safeSub(v795, v822);
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775, v812],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v826, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
      
      switch (v829[0]) {
        case 'Borrower_claimRefund0_237': {
          const v832 = v829[1];
          
          break;
          }
        case 'Borrower_repay0_237': {
          const v893 = v829[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v899 = v893[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
          const v902 = stdlib.safeAdd(v899, v745);
          const v904 = stdlib.gt(v902, v593);
          let v905;
          if (v904) {
            const v908 = stdlib.safeSub(v902, v593);
            v905 = v908;
            }
          else {
            v905 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v909 = stdlib.safeSub(v899, v905);
          const v912 = stdlib.add(v753, v909);
          sim_r.txns.push({
            amt: v909,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v927;
          if (v904) {
            const v930 = stdlib.safeSub(v902, v593);
            v927 = v930;
            }
          else {
            v927 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v931 = stdlib.safeSub(v899, v927);
          const v933 = stdlib.safeAdd(v745, v931);
          const v935 = stdlib.ge(v933, v593);
          const v937 = [v935, v933, v593];
          const v938 = await txn1.getOutput('Borrower_repay', 'v937', ctc9, v937);
          
          const v2256 = v933;
          const v2258 = v752;
          const v2259 = v912;
          const v2260 = stdlib.lt(v830, v744);
          const v2261 = stdlib.lt(v933, v593);
          const v2262 = v2260 ? v2261 : false;
          if (v2262) {
            sim_r.isHalt = false;
            }
          else {
            const v2265 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2266 = v2265[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2268 = v2261 ? v608 : v582;
            sim_r.txns.push({
              kind: 'from',
              to: v2268,
              tok: v583
              });
            const v2269 = v2261 ? v582 : v608;
            sim_r.txns.push({
              kind: 'from',
              to: v2269,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v583
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_237': {
          const v954 = v829[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
  switch (v829[0]) {
    case 'Borrower_claimRefund0_237': {
      const v832 = v829[1];
      return;
      break;
      }
    case 'Borrower_repay0_237': {
      const v893 = v829[1];
      undefined /* setApiDetails */;
      const v899 = v893[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
      const v900 = stdlib.addressEq(v828, v582);
      stdlib.assert(v900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v902 = stdlib.safeAdd(v899, v745);
      const v904 = stdlib.gt(v902, v593);
      let v905;
      if (v904) {
        const v908 = stdlib.safeSub(v902, v593);
        v905 = v908;
        }
      else {
        v905 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
        }
      const v909 = stdlib.safeSub(v899, v905);
      const v912 = stdlib.add(v753, v909);
      ;
      let v927;
      if (v904) {
        const v930 = stdlib.safeSub(v902, v593);
        v927 = v930;
        }
      else {
        v927 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
        }
      const v931 = stdlib.safeSub(v899, v927);
      const v933 = stdlib.safeAdd(v745, v931);
      const v935 = stdlib.ge(v933, v593);
      const v937 = [v935, v933, v593];
      const v938 = await txn1.getOutput('Borrower_repay', 'v937', ctc9, v937);
      if (v431) {
        stdlib.protect(ctc10, await interact.out(v893, v938), {
          at: './src/contracts/loan_algo_nnt.rsh:106:31:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:117:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:115:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:115:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:115:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2256 = v933;
      const v2258 = v752;
      const v2259 = v912;
      const v2260 = stdlib.lt(v830, v744);
      const v2261 = stdlib.lt(v933, v593);
      const v2262 = v2260 ? v2261 : false;
      if (v2262) {
        return;
        }
      else {
        const v2265 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2266 = v2265[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2268 = v2261 ? v608 : v582;
        ;
        const v2269 = v2261 ? v582 : v608;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_237': {
      const v954 = v829[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Lender_claim5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Lender_claim5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Lender_claim5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_237: ctc6,
    Borrower_repay0_237: ctc7,
    Lender_claim0_237: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v786 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:126:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runLender_claim0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v790 = ['Lender_claim0_237', v786];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v593, v608, v610, v714, v744, v745, v752, v753, v775, v790],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:126:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
      
      switch (v829[0]) {
        case 'Borrower_claimRefund0_237': {
          const v832 = v829[1];
          
          break;
          }
        case 'Borrower_repay0_237': {
          const v893 = v829[1];
          
          break;
          }
        case 'Lender_claim0_237': {
          const v954 = v829[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          const v1009 = null;
          const v1010 = await txn1.getOutput('Lender_claim', 'v1009', ctc9, v1009);
          
          const v2312 = v745;
          const v2314 = v752;
          const v2315 = v753;
          const v2316 = stdlib.lt(v830, v744);
          const v2317 = stdlib.lt(v745, v593);
          const v2318 = v2316 ? v2317 : false;
          if (v2318) {
            const v2319 = stdlib.ge(v745, v593);
            sim_r.isHalt = false;
            }
          else {
            const v2321 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2322 = v2321[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2324 = v2317 ? v608 : v582;
            sim_r.txns.push({
              kind: 'from',
              to: v2324,
              tok: v583
              });
            const v2325 = v2317 ? v582 : v608;
            sim_r.txns.push({
              kind: 'from',
              to: v2325,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v583
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v829], secs: v831, time: v830, didSend: v431, from: v828 } = txn1;
  switch (v829[0]) {
    case 'Borrower_claimRefund0_237': {
      const v832 = v829[1];
      return;
      break;
      }
    case 'Borrower_repay0_237': {
      const v893 = v829[1];
      return;
      break;
      }
    case 'Lender_claim0_237': {
      const v954 = v829[1];
      undefined /* setApiDetails */;
      ;
      const v1009 = null;
      const v1010 = await txn1.getOutput('Lender_claim', 'v1009', ctc9, v1009);
      if (v431) {
        stdlib.protect(ctc9, await interact.out(v954, v1010), {
          at: './src/contracts/loan_algo_nnt.rsh:126:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:126:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:127:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:126:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:126:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2312 = v745;
      const v2314 = v752;
      const v2315 = v753;
      const v2316 = stdlib.lt(v830, v744);
      const v2317 = stdlib.lt(v745, v593);
      const v2318 = v2316 ? v2317 : false;
      if (v2318) {
        const v2319 = stdlib.ge(v745, v593);
        return;
        }
      else {
        const v2321 = v752[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2322 = v2321[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2324 = v2317 ? v608 : v582;
        ;
        const v2325 = v2317 ? v582 : v608;
        ;
        return;
        }
      break;
      }
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
  
  
  const [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v649 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:66:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v653 = ['Lender_lend0_93', v649];
  
  const txn1 = await (ctc.sendrecv({
    args: [v582, v583, v585, v592, v593, v607, v608, v609, v616, v617, v638, v653],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v592, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v659], secs: v661, time: v660, didSend: v158, from: v658 } = txn1;
      
      switch (v659[0]) {
        case 'Borrower_close0_93': {
          const v662 = v659[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v687 = v659[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v695 = stdlib.add(v617, v592);
          sim_r.txns.push({
            amt: v592,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v705 = true;
          const v706 = await txn1.getOutput('Lender_lend', 'v705', ctc4, v705);
          
          const v2398 = v658;
          const v2400 = v660;
          const v2407 = true;
          const v2408 = stdlib.sub(v695, v695);
          sim_r.txns.push({
            kind: 'from',
            to: v582,
            tok: undefined /* Nothing */
            });
          const v2409 = v585.maturation;
          const v2410 = stdlib.safeAdd(v660, v2409);
          const v2454 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2456 = v616;
          const v2457 = v2408;
          const v2458 = stdlib.lt(v660, v2410);
          const v2459 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
          const v2460 = v2458 ? v2459 : false;
          if (v2460) {
            const v2461 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
            sim_r.isHalt = false;
            }
          else {
            const v2463 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2464 = v2463[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
            const v2466 = v2459 ? v658 : v582;
            sim_r.txns.push({
              kind: 'from',
              to: v2466,
              tok: v583
              });
            const v2467 = v2459 ? v582 : v658;
            sim_r.txns.push({
              kind: 'from',
              to: v2467,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v583
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
  const {data: [v659], secs: v661, time: v660, didSend: v158, from: v658 } = txn1;
  switch (v659[0]) {
    case 'Borrower_close0_93': {
      const v662 = v659[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v687 = v659[1];
      undefined /* setApiDetails */;
      const v695 = stdlib.add(v617, v592);
      ;
      const v705 = true;
      const v706 = await txn1.getOutput('Lender_lend', 'v705', ctc4, v705);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v687, v706), {
          at: './src/contracts/loan_algo_nnt.rsh:66:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:70:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:69:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2398 = v658;
      const v2400 = v660;
      const v2407 = true;
      const v2408 = stdlib.sub(v695, v695);
      ;
      const v2409 = v585.maturation;
      const v2410 = stdlib.safeAdd(v660, v2409);
      const v2454 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
      const v2456 = v616;
      const v2457 = v2408;
      const v2458 = stdlib.lt(v660, v2410);
      const v2459 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
      const v2460 = v2458 ? v2459 : false;
      if (v2460) {
        const v2461 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v593);
        return;
        }
      else {
        const v2463 = v616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2464 = v2463[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:131:33:application', stdlib.UInt_max, '0')];
        const v2466 = v2459 ? v658 : v582;
        ;
        const v2467 = v2459 ? v582 : v658;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Borrower_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Borrower_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Borrower_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Borrower_claimRefund5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
export async function Lender_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lender_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lender_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Lender_claim5(ctcTop, interact);}
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
    impure: [`Borrower_claimRefund()byte[0]`, `Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()byte[0]`, `Lender_lend()byte`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_claimRefund()byte[0]`, `Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()byte[0]`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByASAAEFBAgHICjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCAqCNBiYDAQEBAAAiNQAxGEEGcCpkSSJbNQEhBFs1AjYaABdJQQESIjUEIzUGSSEIDEAAeUkhCQxAAEBJIQoMQAApSSELDEAAFCELEkQqNf+AAQI0/1AhBK9QQgGwIQoSRCo1/yk0/1BCAOohCRJENhoBNf8oNP9QQgGSSSEMDEAAEiEMEkQqNf8pNP9QIQSvUEIBeSEIEkQ0ASQSRClkKGRQSTUDV2EINQdCBc5JIQ0MQAAuSSEODEAADiEOEkQqNf8oNP9QQgCMIQ0SRDQBJBJEKWQoZFBJNQNXggE1B0IFmUkhDwxAABkhDxJENAEkEkQpZChkUEk1A1dQCDUHQgV5gY/GxSoSRDQBSSEFDEAAFCEFEkQpZChkUEk1A1erATUHQgVVJBJEKWQoZFBJNQNXWAE1B0IFQjYaAhc1BDYaAzYaARdJJQxAAilJJAxAALokEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSVcAIDX/IQZbNf5XKDg1/YFgWzX8gWhbNftXkhE1+oGjAVs1+Uk1BTX4gASxmSJFNPhQsDT4IlVAAC2ACAAAAAAAAAKgsCo1BzT/NP40/TT8NPsiNANXcSA0A1eRARcyBjT6NPlCAsY0/IgEw4AJAAAAAAAAAsEBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk0/AhCApNIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpXACA1/yEGWzX+IQdbNf1XMCA1/IFQWzX7V1gBFzX6gVlbNfmBYVs1+FdpETX3gXpbNfZJNQU19YAE1Y4dqzT1ULA09SJVSSMMQADXSSEQDEAAKyEQEkSACAAAAAAAAAPxsCo1BzT/NP40/TT8NPs0+jT5NPgyBjT3NPZCAslINPVXAQg19DT0FzXzMQA0/xJENPM0+AhJNfI0/Q1JNfFBAAo08jT9CTXwQgADIjXwNPM08Ak17zTviAO8NPFBAAo08jT9CTXuQgADIjXuNPg08zTuCQg17YAIAAAAAAAAA6k07TT9DxZRBwg07RZQNP0WUFCwNO00/Q8WUQcINO0WUDT9FlA1BzT/NP40/TT8NPs0+jT5NO0yBjT3NPY07whCAiRIgAgAAAAAAAADVbAqNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2QgH8SSMMQAB5IxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpXACA1/yEGWzX+IQdbNf1XaBE1/IAEmouRdLA0/FcAETX7NP00/ogC+DT/MQASRDT/NP40A1cwODQDgXlbNAOBgQFbIzT/IjIGNPw0+0kiWzT9CBZcAFwAIkIAq0ghEYgCpyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBFs1/lcQODX9gARb8vLKNP8WUDT+FlA0/VCwgRGvSTX8SVcAESEEr1wAXAA1+yERiAJasSKyASKyEiWyEDIKshQ0/7IRszT9gTBbNfo0/SEGWzX5NPo0+QxEMQA0/xZQNP4WUDT9UDT7UDT6FlA0+RZQKUsBVwB/ZyhLAVd/CmdIIzUBMgY1AkIBsDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/BQ0+hBBADs09TT2FlA091A0+BZQNPkWUChQNPtQKVA0/lA0/xZQKFApSwFXAH9nKEsBV38tZ0ghBTUBMgY1AkIBVjT8QQAwsSKyATT/sggjshA09bIHszT1NPY0+TT7NP00/DT9NPchB1sIIjT9NP40/0kJQgBDsSKyATT+VwARIluyEiWyEDT1shQ09rIRs7EisgE0/7III7IQNPWyB7OxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAwzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/DT3DDX0NP00+ww09BBBAE40/DT3DzXzNPU09hZQNPcWUDT4UDT5FlA0+hZRBwhQNPsWUDT8FlA0/lA0/xZQNPMWUQcIUClLAVcAf2coSwFXfwRnSCQ1ATIGNQJCAGixIrIBNP5XABEiW7ISJbIQNPU0+DT0TbIUNPayEbOxIrIBNP+yCCOyEDT4NPU09E2yB7OxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2500","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1009","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v672","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v705","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v853","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v937","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2486","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2502","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2514","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2528","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002d8538819003601f8101601f191683016001600160401b0381118482101762000521578392829160405283398101039060e0821262000625576080604051926200004d846200062a565b825184526200005f6020840162000662565b602085015260408301516040850152605f190112620006255760c06040519162000089836200062a565b620000976060820162000662565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005215760009161012091604052828152826020820152826040820152620000fa62000677565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f8262000646565b6200013962000677565b8252602082016200014962000698565b81526200015562000698565b604084015260ff600454166200060c577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001c660608601516080830190620006df565ba181518015908115620005ff575b5015620005e657600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002138362000646565b60008352602083015260408201526200022b62000698565b9160005b600181106200059657505081526040830152346200057d57606081015160206060820151910151111562000564576040519160e08301916001600160401b03831184841017620005215760406060926020948252600086526000858701526000828701528151620002a0816200062a565b6000815260008682015260008382015260008582015284870152620002c462000698565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200035960608201516080840190620006df565b6080810151600061010084015b60018210620005375760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005215760405280516001600160401b0381116200052157600254600181811c9116801562000516575b60208210146200050057601f811162000496575b50602091601f82116001146200042c5791819260009262000420575b50508160011b916000199060031b1c1916176002555b6040516126519081620007348239f35b015190508280620003fa565b601f19821692600260005260206000209160005b8581106200047d5750836001951062000463575b505050811b0160025562000410565b015160001960f88460031b161c1916905582808062000454565b9192602060018192868501518155019401920162000440565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004f5575b601f0160051c01905b818110620004e85750620003de565b60008155600101620004d9565b9091508190620004d0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ca565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000366565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005a281836200070b565b51620005af82866200070b565b52620005bc81856200070b565b506000198114620005d0576001016200022f565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d4565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200052157604052565b606081019081106001600160401b038211176200052157604052565b51906001600160a01b03821682036200062557565b60405190620006868262000646565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000521576040528260005b828110620006c857505050565b8290620006d462000677565b8184015201620006bb565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200071d5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610829565b61000e565b506100ca6107bb565b506100ca610746565b506100ca61069c565b506100ca61064e565b506100ca6105cf565b506100ca6105b0565b506100ca610571565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610ae5565b6005600054036101975760e0602091608061018861017a6109be565b858082518301019101610cac565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610ae5565b604051906101f682610906565b600435825260803660231901126101b057604051916102148361092e565b6024359260038410156101b05761026193815260443561023381610c1a565b60208201526102413661246d565b604082015260843561025281610c1a565b60608201526020820152611269565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610ae5565b6005600054036102a75760c060209160e061018861017a6109be565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610ae5565b61030d816102e5610bd4565b85810190600082515251151586825101526102fe610bd4565b906000825251868201526117c8565b01511515604051908152f35b50346101b05760003660031901126101b057610333610ae5565b60056000540361037a5761012061026d916101406103616103526109be565b60208082518301019101610cac565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103a9610ae5565b5061055b6103b63661248d565b916103d26103cd6103c960045460ff1690565b1590565b610d5b565b60408051338152845160208201529093610548917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a1610419600160005414610d7b565b6104476104356104276109be565b8580825183010191016124ad565b91518015908115610565575b50610d9b565b6104513415610dbb565b8281019261054360806104648651610bfa565b9361047d6104788a83019687519033612547565b610ddb565b6104993360018060a01b036104928451610bfa565b1614610dfb565b6104c96104c16104a7611771565b986104bb6104b58551610bfa565b8b61125a565b51610bfa565b85890161125a565b60608101518988015260a0810151606088015260c0810151828801526104f260a0880160019052565b6105086104ff8251610bfa565b60c0890161125a565b600060e0880152436101008801520151918251938451905101938882820151910151151591610535610a69565b958652850152151587840152565b6125c7565b6101208201526000610140820152611db0565b5160008152602090f35b90506001541438610441565b5060003660031901126101b057602060a061058a610ae5565b61030d81610596610bd4565b8581019060018251525115156040825101526102fe610bd4565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105e4610ae5565b604051906105f182610906565b600435825260603660231901126101b0576040519161060f83610949565b6024359260028410156101b05761026193815260443561062e81610c1a565b602082015260643561063f81610c1a565b604082015260208201526117c8565b5060003660031901126101b05760206080610667610ae5565b61030d81610673610b8a565b85810190600282515251151560608251015261068d610b8a565b90600082525186820152611269565b50346101b05760003660031901126101b05761026d6106f96101006106bf610ae5565b600054600781101561070b5760056106d79114610e3b565b6106ea6106f160a06106ea6103526109be565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107179114610e1b565b6107416101406107376107286109be565b6020808251830101910161101e565b0151151582840152565b6106ea565b50346101b0576000806003193601126107b85780546107636109be565b906040519283918252602090604082840152835191826040850152815b8381106107a157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610780565b80fd5b5060003660031901126101b0576020806107d3610ae5565b61030d816107df610b8a565b84810190600082515251151585825101526107f8610b8a565b90600082525185820152611269565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b05761083e610aa8565b5061026d606061084c610ae5565b6108a78160405161085c81610906565b60405161086881610964565b600081528152602081019061087b610b57565b8252600435815152600182515251604082510152610897610b8a565b9060008252516020820152611269565b015160405191829182610807565b90600182811c921680156108e5575b60208310146108cf57565b634e487b7160e01b600052602260045260246000fd5b91607f16916108c4565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761092157604052565b6109296108ef565b604052565b608081019081106001600160401b0382111761092157604052565b606081019081106001600160401b0382111761092157604052565b602081019081106001600160401b0382111761092157604052565b61016081019081106001600160401b0382111761092157604052565b601f909101601f19168101906001600160401b0382119082101761092157604052565b60405190600082600254916109d2836108b5565b808352600193808516908115610a4857506001146109fa575b506109f89250038361099b565b565b6002600090815260008051602061262583398151915294602093509091905b818310610a305750506109f89350820101386109eb565b85548884018501529485019487945091830191610a19565b90506109f894506020925060ff191682840152151560051b820101386109eb565b60405190606082016001600160401b0381118382101761092157604052565b6040519061016082016001600160401b0381118382101761092157604052565b60405190606082016001600160401b03811183821017610ad8575b60405260006040838281528260208201520152565b610ae06108ef565b610ac3565b6040519061014082016001600160401b03811183821017610b4a575b60405281610120600091828152826020820152826040820152610b22610aa8565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b526108ef565b610b01565b60405190610b648261092e565b6000606083828152826020820152604051610b7e81610964565b83815260408201520152565b60405190610b9782610906565b81600081526020610ba6610b57565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610bcc57565b6109f8610bab565b60405190610be182610906565b81600081526020610ba6610aa8565b60021115610bcc57565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109f882610c1a565b9080601f830112156101b057604091825192610c4a84610964565b83606093848401938185116101b057915b848310610c6b5750505050505090565b85838303126101b05783518691610c8182610949565b84518252602091828601518382015286860151610c9d81610c1a565b87820152815201920191610c5b565b6101a0818303126101b057610180610d5291610cc6610a88565b93610cd082610c06565b8552610cde60208301610c06565b602086015260408201516040860152610cf960608301610c06565b606086015260808201516080860152610d1460a08301610c24565b60a086015260c082015160c086015260e082015160e0860152610d3c61010091828401610c2f565b9085015261016081015161012085015201610c24565b61014082015290565b15610d6257565b60405163100960cb60e01b815260106004820152602490fd5b15610d8257565b60405163100960cb60e01b815260116004820152602490fd5b15610da257565b60405163100960cb60e01b815260126004820152602490fd5b15610dc257565b60405163100960cb60e01b815260136004820152602490fd5b15610de257565b60405163100960cb60e01b815260146004820152602490fd5b15610e0257565b60405163100960cb60e01b815260156004820152602490fd5b15610e2257565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e4257565b60405163100960cb60e01b815260096004820152602490fd5b15610e6257565b60405163100960cb60e01b815260166004820152602490fd5b15610e8257565b60405163100960cb60e01b815260176004820152602490fd5b15610ea257565b60405163100960cb60e01b815260186004820152602490fd5b15610ec257565b60405163100960cb60e01b8152601c6004820152602490fd5b15610ee257565b60405163100960cb60e01b8152601a6004820152602490fd5b15610f0257565b60405163100960cb60e01b8152601b6004820152602490fd5b15610f2257565b60405163100960cb60e01b815260196004820152602490fd5b15610f4257565b60405163100960cb60e01b8152601d6004820152602490fd5b15610f6257565b60405163100960cb60e01b8152601e6004820152602490fd5b15610f8257565b60405163100960cb60e01b8152601f6004820152602490fd5b15610fa257565b60405163100960cb60e01b815260216004820152602490fd5b15610fc257565b60405163100960cb60e01b815260206004820152602490fd5b91908260809103126101b057604051610ff38161092e565b606080829461100181610c06565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b0576110d76101e0611038610a88565b9361104281610c06565b855261105060208201610c06565b60208601526110628460408301610fdb565b604086015260c0810151606086015260e08101516080860152610100611089818301610c24565b60a08701526101209061109d828401610c06565b60c08801526110c3610140966110b4888601610c24565b60e08a01526101608501610c2f565b908701526101c08201519086015201610c24565b9082015290565b604051610100810191906001600160401b0383118184101761113f575b82604052809261110a81610964565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610ba6610aa8565b6111476108ef565b6110fb565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156111a9575b60408501526020810151151582850152604081015151608085015201511515910152565b6111b1610bab565b611185565b5160038110156111c35790565b6111cb610bab565b90565b604051906111db82610964565b8160005b602081106111eb575050565b6020906111f6610aa8565b81840152016111df565b6040519061120d8261097f565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112506111ce565b6101208201520152565b6001600160a01b039091169052565b6112ea906112756110de565b61128c6112876103c960045460ff1690565b610e5b565b6040907f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f9618251806112be863383611159565b0390a16112cf600560005414610e7b565b6112d76109be565b6020948186808094518301019101610cac565b9361130081518015908115611692575b50610e9b565b019061130c82516111b6565b61131581610bc2565b61140b5750506000836109f89561132c3415610f1b565b8351600081527ff0735b76d35e85f1cea1c099887ffcb623a7901080c7196d7de10a196973e62e9080602081015b0390a1015261139261136a611200565b9361137e6113788551610bfa565b8661125a565b61138a81850151610bfa565b90850161125a565b80820151908301526113b36113aa6060830151610bfa565b6060840161125a565b608081015160808301526113d66113cd60a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e08301526101004381840152810151906101209182840152015161014082015261226c565b90949291600161141b87516111b6565b61142481610bc2565b0361161f57806109f896510151825261144f6114486114438551610bfa565b610bfa565b3314610edb565b8151519361146360e08501958651906116b5565b9060606114fb8886019784895285880194855110986114878789019a8b9015159052565b8951156116145761149b81518751906116d7565b848901525b6114cc6114b3895151868b0151906116d7565b9a6114c68c60808c019d8e523414610efb565b51151590565b15611607575185516114dd916116d7565b60a08801525b516114f587515160a0890151906116d7565b906116b5565b9461151960e060c08301978089528651111592019182519015159052565b85518982510152835185825101527fd96e343572785bd102a6a7e18802c216e51499b9675540dc59707e07887888f76115588251875191829182610807565b0390a15191015261159261156a611200565b9661157e6115788751610bfa565b8961125a565b61158a81870151610bfa565b90880161125a565b51908501526115b06115a76060840151610bfa565b6060860161125a565b608082015160808501526115d36115ca60a0840151151590565b151560a0860152565b60c082015160c08501525160e08401526101004381850152810151906101209182850152015190510161014082015261226c565b50600060a08801526114e3565b6000848901526114a0565b9192946002915061163090516111b6565b61163981610bc2565b14611645575b50505050565b60006080611689956116573415610ebb565b8351600081527f9318749a01f6669c30a656b02108c249b63830e4e13a2231ca02190a1a12d7a390806020810161135a565b3880808061163f565b905060015414386112fa565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116116ca575b82106101b057565b6116d261169e565b6116c2565b9081039081116116e45790565b6111cb61169e565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611732575b8285015260208101511515606085015201511515910152565b61173a610bab565b611719565b5160028110156111c35790565b604051906117598261092e565b60006060838281528260208201528260408201520152565b6040519061177e8261097f565b8161014060009182815282602082015261179661174c565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112506111ce565b611841906117e36117de6103c960045460ff1690565b610f3b565b6040927fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8451806118158533836116ec565b0390a1611826600760005414610f5b565b61182e6109be565b602093818580809451830101910161101e565b9261185781518015908115611a3e575b50610f7b565b01611862815161173f565b61186b81610bf0565b6119315750926000816109f8956118823415610fbb565b8151600081527f0932affeab6f62507d68182f50f8048c9518090235836ac644262bccd41e7e9e90602090a101526118bb61136a611771565b80820151908301526060810151606083015260808101516080830152600060a08301526118f76118ee60c0830151610bfa565b60c0840161125a565b61191061190760e0830151151590565b151560e0840152565b61010043818401528101519061012091828401520151610140820152611db0565b6119406001919392935161173f565b61194981610bf0565b146119545750505050565b611689936119a160a0606084019461196e86513414610f9b565b8351600181527f2f1e8d6e6cf535d63b22572cd9dcb30b4612434d8f5203a5621f0f01fe4087d990602090a10160019052565b6119d46119ac611771565b946119c06119ba8551610bfa565b8761125a565b6119cc81850151610bfa565b90860161125a565b80820151908401528151606084015260808101516080840152611a066119fd60a0830151151590565b151560a0850152565b611a133360c0850161125a565b600160e084015261010043818501528101519061012091828501520151905101610140820152611db0565b90506001541438611851565b906001811015611a5b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110611a89575050565b60008155600101611a7e565b611aa06002546108b5565b80611aa85750565b601f8111600114611abb57506000600255565b6002600052611b0090601f0160051c600080516020612625833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611a7e565b6000602081208160025555565b60405190611b1a8261097f565b81610140600091828152826020820152611b3261174c565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611b5d6111ce565b610100820152826101208201520152565b6000915b60018310611b7f57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611b72565b6109f8909291926101e0610200820194611bc983825161114c565b611bdb6020820151602085019061114c565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611c39610100928386019015159052565b60c0810151611c4e610120918287019061114c565b611c7660e083015193611c68610140958689019015159052565b830151610160870190611b6e565b8101516101c085015201511515910152565b90601f8211611c95575050565b6109f89160026000526020600020906020601f840160051c83019310611cc3575b601f0160051c0190611a7e565b9091508190611cb6565b80519091906001600160401b038111611da3575b611cf581611cf06002546108b5565b611c88565b602080601f8311600114611d315750819293600092611d26575b50508160011b916000199060031b1c191617600255565b015190503880611d0f565b6002600052601f19831694909190600080516020612625833981519152926000905b878210611d8b575050836001959610611d72575b505050811b01600255565b015160001960f88460031b161c19169055388080611d67565b80600185968294968601518155019501930190611d53565b611dab6108ef565b611ce1565b60e0810180511515801561202b5760005b15611eaa575050611e97611ea56109f892611e75611ddd611b0d565b91611df1611deb8251610bfa565b8461125a565b611e0a611e016020830151610bfa565b6020850161125a565b604081015160408401526060810151606084015260808101516080840152611e3560a0840160019052565b611e4e611e4560c0830151610bfa565b60c0850161125a565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b611e7f6007600055565b611e8843600155565b60405192839160208301611bae565b03601f19810183528261099b565b611ccd565b15611fa157600082611ec26114436109f89551610bfa565b9082808080610140958686015190828215611f98575bf115611f8b575b611ee7611200565b93611ef56113788351610bfa565b611f0e611f056020840151610bfa565b6020870161125a565b60808201516040860152611f31611f2860c0840151610bfa565b6060870161125a565b61010090611f55611f4c83850192835160808a015251151590565b151560a0880152565b611f6881516040808601510151906116b5565b60c08701528460e08701525190850152610120809101519084015282015261226c565b611f93611a71565b611edf565b506108fc611ed8565b506000808083611fdc611fb8602084970151610bfa565b611fc28351610bfa565b6101208401515151916001600160a01b0390911690612037565b610140611fec6114438351610bfa565b91015190828215612022575bf115612015575b6000805561200d6000600155565b6109f8611a95565b61201d611a71565b611fff565b506108fc611ff8565b60a08301511515611dc1565b6000919061209c93838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526120758161092e565b5193165af161208c6120856120a3565b8092612105565b50602080825183010191016120f0565b156101b057565b3d156120eb573d906001600160401b0382116120de575b604051916120d2601f8201601f19166020018461099b565b82523d6000602084013e565b6120e66108ef565b6120ba565b606090565b908160209103126101b057516111cb81610c1a565b1561210d5790565b80511561211c57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561213d5790565b80511561214c57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6040519061217282610906565b60006020838281520152565b6040519061218b8261097f565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611b5d6111ce565b6109f8909291926101806101406101a08301956121e584825161114c565b6121f76020820151602086019061114c565b604081015160408501526122136060820151606086019061114c565b6080810151608085015261223060a082015160a086019015159052565b60c081015160c085015260e081015160e08501526122576101008083015190860190611b6e565b61012081015161016085015201511515910152565b612274612165565b60e082018051604084018051919091118352919290610100908183015160c08401908151116000906000146124685750855115155b156123a357926123796109f896611e97969484611ea5976122d9602061238198518a511115950194859015159052565b6122e161217e565b976122f56122ef8851610bfa565b8a61125a565b61230e6123056020890151610bfa565b60208b0161125a565b51604089015261232d6123246060880151610bfa565b60608a0161125a565b6080860151608089015261235061234760a0880151151590565b151560a08a0152565b5160c08801525160e0870152610120908185015190870152610140809401519086015251151590565b151590830152565b61238b6005600055565b61239443600155565b604051928391602083016121c7565b50505060008093819350826123fe6123bf602085960151610bfa565b926123ca8151151590565b8514612455576114c66123e06060850151610bfa565b945b61012085015151516001600160a01b0396909190871690612037565b831461243f576101406124118251610bfa565b915b01519183918315612435575b1690f115612015576000805561200d6000600155565b6108fc925061241f565b61014061244f6060830151610bfa565b91612413565b6114c66124628451610bfa565b946123e2565b6122a9565b60209060631901126101b0576040519061248682610964565b6064358252565b60209060031901126101b057604051906124a682610964565b6004358252565b610180818303126101b0576040519161016091906125209060e085016001600160401b0381118682101761253a575b6040526124e883610c06565b85526124f660208401610c06565b6020860152604083015160408601526125128160608501610fdb565b606086015260e08301610c2f565b608084015261014081015160a0840152015160c082015290565b6125426108ef565b6124dc565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526111cb936000938493909284919060a081016001600160401b038111828210176125ba575b6040525193165af161208c6125b36120a3565b8092612135565b6125c26108ef565b6125a0565b91906125d16111ce565b9260005b600181106125e35750508252565b806125f060019284611a4a565b516125fb8288611a4a565b526126068187611a4a565b506000198114612617575b016125d5565b61261f61169e565b61261156fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 11653,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_algo_nnt.rsh:49:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_algo_nnt.rsh:136:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_algo_nnt.rsh:91:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_algo_nnt.rsh:83:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_algo_nnt.rsh:53:62:after expr stmt semicolon',
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
  "Borrower_claimRefund": Borrower_claimRefund,
  "Borrower_close": Borrower_close,
  "Borrower_repay": Borrower_repay,
  "Lender_claim": Lender_claim,
  "Lender_lend": Lender_lend
  };
export const _APIs = {
  Borrower: {
    claimRefund: Borrower_claimRefund,
    close: Borrower_close,
    repay: Borrower_repay
    },
  Lender: {
    claim: Lender_claim,
    lend: Lender_lend
    }
  };
