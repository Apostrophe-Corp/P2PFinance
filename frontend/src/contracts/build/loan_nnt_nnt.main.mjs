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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const LoanViews_amountPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v816, v817, v818, v819, v820, v829, v833, v834] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = svs;
      return (await ((async () => {
        
        
        return v1058;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v816, v817, v818, v819, v820, v829, v833, v834] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = svs;
      return (await ((async () => {
        
        
        return v851;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v816, v817, v818, v819, v820, v829, v833, v834] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = svs;
      return (await ((async () => {
        
        
        return v1018;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = svs;
      return (await ((async () => {
        
        
        return v880;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v816, v817, v818, v819, v820, v829, v833, v834] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = svs;
      return (await ((async () => {
        
        
        return v1089;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = svs;
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
      1: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]
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
  const ctc10 = stdlib.T_Data({
    Borrower_claimRefund0_285: ctc6,
    Borrower_repay0_285: ctc9,
    Lender_claim0_285: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v790 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v791 = [v790, v790];
  const v797 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_nnt.rsh:44:43:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v798 = v797.address;
  const v799 = v797.amount;
  const v800 = v797.collateral;
  const v801 = v797.maturation;
  const v802 = v797.principal;
  const v803 = v797.tokCollateral;
  const v804 = v797.tokLoan;
  const v812 = stdlib.lt(v802, v799);
  stdlib.assert(v812, {
    at: './src/contracts/loan_nnt_nnt.rsh:46:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v813 = stdlib.tokenEq(v803, v804);
  const v814 = v813 ? false : true;
  stdlib.assert(v814, {
    at: './src/contracts/loan_nnt_nnt.rsh:47:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v815 = {
    address: v798,
    amount: v799,
    maturation: v801,
    principal: v802
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v803, v804, v800, v815],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v817, v818, v819, v820], secs: v822, time: v821, didSend: v51, from: v816 } = txn1;
      
      const v823 = v791[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v824 = stdlib.Array_set(v823, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v825 = stdlib.Array_set(v791, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v824);
      const v827 = v825[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
      const v828 = stdlib.Array_set(v827, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v829 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v828);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v817
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v818
        });
      ;
      const v833 = v820.principal;
      const v834 = v820.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v817, v818, v819, v820], secs: v822, time: v821, didSend: v51, from: v816 } = txn1;
  const v823 = v791[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v824 = stdlib.Array_set(v823, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v825 = stdlib.Array_set(v791, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v824);
  const v827 = v825[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
  const v828 = stdlib.Array_set(v827, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v829 = stdlib.Array_set(v825, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v828);
  const v831 = stdlib.tokenEq(v818, v817);
  const v832 = v831 ? false : true;
  stdlib.assert(v832, {
    at: './src/contracts/loan_nnt_nnt.rsh:49:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v833 = v820.principal;
  const v834 = v820.amount;
  const v835 = stdlib.lt(v833, v834);
  stdlib.assert(v835, {
    at: './src/contracts/loan_nnt_nnt.rsh:50:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v816, v817, v818, v819, v820, v829, v833, v834],
    evt_cnt: 0,
    funcNum: 1,
    lct: v821,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), [[v819, v817]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v838, time: v837, didSend: v61, from: v836 } = txn2;
      
      ;
      const v839 = v829[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v840 = v839[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v841 = stdlib.add(v840, v819);
      const v843 = stdlib.Array_set(v839, '0', v841);
      const v844 = stdlib.Array_set(v829, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v843);
      sim_r.txns.push({
        amt: v819,
        kind: 'to',
        tok: v817
        });
      
      const v848 = true;
      const v849 = v816;
      const v850 = false;
      const v851 = v837;
      const v857 = v844;
      const v858 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v874 = v850 ? false : v848;
        
        return v874;})()) {
        const v879 = v850 ? false : v848;
        const v880 = v879 ? true : v850;
        sim_r.isHalt = false;
        }
      else {
        const v1017 = v850 ? false : v848;
        const v1018 = v1017 ? true : v850;
        if (v850) {
          const v1044 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v1045 = v1044[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v1051 = stdlib.sub(v1045, v1045);
          const v1053 = stdlib.Array_set(v1044, '0', v1051);
          const v1054 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v1053);
          sim_r.txns.push({
            kind: 'from',
            to: v816,
            tok: v818
            });
          const v1056 = v820.maturation;
          const v1057 = stdlib.safeAdd(v851, v1056);
          const v1058 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v1059 = v851;
          const v1065 = v1054;
          const v1066 = v858;
          
          if (await (async () => {
            const v1084 = stdlib.lt(v1059, v1057);
            const v1086 = stdlib.lt(v1058, v834);
            const v1087 = v1084 ? v1086 : false;
            
            return v1087;})()) {
            const v1089 = stdlib.ge(v1058, v834);
            sim_r.isHalt = false;
            }
          else {
            const v1459 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v1460 = v1459[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v1462 = stdlib.lt(v1058, v834);
            const v1463 = v1462 ? v849 : v816;
            const v1469 = stdlib.sub(v1460, v1460);
            const v1471 = stdlib.Array_set(v1459, '0', v1469);
            const v1472 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v1471);
            sim_r.txns.push({
              kind: 'from',
              to: v1463,
              tok: v817
              });
            const v1473 = v1472[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v1474 = v1473[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v1477 = v1462 ? v816 : v849;
            sim_r.txns.push({
              kind: 'from',
              to: v1477,
              tok: v818
              });
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v818
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v817
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v1020 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v1021 = v1020[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v816,
            tok: v817
            });
          sim_r.txns.push({
            kind: 'from',
            to: v816,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v818
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v817
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v838, time: v837, didSend: v61, from: v836 } = txn2;
  ;
  const v839 = v829[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v840 = v839[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v841 = stdlib.add(v840, v819);
  const v843 = stdlib.Array_set(v839, '0', v841);
  const v844 = stdlib.Array_set(v829, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v843);
  ;
  const v845 = stdlib.addressEq(v816, v836);
  stdlib.assert(v845, {
    at: './src/contracts/loan_nnt_nnt.rsh:52:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v837), {
    at: './src/contracts/loan_nnt_nnt.rsh:53:27:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v848 = true;
  let v849 = v816;
  let v850 = false;
  let v851 = v837;
  let v857 = v844;
  let v858 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v874 = v850 ? false : v848;
    
    return v874;})()) {
    const v879 = v850 ? false : v848;
    const v880 = v879 ? true : v850;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v917], secs: v919, time: v918, didSend: v204, from: v916 } = txn4;
    switch (v917[0]) {
      case 'Borrower_close0_101': {
        const v920 = v917[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v953 = null;
        await txn4.getOutput('Borrower_close', 'v953', ctc5, v953);
        const cv848 = false;
        const cv849 = v849;
        const cv850 = v850;
        const cv851 = v918;
        const cv857 = v857;
        const cv858 = v858;
        
        v848 = cv848;
        v849 = cv849;
        v850 = cv850;
        v851 = cv851;
        v857 = cv857;
        v858 = cv858;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_101': {
        const v968 = v917[1];
        undefined /* setApiDetails */;
        ;
        const v994 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
        const v995 = v994[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
        const v996 = stdlib.add(v995, v833);
        const v998 = stdlib.Array_set(v994, '0', v996);
        const v999 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v998);
        ;
        const v1009 = true;
        await txn4.getOutput('Lender_lend', 'v1009', ctc8, v1009);
        const cv848 = v848;
        const cv849 = v916;
        const cv850 = true;
        const cv851 = v918;
        const cv857 = v999;
        const cv858 = v858;
        
        v848 = cv848;
        v849 = cv849;
        v850 = cv850;
        v851 = cv851;
        v857 = cv857;
        v858 = cv858;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v1017 = v850 ? false : v848;
  const v1018 = v1017 ? true : v850;
  if (v850) {
    const v1044 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
    const v1045 = v1044[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
    const v1051 = stdlib.sub(v1045, v1045);
    const v1053 = stdlib.Array_set(v1044, '0', v1051);
    const v1054 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v1053);
    ;
    const v1056 = v820.maturation;
    const v1057 = stdlib.safeAdd(v851, v1056);
    let v1058 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
    let v1059 = v851;
    let v1065 = v1054;
    let v1066 = v858;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1084 = stdlib.lt(v1059, v1057);
      const v1086 = stdlib.lt(v1058, v834);
      const v1087 = v1084 ? v1086 : false;
      
      return v1087;})()) {
      const v1089 = stdlib.ge(v1058, v834);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn5;
      switch (v1172[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1175 = v1172[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1226 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v1226', ctc5, v1226);
          const cv1058 = v1058;
          const cv1059 = v1173;
          const cv1065 = v1065;
          const cv1066 = v1066;
          
          v1058 = cv1058;
          v1059 = cv1059;
          v1065 = cv1065;
          v1066 = cv1066;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_285': {
          const v1269 = v1172[1];
          undefined /* setApiDetails */;
          const v1279 = v1269[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
          const v1280 = stdlib.addressEq(v1171, v816);
          stdlib.assert(v1280, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v1283 = stdlib.le(v1059, v1057);
          stdlib.assert(v1283, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_nnt.rsh:112:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          const v1285 = stdlib.safeAdd(v1279, v1058);
          const v1287 = stdlib.gt(v1285, v834);
          let v1288;
          if (v1287) {
            const v1291 = stdlib.safeSub(v1285, v834);
            v1288 = v1291;
            }
          else {
            v1288 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
            }
          const v1292 = stdlib.safeSub(v1279, v1288);
          ;
          const v1313 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
          const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
          const v1315 = stdlib.add(v1314, v1292);
          const v1317 = stdlib.Array_set(v1313, '0', v1315);
          const v1318 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1317);
          ;
          const v1331 = stdlib.le(v1173, v1057);
          stdlib.assert(v1331, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_nnt.rsh:112:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:120:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:120:50:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          let v1336;
          if (v1287) {
            const v1339 = stdlib.safeSub(v1285, v834);
            v1336 = v1339;
            }
          else {
            v1336 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
            }
          const v1340 = stdlib.safeSub(v1279, v1336);
          const v1342 = stdlib.safeAdd(v1058, v1340);
          const v1344 = stdlib.ge(v1342, v834);
          const v1346 = [v1344, v1342, v834];
          await txn5.getOutput('Borrower_repay', 'v1346', ctc11, v1346);
          const cv1058 = v1342;
          const cv1059 = v1173;
          const cv1065 = v1318;
          const cv1066 = v1066;
          
          v1058 = cv1058;
          v1059 = cv1059;
          v1065 = cv1065;
          v1066 = cv1066;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_285': {
          const v1363 = v1172[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1451 = null;
          await txn5.getOutput('Lender_claim', 'v1451', ctc5, v1451);
          const cv1058 = v1058;
          const cv1059 = v1173;
          const cv1065 = v1065;
          const cv1066 = v1066;
          
          v1058 = cv1058;
          v1059 = cv1059;
          v1065 = cv1065;
          v1066 = cv1066;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1459 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
    const v1460 = v1459[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
    const v1462 = stdlib.lt(v1058, v834);
    const v1463 = v1462 ? v849 : v816;
    const v1469 = stdlib.sub(v1460, v1460);
    const v1471 = stdlib.Array_set(v1459, '0', v1469);
    const v1472 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v1471);
    ;
    const v1473 = v1472[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
    const v1474 = v1473[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
    const v1477 = v1462 ? v816 : v849;
    ;
    ;
    return;
    }
  else {
    const v1020 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
    const v1021 = v1020[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_285: ctc6,
    Borrower_repay0_285: ctc7,
    Lender_claim0_285: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1092 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:127:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:127:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_claimRefund0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:127:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v1096 = ['Borrower_claimRefund0_285', v1092];
  
  const txn1 = await (ctc.sendrecv({
    args: [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089, v1096],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:127:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
      
      switch (v1172[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1175 = v1172[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1226 = null;
          const v1227 = await txn1.getOutput('Borrower_claimRefund', 'v1226', ctc9, v1226);
          
          const v2566 = v1058;
          const v2567 = v1173;
          const v2568 = v1065;
          const v2569 = v1066;
          const v2570 = stdlib.lt(v1173, v1057);
          const v2571 = stdlib.lt(v1058, v834);
          const v2572 = v2570 ? v2571 : false;
          if (v2572) {
            const v2573 = stdlib.ge(v1058, v834);
            sim_r.isHalt = false;
            }
          else {
            const v2575 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2576 = v2575[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2578 = v2571 ? v849 : v816;
            const v2579 = stdlib.sub(v2576, v2576);
            const v2580 = stdlib.Array_set(v2575, '0', v2579);
            const v2581 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2580);
            sim_r.txns.push({
              kind: 'from',
              to: v2578,
              tok: v817
              });
            const v2582 = v2581[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2583 = v2582[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2584 = v2571 ? v816 : v849;
            sim_r.txns.push({
              kind: 'from',
              to: v2584,
              tok: v818
              });
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v818
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v817
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_285': {
          const v1269 = v1172[1];
          
          break;
          }
        case 'Lender_claim0_285': {
          const v1363 = v1172[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
  switch (v1172[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1175 = v1172[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1226 = null;
      const v1227 = await txn1.getOutput('Borrower_claimRefund', 'v1226', ctc9, v1226);
      if (v597) {
        stdlib.protect(ctc9, await interact.out(v1175, v1227), {
          at: './src/contracts/loan_nnt_nnt.rsh:127:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:127:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:127:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:128:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:127:58:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:127:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:127:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2566 = v1058;
      const v2567 = v1173;
      const v2568 = v1065;
      const v2569 = v1066;
      const v2570 = stdlib.lt(v1173, v1057);
      const v2571 = stdlib.lt(v1058, v834);
      const v2572 = v2570 ? v2571 : false;
      if (v2572) {
        const v2573 = stdlib.ge(v1058, v834);
        return;
        }
      else {
        const v2575 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2576 = v2575[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2578 = v2571 ? v849 : v816;
        const v2579 = stdlib.sub(v2576, v2576);
        const v2580 = stdlib.Array_set(v2575, '0', v2579);
        const v2581 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2580);
        ;
        const v2582 = v2581[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2583 = v2582[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2584 = v2571 ? v816 : v849;
        ;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_285': {
      const v1269 = v1172[1];
      return;
      break;
      }
    case 'Lender_claim0_285': {
      const v1363 = v1172[1];
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v883 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runBorrower_close0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v887 = ['Borrower_close0_101', v883];
  
  const txn1 = await (ctc.sendrecv({
    args: [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880, v887],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:79:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:67:26:decimal', stdlib.UInt_max, '0'), v818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v917], secs: v919, time: v918, didSend: v204, from: v916 } = txn1;
      
      switch (v917[0]) {
        case 'Borrower_close0_101': {
          const v920 = v917[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v953 = null;
          const v954 = await txn1.getOutput('Borrower_close', 'v953', ctc9, v953);
          
          const v2623 = false;
          const v2624 = v849;
          const v2625 = v850;
          const v2626 = v918;
          const v2627 = v857;
          const v2628 = v858;
          const v2629 = v850 ? false : false;
          if (v2629) {
            const v2631 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2633 = v850;
            if (v850) {
              const v2634 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
              const v2635 = v2634[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
              const v2636 = stdlib.sub(v2635, v2635);
              const v2637 = stdlib.Array_set(v2634, '0', v2636);
              const v2638 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2637);
              sim_r.txns.push({
                kind: 'from',
                to: v816,
                tok: v818
                });
              const v2639 = v820.maturation;
              const v2640 = stdlib.safeAdd(v918, v2639);
              const v2695 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
              const v2696 = v918;
              const v2697 = v2638;
              const v2698 = v858;
              const v2699 = stdlib.lt(v918, v2640);
              const v2700 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
              const v2701 = v2699 ? v2700 : false;
              if (v2701) {
                const v2702 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
                sim_r.isHalt = false;
                }
              else {
                const v2704 = v2638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v2705 = v2704[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v2707 = v2700 ? v849 : v816;
                const v2708 = stdlib.sub(v2705, v2705);
                const v2709 = stdlib.Array_set(v2704, '0', v2708);
                const v2710 = stdlib.Array_set(v2638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2709);
                sim_r.txns.push({
                  kind: 'from',
                  to: v2707,
                  tok: v817
                  });
                const v2711 = v2710[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
                const v2712 = v2711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
                const v2713 = v2700 ? v816 : v849;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2713,
                  tok: v818
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v816,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v818
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v817
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2693 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              const v2694 = v2693[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v816,
                tok: v817
                });
              sim_r.txns.push({
                kind: 'from',
                to: v816,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v818
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v817
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
          const v968 = v917[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v917], secs: v919, time: v918, didSend: v204, from: v916 } = txn1;
  switch (v917[0]) {
    case 'Borrower_close0_101': {
      const v920 = v917[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v953 = null;
      const v954 = await txn1.getOutput('Borrower_close', 'v953', ctc9, v953);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v920, v954), {
          at: './src/contracts/loan_nnt_nnt.rsh:79:22:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:80:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:79:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2623 = false;
      const v2624 = v849;
      const v2625 = v850;
      const v2626 = v918;
      const v2627 = v857;
      const v2628 = v858;
      const v2629 = v850 ? false : false;
      if (v2629) {
        const v2631 = true;
        return;
        }
      else {
        const v2633 = v850;
        if (v850) {
          const v2634 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v2635 = v2634[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v2636 = stdlib.sub(v2635, v2635);
          const v2637 = stdlib.Array_set(v2634, '0', v2636);
          const v2638 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2637);
          ;
          const v2639 = v820.maturation;
          const v2640 = stdlib.safeAdd(v918, v2639);
          const v2695 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v2696 = v918;
          const v2697 = v2638;
          const v2698 = v858;
          const v2699 = stdlib.lt(v918, v2640);
          const v2700 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
          const v2701 = v2699 ? v2700 : false;
          if (v2701) {
            const v2702 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
            return;
            }
          else {
            const v2704 = v2638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2705 = v2704[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2707 = v2700 ? v849 : v816;
            const v2708 = stdlib.sub(v2705, v2705);
            const v2709 = stdlib.Array_set(v2704, '0', v2708);
            const v2710 = stdlib.Array_set(v2638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2709);
            ;
            const v2711 = v2710[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2712 = v2711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2713 = v2700 ? v816 : v849;
            ;
            ;
            return;
            }}
        else {
          const v2693 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v2694 = v2693[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_101': {
      const v968 = v917[1];
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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_285: ctc7,
    Borrower_repay0_285: ctc6,
    Lender_claim0_285: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1106 = ctc.selfAddress();
  const v1108 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v1109 = v1108[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1111 = stdlib.addressEq(v1106, v816);
  stdlib.assert(v1111, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v1114 = stdlib.le(v1059, v1057);
  stdlib.assert(v1114, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:112:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'Its past the deadline',
    who: 'Borrower_repay'
    });
  const v1116 = stdlib.safeAdd(v1109, v1058);
  const v1118 = stdlib.gt(v1116, v834);
  const v1129 = ['Borrower_repay0_285', v1108];
  
  let v1149;
  if (v1118) {
    const v1152 = stdlib.safeSub(v1116, v834);
    v1149 = v1152;
    }
  else {
    v1149 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
    }
  const v1153 = stdlib.safeSub(v1109, v1149);
  
  const txn1 = await (ctc.sendrecv({
    args: [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089, v1129],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:119:42:decimal', stdlib.UInt_max, '0'), [[v1153, v818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
      
      switch (v1172[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1175 = v1172[1];
          
          break;
          }
        case 'Borrower_repay0_285': {
          const v1269 = v1172[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1279 = v1269[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
          const v1285 = stdlib.safeAdd(v1279, v1058);
          const v1287 = stdlib.gt(v1285, v834);
          let v1288;
          if (v1287) {
            const v1291 = stdlib.safeSub(v1285, v834);
            v1288 = v1291;
            }
          else {
            v1288 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
            }
          const v1292 = stdlib.safeSub(v1279, v1288);
          ;
          const v1313 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
          const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
          const v1315 = stdlib.add(v1314, v1292);
          const v1317 = stdlib.Array_set(v1313, '0', v1315);
          const v1318 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1317);
          sim_r.txns.push({
            amt: v1292,
            kind: 'to',
            tok: v818
            });
          let v1336;
          if (v1287) {
            const v1339 = stdlib.safeSub(v1285, v834);
            v1336 = v1339;
            }
          else {
            v1336 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
            }
          const v1340 = stdlib.safeSub(v1279, v1336);
          const v1342 = stdlib.safeAdd(v1058, v1340);
          const v1344 = stdlib.ge(v1342, v834);
          const v1346 = [v1344, v1342, v834];
          const v1347 = await txn1.getOutput('Borrower_repay', 'v1346', ctc9, v1346);
          
          const v2824 = v1342;
          const v2825 = v1173;
          const v2826 = v1318;
          const v2827 = v1066;
          const v2828 = stdlib.lt(v1173, v1057);
          const v2829 = stdlib.lt(v1342, v834);
          const v2830 = v2828 ? v2829 : false;
          if (v2830) {
            sim_r.isHalt = false;
            }
          else {
            const v2833 = v1318[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2834 = v2833[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2836 = v2829 ? v849 : v816;
            const v2837 = stdlib.sub(v2834, v2834);
            const v2838 = stdlib.Array_set(v2833, '0', v2837);
            const v2839 = stdlib.Array_set(v1318, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2838);
            sim_r.txns.push({
              kind: 'from',
              to: v2836,
              tok: v817
              });
            const v2840 = v2839[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2841 = v2840[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2842 = v2829 ? v816 : v849;
            sim_r.txns.push({
              kind: 'from',
              to: v2842,
              tok: v818
              });
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v818
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v817
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_285': {
          const v1363 = v1172[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
  switch (v1172[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1175 = v1172[1];
      return;
      break;
      }
    case 'Borrower_repay0_285': {
      const v1269 = v1172[1];
      undefined /* setApiDetails */;
      const v1279 = v1269[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
      const v1280 = stdlib.addressEq(v1171, v816);
      stdlib.assert(v1280, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1283 = stdlib.le(v1059, v1057);
      stdlib.assert(v1283, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:112:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      const v1285 = stdlib.safeAdd(v1279, v1058);
      const v1287 = stdlib.gt(v1285, v834);
      let v1288;
      if (v1287) {
        const v1291 = stdlib.safeSub(v1285, v834);
        v1288 = v1291;
        }
      else {
        v1288 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
        }
      const v1292 = stdlib.safeSub(v1279, v1288);
      ;
      const v1313 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
      const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
      const v1315 = stdlib.add(v1314, v1292);
      const v1317 = stdlib.Array_set(v1313, '0', v1315);
      const v1318 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1317);
      ;
      const v1331 = stdlib.le(v1173, v1057);
      stdlib.assert(v1331, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:112:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:120:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:120:50:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      let v1336;
      if (v1287) {
        const v1339 = stdlib.safeSub(v1285, v834);
        v1336 = v1339;
        }
      else {
        v1336 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:116:51:decimal', stdlib.UInt_max, '0');
        }
      const v1340 = stdlib.safeSub(v1279, v1336);
      const v1342 = stdlib.safeAdd(v1058, v1340);
      const v1344 = stdlib.ge(v1342, v834);
      const v1346 = [v1344, v1342, v834];
      const v1347 = await txn1.getOutput('Borrower_repay', 'v1346', ctc9, v1346);
      if (v597) {
        stdlib.protect(ctc10, await interact.out(v1269, v1347), {
          at: './src/contracts/loan_nnt_nnt.rsh:110:31:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:31:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:122:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:120:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:120:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:120:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2824 = v1342;
      const v2825 = v1173;
      const v2826 = v1318;
      const v2827 = v1066;
      const v2828 = stdlib.lt(v1173, v1057);
      const v2829 = stdlib.lt(v1342, v834);
      const v2830 = v2828 ? v2829 : false;
      if (v2830) {
        return;
        }
      else {
        const v2833 = v1318[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2834 = v2833[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2836 = v2829 ? v849 : v816;
        const v2837 = stdlib.sub(v2834, v2834);
        const v2838 = stdlib.Array_set(v2833, '0', v2837);
        const v2839 = stdlib.Array_set(v1318, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2838);
        ;
        const v2840 = v2839[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2841 = v2840[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2842 = v2829 ? v816 : v849;
        ;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_285': {
      const v1363 = v1172[1];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_285: ctc6,
    Borrower_repay0_285: ctc7,
    Lender_claim0_285: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1100 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:131:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:131:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runLender_claim0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:131:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v1104 = ['Lender_claim0_285', v1100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v816, v817, v818, v834, v849, v851, v1018, v1057, v1058, v1059, v1065, v1066, v1089, v1104],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:131:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
      
      switch (v1172[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1175 = v1172[1];
          
          break;
          }
        case 'Borrower_repay0_285': {
          const v1269 = v1172[1];
          
          break;
          }
        case 'Lender_claim0_285': {
          const v1363 = v1172[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1451 = null;
          const v1452 = await txn1.getOutput('Lender_claim', 'v1451', ctc9, v1451);
          
          const v2900 = v1058;
          const v2901 = v1173;
          const v2902 = v1065;
          const v2903 = v1066;
          const v2904 = stdlib.lt(v1173, v1057);
          const v2905 = stdlib.lt(v1058, v834);
          const v2906 = v2904 ? v2905 : false;
          if (v2906) {
            const v2907 = stdlib.ge(v1058, v834);
            sim_r.isHalt = false;
            }
          else {
            const v2909 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2910 = v2909[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2912 = v2905 ? v849 : v816;
            const v2913 = stdlib.sub(v2910, v2910);
            const v2914 = stdlib.Array_set(v2909, '0', v2913);
            const v2915 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2914);
            sim_r.txns.push({
              kind: 'from',
              to: v2912,
              tok: v817
              });
            const v2916 = v2915[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2917 = v2916[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2918 = v2905 ? v816 : v849;
            sim_r.txns.push({
              kind: 'from',
              to: v2918,
              tok: v818
              });
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v818
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v817
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1172], secs: v1174, time: v1173, didSend: v597, from: v1171 } = txn1;
  switch (v1172[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1175 = v1172[1];
      return;
      break;
      }
    case 'Borrower_repay0_285': {
      const v1269 = v1172[1];
      return;
      break;
      }
    case 'Lender_claim0_285': {
      const v1363 = v1172[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1451 = null;
      const v1452 = await txn1.getOutput('Lender_claim', 'v1451', ctc9, v1451);
      if (v597) {
        stdlib.protect(ctc9, await interact.out(v1363, v1452), {
          at: './src/contracts/loan_nnt_nnt.rsh:131:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:131:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:131:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:132:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:131:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:131:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:131:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2900 = v1058;
      const v2901 = v1173;
      const v2902 = v1065;
      const v2903 = v1066;
      const v2904 = stdlib.lt(v1173, v1057);
      const v2905 = stdlib.lt(v1058, v834);
      const v2906 = v2904 ? v2905 : false;
      if (v2906) {
        const v2907 = stdlib.ge(v1058, v834);
        return;
        }
      else {
        const v2909 = v1065[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2910 = v2909[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2912 = v2905 ? v849 : v816;
        const v2913 = stdlib.sub(v2910, v2910);
        const v2914 = stdlib.Array_set(v2909, '0', v2913);
        const v2915 = stdlib.Array_set(v1065, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2914);
        ;
        const v2916 = v2915[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2917 = v2916[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2918 = v2905 ? v816 : v849;
        ;
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v891 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:39:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runLender_lend0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v895 = ['Lender_lend0_101', v891];
  
  const txn1 = await (ctc.sendrecv({
    args: [v816, v817, v818, v820, v833, v834, v848, v849, v850, v857, v858, v880, v895],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:71:34:decimal', stdlib.UInt_max, '0'), [[v833, v818]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v917], secs: v919, time: v918, didSend: v204, from: v916 } = txn1;
      
      switch (v917[0]) {
        case 'Borrower_close0_101': {
          const v920 = v917[1];
          
          break;
          }
        case 'Lender_lend0_101': {
          const v968 = v917[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v994 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
          const v995 = v994[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
          const v996 = stdlib.add(v995, v833);
          const v998 = stdlib.Array_set(v994, '0', v996);
          const v999 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v998);
          sim_r.txns.push({
            amt: v833,
            kind: 'to',
            tok: v818
            });
          const v1009 = true;
          const v1010 = await txn1.getOutput('Lender_lend', 'v1009', ctc4, v1009);
          
          const v3011 = v916;
          const v3013 = v918;
          const v3020 = true;
          const v3021 = v999[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v3022 = v3021[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v3023 = stdlib.sub(v3022, v3022);
          const v3024 = stdlib.Array_set(v3021, '0', v3023);
          const v3025 = stdlib.Array_set(v999, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v3024);
          sim_r.txns.push({
            kind: 'from',
            to: v816,
            tok: v818
            });
          const v3026 = v820.maturation;
          const v3027 = stdlib.safeAdd(v918, v3026);
          const v3082 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v3083 = v918;
          const v3084 = v3025;
          const v3085 = v858;
          const v3086 = stdlib.lt(v918, v3027);
          const v3087 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
          const v3088 = v3086 ? v3087 : false;
          if (v3088) {
            const v3089 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
            sim_r.isHalt = false;
            }
          else {
            const v3091 = v3025[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v3092 = v3091[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v3094 = v3087 ? v916 : v816;
            const v3095 = stdlib.sub(v3092, v3092);
            const v3096 = stdlib.Array_set(v3091, '0', v3095);
            const v3097 = stdlib.Array_set(v3025, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v3096);
            sim_r.txns.push({
              kind: 'from',
              to: v3094,
              tok: v817
              });
            const v3098 = v3097[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v3099 = v3098[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v3100 = v3087 ? v816 : v916;
            sim_r.txns.push({
              kind: 'from',
              to: v3100,
              tok: v818
              });
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v818
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v817
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
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v917], secs: v919, time: v918, didSend: v204, from: v916 } = txn1;
  switch (v917[0]) {
    case 'Borrower_close0_101': {
      const v920 = v917[1];
      return;
      break;
      }
    case 'Lender_lend0_101': {
      const v968 = v917[1];
      undefined /* setApiDetails */;
      ;
      const v994 = v857[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
      const v995 = v994[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
      const v996 = stdlib.add(v995, v833);
      const v998 = stdlib.Array_set(v994, '0', v996);
      const v999 = stdlib.Array_set(v857, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v998);
      ;
      const v1009 = true;
      const v1010 = await txn1.getOutput('Lender_lend', 'v1009', ctc4, v1009);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v968, v1010), {
          at: './src/contracts/loan_nnt_nnt.rsh:69:23:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:23:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:73:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:72:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v3011 = v916;
      const v3013 = v918;
      const v3020 = true;
      const v3021 = v999[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
      const v3022 = v3021[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
      const v3023 = stdlib.sub(v3022, v3022);
      const v3024 = stdlib.Array_set(v3021, '0', v3023);
      const v3025 = stdlib.Array_set(v999, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v3024);
      ;
      const v3026 = v820.maturation;
      const v3027 = stdlib.safeAdd(v918, v3026);
      const v3082 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
      const v3083 = v918;
      const v3084 = v3025;
      const v3085 = v858;
      const v3086 = stdlib.lt(v918, v3027);
      const v3087 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
      const v3088 = v3086 ? v3087 : false;
      if (v3088) {
        const v3089 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v834);
        return;
        }
      else {
        const v3091 = v3025[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v3092 = v3091[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v3094 = v3087 ? v916 : v816;
        const v3095 = stdlib.sub(v3092, v3092);
        const v3096 = stdlib.Array_set(v3091, '0', v3095);
        const v3097 = stdlib.Array_set(v3025, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v3096);
        ;
        const v3098 = v3097[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v3099 = v3098[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v3100 = v3087 ? v816 : v916;
        ;
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
    impure: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `_reachp_0((uint64,uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`, `_reachp_0((uint64,uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEFCAcgKKCNBjARBCYDAAEBAQAxGEEE+yhkSSJbNQElWzUCKmQpZFCCDQQFUWMPBAwpA/sEH3DUzgQnUbj/BDrpub4EPoAXdgRnijtZBHO2+NcEjvcBQQSTqeROBJdNI/oEpHqhMgTf2SMoNhoAjg0A4QABBFgA0QD8AKMAswB4BHMAPQR+AIsEaAAhCa81DiQ0ARJEiAXwNA4iWzUPNA5XCAk1FYAEKSdsNjQPFlA0FVCwNA+IBiU0FSJVjQMEcARzBHZC/8OBCa81CyEENAESRIgGRTQLIls1DDQLVwgBNQ2ABAUcp5o0DBZQNA1QsDQMiAXoNA0iVY0CBEoETUL/iDYaARc1CyWvKTQLFlBQNQ5C/3uAEQAAAAAAAAAAAgAAAAAAAAAANQ5C/2OACQAAAAAAAAAAATULQv+PNAEkEkSIBUM0GhY1BDEZIhJEgAQVH3x1NARQsCNDNAEkEkSIBSU0EBY1BEL/3zQBIQQMQQTMNAEkEkSIBQ00ExZRBwg1BEL/xDQBJBJEiAT6NA8WUQcINQRC/7EoNQ6ACAAAAAAAAATKNA5QsDQONQQyBjUNNBo0FAw1DjQNNBEMNA4QQQQLNBo0FA81DzQZNBgWUDQXFlA0FBZQNBJQNBAWUDQTFlEHCFA0ERZQNBoWUDQNFlA0DFA0CxZQNA8WUQcIUIEhr1AkMgY1AjUBKksBVwB/ZylMV39GZyg0ARY0AhZQZzEZIhJEiAU8NANA/ypC/x0oNQuACAAAAAAAAAO5NAtQsDQLNQQiMgY1EDUTNBEUNBMQQQL4IzUMIzUTIjURNBk0GBZQNBcWUDQWUDQVFlA0FBZQNBMWUQcIUDQSUDQRFlEHCFA0D1A0DhZQNAwWUQcIUCEEMgZC/200FSNbNRsxADQZEkQ0DTQRDkQ0GzQaCEk1HDQUDUk1D0ECfzQcNBQJNQ40GzQOCTUWNAxXERE1FTQWNBeIBBMyBjQRDkQ0D0ECXjQcNBQJNQ40GjQbNA4JCEk1DzQUDxZRBwg0DxZQNBQWUDUOgAgAAAAAAAAFQjQOULA0DjUENA8yBjQMNBVJIls0FggWXABcETUMNQ01GkL+fCg1DoAIAAAAAAAABas0DlCwNA41BDIGNQ1C/mA0D1cRETUMNBU0F4gDjSM1C4AIAAAAAAAAA/E0CxZRBwhQsDQLFlEHCDUEMQAjMgY0DzQMSSJbNBUIFlwAXBE1DzUQNRE1EkL+sjEANRk0CyJbNQw0CyVbNRg0C4EQWzUXNAuBGFs1GjQLVyA4NRaABLyV1iQ0DBZQNBgWUDQXFlA0GhZQNBZQsDQMiAL9IQmvSTULSVBJNQxJVwARJa9cAFwASTULSVcRESWvXABcETUNNBc0GBNEIQeIAwUiNBgyCogCbSEHiAL4IjQXMgqIAmA0FiEIWzUVNBYhBVs1FDQVNBQMRDQZNBgWUDQXFlA0GhZQNBZQNA1QNBUWUDQUFlCBI69QIzIGQv2qIzQBEkRJVwAgNRlJIQVbNRhJIQZbNRdJIQhbNRpJVzg4NRZJV3AiNQ1JgZIBWzUVgZoBWzUUNAsXNQyABNUVGRQ0DBZQsDQMiAI0NA1XABE1CzQaNBiIAjY0GTEAEkQjNBkiMgY0DTQLSSJbNBoIFlwAXAAiNQ41DzUQNRE1EjUTQv1siAH0IQeIAio2GgE1C0L+qogB5DYaATULQv9hiAHZNhoBNQ5C+4iIAc42GgE1C0L7uSIxNBJEgQMxNRJEIjE2EkQiMTcSRIgBroHFAa8iIkL81EL8YkL9YUL9+SI1DkL9giI1DkL9o0L85kL+AzQRNRM0EUEAOzQPVxERSTUbIltJNRU0FzQZiAEYNBA0FiEGWwg1ESI0EDQPNBs0FUkJFlwAXBE0DjULNQw1DTUaQvwfNA9XABEiWzQYNBmIAOM0DjQZiAFoIjQXMgoyCYgBNSI0GDIKMgmIASsxGSQSRIgBoiIyCjIJiAGmQvxbNAxXABFJNQ8iW0k1DTQYNBk0EjQOTYgAnDQMNA80DUkJFlwAXABXEREiWzQXNBI0GTQOTYgAfjQLNBmIAQMiNBcyCjIJiADQIjQYMgoyCYgAxkL/mCKyASOyELIHsgiziSKyASEKshCyFLIRshKziTQBIQQSRIgA0jQMFlEHCDUEQvr3SIlMCUk1BjIJiACxiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEibFC/6hJVwAgNRlJIQVbNRhJIQZbNRdJIQhbNRRJVzggNRJJgVhbNRBJV2ABFzUTSYFhWzURSYFpWzUaSYFxWzUNSVd5IjUMSYGbAVs1C1ejARc1D4kjNQOJSSISTDQCEhFEibGyFUL/QzEWNAAjCEk1AAlHAzgUMgoSRDgQIQoSRDgRTwISRDgSEkSJsUL/EDQGCDUGiUlXACA1GUkhBVs1GEkhBls1F0lXMDg1FkmBaFs1FUmBcFs1FElXeAEXNRNJV3kgNRJJV5kBFzURSVeaIjUPSYG8AVs1DlfEARc1DIk0BjQHSg9B/uZC/u6xsglC/qw=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `551`,
    1001: `551`,
    1002: `552`,
    1003: `553`,
    1004: `554`,
    1005: `555`,
    1006: `555`,
    1007: `556`,
    1008: `557`,
    1009: `557`,
    101: `21`,
    1010: `557`,
    1011: `558`,
    1012: `559`,
    1013: `560`,
    1014: `560`,
    1015: `561`,
    1016: `561`,
    1017: `562`,
    1018: `563`,
    1019: `563`,
    102: `21`,
    1020: `564`,
    1021: `565`,
    1022: `565`,
    1023: `565`,
    1024: `566`,
    1025: `567`,
    1026: `568`,
    1027: `568`,
    1028: `569`,
    1029: `569`,
    103: `21`,
    1030: `570`,
    1031: `570`,
    1032: `571`,
    1033: `571`,
    1034: `572`,
    1035: `572`,
    1036: `573`,
    1037: `574`,
    1038: `577`,
    1039: `577`,
    104: `21`,
    1040: `578`,
    1041: `578`,
    1042: `578`,
    1043: `579`,
    1044: `581`,
    1045: `581`,
    1046: `582`,
    1047: `582`,
    1048: `583`,
    1049: `583`,
    105: `21`,
    1050: `583`,
    1051: `584`,
    1052: `584`,
    1053: `585`,
    1054: `585`,
    1055: `585`,
    1056: `586`,
    1057: `588`,
    1058: `588`,
    1059: `589`,
    106: `21`,
    1060: `589`,
    1061: `590`,
    1062: `590`,
    1063: `590`,
    1064: `591`,
    1065: `591`,
    1066: `592`,
    1067: `592`,
    1068: `593`,
    1069: `594`,
    107: `21`,
    1070: `594`,
    1071: `595`,
    1072: `595`,
    1073: `596`,
    1074: `596`,
    1075: `597`,
    1076: `598`,
    1077: `598`,
    1078: `599`,
    1079: `599`,
    108: `21`,
    1080: `600`,
    1081: `600`,
    1082: `601`,
    1083: `602`,
    1084: `606`,
    1085: `606`,
    1086: `607`,
    1087: `607`,
    1088: `608`,
    1089: `609`,
    109: `21`,
    1090: `610`,
    1091: `610`,
    1092: `611`,
    1093: `612`,
    1094: `613`,
    1095: `613`,
    1096: `614`,
    1097: `615`,
    1098: `616`,
    1099: `616`,
    11: `2`,
    110: `21`,
    1100: `617`,
    1101: `618`,
    1102: `618`,
    1103: `619`,
    1104: `620`,
    1105: `620`,
    1106: `621`,
    1107: `622`,
    1108: `623`,
    1109: `623`,
    111: `22`,
    1110: `624`,
    1111: `625`,
    1112: `626`,
    1113: `626`,
    1114: `627`,
    1115: `628`,
    1116: `629`,
    1117: `630`,
    1118: `630`,
    1119: `631`,
    112: `22`,
    1120: `631`,
    1121: `631`,
    1122: `633`,
    1123: `634`,
    1124: `634`,
    1125: `635`,
    1126: `636`,
    1127: `638`,
    1128: `639`,
    1129: `639`,
    113: `22`,
    1130: `639`,
    1131: `640`,
    1132: `640`,
    1133: `641`,
    1134: `642`,
    1135: `642`,
    1136: `643`,
    1137: `644`,
    1138: `644`,
    1139: `645`,
    114: `23`,
    1140: `646`,
    1141: `646`,
    1142: `647`,
    1143: `648`,
    1144: `648`,
    1145: `649`,
    1146: `650`,
    1147: `650`,
    1148: `651`,
    1149: `652`,
    115: `23`,
    1150: `652`,
    1151: `653`,
    1152: `654`,
    1153: `654`,
    1154: `654`,
    1155: `655`,
    1156: `655`,
    1157: `656`,
    1158: `657`,
    1159: `657`,
    116: `23`,
    1160: `657`,
    1161: `658`,
    1162: `658`,
    1163: `659`,
    1164: `660`,
    1165: `660`,
    1166: `660`,
    1167: `661`,
    1168: `662`,
    1169: `662`,
    117: `23`,
    1170: `663`,
    1171: `663`,
    1172: `663`,
    1173: `664`,
    1174: `665`,
    1175: `665`,
    1176: `666`,
    1177: `666`,
    1178: `667`,
    1179: `668`,
    118: `23`,
    1180: `668`,
    1181: `669`,
    1182: `669`,
    1183: `669`,
    1184: `669`,
    1185: `669`,
    1186: `669`,
    1187: `670`,
    1188: `670`,
    1189: `671`,
    119: `23`,
    1190: `672`,
    1191: `673`,
    1192: `675`,
    1193: `675`,
    1194: `676`,
    1195: `676`,
    1196: `676`,
    1197: `677`,
    1198: `677`,
    1199: `678`,
    12: `2`,
    120: `23`,
    1200: `678`,
    1201: `678`,
    1202: `679`,
    1203: `679`,
    1204: `680`,
    1205: `680`,
    1206: `681`,
    1207: `681`,
    1208: `682`,
    1209: `682`,
    121: `23`,
    1210: `682`,
    1211: `685`,
    1212: `685`,
    1213: `686`,
    1214: `686`,
    1215: `687`,
    1216: `688`,
    1217: `691`,
    1218: `692`,
    1219: `692`,
    122: `23`,
    1220: `693`,
    1221: `694`,
    1222: `694`,
    1223: `695`,
    1224: `695`,
    1225: `696`,
    1226: `696`,
    1227: `697`,
    1228: `698`,
    1229: `699`,
    123: `23`,
    1230: `700`,
    1231: `700`,
    1232: `701`,
    1233: `702`,
    1234: `703`,
    1235: `703`,
    1236: `704`,
    1237: `704`,
    1238: `705`,
    1239: `706`,
    124: `23`,
    1240: `706`,
    1241: `707`,
    1242: `707`,
    1243: `708`,
    1244: `708`,
    1245: `709`,
    1246: `709`,
    1247: `710`,
    1248: `710`,
    1249: `711`,
    125: `23`,
    1250: `711`,
    1251: `712`,
    1252: `712`,
    1253: `712`,
    1254: `714`,
    1255: `714`,
    1256: `714`,
    1257: `715`,
    1258: `715`,
    1259: `716`,
    126: `23`,
    1260: `716`,
    1261: `716`,
    1262: `717`,
    1263: `717`,
    1264: `717`,
    1265: `718`,
    1266: `718`,
    1267: `719`,
    1268: `719`,
    1269: `719`,
    127: `23`,
    1270: `721`,
    1271: `721`,
    1272: `721`,
    1273: `722`,
    1274: `722`,
    1275: `722`,
    1276: `723`,
    1277: `723`,
    1278: `724`,
    1279: `724`,
    128: `23`,
    1280: `724`,
    1281: `726`,
    1282: `726`,
    1283: `726`,
    1284: `727`,
    1285: `727`,
    1286: `727`,
    1287: `728`,
    1288: `728`,
    1289: `729`,
    129: `23`,
    1290: `729`,
    1291: `729`,
    1292: `731`,
    1293: `731`,
    1294: `731`,
    1295: `732`,
    1296: `732`,
    1297: `732`,
    1298: `733`,
    1299: `733`,
    13: `2`,
    130: `23`,
    1300: `734`,
    1301: `734`,
    1302: `734`,
    1303: `736`,
    1304: `737`,
    1305: `737`,
    1306: `738`,
    1307: `739`,
    1308: `740`,
    1309: `740`,
    131: `23`,
    1310: `741`,
    1311: `741`,
    1312: `742`,
    1313: `743`,
    1314: `744`,
    1315: `745`,
    1316: `745`,
    1317: `746`,
    1318: `747`,
    1319: `748`,
    132: `23`,
    1320: `749`,
    1321: `749`,
    1322: `750`,
    1323: `751`,
    1324: `752`,
    1325: `752`,
    1326: `752`,
    1327: `753`,
    1328: `753`,
    1329: `753`,
    133: `23`,
    1330: `754`,
    1331: `755`,
    1332: `756`,
    1333: `757`,
    1334: `757`,
    1335: `757`,
    1336: `759`,
    1337: `759`,
    1338: `759`,
    1339: `761`,
    134: `23`,
    1340: `761`,
    1341: `761`,
    1342: `763`,
    1343: `763`,
    1344: `763`,
    1345: `765`,
    1346: `766`,
    1347: `766`,
    1348: `767`,
    1349: `767`,
    135: `23`,
    1350: `767`,
    1351: `769`,
    1352: `770`,
    1353: `770`,
    1354: `771`,
    1355: `771`,
    1356: `771`,
    1357: `773`,
    1358: `773`,
    1359: `773`,
    136: `23`,
    1360: `775`,
    1361: `775`,
    1362: `775`,
    1363: `777`,
    1364: `777`,
    1365: `778`,
    1366: `778`,
    1367: `779`,
    1368: `779`,
    1369: `780`,
    137: `23`,
    1370: `780`,
    1371: `780`,
    1372: `781`,
    1373: `781`,
    1374: `782`,
    1375: `782`,
    1376: `782`,
    1377: `783`,
    1378: `784`,
    1379: `784`,
    138: `23`,
    1380: `785`,
    1381: `786`,
    1382: `787`,
    1383: `788`,
    1384: `788`,
    1385: `790`,
    1386: `790`,
    1387: `792`,
    1388: `792`,
    1389: `793`,
    139: `23`,
    1390: `793`,
    1391: `793`,
    1392: `794`,
    1393: `794`,
    1394: `795`,
    1395: `795`,
    1396: `796`,
    1397: `796`,
    1398: `797`,
    1399: `798`,
    14: `2`,
    140: `23`,
    1400: `799`,
    1401: `799`,
    1402: `800`,
    1403: `801`,
    1404: `801`,
    1405: `802`,
    1406: `802`,
    1407: `803`,
    1408: `803`,
    1409: `804`,
    141: `23`,
    1410: `804`,
    1411: `805`,
    1412: `806`,
    1413: `807`,
    1414: `808`,
    1415: `808`,
    1416: `809`,
    1417: `809`,
    1418: `810`,
    1419: `810`,
    142: `25`,
    1420: `811`,
    1421: `811`,
    1422: `812`,
    1423: `812`,
    1424: `813`,
    1425: `813`,
    1426: `814`,
    1427: `814`,
    1428: `815`,
    1429: `815`,
    143: `28`,
    1430: `815`,
    1431: `817`,
    1432: `817`,
    1433: `818`,
    1434: `818`,
    1435: `818`,
    1436: `819`,
    1437: `820`,
    1438: `822`,
    1439: `822`,
    144: `28`,
    1440: `824`,
    1441: `824`,
    1442: `825`,
    1443: `825`,
    1444: `825`,
    1445: `826`,
    1446: `826`,
    1447: `827`,
    1448: `827`,
    1449: `828`,
    145: `29`,
    1450: `828`,
    1451: `828`,
    1452: `830`,
    1453: `832`,
    1454: `832`,
    1455: `833`,
    1456: `833`,
    1457: `834`,
    1458: `834`,
    1459: `835`,
    146: `30`,
    1460: `835`,
    1461: `835`,
    1462: `836`,
    1463: `837`,
    1464: `837`,
    1465: `838`,
    1466: `838`,
    1467: `839`,
    1468: `839`,
    1469: `840`,
    147: `30`,
    1470: `840`,
    1471: `840`,
    1472: `842`,
    1473: `842`,
    1474: `843`,
    1475: `844`,
    1476: `845`,
    1477: `847`,
    1478: `847`,
    1479: `847`,
    148: `32`,
    1480: `849`,
    1481: `850`,
    1482: `850`,
    1483: `851`,
    1484: `851`,
    1485: `852`,
    1486: `852`,
    1487: `852`,
    1488: `853`,
    1489: `853`,
    149: `33`,
    1490: `853`,
    1491: `855`,
    1492: `855`,
    1493: `856`,
    1494: `856`,
    1495: `856`,
    1496: `857`,
    1497: `858`,
    1498: `858`,
    1499: `859`,
    15: `2`,
    150: `33`,
    1500: `860`,
    1501: `861`,
    1502: `862`,
    1503: `862`,
    1504: `864`,
    1505: `864`,
    1506: `866`,
    1507: `866`,
    1508: `867`,
    1509: `867`,
    151: `34`,
    1510: `868`,
    1511: `868`,
    1512: `869`,
    1513: `870`,
    1514: `870`,
    1515: `870`,
    1516: `871`,
    1517: `871`,
    1518: `872`,
    1519: `872`,
    152: `35`,
    1520: `873`,
    1521: `873`,
    1522: `874`,
    1523: `875`,
    1524: `876`,
    1525: `877`,
    1526: `877`,
    1527: `878`,
    1528: `878`,
    1529: `879`,
    153: `36`,
    1530: `879`,
    1531: `879`,
    1532: `880`,
    1533: `881`,
    1534: `883`,
    1535: `883`,
    1536: `885`,
    1537: `885`,
    1538: `886`,
    1539: `886`,
    154: `36`,
    1540: `887`,
    1541: `887`,
    1542: `888`,
    1543: `889`,
    1544: `889`,
    1545: `889`,
    1546: `890`,
    1547: `890`,
    1548: `892`,
    1549: `892`,
    155: `36`,
    1550: `893`,
    1551: `893`,
    1552: `893`,
    1553: `895`,
    1554: `896`,
    1555: `896`,
    1556: `897`,
    1557: `897`,
    1558: `898`,
    1559: `898`,
    156: `37`,
    1560: `899`,
    1561: `899`,
    1562: `899`,
    1563: `900`,
    1564: `901`,
    1565: `901`,
    1566: `902`,
    1567: `902`,
    1568: `903`,
    1569: `903`,
    157: `37`,
    1570: `904`,
    1571: `904`,
    1572: `904`,
    1573: `905`,
    1574: `905`,
    1575: `905`,
    1576: `907`,
    1577: `908`,
    1578: `908`,
    1579: `909`,
    158: `38`,
    1580: `910`,
    1581: `910`,
    1582: `911`,
    1583: `911`,
    1584: `912`,
    1585: `912`,
    1586: `913`,
    1587: `914`,
    1588: `916`,
    1589: `917`,
    159: `39`,
    1590: `917`,
    1591: `918`,
    1592: `918`,
    1593: `919`,
    1594: `919`,
    1595: `920`,
    1596: `920`,
    1597: `921`,
    1598: `921`,
    1599: `922`,
    16: `2`,
    160: `40`,
    1600: `922`,
    1601: `923`,
    1602: `924`,
    1603: `926`,
    1604: `926`,
    1605: `927`,
    1606: `927`,
    1607: `928`,
    1608: `929`,
    1609: `932`,
    161: `40`,
    1610: `932`,
    1611: `932`,
    1612: `933`,
    1613: `933`,
    1614: `934`,
    1615: `935`,
    1616: `935`,
    1617: `935`,
    1618: `936`,
    1619: `936`,
    162: `41`,
    1620: `937`,
    1621: `937`,
    1622: `937`,
    1623: `939`,
    1624: `940`,
    1625: `942`,
    1626: `943`,
    1627: `944`,
    1628: `945`,
    1629: `945`,
    163: `41`,
    1630: `946`,
    1631: `946`,
    1632: `947`,
    1633: `947`,
    1634: `947`,
    1635: `948`,
    1636: `950`,
    1637: `951`,
    1638: `952`,
    1639: `952`,
    164: `42`,
    1640: `952`,
    1641: `953`,
    1642: `954`,
    1643: `954`,
    1644: `957`,
    1645: `957`,
    1646: `958`,
    1647: `958`,
    1648: `959`,
    1649: `960`,
    165: `42`,
    1650: `961`,
    1651: `962`,
    1652: `962`,
    1653: `963`,
    1654: `964`,
    1655: `964`,
    1656: `965`,
    1657: `965`,
    1658: `966`,
    1659: `966`,
    166: `42`,
    1660: `967`,
    1661: `968`,
    1662: `969`,
    1663: `969`,
    1664: `970`,
    1665: `971`,
    1666: `972`,
    1667: `973`,
    1668: `973`,
    1669: `974`,
    167: `43`,
    1670: `975`,
    1671: `976`,
    1672: `978`,
    1673: `979`,
    1674: `979`,
    1675: `979`,
    1676: `981`,
    1677: `982`,
    1678: `982`,
    1679: `982`,
    168: `43`,
    1680: `983`,
    1681: `983`,
    1682: `984`,
    1683: `985`,
    1684: `985`,
    1685: `986`,
    1686: `987`,
    1687: `987`,
    1688: `988`,
    1689: `989`,
    169: `44`,
    1690: `989`,
    1691: `990`,
    1692: `991`,
    1693: `991`,
    1694: `992`,
    1695: `993`,
    1696: `993`,
    1697: `994`,
    1698: `995`,
    1699: `995`,
    17: `2`,
    170: `44`,
    1700: `996`,
    1701: `997`,
    1702: `997`,
    1703: `997`,
    1704: `998`,
    1705: `998`,
    1706: `999`,
    1707: `1000`,
    1708: `1000`,
    1709: `1001`,
    171: `44`,
    1710: `1002`,
    1711: `1002`,
    1712: `1003`,
    1713: `1004`,
    1714: `1004`,
    1715: `1004`,
    1716: `1005`,
    1717: `1006`,
    1718: `1006`,
    1719: `1007`,
    172: `44`,
    1720: `1008`,
    1721: `1008`,
    1722: `1009`,
    1723: `1010`,
    1724: `1010`,
    1725: `1011`,
    1726: `1012`,
    1727: `1012`,
    1728: `1013`,
    1729: `1014`,
    173: `44`,
    1730: `1014`,
    1731: `1015`,
    1732: `1016`,
    1733: `1016`,
    1734: `1017`,
    1735: `1018`,
    1736: `1018`,
    1737: `1019`,
    1738: `1020`,
    1739: `1020`,
    174: `44`,
    1740: `1020`,
    1741: `1021`,
    1742: `1021`,
    1743: `1022`,
    1744: `1023`,
    1745: `1023`,
    1746: `1023`,
    1747: `1024`,
    1748: `1025`,
    1749: `1025`,
    175: `45`,
    1750: `1026`,
    1751: `1026`,
    1752: `1026`,
    1753: `1027`,
    1754: `1028`,
    1755: `1028`,
    1756: `1029`,
    1757: `1031`,
    1758: `1032`,
    1759: `1032`,
    176: `45`,
    1760: `1033`,
    1761: `1035`,
    1762: `1036`,
    1763: `1037`,
    1764: `1038`,
    1765: `1039`,
    1766: `1039`,
    1767: `1040`,
    1768: `1041`,
    1769: `1042`,
    177: `46`,
    1770: `1043`,
    1771: `1045`,
    1772: `1046`,
    1773: `1046`,
    1774: `1047`,
    1775: `1047`,
    1776: `1047`,
    1777: `1050`,
    1778: `1050`,
    1779: `1051`,
    178: `47`,
    1780: `1051`,
    1781: `1052`,
    1782: `1053`,
    1783: `1054`,
    1784: `1055`,
    1785: `1055`,
    1786: `1056`,
    1787: `1057`,
    1788: `1057`,
    1789: `1058`,
    179: `48`,
    1790: `1058`,
    1791: `1059`,
    1792: `1059`,
    1793: `1060`,
    1794: `1061`,
    1795: `1062`,
    1796: `1062`,
    1797: `1063`,
    1798: `1063`,
    1799: `1064`,
    18: `2`,
    180: `48`,
    1800: `1065`,
    1801: `1066`,
    1802: `1066`,
    1803: `1067`,
    1804: `1067`,
    1805: `1068`,
    1806: `1069`,
    1807: `1070`,
    1808: `1070`,
    1809: `1071`,
    181: `49`,
    1810: `1072`,
    1811: `1073`,
    1812: `1075`,
    1813: `1076`,
    1814: `1076`,
    1815: `1076`,
    1816: `1078`,
    1817: `1078`,
    1818: `1079`,
    1819: `1080`,
    182: `50`,
    1820: `1080`,
    1821: `1081`,
    1822: `1083`,
    1823: `1084`,
    1824: `1084`,
    1825: `1084`,
    1826: `1085`,
    1827: `1085`,
    1828: `1086`,
    1829: `1087`,
    183: `52`,
    1830: `1087`,
    1831: `1088`,
    1832: `1089`,
    1833: `1089`,
    1834: `1090`,
    1835: `1091`,
    1836: `1091`,
    1837: `1092`,
    1838: `1093`,
    1839: `1093`,
    184: `52`,
    1840: `1094`,
    1841: `1095`,
    1842: `1095`,
    1843: `1095`,
    1844: `1096`,
    1845: `1096`,
    1846: `1097`,
    1847: `1098`,
    1848: `1098`,
    1849: `1099`,
    185: `53`,
    1850: `1100`,
    1851: `1100`,
    1852: `1101`,
    1853: `1102`,
    1854: `1102`,
    1855: `1103`,
    1856: `1104`,
    1857: `1104`,
    1858: `1105`,
    1859: `1106`,
    186: `53`,
    1860: `1106`,
    1861: `1106`,
    1862: `1107`,
    1863: `1108`,
    1864: `1108`,
    1865: `1109`,
    1866: `1110`,
    1867: `1110`,
    1868: `1110`,
    1869: `1111`,
    187: `53`,
    1870: `1111`,
    1871: `1112`,
    1872: `1113`,
    1873: `1113`,
    1874: `1113`,
    1875: `1114`,
    1876: `1115`,
    1877: `1115`,
    1878: `1116`,
    1879: `1117`,
    188: `54`,
    1880: `1117`,
    1881: `1117`,
    1882: `1118`,
    1883: `1118`,
    1884: `1119`,
    1885: `1120`,
    1886: `1120`,
    1887: `1120`,
    1888: `1121`,
    1889: `1122`,
    189: `54`,
    1890: `1122`,
    1891: `1123`,
    1892: `1123`,
    1893: `1123`,
    1894: `1124`,
    1895: `1125`,
    1896: `1125`,
    1897: `1126`,
    1898: `1128`,
    1899: `1128`,
    19: `2`,
    190: `55`,
    1900: `1129`,
    1901: `1129`,
    1902: `1130`,
    1903: `1131`,
    1904: `1132`,
    1905: `1132`,
    1906: `1132`,
    1907: `1133`,
    1908: `1133`,
    1909: `1133`,
    191: `56`,
    1910: `1135`,
    1911: `1136`,
    1912: `1136`,
    1913: `1137`,
    192: `57`,
    193: `57`,
    194: `57`,
    195: `57`,
    196: `57`,
    197: `57`,
    198: `57`,
    199: `57`,
    2: `2`,
    20: `2`,
    200: `58`,
    201: `58`,
    202: `58`,
    203: `61`,
    204: `61`,
    205: `62`,
    206: `63`,
    207: `63`,
    208: `65`,
    209: `65`,
    21: `2`,
    210: `66`,
    211: `66`,
    212: `67`,
    213: `68`,
    214: `69`,
    215: `69`,
    216: `69`,
    217: `70`,
    218: `70`,
    219: `71`,
    22: `2`,
    220: `72`,
    221: `73`,
    222: `73`,
    223: `74`,
    224: `74`,
    225: `75`,
    226: `75`,
    227: `75`,
    228: `76`,
    229: `76`,
    23: `4`,
    230: `77`,
    231: `77`,
    232: `77`,
    233: `77`,
    234: `77`,
    235: `77`,
    236: `78`,
    237: `78`,
    238: `79`,
    239: `80`,
    24: `4`,
    240: `81`,
    241: `81`,
    242: `82`,
    243: `83`,
    244: `85`,
    245: `85`,
    246: `86`,
    247: `86`,
    248: `86`,
    249: `87`,
    25: `5`,
    250: `87`,
    251: `88`,
    252: `89`,
    253: `90`,
    254: `90`,
    255: `90`,
    256: `90`,
    257: `90`,
    258: `90`,
    259: `91`,
    26: `5`,
    260: `91`,
    261: `91`,
    262: `93`,
    263: `93`,
    264: `93`,
    265: `94`,
    266: `95`,
    267: `95`,
    268: `97`,
    269: `98`,
    27: `5`,
    270: `99`,
    271: `100`,
    272: `100`,
    273: `101`,
    274: `102`,
    275: `103`,
    276: `104`,
    277: `104`,
    278: `105`,
    279: `105`,
    28: `6`,
    280: `105`,
    281: `108`,
    282: `108`,
    283: `108`,
    284: `108`,
    285: `108`,
    286: `108`,
    287: `108`,
    288: `108`,
    289: `108`,
    29: `7`,
    290: `108`,
    291: `108`,
    292: `108`,
    293: `108`,
    294: `108`,
    295: `108`,
    296: `108`,
    297: `108`,
    298: `108`,
    299: `108`,
    3: `2`,
    30: `8`,
    300: `109`,
    301: `109`,
    302: `110`,
    303: `110`,
    304: `110`,
    305: `113`,
    306: `113`,
    307: `113`,
    308: `113`,
    309: `113`,
    31: `9`,
    310: `113`,
    311: `113`,
    312: `113`,
    313: `113`,
    314: `113`,
    315: `113`,
    316: `114`,
    317: `114`,
    318: `115`,
    319: `115`,
    32: `10`,
    320: `115`,
    321: `118`,
    322: `118`,
    323: `119`,
    324: `120`,
    325: `121`,
    326: `124`,
    327: `124`,
    328: `124`,
    329: `125`,
    33: `11`,
    330: `125`,
    331: `126`,
    332: `127`,
    333: `127`,
    334: `129`,
    335: `129`,
    336: `130`,
    337: `131`,
    338: `132`,
    339: `135`,
    34: `11`,
    340: `135`,
    341: `135`,
    342: `135`,
    343: `135`,
    344: `135`,
    345: `136`,
    346: `136`,
    347: `137`,
    348: `138`,
    349: `140`,
    35: `12`,
    350: `141`,
    351: `144`,
    352: `144`,
    353: `145`,
    354: `146`,
    355: `147`,
    356: `150`,
    357: `150`,
    358: `150`,
    359: `151`,
    36: `13`,
    360: `151`,
    361: `152`,
    362: `153`,
    363: `153`,
    364: `154`,
    365: `154`,
    366: `154`,
    367: `157`,
    368: `157`,
    369: `158`,
    37: `14`,
    370: `158`,
    371: `159`,
    372: `160`,
    373: `160`,
    374: `160`,
    375: `161`,
    376: `161`,
    377: `162`,
    378: `163`,
    379: `164`,
    38: `14`,
    380: `167`,
    381: `167`,
    382: `167`,
    383: `168`,
    384: `168`,
    385: `169`,
    386: `170`,
    387: `170`,
    388: `170`,
    389: `171`,
    39: `15`,
    390: `171`,
    391: `172`,
    392: `172`,
    393: `172`,
    394: `175`,
    395: `175`,
    396: `176`,
    397: `177`,
    398: `178`,
    399: `181`,
    4: `2`,
    40: `16`,
    400: `181`,
    401: `181`,
    402: `182`,
    403: `182`,
    404: `183`,
    405: `184`,
    406: `184`,
    407: `184`,
    408: `185`,
    409: `185`,
    41: `17`,
    410: `186`,
    411: `186`,
    412: `186`,
    413: `188`,
    414: `189`,
    415: `189`,
    416: `190`,
    417: `190`,
    418: `190`,
    419: `190`,
    42: `18`,
    420: `190`,
    421: `190`,
    422: `190`,
    423: `190`,
    424: `190`,
    425: `190`,
    426: `191`,
    427: `191`,
    428: `192`,
    429: `193`,
    43: `19`,
    430: `194`,
    431: `194`,
    432: `195`,
    433: `195`,
    434: `196`,
    435: `196`,
    436: `197`,
    437: `197`,
    438: `199`,
    439: `199`,
    44: `21`,
    440: `200`,
    441: `200`,
    442: `201`,
    443: `202`,
    444: `202`,
    445: `203`,
    446: `203`,
    447: `204`,
    448: `204`,
    449: `205`,
    45: `21`,
    450: `206`,
    451: `206`,
    452: `207`,
    453: `208`,
    454: `208`,
    455: `208`,
    456: `209`,
    457: `209`,
    458: `210`,
    459: `210`,
    46: `21`,
    460: `211`,
    461: `212`,
    462: `212`,
    463: `214`,
    464: `214`,
    465: `215`,
    466: `215`,
    467: `216`,
    468: `217`,
    469: `218`,
    47: `21`,
    470: `218`,
    471: `219`,
    472: `220`,
    473: `221`,
    474: `221`,
    475: `222`,
    476: `223`,
    477: `224`,
    478: `224`,
    479: `225`,
    48: `21`,
    480: `226`,
    481: `226`,
    482: `227`,
    483: `228`,
    484: `229`,
    485: `229`,
    486: `230`,
    487: `231`,
    488: `231`,
    489: `231`,
    49: `21`,
    490: `232`,
    491: `233`,
    492: `233`,
    493: `234`,
    494: `235`,
    495: `236`,
    496: `236`,
    497: `237`,
    498: `238`,
    499: `239`,
    5: `2`,
    50: `21`,
    500: `239`,
    501: `240`,
    502: `241`,
    503: `242`,
    504: `242`,
    505: `243`,
    506: `244`,
    507: `244`,
    508: `245`,
    509: `246`,
    51: `21`,
    510: `247`,
    511: `247`,
    512: `248`,
    513: `249`,
    514: `249`,
    515: `249`,
    516: `250`,
    517: `251`,
    518: `251`,
    519: `252`,
    52: `21`,
    520: `253`,
    521: `254`,
    522: `255`,
    523: `255`,
    524: `257`,
    525: `257`,
    526: `258`,
    527: `258`,
    528: `259`,
    529: `260`,
    53: `21`,
    530: `260`,
    531: `261`,
    532: `261`,
    533: `261`,
    534: `262`,
    535: `263`,
    536: `264`,
    537: `265`,
    538: `265`,
    539: `265`,
    54: `21`,
    540: `266`,
    541: `267`,
    542: `268`,
    543: `268`,
    544: `269`,
    545: `270`,
    546: `270`,
    547: `271`,
    548: `272`,
    549: `273`,
    55: `21`,
    550: `274`,
    551: `274`,
    552: `275`,
    553: `276`,
    554: `277`,
    555: `279`,
    556: `279`,
    557: `279`,
    558: `281`,
    559: `281`,
    56: `21`,
    560: `282`,
    561: `282`,
    562: `282`,
    563: `283`,
    564: `283`,
    565: `283`,
    566: `285`,
    567: `286`,
    568: `286`,
    569: `287`,
    57: `21`,
    570: `287`,
    571: `287`,
    572: `287`,
    573: `287`,
    574: `287`,
    575: `287`,
    576: `287`,
    577: `287`,
    578: `287`,
    579: `288`,
    58: `21`,
    580: `288`,
    581: `289`,
    582: `290`,
    583: `291`,
    584: `291`,
    585: `292`,
    586: `292`,
    587: `293`,
    588: `294`,
    589: `294`,
    59: `21`,
    590: `295`,
    591: `295`,
    592: `296`,
    593: `296`,
    594: `298`,
    595: `298`,
    596: `299`,
    597: `300`,
    598: `300`,
    599: `301`,
    6: `2`,
    60: `21`,
    600: `302`,
    601: `302`,
    602: `302`,
    603: `303`,
    604: `304`,
    605: `304`,
    606: `305`,
    607: `306`,
    608: `306`,
    609: `307`,
    61: `21`,
    610: `308`,
    611: `308`,
    612: `310`,
    613: `310`,
    614: `311`,
    615: `311`,
    616: `312`,
    617: `313`,
    618: `314`,
    619: `314`,
    62: `21`,
    620: `315`,
    621: `316`,
    622: `317`,
    623: `317`,
    624: `318`,
    625: `319`,
    626: `319`,
    627: `320`,
    628: `321`,
    629: `322`,
    63: `21`,
    630: `322`,
    631: `323`,
    632: `324`,
    633: `325`,
    634: `325`,
    635: `326`,
    636: `327`,
    637: `327`,
    638: `327`,
    639: `328`,
    64: `21`,
    640: `329`,
    641: `329`,
    642: `330`,
    643: `331`,
    644: `331`,
    645: `332`,
    646: `333`,
    647: `333`,
    648: `333`,
    649: `334`,
    65: `21`,
    650: `335`,
    651: `335`,
    652: `336`,
    653: `337`,
    654: `337`,
    655: `338`,
    656: `339`,
    657: `340`,
    658: `340`,
    659: `341`,
    66: `21`,
    660: `342`,
    661: `342`,
    662: `342`,
    663: `343`,
    664: `344`,
    665: `344`,
    666: `345`,
    667: `345`,
    668: `346`,
    669: `346`,
    67: `21`,
    670: `346`,
    671: `348`,
    672: `348`,
    673: `349`,
    674: `350`,
    675: `351`,
    676: `351`,
    677: `352`,
    678: `352`,
    679: `353`,
    68: `21`,
    680: `353`,
    681: `354`,
    682: `355`,
    683: `363`,
    684: `363`,
    685: `364`,
    686: `364`,
    687: `365`,
    688: `366`,
    689: `374`,
    69: `21`,
    690: `374`,
    691: `375`,
    692: `375`,
    693: `376`,
    694: `377`,
    695: `378`,
    696: `378`,
    697: `379`,
    698: `379`,
    699: `380`,
    7: `2`,
    70: `21`,
    700: `381`,
    701: `382`,
    702: `382`,
    703: `383`,
    704: `383`,
    705: `383`,
    706: `384`,
    707: `384`,
    708: `385`,
    709: `385`,
    71: `21`,
    710: `386`,
    711: `387`,
    712: `387`,
    713: `389`,
    714: `389`,
    715: `390`,
    716: `390`,
    717: `391`,
    718: `392`,
    719: `392`,
    72: `21`,
    720: `393`,
    721: `393`,
    722: `394`,
    723: `394`,
    724: `394`,
    725: `395`,
    726: `395`,
    727: `396`,
    728: `396`,
    729: `397`,
    73: `21`,
    730: `397`,
    731: `398`,
    732: `398`,
    733: `398`,
    734: `401`,
    735: `401`,
    736: `402`,
    737: `402`,
    738: `403`,
    739: `404`,
    74: `21`,
    740: `409`,
    741: `409`,
    742: `410`,
    743: `410`,
    744: `410`,
    745: `411`,
    746: `411`,
    747: `412`,
    748: `412`,
    749: `413`,
    75: `21`,
    750: `414`,
    751: `414`,
    752: `416`,
    753: `416`,
    754: `417`,
    755: `417`,
    756: `418`,
    757: `418`,
    758: `419`,
    759: `420`,
    76: `21`,
    760: `421`,
    761: `422`,
    762: `422`,
    763: `423`,
    764: `423`,
    765: `424`,
    766: `425`,
    767: `426`,
    768: `426`,
    769: `426`,
    77: `21`,
    770: `427`,
    771: `427`,
    772: `428`,
    773: `429`,
    774: `430`,
    775: `430`,
    776: `431`,
    777: `432`,
    778: `433`,
    779: `433`,
    78: `21`,
    780: `434`,
    781: `434`,
    782: `434`,
    783: `434`,
    784: `434`,
    785: `434`,
    786: `434`,
    787: `434`,
    788: `434`,
    789: `434`,
    79: `21`,
    790: `435`,
    791: `435`,
    792: `436`,
    793: `437`,
    794: `438`,
    795: `438`,
    796: `439`,
    797: `439`,
    798: `440`,
    799: `440`,
    8: `2`,
    80: `21`,
    800: `441`,
    801: `441`,
    802: `442`,
    803: `442`,
    804: `443`,
    805: `443`,
    806: `444`,
    807: `445`,
    808: `446`,
    809: `447`,
    81: `21`,
    810: `447`,
    811: `448`,
    812: `449`,
    813: `450`,
    814: `450`,
    815: `451`,
    816: `451`,
    817: `452`,
    818: `452`,
    819: `453`,
    82: `21`,
    820: `453`,
    821: `454`,
    822: `454`,
    823: `455`,
    824: `455`,
    825: `455`,
    826: `457`,
    827: `458`,
    828: `458`,
    829: `459`,
    83: `21`,
    830: `459`,
    831: `459`,
    832: `459`,
    833: `459`,
    834: `459`,
    835: `459`,
    836: `459`,
    837: `459`,
    838: `459`,
    839: `460`,
    84: `21`,
    840: `460`,
    841: `461`,
    842: `462`,
    843: `463`,
    844: `463`,
    845: `464`,
    846: `464`,
    847: `465`,
    848: `465`,
    849: `466`,
    85: `21`,
    850: `466`,
    851: `467`,
    852: `467`,
    853: `467`,
    854: `469`,
    855: `469`,
    856: `470`,
    857: `470`,
    858: `470`,
    859: `471`,
    86: `21`,
    860: `471`,
    861: `472`,
    862: `472`,
    863: `473`,
    864: `473`,
    865: `474`,
    866: `474`,
    867: `474`,
    868: `477`,
    869: `478`,
    87: `21`,
    870: `478`,
    871: `479`,
    872: `479`,
    873: `479`,
    874: `479`,
    875: `479`,
    876: `479`,
    877: `479`,
    878: `479`,
    879: `479`,
    88: `21`,
    880: `479`,
    881: `480`,
    882: `480`,
    883: `481`,
    884: `482`,
    885: `482`,
    886: `482`,
    887: `483`,
    888: `484`,
    889: `485`,
    89: `21`,
    890: `485`,
    891: `486`,
    892: `487`,
    893: `487`,
    894: `487`,
    895: `488`,
    896: `488`,
    897: `489`,
    898: `489`,
    899: `490`,
    9: `2`,
    90: `21`,
    900: `491`,
    901: `491`,
    902: `492`,
    903: `492`,
    904: `493`,
    905: `493`,
    906: `494`,
    907: `495`,
    908: `496`,
    909: `497`,
    91: `21`,
    910: `497`,
    911: `498`,
    912: `499`,
    913: `500`,
    914: `500`,
    915: `501`,
    916: `501`,
    917: `502`,
    918: `502`,
    919: `503`,
    92: `21`,
    920: `503`,
    921: `504`,
    922: `504`,
    923: `505`,
    924: `505`,
    925: `506`,
    926: `506`,
    927: `506`,
    928: `508`,
    929: `508`,
    93: `21`,
    930: `509`,
    931: `509`,
    932: `510`,
    933: `510`,
    934: `511`,
    935: `512`,
    936: `513`,
    937: `513`,
    938: `514`,
    939: `514`,
    94: `21`,
    940: `515`,
    941: `516`,
    942: `517`,
    943: `517`,
    944: `518`,
    945: `518`,
    946: `519`,
    947: `519`,
    948: `520`,
    949: `521`,
    95: `21`,
    950: `521`,
    951: `522`,
    952: `522`,
    953: `523`,
    954: `523`,
    955: `524`,
    956: `525`,
    957: `525`,
    958: `526`,
    959: `526`,
    96: `21`,
    960: `527`,
    961: `527`,
    962: `527`,
    963: `528`,
    964: `528`,
    965: `529`,
    966: `529`,
    967: `529`,
    968: `529`,
    969: `529`,
    97: `21`,
    970: `529`,
    971: `530`,
    972: `530`,
    973: `531`,
    974: `532`,
    975: `533`,
    976: `533`,
    977: `534`,
    978: `535`,
    979: `536`,
    98: `21`,
    980: `536`,
    981: `537`,
    982: `538`,
    983: `539`,
    984: `539`,
    985: `540`,
    986: `541`,
    987: `542`,
    988: `542`,
    989: `543`,
    99: `21`,
    990: `544`,
    991: `546`,
    992: `546`,
    993: `547`,
    994: `547`,
    995: `547`,
    996: `548`,
    997: `548`,
    998: `549`,
    999: `550`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 197,
  unsupported: [],
  version: 13,
  warnings: [`API Borrower_claimRefund may use up to 5 accounts, but the limit is 4. API Borrower_claimRefund starts at /app/src/contracts/loan_nnt_nnt.rsh:94:50:application.`, `API Borrower_close may use up to 6 accounts, but the limit is 4. API Borrower_close starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:application.`, `API Borrower_close may use up to 9 transaction references, but the limit is 8. API Borrower_close starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:application.`, `API Borrower_repay may use up to 5 accounts, but the limit is 4. API Borrower_repay starts at /app/src/contracts/loan_nnt_nnt.rsh:94:50:application.`, `API Lender_claim may use up to 5 accounts, but the limit is 4. API Lender_claim starts at /app/src/contracts/loan_nnt_nnt.rsh:94:50:application.`, `API Lender_lend may use up to 6 accounts, but the limit is 4. API Lender_lend starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:application.`, `API Lender_lend may use up to 9 transaction references, but the limit is 8. API Lender_lend starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:application.`, `Step 1 may use up to 6 accounts, but the limit is 4. Step 1 starts at /app/src/contracts/loan_nnt_nnt.rsh:52:11:dot.`, `Step 1 may use up to 9 transaction references, but the limit is 8. Step 1 starts at /app/src/contracts/loan_nnt_nnt.rsh:52:11:dot.`, `Step 4 may use up to 5 accounts, but the limit is 4. Step 4 starts at /app/src/contracts/loan_nnt_nnt.rsh:94:50:dot.`, `Step 5 may use up to 6 accounts, but the limit is 4. Step 5 starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:dot.`, `Step 5 may use up to 9 transaction references, but the limit is 8. Step 5 starts at /app/src/contracts/loan_nnt_nnt.rsh:55:62:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"internalType":"struct T12","name":"v3135","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1009","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1226","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1346","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1451","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v953","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3124","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v3138","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3141","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v3144","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620033fd38819003601f8101601f191683016001600160401b03811184821017620006155783928291604052833981010390610100821262000774576040519160a08301906001600160401b038211848310176200061557608091604052825184526200007160208401620007b1565b60208501526200008460408401620007b1565b604085015260608301516060850152607f190112620007745760e060405191620000ae8362000779565b620000bc60808201620007b1565b835260a0810151602084015260c0810151604084015201516060820152608082015243600355604051610140810181811060018060401b038211176200061557600091610120916040528281528260208201528260408201526200011f620007c6565b60608201528260808201528260a08201528260c08201528260e082015282610100820152015260405190620001548262000795565b6200015e620007c6565b82526200016a620007e7565b602083015262000179620007e7565b604083015260ff600454166200075b577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b03604085015116606082015260608401516080820152620001fc608085015160a08301906200082e565ba1805180159081156200074e575b5015620007355760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200025a8362000795565b600083526020830152604082015262000272620007e7565b9160005b60028110620006fb575050815260408381019190915281015160208201516001600160a01b03908116911603620006f35760005b15620006da5734620006c1576080810151602060608201519101511115620006a857604051916001600160401b036101008401908111908411176200061557604090610100840182526000845260006020850152600082850152600060608501528151620003188162000779565b60008152600060208201526000838201526000606082015260808501526200033f620007e7565b60a0850152600060c0850152600060e085015233845260018060a01b03602084015116602085015260018060a01b0382840151168285015260608301516060850152608083015160808501520151602081015160406020820151910151151560405191620003ad8362000795565b6000835260208301526040820152620003c5620007e7565b9160005b600281106200065857602084810184905260a08088018690526080878101805160609081015160c08c0152905184015160e08b015260016000819055439055604080518b516001600160a01b0390811682880152958c0151861681830152908b0151909416848201528901518382015288015188916200044d91908401906200082e565b60a0810151600061012084015b600282106200062b5760c08401516101e086015260e08401516102008087019190915285528461022081016001600160401b03811182821017620006155760405280516001600160401b0381116200061557600254600181811c911680156200060a575b6020821014620005f457601f81116200058a575b50602091601f8211600114620005205791819260009262000514575b50508160011b916000199060031b1c1916176002555b604051612b7a9081620008838239f35b015190508280620004ee565b601f19821692600260005260206000209160005b858110620005715750836001951062000557575b505050811b0160025562000504565b015160001960f88460031b161c1916905582808062000548565b9192602060018192868501518155019401920162000534565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005e9575b601f0160051c01905b818110620005dc5750620004d2565b60008155600101620005cd565b9091508190620005c4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004be565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200045a565b6200066481836200085a565b516200067182866200085a565b526200067e81856200085a565b5060001981146200069257600101620003c9565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b6001620002aa565b6200070781836200085a565b516200071482866200085a565b526200072181856200085a565b506000198114620006925760010162000276565b60405163100960cb60e01b8152600d6004820152602490fd5b905060015414386200020a565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200061557604052565b606081019081106001600160401b038211176200061557604052565b51906001600160a01b03821682036200077457565b60405190620007d58262000795565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620006155781528260005b8281106200081657505050565b60209062000823620007c6565b818401520162000809565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060028110156200086c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610842565b61000e565b506100ca6107d4565b506100ca61075f565b506100ca6106b5565b506100ca610667565b506100ca6105e8565b506100ca6105c9565b506100ca61058a565b506100ca610394565b506100ca61031a565b506100ca6102c1565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610b59565b6005600054036101975760e060209160a061018861017a6109f2565b858082518301019101610d7b565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610b59565b604051906101f68261091f565b600435825260803660231901126101b0576040519161021483610947565b6024359260038410156101b05761026193815260443561023381610ce9565b602082015261024136612a85565b604082015260843561025281610ce9565b60608201526020820152610f94565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610b59565b6005600054036102a85760c060209161010061018861017a6109f2565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102da610b59565b61030e816102e661218b565b85810190600082515251151586825101526102ff61218b565b906000825251868201526123aa565b01511515604051908152f35b50346101b05760003660031901126101b057610334610b59565b60056000540361037b5761012061026d916101806103626103536109f2565b60208082518301019101610d7b565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103aa610b59565b506105746103b736612aa5565b916103c66001600054146114f0565b6105616103e26103d46109f2565b838082518301019101612ac5565b6103fd6103f86103f460045460ff1690565b1590565b611510565b60408051338152865160208201529095610447917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908890a151801590811561057e575b50611530565b6104513415611550565b8281019261055c60a06104648651610cc9565b9361047e6104796060830196875190336118b9565b611570565b61049933600180851b036104928451610cc9565b1614611590565b6104c96104c16104a761234c565b986104bb6104b58551610cc9565b8b610f5e565b51610cc9565b858901610f5e565b6104e06104d88a830151610cc9565b8a8901610f5e565b6080810151606088015260c0810151608088015260e08101518288015261050a60c0880160019052565b6105206105178251610cc9565b60e08901610f5e565b600061010088015243610120880152015191825193845190510193888282015191015115159161054e610a9d565b958652850152151587840152565b6119be565b6101408201526000610160820152612801565b5160008152602090f35b90506001541438610441565b5060003660031901126101b057602060a06105a3610b59565b61030e816105af61218b565b8581019060018251525115156040825101526102ff61218b565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105fd610b59565b6040519061060a8261091f565b600435825260603660231901126101b0576040519161062883610962565b6024359260028410156101b05761026193815260443561064781610ce9565b602082015260643561065881610ce9565b604082015260208201526123aa565b5060003660031901126101b05760206080610680610b59565b61030e8161068c610c11565b8581019060028251525115156060825101526106a6610c11565b90600082525186820152610f94565b50346101b05760003660031901126101b05761026d6107126101006106d8610b59565b60005460078110156107245760056106f091146115d0565b61070361070a60c06107036103536109f2565b0151151590565b151582840152565b60405190151581529081906020820190565b600761073091146115b0565b61075a6101606107506107416109f2565b602080825183010191016121f4565b0151151582840152565b610703565b50346101b0576000806003193601126107d157805461077c6109f2565b906040519283918252602090604082840152835191826040850152815b8381106107ba57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610799565b80fd5b5060003660031901126101b0576020806107ec610b59565b61030e816107f8610c11565b8481019060008251525115158582510152610811610c11565b90600082525185820152610f94565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b057610857610b1c565b5061026d6060610865610b59565b6108c0816040516108758161091f565b6040516108818161097d565b6000815281526020810190610894610bde565b82526004358151526001825152516040825101526108b0610c11565b9060008252516020820152610f94565b015160405191829182610820565b90600182811c921680156108fe575b60208310146108e857565b634e487b7160e01b600052602260045260246000fd5b91607f16916108dd565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761093a57604052565b610942610908565b604052565b608081019081106001600160401b0382111761093a57604052565b606081019081106001600160401b0382111761093a57604052565b602081019081106001600160401b0382111761093a57604052565b61018081019081106001600160401b0382111761093a57604052565b60a081019081106001600160401b0382111761093a57604052565b601f909101601f19168101906001600160401b0382119082101761093a57604052565b6040519060008260025491610a06836108ce565b808352600193808516908115610a7c5750600114610a2e575b50610a2c925003836109cf565b565b60026000908152600080516020612b4e83398151915294602093509091905b818310610a64575050610a2c935082010138610a1f565b85548884018501529485019487945091830191610a4d565b9050610a2c94506020925060ff191682840152151560051b82010138610a1f565b60405190606082016001600160401b0381118382101761093a57604052565b604051906101a082016001600160401b0381118382101761093a57604052565b6040519061018082016001600160401b0381118382101761093a57604052565b6040519061010082016001600160401b0381118382101761093a57604052565b60405190606082016001600160401b03811183821017610b4c575b60405260006040838281528260208201520152565b610b54610908565b610b37565b6040519061014082016001600160401b03811183821017610bbe575b60405281610120600091828152826020820152826040820152610b96610b1c565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610bc6610908565b610b75565b60405190610bd88261097d565b60008252565b60405190610beb82610947565b6000606083828152826020820152604051610c058161097d565b83815260408201520152565b60405190610c1e8261091f565b81600081526020610c2d610bde565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610c5357565b610a2c610c32565b604051610100810191906001600160401b03831181841017610cbc575b826040528092610c878161097d565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610c2d610b1c565b610cc4610908565b610c78565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b5190610a2c82610ce9565b9080601f830112156101b057604091825192610d198461091f565b839260c08301928184116101b057935b838510610d3857505050505090565b6060858303126101b0578251606091610d5082610962565b86518252602091828801518382015285880151610d6c81610ce9565b86820152815201940193610d29565b610240818303126101b057610220610e3e91610d95610abc565b93610d9f82610cd5565b8552610dad60208301610cd5565b6020860152610dbe60408301610cd5565b604086015260608201516060860152610dd960808301610cd5565b608086015260a082015160a0860152610df460c08301610cf3565b60c086015260e082015160e086015261010080830151908601526101208083015190860152610e2861014091828401610cfe565b9085015261020081015161016085015201610cf3565b61018082015290565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015610ea4575b60408501526020810151151582850152604081015151608085015201511515910152565b610eac610c32565b610e80565b516003811015610ebe5790565b610ec6610c32565b90565b604090815191610ed88361091f565b8260005b828110610ee857505050565b602090610ef3610b1c565b8184015201610edc565b60405190610f0a82610998565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152610f54610ec9565b6101408201520152565b6001600160a01b039091169052565b906002811015610f7e5760051b0190565b634e487b7160e01b600052603260045260246000fd5b610f9c610c5b565b610faa6005600054146115f0565b610fb26109f2565b91610fc7602093848082518301019101610d7b565b91610fdf610fda6103f460045460ff1690565b611610565b836040927f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f961845180611012843383610e54565b0390a161102a81518015908115611496575b50611630565b016110358151610eb1565b61103e81610c49565b6111665750506110e9906110e1610a2c956110593415611730565b6000868487019261107b6110766110708651610cc9565b3361184e565b611750565b8551600081527f5915573da2749eff9d73df6fd72031ff3f5bd6b43a6df5d7593f79a8701270a09080602081015b0390a101526104bb6110b9610efd565b966110cd6110c78851610cc9565b89610f5e565b6110d981880151610cc9565b908801610f5e565b908401610f5e565b6060810151606083015261110c6111036080830151610cc9565b60808401610f5e565b60a081015160a083015261112f61112660c0830151151590565b151560c0840152565b60e081015160e083015261010080820151908301524361012083015261014080820151908301526101608091015190820152611e86565b60016111758296959651610eb1565b61117e81610c49565b0361140057908285925101518152815161119790610cc9565b6111a090610cc9565b33146111ab90611690565b61012090818301519060e0840191825110156111c6906116b0565b80515191610100928386019081516111dd916114b9565b8884019a818c5260608093818a01938451109d8b88019e8f9061120290829015159052565b51156113f55761121581518651906114db565b838901525b8b885151848a015161122b916114db565b60808a019081529b61123d34156116d0565b019e8f5161124a90610cc9565b8c5161125691336118b9565b61125f906116f0565b875143111561126d90611710565b51156113e85751845161127f916114db565b60a08801525b5186515160a0880151611297916114db565b6112a0916114b9565b60c08701818152845160e0909801805192909811159091529586518c8251015283518b8251015280518b516112d6819282610820565b037fa991107ee30163f3922caa8df9afe9bc2a3e8887d71e22a85a70abce4a45026291a151910152611306610efd565b9a8a5161131290610cc9565b61131c908d610f5e565b898b015161132990610cc9565b611335908d8c01610f5e565b5161133f90610cc9565b61134b908c8a01610f5e565b51908a0152608088015161135e90610cc9565b61136b9060808b01610f5e565b60a088810151908a015260c08801511515151560c08a01525160e089015251908701524390860152610140928385015192818401519283519051019281838201519101511515926113ba610a9d565b948552840152901515908201526113d091611a1b565b908301526101608091015190820152610a2c90611e86565b50600060a0880152611285565b60008389015261121a565b600291506114149095929594939451610eb1565b61141d81610c49565b14611429575b50505050565b61148d936110e16110e99261143e3415611650565b600060808487019261145b6114566110708651610cc9565b611670565b8551600081527f9e40f7e99af01b84d5fea66b3d940711de592c127262e18ee83c8f033c6fa3b09080602081016110a9565b38808080611423565b90506001541438611024565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116114ce575b82106101b057565b6114d66114a2565b6114c6565b9081039081116114e85790565b610ec66114a2565b156114f757565b60405163100960cb60e01b815260116004820152602490fd5b1561151757565b60405163100960cb60e01b815260126004820152602490fd5b1561153757565b60405163100960cb60e01b815260136004820152602490fd5b1561155757565b60405163100960cb60e01b815260146004820152602490fd5b1561157757565b60405163100960cb60e01b815260156004820152602490fd5b1561159757565b60405163100960cb60e01b815260166004820152602490fd5b156115b757565b60405163100960cb60e01b8152600a6004820152602490fd5b156115d757565b60405163100960cb60e01b815260096004820152602490fd5b156115f757565b60405163100960cb60e01b815260176004820152602490fd5b1561161757565b60405163100960cb60e01b815260186004820152602490fd5b1561163757565b60405163100960cb60e01b815260196004820152602490fd5b1561165757565b60405163100960cb60e01b815260216004820152602490fd5b1561167757565b60405163100960cb60e01b815260226004820152602490fd5b1561169757565b60405163100960cb60e01b8152601c6004820152602490fd5b156116b757565b60405163100960cb60e01b8152601d6004820152602490fd5b156116d757565b60405163100960cb60e01b8152601e6004820152602490fd5b156116f757565b60405163100960cb60e01b8152601f6004820152602490fd5b1561171757565b60405163100960cb60e01b815260206004820152602490fd5b1561173757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561175757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561177757565b60405163100960cb60e01b815260236004820152602490fd5b1561179757565b602460405163100960cb60e01b8152816004820152fd5b156117b557565b60405163100960cb60e01b815260256004820152602490fd5b156117d557565b60405163100960cb60e01b815260286004820152602490fd5b156117f557565b60405163100960cb60e01b815260296004820152602490fd5b1561181557565b60405163100960cb60e01b815260266004820152602490fd5b1561183557565b60405163100960cb60e01b815260276004820152602490fd5b6000610ec6928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152611892816109b4565b5193165af16118a96118a26118fc565b809261195e565b5060208082518301019101611949565b600091610ec69383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611892816109b4565b3d15611944573d906001600160401b038211611937575b6040519161192b601f8201601f1916602001846109cf565b82523d6000602084013e565b61193f610908565b611913565b606090565b908160209103126101b05751610ec681610ce9565b156119665790565b80511561197557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156119965790565b8051156119a557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906119c8610ec9565b9260005b600281106119da5750508252565b806119e760019284610f6d565b516119f28288610f6d565b526119fd8187610f6d565b506000198114611a0e575b016119cc565b611a166114a2565b611a08565b9190611a25610ec9565b9260005b60028110611a3a5750506020830152565b80611a4760019284610f6d565b51611a528288610f6d565b52611a5d8187610f6d565b506000198114611a6e575b01611a29565b611a766114a2565b611a68565b9190611a85610ec9565b9260005b60028110611a975750508252565b80611aa460019284610f6d565b51611aaf8288610f6d565b52611aba8187610f6d565b506000198114611acb575b01611a89565b611ad36114a2565b611ac5565b9190611ae2610ec9565b9260005b60028110611af75750506020830152565b80611b0460019284610f6d565b51611b0f8288610f6d565b52611b1a8187610f6d565b506000198114611b2b575b01611ae6565b611b336114a2565b611b25565b506040513d6000823e3d90fd5b818110611b50575050565b60008155600101611b45565b611b676002546108ce565b80611b6f5750565b601f8111600114611b8257506000600255565b6002600052611bc790601f0160051c600080516020612b4e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611b45565b6000602081208160025555565b604051906101a082016001600160401b03811183821017611c4e575b604052816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152611c3d610ec9565b610140820152826101608201520152565b611c56610908565b611bf0565b6000915b60028310611c6c57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611c5f565b610a2c90929192610220610180610240830195611cb9848251610e47565b611ccb60208201516020860190610e47565b611cdd60408201516040860190610e47565b60608101516060850152611cf960808201516080860190610e47565b60a081015160a0850152611d1660c082015160c086019015159052565b60e081015160e085015261010080820151908501526101208082015190850152611d496101408083015190860190611c5b565b61016081015161020085015201511515910152565b90601f8211611d6b575050565b610a2c9160026000526020600020906020601f840160051c83019310611d99575b601f0160051c0190611b45565b9091508190611d8c565b80519091906001600160401b038111611e79575b611dcb81611dc66002546108ce565b611d5e565b602080601f8311600114611e075750819293600092611dfc575b50508160011b916000199060031b1c191617600255565b015190503880611de5565b6002600052601f19831694909190600080516020612b4e833981519152926000905b878210611e61575050836001959610611e48575b505050811b01600255565b015160001960f88460031b161c19169055388080611e3d565b80600185968294968601518155019501930190611e29565b611e81610908565b611db7565b611e8e610bcb565b61010082810180516060850180519190911184529193610120948582019081519560e084019687511160009060001461212a5750805115155b15611fda575092611fa592610a2c97611fd59693611fc79896611ee8611bd4565b97611efc611ef68651610cc9565b8a610f5e565b611f15611f0c6020870151610cc9565b60208b01610f5e565b611f2e611f256040870151610cc9565b60408b01610f5e565b865160608a0152611f4e611f456080870151610cc9565b60808b01610f5e565b60a085015160a08a0152611f71611f6860c0870151151590565b151560c08b0152565b5160e08901528451908801525190860152610140818101519086015261016090810151908501525190511115610180830152565b611faf6005600055565b611fb843600155565b60405192839160208301611c9b565b03601f1981018352826109cf565b611da3565b9050600096508695508594508493506120ae9150611ffb6020840151610cc9565b906120068151151590565b851461211b576120196080850151610cc9565b61014085018051515190936001600160a01b039261203b92919084169061212f565b61205261204b6040870151610cc9565b9251151590565b8614612102576120a461209e6120688751610cc9565b945b51805190612099604060208401519301511515612085610a9d565b938c85526020850152604084019015159052565b611a7b565b60200190565b515192169061212f565b6101606120c36120be8351610cc9565b610cc9565b910151908282156120f9575bf1156120ec575b600080556120e46000600155565b610a2c611b5c565b6120f4611b38565b6120d6565b506108fc6120cf565b6120a461209e6121156080880151610cc9565b9461206a565b6121258451610cc9565b612019565b611ec7565b6000919061218493838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261216d81610947565b5193165af16118a961217d6118fc565b809261198e565b156101b057565b604051906121988261091f565b81600081526020610c2d610b1c565b60021115610c5357565b91908260809103126101b0576040516121c981610947565b60608082946121d781610cd5565b845260208101516020850152604081015160408501520151910152565b90610280828203126101b0576122c061026061220e610adc565b9361221881610cd5565b855261222660208201610cd5565b602086015261223760408201610cd5565b604086015261224984606083016121b1565b606086015260e08101516080860152610100938482015160a0870152610120612273818401610cf3565b60c08801526122ac6101409261228a848601610cd5565b60e08a01526101609761229e898701610cf3565b908a01526101808501610cfe565b908701526102408201519086015201610cf3565b9082015290565b9092916040602060809260a085019660018060a01b0316855280518286015201518051600281101561230d575b8285015260208101511515606085015201511515910152565b612315610c32565b6122f4565b516002811015610ebe5790565b6040519061233482610947565b60006060838281528260208201528260408201520152565b6040519061235982610998565b81610160600091828152826020820152826040820152612377612327565b60608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152610f54610ec9565b6123b8600760005414611770565b6123c06109f2565b906123d56020928380825183010191016121f4565b906123ed6123e86103f460045460ff1690565b611790565b826040917fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8351806124208433836122c7565b0390a1612438815180159081156126a1575b506117ae565b01612443815161231a565b61244c816121a7565b61253457506124bb906110e1610a2c95612466341561180e565b6000838087019261248261247d6110708651610cc9565b61182e565b8151600081527fe6d2e82c41ed067213f05f752c260ea502880a168ade3c19213be111a25165c890602090a101526104bb6110b961234c565b606081015160608301526080810151608083015260a081015160a0830152600060c08301526124f96124f060e0830151610cc9565b60e08401610f5e565b61251361010061250b81840151151590565b151590840152565b61012043818401528101519061014091828401520151610160820152612801565b6125406001915161231a565b612549816121a7565b146125545750505050565b61148d9361268b9161256634156117ce565b612686818501956125c960a061257c8951610cc9565b9561259661259160808b0198895190336118b9565b6117ee565b8551600181527f9318749a01f6669c30a656b02108c249b63830e4e13a2231ca02190a1a12d7a390602090a10160019052565b6126046125fc6125d761234c565b986125e56104b58a51610cc9565b6104bb6125f4858b0151610cc9565b858c01610f5e565b848901610f5e565b606086015160608801528351608088015260a086015160a088015261263861262f60c0880151151590565b151560c0890152565b6126453360e08901610f5e565b600161010088015261012043818901528601519281840151948551905101948183820151910151151592612677610a9d565b96875286015284019015159052565b611a1b565b9061014091828401520151610160820152612801565b90506001541438612432565b604051906126ba82610998565b816101606000918281528260208201528260408201526126d8612327565b60608201528260808201528260a08201528260c08201528260e082015282610100820152612704610ec9565b610120820152826101408201520152565b610a2c90929192610260610280820194612730838251610e47565b61274260208201516020850190610e47565b61275460408201516040850190610e47565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c0810151916127b3610120938487019015159052565b6127ef60e0830151916127cc6101409384890190610e47565b830151936127e1610160958689019015159052565b830151610180870190611c5b565b81015161024085015201511515910152565b610100818101805115158015612a795760005b15612902575050611fd5611fc7916128e0610a2c9460006128336126ad565b936128476128418451610cc9565b86610f5e565b6128606128576020850151610cc9565b60208701610f5e565b6128796128706040850151610cc9565b60408701610f5e565b606083015160608601526080830151608086015260a083015160a08601526128a460c0860160019052565b6128bd6128b460e0850151610cc9565b60e08701610f5e565b840152610140808201516101208501526101608092015190840152820160019052565b6128ea6007600055565b6128f343600155565b60405192839160208301612715565b15612a3d5791610a2c92612a29604083019361291e8551610cc9565b906129298551610cc9565b936129526101409586880194612940865160200190565b5151916001600160a01b03169061212f565b612990612987612960610efd565b9861296e6104b58a51610cc9565b6104bb61297e60208b0151610cc9565b60208c01610f5e565b60408901610f5e565b60a086015160608801526129b36129aa60e0880151610cc9565b60808901610f5e565b6000610120926129d0611f68858a0194855160a08d015251151590565b6129e48351604060608b01510151906114b9565b60e08a0152880152519086015251602081015190612a24604060208401519301511515612a0f610a9d565b93600085526020850152604084019015159052565b611ad8565b908301526101608091015190820152611e86565b505060008080836120ae612a55602084970151610cc9565b612a5f8351610cc9565b6101408401515151916001600160a01b039091169061212f565b60c08401511515612814565b60209060631901126101b05760405190612a9e8261097d565b6064358252565b60209060031901126101b05760405190612abe8261097d565b6004358252565b610200818303126101b0576101e090612b33612adf610afc565b93612ae983610cd5565b8552612af760208401610cd5565b6020860152612b0860408401610cd5565b604086015260608301516060860152612b2481608085016121b1565b60808601526101008301610cfe565b60a08401526101c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 13309,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_nnt.rsh:51:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_nnt.rsh:144:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_nnt.rsh:94:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_nnt.rsh:86:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_nnt.rsh:55:62:after expr stmt semicolon',
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
