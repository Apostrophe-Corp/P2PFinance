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
      const [v731, v732, v733, v734, v735, v744, v748, v749] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = svs;
      return (await ((async () => {
        
        
        return v973;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v731, v732, v733, v734, v735, v744, v748, v749] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = svs;
      return (await ((async () => {
        
        
        return v766;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v731, v732, v733, v734, v735, v744, v748, v749] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = svs;
      return (await ((async () => {
        
        
        return v933;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = svs;
      return (await ((async () => {
        
        
        return v795;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v731, v732, v733, v734, v735, v744, v748, v749] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = svs;
      return (await ((async () => {
        
        
        return v1004;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = svs;
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
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
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
  
  
  const v705 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v706 = [v705, v705];
  const v712 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_nnt.rsh:44:43:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v713 = v712.address;
  const v714 = v712.amount;
  const v715 = v712.collateral;
  const v716 = v712.maturation;
  const v717 = v712.principal;
  const v718 = v712.tokCollateral;
  const v719 = v712.tokLoan;
  const v727 = stdlib.lt(v717, v714);
  stdlib.assert(v727, {
    at: './src/contracts/loan_nnt_nnt.rsh:46:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v728 = stdlib.tokenEq(v718, v719);
  const v729 = v728 ? false : true;
  stdlib.assert(v729, {
    at: './src/contracts/loan_nnt_nnt.rsh:47:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v730 = {
    address: v713,
    amount: v714,
    maturation: v716,
    principal: v717
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v718, v719, v715, v730],
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
      
      
      const {data: [v732, v733, v734, v735], secs: v737, time: v736, didSend: v51, from: v731 } = txn1;
      
      const v738 = v706[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v739 = stdlib.Array_set(v738, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v740 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v739);
      const v742 = v740[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
      const v743 = stdlib.Array_set(v742, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v744 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v743);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v732
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v733
        });
      ;
      const v748 = v735.principal;
      const v749 = v735.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v732, v733, v734, v735], secs: v737, time: v736, didSend: v51, from: v731 } = txn1;
  const v738 = v706[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v739 = stdlib.Array_set(v738, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v740 = stdlib.Array_set(v706, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v739);
  const v742 = v740[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
  const v743 = stdlib.Array_set(v742, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v744 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v743);
  const v746 = stdlib.tokenEq(v733, v732);
  const v747 = v746 ? false : true;
  stdlib.assert(v747, {
    at: './src/contracts/loan_nnt_nnt.rsh:49:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v748 = v735.principal;
  const v749 = v735.amount;
  const v750 = stdlib.lt(v748, v749);
  stdlib.assert(v750, {
    at: './src/contracts/loan_nnt_nnt.rsh:50:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v731, v732, v733, v734, v735, v744, v748, v749],
    evt_cnt: 0,
    funcNum: 1,
    lct: v736,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), [[v734, v732]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v753, time: v752, didSend: v61, from: v751 } = txn2;
      
      ;
      const v754 = v744[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v755 = v754[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v756 = stdlib.add(v755, v734);
      const v758 = stdlib.Array_set(v754, '0', v756);
      const v759 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v758);
      sim_r.txns.push({
        amt: v734,
        kind: 'to',
        tok: v732
        });
      
      const v763 = true;
      const v764 = v731;
      const v765 = false;
      const v766 = v752;
      const v772 = v759;
      const v773 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v789 = v765 ? false : v763;
        
        return v789;})()) {
        const v794 = v765 ? false : v763;
        const v795 = v794 ? true : v765;
        sim_r.isHalt = false;
        }
      else {
        const v932 = v765 ? false : v763;
        const v933 = v932 ? true : v765;
        if (v765) {
          const v959 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v960 = v959[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v966 = stdlib.sub(v960, v960);
          const v968 = stdlib.Array_set(v959, '0', v966);
          const v969 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v968);
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: v733
            });
          const v971 = v735.maturation;
          const v972 = stdlib.safeAdd(v766, v971);
          const v973 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v974 = v766;
          const v980 = v969;
          const v981 = v773;
          
          if (await (async () => {
            const v999 = stdlib.lt(v974, v972);
            const v1001 = stdlib.lt(v973, v749);
            const v1002 = v999 ? v1001 : false;
            
            return v1002;})()) {
            const v1004 = stdlib.ge(v973, v749);
            sim_r.isHalt = false;
            }
          else {
            const v1350 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v1351 = v1350[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v1353 = stdlib.lt(v973, v749);
            const v1354 = v1353 ? v764 : v731;
            const v1360 = stdlib.sub(v1351, v1351);
            const v1362 = stdlib.Array_set(v1350, '0', v1360);
            const v1363 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v1362);
            sim_r.txns.push({
              kind: 'from',
              to: v1354,
              tok: v732
              });
            const v1364 = v1363[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v1365 = v1364[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v1368 = v1353 ? v731 : v764;
            sim_r.txns.push({
              kind: 'from',
              to: v1368,
              tok: v733
              });
            sim_r.txns.push({
              kind: 'from',
              to: v731,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v733
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v732
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v935 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v936 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: v732
            });
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v733
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v732
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
  const {data: [], secs: v753, time: v752, didSend: v61, from: v751 } = txn2;
  ;
  const v754 = v744[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v755 = v754[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v756 = stdlib.add(v755, v734);
  const v758 = stdlib.Array_set(v754, '0', v756);
  const v759 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v758);
  ;
  const v760 = stdlib.addressEq(v731, v751);
  stdlib.assert(v760, {
    at: './src/contracts/loan_nnt_nnt.rsh:52:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v752), {
    at: './src/contracts/loan_nnt_nnt.rsh:53:27:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v763 = true;
  let v764 = v731;
  let v765 = false;
  let v766 = v752;
  let v772 = v759;
  let v773 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v789 = v765 ? false : v763;
    
    return v789;})()) {
    const v794 = v765 ? false : v763;
    const v795 = v794 ? true : v765;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v832], secs: v834, time: v833, didSend: v204, from: v831 } = txn4;
    switch (v832[0]) {
      case 'Borrower_close0_101': {
        const v835 = v832[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v868 = null;
        await txn4.getOutput('Borrower_close', 'v868', ctc5, v868);
        const cv763 = false;
        const cv764 = v764;
        const cv765 = v765;
        const cv766 = v833;
        const cv772 = v772;
        const cv773 = v773;
        
        v763 = cv763;
        v764 = cv764;
        v765 = cv765;
        v766 = cv766;
        v772 = cv772;
        v773 = cv773;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_101': {
        const v883 = v832[1];
        undefined /* setApiDetails */;
        ;
        const v909 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
        const v910 = v909[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
        const v911 = stdlib.add(v910, v748);
        const v913 = stdlib.Array_set(v909, '0', v911);
        const v914 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v913);
        ;
        const v924 = true;
        await txn4.getOutput('Lender_lend', 'v924', ctc8, v924);
        const cv763 = v763;
        const cv764 = v831;
        const cv765 = true;
        const cv766 = v833;
        const cv772 = v914;
        const cv773 = v773;
        
        v763 = cv763;
        v764 = cv764;
        v765 = cv765;
        v766 = cv766;
        v772 = cv772;
        v773 = cv773;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v932 = v765 ? false : v763;
  const v933 = v932 ? true : v765;
  if (v765) {
    const v959 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
    const v960 = v959[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
    const v966 = stdlib.sub(v960, v960);
    const v968 = stdlib.Array_set(v959, '0', v966);
    const v969 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v968);
    ;
    const v971 = v735.maturation;
    const v972 = stdlib.safeAdd(v766, v971);
    let v973 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
    let v974 = v766;
    let v980 = v969;
    let v981 = v773;
    
    let txn4 = txn3;
    while (await (async () => {
      const v999 = stdlib.lt(v974, v972);
      const v1001 = stdlib.lt(v973, v749);
      const v1002 = v999 ? v1001 : false;
      
      return v1002;})()) {
      const v1004 = stdlib.ge(v973, v749);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn5;
      switch (v1081[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1084 = v1081[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1132 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v1132', ctc5, v1132);
          const cv973 = v973;
          const cv974 = v1082;
          const cv980 = v980;
          const cv981 = v981;
          
          v973 = cv973;
          v974 = cv974;
          v980 = cv980;
          v981 = cv981;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_285': {
          const v1172 = v1081[1];
          undefined /* setApiDetails */;
          const v1182 = v1172[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
          const v1183 = stdlib.addressEq(v1080, v731);
          stdlib.assert(v1183, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v1185 = stdlib.safeAdd(v1182, v973);
          const v1187 = stdlib.gt(v1185, v749);
          let v1188;
          if (v1187) {
            const v1191 = stdlib.safeSub(v1185, v749);
            v1188 = v1191;
            }
          else {
            v1188 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1192 = stdlib.safeSub(v1182, v1188);
          ;
          const v1213 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
          const v1214 = v1213[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
          const v1215 = stdlib.add(v1214, v1192);
          const v1217 = stdlib.Array_set(v1213, '0', v1215);
          const v1218 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1217);
          ;
          let v1233;
          if (v1187) {
            const v1236 = stdlib.safeSub(v1185, v749);
            v1233 = v1236;
            }
          else {
            v1233 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1237 = stdlib.safeSub(v1182, v1233);
          const v1239 = stdlib.safeAdd(v973, v1237);
          const v1241 = stdlib.ge(v1239, v749);
          const v1243 = [v1241, v1239, v749];
          await txn5.getOutput('Borrower_repay', 'v1243', ctc11, v1243);
          const cv973 = v1239;
          const cv974 = v1082;
          const cv980 = v1218;
          const cv981 = v981;
          
          v973 = cv973;
          v974 = cv974;
          v980 = cv980;
          v981 = cv981;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_285': {
          const v1260 = v1081[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1342 = null;
          await txn5.getOutput('Lender_claim', 'v1342', ctc5, v1342);
          const cv973 = v973;
          const cv974 = v1082;
          const cv980 = v980;
          const cv981 = v981;
          
          v973 = cv973;
          v974 = cv974;
          v980 = cv980;
          v981 = cv981;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1350 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
    const v1351 = v1350[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
    const v1353 = stdlib.lt(v973, v749);
    const v1354 = v1353 ? v764 : v731;
    const v1360 = stdlib.sub(v1351, v1351);
    const v1362 = stdlib.Array_set(v1350, '0', v1360);
    const v1363 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v1362);
    ;
    const v1364 = v1363[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
    const v1365 = v1364[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
    const v1368 = v1353 ? v731 : v764;
    ;
    ;
    return;
    }
  else {
    const v935 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
    const v936 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
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
  
  
  const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1007 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:126:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_claimRefund0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v1011 = ['Borrower_claimRefund0_285', v1007];
  
  const txn1 = await (ctc.sendrecv({
    args: [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004, v1011],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v733]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
      
      switch (v1081[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1084 = v1081[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1132 = null;
          const v1133 = await txn1.getOutput('Borrower_claimRefund', 'v1132', ctc9, v1132);
          
          const v2457 = v973;
          const v2459 = v980;
          const v2460 = v981;
          const v2461 = stdlib.lt(v1082, v972);
          const v2462 = stdlib.lt(v973, v749);
          const v2463 = v2461 ? v2462 : false;
          if (v2463) {
            const v2464 = stdlib.ge(v973, v749);
            sim_r.isHalt = false;
            }
          else {
            const v2466 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2467 = v2466[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2469 = v2462 ? v764 : v731;
            const v2470 = stdlib.sub(v2467, v2467);
            const v2471 = stdlib.Array_set(v2466, '0', v2470);
            const v2472 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2471);
            sim_r.txns.push({
              kind: 'from',
              to: v2469,
              tok: v732
              });
            const v2473 = v2472[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v2474 = v2473[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v2475 = v2462 ? v731 : v764;
            sim_r.txns.push({
              kind: 'from',
              to: v2475,
              tok: v733
              });
            sim_r.txns.push({
              kind: 'from',
              to: v731,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v733
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v732
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
          const v1172 = v1081[1];
          
          break;
          }
        case 'Lender_claim0_285': {
          const v1260 = v1081[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
  switch (v1081[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1084 = v1081[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1132 = null;
      const v1133 = await txn1.getOutput('Borrower_claimRefund', 'v1132', ctc9, v1132);
      if (v529) {
        stdlib.protect(ctc9, await interact.out(v1084, v1133), {
          at: './src/contracts/loan_nnt_nnt.rsh:126:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:126:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:127:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:58:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:126:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2457 = v973;
      const v2459 = v980;
      const v2460 = v981;
      const v2461 = stdlib.lt(v1082, v972);
      const v2462 = stdlib.lt(v973, v749);
      const v2463 = v2461 ? v2462 : false;
      if (v2463) {
        const v2464 = stdlib.ge(v973, v749);
        return;
        }
      else {
        const v2466 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2467 = v2466[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2469 = v2462 ? v764 : v731;
        const v2470 = stdlib.sub(v2467, v2467);
        const v2471 = stdlib.Array_set(v2466, '0', v2470);
        const v2472 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2471);
        ;
        const v2473 = v2472[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
        const v2474 = v2473[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
        const v2475 = v2462 ? v731 : v764;
        ;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_285': {
      const v1172 = v1081[1];
      return;
      break;
      }
    case 'Lender_claim0_285': {
      const v1260 = v1081[1];
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
  
  
  const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v798 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runBorrower_close0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v802 = ['Borrower_close0_101', v798];
  
  const txn1 = await (ctc.sendrecv({
    args: [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795, v802],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:79:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:67:26:decimal', stdlib.UInt_max, '0'), v733]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v832], secs: v834, time: v833, didSend: v204, from: v831 } = txn1;
      
      switch (v832[0]) {
        case 'Borrower_close0_101': {
          const v835 = v832[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v868 = null;
          const v869 = await txn1.getOutput('Borrower_close', 'v868', ctc9, v868);
          
          const v2514 = false;
          const v2515 = v764;
          const v2516 = v765;
          const v2517 = v833;
          const v2518 = v772;
          const v2519 = v773;
          const v2520 = v765 ? false : false;
          if (v2520) {
            const v2522 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2524 = v765;
            if (v765) {
              const v2525 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
              const v2526 = v2525[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
              const v2527 = stdlib.sub(v2526, v2526);
              const v2528 = stdlib.Array_set(v2525, '0', v2527);
              const v2529 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2528);
              sim_r.txns.push({
                kind: 'from',
                to: v731,
                tok: v733
                });
              const v2530 = v735.maturation;
              const v2531 = stdlib.safeAdd(v833, v2530);
              const v2584 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
              const v2586 = v2529;
              const v2587 = v773;
              const v2588 = stdlib.lt(v833, v2531);
              const v2589 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
              const v2590 = v2588 ? v2589 : false;
              if (v2590) {
                const v2591 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
                sim_r.isHalt = false;
                }
              else {
                const v2593 = v2529[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
                const v2594 = v2593[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
                const v2596 = v2589 ? v764 : v731;
                const v2597 = stdlib.sub(v2594, v2594);
                const v2598 = stdlib.Array_set(v2593, '0', v2597);
                const v2599 = stdlib.Array_set(v2529, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2598);
                sim_r.txns.push({
                  kind: 'from',
                  to: v2596,
                  tok: v732
                  });
                const v2600 = v2599[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
                const v2601 = v2600[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
                const v2602 = v2589 ? v731 : v764;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2602,
                  tok: v733
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v731,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v733
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v732
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2582 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              const v2583 = v2582[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v731,
                tok: v732
                });
              sim_r.txns.push({
                kind: 'from',
                to: v731,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v733
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v732
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
          const v883 = v832[1];
          
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
  const {data: [v832], secs: v834, time: v833, didSend: v204, from: v831 } = txn1;
  switch (v832[0]) {
    case 'Borrower_close0_101': {
      const v835 = v832[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v868 = null;
      const v869 = await txn1.getOutput('Borrower_close', 'v868', ctc9, v868);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v835, v869), {
          at: './src/contracts/loan_nnt_nnt.rsh:79:22:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:80:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:79:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2514 = false;
      const v2515 = v764;
      const v2516 = v765;
      const v2517 = v833;
      const v2518 = v772;
      const v2519 = v773;
      const v2520 = v765 ? false : false;
      if (v2520) {
        const v2522 = true;
        return;
        }
      else {
        const v2524 = v765;
        if (v765) {
          const v2525 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v2526 = v2525[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v2527 = stdlib.sub(v2526, v2526);
          const v2528 = stdlib.Array_set(v2525, '0', v2527);
          const v2529 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2528);
          ;
          const v2530 = v735.maturation;
          const v2531 = stdlib.safeAdd(v833, v2530);
          const v2584 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v2586 = v2529;
          const v2587 = v773;
          const v2588 = stdlib.lt(v833, v2531);
          const v2589 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
          const v2590 = v2588 ? v2589 : false;
          if (v2590) {
            const v2591 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
            return;
            }
          else {
            const v2593 = v2529[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2594 = v2593[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2596 = v2589 ? v764 : v731;
            const v2597 = stdlib.sub(v2594, v2594);
            const v2598 = stdlib.Array_set(v2593, '0', v2597);
            const v2599 = stdlib.Array_set(v2529, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2598);
            ;
            const v2600 = v2599[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v2601 = v2600[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v2602 = v2589 ? v731 : v764;
            ;
            ;
            return;
            }}
        else {
          const v2582 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v2583 = v2582[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_101': {
      const v883 = v832[1];
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
  
  
  const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1021 = ctc.selfAddress();
  const v1023 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v1024 = v1023[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1026 = stdlib.addressEq(v1021, v731);
  stdlib.assert(v1026, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v1028 = stdlib.safeAdd(v1024, v973);
  const v1030 = stdlib.gt(v1028, v749);
  const v1041 = ['Borrower_repay0_285', v1023];
  
  let v1058;
  if (v1030) {
    const v1061 = stdlib.safeSub(v1028, v749);
    v1058 = v1061;
    }
  else {
    v1058 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
    }
  const v1062 = stdlib.safeSub(v1024, v1058);
  
  const txn1 = await (ctc.sendrecv({
    args: [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004, v1041],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:118:42:decimal', stdlib.UInt_max, '0'), [[v1062, v733]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
      
      switch (v1081[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1084 = v1081[1];
          
          break;
          }
        case 'Borrower_repay0_285': {
          const v1172 = v1081[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1182 = v1172[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
          const v1185 = stdlib.safeAdd(v1182, v973);
          const v1187 = stdlib.gt(v1185, v749);
          let v1188;
          if (v1187) {
            const v1191 = stdlib.safeSub(v1185, v749);
            v1188 = v1191;
            }
          else {
            v1188 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1192 = stdlib.safeSub(v1182, v1188);
          ;
          const v1213 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
          const v1214 = v1213[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
          const v1215 = stdlib.add(v1214, v1192);
          const v1217 = stdlib.Array_set(v1213, '0', v1215);
          const v1218 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1217);
          sim_r.txns.push({
            amt: v1192,
            kind: 'to',
            tok: v733
            });
          let v1233;
          if (v1187) {
            const v1236 = stdlib.safeSub(v1185, v749);
            v1233 = v1236;
            }
          else {
            v1233 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1237 = stdlib.safeSub(v1182, v1233);
          const v1239 = stdlib.safeAdd(v973, v1237);
          const v1241 = stdlib.ge(v1239, v749);
          const v1243 = [v1241, v1239, v749];
          const v1244 = await txn1.getOutput('Borrower_repay', 'v1243', ctc9, v1243);
          
          const v2711 = v1239;
          const v2713 = v1218;
          const v2714 = v981;
          const v2715 = stdlib.lt(v1082, v972);
          const v2716 = stdlib.lt(v1239, v749);
          const v2717 = v2715 ? v2716 : false;
          if (v2717) {
            sim_r.isHalt = false;
            }
          else {
            const v2720 = v1218[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2721 = v2720[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2723 = v2716 ? v764 : v731;
            const v2724 = stdlib.sub(v2721, v2721);
            const v2725 = stdlib.Array_set(v2720, '0', v2724);
            const v2726 = stdlib.Array_set(v1218, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2725);
            sim_r.txns.push({
              kind: 'from',
              to: v2723,
              tok: v732
              });
            const v2727 = v2726[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v2728 = v2727[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v2729 = v2716 ? v731 : v764;
            sim_r.txns.push({
              kind: 'from',
              to: v2729,
              tok: v733
              });
            sim_r.txns.push({
              kind: 'from',
              to: v731,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v733
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v732
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
          const v1260 = v1081[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
  switch (v1081[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1084 = v1081[1];
      return;
      break;
      }
    case 'Borrower_repay0_285': {
      const v1172 = v1081[1];
      undefined /* setApiDetails */;
      const v1182 = v1172[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
      const v1183 = stdlib.addressEq(v1080, v731);
      stdlib.assert(v1183, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1185 = stdlib.safeAdd(v1182, v973);
      const v1187 = stdlib.gt(v1185, v749);
      let v1188;
      if (v1187) {
        const v1191 = stdlib.safeSub(v1185, v749);
        v1188 = v1191;
        }
      else {
        v1188 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
        }
      const v1192 = stdlib.safeSub(v1182, v1188);
      ;
      const v1213 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
      const v1214 = v1213[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
      const v1215 = stdlib.add(v1214, v1192);
      const v1217 = stdlib.Array_set(v1213, '0', v1215);
      const v1218 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1217);
      ;
      let v1233;
      if (v1187) {
        const v1236 = stdlib.safeSub(v1185, v749);
        v1233 = v1236;
        }
      else {
        v1233 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
        }
      const v1237 = stdlib.safeSub(v1182, v1233);
      const v1239 = stdlib.safeAdd(v973, v1237);
      const v1241 = stdlib.ge(v1239, v749);
      const v1243 = [v1241, v1239, v749];
      const v1244 = await txn1.getOutput('Borrower_repay', 'v1243', ctc9, v1243);
      if (v529) {
        stdlib.protect(ctc10, await interact.out(v1172, v1244), {
          at: './src/contracts/loan_nnt_nnt.rsh:110:31:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:31:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:121:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:119:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:119:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:119:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2711 = v1239;
      const v2713 = v1218;
      const v2714 = v981;
      const v2715 = stdlib.lt(v1082, v972);
      const v2716 = stdlib.lt(v1239, v749);
      const v2717 = v2715 ? v2716 : false;
      if (v2717) {
        return;
        }
      else {
        const v2720 = v1218[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2721 = v2720[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2723 = v2716 ? v764 : v731;
        const v2724 = stdlib.sub(v2721, v2721);
        const v2725 = stdlib.Array_set(v2720, '0', v2724);
        const v2726 = stdlib.Array_set(v1218, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2725);
        ;
        const v2727 = v2726[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
        const v2728 = v2727[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
        const v2729 = v2716 ? v731 : v764;
        ;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_285': {
      const v1260 = v1081[1];
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
  
  
  const [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1015 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:130:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runLender_claim0_285" (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v1019 = ['Lender_claim0_285', v1015];
  
  const txn1 = await (ctc.sendrecv({
    args: [v731, v732, v733, v749, v764, v766, v933, v972, v973, v980, v981, v1004, v1019],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:130:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v733]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
      
      switch (v1081[0]) {
        case 'Borrower_claimRefund0_285': {
          const v1084 = v1081[1];
          
          break;
          }
        case 'Borrower_repay0_285': {
          const v1172 = v1081[1];
          
          break;
          }
        case 'Lender_claim0_285': {
          const v1260 = v1081[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1342 = null;
          const v1343 = await txn1.getOutput('Lender_claim', 'v1342', ctc9, v1342);
          
          const v2787 = v973;
          const v2789 = v980;
          const v2790 = v981;
          const v2791 = stdlib.lt(v1082, v972);
          const v2792 = stdlib.lt(v973, v749);
          const v2793 = v2791 ? v2792 : false;
          if (v2793) {
            const v2794 = stdlib.ge(v973, v749);
            sim_r.isHalt = false;
            }
          else {
            const v2796 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2797 = v2796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2799 = v2792 ? v764 : v731;
            const v2800 = stdlib.sub(v2797, v2797);
            const v2801 = stdlib.Array_set(v2796, '0', v2800);
            const v2802 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2801);
            sim_r.txns.push({
              kind: 'from',
              to: v2799,
              tok: v732
              });
            const v2803 = v2802[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v2804 = v2803[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v2805 = v2792 ? v731 : v764;
            sim_r.txns.push({
              kind: 'from',
              to: v2805,
              tok: v733
              });
            sim_r.txns.push({
              kind: 'from',
              to: v731,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v733
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v732
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1081], secs: v1083, time: v1082, didSend: v529, from: v1080 } = txn1;
  switch (v1081[0]) {
    case 'Borrower_claimRefund0_285': {
      const v1084 = v1081[1];
      return;
      break;
      }
    case 'Borrower_repay0_285': {
      const v1172 = v1081[1];
      return;
      break;
      }
    case 'Lender_claim0_285': {
      const v1260 = v1081[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1342 = null;
      const v1343 = await txn1.getOutput('Lender_claim', 'v1342', ctc9, v1342);
      if (v529) {
        stdlib.protect(ctc9, await interact.out(v1260, v1343), {
          at: './src/contracts/loan_nnt_nnt.rsh:130:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:130:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:131:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:130:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2787 = v973;
      const v2789 = v980;
      const v2790 = v981;
      const v2791 = stdlib.lt(v1082, v972);
      const v2792 = stdlib.lt(v973, v749);
      const v2793 = v2791 ? v2792 : false;
      if (v2793) {
        const v2794 = stdlib.ge(v973, v749);
        return;
        }
      else {
        const v2796 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2797 = v2796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2799 = v2792 ? v764 : v731;
        const v2800 = stdlib.sub(v2797, v2797);
        const v2801 = stdlib.Array_set(v2796, '0', v2800);
        const v2802 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2801);
        ;
        const v2803 = v2802[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
        const v2804 = v2803[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
        const v2805 = v2792 ? v731 : v764;
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
  
  
  const [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v806 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:39:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runLender_lend0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v810 = ['Lender_lend0_101', v806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v731, v732, v733, v735, v748, v749, v763, v764, v765, v772, v773, v795, v810],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:71:34:decimal', stdlib.UInt_max, '0'), [[v748, v733]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v832], secs: v834, time: v833, didSend: v204, from: v831 } = txn1;
      
      switch (v832[0]) {
        case 'Borrower_close0_101': {
          const v835 = v832[1];
          
          break;
          }
        case 'Lender_lend0_101': {
          const v883 = v832[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v909 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
          const v910 = v909[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
          const v911 = stdlib.add(v910, v748);
          const v913 = stdlib.Array_set(v909, '0', v911);
          const v914 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v913);
          sim_r.txns.push({
            amt: v748,
            kind: 'to',
            tok: v733
            });
          const v924 = true;
          const v925 = await txn1.getOutput('Lender_lend', 'v924', ctc4, v924);
          
          const v2896 = v831;
          const v2898 = v833;
          const v2905 = true;
          const v2906 = v914[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v2907 = v2906[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v2908 = stdlib.sub(v2907, v2907);
          const v2909 = stdlib.Array_set(v2906, '0', v2908);
          const v2910 = stdlib.Array_set(v914, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2909);
          sim_r.txns.push({
            kind: 'from',
            to: v731,
            tok: v733
            });
          const v2911 = v735.maturation;
          const v2912 = stdlib.safeAdd(v833, v2911);
          const v2965 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v2967 = v2910;
          const v2968 = v773;
          const v2969 = stdlib.lt(v833, v2912);
          const v2970 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
          const v2971 = v2969 ? v2970 : false;
          if (v2971) {
            const v2972 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
            sim_r.isHalt = false;
            }
          else {
            const v2974 = v2910[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2975 = v2974[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
            const v2977 = v2970 ? v831 : v731;
            const v2978 = stdlib.sub(v2975, v2975);
            const v2979 = stdlib.Array_set(v2974, '0', v2978);
            const v2980 = stdlib.Array_set(v2910, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2979);
            sim_r.txns.push({
              kind: 'from',
              to: v2977,
              tok: v732
              });
            const v2981 = v2980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
            const v2982 = v2981[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
            const v2983 = v2970 ? v731 : v831;
            sim_r.txns.push({
              kind: 'from',
              to: v2983,
              tok: v733
              });
            sim_r.txns.push({
              kind: 'from',
              to: v731,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v733
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v732
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
  const {data: [v832], secs: v834, time: v833, didSend: v204, from: v831 } = txn1;
  switch (v832[0]) {
    case 'Borrower_close0_101': {
      const v835 = v832[1];
      return;
      break;
      }
    case 'Lender_lend0_101': {
      const v883 = v832[1];
      undefined /* setApiDetails */;
      ;
      const v909 = v772[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
      const v910 = v909[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
      const v911 = stdlib.add(v910, v748);
      const v913 = stdlib.Array_set(v909, '0', v911);
      const v914 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v913);
      ;
      const v924 = true;
      const v925 = await txn1.getOutput('Lender_lend', 'v924', ctc4, v924);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v883, v925), {
          at: './src/contracts/loan_nnt_nnt.rsh:69:23:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:23:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:73:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:72:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2896 = v831;
      const v2898 = v833;
      const v2905 = true;
      const v2906 = v914[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
      const v2907 = v2906[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
      const v2908 = stdlib.sub(v2907, v2907);
      const v2909 = stdlib.Array_set(v2906, '0', v2908);
      const v2910 = stdlib.Array_set(v914, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2909);
      ;
      const v2911 = v735.maturation;
      const v2912 = stdlib.safeAdd(v833, v2911);
      const v2965 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
      const v2967 = v2910;
      const v2968 = v773;
      const v2969 = stdlib.lt(v833, v2912);
      const v2970 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
      const v2971 = v2969 ? v2970 : false;
      if (v2971) {
        const v2972 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v749);
        return;
        }
      else {
        const v2974 = v2910[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2975 = v2974[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:33:application', stdlib.UInt_max, '0')];
        const v2977 = v2970 ? v831 : v731;
        const v2978 = stdlib.sub(v2975, v2975);
        const v2979 = stdlib.Array_set(v2974, '0', v2978);
        const v2980 = stdlib.Array_set(v2910, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:135:67:application', stdlib.UInt_max, '0'), v2979);
        ;
        const v2981 = v2980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '1')];
        const v2982 = v2981[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:138:33:application', stdlib.UInt_max, '0')];
        const v2983 = v2970 ? v731 : v831;
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
  appApproval: `ByATAAEEBQgHICgwoI0G2faovAbX8dudB56S1pUI49Tx8Q+Tr+T5Br7zptcD9q6A9AP/8ca6AgImAwEBAQAAIjUAMRhBB3AqZEkiWzUBIQRbNQI2GgAXSUEBEiI1BCM1BkkhCgxAAHlJIQsMQABASSEMDEAAKUkhDQxAABQhDRJEKjX/gAECNP9QIQSvUEIBzCEMEkQqNf8pNP9QQgDqIQsSRDYaATX/KDT/UEIBrkkhDgxAABIhDhJEKjX/KTT/UCEEr1BCAZUhChJENAElEkQpZChkUEk1A1dpCDUHQgbOSSEPDEAALkkhEAxAAA4hEBJEKjX/KDT/UEIAjCEPEkQ0ASUSRClkKGRQSTUDV5sBNQdCBplJIREMQAAZIRESRDQBJRJEKWQoZFBJNQNXWAg1B0IGeYGPxsUqEkQ0AUkhBQxAABQhBRJEKWQoZFBJNQNXxAE1B0IGVSUSRClkKGRQSTUDV2ABNQdCBkI2GgIXNQQ2GgM2GgEXSSQMQAJlSSUMQADWJRJEIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEGWzX+IQdbNf1XMDg1/IFoWzX7gXBbNfpXmiI1+YG8AVs1+Ek1BTX3gASxmSJFNPdQsDT3IlVAAC+ACAAAAAAAAANksCo1BzT/NP40/TT8NPs0+iI0A1d5IDQDV5kBFzIGNPk0+EIDPzT5VxERNfY0+zT9iAXLgAkAAAAAAAADnAGwKDUHNP80/jT9NPw0+zT6NANXeAEXMQAjMgY0+TT2SSJbNPsIFlwAXBE0+EIC90glNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSklXACA1/yEGWzX+IQdbNf0hCFs1/Fc4IDX7gVhbNfpXYAEXNfmBYVs1+IFpWzX3V3EiNfaBkwFbNfVJNQU19IAE1Y4dqzT0ULA09CJVSSMMQADuSSESDEAALSESEkSACAAAAAAAAAU+sCo1BzT/NP40/TT8NPs0+jT5NPg09zIGNPY09UIDXEg09FcBCDXzNPMXNfIxADT/EkQ08jT3CEk18TT8DUk18EEACjTxNPwJNe9CAAMiNe808jTvCTXuNPZXERE17TTuNP2IBKY08EEACjTxNPwJNexCAAMiNew09zTyNOwJCDXrgAgAAAAAAAAE2zTrNPwPFlEHCDTrFlA0/BZQULA06zT8DxZRBwg06xZQNPwWUDUHNP80/jT9NPw0+zT6NPk0+DTrMgY09jTtSSJbNO4IFlwAXBE09UICokiACAAAAAAAAARssCo1BzT/NP40/TT8NPs0+jT5NPg09zIGNPY09UICeEkjDEAAfyMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBls1/iEIWzX9V3AiNfyABJqLkXSwNPxXABE1+zT9NP6IA7w0/zEAEkQ0/zT+NAMhB1s0A1c4ODQDgZIBWzQDgZoBWyM0/yIyBjT8NPtJIls0/QgWXABcACJCAOlIIQmIA2UiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQRbNf6BEFs1/VcYODX8gATxkliKNP8WUDT+FlA0/RZQNPxQsIERr0k1+0lQSTX6SVcAESEEr1wAXABJNflJVxERIQSvXABcETX4NP40/xNEIQmIAvaxIrIBIrISJLIQMgqyFDT/shGzIQmIAt6xIrIBIrISJLIQMgqyFDT+shGzNPwhCFs19zT8IQZbNfY09zT2DEQxADT/FlA0/hZQNP0WUDT8UDT4UDT3FlA09hZQKUsBVwB/ZyhLAVd/I2dIIzUBMgY1AkICMDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT8FDT6EEEAPzT0NPUWUDT2FlA091A0+BZQNPkWUChQNPtQKVA0/lA0/xZQKFApSwFXAH9nKEsBV39GZ0ghBTUBMgY1AkIB0DT8QQBLNP5XERFJNfMiWzXysSKyATTyshIkshA09LIUNPayEbM09DT1NPY0+TT7NP00/DT9NPchB1sIIjT9NP408zTySQkWXABcETT/QgBasSKyATT+VwARIluyEiSyEDT0shQ09bIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJLIQMgmyFTIKshQ09rIRs7EisgEishIkshAyCbIVMgqyFDT1shGzQgELNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPw09ww18zT9NPsMNPMQQQBSNPw09w818jT0NPUWUDT2FlA09xZQNPhQNPkWUDT6FlEHCFA0+xZQNPwWUDT+UDT/FlA08hZRBwhQKUsBVwB/ZyhLAVd/HWdIJTUBMgY1AkIAqjT+VwARSTXyIls18bEisgE08bISJLIQNPQ0+DTzTbIUNPWyEbOxIrIBNP408jTxSQkWXABcAFcRESJbshIkshA0+DT0NPNNshQ09rIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJLIQMgmyFTIKshQ09rIRs7EisgEishIkshAyCbIVMgqyFDT1shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"internalType":"struct T12","name":"v3016","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1132","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1243","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1342","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v868","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v924","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3002","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v3018","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_285","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_285","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_285","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3030","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v3044","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200333c38819003601f8101601f191683016001600160401b038111848210176200062a5783928291604052833981010390610100821262000789576040519160a08301906001600160401b038211848310176200062a57608091604052825184526200007160208401620007c6565b60208501526200008460408401620007c6565b604085015260608301516060850152607f190112620007895760e060405191620000ae836200078e565b620000bc60808201620007c6565b835260a0810151602084015260c0810151604084015201516060820152608082015243600355604051610140810181811060018060401b038211176200062a57600091610120916040528281528260208201528260408201526200011f620007db565b60608201528260808201528260a08201528260c08201528260e08201528261010082015201526040519062000154826200078e565b6200015e620007db565b82526200016a620007fc565b602083015262000179620007fc565b604083015262000188620007fc565b606083015260ff6004541662000770577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b036040850151166060820152606084015160808201526200020b608085015160a083019062000843565ba18051801590811562000763575b50156200074a5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200026983620007aa565b600083526020830152604082015262000281620007fc565b9160005b60028110620007105750508152806040840152602081015160406020820151910151151560405191620002b883620007aa565b6000835260208301526040820152620002d0620007fc565b9160005b60028110620006c05750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006b85760005b156200069f5734620006865760808101516020606082015191015111156200066d57604051916001600160401b036101008401908111908411176200062a5760209160606080926101008601604052600086526000858701526000604087015260008287015260405162000383816200078e565b600081526000868201526000604082015260008382015284870152620003a8620007fc565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015260018060a01b03604084015116604087015281830151828701528383015184870152015160a0850152606082820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000462608082015160a084019062000843565b60a0810151600061012084015b60028210620006405760c08401516101e086015260e08401516102008087019190915285528461022081016001600160401b038111828210176200062a5760405280516001600160401b0381116200062a57600254600181811c911680156200061f575b60208210146200060957601f81116200059f575b50602091601f8211600114620005355791819260009262000529575b50508160011b916000199060031b1c1916176002555b604051612aa49081620008988239f35b01519050828062000503565b601f19821692600260005260206000209160005b85811062000586575083600195106200056c575b505050811b0160025562000519565b015160001960f88460031b161c191690558280806200055d565b9192602060018192868501518155019401920162000549565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005fe575b601f0160051c01905b818110620005f15750620004e7565b60008155600101620005e2565b9091508190620005d9565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004d3565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200046f565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60016200030f565b620006cc81836200086f565b51620006d982866200086f565b52620006e681856200086f565b506000198114620006fa57600101620002d4565b634e487b7160e01b600052601160045260246000fd5b6200071c81836200086f565b516200072982866200086f565b526200073681856200086f565b506000198114620006fa5760010162000285565b60405163100960cb60e01b8152600d6004820152602490fd5b9050600154143862000219565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200062a57604052565b606081019081106001600160401b038211176200062a57604052565b51906001600160a01b03821682036200078957565b60405190620007ea82620007aa565b60006040838281528260208201520152565b6040805191908281016001600160401b038111848210176200062a5781528260005b8281106200082b57505050565b60209062000838620007db565b81840152016200081e565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906002811015620008815760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca610843565b61000e565b506100ca6107d5565b506100ca610760565b506100ca6106b6565b506100ca610668565b506100ca6105e9565b506100ca6105ca565b506100ca61058b565b506100ca610394565b506100ca61031a565b506100ca6102c1565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610b3a565b6005600054036101975760e060209160a061018861017a6109f3565b858082518301019101610d01565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610b3a565b604051906101f682610920565b600435825260803660231901126101b0576040519161021483610948565b6024359260038410156101b05761026193815260443561023381610c6f565b6020820152610241366129af565b604082015260843561025281610c6f565b606082015260208201526113b1565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610b3a565b6005600054036102a85760c060209161010061018861017a6109f3565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102da610b3a565b61030e816102e6610c29565b85810190600082515251151586825101526102ff610c29565b90600082525186820152611cb0565b01511515604051908152f35b50346101b05760003660031901126101b057610334610b3a565b60056000540361037b5761012061026d916101606103626103536109f3565b60208082518301019101610d01565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506020806003193601126101b0576103aa610b3a565b506105756103b7366129cf565b916103d36103ce6103ca60045460ff1690565b1590565b610dc2565b60408051338152845160208201529093610562917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a161041a600160005414610de2565b6104486104366104286109f3565b8580825183010191016129ef565b9151801590811561057f575b50610e02565b6104523415610e22565b8281019261055d60a06104658651610c4f565b9361047f61047a60608301968751903361194e565b610e42565b61049a33600180851b036104938451610c4f565b1614610e62565b6104ca6104c26104a8611c52565b986104bc6104b68551610c4f565b8b61137b565b51610c4f565b85890161137b565b6104e16104d98a830151610c4f565b8a890161137b565b6080810151606088015260c0810151608088015260e08101518288015261050b60c0880160019052565b6105216105188251610c4f565b60e0890161137b565b600061010088015243610120880152015191825193845190510193888282015191015115159161054f610a9e565b958652850152151587840152565b611a53565b610140820152600061016082015261230b565b5160008152602090f35b90506001541438610442565b5060003660031901126101b057602060a06105a4610b3a565b61030e816105b0610c29565b8581019060018251525115156040825101526102ff610c29565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b0576105fe610b3a565b6040519061060b82610920565b600435825260603660231901126101b0576040519161062983610963565b6024359260028410156101b05761026193815260443561064881610c6f565b602082015260643561065981610c6f565b60408201526020820152611cb0565b5060003660031901126101b05760206080610681610b3a565b61030e8161068d610bdf565b8581019060028251525115156060825101526106a7610bdf565b906000825251868201526113b1565b50346101b05760003660031901126101b05761026d6107136101006106d9610b3a565b60005460078110156107255760056106f19114610ea2565b61070461070b60c06107046103536109f3565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107319114610e82565b61075b6101606107516107426109f3565b60208082518301019101611123565b0151151582840152565b610704565b50346101b0576000806003193601126107d257805461077d6109f3565b906040519283918252602090604082840152835191826040850152815b8381106107bb57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161079a565b80fd5b5060003660031901126101b0576020806107ed610b3a565b61030e816107f9610bdf565b8481019060008251525115158582510152610812610bdf565b906000825251858201526113b1565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b057610858610afd565b5061026d6060610866610b3a565b6108c18160405161087681610920565b6040516108828161097e565b6000815281526020810190610895610bac565b82526004358151526001825152516040825101526108b1610bdf565b90600082525160208201526113b1565b015160405191829182610821565b90600182811c921680156108ff575b60208310146108e957565b634e487b7160e01b600052602260045260246000fd5b91607f16916108de565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761093b57604052565b610943610909565b604052565b608081019081106001600160401b0382111761093b57604052565b606081019081106001600160401b0382111761093b57604052565b602081019081106001600160401b0382111761093b57604052565b61018081019081106001600160401b0382111761093b57604052565b60a081019081106001600160401b0382111761093b57604052565b601f909101601f19168101906001600160401b0382119082101761093b57604052565b6040519060008260025491610a07836108cf565b808352600193808516908115610a7d5750600114610a2f575b50610a2d925003836109d0565b565b60026000908152600080516020612a7883398151915294602093509091905b818310610a65575050610a2d935082010138610a20565b85548884018501529485019487945091830191610a4e565b9050610a2d94506020925060ff191682840152151560051b82010138610a20565b60405190606082016001600160401b0381118382101761093b57604052565b6040519061018082016001600160401b0381118382101761093b57604052565b6040519061010082016001600160401b0381118382101761093b57604052565b60405190606082016001600160401b03811183821017610b2d575b60405260006040838281528260208201520152565b610b35610909565b610b18565b6040519061014082016001600160401b03811183821017610b9f575b60405281610120600091828152826020820152826040820152610b77610afd565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610ba7610909565b610b56565b60405190610bb982610948565b6000606083828152826020820152604051610bd38161097e565b83815260408201520152565b60405190610bec82610920565b81600081526020610bfb610bac565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610c2157565b610a2d610c00565b60405190610c3682610920565b81600081526020610bfb610afd565b60021115610c2157565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b5190610a2d82610c6f565b9080601f830112156101b057604091825192610c9f84610920565b839260c08301928184116101b057935b838510610cbe57505050505090565b6060858303126101b0578251606091610cd682610963565b86518252602091828801518382015285880151610cf281610c6f565b86820152815201940193610caf565b610220818303126101b057610200610db991610d1b610abd565b93610d2582610c5b565b8552610d3360208301610c5b565b6020860152610d4460408301610c5b565b604086015260608201516060860152610d5f60808301610c5b565b608086015260a082015160a0860152610d7a60c08301610c79565b60c086015260e082015160e08601526101008083015190860152610da361012091828401610c84565b908501526101e081015161014085015201610c79565b61016082015290565b15610dc957565b60405163100960cb60e01b815260116004820152602490fd5b15610de957565b60405163100960cb60e01b815260126004820152602490fd5b15610e0957565b60405163100960cb60e01b815260136004820152602490fd5b15610e2957565b60405163100960cb60e01b815260146004820152602490fd5b15610e4957565b60405163100960cb60e01b815260156004820152602490fd5b15610e6957565b60405163100960cb60e01b815260166004820152602490fd5b15610e8957565b60405163100960cb60e01b8152600a6004820152602490fd5b15610ea957565b60405163100960cb60e01b815260096004820152602490fd5b15610ec957565b60405163100960cb60e01b815260176004820152602490fd5b15610ee957565b60405163100960cb60e01b815260186004820152602490fd5b15610f0957565b60405163100960cb60e01b815260196004820152602490fd5b15610f2957565b60405163100960cb60e01b8152601f6004820152602490fd5b15610f4957565b60405163100960cb60e01b815260206004820152602490fd5b15610f6957565b60405163100960cb60e01b8152601c6004820152602490fd5b15610f8957565b60405163100960cb60e01b8152601d6004820152602490fd5b15610fa957565b60405163100960cb60e01b8152601e6004820152602490fd5b15610fc957565b60405163100960cb60e01b8152601a6004820152602490fd5b15610fe957565b60405163100960cb60e01b8152601b6004820152602490fd5b1561100957565b60405163100960cb60e01b815260216004820152602490fd5b1561102957565b60405163100960cb60e01b815260226004820152602490fd5b1561104957565b60405163100960cb60e01b815260236004820152602490fd5b1561106957565b60405163100960cb60e01b815260266004820152602490fd5b1561108957565b60405163100960cb60e01b815260276004820152602490fd5b156110a957565b602460405163100960cb60e01b8152816004820152fd5b156110c757565b60405163100960cb60e01b815260256004820152602490fd5b91908260809103126101b0576040516110f881610948565b606080829461110681610c5b565b845260208101516020850152604081015160408501520151910152565b90610280828203126101b0576111ef61026061113d610abd565b9361114781610c5b565b855261115560208201610c5b565b602086015261116660408201610c5b565b604086015261117884606083016110e0565b606086015260e08101516080860152610100938482015160a08701526101206111a2818401610c79565b60c08801526111db610140926111b9848601610c5b565b60e08a0152610160976111cd898701610c79565b908a01526101808501610c84565b908701526102408201519086015201610c79565b9082015290565b604051610100810191906001600160401b03831181841017611257575b8260405280926112228161097e565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610bfb610afd565b61125f610909565b611213565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156112c1575b60408501526020810151151582850152604081015151608085015201511515910152565b6112c9610c00565b61129d565b5160038110156112db5790565b6112e3610c00565b90565b6040908151916112f583610920565b8260005b82811061130557505050565b602090611310610afd565b81840152016112f9565b6040519061132782610999565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526113716112e6565b6101408201520152565b6001600160a01b039091169052565b90600281101561139b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b611433916113bd6111f6565b906113d56113d06103ca60045460ff1690565b610ec2565b6040917f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f961835180611407873383611271565b0390a1611418600560005414610ee2565b6114206109f3565b6020958187808094518301019101610d01565b9461144981518015908115611889575b50610f02565b0161145481516112ce565b61145d81610c17565b611586575050610a2d93929161150261150a9261147a3415610fc2565b6000868487019261149c6114976114918651610c4f565b336118e3565b610fe2565b8551600081527f6aa6cb04a9ef717e26c87e4ecb65c4c82c3c7020e58c568aaf8f610cd57c7ef69080602081015b0390a101526104bc6114da61131a565b966114ee6114e88851610c4f565b8961137b565b6114fa81880151610c4f565b90880161137b565b90840161137b565b6060810151606083015261152d6115246080830151610c4f565b6080840161137b565b60a081015160a083015261155061154760c0830151151590565b151560c0840152565b60e081015160e0830152610100808201519083015261012043818401528101519061014091828401520151610160820152612777565b600161159582979397516112ce565b61159e81610c17565b036117f657839051015185526115c66115bf6115ba8651610c4f565b610c4f565b3314610f62565b84515194610100906115dd828701978851906118ac565b938382019480865260609182808a01928351109a6116008a87019c8d9015159052565b8b51156117eb5761161489518551906118ce565b828701525b85515182870151611629916118ce565b608087019081529861163b3415610f82565b8a8c019c8d5161164a90610c4f565b8b51611656913361194e565b61165f90610fa2565b51156117de57518451611671916118ce565b60a08701525b5185515160a0870151611689916118ce565b611692916118ac565b60c08601818152845160e090970180519290971115909152948551888251015283518a8251015280518a516116c8819282610821565b037f6a46c8b34ff762cf55fac007ee67d82d6fd6ad7ee5b08d7a7a0d478454d2e0c691a1519101526116f861131a565b98885161170490610c4f565b61170e908b61137b565b8589015161171b90610c4f565b611727908b880161137b565b5161173190610c4f565b61173d908a890161137b565b5190880152608086015161175090610c4f565b61175d906080890161137b565b60a0868101519088015260c08601511515151560c088015260e086015160e08801525190860152610120438187015284015192818401519283519051019281838201519101511515926117ae610a9e565b948552840152901515908201526117c491611ab0565b9061014091828401520151610160820152610a2d90612777565b50600060a0870152611677565b600082870152611619565b6002919493955061180790516112ce565b61181081610c17565b1461181c575b50505050565b6118809361150261150a926118313415610f22565b600060808487019261184e6118496114918651610c4f565b610f42565b8551600081527fdad03952ec7f67af51872fa5e781cb52fba6bf38d19a8c4488abbe35930fa1cc9080602081016114ca565b38808080611816565b90506001541438611443565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116118c1575b82106101b057565b6118c9611895565b6118b9565b9081039081116118db5790565b6112e3611895565b60006112e3928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152611927816109b5565b5193165af161193e611937611991565b80926119f3565b50602080825183010191016119de565b6000916112e39383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611927816109b5565b3d156119d9573d906001600160401b0382116119cc575b604051916119c0601f8201601f1916602001846109d0565b82523d6000602084013e565b6119d4610909565b6119a8565b606090565b908160209103126101b057516112e381610c6f565b156119fb5790565b805115611a0a57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15611a2b5790565b805115611a3a57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611a5d6112e6565b9260005b60028110611a6f5750508252565b80611a7c6001928461138a565b51611a87828861138a565b52611a92818761138a565b506000198114611aa3575b01611a61565b611aab611895565b611a9d565b9190611aba6112e6565b9260005b60028110611acf5750506020830152565b80611adc6001928461138a565b51611ae7828861138a565b52611af2818761138a565b506000198114611b03575b01611abe565b611b0b611895565b611afd565b9190611b1a6112e6565b9260005b60028110611b2f5750506020830152565b80611b3c6001928461138a565b51611b47828861138a565b52611b52818761138a565b506000198114611b63575b01611b1e565b611b6b611895565b611b5d565b9190611b7a6112e6565b9260005b60028110611b8c5750508252565b80611b996001928461138a565b51611ba4828861138a565b52611baf818761138a565b506000198114611bc0575b01611b7e565b611bc8611895565b611bba565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611c13575b8285015260208101511515606085015201511515910152565b611c1b610c00565b611bfa565b5160028110156112db5790565b60405190611c3a82610948565b60006060838281528260208201528260408201520152565b60405190611c5f82610999565b81610160600091828152826020820152826040820152611c7d611c2d565b60608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526113716112e6565b611d2890611ccb611cc66103ca60045460ff1690565b611002565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa815180611cfc853383611bcd565b0390a1611d0d600760005414611022565b611d156109f3565b6020938185808094518301019101611123565b92611d3e81518015908115611fa7575b50611042565b01611d498151611c20565b611d5281610c45565b611e3a5750611dc190611502610a2d95611d6c34156110a2565b60008380870192611d88611d836114918651610c4f565b6110c0565b8151600081527fb958ee1580a2069054c6027ffaad5ec475357fad20b576b9248a44339fffc21690602090a101526104bc6114da611c52565b606081015160608301526080810151608083015260a081015160a0830152600060c0830152611dff611df660e0830151610c4f565b60e0840161137b565b611e19610100611e1181840151151590565b151590840152565b6101204381840152810151906101409182840152015161016082015261230b565b611e4660019151611c20565b611e4f81610c45565b14611e5a5750505050565b61188093611f9191611e6c3415611062565b611f8c81850195611ecf60a0611e828951610c4f565b95611e9c611e9760808b01988951903361194e565b611082565b8551600181527f74e98530b01a34456f0499a49295ce948585697f0c66f21c2809876424ff10d290602090a10160019052565b611f0a611f02611edd611c52565b98611eeb6104b68a51610c4f565b6104bc611efa858b0151610c4f565b858c0161137b565b84890161137b565b606086015160608801528351608088015260a086015160a0880152611f3e611f3560c0880151151590565b151560c0890152565b611f4b3360e0890161137b565b600161010088015261012043818901528601519281840151948551905101948183820151910151151592611f7d610a9e565b96875286015284019015159052565b611ab0565b906101409182840152015161016082015261230b565b90506001541438611d38565b506040513d6000823e3d90fd5b818110611fcb575050565b60008155600101611fc0565b611fe26002546108cf565b80611fea5750565b601f8111600114611ffd57506000600255565b600260005261204290601f0160051c600080516020612a78833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611fc0565b6000602081208160025555565b6040519061205c82610999565b8161016060009182815282602082015282604082015261207a611c2d565b60608201528260808201528260a08201528260c08201528260e0820152826101008201526120a66112e6565b610120820152826101408201520152565b6000915b600283106120c857505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906120bb565b610a2d90929192610260610280820194612112838251611264565b61212460208201516020850190611264565b61213660408201516040850190611264565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c081015191612195610120938487019015159052565b6121d160e0830151916121ae6101409384890190611264565b830151936121c3610160958689019015159052565b8301516101808701906120b7565b81015161024085015201511515910152565b90601f82116121f0575050565b610a2d9160026000526020600020906020601f840160051c8301931061221e575b601f0160051c0190611fc0565b9091508190612211565b80519091906001600160401b0381116122fe575b6122508161224b6002546108cf565b6121e3565b602080601f831160011461228c5750819293600092612281575b50508160011b916000199060031b1c191617600255565b01519050388061226a565b6002600052601f19831694909190600080516020612a78833981519152926000905b8782106122e65750508360019596106122cd575b505050811b01600255565b015160001960f88460031b161c191690553880806122c2565b806001859682949686015181550195019301906122ae565b612306610909565b61223c565b6101008181018051151580156125ee5760005b1561241f57505061241a61240c916123ea610a2d94600061233d61204f565b9361235161234b8451610c4f565b8661137b565b61236a6123616020850151610c4f565b6020870161137b565b61238361237a6040850151610c4f565b6040870161137b565b606083015160608601526080830151608086015260a083015160a08601526123ae60c0860160019052565b6123c76123be60e0850151610c4f565b60e0870161137b565b840152610140808201516101208501526101608092015190840152820160019052565b6123f46007600055565b6123fd43600155565b604051928391602083016120f7565b03601f1981018352826109d0565b612228565b156125635791610a2d9261254f604083019361243b8551610c4f565b906124468551610c4f565b9361246f610140958688019461245d865160200190565b5151916001600160a01b0316906125fa565b6124ad6124a461247d61131a565b9861248b6104b68a51610c4f565b6104bc61249b60208b0151610c4f565b60208c0161137b565b6040890161137b565b60a086015160608801526124d06124c760e0880151610c4f565b6080890161137b565b6000610120926124f66124ed858a0194855160a08d015251151590565b151560c08b0152565b61250a8351604060608b01510151906118ac565b60e08a015288015251908601525160208101519061254a604060208401519301511515612535610a9e565b93600085526020850152604084019015159052565b611b10565b908301526101608091015190820152612777565b5050600080808361259f61257b602084970151610c4f565b6125858351610c4f565b6101408401515151916001600160a01b03909116906125fa565b6101606125af6115ba8351610c4f565b910151908282156125e5575bf1156125d8575b600080556125d06000600155565b610a2d611fd7565b6125e0611fb3565b6125c2565b506108fc6125bb565b60c0840151151561231e565b6000919061264f93838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261263881610948565b5193165af161193e612648611991565b8092611a23565b156101b057565b6040519061266382610920565b60006020838281520152565b6040519061267c82610999565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526120a66112e6565b610a2d909291926102006101606102208301956126dd848251611264565b6126ef60208201516020860190611264565b61270160408201516040860190611264565b6060810151606085015261271d60808201516080860190611264565b60a081015160a085015261273a60c082015160c086019015159052565b60e081015160e0850152610100808201519085015261276261012080830151908601906120b7565b6101408101516101e085015201511515910152565b61277f612656565b6101008083018051606085018051919091118452939291610120918285015160e08601908151116000906000146129aa5750845115155b156128b15761241a94610a2d979461288f9484612887946127e7602061240c9c98518b511115960195869015159052565b6127ef61266f565b986127fd6104b68951610c4f565b61280d61249b60208a0151610c4f565b61282661281d60408a0151610c4f565b60408c0161137b565b5160608a015261284561283c6080890151610c4f565b60808b0161137b565b60a087015160a08a015261285f6124ed60c0890151151590565b5160e08901525190870152610140908185015190870152610160809401519086015251151590565b151590830152565b6128996005600055565b6128a243600155565b604051928391602083016126bf565b5050505060008093508261259f8294936128cf602085960151610c4f565b906128da8151151590565b851461299b576128ed6080850151610c4f565b61014085018051515190936001600160a01b039261290f9291908416906125fa565b61292661291f6040870151610c4f565b9251151590565b86146129825761297861297261293c8751610c4f565b945b5180519061296d604060208401519301511515612959610a9e565b938c85526020850152604084019015159052565b611b70565b60200190565b51519216906125fa565b6129786129726129956080880151610c4f565b9461293e565b6129a58451610c4f565b6128ed565b6127b6565b60209060631901126101b057604051906129c88261097e565b6064358252565b60209060031901126101b057604051906129e88261097e565b6004358252565b610200818303126101b0576101e090612a5d612a09610add565b93612a1383610c5b565b8552612a2160208401610c5b565b6020860152612a3260408401610c5b565b604086015260608301516060860152612a4e81608085016110e0565b60808601526101008301610c84565b60a08401526101c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 13116,
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
    at: './src/contracts/loan_nnt_nnt.rsh:143:17:after expr stmt',
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
