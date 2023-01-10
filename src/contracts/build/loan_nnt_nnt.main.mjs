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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const LoanViews_amountPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v626, v627, v628, v629, v630, v631, v639, v643, v644] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900] = svs;
      return (await ((async () => {
        
        
        return v869;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v626, v627, v628, v629, v630, v631, v639, v643, v644] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900] = svs;
      return (await ((async () => {
        
        
        return v661;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v626, v627, v628, v629, v630, v631, v639, v643, v644] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900] = svs;
      return (await ((async () => {
        
        
        return v828;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = svs;
      return (await ((async () => {
        
        
        return v690;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v626, v627, v628, v629, v630, v631, v639, v643, v644] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900] = svs;
      return (await ((async () => {
        
        
        return v900;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = svs;
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
      1: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc2, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]
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
    tokCollateral: ctc2,
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
    Borrower_close0_101: ctc6,
    Lender_lend0_101: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v600 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v601 = [v600, v600];
  const v607 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_nnt.rsh:42:43:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:40:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v608 = v607.address;
  const v609 = v607.amount;
  const v610 = v607.collateral;
  const v611 = v607.maturation;
  const v612 = v607.principal;
  const v613 = v607.tokCollateral;
  const v614 = v607.tokLoan;
  const v622 = stdlib.lt(v612, v609);
  stdlib.assert(v622, {
    at: './src/contracts/loan_nnt_nnt.rsh:44:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:40:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v623 = stdlib.tokenEq(v613, v614);
  const v624 = v623 ? false : true;
  stdlib.assert(v624, {
    at: './src/contracts/loan_nnt_nnt.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:40:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v625 = {
    address: v608,
    amount: v609,
    maturation: v611,
    principal: v612
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v613, v614, v610, v625],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v627, v628, v629, v630], secs: v632, time: v631, didSend: v51, from: v626 } = txn1;
      
      const v633 = v601[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v634 = stdlib.Array_set(v633, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v635 = stdlib.Array_set(v601, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v634);
      const v637 = v635[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '1')];
      const v638 = stdlib.Array_set(v637, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v639 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '1'), v638);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v627
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v628
        });
      ;
      const v643 = v630.principal;
      const v644 = v630.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v627, v628, v629, v630], secs: v632, time: v631, didSend: v51, from: v626 } = txn1;
  const v633 = v601[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v634 = stdlib.Array_set(v633, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v635 = stdlib.Array_set(v601, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v634);
  const v637 = v635[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '1')];
  const v638 = stdlib.Array_set(v637, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v639 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:47:11:dot', stdlib.UInt_max, '1'), v638);
  const v641 = stdlib.tokenEq(v628, v627);
  const v642 = v641 ? false : true;
  stdlib.assert(v642, {
    at: './src/contracts/loan_nnt_nnt.rsh:47:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v643 = v630.principal;
  const v644 = v630.amount;
  const v645 = stdlib.lt(v643, v644);
  stdlib.assert(v645, {
    at: './src/contracts/loan_nnt_nnt.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v626, v627, v628, v629, v630, v631, v639, v643, v644],
    evt_cnt: 0,
    funcNum: 1,
    lct: v631,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), [[v629, v627]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v648, time: v647, didSend: v61, from: v646 } = txn2;
      
      ;
      const v649 = v639[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v650 = v649[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v651 = stdlib.add(v650, v629);
      const v653 = stdlib.Array_set(v649, '0', v651);
      const v654 = stdlib.Array_set(v639, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v653);
      sim_r.txns.push({
        amt: v629,
        kind: 'to',
        tok: v627
        });
      
      const v658 = true;
      const v659 = v626;
      const v660 = false;
      const v661 = v647;
      const v662 = v631;
      const v667 = v654;
      const v668 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:38:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v684 = v660 ? false : v658;
        
        return v684;})()) {
        const v689 = v660 ? false : v658;
        const v690 = v689 ? true : v660;
        sim_r.isHalt = false;
        }
      else {
        const v827 = v660 ? false : v658;
        const v828 = v827 ? true : v660;
        if (v660) {
          const v854 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
          const v855 = v854[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
          const v861 = stdlib.sub(v855, v855);
          const v863 = stdlib.Array_set(v854, '0', v861);
          const v864 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v863);
          sim_r.txns.push({
            kind: 'from',
            to: v626,
            tok: v628
            });
          const v866 = v630.maturation;
          const v868 = stdlib.safeAdd(v662, v866);
          const v869 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
          const v870 = v661;
          const v871 = v662;
          const v876 = v864;
          const v877 = v668;
          
          if (await (async () => {
            const v895 = stdlib.gt(v868, v871);
            const v897 = stdlib.lt(v869, v644);
            const v898 = v895 ? v897 : false;
            
            return v898;})()) {
            const v900 = stdlib.ge(v869, v644);
            sim_r.isHalt = false;
            }
          else {
            const v1004 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1005 = v1004[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1007 = stdlib.lt(v869, v644);
            const v1008 = v1007 ? v659 : v626;
            const v1014 = stdlib.sub(v1005, v1005);
            const v1016 = stdlib.Array_set(v1004, '0', v1014);
            const v1017 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1016);
            sim_r.txns.push({
              kind: 'from',
              to: v1008,
              tok: v627
              });
            const v1018 = v1017[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
            const v1019 = v1018[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
            const v1022 = v1007 ? v626 : v659;
            sim_r.txns.push({
              kind: 'from',
              to: v1022,
              tok: v628
              });
            sim_r.txns.push({
              kind: 'from',
              to: v626,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v628
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v627
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v830 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
          const v831 = v830[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v626,
            tok: v627
            });
          sim_r.txns.push({
            kind: 'from',
            to: v626,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v628
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v627
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc1, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v648, time: v647, didSend: v61, from: v646 } = txn2;
  ;
  const v649 = v639[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v650 = v649[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v651 = stdlib.add(v650, v629);
  const v653 = stdlib.Array_set(v649, '0', v651);
  const v654 = stdlib.Array_set(v639, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v653);
  ;
  const v655 = stdlib.addressEq(v626, v646);
  stdlib.assert(v655, {
    at: './src/contracts/loan_nnt_nnt.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v647), {
    at: './src/contracts/loan_nnt_nnt.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:51:27:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_nnt.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v658 = true;
  let v659 = v626;
  let v660 = false;
  let v661 = v647;
  let v662 = v631;
  let v667 = v654;
  let v668 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:38:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v684 = v660 ? false : v658;
    
    return v684;})()) {
    const v689 = v660 ? false : v658;
    const v690 = v689 ? true : v660;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v727], secs: v729, time: v728, didSend: v204, from: v726 } = txn4;
    switch (v727[0]) {
      case 'Borrower_close0_101': {
        const v730 = v727[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v763 = null;
        await txn4.getOutput('Borrower_close', 'v763', ctc5, v763);
        const cv658 = false;
        const cv659 = v659;
        const cv660 = v660;
        const cv661 = v728;
        const cv662 = v661;
        const cv667 = v667;
        const cv668 = v668;
        
        v658 = cv658;
        v659 = cv659;
        v660 = cv660;
        v661 = cv661;
        v662 = cv662;
        v667 = cv667;
        v668 = cv668;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_101': {
        const v778 = v727[1];
        undefined /* setApiDetails */;
        ;
        const v804 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1')];
        const v805 = v804[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v806 = stdlib.add(v805, v643);
        const v808 = stdlib.Array_set(v804, '0', v806);
        const v809 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1'), v808);
        ;
        const v819 = true;
        await txn4.getOutput('Lender_lend', 'v819', ctc8, v819);
        const cv658 = v658;
        const cv659 = v726;
        const cv660 = true;
        const cv661 = v728;
        const cv662 = v661;
        const cv667 = v809;
        const cv668 = v668;
        
        v658 = cv658;
        v659 = cv659;
        v660 = cv660;
        v661 = cv661;
        v662 = cv662;
        v667 = cv667;
        v668 = cv668;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v827 = v660 ? false : v658;
  const v828 = v827 ? true : v660;
  if (v660) {
    const v854 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
    const v855 = v854[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
    const v861 = stdlib.sub(v855, v855);
    const v863 = stdlib.Array_set(v854, '0', v861);
    const v864 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v863);
    ;
    const v866 = v630.maturation;
    const v868 = stdlib.safeAdd(v662, v866);
    let v869 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
    let v870 = v661;
    let v871 = v662;
    let v876 = v864;
    let v877 = v668;
    
    let txn4 = txn3;
    while (await (async () => {
      const v895 = stdlib.gt(v868, v871);
      const v897 = stdlib.lt(v869, v644);
      const v898 = v895 ? v897 : false;
      
      return v898;})()) {
      const v900 = stdlib.ge(v869, v644);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: ['time', v868],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900],
          evt_cnt: 0,
          funcNum: 5,
          lct: v870,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v999, time: v998, didSend: v493, from: v997 } = txn6;
            
            ;
            const cv869 = v869;
            const cv870 = v998;
            const cv871 = v870;
            const cv876 = v876;
            const cv877 = v877;
            
            await (async () => {
              const v869 = cv869;
              const v870 = cv870;
              const v871 = cv871;
              const v876 = cv876;
              const v877 = cv877;
              
              if (await (async () => {
                const v895 = stdlib.gt(v868, v871);
                const v897 = stdlib.lt(v869, v644);
                const v898 = v895 ? v897 : false;
                
                return v898;})()) {
                const v900 = stdlib.ge(v869, v644);
                sim_r.isHalt = false;
                }
              else {
                const v1004 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
                const v1005 = v1004[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
                const v1007 = stdlib.lt(v869, v644);
                const v1008 = v1007 ? v659 : v626;
                const v1014 = stdlib.sub(v1005, v1005);
                const v1016 = stdlib.Array_set(v1004, '0', v1014);
                const v1017 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1016);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1008,
                  tok: v627
                  });
                const v1018 = v1017[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
                const v1019 = v1018[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
                const v1022 = v1007 ? v626 : v659;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1022,
                  tok: v628
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v626,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v628
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v627
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc0, ctc2, ctc2, ctc1, ctc0, ctc1, ctc8, ctc1, ctc1, ctc1, ctc12, ctc1, ctc8],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v999, time: v998, didSend: v493, from: v997 } = txn6;
        ;
        const v1000 = stdlib.addressEq(v626, v997);
        stdlib.assert(v1000, {
          at: './src/contracts/loan_nnt_nnt.rsh:92:50:dot',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:124:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:124:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv869 = v869;
        const cv870 = v998;
        const cv871 = v870;
        const cv876 = v876;
        const cv877 = v877;
        
        v869 = cv869;
        v870 = cv870;
        v871 = cv871;
        v876 = cv876;
        v877 = cv877;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v943], secs: v945, time: v944, didSend: v433, from: v942 } = txn5;
        undefined /* setApiDetails */;
        const v947 = v943[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:30:spread', stdlib.UInt_max, '0')];
        const v948 = stdlib.addressEq(v942, v626);
        stdlib.assert(v948, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:109:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:106:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:106:34:function exp)'],
          msg: 'You are not the Borrower',
          who: 'B'
          });
        const v950 = stdlib.safeAdd(v947, v869);
        const v952 = stdlib.gt(v950, v644);
        let v953;
        if (v952) {
          const v956 = stdlib.safeSub(v950, v644);
          v953 = v956;
          }
        else {
          v953 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
          }
        const v957 = stdlib.safeSub(v947, v953);
        ;
        const v965 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1')];
        const v966 = v965[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '0')];
        const v967 = stdlib.add(v966, v957);
        const v969 = stdlib.Array_set(v965, '0', v967);
        const v970 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1'), v969);
        ;
        let v977;
        if (v952) {
          const v980 = stdlib.safeSub(v950, v644);
          v977 = v980;
          }
        else {
          v977 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
          }
        const v981 = stdlib.safeSub(v947, v977);
        const v983 = stdlib.safeAdd(v869, v981);
        const v985 = stdlib.ge(v983, v644);
        const v987 = [v985, v983, v644];
        await txn5.getOutput('Borrower_repay', 'v987', ctc10, v987);
        const cv869 = v983;
        const cv870 = v944;
        const cv871 = v870;
        const cv876 = v970;
        const cv877 = v877;
        
        v869 = cv869;
        v870 = cv870;
        v871 = cv871;
        v876 = cv876;
        v877 = cv877;
        
        txn4 = txn5;
        continue;}
      
      }
    const v1004 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
    const v1005 = v1004[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
    const v1007 = stdlib.lt(v869, v644);
    const v1008 = v1007 ? v659 : v626;
    const v1014 = stdlib.sub(v1005, v1005);
    const v1016 = stdlib.Array_set(v1004, '0', v1014);
    const v1017 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1016);
    ;
    const v1018 = v1017[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
    const v1019 = v1018[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
    const v1022 = v1007 ? v626 : v659;
    ;
    ;
    return;
    }
  else {
    const v830 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
    const v831 = v830[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
    ;
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v693 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:77:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:77:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:62:application call to "runBorrower_close0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:77:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v697 = ['Borrower_close0_101', v693];
  
  const txn1 = await (ctc.sendrecv({
    args: [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690, v697],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:77:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:65:26:decimal', stdlib.UInt_max, '0'), v628]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v727], secs: v729, time: v728, didSend: v204, from: v726 } = txn1;
      
      switch (v727[0]) {
        case 'Borrower_close0_101': {
          const v730 = v727[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v763 = null;
          const v764 = await txn1.getOutput('Borrower_close', 'v763', ctc9, v763);
          
          const v1561 = false;
          const v1562 = v659;
          const v1563 = v660;
          const v1564 = v728;
          const v1566 = v667;
          const v1567 = v668;
          const v1568 = v660 ? false : false;
          if (v1568) {
            const v1570 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1572 = v660;
            if (v660) {
              const v1573 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
              const v1574 = v1573[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
              const v1575 = stdlib.sub(v1574, v1574);
              const v1576 = stdlib.Array_set(v1573, '0', v1575);
              const v1577 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v1576);
              sim_r.txns.push({
                kind: 'from',
                to: v626,
                tok: v628
                });
              const v1578 = v630.maturation;
              const v1579 = stdlib.safeAdd(v661, v1578);
              const v1631 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
              const v1632 = v728;
              const v1634 = v1577;
              const v1635 = v668;
              const v1636 = stdlib.gt(v1579, v661);
              const v1637 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
              const v1638 = v1636 ? v1637 : false;
              if (v1638) {
                const v1639 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
                sim_r.isHalt = false;
                }
              else {
                const v1641 = v1577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
                const v1642 = v1641[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
                const v1644 = v1637 ? v659 : v626;
                const v1645 = stdlib.sub(v1642, v1642);
                const v1646 = stdlib.Array_set(v1641, '0', v1645);
                const v1647 = stdlib.Array_set(v1577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1646);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1644,
                  tok: v627
                  });
                const v1648 = v1647[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
                const v1649 = v1648[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
                const v1650 = v1637 ? v626 : v659;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1650,
                  tok: v628
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v626,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v628
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v627
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1629 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
              const v1630 = v1629[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v626,
                tok: v627
                });
              sim_r.txns.push({
                kind: 'from',
                to: v626,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v628
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v627
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Lender_lend0_101': {
          const v778 = v727[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v727], secs: v729, time: v728, didSend: v204, from: v726 } = txn1;
  switch (v727[0]) {
    case 'Borrower_close0_101': {
      const v730 = v727[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v763 = null;
      const v764 = await txn1.getOutput('Borrower_close', 'v763', ctc9, v763);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v730, v764), {
          at: './src/contracts/loan_nnt_nnt.rsh:77:22:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:77:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:77:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:78:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:77:44:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:77:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:77:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1561 = false;
      const v1562 = v659;
      const v1563 = v660;
      const v1564 = v728;
      const v1566 = v667;
      const v1567 = v668;
      const v1568 = v660 ? false : false;
      if (v1568) {
        const v1570 = true;
        return;
        }
      else {
        const v1572 = v660;
        if (v660) {
          const v1573 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
          const v1574 = v1573[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
          const v1575 = stdlib.sub(v1574, v1574);
          const v1576 = stdlib.Array_set(v1573, '0', v1575);
          const v1577 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v1576);
          ;
          const v1578 = v630.maturation;
          const v1579 = stdlib.safeAdd(v661, v1578);
          const v1631 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
          const v1632 = v728;
          const v1634 = v1577;
          const v1635 = v668;
          const v1636 = stdlib.gt(v1579, v661);
          const v1637 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
          const v1638 = v1636 ? v1637 : false;
          if (v1638) {
            const v1639 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
            return;
            }
          else {
            const v1641 = v1577[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1642 = v1641[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1644 = v1637 ? v659 : v626;
            const v1645 = stdlib.sub(v1642, v1642);
            const v1646 = stdlib.Array_set(v1641, '0', v1645);
            const v1647 = stdlib.Array_set(v1577, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1646);
            ;
            const v1648 = v1647[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
            const v1649 = v1648[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
            const v1650 = v1637 ? v626 : v659;
            ;
            ;
            return;
            }}
        else {
          const v1629 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
          const v1630 = v1629[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:82:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_101': {
      const v778 = v727[1];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v906 = ctc.selfAddress();
  const v908 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v909 = v908[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v911 = stdlib.addressEq(v906, v626);
  stdlib.assert(v911, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:109:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v913 = stdlib.safeAdd(v909, v869);
  const v915 = stdlib.gt(v913, v644);
  
  let v930;
  if (v915) {
    const v933 = stdlib.safeSub(v913, v644);
    v930 = v933;
    }
  else {
    v930 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
    }
  const v934 = stdlib.safeSub(v909, v930);
  
  const txn1 = await (ctc.sendrecv({
    args: [v626, v627, v628, v644, v659, v661, v828, v868, v869, v870, v876, v877, v900, v908],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:42:decimal', stdlib.UInt_max, '0'), [[v934, v628]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v943], secs: v945, time: v944, didSend: v433, from: v942 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v947 = v943[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:30:spread', stdlib.UInt_max, '0')];
      const v950 = stdlib.safeAdd(v947, v869);
      const v952 = stdlib.gt(v950, v644);
      let v953;
      if (v952) {
        const v956 = stdlib.safeSub(v950, v644);
        v953 = v956;
        }
      else {
        v953 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
        }
      const v957 = stdlib.safeSub(v947, v953);
      ;
      const v965 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1')];
      const v966 = v965[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '0')];
      const v967 = stdlib.add(v966, v957);
      const v969 = stdlib.Array_set(v965, '0', v967);
      const v970 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1'), v969);
      sim_r.txns.push({
        amt: v957,
        kind: 'to',
        tok: v628
        });
      let v977;
      if (v952) {
        const v980 = stdlib.safeSub(v950, v644);
        v977 = v980;
        }
      else {
        v977 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
        }
      const v981 = stdlib.safeSub(v947, v977);
      const v983 = stdlib.safeAdd(v869, v981);
      const v985 = stdlib.ge(v983, v644);
      const v987 = [v985, v983, v644];
      const v988 = await txn1.getOutput('Borrower_repay', 'v987', ctc7, v987);
      
      const v1741 = v983;
      const v1742 = v944;
      const v1744 = v970;
      const v1745 = v877;
      const v1746 = stdlib.gt(v868, v870);
      const v1747 = stdlib.lt(v983, v644);
      const v1748 = v1746 ? v1747 : false;
      if (v1748) {
        sim_r.isHalt = false;
        }
      else {
        const v1751 = v970[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
        const v1752 = v1751[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
        const v1754 = v1747 ? v659 : v626;
        const v1755 = stdlib.sub(v1752, v1752);
        const v1756 = stdlib.Array_set(v1751, '0', v1755);
        const v1757 = stdlib.Array_set(v970, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1756);
        sim_r.txns.push({
          kind: 'from',
          to: v1754,
          tok: v627
          });
        const v1758 = v1757[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
        const v1759 = v1758[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
        const v1760 = v1747 ? v626 : v659;
        sim_r.txns.push({
          kind: 'from',
          to: v1760,
          tok: v628
          });
        sim_r.txns.push({
          kind: 'from',
          to: v626,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v628
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v627
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v943], secs: v945, time: v944, didSend: v433, from: v942 } = txn1;
  undefined /* setApiDetails */;
  const v947 = v943[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:30:spread', stdlib.UInt_max, '0')];
  const v948 = stdlib.addressEq(v942, v626);
  stdlib.assert(v948, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:109:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:106:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:106:34:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v950 = stdlib.safeAdd(v947, v869);
  const v952 = stdlib.gt(v950, v644);
  let v953;
  if (v952) {
    const v956 = stdlib.safeSub(v950, v644);
    v953 = v956;
    }
  else {
    v953 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
    }
  const v957 = stdlib.safeSub(v947, v953);
  ;
  const v965 = v876[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1')];
  const v966 = v965[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '0')];
  const v967 = stdlib.add(v966, v957);
  const v969 = stdlib.Array_set(v965, '0', v967);
  const v970 = stdlib.Array_set(v876, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:50:dot', stdlib.UInt_max, '1'), v969);
  ;
  let v977;
  if (v952) {
    const v980 = stdlib.safeSub(v950, v644);
    v977 = v980;
    }
  else {
    v977 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:113:51:decimal', stdlib.UInt_max, '0');
    }
  const v981 = stdlib.safeSub(v947, v977);
  const v983 = stdlib.safeAdd(v869, v981);
  const v985 = stdlib.ge(v983, v644);
  const v987 = [v985, v983, v644];
  const v988 = await txn1.getOutput('Borrower_repay', 'v987', ctc7, v987);
  if (v433) {
    stdlib.protect(ctc8, await interact.out(v943, v988), {
      at: './src/contracts/loan_nnt_nnt.rsh:108:31:application',
      fs: ['at ./src/contracts/loan_nnt_nnt.rsh:108:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:31:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:119:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:117:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:117:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:117:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1741 = v983;
  const v1742 = v944;
  const v1744 = v970;
  const v1745 = v877;
  const v1746 = stdlib.gt(v868, v870);
  const v1747 = stdlib.lt(v983, v644);
  const v1748 = v1746 ? v1747 : false;
  if (v1748) {
    return;
    }
  else {
    const v1751 = v970[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
    const v1752 = v1751[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
    const v1754 = v1747 ? v659 : v626;
    const v1755 = stdlib.sub(v1752, v1752);
    const v1756 = stdlib.Array_set(v1751, '0', v1755);
    const v1757 = stdlib.Array_set(v970, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1756);
    ;
    const v1758 = v1757[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
    const v1759 = v1758[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
    const v1760 = v1747 ? v626 : v659;
    ;
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v701 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:67:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:67:39:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:62:application call to "runLender_lend0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:67:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v705 = ['Lender_lend0_101', v701];
  
  const txn1 = await (ctc.sendrecv({
    args: [v626, v627, v628, v630, v643, v644, v658, v659, v660, v661, v667, v668, v690, v705],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:69:34:decimal', stdlib.UInt_max, '0'), [[v643, v628]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v727], secs: v729, time: v728, didSend: v204, from: v726 } = txn1;
      
      switch (v727[0]) {
        case 'Borrower_close0_101': {
          const v730 = v727[1];
          
          break;
          }
        case 'Lender_lend0_101': {
          const v778 = v727[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v804 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1')];
          const v805 = v804[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v806 = stdlib.add(v805, v643);
          const v808 = stdlib.Array_set(v804, '0', v806);
          const v809 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1'), v808);
          sim_r.txns.push({
            amt: v643,
            kind: 'to',
            tok: v628
            });
          const v819 = true;
          const v820 = await txn1.getOutput('Lender_lend', 'v819', ctc4, v819);
          
          const v1852 = v726;
          const v1854 = v728;
          const v1862 = true;
          const v1863 = v809[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
          const v1864 = v1863[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
          const v1865 = stdlib.sub(v1864, v1864);
          const v1866 = stdlib.Array_set(v1863, '0', v1865);
          const v1867 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v1866);
          sim_r.txns.push({
            kind: 'from',
            to: v626,
            tok: v628
            });
          const v1868 = v630.maturation;
          const v1869 = stdlib.safeAdd(v661, v1868);
          const v1921 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
          const v1922 = v728;
          const v1924 = v1867;
          const v1925 = v668;
          const v1926 = stdlib.gt(v1869, v661);
          const v1927 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
          const v1928 = v1926 ? v1927 : false;
          if (v1928) {
            const v1929 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
            sim_r.isHalt = false;
            }
          else {
            const v1931 = v1867[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1932 = v1931[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
            const v1934 = v1927 ? v726 : v626;
            const v1935 = stdlib.sub(v1932, v1932);
            const v1936 = stdlib.Array_set(v1931, '0', v1935);
            const v1937 = stdlib.Array_set(v1867, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1936);
            sim_r.txns.push({
              kind: 'from',
              to: v1934,
              tok: v627
              });
            const v1938 = v1937[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
            const v1939 = v1938[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
            const v1940 = v1927 ? v626 : v726;
            sim_r.txns.push({
              kind: 'from',
              to: v1940,
              tok: v628
              });
            sim_r.txns.push({
              kind: 'from',
              to: v626,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v628
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v627
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
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v727], secs: v729, time: v728, didSend: v204, from: v726 } = txn1;
  switch (v727[0]) {
    case 'Borrower_close0_101': {
      const v730 = v727[1];
      return;
      break;
      }
    case 'Lender_lend0_101': {
      const v778 = v727[1];
      undefined /* setApiDetails */;
      ;
      const v804 = v667[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1')];
      const v805 = v804[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v806 = stdlib.add(v805, v643);
      const v808 = stdlib.Array_set(v804, '0', v806);
      const v809 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:53:62:dot', stdlib.UInt_max, '1'), v808);
      ;
      const v819 = true;
      const v820 = await txn1.getOutput('Lender_lend', 'v819', ctc4, v819);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v778, v820), {
          at: './src/contracts/loan_nnt_nnt.rsh:67:23:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:67:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:67:23:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:71:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:70:42:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:70:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:70:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1852 = v726;
      const v1854 = v728;
      const v1862 = true;
      const v1863 = v809[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '1')];
      const v1864 = v1863[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:33:application', stdlib.UInt_max, '0')];
      const v1865 = stdlib.sub(v1864, v1864);
      const v1866 = stdlib.Array_set(v1863, '0', v1865);
      const v1867 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:87:55:application', stdlib.UInt_max, '1'), v1866);
      ;
      const v1868 = v630.maturation;
      const v1869 = stdlib.safeAdd(v661, v1868);
      const v1921 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0');
      const v1922 = v728;
      const v1924 = v1867;
      const v1925 = v668;
      const v1926 = stdlib.gt(v1869, v661);
      const v1927 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
      const v1928 = v1926 ? v1927 : false;
      if (v1928) {
        const v1929 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:92:51:decimal', stdlib.UInt_max, '0'), v644);
        return;
        }
      else {
        const v1931 = v1867[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
        const v1932 = v1931[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:33:application', stdlib.UInt_max, '0')];
        const v1934 = v1927 ? v726 : v626;
        const v1935 = stdlib.sub(v1932, v1932);
        const v1936 = stdlib.Array_set(v1931, '0', v1935);
        const v1937 = stdlib.Array_set(v1867, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:67:application', stdlib.UInt_max, '0'), v1936);
        ;
        const v1938 = v1937[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '1')];
        const v1939 = v1938[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:129:33:application', stdlib.UInt_max, '0')];
        const v1940 = v1927 ? v626 : v726;
        ;
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
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAYAAEEBSAoCAcwoI0G9q6A9APX8dudB56S1pUI2faovAb/8ca6Ar7zptcDBnCaAWFYaXGbASYDAQEBAAAiNQAxGEEHXipkSSJbNQEhBls1AjYaABdJQQDYIjUEIzUGSSEKDEAAVEkhCwxAAB9JIQwMQAAOIQwSRCo1/yk0/1BCANMhCxJENhoBQgIaSSENDEAAGSENEkQ0ASUSRClkKGRQSTUDV2kINQdCBu8hChJEKjX/KDT/UEIAm0khDgxAADlJIQ8MQAAZIQ8SRDQBJRJEKWQoZFBJNQNXowE1B0IGuiEOEkQ0ASUSRClkKGRQSTUDV1gINQdCBqGBj8bFKhJENAFJIQcMQAAUIQcSRClkKGRQSTUDV8wBNQdCBn0lEkQpZChkUEk1A1dgATUHQgZqNhoCFzUENhoDNhoBF0kkDEACd0klDEABW0khEAxAAOEhEBJEIQc0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpJVwAgNf8hBFs1/iEFWzX9VzA4NfyBaFs1+yERWzX6IRJbNflXoiI1+IHEAVs190k1BTX2gASQT2RJNPZQsDT2IlVAADGACAAAAAAAAAL7sCo1BzT/NP40/TT8NPs0+iI0A1d5IDQDV5kBFzIGNPk0+DT3QgNJNPhXERE19TT7NP2IBeOACQAAAAAAAAMzAbAoNQc0/zT+NP00/DT7NPo0A1d4ARcxACMyBjT5NPg09UkiWzT7CBZcAFwRNPdCAv9IJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IRNbNf6ABMyZklywMgY0/g9ENP8xABJENP80AyEEWzQDIQVbNAMhCFs0A1c4IDQDIRRbNANXYAEXNP40AyEVWzIGNAMhFls0A1d5IjQDIRdbQgOeSCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSlcAIDX/IQVbNf4hCFs1/SETWzX8IRVbNftXeSI1+kk1BTX5gATOPHBmNPlQsDIGNPwMRDT5FzX4MQA0/xJENPg0+whJNfc0/Q1JNfZBAAo09zT9CTX1QgADIjX1NPg09Qk19DT6VxERNfM09DT+iASnNPZBAAo09zT9CTXyQgADIjXyNPs0+DTyCQg18YAIAAAAAAAAA9s08TT9DxZRBwg08RZQNP0WUFCwNPE0/Q8WUQcINPEWUDT9FlA1BzT/NAMhBFs0/jT9NANXOCA0AyEUWzQDV2ABFzT8NPEyBjQDIRZbNPo080kiWzT0CBZcAFwRNAMhF1tCAohJIwxAAIMjEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSlcAIDX/IQRbNf4hCFs1/Vd4IjX8gASai5F0sDT8VwARNfs0/TT+iAPSNP8xABJENP80/jQDIQVbNANXODg0AyESWzQDgaIBWyM0/yIyBjQDIRFbNPw0+0kiWzT9CBZcAFwAIkIA7UghCYgDdyI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBls1/oEQWzX9Vxg4NfyABPGSWIo0/xZQNP4WUDT9FlA0/FCwgRGvSTX7SVBJNfpJVwARIQavXABcAEk1+UlXEREhBq9cAFwRNfg0/jT/E0QhCYgDCLEisgEishIkshAyCrIUNP+yEbMhCYgC8LEisgEishIkshAyCrIUNP6yEbM0/CEIWzX3NPwhBFs19jT3NPYMRDEANP8WUDT+FlA0/RZQNPxQMgYWUDT4UDT3FlA09hZQKUsBVwB/ZyhLAVd/K2dIIzUBMgY1AkICPjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNPsUNPkQQQBDNPM09BZQNPUWUDT2UDT3FlA0+BZQKFA0+lApUDT8FlA0/lA0/xZQKFApSwFXAH9nKEsBV39OZ0ghBzUBMgY1AkIB2DT7QQBNNP5XERFJNfIiWzXxsSKyATTxshIkshA087IUNPWyEbM08zT0NPU0+DT6NPw0+zT9NPYhBVsIIjT8NP00/jTyNPFJCRZcAFwRNP9CAFqxIrIBNP5XABEiW7ISJLIQNPOyFDT0shGzsSKyATT/sggjshA087IHs7EisgEishIkshAyCbIVMgqyFDT1shGzsSKyASKyEiSyEDIJshUyCrIUNPSyEbNCARE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zT7NPYMNfI0+jT9DTTyEEEAVjT7NPYPNfE08zT0FlA09RZQNPYWUDT3UDT4FlA0+RZRBwhQNPoWUDT7FlA0/BZQNP5QNP8WUDTxFlEHCFApSwFXAH9nKEsBV38lZ0glNQEyBjUCQgCqNP5XABFJNfEiWzXwsSKyATTwshIkshA08zT3NPJNshQ09LIRs7EisgE0/jTxNPBJCRZcAFwAVxERIluyEiSyEDT3NPM08k2yFDT1shGzsSKyATT/sggjshA087IHs7EisgEishIkshAyCbIVMgqyFDT1shGzsSKyASKyEiSyEDIJshUyCrIUNPSyEbNCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 205,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem4","type":"tuple"}],"internalType":"struct T11","name":"v1964","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v763","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v819","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v987","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1955","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1966","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1980","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1987","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1994","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620032c338819003601f8101601f191683016001600160401b03811184821017620006375783928291604052833981010390610100821262000796576040519160a08301906001600160401b038211848310176200063757608091604052825184526200007160208401620007d3565b60208501526200008460408401620007d3565b604085015260608301516060850152607f190112620007965760e060405191620000ae836200079b565b620000bc60808201620007d3565b835260a0810151602084015260c0810151604084015201516060820152608082015243600355604051610100810181811060018060401b03821117620006375760009160e09160405282815282602082015262000118620007e8565b60408201528260608201528260808201528260a08201528260c082015201526040519062000146826200079b565b62000150620007e8565b82526200015c62000809565b60208301526200016b62000809565b60408301526200017a62000809565b606083015260ff600454166200077d577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b03604085015116606082015260608401516080820152620001fd608085015160a083019062000850565ba18051801590811562000770575b5015620007575760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200025b83620007b7565b60008352602083015260408201526200027362000809565b9160005b600281106200071d5750508152806040840152602081015160406020820151910151151560405191620002aa83620007b7565b6000835260208301526040820152620002c262000809565b9160005b60028110620006cd5750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006c55760005b15620006ac5734620006935760808101516020606082015191015111156200067a57604051916001600160401b03610120840190811190841117620006375760209160606080926101208601604052600086526000858701526000604087015260008287015260405162000375816200079b565b600081526000868201526000604082015260008382015284870152600060a0870152620003a162000809565b60c0870152600060e0870152600061010087015233865260018060a01b0385840151168587015260018060a01b036040840151166040870152818301518287015283830151848701524360a0870152015160c0850152606082820151015160e0850152015101516101008201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000463608082015160a084019062000850565b60a081015161012083015260c0810151600061014084015b600282106200064d5760e08401516102008601526101008401516102208087019190915285528461024081016001600160401b03811182821017620006375760405280516001600160401b0381116200063757600254600181811c911680156200062c575b60208210146200061657601f8111620005ac575b50602091601f8211600114620005425791819260009262000536575b50508160011b916000199060031b1c1916176002555b604051612a1e9081620008a58239f35b01519050828062000510565b601f19821692600260005260206000209160005b858110620005935750836001951062000579575b505050811b0160025562000526565b015160001960f88460031b161c191690558280806200056a565b9192602060018192868501518155019401920162000556565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200060b575b601f0160051c01905b818110620005fe5750620004f4565b60008155600101620005ef565b9091508190620005e6565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004e0565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200047b565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b600162000301565b620006d981836200087c565b51620006e682866200087c565b52620006f381856200087c565b5060001981146200070757600101620002c6565b634e487b7160e01b600052601160045260246000fd5b6200072981836200087c565b516200073682866200087c565b526200074381856200087c565b506000198114620007075760010162000277565b60405163100960cb60e01b8152600d6004820152602490fd5b905060015414386200020b565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200063757604052565b606081019081106001600160401b038211176200063757604052565b51906001600160a01b03821682036200079657565b60405190620007f782620007b7565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620006375781528260005b8281106200083857505050565b60209062000845620007e8565b81840152016200082b565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060028110156200088e5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101305780631e93b0f11461012757806330dd5d081461011e5780633c4965541461011557806340410cd51461010c5780634cd8755514610103578063573b8510146100fa578063823c0a8d146100f157806383230757146100e857806394134348146100df57806396d6c36b146100d6578063ab53f2c6146100cd578063ea121ca3146100c45763f9d773330361000e576100bf610922565b61000e565b506100bf6108a3565b506100bf61082e565b506100bf6107af565b506100bf61070c565b506100bf6106ed565b506100bf61069f565b506100bf6104b2565b506100bf610448565b506100bf6103f0565b506100bf6103a0565b506100bf6101d0565b506100bf6101a0565b503461019b57600036600319011261019b5761014a610bf8565b6005600054036101825760a060209181610173610165610ab1565b858082518301019101610d4f565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b503461019b57600036600319011261019b576020600354604051908152f35b602090600319011261019b57600490565b506103846101f06101e0366101bf565b6101e8610bf8565b503690612925565b61020b61020661020260045460ff1690565b1590565b610e1b565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061023b843383612943565b0390a161024c600560005414610e3b565b61027b61026961025a610ab1565b60208082518301019101610d4f565b91518015908115610394575b50610e5b565b60e081019061028d8251431015610e7b565b6102973415610e9b565b6102b33360018060a01b036102ac8451610c9d565b1614610ebb565b6102bb611372565b916102cf6102c98351610c9d565b846113da565b6102e86102df6020840151610c9d565b602085016113da565b6103016102f86040840151610c9d565b604085016113da565b6060820151606084015261032461031b6080840151610c9d565b608085016113da565b60a082015160a084015261034761033e60c0840151151590565b151560c0850152565b5160e083015261010080820151908301526101204381840152810151610140908184015281015190610160918284015201516101808201526126d8565b60405160008152602090f35b0390f35b90506001541438610275565b503461019b57600036600319011261019b576103ba610bf8565b6005600054036103d7576080602091610100610173610165610ab1565b60405163100960cb60e01b815260076004820152602490fd5b50600036600319011261019b57602080610408610bf8565b61043c81610414610c5c565b848101906000825152511515858251015261042d610c5c565b90600082525185820152611b59565b01511515604051908152f35b503461019b57600036600319011261019b57610462610bf8565b6005600054036104995760e06103909161018061048061025a610ab1565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506104bf6101e0366101bf565b6104d66104d161020260045460ff1690565b610edb565b6106896040917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159683518061050b843383612943565b0390a161051c600160005414610efb565b610676610527610ab1565b9161055161053f60209485808251830101910161295d565b91518015908115610693575b50610f1b565b61055b3415610f3b565b8281019261067160c061056e8651610c9d565b936105886105836060830196875190336117de565b610f5b565b6105a43360018060a01b0361059d8451610c9d565b1614610f7b565b6105d46105cc6105b2611af4565b986105c66105c08551610c9d565b8b6113da565b51610c9d565b8589016113da565b6105eb6105e38a830151610c9d565b8a89016113da565b6080810151606088015260e0810151608088015260006101008083015160a08a0152610619848a0160019052565b61062f6106268451610c9d565b60e08b016113da565b8801524361012088015260a08101516101408801520151918251938451905101938882820151910151151591610663610b5c565b958652850152151587840152565b6118e3565b610160820152600061018082015261221c565b5160008152602090f35b9050600154143861054b565b50600036600319011261019b57602060606106b8610bf8565b61043c816106c4610c5c565b8581019060018251525115156040825101526106de610c5c565b90600082525186820152611b59565b503461019b57600036600319011261019b576020600154604051908152f35b503461019b57600036600319011261019b5761039061076760c061072e610bf8565b60005460078110156107795760056107469114610fbb565b61075861075f8361075861025a610ab1565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107859114610f9b565b6101806107a2610793610ab1565b602080825183010191016111fa565b0151151582820152610758565b50608036600319011261019b576107c4610bf8565b604051906107d1826109f9565b6004358252606036602319011261019b57604051916107ef83610a21565b60243592600284101561019b5761038493815260443561080e81610cbd565b602082015260643561081f81610cbd565b60408201526020820152611b59565b503461019b576000806003193601126108a057805461084b610ab1565b906040519283918252602090604082840152835191826040850152815b83811061088957505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610868565b80fd5b50604036600319011261019b576108b8610bf8565b604051906108c5826109f9565b6004358252602036602319011261019b576108f5916040516108e681610a3c565b60243581526020820152611410565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b50602036600319011261019b57610937610bbb565b50610390610943610bf8565b60408161099b8293835161095681610a3c565b845161096181610a3c565b8082526004359052845190610975826109f9565b600082526020820190865161098981610a3c565b60008152825260008352519052611410565b0151905191829182610900565b90600182811c921680156109d8575b60208310146109c257565b634e487b7160e01b600052602260045260246000fd5b91607f16916109b7565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610a1457604052565b610a1c6109e2565b604052565b606081019081106001600160401b03821117610a1457604052565b602081019081106001600160401b03821117610a1457604052565b6101a081019081106001600160401b03821117610a1457604052565b60a081019081106001600160401b03821117610a1457604052565b601f909101601f19168101906001600160401b03821190821017610a1457604052565b6040519060008260025491610ac5836109a8565b808352600193808516908115610b3b5750600114610aed575b50610aeb92500383610a8e565b565b600260009081526000805160206129f283398151915294602093509091905b818310610b23575050610aeb935082010138610ade565b85548884018501529485019487945091830191610b0c565b9050610aeb94506020925060ff191682840152151560051b82010138610ade565b60405190606082016001600160401b03811183821017610a1457604052565b604051906101a082016001600160401b03811183821017610a1457604052565b6040519061012082016001600160401b03811183821017610a1457604052565b60405190606082016001600160401b03811183821017610beb575b60405260006040838281528260208201520152565b610bf36109e2565b610bd6565b6040519061010082016001600160401b03811183821017610c4f575b6040528160e0600091828152826020820152610c2e610bbb565b60408201528260608201528260808201528260a08201528260c08201520152565b610c576109e2565b610c14565b60405190610c69826109f9565b81600081526020610c78610bbb565b910152565b60021115610c8757565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361019b57565b8015150361019b57565b5190610aeb82610cbd565b9080601f8301121561019b57604091825192610ced846109f9565b839260c083019281841161019b57935b838510610d0c57505050505090565b60608583031261019b578251606091610d2482610a21565b86518252602091828801518382015285880151610d4081610cbd565b86820152815201940193610cfd565b6102408183031261019b57610220610e1291610d69610b7b565b93610d7382610ca9565b8552610d8160208301610ca9565b6020860152610d9260408301610ca9565b604086015260608201516060860152610dad60808301610ca9565b608086015260a082015160a0860152610dc860c08301610cc7565b60c086015260e082015160e086015261010080830151908601526101208083015190860152610dfc61014091828401610cd2565b9085015261020081015161016085015201610cc7565b61018082015290565b15610e2257565b60405163100960cb60e01b8152601e6004820152602490fd5b15610e4257565b60405163100960cb60e01b8152601f6004820152602490fd5b15610e6257565b60405163100960cb60e01b815260206004820152602490fd5b15610e8257565b60405163100960cb60e01b815260216004820152602490fd5b15610ea257565b60405163100960cb60e01b815260226004820152602490fd5b15610ec257565b60405163100960cb60e01b815260236004820152602490fd5b15610ee257565b60405163100960cb60e01b815260116004820152602490fd5b15610f0257565b60405163100960cb60e01b815260126004820152602490fd5b15610f2257565b60405163100960cb60e01b815260136004820152602490fd5b15610f4257565b60405163100960cb60e01b815260146004820152602490fd5b15610f6257565b60405163100960cb60e01b815260156004820152602490fd5b15610f8257565b60405163100960cb60e01b815260166004820152602490fd5b15610fa257565b60405163100960cb60e01b8152600a6004820152602490fd5b15610fc257565b60405163100960cb60e01b815260096004820152602490fd5b15610fe257565b60405163100960cb60e01b815260176004820152602490fd5b1561100257565b60405163100960cb60e01b815260186004820152602490fd5b1561102257565b60405163100960cb60e01b815260196004820152602490fd5b1561104257565b60405163100960cb60e01b8152601a6004820152602490fd5b1561106257565b60405163100960cb60e01b8152601b6004820152602490fd5b1561108257565b60405163100960cb60e01b8152601c6004820152602490fd5b156110a257565b60405163100960cb60e01b8152601d6004820152602490fd5b156110c257565b602460405163100960cb60e01b8152816004820152fd5b156110e057565b60405163100960cb60e01b815260256004820152602490fd5b1561110057565b60405163100960cb60e01b815260266004820152602490fd5b1561112057565b60405163100960cb60e01b815260296004820152602490fd5b1561114057565b60405163100960cb60e01b8152602a6004820152602490fd5b1561116057565b60405163100960cb60e01b815260276004820152602490fd5b1561118057565b60405163100960cb60e01b815260286004820152602490fd5b919082608091031261019b57604051608081016001600160401b038111828210176111ed575b60405260608082946111d081610ca9565b845260208101516020850152604081015160408501520151910152565b6111f56109e2565b6111bf565b906102a08282031261019b576112d2610280611214610b7b565b9361121e81610ca9565b855261122c60208201610ca9565b602086015261123d60408201610ca9565b604086015261124f8460608301611199565b606086015260e081015160808601526101008082015160a087015261012094611279868401610cc7565b60c08801526112be61014091611290838601610ca9565b60e08a0152610160936112a4858701610cc7565b908a01526101809788860151908a01526101a08501610cd2565b908701526102608201519086015201610cc7565b9082015290565b6040519060e082016001600160401b03811183821017611324575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0610c78610bbb565b61132c6109e2565b6112f4565b6001600160a01b03169052565b60409081519161134d836109f9565b8260005b82811061135d57505050565b602090611368610bbb565b8184015201611351565b6040519061137f82610a57565b816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526113d061133e565b6101608201520152565b6001600160a01b039091169052565b9060028110156113fa5760051b0190565b634e487b7160e01b600052603260045260246000fd5b906114196112d9565b9161143161142c61020260045460ff1690565b610fdb565b60408051338152825160208083019190915283015151818301529091907f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611482600560005414610ffb565b61148a610ab1565b61149e602091828082518301019101610d4f565b936114b483518015908115611716575b5061101b565b8160e08601936114c68551431061103b565b6114e26114db6114d68951610c9d565b610c9d565b331461105b565b019586515193610100926114fb84890196875190611739565b908184528760608a01928351109a6115188887019c8d9015159052565b8b511561170b5761152c865185519061175b565b828701525b805151828701516115419161175b565b6060870190815298611553341561107b565b828c019c8d5161156290610c9d565b8b5161156e91336117de565b6115779061109b565b51156116ff5761158a875186519061175b565b60808801525b5190515160808701516115a29161175b565b6115ab91611739565b60a08601818152845160c090970180519290971115909152948551888251015283518282510152805182516115e1819282610900565b037feb0179d94206d2c445dcb7e24f94cf26f6e99afc1527e18455d9f56c2792e60991a151910152611611611372565b98885161161d90610c9d565b611627908b6113da565b8589015161163490610c9d565b611640908b88016113da565b5161164a90610c9d565b611656908a89016113da565b516060890152608087015161166a90610c9d565b6116779060808a016113da565b60a0878101519089015260c08701511515151560c08901525160e088015251908601526101204381870152840151610140908187015284015192818401519283519051019281838201519101511515926116cf610b5c565b948552840152901515908201526116e591611940565b9061016091828401520151610180820152610aeb906126d8565b60006080880152611590565b600082870152611531565b905060015414386114ae565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161174e575b821061019b57565b611756611722565b611746565b9081039081116117685790565b611770611722565b90565b6000611770928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526117b781610a73565b5193165af16117ce6117c7611821565b8092611883565b506020808251830101910161186e565b6000916117709383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526117b781610a73565b3d15611869573d906001600160401b03821161185c575b60405191611850601f8201601f191660200184610a8e565b82523d6000602084013e565b6118646109e2565b611838565b606090565b9081602091031261019b575161177081610cbd565b1561188b5790565b80511561189a57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156118bb5790565b8051156118ca57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906118ed61133e565b9260005b600281106118ff5750508252565b8061190c600192846113e9565b5161191782886113e9565b5261192281876113e9565b506000198114611933575b016118f1565b61193b611722565b61192d565b919061194a61133e565b9260005b6002811061195f5750506020830152565b8061196c600192846113e9565b5161197782886113e9565b5261198281876113e9565b506000198114611993575b0161194e565b61199b611722565b61198d565b91906119aa61133e565b9260005b600281106119bf5750506020830152565b806119cc600192846113e9565b516119d782886113e9565b526119e281876113e9565b5060001981146119f3575b016119ae565b6119fb611722565b6119ed565b9190611a0a61133e565b9260005b60028110611a1c5750508252565b80611a29600192846113e9565b51611a3482886113e9565b52611a3f81876113e9565b506000198114611a50575b01611a0e565b611a58611722565b611a4a565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610c87576080916040918285015260208101511515606085015201511515910152565b516002811015610c875790565b60405190608082016001600160401b03811183821017611ae7575b60405260006060838281528260208201528260408201520152565b611aef6109e2565b611acc565b60405190611b0182610a57565b81610180600091828152826020820152826040820152611b1f611ab1565b60608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526113d061133e565b611bd190611b74611b6f61020260045460ff1690565b6110bb565b60407f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a4347815180611ba5853383611a5d565b0390a1611bb66007600054146110d9565b611bbe610ab1565b60209381858080945183010191016111fa565b92611be781518015908115611ea6575b506110f9565b01611bf28151611aa4565b611bfb81610c7d565b611d245750611ca090611c98610aeb95611c153415611159565b60008684870192611c37611c32611c2c8651610c9d565b33611773565b611179565b8551600081527f82add66fedb8c631641d7f24609b45d4f526b8e77dfa803fe79865c998b00cdf90602090a101526105c6611c70611af4565b96611c84611c7e8851610c9d565b896113da565b611c9081880151610c9d565b9088016113da565b9084016113da565b606081015160608301526080810151608083015260a081015160a0830152600060c0830152611cde611cd560e0830151610c9d565b60e084016113da565b611cf8610100611cf081840151151590565b151590840152565b61012043818401528101516101409081840152810151906101609182840152015161018082015261221c565b611d3060019151611aa4565b611d3981610c7d565b14611d45575b50505050565b611e9d93611e8791611d573415611119565b611e8281850195611dba6060611d6d8951610c9d565b95611d87611d8260808b0198895190336117de565b611139565b8551600181527ffb38517e252acef3e0a018a002f0d4d0446e2a520704ca738f6aa16f11ba833290602090a10160019052565b611df5611ded611dc8611af4565b98611dd66105c08a51610c9d565b6105c6611de5858b0151610c9d565b858c016113da565b8489016113da565b606086015160608801528351608088015260a086015160a0880152611e29611e2060c0880151151590565b151560c0890152565b611e363360e089016113da565b6001610100880152610120438189015286015161014090818901528601519281840151948551905101948183820151910151151592611e73610b5c565b96875286015284019015159052565b6119a0565b906101609182840152015161018082015261221c565b38808080611d3f565b90506001541438611be1565b506040513d6000823e3d90fd5b818110611eca575050565b60008155600101611ebf565b611ee16002546109a8565b80611ee95750565b601f8111600114611efc57506000600255565b6002600052611f4190601f0160051c6000805160206129f2833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611ebf565b6000602081208160025555565b60405190611f5b82610a57565b81610180600091828152826020820152826040820152611f79611ab1565b60608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152611fac61133e565b610140820152826101608201520152565b6000915b60028310611fce57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611fc1565b610aeb909291926102806102a0820194612018838251611331565b61202a60208201516020850190611331565b61203c60408201516040850190611331565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c081015161209a610120918287019015159052565b6120e260e0830151936120b36101409586890190611331565b830151916120c8610160938489019015159052565b8301519361018094858801528301516101a0870190611fbd565b81015161026085015201511515910152565b90601f8211612101575050565b610aeb9160026000526020600020906020601f840160051c8301931061212f575b601f0160051c0190611ebf565b9091508190612122565b80519091906001600160401b03811161220f575b6121618161215c6002546109a8565b6120f4565b602080601f831160011461219d5750819293600092612192575b50508160011b916000199060031b1c191617600255565b01519050388061217b565b6002600052601f198316949091906000805160206129f2833981519152926000905b8782106121f75750508360019596106121de575b505050811b01600255565b015160001960f88460031b161c191690553880806121d3565b806001859682949686015181550195019301906121bf565b6122176109e2565b61214d565b6101008181018051151580156125195760005b1561233b57505061233661232891612306610aeb94600061224e611f4e565b9361226261225c8451610c9d565b866113da565b61227b6122726020850151610c9d565b602087016113da565b61229461228b6040850151610c9d565b604087016113da565b606083015160608601526080830151608086015260a083015160a08601526122bf60c0860160019052565b6122d86122cf60e0850151610c9d565b60e087016113da565b8401526101208082015190840152610160808201516101408501526101808092015190840152820160019052565b6123106007600055565b61231943600155565b60405192839160208301611ffd565b03601f198101835282610a8e565b612139565b9091901561248e5791610aeb9261247a604083019361235a8551610c9d565b906123658551610c9d565b9361238e610160958688019461237c865160200190565b5151916001600160a01b031690612525565b6123cc6123c361239c611372565b986123aa6105c08a51610c9d565b6105c66123ba60208b0151610c9d565b60208c016113da565b604089016113da565b60a086015160608801526123ef6123e660e0880151610c9d565b608089016113da565b61012061241261240982890194855160a08c015251151590565b151560c08a0152565b610140926000848901936124308551604060608d0151015190611739565b60e08c01528a01525190880152519086015251602081015190612475604060208401519301511515612460610b5c565b93600085526020850152604084019015159052565b611940565b9083015261018080910151908201526126d8565b505060008080836124ca6124a6602084970151610c9d565b6124b08351610c9d565b6101608401515151916001600160a01b0390911690612525565b6101806124da6114d68351610c9d565b91015190828215612510575bf115612503575b600080556124fb6000600155565b610aeb611ed6565b61250b611eb2565b6124ed565b506108fc6124e6565b60c0840151151561222f565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261259193600093849392849190608081016001600160401b03811182821017612598575b6040525193165af16117ce61258a611821565b80926118b3565b1561019b57565b6125a06109e2565b612577565b604051906125b2826109f9565b60006020838281520152565b604051906125cb82610a57565b816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152611fac61133e565b610aeb90929192610220610180610240830195612633848251611331565b61264560208201516020860190611331565b61265760408201516040860190611331565b6060810151606085015261267360808201516080860190611331565b60a081015160a085015261269060c082015160c086019015159052565b60e081015160e0850152610100808201519085015261012080820151908501526126c36101408083015190860190611fbd565b61016081015161020085015201511515910152565b6126e06125a5565b610100808301805160608501805191909111845293929160e08401918251926101409384870151106000906000146129205750845115155b156128275761233694610aeb979461280594846127fd9461274960206123289c98518b511115960195869015159052565b6127516125be565b9861275f6105c08951610c9d565b61276f6123ba60208a0151610c9d565b61278861277f60408a0151610c9d565b60408c016113da565b5160608a01526127a761279e6080890151610c9d565b60808b016113da565b60a087015160a08a01526127ca6127c160c0890151151590565b151560c08b0152565b5160e089015251908701526101208085015190870152610160908185015190870152610180809401519086015251151590565b151590830152565b61280f6005600055565b61281843600155565b60405192839160208301612615565b505050506000809350826124ca829493612845602085960151610c9d565b906128508151151590565b8514612911576128636080850151610c9d565b61016085018051515190936001600160a01b0392612885929190841690612525565b61289c6128956040870151610c9d565b9251151590565b86146128f8576128ee6128e86128b28751610c9d565b945b518051906128e36040602084015193015115156128cf610b5c565b938c85526020850152604084019015159052565b611a00565b60200190565b5151921690612525565b6128ee6128e861290b6080880151610c9d565b946128b4565b61291b8451610c9d565b612863565b612718565b919082602091031261019b5760405161293d81610a3c565b91358252565b6001600160a01b0390911681529051602082015260400190565b906102208282031261019b57610200612974610b9b565b9261297e81610ca9565b845261298c60208201610ca9565b602085015261299d60408201610ca9565b6040850152606081015160608501526129b98360808301611199565b60808501526129d8610100938483015160a08701526101208301610cd2565b60c08501526101e081015160e08501520151908201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12995,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_nnt.rsh:49:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_nnt.rsh:134:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_nnt.rsh:92:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_nnt.rsh:84:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_nnt.rsh:53:62:after expr stmt semicolon',
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
