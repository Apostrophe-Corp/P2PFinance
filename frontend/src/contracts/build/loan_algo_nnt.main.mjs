// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

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
    impure: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `_reachp_0((uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`, `_reachp_0((uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEFCAcgKBGgjQYEJgMAAQEBADEYQQSwKGRJIls1ASVbNQIqZClkUIINBAVRYw8EDCkD+wQnUbj/BDrpub4EPoAXdgRnijtZBHO2+NcEjvcBQQSTqeROBJdNI/oEpHqhMgTf2SMoBPTSp0g2GgCODQDhAAEA0QD8AKMAswB4BCgAPQQzAIsEHQQNACEHrzUOJDQBEkSIBUA0DiJbNQ80DlcICTUVgAQpJ2w2NA8WUDQVULA0D4gFbzQVIlWNAwQlBCgEK0L/w4EJrzULIQQ0ARJEiAWANAsiWzUMNAtXCAE1DYAEBRynmjQMFlA0DVCwNAyIBTI0DSJVjQID/wQCQv+INhoBFzULJa8pNAsWUFA1DkL/e4ARAAAAAAAAAAACAAAAAAAAAAA1DkL/Y4AJAAAAAAAAAAABNQtC/480ASQSRIgEkzQZFjUEMRkiEkSABBUffHU0BFCwI0M0ASQSRIgEdTQQFjUEQv/fNAEhBAxBBDg0ASQSRIgEXTQTFlEHCDUEQv/ENAEkEkSIBEo0DxZRBwg1BEL/sSg1DoAIAAAAAAAAA7M0DlCwNA41BDIGNQ00GTQUDDUONA00EQw0DhBBA6A0GTQUDzUPNBg0FxZQNBQWUDQSUDQQFlA0ExZRBwhQNBEWUDQZFlA0DRZQNAxQNAsWUDQPFlEHCFCBIa9QJDIGNQI1ASpLAVcAf2cpTFd/LWcoNAEWNAIWUGcxGSISRIgEdTQDQP8uQv8hKDULgAgAAAAAAAAC9TQLULA0CzUEIjIGNRA1EzQRFDQTEEECsSM1DCM1EyI1ETQYNBcWUDQWUDQVFlA0FBZQNBMWUQcIUDQSUDQRFlEHCFA0D1A0DhZQNAwWUQcIUCEEMgZC/3E0FSNbNRYxADQYEkQ0DTQRDkQ0FjQZCEk1GjQUDUk1D0ECPDQaNBQJNQ40FjQOCUk1FYgDcTIGNBEORDQPQQIlNBo0FAk1DjQZNBY0DgkISTUPNBQPFlEHCDQPFlA0FBZQNQ6ACAAAAAAAAAQQNA5QsDQONQQ0DzIGNAs0FQg1CzUNNRlC/pgoNQ6ACAAAAAAAAAReNA5QsDQONQQyBjUNQv58NBWIAv4jNQuACAAAAAAAAAMWNAsWUQcIULA0CxZRBwg1BDEAIzIGNA40FQg1DjUQNRE1EkL+3TEANRg0CyJbNQw0CyVbNRc0C4EQWzUZNAtXGDg1FoAE8ZJYijQMFlA0FxZQNBkWUDQWULA0DIgCgSEHr0k1C0lXABElr1wAXAA1DSEIiALwIjQXMgqIAnA0FoEwWzUVNBYhBVs1FDQVNBQMRDQYNBcWUDQZFlA0FlA0DVA0FRZQNBQWUIEjr1AjMgZC/gkjNAESRElXACA1GEkhBVs1F0khBls1GUlXMDg1FklXaBE1DUmBeVs1FYGBAVs1FDQLFzUMgATVFRkUNAwWULA0DIgB6DQNVwARNQs0GTQXMRY0ACMISTUACUcDOBQyChJEOBAhCRJEOBFPAhJEOBISRDQYMQASRCM0GCIyBjQNNAtJIls0GQgWXABcACI1DjUPNRA1ETUSNRNC/bOIAYkhCIgCDjYaATULQv7GiAF5NhoBNQtC/0mIAW42GgE1DkL704gBYzYaATULQvwEIjE0EkSBAzE1EkQiMTYSRCIxNxJEiAFDgawBryIiQv0bQvytQv2kQv4oIjUOQv3FIjUOQv3cQv0tQv4yNBE1EzQRQQAlNA40GIgBHTQQNBYhBlsINREiNBA0DzQOSQk1CzUMNQ01GUL8gDQPVwARIls0FzQYiAD1NA40GIgA6iI0FzIKMgmIAVYxGSQSRIgBQiIyCjIJiAFSQvzCNAxXABEiWzQXNBg0EjQOTYgAvjQLNBI0GDQOTYgAriI0FzIKMgmIARpC/8EisgEjshCyB7IIs4kisgEhCbIQshSyEbISs4k0ASEEEkSIAKE0DBZRBwg1BEL7i0iJTAlJNQYyCYgAZokJSUH/7kk1BogAYolJVwAgNRhJIQVbNRdJIQZbNRRJVzAgNRJJgVBbNRBJV1gBFzUTSYFZWzURSYFhWzUZSYFpWzUNSVdxETUMSYGCAVs1C1eKARc1D4kjNQOJSSISTDQCEhFEibFC/1uxQv9jMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiUlXACA1GEkhBVs1F0lXKDg1FkmBYFs1FUmBaFs1FElXcAEXNRNJV3EgNRJJV5EBFzURSVeSETUPSYGjAVs1DlerARc1DIk0BjQHSg9B/x1C/yWxshVC/u80Bgg1BomxsglC/tc=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `552`,
    1001: `553`,
    1002: `553`,
    1003: `554`,
    1004: `555`,
    1005: `555`,
    1006: `556`,
    1007: `557`,
    1008: `558`,
    1009: `558`,
    101: `21`,
    1010: `559`,
    1011: `560`,
    1012: `561`,
    1013: `561`,
    1014: `562`,
    1015: `563`,
    1016: `564`,
    1017: `565`,
    1018: `565`,
    1019: `566`,
    102: `21`,
    1020: `566`,
    1021: `566`,
    1022: `568`,
    1023: `569`,
    1024: `569`,
    1025: `570`,
    1026: `571`,
    1027: `573`,
    1028: `574`,
    1029: `574`,
    103: `21`,
    1030: `574`,
    1031: `575`,
    1032: `575`,
    1033: `576`,
    1034: `577`,
    1035: `577`,
    1036: `578`,
    1037: `579`,
    1038: `579`,
    1039: `580`,
    104: `21`,
    1040: `581`,
    1041: `581`,
    1042: `582`,
    1043: `583`,
    1044: `583`,
    1045: `584`,
    1046: `585`,
    1047: `585`,
    1048: `585`,
    1049: `586`,
    105: `21`,
    1050: `586`,
    1051: `587`,
    1052: `588`,
    1053: `588`,
    1054: `588`,
    1055: `589`,
    1056: `589`,
    1057: `590`,
    1058: `591`,
    1059: `591`,
    106: `21`,
    1060: `592`,
    1061: `593`,
    1062: `593`,
    1063: `594`,
    1064: `594`,
    1065: `594`,
    1066: `595`,
    1067: `596`,
    1068: `596`,
    1069: `597`,
    107: `21`,
    1070: `597`,
    1071: `598`,
    1072: `599`,
    1073: `599`,
    1074: `600`,
    1075: `600`,
    1076: `600`,
    1077: `600`,
    1078: `600`,
    1079: `600`,
    108: `21`,
    1080: `601`,
    1081: `601`,
    1082: `602`,
    1083: `603`,
    1084: `604`,
    1085: `606`,
    1086: `606`,
    1087: `607`,
    1088: `607`,
    1089: `607`,
    109: `21`,
    1090: `608`,
    1091: `608`,
    1092: `609`,
    1093: `609`,
    1094: `609`,
    1095: `610`,
    1096: `610`,
    1097: `611`,
    1098: `611`,
    1099: `612`,
    11: `2`,
    110: `22`,
    1100: `612`,
    1101: `615`,
    1102: `615`,
    1103: `616`,
    1104: `616`,
    1105: `617`,
    1106: `618`,
    1107: `619`,
    1108: `620`,
    1109: `620`,
    111: `22`,
    1110: `621`,
    1111: `622`,
    1112: `622`,
    1113: `623`,
    1114: `623`,
    1115: `624`,
    1116: `624`,
    1117: `625`,
    1118: `626`,
    1119: `627`,
    112: `22`,
    1120: `627`,
    1121: `628`,
    1122: `628`,
    1123: `629`,
    1124: `630`,
    1125: `631`,
    1126: `631`,
    1127: `632`,
    1128: `632`,
    1129: `633`,
    113: `23`,
    1130: `634`,
    1131: `635`,
    1132: `635`,
    1133: `636`,
    1134: `637`,
    1135: `640`,
    1136: `640`,
    1137: `641`,
    1138: `641`,
    1139: `642`,
    114: `23`,
    1140: `643`,
    1141: `646`,
    1142: `647`,
    1143: `647`,
    1144: `648`,
    1145: `649`,
    1146: `649`,
    1147: `650`,
    1148: `650`,
    1149: `651`,
    115: `23`,
    1150: `651`,
    1151: `652`,
    1152: `653`,
    1153: `654`,
    1154: `655`,
    1155: `655`,
    1156: `656`,
    1157: `657`,
    1158: `658`,
    1159: `658`,
    116: `23`,
    1160: `659`,
    1161: `659`,
    1162: `660`,
    1163: `661`,
    1164: `661`,
    1165: `662`,
    1166: `662`,
    1167: `663`,
    1168: `663`,
    1169: `664`,
    117: `23`,
    1170: `664`,
    1171: `665`,
    1172: `665`,
    1173: `666`,
    1174: `666`,
    1175: `667`,
    1176: `667`,
    1177: `667`,
    1178: `669`,
    1179: `669`,
    118: `23`,
    1180: `669`,
    1181: `670`,
    1182: `670`,
    1183: `671`,
    1184: `671`,
    1185: `671`,
    1186: `672`,
    1187: `672`,
    1188: `672`,
    1189: `673`,
    119: `23`,
    1190: `673`,
    1191: `674`,
    1192: `674`,
    1193: `674`,
    1194: `676`,
    1195: `676`,
    1196: `676`,
    1197: `677`,
    1198: `677`,
    1199: `677`,
    12: `2`,
    120: `23`,
    1200: `678`,
    1201: `678`,
    1202: `679`,
    1203: `679`,
    1204: `679`,
    1205: `681`,
    1206: `681`,
    1207: `681`,
    1208: `682`,
    1209: `682`,
    121: `23`,
    1210: `682`,
    1211: `683`,
    1212: `683`,
    1213: `684`,
    1214: `684`,
    1215: `684`,
    1216: `686`,
    1217: `686`,
    1218: `686`,
    1219: `687`,
    122: `23`,
    1220: `687`,
    1221: `687`,
    1222: `688`,
    1223: `688`,
    1224: `689`,
    1225: `689`,
    1226: `689`,
    1227: `691`,
    1228: `692`,
    1229: `692`,
    123: `23`,
    1230: `693`,
    1231: `694`,
    1232: `695`,
    1233: `695`,
    1234: `696`,
    1235: `696`,
    1236: `697`,
    1237: `698`,
    1238: `699`,
    1239: `700`,
    124: `23`,
    1240: `700`,
    1241: `701`,
    1242: `702`,
    1243: `703`,
    1244: `704`,
    1245: `704`,
    1246: `705`,
    1247: `706`,
    1248: `707`,
    1249: `707`,
    125: `23`,
    1250: `707`,
    1251: `708`,
    1252: `708`,
    1253: `708`,
    1254: `709`,
    1255: `710`,
    1256: `711`,
    1257: `712`,
    1258: `712`,
    1259: `712`,
    126: `23`,
    1260: `714`,
    1261: `714`,
    1262: `714`,
    1263: `716`,
    1264: `716`,
    1265: `716`,
    1266: `718`,
    1267: `718`,
    1268: `718`,
    1269: `720`,
    127: `23`,
    1270: `721`,
    1271: `721`,
    1272: `722`,
    1273: `722`,
    1274: `722`,
    1275: `724`,
    1276: `725`,
    1277: `725`,
    1278: `726`,
    1279: `726`,
    128: `23`,
    1280: `726`,
    1281: `728`,
    1282: `728`,
    1283: `728`,
    1284: `730`,
    1285: `730`,
    1286: `730`,
    1287: `732`,
    1288: `732`,
    1289: `733`,
    129: `23`,
    1290: `733`,
    1291: `734`,
    1292: `734`,
    1293: `735`,
    1294: `735`,
    1295: `735`,
    1296: `736`,
    1297: `736`,
    1298: `738`,
    1299: `738`,
    13: `2`,
    130: `23`,
    1300: `739`,
    1301: `739`,
    1302: `739`,
    1303: `740`,
    1304: `740`,
    1305: `741`,
    1306: `741`,
    1307: `742`,
    1308: `742`,
    1309: `743`,
    131: `23`,
    1310: `744`,
    1311: `745`,
    1312: `745`,
    1313: `746`,
    1314: `747`,
    1315: `747`,
    1316: `748`,
    1317: `748`,
    1318: `749`,
    1319: `749`,
    132: `23`,
    1320: `750`,
    1321: `751`,
    1322: `752`,
    1323: `752`,
    1324: `753`,
    1325: `753`,
    1326: `754`,
    1327: `754`,
    1328: `755`,
    1329: `755`,
    133: `23`,
    1330: `756`,
    1331: `756`,
    1332: `756`,
    1333: `758`,
    1334: `758`,
    1335: `759`,
    1336: `759`,
    1337: `759`,
    1338: `760`,
    1339: `761`,
    134: `23`,
    1340: `763`,
    1341: `763`,
    1342: `765`,
    1343: `765`,
    1344: `766`,
    1345: `766`,
    1346: `766`,
    1347: `767`,
    1348: `767`,
    1349: `768`,
    135: `23`,
    1350: `768`,
    1351: `769`,
    1352: `769`,
    1353: `769`,
    1354: `771`,
    1355: `772`,
    1356: `772`,
    1357: `773`,
    1358: `773`,
    1359: `774`,
    136: `23`,
    1360: `774`,
    1361: `775`,
    1362: `775`,
    1363: `775`,
    1364: `777`,
    1365: `777`,
    1366: `778`,
    1367: `779`,
    1368: `780`,
    1369: `782`,
    137: `23`,
    1370: `782`,
    1371: `782`,
    1372: `784`,
    1373: `785`,
    1374: `785`,
    1375: `786`,
    1376: `786`,
    1377: `787`,
    1378: `787`,
    1379: `787`,
    138: `23`,
    1380: `788`,
    1381: `788`,
    1382: `788`,
    1383: `790`,
    1384: `790`,
    1385: `791`,
    1386: `791`,
    1387: `791`,
    1388: `792`,
    1389: `793`,
    139: `23`,
    1390: `795`,
    1391: `795`,
    1392: `797`,
    1393: `797`,
    1394: `798`,
    1395: `798`,
    1396: `799`,
    1397: `799`,
    1398: `800`,
    1399: `801`,
    14: `2`,
    140: `23`,
    1400: `801`,
    1401: `801`,
    1402: `802`,
    1403: `802`,
    1404: `804`,
    1405: `804`,
    1406: `805`,
    1407: `805`,
    1408: `806`,
    1409: `806`,
    141: `25`,
    1410: `807`,
    1411: `808`,
    1412: `808`,
    1413: `808`,
    1414: `810`,
    1415: `811`,
    1416: `811`,
    1417: `812`,
    1418: `812`,
    1419: `813`,
    142: `28`,
    1420: `813`,
    1421: `814`,
    1422: `814`,
    1423: `814`,
    1424: `815`,
    1425: `815`,
    1426: `815`,
    1427: `817`,
    1428: `818`,
    1429: `818`,
    143: `28`,
    1430: `819`,
    1431: `820`,
    1432: `820`,
    1433: `821`,
    1434: `821`,
    1435: `822`,
    1436: `822`,
    1437: `823`,
    1438: `824`,
    1439: `826`,
    144: `29`,
    1440: `827`,
    1441: `827`,
    1442: `828`,
    1443: `828`,
    1444: `829`,
    1445: `829`,
    1446: `830`,
    1447: `830`,
    1448: `831`,
    1449: `831`,
    145: `30`,
    1450: `832`,
    1451: `832`,
    1452: `833`,
    1453: `834`,
    1454: `836`,
    1455: `836`,
    1456: `837`,
    1457: `837`,
    1458: `838`,
    1459: `839`,
    146: `30`,
    1460: `842`,
    1461: `842`,
    1462: `842`,
    1463: `843`,
    1464: `843`,
    1465: `844`,
    1466: `845`,
    1467: `845`,
    1468: `845`,
    1469: `846`,
    147: `32`,
    1470: `846`,
    1471: `847`,
    1472: `847`,
    1473: `847`,
    1474: `849`,
    1475: `850`,
    1476: `852`,
    1477: `853`,
    1478: `854`,
    1479: `855`,
    148: `33`,
    1480: `855`,
    1481: `856`,
    1482: `856`,
    1483: `857`,
    1484: `857`,
    1485: `857`,
    1486: `858`,
    1487: `860`,
    1488: `861`,
    1489: `862`,
    149: `33`,
    1490: `862`,
    1491: `862`,
    1492: `863`,
    1493: `864`,
    1494: `864`,
    1495: `865`,
    1496: `865`,
    1497: `865`,
    1498: `866`,
    1499: `868`,
    15: `2`,
    150: `34`,
    1500: `869`,
    1501: `869`,
    1502: `869`,
    1503: `870`,
    1504: `870`,
    1505: `871`,
    1506: `872`,
    1507: `872`,
    1508: `873`,
    1509: `874`,
    151: `35`,
    1510: `874`,
    1511: `875`,
    1512: `876`,
    1513: `876`,
    1514: `877`,
    1515: `878`,
    1516: `878`,
    1517: `879`,
    1518: `880`,
    1519: `880`,
    152: `36`,
    1520: `880`,
    1521: `881`,
    1522: `881`,
    1523: `882`,
    1524: `883`,
    1525: `883`,
    1526: `884`,
    1527: `885`,
    1528: `885`,
    1529: `886`,
    153: `36`,
    1530: `887`,
    1531: `887`,
    1532: `887`,
    1533: `888`,
    1534: `889`,
    1535: `889`,
    1536: `890`,
    1537: `891`,
    1538: `891`,
    1539: `892`,
    154: `36`,
    1540: `893`,
    1541: `893`,
    1542: `894`,
    1543: `895`,
    1544: `895`,
    1545: `896`,
    1546: `897`,
    1547: `897`,
    1548: `898`,
    1549: `899`,
    155: `37`,
    1550: `899`,
    1551: `900`,
    1552: `901`,
    1553: `901`,
    1554: `902`,
    1555: `903`,
    1556: `903`,
    1557: `903`,
    1558: `904`,
    1559: `904`,
    156: `37`,
    1560: `905`,
    1561: `906`,
    1562: `906`,
    1563: `906`,
    1564: `907`,
    1565: `908`,
    1566: `908`,
    1567: `909`,
    1568: `909`,
    1569: `909`,
    157: `38`,
    1570: `910`,
    1571: `911`,
    1572: `911`,
    1573: `912`,
    1574: `914`,
    1575: `915`,
    1576: `915`,
    1577: `916`,
    1578: `918`,
    1579: `919`,
    158: `39`,
    1580: `920`,
    1581: `921`,
    1582: `922`,
    1583: `922`,
    1584: `923`,
    1585: `924`,
    1586: `925`,
    1587: `926`,
    1588: `928`,
    1589: `929`,
    159: `40`,
    1590: `929`,
    1591: `929`,
    1592: `931`,
    1593: `932`,
    1594: `932`,
    1595: `932`,
    1596: `935`,
    1597: `935`,
    1598: `936`,
    1599: `936`,
    16: `2`,
    160: `40`,
    1600: `937`,
    1601: `938`,
    1602: `939`,
    1603: `940`,
    1604: `940`,
    1605: `941`,
    1606: `942`,
    1607: `942`,
    1608: `943`,
    1609: `943`,
    161: `41`,
    1610: `944`,
    1611: `944`,
    1612: `945`,
    1613: `946`,
    1614: `947`,
    1615: `947`,
    1616: `948`,
    1617: `949`,
    1618: `950`,
    1619: `951`,
    162: `41`,
    1620: `951`,
    1621: `952`,
    1622: `953`,
    1623: `954`,
    1624: `956`,
    1625: `957`,
    1626: `957`,
    1627: `957`,
    1628: `958`,
    1629: `958`,
    163: `42`,
    1630: `959`,
    1631: `960`,
    1632: `960`,
    1633: `961`,
    1634: `962`,
    1635: `962`,
    1636: `963`,
    1637: `964`,
    1638: `964`,
    1639: `964`,
    164: `42`,
    1640: `965`,
    1641: `965`,
    1642: `966`,
    1643: `967`,
    1644: `967`,
    1645: `968`,
    1646: `969`,
    1647: `969`,
    1648: `970`,
    1649: `971`,
    165: `42`,
    1650: `971`,
    1651: `972`,
    1652: `973`,
    1653: `973`,
    1654: `974`,
    1655: `975`,
    1656: `975`,
    1657: `975`,
    1658: `976`,
    1659: `977`,
    166: `43`,
    1660: `977`,
    1661: `978`,
    1662: `979`,
    1663: `979`,
    1664: `979`,
    1665: `980`,
    1666: `980`,
    1667: `981`,
    1668: `982`,
    1669: `982`,
    167: `43`,
    1670: `982`,
    1671: `983`,
    1672: `984`,
    1673: `984`,
    1674: `985`,
    1675: `986`,
    1676: `986`,
    1677: `986`,
    1678: `987`,
    1679: `987`,
    168: `44`,
    1680: `988`,
    1681: `989`,
    1682: `989`,
    1683: `989`,
    1684: `990`,
    1685: `991`,
    1686: `991`,
    1687: `992`,
    1688: `992`,
    1689: `992`,
    169: `44`,
    1690: `993`,
    1691: `994`,
    1692: `994`,
    1693: `995`,
    1694: `997`,
    1695: `997`,
    1696: `998`,
    1697: `998`,
    1698: `999`,
    1699: `1000`,
    17: `2`,
    170: `44`,
    1700: `1001`,
    1701: `1001`,
    1702: `1001`,
    1703: `1002`,
    1704: `1002`,
    1705: `1002`,
    1706: `1004`,
    1707: `1005`,
    1708: `1005`,
    1709: `1006`,
    171: `44`,
    1710: `1006`,
    1711: `1006`,
    1712: `1008`,
    1713: `1008`,
    1714: `1009`,
    1715: `1010`,
    1716: `1010`,
    1717: `1011`,
    1718: `1013`,
    1719: `1014`,
    172: `44`,
    1720: `1014`,
    1721: `1015`,
    173: `44`,
    174: `45`,
    175: `45`,
    176: `46`,
    177: `47`,
    178: `48`,
    179: `48`,
    18: `2`,
    180: `49`,
    181: `50`,
    182: `52`,
    183: `52`,
    184: `53`,
    185: `53`,
    186: `53`,
    187: `54`,
    188: `54`,
    189: `55`,
    19: `2`,
    190: `56`,
    191: `57`,
    192: `57`,
    193: `57`,
    194: `57`,
    195: `57`,
    196: `57`,
    197: `57`,
    198: `57`,
    199: `58`,
    2: `2`,
    20: `2`,
    200: `58`,
    201: `58`,
    202: `61`,
    203: `61`,
    204: `62`,
    205: `63`,
    206: `63`,
    207: `65`,
    208: `65`,
    209: `66`,
    21: `2`,
    210: `66`,
    211: `67`,
    212: `68`,
    213: `69`,
    214: `69`,
    215: `69`,
    216: `70`,
    217: `70`,
    218: `71`,
    219: `72`,
    22: `4`,
    220: `73`,
    221: `73`,
    222: `74`,
    223: `74`,
    224: `75`,
    225: `75`,
    226: `75`,
    227: `76`,
    228: `76`,
    229: `77`,
    23: `4`,
    230: `77`,
    231: `77`,
    232: `77`,
    233: `77`,
    234: `77`,
    235: `78`,
    236: `78`,
    237: `79`,
    238: `80`,
    239: `81`,
    24: `5`,
    240: `81`,
    241: `82`,
    242: `83`,
    243: `85`,
    244: `85`,
    245: `86`,
    246: `86`,
    247: `86`,
    248: `87`,
    249: `87`,
    25: `5`,
    250: `88`,
    251: `89`,
    252: `90`,
    253: `90`,
    254: `90`,
    255: `90`,
    256: `90`,
    257: `90`,
    258: `91`,
    259: `91`,
    26: `5`,
    260: `91`,
    261: `93`,
    262: `93`,
    263: `93`,
    264: `94`,
    265: `95`,
    266: `95`,
    267: `97`,
    268: `98`,
    269: `99`,
    27: `6`,
    270: `100`,
    271: `100`,
    272: `101`,
    273: `102`,
    274: `103`,
    275: `104`,
    276: `104`,
    277: `105`,
    278: `105`,
    279: `105`,
    28: `7`,
    280: `108`,
    281: `108`,
    282: `108`,
    283: `108`,
    284: `108`,
    285: `108`,
    286: `108`,
    287: `108`,
    288: `108`,
    289: `108`,
    29: `8`,
    290: `108`,
    291: `108`,
    292: `108`,
    293: `108`,
    294: `108`,
    295: `108`,
    296: `108`,
    297: `108`,
    298: `108`,
    299: `109`,
    3: `2`,
    30: `9`,
    300: `109`,
    301: `110`,
    302: `110`,
    303: `110`,
    304: `113`,
    305: `113`,
    306: `113`,
    307: `113`,
    308: `113`,
    309: `113`,
    31: `10`,
    310: `113`,
    311: `113`,
    312: `113`,
    313: `113`,
    314: `113`,
    315: `114`,
    316: `114`,
    317: `115`,
    318: `115`,
    319: `115`,
    32: `11`,
    320: `118`,
    321: `118`,
    322: `119`,
    323: `120`,
    324: `121`,
    325: `124`,
    326: `124`,
    327: `124`,
    328: `125`,
    329: `125`,
    33: `11`,
    330: `126`,
    331: `127`,
    332: `127`,
    333: `129`,
    334: `129`,
    335: `130`,
    336: `131`,
    337: `132`,
    338: `135`,
    339: `135`,
    34: `12`,
    340: `135`,
    341: `135`,
    342: `135`,
    343: `135`,
    344: `136`,
    345: `136`,
    346: `137`,
    347: `138`,
    348: `140`,
    349: `141`,
    35: `13`,
    350: `144`,
    351: `144`,
    352: `145`,
    353: `146`,
    354: `147`,
    355: `150`,
    356: `150`,
    357: `150`,
    358: `151`,
    359: `151`,
    36: `14`,
    360: `152`,
    361: `153`,
    362: `153`,
    363: `154`,
    364: `154`,
    365: `154`,
    366: `157`,
    367: `157`,
    368: `158`,
    369: `158`,
    37: `14`,
    370: `159`,
    371: `160`,
    372: `160`,
    373: `160`,
    374: `161`,
    375: `161`,
    376: `162`,
    377: `163`,
    378: `164`,
    379: `167`,
    38: `15`,
    380: `167`,
    381: `167`,
    382: `168`,
    383: `168`,
    384: `169`,
    385: `170`,
    386: `170`,
    387: `170`,
    388: `171`,
    389: `171`,
    39: `16`,
    390: `172`,
    391: `172`,
    392: `172`,
    393: `175`,
    394: `175`,
    395: `176`,
    396: `177`,
    397: `178`,
    398: `181`,
    399: `181`,
    4: `2`,
    40: `17`,
    400: `181`,
    401: `182`,
    402: `182`,
    403: `183`,
    404: `184`,
    405: `184`,
    406: `184`,
    407: `185`,
    408: `185`,
    409: `186`,
    41: `18`,
    410: `186`,
    411: `186`,
    412: `188`,
    413: `189`,
    414: `189`,
    415: `190`,
    416: `190`,
    417: `190`,
    418: `190`,
    419: `190`,
    42: `19`,
    420: `190`,
    421: `190`,
    422: `190`,
    423: `190`,
    424: `190`,
    425: `191`,
    426: `191`,
    427: `192`,
    428: `193`,
    429: `194`,
    43: `21`,
    430: `194`,
    431: `195`,
    432: `195`,
    433: `196`,
    434: `196`,
    435: `197`,
    436: `197`,
    437: `199`,
    438: `199`,
    439: `200`,
    44: `21`,
    440: `200`,
    441: `201`,
    442: `202`,
    443: `202`,
    444: `203`,
    445: `203`,
    446: `204`,
    447: `204`,
    448: `205`,
    449: `206`,
    45: `21`,
    450: `206`,
    451: `207`,
    452: `208`,
    453: `208`,
    454: `208`,
    455: `209`,
    456: `209`,
    457: `210`,
    458: `210`,
    459: `211`,
    46: `21`,
    460: `212`,
    461: `212`,
    462: `214`,
    463: `214`,
    464: `215`,
    465: `215`,
    466: `216`,
    467: `217`,
    468: `218`,
    469: `218`,
    47: `21`,
    470: `219`,
    471: `220`,
    472: `221`,
    473: `221`,
    474: `222`,
    475: `223`,
    476: `223`,
    477: `224`,
    478: `225`,
    479: `226`,
    48: `21`,
    480: `226`,
    481: `227`,
    482: `228`,
    483: `228`,
    484: `228`,
    485: `229`,
    486: `230`,
    487: `230`,
    488: `231`,
    489: `232`,
    49: `21`,
    490: `233`,
    491: `233`,
    492: `234`,
    493: `235`,
    494: `236`,
    495: `236`,
    496: `237`,
    497: `238`,
    498: `239`,
    499: `239`,
    5: `2`,
    50: `21`,
    500: `240`,
    501: `241`,
    502: `241`,
    503: `242`,
    504: `243`,
    505: `244`,
    506: `244`,
    507: `245`,
    508: `246`,
    509: `246`,
    51: `21`,
    510: `246`,
    511: `247`,
    512: `248`,
    513: `248`,
    514: `249`,
    515: `250`,
    516: `251`,
    517: `252`,
    518: `252`,
    519: `254`,
    52: `21`,
    520: `254`,
    521: `255`,
    522: `255`,
    523: `256`,
    524: `257`,
    525: `257`,
    526: `258`,
    527: `258`,
    528: `258`,
    529: `259`,
    53: `21`,
    530: `260`,
    531: `261`,
    532: `262`,
    533: `262`,
    534: `262`,
    535: `263`,
    536: `264`,
    537: `265`,
    538: `265`,
    539: `266`,
    54: `21`,
    540: `267`,
    541: `267`,
    542: `268`,
    543: `269`,
    544: `270`,
    545: `271`,
    546: `271`,
    547: `272`,
    548: `273`,
    549: `274`,
    55: `21`,
    550: `276`,
    551: `276`,
    552: `276`,
    553: `278`,
    554: `278`,
    555: `279`,
    556: `279`,
    557: `279`,
    558: `280`,
    559: `280`,
    56: `21`,
    560: `280`,
    561: `282`,
    562: `283`,
    563: `283`,
    564: `284`,
    565: `284`,
    566: `284`,
    567: `284`,
    568: `284`,
    569: `284`,
    57: `21`,
    570: `284`,
    571: `284`,
    572: `284`,
    573: `284`,
    574: `285`,
    575: `285`,
    576: `286`,
    577: `287`,
    578: `288`,
    579: `288`,
    58: `21`,
    580: `289`,
    581: `289`,
    582: `290`,
    583: `291`,
    584: `291`,
    585: `292`,
    586: `292`,
    587: `293`,
    588: `293`,
    589: `295`,
    59: `21`,
    590: `295`,
    591: `296`,
    592: `297`,
    593: `297`,
    594: `298`,
    595: `299`,
    596: `299`,
    597: `299`,
    598: `300`,
    599: `301`,
    6: `2`,
    60: `21`,
    600: `301`,
    601: `302`,
    602: `303`,
    603: `303`,
    604: `304`,
    605: `305`,
    606: `305`,
    607: `307`,
    608: `307`,
    609: `308`,
    61: `21`,
    610: `308`,
    611: `309`,
    612: `310`,
    613: `311`,
    614: `311`,
    615: `312`,
    616: `313`,
    617: `313`,
    618: `314`,
    619: `315`,
    62: `21`,
    620: `316`,
    621: `316`,
    622: `317`,
    623: `318`,
    624: `319`,
    625: `319`,
    626: `320`,
    627: `321`,
    628: `321`,
    629: `321`,
    63: `21`,
    630: `322`,
    631: `323`,
    632: `323`,
    633: `324`,
    634: `325`,
    635: `325`,
    636: `326`,
    637: `327`,
    638: `327`,
    639: `327`,
    64: `21`,
    640: `328`,
    641: `329`,
    642: `329`,
    643: `330`,
    644: `331`,
    645: `331`,
    646: `332`,
    647: `333`,
    648: `334`,
    649: `334`,
    65: `21`,
    650: `335`,
    651: `336`,
    652: `336`,
    653: `336`,
    654: `337`,
    655: `338`,
    656: `338`,
    657: `339`,
    658: `339`,
    659: `340`,
    66: `21`,
    660: `340`,
    661: `340`,
    662: `342`,
    663: `342`,
    664: `343`,
    665: `344`,
    666: `345`,
    667: `345`,
    668: `346`,
    669: `346`,
    67: `21`,
    670: `347`,
    671: `347`,
    672: `348`,
    673: `349`,
    674: `356`,
    675: `356`,
    676: `357`,
    677: `357`,
    678: `358`,
    679: `359`,
    68: `21`,
    680: `366`,
    681: `366`,
    682: `367`,
    683: `367`,
    684: `368`,
    685: `369`,
    686: `370`,
    687: `370`,
    688: `371`,
    689: `371`,
    69: `21`,
    690: `372`,
    691: `373`,
    692: `374`,
    693: `374`,
    694: `375`,
    695: `375`,
    696: `375`,
    697: `376`,
    698: `376`,
    699: `377`,
    7: `2`,
    70: `21`,
    700: `377`,
    701: `378`,
    702: `379`,
    703: `379`,
    704: `381`,
    705: `381`,
    706: `382`,
    707: `382`,
    708: `383`,
    709: `384`,
    71: `21`,
    710: `385`,
    711: `385`,
    712: `386`,
    713: `386`,
    714: `386`,
    715: `389`,
    716: `389`,
    717: `390`,
    718: `390`,
    719: `391`,
    72: `21`,
    720: `392`,
    721: `397`,
    722: `397`,
    723: `398`,
    724: `398`,
    725: `398`,
    726: `399`,
    727: `399`,
    728: `400`,
    729: `400`,
    73: `21`,
    730: `401`,
    731: `402`,
    732: `402`,
    733: `404`,
    734: `404`,
    735: `405`,
    736: `405`,
    737: `406`,
    738: `406`,
    739: `407`,
    74: `21`,
    740: `408`,
    741: `409`,
    742: `410`,
    743: `410`,
    744: `411`,
    745: `411`,
    746: `412`,
    747: `413`,
    748: `414`,
    749: `414`,
    75: `21`,
    750: `414`,
    751: `415`,
    752: `415`,
    753: `416`,
    754: `417`,
    755: `418`,
    756: `418`,
    757: `419`,
    758: `420`,
    759: `421`,
    76: `21`,
    760: `421`,
    761: `422`,
    762: `422`,
    763: `422`,
    764: `422`,
    765: `422`,
    766: `422`,
    767: `422`,
    768: `422`,
    769: `422`,
    77: `21`,
    770: `422`,
    771: `423`,
    772: `423`,
    773: `424`,
    774: `425`,
    775: `426`,
    776: `426`,
    777: `427`,
    778: `427`,
    779: `428`,
    78: `21`,
    780: `428`,
    781: `429`,
    782: `429`,
    783: `430`,
    784: `430`,
    785: `431`,
    786: `431`,
    787: `432`,
    788: `433`,
    789: `433`,
    79: `21`,
    790: `434`,
    791: `434`,
    792: `435`,
    793: `435`,
    794: `436`,
    795: `436`,
    796: `436`,
    797: `438`,
    798: `439`,
    799: `439`,
    8: `2`,
    80: `21`,
    800: `440`,
    801: `440`,
    802: `440`,
    803: `440`,
    804: `440`,
    805: `440`,
    806: `440`,
    807: `440`,
    808: `440`,
    809: `440`,
    81: `21`,
    810: `441`,
    811: `441`,
    812: `442`,
    813: `443`,
    814: `444`,
    815: `444`,
    816: `445`,
    817: `445`,
    818: `446`,
    819: `446`,
    82: `21`,
    820: `447`,
    821: `447`,
    822: `448`,
    823: `448`,
    824: `448`,
    825: `450`,
    826: `450`,
    827: `451`,
    828: `451`,
    829: `451`,
    83: `21`,
    830: `454`,
    831: `455`,
    832: `455`,
    833: `456`,
    834: `456`,
    835: `456`,
    836: `456`,
    837: `456`,
    838: `456`,
    839: `456`,
    84: `21`,
    840: `456`,
    841: `456`,
    842: `456`,
    843: `457`,
    844: `457`,
    845: `458`,
    846: `459`,
    847: `459`,
    848: `459`,
    849: `460`,
    85: `21`,
    850: `461`,
    851: `462`,
    852: `462`,
    853: `463`,
    854: `464`,
    855: `464`,
    856: `464`,
    857: `465`,
    858: `465`,
    859: `466`,
    86: `21`,
    860: `466`,
    861: `467`,
    862: `468`,
    863: `468`,
    864: `469`,
    865: `469`,
    866: `470`,
    867: `470`,
    868: `471`,
    869: `472`,
    87: `21`,
    870: `472`,
    871: `473`,
    872: `473`,
    873: `474`,
    874: `474`,
    875: `475`,
    876: `475`,
    877: `476`,
    878: `476`,
    879: `476`,
    88: `21`,
    880: `478`,
    881: `478`,
    882: `479`,
    883: `479`,
    884: `480`,
    885: `480`,
    886: `481`,
    887: `482`,
    888: `483`,
    889: `483`,
    89: `21`,
    890: `484`,
    891: `484`,
    892: `485`,
    893: `486`,
    894: `487`,
    895: `487`,
    896: `488`,
    897: `488`,
    898: `489`,
    899: `489`,
    9: `2`,
    90: `21`,
    900: `490`,
    901: `491`,
    902: `491`,
    903: `492`,
    904: `492`,
    905: `493`,
    906: `493`,
    907: `493`,
    908: `494`,
    909: `494`,
    91: `21`,
    910: `495`,
    911: `495`,
    912: `495`,
    913: `495`,
    914: `495`,
    915: `495`,
    916: `496`,
    917: `496`,
    918: `497`,
    919: `498`,
    92: `21`,
    920: `499`,
    921: `499`,
    922: `500`,
    923: `501`,
    924: `502`,
    925: `502`,
    926: `503`,
    927: `504`,
    928: `505`,
    929: `505`,
    93: `21`,
    930: `506`,
    931: `507`,
    932: `509`,
    933: `509`,
    934: `510`,
    935: `510`,
    936: `510`,
    937: `511`,
    938: `511`,
    939: `512`,
    94: `21`,
    940: `513`,
    941: `514`,
    942: `514`,
    943: `515`,
    944: `516`,
    945: `516`,
    946: `516`,
    947: `517`,
    948: `518`,
    949: `519`,
    95: `21`,
    950: `519`,
    951: `520`,
    952: `520`,
    953: `521`,
    954: `521`,
    955: `522`,
    956: `522`,
    957: `523`,
    958: `523`,
    959: `523`,
    96: `21`,
    960: `524`,
    961: `526`,
    962: `526`,
    963: `527`,
    964: `527`,
    965: `528`,
    966: `528`,
    967: `528`,
    968: `529`,
    969: `529`,
    97: `21`,
    970: `530`,
    971: `530`,
    972: `531`,
    973: `532`,
    974: `532`,
    975: `533`,
    976: `533`,
    977: `534`,
    978: `534`,
    979: `535`,
    98: `21`,
    980: `536`,
    981: `536`,
    982: `537`,
    983: `537`,
    984: `538`,
    985: `538`,
    986: `539`,
    987: `540`,
    988: `544`,
    989: `544`,
    99: `21`,
    990: `545`,
    991: `545`,
    992: `546`,
    993: `547`,
    994: `548`,
    995: `548`,
    996: `549`,
    997: `550`,
    998: `551`,
    999: `551`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 172,
  unsupported: [],
  version: 13,
  warnings: [`API Borrower_close may use up to 5 accounts, but the limit is 4. API Borrower_close starts at /app/src/contracts/loan_algo_nnt.rsh:53:62:application.`, `API Lender_lend may use up to 5 accounts, but the limit is 4. API Lender_lend starts at /app/src/contracts/loan_algo_nnt.rsh:53:62:application.`, `Step 1 may use up to 5 accounts, but the limit is 4. Step 1 starts at /app/src/contracts/loan_algo_nnt.rsh:50:11:dot.`, `Step 5 may use up to 5 accounts, but the limit is 4. Step 5 starts at /app/src/contracts/loan_algo_nnt.rsh:53:62:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2619","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1040","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1118","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v757","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v790","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v947","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2608","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2622","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_237","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_237","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_237","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2625","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2628","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002e3b38819003601f8101601f191683016001600160401b0381118482101762000530578392829160405283398101039060e0821262000634576080604051926200004d8462000639565b825184526200005f6020840162000671565b602085015260408301516040850152605f190112620006345760c060405191620000898362000639565b620000976060820162000671565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005305760009161012091604052828152826020820152826040820152620000fa62000686565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906040820182811060018060401b0382111762000530576040526200014762000686565b825262000153620006a7565b602083015260ff600454166200061b577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528351602082015260018060a01b03602085015116604082015260408401516060820152620001c460608501516080830190620006ee565ba1805180159081156200060e575b5015620005f557600082515260006020835101526000604083510152815160208301515234620005dc576060810151602060608201519101511115620005c3576040519160e08301906001600160401b0382118483101762000530576020916040526000845260008285015260006040850152604051620002538162000639565b60008152600083820152600060408201526000606082015260608501526200027a620006a7565b6080850152600060a0850152600060c085015233845260018060a01b0382840151168285015260408301516040850152606083015160608501520151805160406020820151910151151560405191620002d38362000655565b6000835260208301526040820152620002eb620006a7565b9160005b6001811062000573578560206060878787815260808501528180820151015160a08501520151015160c08201526001600055436001556040519060018060a01b03815116602083015260018060a01b036020820151166040830152604081015160608301526200036860608201516080840190620006ee565b6080810151600061010084015b60018210620005465760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005305760405280516001600160401b0381116200053057600254600181811c9116801562000525575b60208210146200050f57601f8111620004a5575b50602091601f82116001146200043b579181926000926200042f575b50508160011b916000199060031b1c1916176002555b6040516126f89081620007438239f35b01519050828062000409565b601f19821692600260005260206000209160005b8581106200048c5750836001951062000472575b505050811b016002556200041f565b015160001960f88460031b161c1916905582808062000463565b919260206001819286850151815501940192016200044f565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000504575b601f0160051c01905b818110620004f75750620003ed565b60008155600101620004e8565b9091508190620004df565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003d9565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000375565b6200057f81836200071a565b516200058c82866200071a565b526200059981856200071a565b506000198114620005ad57600101620002ef565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d2565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200053057604052565b606081019081106001600160401b038211176200053057604052565b51906001600160a01b03821682036200063457565b60405190620006958262000655565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000530576040528260005b828110620006d757505050565b8290620006e362000686565b8184015201620006ca565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200072c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610828565b61000e565b506100ca6107ba565b506100ca610745565b506100ca61069b565b506100ca61064d565b506100ca6105ce565b506100ca6105af565b506100ca610570565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610b04565b6005600054036101975760e0602091608061018861017a6109bd565b858082518301019101610d26565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610b04565b604051906101f682610905565b600435825260803660231901126101b057604051916102148361092d565b6024359260038410156101b05761026193815260443561023381610c94565b602082015261024136612514565b604082015260843561025281610c94565b60608201526020820152610efd565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610b04565b6005600054036102a75760c060209160e061018861017a6109bd565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610b04565b61030d816102e5611cfd565b85810190600082515251151586825101526102fe611cfd565b90600082525186820152611f02565b01511515604051908152f35b50346101b05760003660031901126101b057610333610b04565b60056000540361037a5761012061026d916101606103616103526109bd565b60208082518301019101610d26565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103a9610b04565b5061055a6103b636612534565b916103c560016000541461139a565b6105476103e16103d36109bd565b838082518301019101612554565b6103fc6103f76103f360045460ff1690565b1590565b6113ba565b60408051338152865160208201529095610446917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908890a1518015908115610564575b506113da565b61045034156113fa565b8281019261054260806104638651610c74565b9361047c6104778a830196875190336125ee565b61141a565b6104983360018060a01b036104918451610c74565b161461143a565b6104c86104c06104a6611eab565b986104ba6104b48551610c74565b8b610eee565b51610c74565b858901610eee565b60608101518988015260a0810151606088015260c0810151828801526104f160a0880160019052565b6105076104fe8251610c74565b60c08901610eee565b600060e0880152436101008801520151918251938451905101938882820151910151151591610534610a68565b958652850152151587840152565b61266e565b61012082015260006101408201526122bf565b5160008152602090f35b90506001541438610440565b5060003660031901126101b057602060a0610589610b04565b61030d81610595611cfd565b8581019060018251525115156040825101526102fe611cfd565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105e3610b04565b604051906105f082610905565b600435825260603660231901126101b0576040519161060e83610948565b6024359260028410156101b05761026193815260443561062d81610c94565b602082015260643561063e81610c94565b60408201526020820152611f02565b5060003660031901126101b05760206080610666610b04565b61030d81610672610bbc565b85810190600282515251151560608251015261068c610bbc565b90600082525186820152610efd565b50346101b05760003660031901126101b05761026d6106f86101006106be610b04565b600054600781101561070a5760056106d6911461147a565b6106e96106f060a06106e96103526109bd565b0151151590565b151582840152565b60405190151581529081906020820190565b6007610716911461145a565b6107406101406107366107276109bd565b60208082518301019101611d66565b0151151582840152565b6106e9565b50346101b0576000806003193601126107b75780546107626109bd565b906040519283918252602090604082840152835191826040850152815b8381106107a057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161077f565b80fd5b5060003660031901126101b0576020806107d2610b04565b61030d816107de610bbc565b84810190600082515251151585825101526107f7610bbc565b90600082525185820152610efd565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b05761083d610ac7565b5061026d606061084b610b04565b6108a68160405161085b81610905565b60405161086781610963565b600081528152602081019061087a610b89565b8252600435815152600182515251604082510152610896610bbc565b9060008252516020820152610efd565b015160405191829182610806565b90600182811c921680156108e4575b60208310146108ce57565b634e487b7160e01b600052602260045260246000fd5b91607f16916108c3565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761092057604052565b6109286108ee565b604052565b608081019081106001600160401b0382111761092057604052565b606081019081106001600160401b0382111761092057604052565b602081019081106001600160401b0382111761092057604052565b61016081019081106001600160401b0382111761092057604052565b601f909101601f19168101906001600160401b0382119082101761092057604052565b60405190600082600254916109d1836108b4565b808352600193808516908115610a4757506001146109f9575b506109f79250038361099a565b565b600260009081526000805160206126cc83398151915294602093509091905b818310610a2f5750506109f79350820101386109ea565b85548884018501529485019487945091830191610a18565b90506109f794506020925060ff191682840152151560051b820101386109ea565b60405190606082016001600160401b0381118382101761092057604052565b6040519061018082016001600160401b0381118382101761092057604052565b6040519061016082016001600160401b0381118382101761092057604052565b60405190606082016001600160401b03811183821017610af7575b60405260006040838281528260208201520152565b610aff6108ee565b610ae2565b6040519061014082016001600160401b03811183821017610b69575b60405281610120600091828152826020820152826040820152610b41610ac7565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b716108ee565b610b20565b60405190610b8382610963565b60008252565b60405190610b968261092d565b6000606083828152826020820152604051610bb081610963565b83815260408201520152565b60405190610bc982610905565b81600081526020610bd8610b89565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610bfe57565b6109f7610bdd565b604051610100810191906001600160401b03831181841017610c67575b826040528092610c3281610963565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610bd8610ac7565b610c6f6108ee565b610c23565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109f782610c94565b9080601f830112156101b057604091825192610cc484610963565b83606093848401938185116101b057915b848310610ce55750505050505090565b85838303126101b05783518691610cfb82610948565b84518252602091828601518382015286860151610d1781610c94565b87820152815201920191610cd5565b6101c0818303126101b0576101a0610dd791610d40610a87565b93610d4a82610c80565b8552610d5860208301610c80565b602086015260408201516040860152610d7360608301610c80565b606086015260808201516080860152610d8e60a08301610c9e565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610dc161012091828401610ca9565b9085015261018081015161014085015201610c9e565b61016082015290565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015610e3d575b60408501526020810151151582850152604081015151608085015201511515910152565b610e45610bdd565b610e19565b516003811015610e575790565b610e5f610bdd565b90565b60405190610e6f82610963565b8160005b60208110610e7f575050565b602090610e8a610ac7565b8184015201610e73565b60405190610ea18261097e565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610ee4610e62565b6101208201520152565b6001600160a01b039091169052565b90610f06610c06565b610f1460056000541461149a565b610f1c6109bd565b91610f31602093848082518301019101610d26565b91610f49610f446103f360045460ff1690565b6114ba565b836040957f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f961875180610f7c843383610ded565b0390a1610f9481518015908115611340575b506114da565b0190610fa08251610e4a565b610fa981610bf4565b6110a1575050926000836109f795610fc1341561159a565b8351600081527f26a3a08b70de3687de302893b53fcb62192538c8863ce8ef9b1ce56b6ca4294a9080602081015b0390a10152611027610fff610e94565b9361101361100d8551610c74565b86610eee565b61101f81850151610c74565b908501610eee565b808201519083015261104861103f6060830151610c74565b60608401610eee565b6080810151608083015261106b61106260a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e083015243610100830152610120808201519083015261014080910151908201526119b5565b60016110af83979351610e4a565b6110b881610bf4565b036112cf57816109f79651015181526110e36110dc6110d78651610c74565b610c74565b331461151a565b6101009182850151906110fd60c08701928351101561153a565b8251519461111160e0880196875190611363565b9060606111b68a870198848a52858b019485511099611135878a019b8c9015159052565b8a51156112c4576111498151875190611385565b848a01525b6111876111618a5151868c015190611385565b9b6111748d60808d019e8f52341461155a565b6111818a5143111561157a565b51151590565b156112b75751855161119891611385565b60a08901525b516111b088515160a08a015190611385565b90611363565b956111d460e060c0830198808a528651111592019182519015159052565b86518b82510152835185825101527fef4ca4265d51cd6cee0f583a13018735428dcbfdf9f6b8e47fc1167621578f416112138251875191829182610806565b0390a151910152611247611225610e94565b986112336104b48a51610c74565b61123f818a0151610c74565b908a01610eee565b519087015261126561125c6060870151610c74565b60608801610eee565b6080850151608087015261128861127f60a0870151151590565b151560a0880152565b5160c08601525160e08501524390840152610120808301519084015261014080920151905101908201526119b5565b50600060a089015261119e565b6000848a015261114e565b5090936112de60029151610e4a565b6112e781610bf4565b146112f3575b50505050565b600060806113379561130534156114fa565b8351600081527f56b99fc5ece90a970f1f0631dc528d3bd43874b6be4fe12874a210b064afbf07908060208101610fef565b388080806112ed565b90506001541438610f8e565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611378575b82106101b057565b61138061134c565b611370565b9081039081116113925790565b610e5f61134c565b156113a157565b60405163100960cb60e01b815260106004820152602490fd5b156113c157565b60405163100960cb60e01b815260116004820152602490fd5b156113e157565b60405163100960cb60e01b815260126004820152602490fd5b1561140157565b60405163100960cb60e01b815260136004820152602490fd5b1561142157565b60405163100960cb60e01b815260146004820152602490fd5b1561144157565b60405163100960cb60e01b815260156004820152602490fd5b1561146157565b60405163100960cb60e01b8152600a6004820152602490fd5b1561148157565b60405163100960cb60e01b815260096004820152602490fd5b156114a157565b60405163100960cb60e01b815260166004820152602490fd5b156114c157565b60405163100960cb60e01b815260176004820152602490fd5b156114e157565b60405163100960cb60e01b815260186004820152602490fd5b1561150157565b60405163100960cb60e01b8152601e6004820152602490fd5b1561152157565b60405163100960cb60e01b8152601a6004820152602490fd5b1561154157565b60405163100960cb60e01b8152601b6004820152602490fd5b1561156157565b60405163100960cb60e01b8152601c6004820152602490fd5b1561158157565b60405163100960cb60e01b8152601d6004820152602490fd5b156115a157565b60405163100960cb60e01b815260196004820152602490fd5b156115c157565b60405163100960cb60e01b8152601f6004820152602490fd5b156115e157565b60405163100960cb60e01b815260206004820152602490fd5b1561160157565b60405163100960cb60e01b815260216004820152602490fd5b1561162157565b60405163100960cb60e01b815260236004820152602490fd5b1561164157565b60405163100960cb60e01b815260226004820152602490fd5b90600181101561166b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110611699575050565b6000815560010161168e565b6116b06002546108b4565b806116b85750565b601f81116001146116cb57506000600255565b600260005261171090601f0160051c6000805160206126cc833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61168e565b6000602081208160025555565b6040519061018082016001600160401b03811183821017611790575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015261177f610e62565b610120820152826101408201520152565b6117986108ee565b611739565b6000915b600183106117ae57505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906117a1565b6109f7909291926101a06101606101c08301956117fb848251610de0565b61180d60208201516020860190610de0565b6040810151604085015261182960608201516060860190610de0565b6080810151608085015261184660a082015160a086019015159052565b60c081015160c085015260e081015160e08501526101008082015190850152611878610120808301519086019061179d565b61014081015161018085015201511515910152565b90601f821161189a575050565b6109f79160026000526020600020906020601f840160051c830193106118c8575b601f0160051c019061168e565b90915081906118bb565b80519091906001600160401b0381116119a8575b6118fa816118f56002546108b4565b61188d565b602080601f8311600114611936575081929360009261192b575b50508160011b916000199060031b1c191617600255565b015190503880611914565b6002600052601f198316949091906000805160206126cc833981519152926000905b878210611990575050836001959610611977575b505050811b01600255565b015160001960f88460031b161c1916905538808061196c565b80600185968294968601518155019501930190611958565b6119b06108ee565b6118e6565b6119bd610b76565b60e082018051604084018051919091118352919261010080820180519560c0840196875111600090600014611bca5750805115155b15611aec575093611ae7936109f79693611ab793611ad997611a1261171d565b96611a26611a208551610c74565b89610eee565b611a3f611a366020860151610c74565b60208a01610eee565b85516040890152611a5f611a566060860151610c74565b60608a01610eee565b60808401516080890152611a82611a7960a0860151151590565b151560a08a0152565b5160c0880152835160e08801525190860152610120818101519086015261014090810151908501525190511115610160830152565b611ac16005600055565b611aca43600155565b604051928391602083016117dd565b03601f19810183528261099a565b6118d2565b9150506000945084935083925081611b4a611b0b602086950151610c74565b92611b168151151590565b8514611bb757611181611b2c6060850151610c74565b945b61012085015151516001600160a01b0396909190871690611bcf565b8314611ba157610140611b5d8251610c74565b915b01519183918315611b97575b1690f115611b8a575b60008055611b826000600155565b6109f76116a5565b611b92611681565b611b74565b6108fc9250611b6b565b610140611bb16060830151610c74565b91611b5f565b611181611bc48451610c74565b94611b2e565b6119f2565b60009190611c3493838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152611c0d8161092d565b5193165af1611c24611c1d611c3b565b8092611c9d565b5060208082518301019101611c88565b156101b057565b3d15611c83573d906001600160401b038211611c76575b60405191611c6a601f8201601f19166020018461099a565b82523d6000602084013e565b611c7e6108ee565b611c52565b606090565b908160209103126101b05751610e5f81610c94565b15611ca55790565b805115611cb457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15611cd55790565b805115611ce457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60405190611d0a82610905565b81600081526020610bd8610ac7565b60021115610bfe57565b91908260809103126101b057604051611d3b8161092d565b6060808294611d4981610c80565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b057611e1f6101e0611d80610aa7565b93611d8a81610c80565b8552611d9860208201610c80565b6020860152611daa8460408301611d23565b604086015260c0810151606086015260e08101516080860152610100611dd1818301610c9e565b60a087015261012090611de5828401610c80565b60c0880152611e0b61014096611dfc888601610c9e565b60e08a01526101608501610ca9565b908701526101c08201519086015201610c9e565b9082015290565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611e6c575b8285015260208101511515606085015201511515910152565b611e74610bdd565b611e53565b516002811015610e575790565b60405190611e938261092d565b60006060838281528260208201528260408201520152565b60405190611eb88261097e565b81610140600091828152826020820152611ed0611e86565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610ee4610e62565b90611f116007600054146115ba565b611f196109bd565b90611f2e602092838082518301019101611d66565b90611f46611f416103f360045460ff1690565b6115da565b826040947fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa865180611f79843383611e26565b0390a1611f9181518015908115612178575b506115fa565b01611f9c8151611e79565b611fa581611d19565b61206b5750926000816109f795611fbc341561163a565b8151600081527fb188b0e33b683fd24a6adfd3fff966bf5be52b89bb092f35fb829c7a755cc0bb90602090a10152611ff5610fff611eab565b80820151908301526060810151606083015260808101516080830152600060a083015261203161202860c0830151610c74565b60c08401610eee565b61204a61204160e0830151151590565b151560e0840152565b610100438184015281015190610120918284015201516101408201526122bf565b61207a60019193929351611e79565b61208381611d19565b1461208e5750505050565b611337936120db60a060608401946120a88651341461161a565b8351600181527f8b7c04b80da66f78012eb5ea464906a9d795c02c8240d02a6cee08ace14eb4a090602090a10160019052565b61210e6120e6611eab565b946120fa6120f48551610c74565b87610eee565b61210681850151610c74565b908601610eee565b8082015190840152815160608401526080810151608084015261214061213760a0830151151590565b151560a0850152565b61214d3360c08501610eee565b600160e0840152610100438185015281015190610120918285015201519051016101408201526122bf565b90506001541438611f8b565b604051906121918261097e565b816101406000918281528260208201526121a9611e86565b60408201528260608201528260808201528260a08201528260c08201528260e08201526121d4610e62565b610100820152826101208201520152565b6109f7909291926101e0610200820194612200838251610de0565b61221260208201516020850190610de0565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190612270610100928386019015159052565b60c08101516122856101209182870190610de0565b6122ad60e08301519361229f610140958689019015159052565b83015161016087019061179d565b8101516101c085015201511515910152565b60e081018051151580156125085760005b156123a6575050611ad9611ae76109f7926123846122ec612184565b916123006122fa8251610c74565b84610eee565b6123196123106020830151610c74565b60208501610eee565b60408101516040840152606081015160608401526080810151608084015261234460a0840160019052565b61235d61235460c0830151610c74565b60c08501610eee565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b61238e6007600055565b61239743600155565b604051928391602083016121e5565b15612494576000826123be6110d76109f79551610c74565b908280808061014095868601519082821561248b575bf11561247e575b6123e3610e94565b936123f161100d8351610c74565b61240a6124016020840151610c74565b60208701610eee565b6080820151604086015261242d61242460c0840151610c74565b60608701610eee565b6101009061244861127f83850192835160808a015251151590565b61245b8151604080860151015190611363565b60c08701528460e0870152519085015261012080910151908401528201526119b5565b612486611681565b6123db565b506108fc6123d4565b5060008080836124cf6124ab602084970151610c74565b6124b58351610c74565b6101208401515151916001600160a01b0390911690611bcf565b6101406124df6110d78351610c74565b910151908282156124ff575bf115611b8a5760008055611b826000600155565b506108fc6124eb565b60a083015115156122d0565b60209060631901126101b0576040519061252d82610963565b6064358252565b60209060031901126101b0576040519061254d82610963565b6004358252565b610180818303126101b0576040519161016091906125c79060e085016001600160401b038111868210176125e1575b60405261258f83610c80565b855261259d60208401610c80565b6020860152604083015160408601526125b98160608501611d23565b606086015260e08301610ca9565b608084015261014081015160a0840152015160c082015290565b6125e96108ee565b612583565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610e5f936000938493909284919060a081016001600160401b03811182821017612661575b6040525193165af1611c2461265a611c3b565b8092611ccd565b6126696108ee565b612647565b9190612678610e62565b9260005b6001811061268a5750508252565b806126976001928461165a565b516126a2828861165a565b526126ad818761165a565b5060001981146126be575b0161267c565b6126c661134c565b6126b856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 11835,
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
