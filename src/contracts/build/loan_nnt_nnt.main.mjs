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
    impure: [`Borrower_claimRefund()byte[0]`, `Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()byte[0]`, `Lender_lend()byte`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_claimRefund()byte[0]`, `Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()byte[0]`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByATAAEEBQgHICgwoI0G2faovAbX8dudB56S1pUI49Tx8Q+Tr+T5Br7zptcD9q6A9AP/8ca6AgImAwEBAQAAIjUAMRhBB4MqZEkiWzUBIQRbNQI2GgAXSUEBEiI1BCM1BkkhCgxAAHlJIQsMQABASSEMDEAAKUkhDQxAABQhDRJEKjX/gAECNP9QIQSvUEIBzCEMEkQqNf8pNP9QQgDqIQsSRDYaATX/KDT/UEIBrkkhDgxAABIhDhJEKjX/KTT/UCEEr1BCAZUhChJENAElEkQpZChkUEk1A1dpCDUHQgbhSSEPDEAALkkhEAxAAA4hEBJEKjX/KDT/UEIAjCEPEkQ0ASUSRClkKGRQSTUDV6MBNQdCBqxJIREMQAAZIRESRDQBJRJEKWQoZFBJNQNXWAg1B0IGjIGPxsUqEkQ0AUkhBQxAABQhBRJEKWQoZFBJNQNXxAE1B0IGaCUSRClkKGRQSTUDV2ABNQdCBlU2GgIXNQQ2GgM2GgEXSSQMQAJ0SSUMQADWJRJEIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEGWzX+IQdbNf1XMDg1/IFoWzX7gXBbNfpXmiI1+YG8AVs1+Ek1BTX3gASxmSJFNPdQsDT3IlVAAC+ACAAAAAAAAAO5sCo1BzT/NP40/TT8NPs0+iI0A1d5IDQDV5kBFzIGNPk0+EIDTjT5VxERNfY0+zT9iAXegAkAAAAAAAAD8QGwKDUHNP80/jT9NPw0+zT6NANXeAEXMQAjMgY0+TT2SSJbNPsIFlwAXBE0+EIDBkglNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSklXACA1/yEGWzX+IQdbNf0hCFs1/Fc4IDX7gVhbNfpXYAEXNfmBYVs1+IFpWzX3V3kiNfaBmwFbNfVJNQU19IAE1Y4dqzT0ULA09CJVSSMMQAD9SSESDEAALSESEkSACAAAAAAAAAWrsCo1BzT/NP40/TT8NPs0+jT5NPg09zIGNPY09UIDa0g09FcBCDXzNPMXNfIxADT/EkQ0A4FxWzT4DkQ08jT3CEk18TT8DUk18EEACjTxNPwJNe9CAAMiNe808jTvCTXuNPZXERE17TTuNP2IBLAyBjT4DkQ08EEACjTxNPwJNexCAAMiNew09zTyNOwJCDXrgAgAAAAAAAAFQjTrNPwPFlEHCDTrFlA0/BZQULA06zT8DxZRBwg06xZQNPwWUDUHNP80/jT9NPw0+zT6NPk0+DTrMgY09jTtSSJbNO4IFlwAXBE09UICokiACAAAAAAAAATKsCo1BzT/NP40/TT8NPs0+jT5NPg09zIGNPY09UICeEkjDEAAfyMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBls1/iEIWzX9V3AiNfyABJqLkXSwNPxXABE1+zT9NP6IA8A0/zEAEkQ0/zT+NAMhB1s0A1c4ODQDgZIBWzQDgZoBWyM0/yIyBjT8NPtJIls0/QgWXABcACJCAOlIIQmIA2kiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQRbNf6BEFs1/VcYODX8gATxkliKNP8WUDT+FlA0/RZQNPxQsIERr0k1+0lQSTX6SVcAESEEr1wAXABJNflJVxERIQSvXABcETX4NP40/xNEIQmIAvqxIrIBIrISJLIQMgqyFDT/shGzIQmIAuKxIrIBIrISJLIQMgqyFDT+shGzNPwhCFs19zT8IQZbNfY09zT2DEQxADT/FlA0/hZQNP0WUDT8UDT4UDT3FlA09hZQKUsBVwB/ZyhLAVd/I2dIIzUBMgY1AkICNDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT8FDT6EEEAPzT0NPUWUDT2FlA091A0+BZQNPkWUChQNPtQKVA0/lA0/xZQKFApSwFXAH9nKEsBV39GZ0ghBTUBMgY1AkIB1DT8QQBLNP5XERFJNfMiWzXysSKyATTyshIkshA09LIUNPayEbM09DT1NPY0+TT7NP00/DT9NPchB1sIIjT9NP408zTySQkWXABcETT/QgBasSKyATT+VwARIluyEiSyEDT0shQ09bIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJLIQMgmyFTIKshQ09rIRs7EisgEishIkshAyCbIVMgqyFDT1shGzQgEPNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPw09ww18zT9NPsMNPMQQQBWNPw09w818jT0NPUWUDT2FlA09xZQNPhQNPkWUDT6FlEHCFA0+xZQNPwWUDT9FlA0/lA0/xZQNPIWUQcIUClLAVcAf2coSwFXfyVnSCU1ATIGNQJCAKo0/lcAEUk18iJbNfGxIrIBNPGyEiSyEDT0NPg0802yFDT1shGzsSKyATT+NPI08UkJFlwAXABXEREiW7ISJLIQNPg09DTzTbIUNPayEbOxIrIBNP+yCCOyEDT0sgezsSKyASKyEiSyEDIJshUyCrIUNPayEbOxIrIBIrISJLIQMgmyFTIKshQ09bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 197,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"internalType":"struct T12","name":"v3133","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1009","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1226","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1346","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1451","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v953","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3119","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v3135","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3147","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v3161","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200343a38819003601f8101601f191683016001600160401b038111848210176200062a5783928291604052833981010390610100821262000789576040519160a08301906001600160401b038211848310176200062a57608091604052825184526200007160208401620007c6565b60208501526200008460408401620007c6565b604085015260608301516060850152607f190112620007895760e060405191620000ae836200078e565b620000bc60808201620007c6565b835260a0810151602084015260c0810151604084015201516060820152608082015243600355604051610140810181811060018060401b038211176200062a57600091610120916040528281528260208201528260408201526200011f620007db565b60608201528260808201528260a08201528260c08201528260e08201528261010082015201526040519062000154826200078e565b6200015e620007db565b82526200016a620007fc565b602083015262000179620007fc565b604083015262000188620007fc565b606083015260ff6004541662000770577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b036040850151166060820152606084015160808201526200020b608085015160a083019062000843565ba18051801590811562000763575b50156200074a5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200026983620007aa565b600083526020830152604082015262000281620007fc565b9160005b60028110620007105750508152806040840152602081015160406020820151910151151560405191620002b883620007aa565b6000835260208301526040820152620002d0620007fc565b9160005b60028110620006c05750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006b85760005b156200069f5734620006865760808101516020606082015191015111156200066d57604051916001600160401b036101008401908111908411176200062a5760209160606080926101008601604052600086526000858701526000604087015260008287015260405162000383816200078e565b600081526000868201526000604082015260008382015284870152620003a8620007fc565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015260018060a01b03604084015116604087015281830151828701528383015184870152015160a0850152606082820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000462608082015160a084019062000843565b60a0810151600061012084015b60028210620006405760c08401516101e086015260e08401516102008087019190915285528461022081016001600160401b038111828210176200062a5760405280516001600160401b0381116200062a57600254600181811c911680156200061f575b60208210146200060957601f81116200059f575b50602091601f8211600114620005355791819260009262000529575b50508160011b916000199060031b1c1916176002555b604051612ba29081620008988239f35b01519050828062000503565b601f19821692600260005260206000209160005b85811062000586575083600195106200056c575b505050811b0160025562000519565b015160001960f88460031b161c191690558280806200055d565b9192602060018192868501518155019401920162000549565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005fe575b601f0160051c01905b818110620005f15750620004e7565b60008155600101620005e2565b9091508190620005d9565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004d3565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200046f565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60016200030f565b620006cc81836200086f565b51620006d982866200086f565b52620006e681856200086f565b506000198114620006fa57600101620002d4565b634e487b7160e01b600052601160045260246000fd5b6200071c81836200086f565b516200072982866200086f565b526200073681856200086f565b506000198114620006fa5760010162000285565b60405163100960cb60e01b8152600d6004820152602490fd5b9050600154143862000219565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200062a57604052565b606081019081106001600160401b038211176200062a57604052565b51906001600160a01b03821682036200078957565b60405190620007ea82620007aa565b60006040838281528260208201520152565b6040805191908281016001600160401b038111848210176200062a5781528260005b8281106200082b57505050565b60209062000838620007db565b81840152016200081e565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906002811015620008815760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610843565b61000e565b506100ca6107d5565b506100ca610760565b506100ca6106b6565b506100ca610668565b506100ca6105e9565b506100ca6105ca565b506100ca61058b565b506100ca610394565b506100ca61031a565b506100ca6102c1565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610b5a565b6005600054036101975760e060209160a061018861017a6109f3565b858082518301019101610d21565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610b5a565b604051906101f682610920565b600435825260803660231901126101b0576040519161021483610948565b6024359260038410156101b05761026193815260443561023381610c8f565b602082015261024136612aad565b604082015260843561025281610c8f565b6060820152602082015261141c565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610b5a565b6005600054036102a85760c060209161010061018861017a6109f3565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102da610b5a565b61030e816102e6610c49565b85810190600082515251151586825101526102ff610c49565b90600082525186820152611d46565b01511515604051908152f35b50346101b05760003660031901126101b057610334610b5a565b60056000540361037b5761012061026d916101806103626103536109f3565b60208082518301019101610d21565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103aa610b5a565b506105756103b736612acd565b916103d36103ce6103ca60045460ff1690565b1590565b610ded565b60408051338152845160208201529093610562917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a161041a600160005414610e0d565b6104486104366104286109f3565b858082518301019101612aed565b9151801590811561057f575b50610e2d565b6104523415610e4d565b8281019261055d60a06104658651610c6f565b9361047f61047a6060830196875190336119e4565b610e6d565b61049a33600180851b036104938451610c6f565b1614610e8d565b6104ca6104c26104a8611ce8565b986104bc6104b68551610c6f565b8b6113e6565b51610c6f565b8589016113e6565b6104e16104d98a830151610c6f565b8a89016113e6565b6080810151606088015260c0810151608088015260e08101518288015261050b60c0880160019052565b6105216105188251610c6f565b60e089016113e6565b600061010088015243610120880152015191825193845190510193888282015191015115159161054f610a9e565b958652850152151587840152565b611ae9565b61014082015260006101608201526123a1565b5160008152602090f35b90506001541438610442565b5060003660031901126101b057602060a06105a4610b5a565b61030e816105b0610c49565b8581019060018251525115156040825101526102ff610c49565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105fe610b5a565b6040519061060b82610920565b600435825260603660231901126101b0576040519161062983610963565b6024359260028410156101b05761026193815260443561064881610c8f565b602082015260643561065981610c8f565b60408201526020820152611d46565b5060003660031901126101b05760206080610681610b5a565b61030e8161068d610bff565b8581019060028251525115156060825101526106a7610bff565b9060008252518682015261141c565b50346101b05760003660031901126101b05761026d6107136101006106d9610b5a565b60005460078110156107255760056106f19114610ecd565b61070461070b60c06107046103536109f3565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107319114610ead565b61075b6101606107516107426109f3565b6020808251830101910161118e565b0151151582840152565b610704565b50346101b0576000806003193601126107d257805461077d6109f3565b906040519283918252602090604082840152835191826040850152815b8381106107bb57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161079a565b80fd5b5060003660031901126101b0576020806107ed610b5a565b61030e816107f9610bff565b8481019060008251525115158582510152610812610bff565b9060008252518582015261141c565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b057610858610b1d565b5061026d6060610866610b5a565b6108c18160405161087681610920565b6040516108828161097e565b6000815281526020810190610895610bcc565b82526004358151526001825152516040825101526108b1610bff565b906000825251602082015261141c565b015160405191829182610821565b90600182811c921680156108ff575b60208310146108e957565b634e487b7160e01b600052602260045260246000fd5b91607f16916108de565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761093b57604052565b610943610909565b604052565b608081019081106001600160401b0382111761093b57604052565b606081019081106001600160401b0382111761093b57604052565b602081019081106001600160401b0382111761093b57604052565b61018081019081106001600160401b0382111761093b57604052565b60a081019081106001600160401b0382111761093b57604052565b601f909101601f19168101906001600160401b0382119082101761093b57604052565b6040519060008260025491610a07836108cf565b808352600193808516908115610a7d5750600114610a2f575b50610a2d925003836109d0565b565b60026000908152600080516020612b7683398151915294602093509091905b818310610a65575050610a2d935082010138610a20565b85548884018501529485019487945091830191610a4e565b9050610a2d94506020925060ff191682840152151560051b82010138610a20565b60405190606082016001600160401b0381118382101761093b57604052565b604051906101a082016001600160401b0381118382101761093b57604052565b6040519061018082016001600160401b0381118382101761093b57604052565b6040519061010082016001600160401b0381118382101761093b57604052565b60405190606082016001600160401b03811183821017610b4d575b60405260006040838281528260208201520152565b610b55610909565b610b38565b6040519061014082016001600160401b03811183821017610bbf575b60405281610120600091828152826020820152826040820152610b97610b1d565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610bc7610909565b610b76565b60405190610bd982610948565b6000606083828152826020820152604051610bf38161097e565b83815260408201520152565b60405190610c0c82610920565b81600081526020610c1b610bcc565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610c4157565b610a2d610c20565b60405190610c5682610920565b81600081526020610c1b610b1d565b60021115610c4157565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b5190610a2d82610c8f565b9080601f830112156101b057604091825192610cbf84610920565b839260c08301928184116101b057935b838510610cde57505050505090565b6060858303126101b0578251606091610cf682610963565b86518252602091828801518382015285880151610d1281610c8f565b86820152815201940193610ccf565b610240818303126101b057610220610de491610d3b610abd565b93610d4582610c7b565b8552610d5360208301610c7b565b6020860152610d6460408301610c7b565b604086015260608201516060860152610d7f60808301610c7b565b608086015260a082015160a0860152610d9a60c08301610c99565b60c086015260e082015160e086015261010080830151908601526101208083015190860152610dce61014091828401610ca4565b9085015261020081015161016085015201610c99565b61018082015290565b15610df457565b60405163100960cb60e01b815260116004820152602490fd5b15610e1457565b60405163100960cb60e01b815260126004820152602490fd5b15610e3457565b60405163100960cb60e01b815260136004820152602490fd5b15610e5457565b60405163100960cb60e01b815260146004820152602490fd5b15610e7457565b60405163100960cb60e01b815260156004820152602490fd5b15610e9457565b60405163100960cb60e01b815260166004820152602490fd5b15610eb457565b60405163100960cb60e01b8152600a6004820152602490fd5b15610ed457565b60405163100960cb60e01b815260096004820152602490fd5b15610ef457565b60405163100960cb60e01b815260176004820152602490fd5b15610f1457565b60405163100960cb60e01b815260186004820152602490fd5b15610f3457565b60405163100960cb60e01b815260196004820152602490fd5b15610f5457565b60405163100960cb60e01b815260216004820152602490fd5b15610f7457565b60405163100960cb60e01b815260226004820152602490fd5b15610f9457565b60405163100960cb60e01b8152601c6004820152602490fd5b15610fb457565b60405163100960cb60e01b8152601d6004820152602490fd5b15610fd457565b60405163100960cb60e01b8152601e6004820152602490fd5b15610ff457565b60405163100960cb60e01b8152601f6004820152602490fd5b1561101457565b60405163100960cb60e01b815260206004820152602490fd5b1561103457565b60405163100960cb60e01b8152601a6004820152602490fd5b1561105457565b60405163100960cb60e01b8152601b6004820152602490fd5b1561107457565b60405163100960cb60e01b815260236004820152602490fd5b1561109457565b602460405163100960cb60e01b8152816004820152fd5b156110b257565b60405163100960cb60e01b815260256004820152602490fd5b156110d257565b60405163100960cb60e01b815260286004820152602490fd5b156110f257565b60405163100960cb60e01b815260296004820152602490fd5b1561111257565b60405163100960cb60e01b815260266004820152602490fd5b1561113257565b60405163100960cb60e01b815260276004820152602490fd5b91908260809103126101b05760405161116381610948565b606080829461117181610c7b565b845260208101516020850152604081015160408501520151910152565b90610280828203126101b05761125a6102606111a8610add565b936111b281610c7b565b85526111c060208201610c7b565b60208601526111d160408201610c7b565b60408601526111e3846060830161114b565b606086015260e08101516080860152610100938482015160a087015261012061120d818401610c99565b60c088015261124661014092611224848601610c7b565b60e08a015261016097611238898701610c99565b908a01526101808501610ca4565b908701526102408201519086015201610c99565b9082015290565b604051610100810191906001600160401b038311818410176112c2575b82604052809261128d8161097e565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610c1b610b1d565b6112ca610909565b61127e565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561132c575b60408501526020810151151582850152604081015151608085015201511515910152565b611334610c20565b611308565b5160038110156113465790565b61134e610c20565b90565b60409081519161136083610920565b8260005b82811061137057505050565b60209061137b610b1d565b8184015201611364565b6040519061139282610999565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526113dc611351565b6101408201520152565b6001600160a01b039091169052565b9060028110156114065760051b0190565b634e487b7160e01b600052603260045260246000fd5b61149d90611428611261565b61143f61143a6103ca60045460ff1690565b610eed565b6040907f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f9618251806114718633836112dc565b0390a1611482600560005414610f0d565b61148a6109f3565b6020948186808094518301019101610d21565b936114b38151801590811561191f575b50610f2d565b016114be8151611339565b6114c781610c37565b6115ef5750506115729061156a610a2d956114e2341561102d565b600086848701926115046114ff6114f98651610c6f565b33611979565b61104d565b8551600081527f5915573da2749eff9d73df6fd72031ff3f5bd6b43a6df5d7593f79a8701270a09080602081015b0390a101526104bc611542611385565b966115566115508851610c6f565b896113e6565b61156281880151610c6f565b9088016113e6565b9084016113e6565b6060810151606083015261159561158c6080830151610c6f565b608084016113e6565b60a081015160a08301526115b86115af60c0830151151590565b151560c0840152565b60e081015160e083015261010080820151908301524361012083015261014080820151908301526101608091015190820152612854565b60016115fe8296959651611339565b61160781610c37565b0361188957908285925101518152815161162090610c6f565b61162990610c6f565b331461163490610f8d565b61012090818301519060e08401918251101561164f90610fad565b805151916101009283860190815161166691611942565b8884019a818c5260608093818a01938451109d8b88019e8f9061168b90829015159052565b511561187e5761169e8151865190611964565b838901525b8b885151848a01516116b491611964565b60808a019081529b6116c63415610fcd565b019e8f516116d390610c6f565b8c516116df91336119e4565b6116e890610fed565b87514311156116f69061100d565b51156118715751845161170891611964565b60a08801525b5186515160a088015161172091611964565b61172991611942565b60c08701818152845160e0909801805192909811159091529586518c8251015283518b8251015280518b5161175f819282610821565b037fa991107ee30163f3922caa8df9afe9bc2a3e8887d71e22a85a70abce4a45026291a15191015261178f611385565b9a8a5161179b90610c6f565b6117a5908d6113e6565b898b01516117b290610c6f565b6117be908d8c016113e6565b516117c890610c6f565b6117d4908c8a016113e6565b51908a015260808801516117e790610c6f565b6117f49060808b016113e6565b60a088810151908a015260c08801511515151560c08a01525160e08901525190870152439086015261014092838501519281840151928351905101928183820151910151151592611843610a9e565b9485528401529015159082015261185991611b46565b908301526101608091015190820152610a2d90612854565b50600060a088015261170e565b6000838901526116a3565b6002915061189d9095929594939451611339565b6118a681610c37565b146118b2575b50505050565b6119169361156a611572926118c73415610f4d565b60006080848701926118e46118df6114f98651610c6f565b610f6d565b8551600081527f9e40f7e99af01b84d5fea66b3d940711de592c127262e18ee83c8f033c6fa3b0908060208101611532565b388080806118ac565b905060015414386114ad565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611957575b82106101b057565b61195f61192b565b61194f565b9081039081116119715790565b61134e61192b565b600061134e928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526119bd816109b5565b5193165af16119d46119cd611a27565b8092611a89565b5060208082518301019101611a74565b60009161134e9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526119bd816109b5565b3d15611a6f573d906001600160401b038211611a62575b60405191611a56601f8201601f1916602001846109d0565b82523d6000602084013e565b611a6a610909565b611a3e565b606090565b908160209103126101b0575161134e81610c8f565b15611a915790565b805115611aa057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15611ac15790565b805115611ad057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611af3611351565b9260005b60028110611b055750508252565b80611b12600192846113f5565b51611b1d82886113f5565b52611b2881876113f5565b506000198114611b39575b01611af7565b611b4161192b565b611b33565b9190611b50611351565b9260005b60028110611b655750506020830152565b80611b72600192846113f5565b51611b7d82886113f5565b52611b8881876113f5565b506000198114611b99575b01611b54565b611ba161192b565b611b93565b9190611bb0611351565b9260005b60028110611bc55750506020830152565b80611bd2600192846113f5565b51611bdd82886113f5565b52611be881876113f5565b506000198114611bf9575b01611bb4565b611c0161192b565b611bf3565b9190611c10611351565b9260005b60028110611c225750508252565b80611c2f600192846113f5565b51611c3a82886113f5565b52611c4581876113f5565b506000198114611c56575b01611c14565b611c5e61192b565b611c50565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611ca9575b8285015260208101511515606085015201511515910152565b611cb1610c20565b611c90565b5160028110156113465790565b60405190611cd082610948565b60006060838281528260208201528260408201520152565b60405190611cf582610999565b81610160600091828152826020820152826040820152611d13611cc3565b60608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526113dc611351565b611dbe90611d61611d5c6103ca60045460ff1690565b61106d565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa815180611d92853383611c63565b0390a1611da360076000541461108d565b611dab6109f3565b602093818580809451830101910161118e565b92611dd48151801590811561203d575b506110ab565b01611ddf8151611cb6565b611de881610c65565b611ed05750611e579061156a610a2d95611e02341561110b565b60008380870192611e1e611e196114f98651610c6f565b61112b565b8151600081527fe6d2e82c41ed067213f05f752c260ea502880a168ade3c19213be111a25165c890602090a101526104bc611542611ce8565b606081015160608301526080810151608083015260a081015160a0830152600060c0830152611e95611e8c60e0830151610c6f565b60e084016113e6565b611eaf610100611ea781840151151590565b151590840152565b610120438184015281015190610140918284015201516101608201526123a1565b611edc60019151611cb6565b611ee581610c65565b14611ef05750505050565b6119169361202791611f0234156110cb565b61202281850195611f6560a0611f188951610c6f565b95611f32611f2d60808b0198895190336119e4565b6110eb565b8551600181527f9318749a01f6669c30a656b02108c249b63830e4e13a2231ca02190a1a12d7a390602090a10160019052565b611fa0611f98611f73611ce8565b98611f816104b68a51610c6f565b6104bc611f90858b0151610c6f565b858c016113e6565b8489016113e6565b606086015160608801528351608088015260a086015160a0880152611fd4611fcb60c0880151151590565b151560c0890152565b611fe13360e089016113e6565b600161010088015261012043818901528601519281840151948551905101948183820151910151151592612013610a9e565b96875286015284019015159052565b611b46565b90610140918284015201516101608201526123a1565b90506001541438611dce565b506040513d6000823e3d90fd5b818110612061575050565b60008155600101612056565b6120786002546108cf565b806120805750565b601f811160011461209357506000600255565b60026000526120d890601f0160051c600080516020612b76833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612056565b6000602081208160025555565b604051906120f282610999565b81610160600091828152826020820152826040820152612110611cc3565b60608201528260808201528260a08201528260c08201528260e08201528261010082015261213c611351565b610120820152826101408201520152565b6000915b6002831061215e57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612151565b610a2d909291926102606102808201946121a88382516112cf565b6121ba602082015160208501906112cf565b6121cc604082015160408501906112cf565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c08101519161222b610120938487019015159052565b61226760e08301519161224461014093848901906112cf565b83015193612259610160958689019015159052565b83015161018087019061214d565b81015161024085015201511515910152565b90601f8211612286575050565b610a2d9160026000526020600020906020601f840160051c830193106122b4575b601f0160051c0190612056565b90915081906122a7565b80519091906001600160401b038111612394575b6122e6816122e16002546108cf565b612279565b602080601f83116001146123225750819293600092612317575b50508160011b916000199060031b1c191617600255565b015190503880612300565b6002600052601f19831694909190600080516020612b76833981519152926000905b87821061237c575050836001959610612363575b505050811b01600255565b015160001960f88460031b161c19169055388080612358565b80600185968294968601518155019501930190612344565b61239c610909565b6122d2565b6101008181018051151580156126895760005b156124b55750506124b06124a291612480610a2d9460006123d36120e5565b936123e76123e18451610c6f565b866113e6565b6124006123f76020850151610c6f565b602087016113e6565b6124196124106040850151610c6f565b604087016113e6565b606083015160608601526080830151608086015260a083015160a086015261244460c0860160019052565b61245d61245460e0850151610c6f565b60e087016113e6565b840152610140808201516101208501526101608092015190840152820160019052565b61248a6007600055565b61249343600155565b6040519283916020830161218d565b03601f1981018352826109d0565b6122be565b156125f95791610a2d926125e560408301936124d18551610c6f565b906124dc8551610c6f565b9361250561014095868801946124f3865160200190565b5151916001600160a01b031690612695565b61254361253a612513611385565b986125216104b68a51610c6f565b6104bc61253160208b0151610c6f565b60208c016113e6565b604089016113e6565b60a0860151606088015261256661255d60e0880151610c6f565b608089016113e6565b60006101209261258c612583858a0194855160a08d015251151590565b151560c08b0152565b6125a08351604060608b0151015190611942565b60e08a01528801525190860152516020810151906125e06040602084015193015115156125cb610a9e565b93600085526020850152604084019015159052565b611ba6565b908301526101608091015190820152612854565b50506000808083612635612611602084970151610c6f565b61261b8351610c6f565b6101408401515151916001600160a01b0390911690612695565b61016061264a6126458351610c6f565b610c6f565b91015190828215612680575bf115612673575b6000805561266b6000600155565b610a2d61206d565b61267b612049565b61265d565b506108fc612656565b60c084015115156123b4565b600091906126ea93838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526126d381610948565b5193165af16119d46126e3611a27565b8092611ab9565b156101b057565b604051906126fe82610920565b60006020838281520152565b604051906101a082016001600160401b03811183821017612784575b604052816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152612773611351565b610140820152826101608201520152565b61278c610909565b612726565b610a2d909291926102206101806102408301956127af8482516112cf565b6127c1602082015160208601906112cf565b6127d3604082015160408601906112cf565b606081015160608501526127ef608082015160808601906112cf565b60a081015160a085015261280c60c082015160c086019015159052565b60e081015160e08501526101008082015190850152610120808201519085015261283f610140808301519086019061214d565b61016081015161020085015201511515910152565b61285c6126f1565b61010082810180516060850180519190911184529291906101209182860191825160e0880190815111600090600014612aa85750855115155b156129af57966124a2969461298d946129839484610a2d9b6128c760206124b09c98518c511115980197889015159052565b6128cf61270a565b996128e36128dd8851610c6f565b8c6113e6565b6128fc6128f36020890151610c6f565b60208d016113e6565b61291561290c6040890151610c6f565b60408d016113e6565b5160608b015261293461292b6080880151610c6f565b60808c016113e6565b60a086015160a08b015261295761294e60c0880151151590565b151560c08c0152565b5160e08a0152519088015251908601526101408082015190860152610160809101519085015251151590565b1515610180830152565b6129976005600055565b6129a043600155565b60405192839160208301612791565b50505050506000809381935061263582936129cd6020840151610c6f565b906129d88151151590565b8514612a99576129eb6080850151610c6f565b61014085018051515190936001600160a01b0392612a0d929190841690612695565b612a24612a1d6040870151610c6f565b9251151590565b8614612a8057612a76612a70612a3a8751610c6f565b945b51805190612a6b604060208401519301511515612a57610a9e565b938c85526020850152604084019015159052565b611c06565b60200190565b5151921690612695565b612a76612a70612a936080880151610c6f565b94612a3c565b612aa38451610c6f565b6129eb565b612895565b60209060631901126101b05760405190612ac68261097e565b6064358252565b60209060031901126101b05760405190612ae68261097e565b6004358252565b610200818303126101b0576101e090612b5b612b07610afd565b93612b1183610c7b565b8552612b1f60208401610c7b565b6020860152612b3060408401610c7b565b604086015260608301516060860152612b4c816080850161114b565b60808601526101008301610ca4565b60a08401526101c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 13370,
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
