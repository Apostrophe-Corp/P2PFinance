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
      const [v667, v668, v669, v670, v675, v677, v678] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = svs;
      return (await ((async () => {
        
        
        return v830;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v667, v668, v669, v670, v675, v677, v678] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = svs;
      return (await ((async () => {
        
        
        return v695;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v667, v668, v669, v670, v675, v677, v678] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = svs;
      return (await ((async () => {
        
        
        return v799;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = svs;
      return (await ((async () => {
        
        
        return v723;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v667, v668, v669, v670, v675, v677, v678] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = svs;
      return (await ((async () => {
        
        
        return v860;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = svs;
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
      5: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4],
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
  
  
  const v645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v646 = [v645];
  const v652 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v653 = v652.address;
  const v654 = v652.amount;
  const v655 = v652.collateral;
  const v656 = v652.maturation;
  const v657 = v652.principal;
  const v658 = v652.tokCollateral;
  const v665 = stdlib.lt(v657, v654);
  stdlib.assert(v665, {
    at: './src/contracts/loan_algo_nnt.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v666 = {
    address: v653,
    amount: v654,
    maturation: v656,
    principal: v657
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v658, v655, v666],
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
      
      
      const {data: [v668, v669, v670], secs: v672, time: v671, didSend: v43, from: v667 } = txn1;
      
      const v673 = v646[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v674 = stdlib.Array_set(v673, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v675 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v674);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v668
        });
      ;
      const v677 = v670.principal;
      const v678 = v670.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v668, v669, v670], secs: v672, time: v671, didSend: v43, from: v667 } = txn1;
  const v673 = v646[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v674 = stdlib.Array_set(v673, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v675 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v674);
  ;
  ;
  const v677 = v670.principal;
  const v678 = v670.amount;
  const v679 = stdlib.lt(v677, v678);
  stdlib.assert(v679, {
    at: './src/contracts/loan_algo_nnt.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v667, v668, v669, v670, v675, v677, v678],
    evt_cnt: 0,
    funcNum: 1,
    lct: v671,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), [[v669, v668]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v682, time: v681, didSend: v53, from: v680 } = txn2;
      
      ;
      const v683 = v675[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v684 = v683[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v685 = stdlib.add(v684, v669);
      const v687 = stdlib.Array_set(v683, '0', v685);
      const v688 = stdlib.Array_set(v675, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v687);
      sim_r.txns.push({
        amt: v669,
        kind: 'to',
        tok: v668
        });
      
      const v692 = true;
      const v693 = v667;
      const v694 = false;
      const v695 = v681;
      const v701 = v688;
      const v702 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v717 = v694 ? false : v692;
        
        return v717;})()) {
        const v722 = v694 ? false : v692;
        const v723 = v722 ? true : v694;
        sim_r.isHalt = false;
        }
      else {
        const v798 = v694 ? false : v692;
        const v799 = v798 ? true : v694;
        if (v694) {
          const v826 = stdlib.sub(v702, v702);
          sim_r.txns.push({
            kind: 'from',
            to: v667,
            tok: undefined /* Nothing */
            });
          const v828 = v670.maturation;
          const v829 = stdlib.safeAdd(v695, v828);
          const v830 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v831 = v695;
          const v837 = v701;
          const v838 = v826;
          
          if (await (async () => {
            const v855 = stdlib.lt(v831, v829);
            const v857 = stdlib.lt(v830, v678);
            const v858 = v855 ? v857 : false;
            
            return v858;})()) {
            const v860 = stdlib.ge(v830, v678);
            sim_r.isHalt = false;
            }
          else {
            const v1126 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v1127 = v1126[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v1129 = stdlib.lt(v830, v678);
            const v1130 = v1129 ? v693 : v667;
            sim_r.txns.push({
              kind: 'from',
              to: v1130,
              tok: v668
              });
            const v1143 = v1129 ? v667 : v693;
            sim_r.txns.push({
              kind: 'from',
              to: v1143,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v668
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v801 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v802 = v801[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v667,
            tok: v668
            });
          sim_r.txns.push({
            kind: 'from',
            to: v667,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v668
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
  const {data: [], secs: v682, time: v681, didSend: v53, from: v680 } = txn2;
  ;
  const v683 = v675[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v684 = v683[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v685 = stdlib.add(v684, v669);
  const v687 = stdlib.Array_set(v683, '0', v685);
  const v688 = stdlib.Array_set(v675, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v687);
  ;
  const v689 = stdlib.addressEq(v667, v680);
  stdlib.assert(v689, {
    at: './src/contracts/loan_algo_nnt.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v681), {
    at: './src/contracts/loan_algo_nnt.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v692 = true;
  let v693 = v667;
  let v694 = false;
  let v695 = v681;
  let v701 = v688;
  let v702 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v717 = v694 ? false : v692;
    
    return v717;})()) {
    const v722 = v694 ? false : v692;
    const v723 = v722 ? true : v694;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v744], secs: v746, time: v745, didSend: v158, from: v743 } = txn4;
    switch (v744[0]) {
      case 'Borrower_close0_93': {
        const v747 = v744[1];
        undefined /* setApiDetails */;
        ;
        const v757 = null;
        await txn4.getOutput('Borrower_close', 'v757', ctc5, v757);
        const cv692 = false;
        const cv693 = v693;
        const cv694 = v694;
        const cv695 = v745;
        const cv701 = v701;
        const cv702 = v702;
        
        v692 = cv692;
        v693 = cv693;
        v694 = cv694;
        v695 = cv695;
        v701 = cv701;
        v702 = cv702;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v772 = v744[1];
        undefined /* setApiDetails */;
        const v780 = stdlib.add(v702, v677);
        ;
        const v790 = true;
        await txn4.getOutput('Lender_lend', 'v790', ctc8, v790);
        const cv692 = v692;
        const cv693 = v743;
        const cv694 = true;
        const cv695 = v745;
        const cv701 = v701;
        const cv702 = v780;
        
        v692 = cv692;
        v693 = cv693;
        v694 = cv694;
        v695 = cv695;
        v701 = cv701;
        v702 = cv702;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v798 = v694 ? false : v692;
  const v799 = v798 ? true : v694;
  if (v694) {
    const v826 = stdlib.sub(v702, v702);
    ;
    const v828 = v670.maturation;
    const v829 = stdlib.safeAdd(v695, v828);
    let v830 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
    let v831 = v695;
    let v837 = v701;
    let v838 = v826;
    
    let txn4 = txn3;
    while (await (async () => {
      const v855 = stdlib.lt(v831, v829);
      const v857 = stdlib.lt(v830, v678);
      const v858 = v855 ? v857 : false;
      
      return v858;})()) {
      const v860 = stdlib.ge(v830, v678);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn5;
      switch (v920[0]) {
        case 'Borrower_claimRefund0_237': {
          const v923 = v920[1];
          undefined /* setApiDetails */;
          ;
          const v947 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v947', ctc5, v947);
          const cv830 = v830;
          const cv831 = v921;
          const cv837 = v837;
          const cv838 = v838;
          
          v830 = cv830;
          v831 = cv831;
          v837 = cv837;
          v838 = cv838;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_237': {
          const v990 = v920[1];
          undefined /* setApiDetails */;
          const v996 = v990[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
          const v997 = stdlib.addressEq(v919, v667);
          stdlib.assert(v997, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v1000 = stdlib.le(v831, v829);
          stdlib.assert(v1000, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_algo_nnt.rsh:108:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          const v1002 = stdlib.safeAdd(v996, v830);
          const v1004 = stdlib.gt(v1002, v678);
          let v1005;
          if (v1004) {
            const v1008 = stdlib.safeSub(v1002, v678);
            v1005 = v1008;
            }
          else {
            v1005 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
            }
          const v1009 = stdlib.safeSub(v996, v1005);
          const v1012 = stdlib.add(v838, v1009);
          ;
          const v1025 = stdlib.le(v921, v829);
          stdlib.assert(v1025, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_algo_nnt.rsh:108:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:116:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:116:50:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          let v1030;
          if (v1004) {
            const v1033 = stdlib.safeSub(v1002, v678);
            v1030 = v1033;
            }
          else {
            v1030 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
            }
          const v1034 = stdlib.safeSub(v996, v1030);
          const v1036 = stdlib.safeAdd(v830, v1034);
          const v1038 = stdlib.ge(v1036, v678);
          const v1040 = [v1038, v1036, v678];
          await txn5.getOutput('Borrower_repay', 'v1040', ctc11, v1040);
          const cv830 = v1036;
          const cv831 = v921;
          const cv837 = v837;
          const cv838 = v1012;
          
          v830 = cv830;
          v831 = cv831;
          v837 = cv837;
          v838 = cv838;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_237': {
          const v1057 = v920[1];
          undefined /* setApiDetails */;
          ;
          const v1118 = null;
          await txn5.getOutput('Lender_claim', 'v1118', ctc5, v1118);
          const cv830 = v830;
          const cv831 = v921;
          const cv837 = v837;
          const cv838 = v838;
          
          v830 = cv830;
          v831 = cv831;
          v837 = cv837;
          v838 = cv838;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1126 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
    const v1127 = v1126[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
    const v1129 = stdlib.lt(v830, v678);
    const v1130 = v1129 ? v693 : v667;
    ;
    const v1143 = v1129 ? v667 : v693;
    ;
    return;
    }
  else {
    const v801 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v802 = v801[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
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
  
  
  const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v863 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:123:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:123:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_claimRefund0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:123:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v867 = ['Borrower_claimRefund0_237', v863];
  
  const txn1 = await (ctc.sendrecv({
    args: [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860, v867],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:123:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
      
      switch (v920[0]) {
        case 'Borrower_claimRefund0_237': {
          const v923 = v920[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          const v947 = null;
          const v948 = await txn1.getOutput('Borrower_claimRefund', 'v947', ctc9, v947);
          
          const v2167 = v830;
          const v2168 = v921;
          const v2169 = v837;
          const v2170 = v838;
          const v2171 = stdlib.lt(v921, v829);
          const v2172 = stdlib.lt(v830, v678);
          const v2173 = v2171 ? v2172 : false;
          if (v2173) {
            const v2174 = stdlib.ge(v830, v678);
            sim_r.isHalt = false;
            }
          else {
            const v2176 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2177 = v2176[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2179 = v2172 ? v693 : v667;
            sim_r.txns.push({
              kind: 'from',
              to: v2179,
              tok: v668
              });
            const v2180 = v2172 ? v667 : v693;
            sim_r.txns.push({
              kind: 'from',
              to: v2180,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v668
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
          const v990 = v920[1];
          
          break;
          }
        case 'Lender_claim0_237': {
          const v1057 = v920[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
  switch (v920[0]) {
    case 'Borrower_claimRefund0_237': {
      const v923 = v920[1];
      undefined /* setApiDetails */;
      ;
      const v947 = null;
      const v948 = await txn1.getOutput('Borrower_claimRefund', 'v947', ctc9, v947);
      if (v499) {
        stdlib.protect(ctc9, await interact.out(v923, v948), {
          at: './src/contracts/loan_algo_nnt.rsh:123:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:123:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:123:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:124:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:123:58:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:123:58:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:123:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2167 = v830;
      const v2168 = v921;
      const v2169 = v837;
      const v2170 = v838;
      const v2171 = stdlib.lt(v921, v829);
      const v2172 = stdlib.lt(v830, v678);
      const v2173 = v2171 ? v2172 : false;
      if (v2173) {
        const v2174 = stdlib.ge(v830, v678);
        return;
        }
      else {
        const v2176 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2177 = v2176[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2179 = v2172 ? v693 : v667;
        ;
        const v2180 = v2172 ? v667 : v693;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_237': {
      const v990 = v920[1];
      return;
      break;
      }
    case 'Lender_claim0_237': {
      const v1057 = v920[1];
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
  
  
  const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v726 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v730 = ['Borrower_close0_93', v726];
  
  const txn1 = await (ctc.sendrecv({
    args: [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723, v730],
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
      
      
      const {data: [v744], secs: v746, time: v745, didSend: v158, from: v743 } = txn1;
      
      switch (v744[0]) {
        case 'Borrower_close0_93': {
          const v747 = v744[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v757 = null;
          const v758 = await txn1.getOutput('Borrower_close', 'v757', ctc9, v757);
          
          const v2209 = false;
          const v2210 = v693;
          const v2211 = v694;
          const v2212 = v745;
          const v2213 = v701;
          const v2214 = v702;
          const v2215 = v694 ? false : false;
          if (v2215) {
            const v2217 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2219 = v694;
            if (v694) {
              const v2220 = stdlib.sub(v702, v702);
              sim_r.txns.push({
                kind: 'from',
                to: v667,
                tok: undefined /* Nothing */
                });
              const v2221 = v670.maturation;
              const v2222 = stdlib.safeAdd(v745, v2221);
              const v2268 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
              const v2269 = v745;
              const v2270 = v701;
              const v2271 = v2220;
              const v2272 = stdlib.lt(v745, v2222);
              const v2273 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
              const v2274 = v2272 ? v2273 : false;
              if (v2274) {
                const v2275 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
                sim_r.isHalt = false;
                }
              else {
                const v2277 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v2278 = v2277[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v2280 = v2273 ? v693 : v667;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2280,
                  tok: v668
                  });
                const v2281 = v2273 ? v667 : v693;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2281,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v668
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2266 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v2267 = v2266[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v667,
                tok: v668
                });
              sim_r.txns.push({
                kind: 'from',
                to: v667,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v668
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
          const v772 = v744[1];
          
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
  const {data: [v744], secs: v746, time: v745, didSend: v158, from: v743 } = txn1;
  switch (v744[0]) {
    case 'Borrower_close0_93': {
      const v747 = v744[1];
      undefined /* setApiDetails */;
      ;
      const v757 = null;
      const v758 = await txn1.getOutput('Borrower_close', 'v757', ctc9, v757);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v747, v758), {
          at: './src/contracts/loan_algo_nnt.rsh:76:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:77:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:76:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2209 = false;
      const v2210 = v693;
      const v2211 = v694;
      const v2212 = v745;
      const v2213 = v701;
      const v2214 = v702;
      const v2215 = v694 ? false : false;
      if (v2215) {
        const v2217 = true;
        return;
        }
      else {
        const v2219 = v694;
        if (v694) {
          const v2220 = stdlib.sub(v702, v702);
          ;
          const v2221 = v670.maturation;
          const v2222 = stdlib.safeAdd(v745, v2221);
          const v2268 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2269 = v745;
          const v2270 = v701;
          const v2271 = v2220;
          const v2272 = stdlib.lt(v745, v2222);
          const v2273 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
          const v2274 = v2272 ? v2273 : false;
          if (v2274) {
            const v2275 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
            return;
            }
          else {
            const v2277 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2278 = v2277[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2280 = v2273 ? v693 : v667;
            ;
            const v2281 = v2273 ? v667 : v693;
            ;
            return;
            }}
        else {
          const v2266 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v2267 = v2266[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v772 = v744[1];
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
  
  
  const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v877 = ctc.selfAddress();
  const v879 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v880 = v879[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v882 = stdlib.addressEq(v877, v667);
  stdlib.assert(v882, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v885 = stdlib.le(v831, v829);
  stdlib.assert(v885, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:108:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'Its past the deadline',
    who: 'Borrower_repay'
    });
  const v887 = stdlib.safeAdd(v880, v830);
  const v889 = stdlib.gt(v887, v678);
  const v900 = ['Borrower_repay0_237', v879];
  
  let v913;
  if (v889) {
    const v916 = stdlib.safeSub(v887, v678);
    v913 = v916;
    }
  else {
    v913 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
    }
  const v917 = stdlib.safeSub(v880, v913);
  
  const txn1 = await (ctc.sendrecv({
    args: [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860, v900],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v917, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
      
      switch (v920[0]) {
        case 'Borrower_claimRefund0_237': {
          const v923 = v920[1];
          
          break;
          }
        case 'Borrower_repay0_237': {
          const v990 = v920[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v996 = v990[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
          const v1002 = stdlib.safeAdd(v996, v830);
          const v1004 = stdlib.gt(v1002, v678);
          let v1005;
          if (v1004) {
            const v1008 = stdlib.safeSub(v1002, v678);
            v1005 = v1008;
            }
          else {
            v1005 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
            }
          const v1009 = stdlib.safeSub(v996, v1005);
          const v1012 = stdlib.add(v838, v1009);
          sim_r.txns.push({
            amt: v1009,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v1030;
          if (v1004) {
            const v1033 = stdlib.safeSub(v1002, v678);
            v1030 = v1033;
            }
          else {
            v1030 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
            }
          const v1034 = stdlib.safeSub(v996, v1030);
          const v1036 = stdlib.safeAdd(v830, v1034);
          const v1038 = stdlib.ge(v1036, v678);
          const v1040 = [v1038, v1036, v678];
          const v1041 = await txn1.getOutput('Borrower_repay', 'v1040', ctc9, v1040);
          
          const v2369 = v1036;
          const v2370 = v921;
          const v2371 = v837;
          const v2372 = v1012;
          const v2373 = stdlib.lt(v921, v829);
          const v2374 = stdlib.lt(v1036, v678);
          const v2375 = v2373 ? v2374 : false;
          if (v2375) {
            sim_r.isHalt = false;
            }
          else {
            const v2378 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2379 = v2378[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2381 = v2374 ? v693 : v667;
            sim_r.txns.push({
              kind: 'from',
              to: v2381,
              tok: v668
              });
            const v2382 = v2374 ? v667 : v693;
            sim_r.txns.push({
              kind: 'from',
              to: v2382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v668
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
          const v1057 = v920[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
  switch (v920[0]) {
    case 'Borrower_claimRefund0_237': {
      const v923 = v920[1];
      return;
      break;
      }
    case 'Borrower_repay0_237': {
      const v990 = v920[1];
      undefined /* setApiDetails */;
      const v996 = v990[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
      const v997 = stdlib.addressEq(v919, v667);
      stdlib.assert(v997, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1000 = stdlib.le(v831, v829);
      stdlib.assert(v1000, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:108:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      const v1002 = stdlib.safeAdd(v996, v830);
      const v1004 = stdlib.gt(v1002, v678);
      let v1005;
      if (v1004) {
        const v1008 = stdlib.safeSub(v1002, v678);
        v1005 = v1008;
        }
      else {
        v1005 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
        }
      const v1009 = stdlib.safeSub(v996, v1005);
      const v1012 = stdlib.add(v838, v1009);
      ;
      const v1025 = stdlib.le(v921, v829);
      stdlib.assert(v1025, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:108:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:116:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:116:50:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      let v1030;
      if (v1004) {
        const v1033 = stdlib.safeSub(v1002, v678);
        v1030 = v1033;
        }
      else {
        v1030 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:112:51:decimal', stdlib.UInt_max, '0');
        }
      const v1034 = stdlib.safeSub(v996, v1030);
      const v1036 = stdlib.safeAdd(v830, v1034);
      const v1038 = stdlib.ge(v1036, v678);
      const v1040 = [v1038, v1036, v678];
      const v1041 = await txn1.getOutput('Borrower_repay', 'v1040', ctc9, v1040);
      if (v499) {
        stdlib.protect(ctc10, await interact.out(v990, v1041), {
          at: './src/contracts/loan_algo_nnt.rsh:106:31:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:118:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:116:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:116:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:116:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2369 = v1036;
      const v2370 = v921;
      const v2371 = v837;
      const v2372 = v1012;
      const v2373 = stdlib.lt(v921, v829);
      const v2374 = stdlib.lt(v1036, v678);
      const v2375 = v2373 ? v2374 : false;
      if (v2375) {
        return;
        }
      else {
        const v2378 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2379 = v2378[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2381 = v2374 ? v693 : v667;
        ;
        const v2382 = v2374 ? v667 : v693;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_237': {
      const v1057 = v920[1];
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
  
  
  const [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v871 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:127:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:127:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runLender_claim0_237" (defined at: ./src/contracts/loan_algo_nnt.rsh:127:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v875 = ['Lender_claim0_237', v871];
  
  const txn1 = await (ctc.sendrecv({
    args: [v667, v668, v678, v693, v695, v799, v829, v830, v831, v837, v838, v860, v875],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:127:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
      
      switch (v920[0]) {
        case 'Borrower_claimRefund0_237': {
          const v923 = v920[1];
          
          break;
          }
        case 'Borrower_repay0_237': {
          const v990 = v920[1];
          
          break;
          }
        case 'Lender_claim0_237': {
          const v1057 = v920[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          const v1118 = null;
          const v1119 = await txn1.getOutput('Lender_claim', 'v1118', ctc9, v1118);
          
          const v2425 = v830;
          const v2426 = v921;
          const v2427 = v837;
          const v2428 = v838;
          const v2429 = stdlib.lt(v921, v829);
          const v2430 = stdlib.lt(v830, v678);
          const v2431 = v2429 ? v2430 : false;
          if (v2431) {
            const v2432 = stdlib.ge(v830, v678);
            sim_r.isHalt = false;
            }
          else {
            const v2434 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2435 = v2434[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2437 = v2430 ? v693 : v667;
            sim_r.txns.push({
              kind: 'from',
              to: v2437,
              tok: v668
              });
            const v2438 = v2430 ? v667 : v693;
            sim_r.txns.push({
              kind: 'from',
              to: v2438,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v668
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v920], secs: v922, time: v921, didSend: v499, from: v919 } = txn1;
  switch (v920[0]) {
    case 'Borrower_claimRefund0_237': {
      const v923 = v920[1];
      return;
      break;
      }
    case 'Borrower_repay0_237': {
      const v990 = v920[1];
      return;
      break;
      }
    case 'Lender_claim0_237': {
      const v1057 = v920[1];
      undefined /* setApiDetails */;
      ;
      const v1118 = null;
      const v1119 = await txn1.getOutput('Lender_claim', 'v1118', ctc9, v1118);
      if (v499) {
        stdlib.protect(ctc9, await interact.out(v1057, v1119), {
          at: './src/contracts/loan_algo_nnt.rsh:127:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:127:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:127:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:128:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:127:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:127:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:127:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2425 = v830;
      const v2426 = v921;
      const v2427 = v837;
      const v2428 = v838;
      const v2429 = stdlib.lt(v921, v829);
      const v2430 = stdlib.lt(v830, v678);
      const v2431 = v2429 ? v2430 : false;
      if (v2431) {
        const v2432 = stdlib.ge(v830, v678);
        return;
        }
      else {
        const v2434 = v837[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2435 = v2434[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2437 = v2430 ? v693 : v667;
        ;
        const v2438 = v2430 ? v667 : v693;
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
  
  
  const [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v734 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:66:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v738 = ['Lender_lend0_93', v734];
  
  const txn1 = await (ctc.sendrecv({
    args: [v667, v668, v670, v677, v678, v692, v693, v694, v701, v702, v723, v738],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v677, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v744], secs: v746, time: v745, didSend: v158, from: v743 } = txn1;
      
      switch (v744[0]) {
        case 'Borrower_close0_93': {
          const v747 = v744[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v772 = v744[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v780 = stdlib.add(v702, v677);
          sim_r.txns.push({
            amt: v677,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v790 = true;
          const v791 = await txn1.getOutput('Lender_lend', 'v790', ctc4, v790);
          
          const v2513 = v743;
          const v2515 = v745;
          const v2522 = true;
          const v2523 = stdlib.sub(v780, v780);
          sim_r.txns.push({
            kind: 'from',
            to: v667,
            tok: undefined /* Nothing */
            });
          const v2524 = v670.maturation;
          const v2525 = stdlib.safeAdd(v745, v2524);
          const v2571 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2572 = v745;
          const v2573 = v701;
          const v2574 = v2523;
          const v2575 = stdlib.lt(v745, v2525);
          const v2576 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
          const v2577 = v2575 ? v2576 : false;
          if (v2577) {
            const v2578 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
            sim_r.isHalt = false;
            }
          else {
            const v2580 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2581 = v2580[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2583 = v2576 ? v743 : v667;
            sim_r.txns.push({
              kind: 'from',
              to: v2583,
              tok: v668
              });
            const v2584 = v2576 ? v667 : v743;
            sim_r.txns.push({
              kind: 'from',
              to: v2584,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v668
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
  const {data: [v744], secs: v746, time: v745, didSend: v158, from: v743 } = txn1;
  switch (v744[0]) {
    case 'Borrower_close0_93': {
      const v747 = v744[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v772 = v744[1];
      undefined /* setApiDetails */;
      const v780 = stdlib.add(v702, v677);
      ;
      const v790 = true;
      const v791 = await txn1.getOutput('Lender_lend', 'v790', ctc4, v790);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v772, v791), {
          at: './src/contracts/loan_algo_nnt.rsh:66:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:70:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:69:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2513 = v743;
      const v2515 = v745;
      const v2522 = true;
      const v2523 = stdlib.sub(v780, v780);
      ;
      const v2524 = v670.maturation;
      const v2525 = stdlib.safeAdd(v745, v2524);
      const v2571 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
      const v2572 = v745;
      const v2573 = v701;
      const v2574 = v2523;
      const v2575 = stdlib.lt(v745, v2525);
      const v2576 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
      const v2577 = v2575 ? v2576 : false;
      if (v2577) {
        const v2578 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v678);
        return;
        }
      else {
        const v2580 = v701[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2581 = v2580[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2583 = v2576 ? v743 : v667;
        ;
        const v2584 = v2576 ? v667 : v743;
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
  appApproval: `ByASAAEFBAgHICjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCAqCNBiYDAQEBAAAiNQAxGEEGhCpkSSJbNQEhBFs1AjYaABdJQQESIjUEIzUGSSEIDEAAeUkhCQxAAEBJIQoMQAApSSELDEAAFCELEkQqNf+AAQI0/1AhBK9QQgGwIQoSRCo1/yk0/1BCAOohCRJENhoBNf8oNP9QQgGSSSEMDEAAEiEMEkQqNf8pNP9QIQSvUEIBeSEIEkQ0ASQSRClkKGRQSTUDV2EINQdCBeJJIQ0MQAAuSSEODEAADiEOEkQqNf8oNP9QQgCMIQ0SRDQBJBJEKWQoZFBJNQNXigE1B0IFrUkhDwxAABkhDxJENAEkEkQpZChkUEk1A1dQCDUHQgWNgY/GxSoSRDQBSSEFDEAAFCEFEkQpZChkUEk1A1erATUHQgVpJBJEKWQoZFBJNQNXWAE1B0IFVjYaAhc1BDYaAzYaARdJJQxAAjlJJAxAALokEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSVcAIDX/IQZbNf5XKDg1/YFgWzX8gWhbNftXkhE1+oGjAVs1+Uk1BTX4gASxmSJFNPhQsDT4IlVAAC2ACAAAAAAAAAL1sCo1BzT/NP40/TT8NPsiNANXcSA0A1eRARcyBjT6NPlCAtY0/IgE14AJAAAAAAAAAxYBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk0/AhCAqNIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpXACA1/yEGWzX+IQdbNf1XMCA1/IFQWzX7V1gBFzX6gVlbNfmBYVs1+FdxETX3gYIBWzX2STUFNfWABNWOHas09VCwNPUiVUkjDEAA5kkhEAxAACshEBJEgAgAAAAAAAAEXrAqNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2QgLYSDT1VwEINfQ09Bc18zEANP8SRDQDgWlbNPkORDTzNPgISTXyNP0NSTXxQQAKNPI0/Qk18EIAAyI18DTzNPAJNe8074gDxjIGNPkORDTxQQAKNPI0/Qk17kIAAyI17jT4NPM07gkINe2ACAAAAAAAAAQQNO00/Q8WUQcINO0WUDT9FlBQsDTtNP0PFlEHCDTtFlA0/RZQNQc0/zT+NP00/DT7NPo0+TTtMgY09zT2NO8IQgIkSIAIAAAAAAAAA7OwKjUHNP80/jT9NPw0+zT6NPk0+DIGNPc09kIB/EkjDEAAeSMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBls1/iEHWzX9V2gRNfyABJqLkXSwNPxXABE1+zT9NP6IAvw0/zEAEkQ0/zT+NANXMDg0A4F5WzQDgYEBWyM0/yIyBjT8NPtJIls0/QgWXABcACJCAKtIIRGIAqsiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBK9cAFwANfshEYgCXrEisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBls1+TT6NPkMRDEANP8WUDT+FlA0/VA0+1A0+hZQNPkWUClLAVcAf2coSwFXfwpnSCM1ATIGNQJCAbQ1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwUNPoQQQA7NPU09hZQNPdQNPgWUDT5FlAoUDT7UClQNP5QNP8WUChQKUsBVwB/ZyhLAVd/LWdIIQU1ATIGNQJCAVo0/EEAMLEisgE0/7III7IQNPWyB7M09TT2NPk0+zT9NPw0/TT3IQdbCCI0/TT+NP9JCUIAQ7EisgE0/lcAESJbshIlshA09bIUNPayEbOxIrIBNP+yCCOyEDT1sgezsSKyASKyEiWyEDIJshUyCrIUNPayEbNCAMc1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPw09ww19DT9NPsMNPQQQQBSNPw09w818zT1NPYWUDT3FlA0+FA0+RZQNPoWUQcIUDT7FlA0/BZQNP0WUDT+UDT/FlA08xZRBwhQKUsBVwB/ZyhLAVd/DGdIJDUBMgY1AkIAaLEisgE0/lcAESJbshIlshA09TT4NPRNshQ09rIRs7EisgE0/7III7IQNPg09TT0TbIHs7EisgEishIlshAyCbIVMgqyFDT2shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2617","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1040","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1118","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v757","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v790","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v947","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2603","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2619","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2631","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2645","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002e4738819003601f8101601f191683016001600160401b0381118482101762000521578392829160405283398101039060e0821262000625576080604051926200004d846200062a565b825184526200005f6020840162000662565b602085015260408301516040850152605f190112620006255760c06040519162000089836200062a565b620000976060820162000662565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005215760009161012091604052828152826020820152826040820152620000fa62000677565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f8262000646565b6200013962000677565b8252602082016200014962000698565b81526200015562000698565b604084015260ff600454166200060c577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001c660608601516080830190620006df565ba181518015908115620005ff575b5015620005e657600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002138362000646565b60008352602083015260408201526200022b62000698565b9160005b600181106200059657505081526040830152346200057d57606081015160206060820151910151111562000564576040519160e08301916001600160401b03831184841017620005215760406060926020948252600086526000858701526000828701528151620002a0816200062a565b6000815260008682015260008382015260008582015284870152620002c462000698565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200035960608201516080840190620006df565b6080810151600061010084015b60018210620005375760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005215760405280516001600160401b0381116200052157600254600181811c9116801562000516575b60208210146200050057601f811162000496575b50602091601f82116001146200042c5791819260009262000420575b50508160011b916000199060031b1c1916176002555b6040516127139081620007348239f35b015190508280620003fa565b601f19821692600260005260206000209160005b8581106200047d5750836001951062000463575b505050811b0160025562000410565b015160001960f88460031b161c1916905582808062000454565b9192602060018192868501518155019401920162000440565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004f5575b601f0160051c01905b818110620004e85750620003de565b60008155600101620004d9565b9091508190620004d0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ca565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000366565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005a281836200070b565b51620005af82866200070b565b52620005bc81856200070b565b506000198114620005d0576001016200022f565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d4565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200052157604052565b606081019081106001600160401b038211176200052157604052565b51906001600160a01b03821682036200062557565b60405190620006868262000646565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000521576040528260005b828110620006c857505050565b8290620006d462000677565b8184015201620006bb565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200071d5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610829565b61000e565b506100ca6107bb565b506100ca610746565b506100ca61069c565b506100ca61064e565b506100ca6105cf565b506100ca6105b0565b506100ca610571565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610b05565b6005600054036101975760e0602091608061018861017a6109be565b858082518301019101610ccc565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610b05565b604051906101f682610906565b600435825260803660231901126101b057604051916102148361092e565b6024359260038410156101b05761026193815260443561023381610c3a565b60208201526102413661252f565b604082015260843561025281610c3a565b606082015260208201526112d4565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610b05565b6005600054036102a75760c060209160e061018861017a6109be565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610b05565b61030d816102e5610bf4565b85810190600082515251151586825101526102fe610bf4565b9060008252518682015261184e565b01511515604051908152f35b50346101b05760003660031901126101b057610333610b05565b60056000540361037a5761012061026d916101606103616103526109be565b60208082518301019101610ccc565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103a9610b05565b5061055b6103b63661254f565b916103d26103cd6103c960045460ff1690565b1590565b610d86565b60408051338152845160208201529093610548917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a1610419600160005414610da6565b6104476104356104276109be565b85808251830101910161256f565b91518015908115610565575b50610dc6565b6104513415610de6565b8281019261054360806104648651610c1a565b9361047d6104788a83019687519033612609565b610e06565b6104993360018060a01b036104928451610c1a565b1614610e26565b6104c96104c16104a76117f7565b986104bb6104b58551610c1a565b8b6112c5565b51610c1a565b8589016112c5565b60608101518988015260a0810151606088015260c0810151828801526104f260a0880160019052565b6105086104ff8251610c1a565b60c089016112c5565b600060e0880152436101008801520151918251938451905101938882820151910151151591610535610a69565b958652850152151587840152565b612689565b6101208201526000610140820152611e36565b5160008152602090f35b90506001541438610441565b5060003660031901126101b057602060a061058a610b05565b61030d81610596610bf4565b8581019060018251525115156040825101526102fe610bf4565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105e4610b05565b604051906105f182610906565b600435825260603660231901126101b0576040519161060f83610949565b6024359260028410156101b05761026193815260443561062e81610c3a565b602082015260643561063f81610c3a565b6040820152602082015261184e565b5060003660031901126101b05760206080610667610b05565b61030d81610673610baa565b85810190600282515251151560608251015261068d610baa565b906000825251868201526112d4565b50346101b05760003660031901126101b05761026d6106f96101006106bf610b05565b600054600781101561070b5760056106d79114610e66565b6106ea6106f160a06106ea6103526109be565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107179114610e46565b6107416101406107376107286109be565b60208082518301019101611089565b0151151582840152565b6106ea565b50346101b0576000806003193601126107b85780546107636109be565b906040519283918252602090604082840152835191826040850152815b8381106107a157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610780565b80fd5b5060003660031901126101b0576020806107d3610b05565b61030d816107df610baa565b84810190600082515251151585825101526107f8610baa565b906000825251858201526112d4565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b05761083e610ac8565b5061026d606061084c610b05565b6108a78160405161085c81610906565b60405161086881610964565b600081528152602081019061087b610b77565b8252600435815152600182515251604082510152610897610baa565b90600082525160208201526112d4565b015160405191829182610807565b90600182811c921680156108e5575b60208310146108cf57565b634e487b7160e01b600052602260045260246000fd5b91607f16916108c4565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761092157604052565b6109296108ef565b604052565b608081019081106001600160401b0382111761092157604052565b606081019081106001600160401b0382111761092157604052565b602081019081106001600160401b0382111761092157604052565b61016081019081106001600160401b0382111761092157604052565b601f909101601f19168101906001600160401b0382119082101761092157604052565b60405190600082600254916109d2836108b5565b808352600193808516908115610a4857506001146109fa575b506109f89250038361099b565b565b600260009081526000805160206126e783398151915294602093509091905b818310610a305750506109f89350820101386109eb565b85548884018501529485019487945091830191610a19565b90506109f894506020925060ff191682840152151560051b820101386109eb565b60405190606082016001600160401b0381118382101761092157604052565b6040519061018082016001600160401b0381118382101761092157604052565b6040519061016082016001600160401b0381118382101761092157604052565b60405190606082016001600160401b03811183821017610af8575b60405260006040838281528260208201520152565b610b006108ef565b610ae3565b6040519061014082016001600160401b03811183821017610b6a575b60405281610120600091828152826020820152826040820152610b42610ac8565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b726108ef565b610b21565b60405190610b848261092e565b6000606083828152826020820152604051610b9e81610964565b83815260408201520152565b60405190610bb782610906565b81600081526020610bc6610b77565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610bec57565b6109f8610bcb565b60405190610c0182610906565b81600081526020610bc6610ac8565b60021115610bec57565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109f882610c3a565b9080601f830112156101b057604091825192610c6a84610964565b83606093848401938185116101b057915b848310610c8b5750505050505090565b85838303126101b05783518691610ca182610949565b84518252602091828601518382015286860151610cbd81610c3a565b87820152815201920191610c7b565b6101c0818303126101b0576101a0610d7d91610ce6610a88565b93610cf082610c26565b8552610cfe60208301610c26565b602086015260408201516040860152610d1960608301610c26565b606086015260808201516080860152610d3460a08301610c44565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610d6761012091828401610c4f565b9085015261018081015161014085015201610c44565b61016082015290565b15610d8d57565b60405163100960cb60e01b815260106004820152602490fd5b15610dad57565b60405163100960cb60e01b815260116004820152602490fd5b15610dcd57565b60405163100960cb60e01b815260126004820152602490fd5b15610ded57565b60405163100960cb60e01b815260136004820152602490fd5b15610e0d57565b60405163100960cb60e01b815260146004820152602490fd5b15610e2d57565b60405163100960cb60e01b815260156004820152602490fd5b15610e4d57565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e6d57565b60405163100960cb60e01b815260096004820152602490fd5b15610e8d57565b60405163100960cb60e01b815260166004820152602490fd5b15610ead57565b60405163100960cb60e01b815260176004820152602490fd5b15610ecd57565b60405163100960cb60e01b815260186004820152602490fd5b15610eed57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610f0d57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610f2d57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610f4d57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610f6d57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610f8d57565b60405163100960cb60e01b815260196004820152602490fd5b15610fad57565b60405163100960cb60e01b8152601f6004820152602490fd5b15610fcd57565b60405163100960cb60e01b815260206004820152602490fd5b15610fed57565b60405163100960cb60e01b815260216004820152602490fd5b1561100d57565b60405163100960cb60e01b815260236004820152602490fd5b1561102d57565b60405163100960cb60e01b815260226004820152602490fd5b91908260809103126101b05760405161105e8161092e565b606080829461106c81610c26565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b0576111426101e06110a3610aa8565b936110ad81610c26565b85526110bb60208201610c26565b60208601526110cd8460408301611046565b604086015260c0810151606086015260e081015160808601526101006110f4818301610c44565b60a087015261012090611108828401610c26565b60c088015261112e6101409661111f888601610c44565b60e08a01526101608501610c4f565b908701526101c08201519086015201610c44565b9082015290565b604051610100810191906001600160401b038311818410176111aa575b82604052809261117581610964565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610bc6610ac8565b6111b26108ef565b611166565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015611214575b60408501526020810151151582850152604081015151608085015201511515910152565b61121c610bcb565b6111f0565b51600381101561122e5790565b611236610bcb565b90565b6040519061124682610964565b8160005b60208110611256575050565b602090611261610ac8565b818401520161124a565b604051906112788261097f565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112bb611239565b6101208201520152565b6001600160a01b039091169052565b611356906112e0611149565b926112f86112f36103c960045460ff1690565b610e86565b6040937f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f96185518061132a8633836111c4565b0390a161133b600560005414610ea6565b6113436109be565b6020948186808094518301019101610ccc565b9361136c81518015908115611718575b50610ec6565b01906113788251611221565b61138181610be2565b611479575050926000836109f8956113993415610f86565b8351600081527f26a3a08b70de3687de302893b53fcb62192538c8863ce8ef9b1ce56b6ca4294a9080602081015b0390a101526113ff6113d761126b565b936113eb6113e58551610c1a565b866112c5565b6113f781850151610c1a565b9085016112c5565b80820151908301526114206114176060830151610c1a565b606084016112c5565b6080810151608083015261144361143a60a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e0830152436101008301526101208082015190830152610140809101519082015261232b565b600161148783979351611221565b61149081610be2565b036116a757816109f89651015181526114bb6114b46114af8651610c1a565b610c1a565b3314610f06565b6101009182850151906114d560c087019283511015610f26565b825151946114e960e088019687519061173b565b90606061158e8a870198848a52858b01948551109961150d878a019b8c9015159052565b8a511561169c57611521815187519061175d565b848a01525b61155f6115398a5151868c01519061175d565b9b61154c8d60808d019e8f523414610f46565b6115598a51431115610f66565b51151590565b1561168f575185516115709161175d565b60a08901525b5161158888515160a08a01519061175d565b9061173b565b956115ac60e060c0830198808a528651111592019182519015159052565b86518b82510152835185825101527fef4ca4265d51cd6cee0f583a13018735428dcbfdf9f6b8e47fc1167621578f416115eb8251875191829182610807565b0390a15191015261161f6115fd61126b565b9861160b6104b58a51610c1a565b611617818a0151610c1a565b908a016112c5565b519087015261163d6116346060870151610c1a565b606088016112c5565b6080850151608087015261166061165760a0870151151590565b151560a0880152565b5160c08601525160e085015243908401526101208083015190840152610140809201519051019082015261232b565b50600060a0890152611576565b6000848a0152611526565b5090936116b660029151611221565b6116bf81610be2565b146116cb575b50505050565b6000608061170f956116dd3415610ee6565b8351600081527f56b99fc5ece90a970f1f0631dc528d3bd43874b6be4fe12874a210b064afbf079080602081016113c7565b388080806116c5565b90506001541438611366565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611750575b82106101b057565b611758611724565b611748565b90810390811161176a5790565b611236611724565b9092916040602060809260a085019660018060a01b031685528051828601520151805160028110156117b8575b8285015260208101511515606085015201511515910152565b6117c0610bcb565b61179f565b51600281101561122e5790565b604051906117df8261092e565b60006060838281528260208201528260408201520152565b604051906118048261097f565b8161014060009182815282602082015261181c6117d2565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112bb611239565b6118c7906118696118646103c960045460ff1690565b610fa6565b6040927fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa84518061189b853383611772565b0390a16118ac600760005414610fc6565b6118b46109be565b6020938185808094518301019101611089565b926118dd81518015908115611ac4575b50610fe6565b016118e881516117c5565b6118f181610c10565b6119b75750926000816109f8956119083415611026565b8151600081527fb188b0e33b683fd24a6adfd3fff966bf5be52b89bb092f35fb829c7a755cc0bb90602090a101526119416113d76117f7565b80820151908301526060810151606083015260808101516080830152600060a083015261197d61197460c0830151610c1a565b60c084016112c5565b61199661198d60e0830151151590565b151560e0840152565b61010043818401528101519061012091828401520151610140820152611e36565b6119c6600191939293516117c5565b6119cf81610c10565b146119da5750505050565b61170f93611a2760a060608401946119f486513414611006565b8351600181527f8b7c04b80da66f78012eb5ea464906a9d795c02c8240d02a6cee08ace14eb4a090602090a10160019052565b611a5a611a326117f7565b94611a46611a408551610c1a565b876112c5565b611a5281850151610c1a565b9086016112c5565b80820151908401528151606084015260808101516080840152611a8c611a8360a0830151151590565b151560a0850152565b611a993360c085016112c5565b600160e084015261010043818501528101519061012091828501520151905101610140820152611e36565b905060015414386118d7565b906001811015611ae15760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110611b0f575050565b60008155600101611b04565b611b266002546108b5565b80611b2e5750565b601f8111600114611b4157506000600255565b6002600052611b8690601f0160051c6000805160206126e7833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611b04565b6000602081208160025555565b60405190611ba08261097f565b81610140600091828152826020820152611bb86117d2565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611be3611239565b610100820152826101208201520152565b6000915b60018310611c0557505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611bf8565b6109f8909291926101e0610200820194611c4f8382516111b7565b611c61602082015160208501906111b7565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611cbf610100928386019015159052565b60c0810151611cd461012091828701906111b7565b611cfc60e083015193611cee610140958689019015159052565b830151610160870190611bf4565b8101516101c085015201511515910152565b90601f8211611d1b575050565b6109f89160026000526020600020906020601f840160051c83019310611d49575b601f0160051c0190611b04565b9091508190611d3c565b80519091906001600160401b038111611e29575b611d7b81611d766002546108b5565b611d0e565b602080601f8311600114611db75750819293600092611dac575b50508160011b916000199060031b1c191617600255565b015190503880611d95565b6002600052601f198316949091906000805160206126e7833981519152926000905b878210611e11575050836001959610611df8575b505050811b01600255565b015160001960f88460031b161c19169055388080611ded565b80600185968294968601518155019501930190611dd9565b611e316108ef565b611d67565b60e081018051151580156120a85760005b15611f30575050611f1d611f2b6109f892611efb611e63611b93565b91611e77611e718251610c1a565b846112c5565b611e90611e876020830151610c1a565b602085016112c5565b604081015160408401526060810151606084015260808101516080840152611ebb60a0840160019052565b611ed4611ecb60c0830151610c1a565b60c085016112c5565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b611f056007600055565b611f0e43600155565b60405192839160208301611c34565b03601f19810183528261099b565b611d53565b1561201e57600082611f486114af6109f89551610c1a565b9082808080610140958686015190828215612015575bf115612008575b611f6d61126b565b93611f7b6113e58351610c1a565b611f94611f8b6020840151610c1a565b602087016112c5565b60808201516040860152611fb7611fae60c0840151610c1a565b606087016112c5565b61010090611fd261165783850192835160808a015251151590565b611fe5815160408086015101519061173b565b60c08701528460e08701525190850152610120809101519084015282015261232b565b612010611af7565b611f65565b506108fc611f5e565b506000808083612059612035602084970151610c1a565b61203f8351610c1a565b6101208401515151916001600160a01b03909116906120b4565b6101406120696114af8351610c1a565b9101519082821561209f575bf115612092575b6000805561208a6000600155565b6109f8611b1b565b61209a611af7565b61207c565b506108fc612075565b60a08301511515611e47565b6000919061211993838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526120f28161092e565b5193165af1612109612102612120565b8092612182565b506020808251830101910161216d565b156101b057565b3d15612168573d906001600160401b03821161215b575b6040519161214f601f8201601f19166020018461099b565b82523d6000602084013e565b6121636108ef565b612137565b606090565b908160209103126101b0575161123681610c3a565b1561218a5790565b80511561219957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156121ba5790565b8051156121c957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906121ef82610906565b60006020838281520152565b6040519061018082016001600160401b0381118382101761226e575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015261225d611239565b610120820152826101408201520152565b6122766108ef565b612217565b6109f8909291926101a06101606101c08301956122998482516111b7565b6122ab602082015160208601906111b7565b604081015160408501526122c7606082015160608601906111b7565b608081015160808501526122e460a082015160a086019015159052565b60c081015160c085015260e081015160e085015261010080820151908501526123166101208083015190860190611bf4565b61014081015161018085015201511515910152565b6123336121e2565b60e08201805160408401805191909111835292906101009081830190815160c085019081511160009060001461252a5750855115155b156124645794611f2b946109f897946124429484611f1d9961239a602061243898518b511115970196879015159052565b6123a26121fb565b986123b06104b58751610c1a565b6123c96123c06020880151610c1a565b60208c016112c5565b5160408a01526123e86123df6060870151610c1a565b60608b016112c5565b608085015160808a015261240b61240260a0870151151590565b151560a08b0152565b5160c08901525160e088015251908601526101208082015190860152610140809101519085015251151590565b1515610160830152565b61244c6005600055565b61245543600155565b6040519283916020830161227b565b5050505060008093508092826124c0612481602085960151610c1a565b9261248c8151151590565b8514612517576115596124a26060850151610c1a565b945b61012085015151516001600160a01b03969091908716906120b4565b8314612501576101406124d38251610c1a565b915b015191839183156124f7575b1690f115612092576000805561208a6000600155565b6108fc92506124e1565b6101406125116060830151610c1a565b916124d5565b6115596125248451610c1a565b946124a4565b612369565b60209060631901126101b0576040519061254882610964565b6064358252565b60209060031901126101b0576040519061256882610964565b6004358252565b610180818303126101b0576040519161016091906125e29060e085016001600160401b038111868210176125fc575b6040526125aa83610c26565b85526125b860208401610c26565b6020860152604083015160408601526125d48160608501611046565b606086015260e08301610c4f565b608084015261014081015160a0840152015160c082015290565b6126046108ef565b61259e565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152611236936000938493909284919060a081016001600160401b0381118282101761267c575b6040525193165af1612109612675612120565b80926121b2565b6126846108ef565b612662565b9190612693611239565b9260005b600181106126a55750508252565b806126b260019284611ad0565b516126bd8288611ad0565b526126c88187611ad0565b5060001981146126d9575b01612697565b6126e1611724565b6126d356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 11847,
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
    at: './src/contracts/loan_algo_nnt.rsh:137:17:after expr stmt',
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
