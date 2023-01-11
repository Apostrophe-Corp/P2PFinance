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
      const [v752, v753, v754, v755, v756, v757, v765, v769, v770] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = svs;
      return (await ((async () => {
        
        
        return v995;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v752, v753, v754, v755, v756, v757, v765, v769, v770] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = svs;
      return (await ((async () => {
        
        
        return v787;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v752, v753, v754, v755, v756, v757, v765, v769, v770] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = svs;
      return (await ((async () => {
        
        
        return v954;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = svs;
      return (await ((async () => {
        
        
        return v816;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v752, v753, v754, v755, v756, v757, v765, v769, v770] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = svs;
      return (await ((async () => {
        
        
        return v1026;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = svs;
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
  const ctc10 = stdlib.T_Data({
    Borrower_claimRefund0_288: ctc6,
    Borrower_repay0_288: ctc9,
    Lender_claim0_288: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v726 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v727 = [v726, v726];
  const v733 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_nnt.rsh:44:43:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v734 = v733.address;
  const v735 = v733.amount;
  const v736 = v733.collateral;
  const v737 = v733.maturation;
  const v738 = v733.principal;
  const v739 = v733.tokCollateral;
  const v740 = v733.tokLoan;
  const v748 = stdlib.lt(v738, v735);
  stdlib.assert(v748, {
    at: './src/contracts/loan_nnt_nnt.rsh:46:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v749 = stdlib.tokenEq(v739, v740);
  const v750 = v749 ? false : true;
  stdlib.assert(v750, {
    at: './src/contracts/loan_nnt_nnt.rsh:47:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:42:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:42:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v751 = {
    address: v734,
    amount: v735,
    maturation: v737,
    principal: v738
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v739, v740, v736, v751],
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
      
      
      const {data: [v753, v754, v755, v756], secs: v758, time: v757, didSend: v51, from: v752 } = txn1;
      
      const v759 = v727[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v760 = stdlib.Array_set(v759, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v761 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v760);
      const v763 = v761[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
      const v764 = stdlib.Array_set(v763, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
      const v765 = stdlib.Array_set(v761, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v764);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v753
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v754
        });
      ;
      const v769 = v756.principal;
      const v770 = v756.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v753, v754, v755, v756], secs: v758, time: v757, didSend: v51, from: v752 } = txn1;
  const v759 = v727[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v760 = stdlib.Array_set(v759, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v761 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v760);
  const v763 = v761[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1')];
  const v764 = stdlib.Array_set(v763, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'));
  const v765 = stdlib.Array_set(v761, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '1'), v764);
  const v767 = stdlib.tokenEq(v754, v753);
  const v768 = v767 ? false : true;
  stdlib.assert(v768, {
    at: './src/contracts/loan_nnt_nnt.rsh:49:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v769 = v756.principal;
  const v770 = v756.amount;
  const v771 = stdlib.lt(v769, v770);
  stdlib.assert(v771, {
    at: './src/contracts/loan_nnt_nnt.rsh:50:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v752, v753, v754, v755, v756, v757, v765, v769, v770],
    evt_cnt: 0,
    funcNum: 1,
    lct: v757,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), [[v755, v753]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v774, time: v773, didSend: v61, from: v772 } = txn2;
      
      ;
      const v775 = v765[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v776 = v775[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
      const v777 = stdlib.add(v776, v755);
      const v779 = stdlib.Array_set(v775, '0', v777);
      const v780 = stdlib.Array_set(v765, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v779);
      sim_r.txns.push({
        amt: v755,
        kind: 'to',
        tok: v753
        });
      
      const v784 = true;
      const v785 = v752;
      const v786 = false;
      const v787 = v773;
      const v788 = v757;
      const v793 = v780;
      const v794 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v810 = v786 ? false : v784;
        
        return v810;})()) {
        const v815 = v786 ? false : v784;
        const v816 = v815 ? true : v786;
        sim_r.isHalt = false;
        }
      else {
        const v953 = v786 ? false : v784;
        const v954 = v953 ? true : v786;
        if (v786) {
          const v980 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v981 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v987 = stdlib.sub(v981, v981);
          const v989 = stdlib.Array_set(v980, '0', v987);
          const v990 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v989);
          sim_r.txns.push({
            kind: 'from',
            to: v752,
            tok: v754
            });
          const v992 = v756.maturation;
          const v994 = stdlib.safeAdd(v788, v992);
          const v995 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v996 = v787;
          const v997 = v788;
          const v1002 = v990;
          const v1003 = v794;
          
          if (await (async () => {
            const v1021 = stdlib.gt(v994, v997);
            const v1023 = stdlib.lt(v995, v770);
            const v1024 = v1021 ? v1023 : false;
            
            return v1024;})()) {
            const v1026 = stdlib.ge(v995, v770);
            sim_r.isHalt = false;
            }
          else {
            const v1382 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v1383 = v1382[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v1385 = stdlib.lt(v995, v770);
            const v1386 = v1385 ? v785 : v752;
            const v1392 = stdlib.sub(v1383, v1383);
            const v1394 = stdlib.Array_set(v1382, '0', v1392);
            const v1395 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v1394);
            sim_r.txns.push({
              kind: 'from',
              to: v1386,
              tok: v753
              });
            const v1396 = v1395[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v1397 = v1396[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v1400 = v1385 ? v752 : v785;
            sim_r.txns.push({
              kind: 'from',
              to: v1400,
              tok: v754
              });
            sim_r.txns.push({
              kind: 'from',
              to: v752,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v754
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v753
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v956 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v957 = v956[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v752,
            tok: v753
            });
          sim_r.txns.push({
            kind: 'from',
            to: v752,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v754
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v753
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc1, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v774, time: v773, didSend: v61, from: v772 } = txn2;
  ;
  const v775 = v765[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v776 = v775[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0')];
  const v777 = stdlib.add(v776, v755);
  const v779 = stdlib.Array_set(v775, '0', v777);
  const v780 = stdlib.Array_set(v765, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:11:dot', stdlib.UInt_max, '0'), v779);
  ;
  const v781 = stdlib.addressEq(v752, v772);
  stdlib.assert(v781, {
    at: './src/contracts/loan_nnt_nnt.rsh:52:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v773), {
    at: './src/contracts/loan_nnt_nnt.rsh:53:27:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:53:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_nnt.rsh:53:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v784 = true;
  let v785 = v752;
  let v786 = false;
  let v787 = v773;
  let v788 = v757;
  let v793 = v780;
  let v794 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:40:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v810 = v786 ? false : v784;
    
    return v810;})()) {
    const v815 = v786 ? false : v784;
    const v816 = v815 ? true : v786;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v853], secs: v855, time: v854, didSend: v204, from: v852 } = txn4;
    switch (v853[0]) {
      case 'Borrower_close0_101': {
        const v856 = v853[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v889 = null;
        await txn4.getOutput('Borrower_close', 'v889', ctc5, v889);
        const cv784 = false;
        const cv785 = v785;
        const cv786 = v786;
        const cv787 = v854;
        const cv788 = v787;
        const cv793 = v793;
        const cv794 = v794;
        
        v784 = cv784;
        v785 = cv785;
        v786 = cv786;
        v787 = cv787;
        v788 = cv788;
        v793 = cv793;
        v794 = cv794;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_101': {
        const v904 = v853[1];
        undefined /* setApiDetails */;
        ;
        const v930 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
        const v931 = v930[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
        const v932 = stdlib.add(v931, v769);
        const v934 = stdlib.Array_set(v930, '0', v932);
        const v935 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v934);
        ;
        const v945 = true;
        await txn4.getOutput('Lender_lend', 'v945', ctc8, v945);
        const cv784 = v784;
        const cv785 = v852;
        const cv786 = true;
        const cv787 = v854;
        const cv788 = v787;
        const cv793 = v935;
        const cv794 = v794;
        
        v784 = cv784;
        v785 = cv785;
        v786 = cv786;
        v787 = cv787;
        v788 = cv788;
        v793 = cv793;
        v794 = cv794;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v953 = v786 ? false : v784;
  const v954 = v953 ? true : v786;
  if (v786) {
    const v980 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
    const v981 = v980[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
    const v987 = stdlib.sub(v981, v981);
    const v989 = stdlib.Array_set(v980, '0', v987);
    const v990 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v989);
    ;
    const v992 = v756.maturation;
    const v994 = stdlib.safeAdd(v788, v992);
    let v995 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
    let v996 = v787;
    let v997 = v788;
    let v1002 = v990;
    let v1003 = v794;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1021 = stdlib.gt(v994, v997);
      const v1023 = stdlib.lt(v995, v770);
      const v1024 = v1021 ? v1023 : false;
      
      return v1024;})()) {
      const v1026 = stdlib.ge(v995, v770);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: ['time', v994],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026],
          evt_cnt: 0,
          funcNum: 5,
          lct: v996,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1377, time: v1376, didSend: v611, from: v1375 } = txn6;
            
            ;
            const cv995 = v995;
            const cv996 = v1376;
            const cv997 = v996;
            const cv1002 = v1002;
            const cv1003 = v1003;
            
            await (async () => {
              const v995 = cv995;
              const v996 = cv996;
              const v997 = cv997;
              const v1002 = cv1002;
              const v1003 = cv1003;
              
              if (await (async () => {
                const v1021 = stdlib.gt(v994, v997);
                const v1023 = stdlib.lt(v995, v770);
                const v1024 = v1021 ? v1023 : false;
                
                return v1024;})()) {
                const v1026 = stdlib.ge(v995, v770);
                sim_r.isHalt = false;
                }
              else {
                const v1382 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v1383 = v1382[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v1385 = stdlib.lt(v995, v770);
                const v1386 = v1385 ? v785 : v752;
                const v1392 = stdlib.sub(v1383, v1383);
                const v1394 = stdlib.Array_set(v1382, '0', v1392);
                const v1395 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v1394);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1386,
                  tok: v753
                  });
                const v1396 = v1395[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
                const v1397 = v1396[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
                const v1400 = v1385 ? v752 : v785;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1400,
                  tok: v754
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v752,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v754
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v753
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
          tys: [ctc0, ctc2, ctc2, ctc1, ctc0, ctc1, ctc8, ctc1, ctc1, ctc1, ctc13, ctc1, ctc8],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1377, time: v1376, didSend: v611, from: v1375 } = txn6;
        ;
        const v1378 = stdlib.addressEq(v752, v1375);
        stdlib.assert(v1378, {
          at: './src/contracts/loan_nnt_nnt.rsh:94:50:dot',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:134:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:134:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv995 = v995;
        const cv996 = v1376;
        const cv997 = v996;
        const cv1002 = v1002;
        const cv1003 = v1003;
        
        v995 = cv995;
        v996 = cv996;
        v997 = cv997;
        v1002 = cv1002;
        v1003 = cv1003;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn5;
        switch (v1108[0]) {
          case 'Borrower_claimRefund0_288': {
            const v1111 = v1108[1];
            undefined /* setApiDetails */;
            ;
            ;
            const v1159 = null;
            await txn5.getOutput('Borrower_claimRefund', 'v1159', ctc5, v1159);
            const cv995 = v995;
            const cv996 = v1109;
            const cv997 = v996;
            const cv1002 = v1002;
            const cv1003 = v1003;
            
            v995 = cv995;
            v996 = cv996;
            v997 = cv997;
            v1002 = cv1002;
            v1003 = cv1003;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Borrower_repay0_288': {
            const v1199 = v1108[1];
            undefined /* setApiDetails */;
            const v1209 = v1199[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
            const v1210 = stdlib.addressEq(v1107, v752);
            stdlib.assert(v1210, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
              msg: 'You are not the Borrower',
              who: 'B'
              });
            const v1212 = stdlib.safeAdd(v1209, v995);
            const v1214 = stdlib.gt(v1212, v770);
            let v1215;
            if (v1214) {
              const v1218 = stdlib.safeSub(v1212, v770);
              v1215 = v1218;
              }
            else {
              v1215 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
              }
            const v1219 = stdlib.safeSub(v1209, v1215);
            ;
            const v1240 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
            const v1241 = v1240[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
            const v1242 = stdlib.add(v1241, v1219);
            const v1244 = stdlib.Array_set(v1240, '0', v1242);
            const v1245 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1244);
            ;
            let v1260;
            if (v1214) {
              const v1263 = stdlib.safeSub(v1212, v770);
              v1260 = v1263;
              }
            else {
              v1260 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
              }
            const v1264 = stdlib.safeSub(v1209, v1260);
            const v1266 = stdlib.safeAdd(v995, v1264);
            const v1268 = stdlib.ge(v1266, v770);
            const v1270 = [v1268, v1266, v770];
            await txn5.getOutput('Borrower_repay', 'v1270', ctc11, v1270);
            const cv995 = v1266;
            const cv996 = v1109;
            const cv997 = v996;
            const cv1002 = v1245;
            const cv1003 = v1003;
            
            v995 = cv995;
            v996 = cv996;
            v997 = cv997;
            v1002 = cv1002;
            v1003 = cv1003;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Lender_claim0_288': {
            const v1287 = v1108[1];
            undefined /* setApiDetails */;
            ;
            ;
            const v1369 = null;
            await txn5.getOutput('Lender_claim', 'v1369', ctc5, v1369);
            const cv995 = v995;
            const cv996 = v1109;
            const cv997 = v996;
            const cv1002 = v1002;
            const cv1003 = v1003;
            
            v995 = cv995;
            v996 = cv996;
            v997 = cv997;
            v1002 = cv1002;
            v1003 = cv1003;
            
            txn4 = txn5;
            continue;
            break;
            }
          }}
      
      }
    const v1382 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
    const v1383 = v1382[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
    const v1385 = stdlib.lt(v995, v770);
    const v1386 = v1385 ? v785 : v752;
    const v1392 = stdlib.sub(v1383, v1383);
    const v1394 = stdlib.Array_set(v1382, '0', v1392);
    const v1395 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v1394);
    ;
    const v1396 = v1395[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
    const v1397 = v1396[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
    const v1400 = v1385 ? v752 : v785;
    ;
    ;
    return;
    }
  else {
    const v956 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
    const v957 = v956[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
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
    Borrower_claimRefund0_288: ctc6,
    Borrower_repay0_288: ctc7,
    Lender_claim0_288: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1034 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:126:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_claimRefund0_288" (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v1038 = ['Borrower_claimRefund0_288', v1034];
  
  const txn1 = await (ctc.sendrecv({
    args: [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026, v1038],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:126:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v754]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
      
      switch (v1108[0]) {
        case 'Borrower_claimRefund0_288': {
          const v1111 = v1108[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1159 = null;
          const v1160 = await txn1.getOutput('Borrower_claimRefund', 'v1159', ctc9, v1159);
          
          const v2575 = v995;
          const v2576 = v1109;
          const v2578 = v1002;
          const v2579 = v1003;
          const v2580 = stdlib.gt(v994, v996);
          const v2581 = stdlib.lt(v995, v770);
          const v2582 = v2580 ? v2581 : false;
          if (v2582) {
            const v2583 = stdlib.ge(v995, v770);
            sim_r.isHalt = false;
            }
          else {
            const v2585 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2586 = v2585[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2588 = v2581 ? v785 : v752;
            const v2589 = stdlib.sub(v2586, v2586);
            const v2590 = stdlib.Array_set(v2585, '0', v2589);
            const v2591 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2590);
            sim_r.txns.push({
              kind: 'from',
              to: v2588,
              tok: v753
              });
            const v2592 = v2591[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2593 = v2592[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2594 = v2581 ? v752 : v785;
            sim_r.txns.push({
              kind: 'from',
              to: v2594,
              tok: v754
              });
            sim_r.txns.push({
              kind: 'from',
              to: v752,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v754
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v753
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_288': {
          const v1199 = v1108[1];
          
          break;
          }
        case 'Lender_claim0_288': {
          const v1287 = v1108[1];
          
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
  const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
  switch (v1108[0]) {
    case 'Borrower_claimRefund0_288': {
      const v1111 = v1108[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1159 = null;
      const v1160 = await txn1.getOutput('Borrower_claimRefund', 'v1159', ctc9, v1159);
      if (v532) {
        stdlib.protect(ctc9, await interact.out(v1111, v1160), {
          at: './src/contracts/loan_nnt_nnt.rsh:126:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:126:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:127:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:58:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:126:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:126:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2575 = v995;
      const v2576 = v1109;
      const v2578 = v1002;
      const v2579 = v1003;
      const v2580 = stdlib.gt(v994, v996);
      const v2581 = stdlib.lt(v995, v770);
      const v2582 = v2580 ? v2581 : false;
      if (v2582) {
        const v2583 = stdlib.ge(v995, v770);
        return;
        }
      else {
        const v2585 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2586 = v2585[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2588 = v2581 ? v785 : v752;
        const v2589 = stdlib.sub(v2586, v2586);
        const v2590 = stdlib.Array_set(v2585, '0', v2589);
        const v2591 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2590);
        ;
        const v2592 = v2591[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2593 = v2592[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2594 = v2581 ? v752 : v785;
        ;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_288': {
      const v1199 = v1108[1];
      return;
      break;
      }
    case 'Lender_claim0_288': {
      const v1287 = v1108[1];
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
  
  
  const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v819 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runBorrower_close0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v823 = ['Borrower_close0_101', v819];
  
  const txn1 = await (ctc.sendrecv({
    args: [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816, v823],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:79:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:67:26:decimal', stdlib.UInt_max, '0'), v754]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v853], secs: v855, time: v854, didSend: v204, from: v852 } = txn1;
      
      switch (v853[0]) {
        case 'Borrower_close0_101': {
          const v856 = v853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v889 = null;
          const v890 = await txn1.getOutput('Borrower_close', 'v889', ctc9, v889);
          
          const v2635 = false;
          const v2636 = v785;
          const v2637 = v786;
          const v2638 = v854;
          const v2640 = v793;
          const v2641 = v794;
          const v2642 = v786 ? false : false;
          if (v2642) {
            const v2644 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2646 = v786;
            if (v786) {
              const v2647 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
              const v2648 = v2647[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
              const v2649 = stdlib.sub(v2648, v2648);
              const v2650 = stdlib.Array_set(v2647, '0', v2649);
              const v2651 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2650);
              sim_r.txns.push({
                kind: 'from',
                to: v752,
                tok: v754
                });
              const v2652 = v756.maturation;
              const v2653 = stdlib.safeAdd(v787, v2652);
              const v2712 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
              const v2713 = v854;
              const v2715 = v2651;
              const v2716 = v794;
              const v2717 = stdlib.gt(v2653, v787);
              const v2718 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
              const v2719 = v2717 ? v2718 : false;
              if (v2719) {
                const v2720 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
                sim_r.isHalt = false;
                }
              else {
                const v2722 = v2651[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v2723 = v2722[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
                const v2725 = v2718 ? v785 : v752;
                const v2726 = stdlib.sub(v2723, v2723);
                const v2727 = stdlib.Array_set(v2722, '0', v2726);
                const v2728 = stdlib.Array_set(v2651, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2727);
                sim_r.txns.push({
                  kind: 'from',
                  to: v2725,
                  tok: v753
                  });
                const v2729 = v2728[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
                const v2730 = v2729[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
                const v2731 = v2718 ? v752 : v785;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2731,
                  tok: v754
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v752,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v754
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v753
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2710 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              const v2711 = v2710[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v752,
                tok: v753
                });
              sim_r.txns.push({
                kind: 'from',
                to: v752,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v754
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v753
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
          const v904 = v853[1];
          
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
  const {data: [v853], secs: v855, time: v854, didSend: v204, from: v852 } = txn1;
  switch (v853[0]) {
    case 'Borrower_close0_101': {
      const v856 = v853[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v889 = null;
      const v890 = await txn1.getOutput('Borrower_close', 'v889', ctc9, v889);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v856, v890), {
          at: './src/contracts/loan_nnt_nnt.rsh:79:22:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:79:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:80:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:79:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:79:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2635 = false;
      const v2636 = v785;
      const v2637 = v786;
      const v2638 = v854;
      const v2640 = v793;
      const v2641 = v794;
      const v2642 = v786 ? false : false;
      if (v2642) {
        const v2644 = true;
        return;
        }
      else {
        const v2646 = v786;
        if (v786) {
          const v2647 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v2648 = v2647[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v2649 = stdlib.sub(v2648, v2648);
          const v2650 = stdlib.Array_set(v2647, '0', v2649);
          const v2651 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v2650);
          ;
          const v2652 = v756.maturation;
          const v2653 = stdlib.safeAdd(v787, v2652);
          const v2712 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v2713 = v854;
          const v2715 = v2651;
          const v2716 = v794;
          const v2717 = stdlib.gt(v2653, v787);
          const v2718 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
          const v2719 = v2717 ? v2718 : false;
          if (v2719) {
            const v2720 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
            return;
            }
          else {
            const v2722 = v2651[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2723 = v2722[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2725 = v2718 ? v785 : v752;
            const v2726 = stdlib.sub(v2723, v2723);
            const v2727 = stdlib.Array_set(v2722, '0', v2726);
            const v2728 = stdlib.Array_set(v2651, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2727);
            ;
            const v2729 = v2728[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2730 = v2729[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2731 = v2718 ? v752 : v785;
            ;
            ;
            return;
            }}
        else {
          const v2710 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          const v2711 = v2710[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:84:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_101': {
      const v904 = v853[1];
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
    Borrower_claimRefund0_288: ctc7,
    Borrower_repay0_288: ctc6,
    Lender_claim0_288: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1048 = ctc.selfAddress();
  const v1050 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_288" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v1051 = v1050[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1053 = stdlib.addressEq(v1048, v752);
  stdlib.assert(v1053, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runBorrower_repay0_288" (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v1055 = stdlib.safeAdd(v1051, v995);
  const v1057 = stdlib.gt(v1055, v770);
  const v1068 = ['Borrower_repay0_288', v1050];
  
  let v1085;
  if (v1057) {
    const v1088 = stdlib.safeSub(v1055, v770);
    v1085 = v1088;
    }
  else {
    v1085 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
    }
  const v1089 = stdlib.safeSub(v1051, v1085);
  
  const txn1 = await (ctc.sendrecv({
    args: [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026, v1068],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:118:42:decimal', stdlib.UInt_max, '0'), [[v1089, v754]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
      
      switch (v1108[0]) {
        case 'Borrower_claimRefund0_288': {
          const v1111 = v1108[1];
          
          break;
          }
        case 'Borrower_repay0_288': {
          const v1199 = v1108[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1209 = v1199[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
          const v1212 = stdlib.safeAdd(v1209, v995);
          const v1214 = stdlib.gt(v1212, v770);
          let v1215;
          if (v1214) {
            const v1218 = stdlib.safeSub(v1212, v770);
            v1215 = v1218;
            }
          else {
            v1215 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1219 = stdlib.safeSub(v1209, v1215);
          ;
          const v1240 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
          const v1241 = v1240[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
          const v1242 = stdlib.add(v1241, v1219);
          const v1244 = stdlib.Array_set(v1240, '0', v1242);
          const v1245 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1244);
          sim_r.txns.push({
            amt: v1219,
            kind: 'to',
            tok: v754
            });
          let v1260;
          if (v1214) {
            const v1263 = stdlib.safeSub(v1212, v770);
            v1260 = v1263;
            }
          else {
            v1260 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
            }
          const v1264 = stdlib.safeSub(v1209, v1260);
          const v1266 = stdlib.safeAdd(v995, v1264);
          const v1268 = stdlib.ge(v1266, v770);
          const v1270 = [v1268, v1266, v770];
          const v1271 = await txn1.getOutput('Borrower_repay', 'v1270', ctc9, v1270);
          
          const v2849 = v1266;
          const v2850 = v1109;
          const v2852 = v1245;
          const v2853 = v1003;
          const v2854 = stdlib.gt(v994, v996);
          const v2855 = stdlib.lt(v1266, v770);
          const v2856 = v2854 ? v2855 : false;
          if (v2856) {
            sim_r.isHalt = false;
            }
          else {
            const v2859 = v1245[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2860 = v2859[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2862 = v2855 ? v785 : v752;
            const v2863 = stdlib.sub(v2860, v2860);
            const v2864 = stdlib.Array_set(v2859, '0', v2863);
            const v2865 = stdlib.Array_set(v1245, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2864);
            sim_r.txns.push({
              kind: 'from',
              to: v2862,
              tok: v753
              });
            const v2866 = v2865[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2867 = v2866[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2868 = v2855 ? v752 : v785;
            sim_r.txns.push({
              kind: 'from',
              to: v2868,
              tok: v754
              });
            sim_r.txns.push({
              kind: 'from',
              to: v752,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v754
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v753
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_288': {
          const v1287 = v1108[1];
          
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
  const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
  switch (v1108[0]) {
    case 'Borrower_claimRefund0_288': {
      const v1111 = v1108[1];
      return;
      break;
      }
    case 'Borrower_repay0_288': {
      const v1199 = v1108[1];
      undefined /* setApiDetails */;
      const v1209 = v1199[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:110:30:spread', stdlib.UInt_max, '0')];
      const v1210 = stdlib.addressEq(v1107, v752);
      stdlib.assert(v1210, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:111:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:110:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:108:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:108:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1212 = stdlib.safeAdd(v1209, v995);
      const v1214 = stdlib.gt(v1212, v770);
      let v1215;
      if (v1214) {
        const v1218 = stdlib.safeSub(v1212, v770);
        v1215 = v1218;
        }
      else {
        v1215 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
        }
      const v1219 = stdlib.safeSub(v1209, v1215);
      ;
      const v1240 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1')];
      const v1241 = v1240[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '0')];
      const v1242 = stdlib.add(v1241, v1219);
      const v1244 = stdlib.Array_set(v1240, '0', v1242);
      const v1245 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:50:dot', stdlib.UInt_max, '1'), v1244);
      ;
      let v1260;
      if (v1214) {
        const v1263 = stdlib.safeSub(v1212, v770);
        v1260 = v1263;
        }
      else {
        v1260 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:115:51:decimal', stdlib.UInt_max, '0');
        }
      const v1264 = stdlib.safeSub(v1209, v1260);
      const v1266 = stdlib.safeAdd(v995, v1264);
      const v1268 = stdlib.ge(v1266, v770);
      const v1270 = [v1268, v1266, v770];
      const v1271 = await txn1.getOutput('Borrower_repay', 'v1270', ctc9, v1270);
      if (v532) {
        stdlib.protect(ctc10, await interact.out(v1199, v1271), {
          at: './src/contracts/loan_nnt_nnt.rsh:110:31:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:110:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:110:31:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:121:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:119:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:119:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:119:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2849 = v1266;
      const v2850 = v1109;
      const v2852 = v1245;
      const v2853 = v1003;
      const v2854 = stdlib.gt(v994, v996);
      const v2855 = stdlib.lt(v1266, v770);
      const v2856 = v2854 ? v2855 : false;
      if (v2856) {
        return;
        }
      else {
        const v2859 = v1245[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2860 = v2859[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2862 = v2855 ? v785 : v752;
        const v2863 = stdlib.sub(v2860, v2860);
        const v2864 = stdlib.Array_set(v2859, '0', v2863);
        const v2865 = stdlib.Array_set(v1245, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2864);
        ;
        const v2866 = v2865[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2867 = v2866[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2868 = v2855 ? v752 : v785;
        ;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_288': {
      const v1287 = v1108[1];
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
    Borrower_claimRefund0_288: ctc6,
    Borrower_repay0_288: ctc7,
    Lender_claim0_288: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1042 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:130:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to "runLender_claim0_288" (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:29:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:94:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:94:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v1046 = ['Lender_claim0_288', v1042];
  
  const txn1 = await (ctc.sendrecv({
    args: [v752, v753, v754, v770, v785, v787, v954, v994, v995, v996, v1002, v1003, v1026, v1046],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:130:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:108:34:decimal', stdlib.UInt_max, '0'), v754]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
      
      switch (v1108[0]) {
        case 'Borrower_claimRefund0_288': {
          const v1111 = v1108[1];
          
          break;
          }
        case 'Borrower_repay0_288': {
          const v1199 = v1108[1];
          
          break;
          }
        case 'Lender_claim0_288': {
          const v1287 = v1108[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1369 = null;
          const v1370 = await txn1.getOutput('Lender_claim', 'v1369', ctc9, v1369);
          
          const v2929 = v995;
          const v2930 = v1109;
          const v2932 = v1002;
          const v2933 = v1003;
          const v2934 = stdlib.gt(v994, v996);
          const v2935 = stdlib.lt(v995, v770);
          const v2936 = v2934 ? v2935 : false;
          if (v2936) {
            const v2937 = stdlib.ge(v995, v770);
            sim_r.isHalt = false;
            }
          else {
            const v2939 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2940 = v2939[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v2942 = v2935 ? v785 : v752;
            const v2943 = stdlib.sub(v2940, v2940);
            const v2944 = stdlib.Array_set(v2939, '0', v2943);
            const v2945 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2944);
            sim_r.txns.push({
              kind: 'from',
              to: v2942,
              tok: v753
              });
            const v2946 = v2945[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v2947 = v2946[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v2948 = v2935 ? v752 : v785;
            sim_r.txns.push({
              kind: 'from',
              to: v2948,
              tok: v754
              });
            sim_r.txns.push({
              kind: 'from',
              to: v752,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v754
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v753
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
  const {data: [v1108], secs: v1110, time: v1109, didSend: v532, from: v1107 } = txn1;
  switch (v1108[0]) {
    case 'Borrower_claimRefund0_288': {
      const v1111 = v1108[1];
      return;
      break;
      }
    case 'Borrower_repay0_288': {
      const v1199 = v1108[1];
      return;
      break;
      }
    case 'Lender_claim0_288': {
      const v1287 = v1108[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1369 = null;
      const v1370 = await txn1.getOutput('Lender_claim', 'v1369', ctc9, v1369);
      if (v532) {
        stdlib.protect(ctc9, await interact.out(v1287, v1370), {
          at: './src/contracts/loan_nnt_nnt.rsh:130:30:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:130:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:30:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:131:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:130:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:130:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2929 = v995;
      const v2930 = v1109;
      const v2932 = v1002;
      const v2933 = v1003;
      const v2934 = stdlib.gt(v994, v996);
      const v2935 = stdlib.lt(v995, v770);
      const v2936 = v2934 ? v2935 : false;
      if (v2936) {
        const v2937 = stdlib.ge(v995, v770);
        return;
        }
      else {
        const v2939 = v1002[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2940 = v2939[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v2942 = v2935 ? v785 : v752;
        const v2943 = stdlib.sub(v2940, v2940);
        const v2944 = stdlib.Array_set(v2939, '0', v2943);
        const v2945 = stdlib.Array_set(v1002, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v2944);
        ;
        const v2946 = v2945[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v2947 = v2946[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v2948 = v2935 ? v752 : v785;
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
  
  
  const [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v827 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:39:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to "runLender_lend0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:55:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:55:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v831 = ['Lender_lend0_101', v827];
  
  const txn1 = await (ctc.sendrecv({
    args: [v752, v753, v754, v756, v769, v770, v784, v785, v786, v787, v793, v794, v816, v831],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:71:34:decimal', stdlib.UInt_max, '0'), [[v769, v754]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v853], secs: v855, time: v854, didSend: v204, from: v852 } = txn1;
      
      switch (v853[0]) {
        case 'Borrower_close0_101': {
          const v856 = v853[1];
          
          break;
          }
        case 'Lender_lend0_101': {
          const v904 = v853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v930 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
          const v931 = v930[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
          const v932 = stdlib.add(v931, v769);
          const v934 = stdlib.Array_set(v930, '0', v932);
          const v935 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v934);
          sim_r.txns.push({
            amt: v769,
            kind: 'to',
            tok: v754
            });
          const v945 = true;
          const v946 = await txn1.getOutput('Lender_lend', 'v945', ctc4, v945);
          
          const v3047 = v852;
          const v3049 = v854;
          const v3057 = true;
          const v3058 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
          const v3059 = v3058[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
          const v3060 = stdlib.sub(v3059, v3059);
          const v3061 = stdlib.Array_set(v3058, '0', v3060);
          const v3062 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v3061);
          sim_r.txns.push({
            kind: 'from',
            to: v752,
            tok: v754
            });
          const v3063 = v756.maturation;
          const v3064 = stdlib.safeAdd(v787, v3063);
          const v3123 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
          const v3124 = v854;
          const v3126 = v3062;
          const v3127 = v794;
          const v3128 = stdlib.gt(v3064, v787);
          const v3129 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
          const v3130 = v3128 ? v3129 : false;
          if (v3130) {
            const v3131 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
            sim_r.isHalt = false;
            }
          else {
            const v3133 = v3062[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v3134 = v3133[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
            const v3136 = v3129 ? v852 : v752;
            const v3137 = stdlib.sub(v3134, v3134);
            const v3138 = stdlib.Array_set(v3133, '0', v3137);
            const v3139 = stdlib.Array_set(v3062, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v3138);
            sim_r.txns.push({
              kind: 'from',
              to: v3136,
              tok: v753
              });
            const v3140 = v3139[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
            const v3141 = v3140[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
            const v3142 = v3129 ? v752 : v852;
            sim_r.txns.push({
              kind: 'from',
              to: v3142,
              tok: v754
              });
            sim_r.txns.push({
              kind: 'from',
              to: v752,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v754
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v753
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
  const {data: [v853], secs: v855, time: v854, didSend: v204, from: v852 } = txn1;
  switch (v853[0]) {
    case 'Borrower_close0_101': {
      const v856 = v853[1];
      return;
      break;
      }
    case 'Lender_lend0_101': {
      const v904 = v853[1];
      undefined /* setApiDetails */;
      ;
      const v930 = v793[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1')];
      const v931 = v930[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '0')];
      const v932 = stdlib.add(v931, v769);
      const v934 = stdlib.Array_set(v930, '0', v932);
      const v935 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:55:62:dot', stdlib.UInt_max, '1'), v934);
      ;
      const v945 = true;
      const v946 = await txn1.getOutput('Lender_lend', 'v945', ctc4, v945);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v904, v946), {
          at: './src/contracts/loan_nnt_nnt.rsh:69:23:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:69:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:23:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:73:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:72:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:72:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v3047 = v852;
      const v3049 = v854;
      const v3057 = true;
      const v3058 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '1')];
      const v3059 = v3058[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:33:application', stdlib.UInt_max, '0')];
      const v3060 = stdlib.sub(v3059, v3059);
      const v3061 = stdlib.Array_set(v3058, '0', v3060);
      const v3062 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:55:application', stdlib.UInt_max, '1'), v3061);
      ;
      const v3063 = v756.maturation;
      const v3064 = stdlib.safeAdd(v787, v3063);
      const v3123 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0');
      const v3124 = v854;
      const v3126 = v3062;
      const v3127 = v794;
      const v3128 = stdlib.gt(v3064, v787);
      const v3129 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
      const v3130 = v3128 ? v3129 : false;
      if (v3130) {
        const v3131 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:94:51:decimal', stdlib.UInt_max, '0'), v770);
        return;
        }
      else {
        const v3133 = v3062[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v3134 = v3133[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:33:application', stdlib.UInt_max, '0')];
        const v3136 = v3129 ? v852 : v752;
        const v3137 = stdlib.sub(v3134, v3134);
        const v3138 = stdlib.Array_set(v3133, '0', v3137);
        const v3139 = stdlib.Array_set(v3062, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:136:67:application', stdlib.UInt_max, '0'), v3138);
        ;
        const v3140 = v3139[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '1')];
        const v3141 = v3140[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:139:33:application', stdlib.UInt_max, '0')];
        const v3142 = v3129 ? v752 : v852;
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
  appApproval: `ByAbAAEEBQggKAcwoI0G2faovAbX8dudB56S1pUI49Tx8Q+Tr+T5Br7zptcD9q6A9AP/8ca6AgZwmgFhWGlxmwECJgMBAQEAACI1ADEYQQgbKmRJIls1ASEEWzUCNhoAF0lBARIiNQQjNQZJIQoMQAB5SSELDEAAQEkhDAxAAClJIQ0MQAAUIQ0SRCo1/4ABAjT/UCEEr1BCAlEhDBJEKjX/KTT/UEIA8iELEkQ2GgE1/yg0/1BCAjNJIQ4MQAASIQ4SRCo1/yk0/1AhBK9QQgIaIQoSRDQBJRJEKWQoZFBJNQNXaQg1B0IHeUkhDwxAAC5JIRAMQAAOIRASRCo1/yg0/1BCAJQhDxJENAElEkQpZChkUEk1A1ejATUHQgdESSERDEAAGSEREkQ0ASUSRClkKGRQSTUDV1gINQdCBySBj8bFKhJENAFJIQcMQAAUIQcSRClkKGRQSTUDV8wBNQdCBwAlEkQpZChkUEk1A1dgATUHQgbtNhoCFzUENhoDNhoBF0kkDEAC+kklDEABW0khEgxAAOEhEhJEIQc0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpJVwAgNf8hBVs1/iEGWzX9VzA4NfyBaFs1+yETWzX6IRRbNflXoiI1+IHEAVs190k1BTX2gASQT2RJNPZQsDT2IlVAADGACAAAAAAAAAN5sCo1BzT/NP40/TT8NPs0+iI0A1d5IDQDV5kBFzIGNPk0+DT3QgPMNPhXERE19TT7NP2IBmaACQAAAAAAAAOxAbAoNQc0/zT+NP00/DT7NPo0A1d4ARcxACMyBjT5NPg09UkiWzT7CBZcAFwRNPdCA4JIJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IRVbNf6ABMyZklywMgY0/g9ENP8xABJENP80AyEFWzQDIQZbNAMhCFs0A1c4IDQDIRZbNANXYAEXNP40AyEXWzIGNAMhGFs0A1d5IjQDIRlbQgQhSCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSlcAIDX/IQVbNf4hBls1/SEIWzX8VzggNfshFls1+ldgARc1+SEVWzX4IRdbNfchGFs19ld5IjX1IRlbNfRJNQU184AE1Y4dqzTzULAyBjT4DEQ08yJVSSMMQADySSEaDEAALyEaEkSACAAAAAAAAAVZsCo1BzT/NP40/TT8NPs0+jT5NPg09zIGNPY09TT0QgNwSDTzVwEINfI08hc18TEANP8SRDTxNPcISTXwNPwNSTXvQQAKNPA0/Ak17kIAAyI17jTxNO4JNe009VcRETXsNO00/YgEwDTvQQAKNPA0/Ak160IAAyI16zT3NPE06wkINeqACAAAAAAAAAT2NOo0/A8WUQcINOoWUDT8FlBQsDTqNPwPFlEHCDTqFlA0/BZQNQc0/zT+NP00/DT7NPo0+TT4NOoyBjT2NPU07EkiWzTtCBZcAFwRNPRCArRIgAgAAAAAAAAEh7AqNQc0/zT+NP00/DT7NPo0+TT4NPcyBjT2NPU09EICiEkjDEAAgyMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBVs1/iEIWzX9V3giNfyABJqLkXSwNPxXABE1+zT9NP6IA9I0/zEAEkQ0/zT+NAMhBls0A1c4ODQDIRRbNAOBogFbIzT/IjIGNAMhE1s0/DT7SSJbNP0IFlwAXAAiQgDtSCEJiAN3IjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+gRBbNf1XGDg1/IAE8ZJYijT/FlA0/hZQNP0WUDT8ULCBEa9JNftJUEk1+klXABEhBK9cAFwASTX5SVcRESEEr1wAXBE1+DT+NP8TRCEJiAMIsSKyASKyEiSyEDIKshQ0/7IRsyEJiALwsSKyASKyEiSyEDIKshQ0/rIRszT8IQhbNfc0/CEFWzX2NPc09gxEMQA0/xZQNP4WUDT9FlA0/FAyBhZQNPhQNPcWUDT2FlApSwFXAH9nKEsBV38rZ0gjNQEyBjUCQgI+Nf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0+xQ0+RBBAEM08zT0FlA09RZQNPZQNPcWUDT4FlAoUDT6UClQNPwWUDT+UDT/FlAoUClLAVcAf2coSwFXf05nSCEHNQEyBjUCQgHYNPtBAE00/lcREUk18iJbNfGxIrIBNPGyEiSyEDTzshQ09bIRszTzNPQ09TT4NPo0/DT7NP009iEGWwgiNPw0/TT+NPI08UkJFlwAXBE0/0IAWrEisgE0/lcAESJbshIkshA087IUNPSyEbOxIrIBNP+yCCOyEDTzsgezsSKyASKyEiSyEDIJshUyCrIUNPWyEbOxIrIBIrISJLIQMgmyFTIKshQ09LIRs0IBETX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNPs09gw18jT6NP0NNPIQQQBWNPs09g818TTzNPQWUDT1FlA09hZQNPdQNPgWUDT5FlEHCFA0+hZQNPsWUDT8FlA0/lA0/xZQNPEWUQcIUClLAVcAf2coSwFXfyVnSCU1ATIGNQJCAKo0/lcAEUk18SJbNfCxIrIBNPCyEiSyEDTzNPc08k2yFDT0shGzsSKyATT+NPE08EkJFlwAXABXEREiW7ISJLIQNPc08zTyTbIUNPWyEbOxIrIBNP+yCCOyEDTzsgezsSKyASKyEiSyEDIJshUyCrIUNPWyEbOxIrIBIrISJLIQMgmyFTIKshQ09LIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 205,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"internalType":"struct T12","name":"v3175","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_288","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_288","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_288","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1159","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1270","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1369","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v889","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v945","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3161","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v3177","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_288","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_288","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_288","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v3191","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v3208","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v3215","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200369038819003601f8101601f191683016001600160401b038111848210176200064557839282916040528339810103906101008212620007a4576040519160a08301906001600160401b038211848310176200064557608091604052825184526200007160208401620007e1565b60208501526200008460408401620007e1565b604085015260608301516060850152607f190112620007a45760e060405191620000ae83620007a9565b620000bc60808201620007e1565b835260a0810151602084015260c0810151604084015201516060820152608082015243600355604051610140810181811060018060401b038211176200064557600091610120916040528281528260208201528260408201526200011f620007f6565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200015482620007a9565b6200015e620007f6565b82526200016a62000817565b60208301526200017962000817565b60408301526200018862000817565b606083015260ff600454166200078b577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b036040850151166060820152606084015160808201526200020b608085015160a08301906200085e565ba1805180159081156200077e575b5015620007655760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200026983620007c5565b60008352602083015260408201526200028162000817565b9160005b600281106200072b5750508152806040840152602081015160406020820151910151151560405191620002b883620007c5565b6000835260208301526040820152620002d062000817565b9160005b60028110620006db5750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006d35760005b15620006ba5734620006a15760808101516020606082015191015111156200068857604051916001600160401b0361012084019081119084111762000645576020916060608092610120860160405260008652600085870152600060408701526000828701526040516200038381620007a9565b600081526000868201526000604082015260008382015284870152600060a0870152620003af62000817565b60c0870152600060e0870152600061010087015233865260018060a01b0385840151168587015260018060a01b036040840151166040870152818301518287015283830151848701524360a0870152015160c0850152606082820151015160e0850152015101516101008201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000471608082015160a08401906200085e565b60a081015161012083015260c0810151600061014084015b600282106200065b5760e08401516102008601526101008401516102208087019190915285528461024081016001600160401b03811182821017620006455760405280516001600160401b0381116200064557600254600181811c911680156200063a575b60208210146200062457601f8111620005ba575b50602091601f8211600114620005505791819260009262000544575b50508160011b916000199060031b1c1916176002555b604051612ddd9081620008b38239f35b0151905082806200051e565b601f19821692600260005260206000209160005b858110620005a15750836001951062000587575b505050811b0160025562000534565b015160001960f88460031b161c1916905582808062000578565b9192602060018192868501518155019401920162000564565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000619575b601f0160051c01905b8181106200060c575062000502565b60008155600101620005fd565b9091508190620005f4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004ee565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000489565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60016200030f565b620006e781836200088a565b51620006f482866200088a565b526200070181856200088a565b5060001981146200071557600101620002d4565b634e487b7160e01b600052601160045260246000fd5b6200073781836200088a565b516200074482866200088a565b526200075181856200088a565b506000198114620007155760010162000285565b60405163100960cb60e01b8152600d6004820152602490fd5b9050600154143862000219565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200064557604052565b606081019081106001600160401b038211176200064557604052565b51906001600160a01b0382168203620007a457565b604051906200080582620007c5565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620006455781528260005b8281106200084657505050565b60209062000853620007f6565b818401520162000839565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060028110156200089c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101585780631e93b0f11461014f57806330dd5d0814610146578063316dfd001461013d5780633c4965541461013457806340410cd51461012b5780634cd8755514610122578063573b851014610119578063823c0a8d14610110578063832307571461010757806392e83e21146100fe57806394134348146100f557806396d6c36b146100ec578063ab53f2c6146100e3578063bfbc9d04146100da5763f9d773330361000e576100d5610a0f565b61000e565b506100d56109a1565b506100d561092c565b506100d56108ad565b506100d5610803565b506100d56107b5565b506100d5610796565b506100d5610757565b506100d561056a565b506100d56104ff565b506100d56104a6565b506100d5610456565b506100d56103c9565b506100d56101f9565b506100d56101c9565b50346101c45760003660031901126101c457610172610d06565b6005600054036101ab5760e060209160a061019c61018e610bbf565b858082518301019101610ecd565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101c45760003660031901126101c4576020600354604051908152f35b60209060031901126101c457600490565b506103ad610219610209366101e8565b610211610d06565b503690612ce4565b61023461022f61022b60045460ff1690565b1590565b610f99565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124960405180610264843383612d02565b0390a1610275600560005414610fb9565b6102a4610292610283610bbf565b60208082518301019101610ecd565b915180159081156103bd575b50610fd9565b60e08101906102b68251431015610ff7565b6102c03415611017565b6102dc3360018060a01b036102d58451610e1b565b1614611037565b6102e46115dd565b916102f86102f28351610e1b565b84611645565b6103116103086020840151610e1b565b60208501611645565b61032a6103216040840151610e1b565b60408501611645565b6060820151606084015261034d6103446080840151610e1b565b60808501611645565b60a082015160a084015261037061036760c0840151151590565b151560c0850152565b5160e08301526101008082015190830152610120438184015281015161014090818401528101519061016091828401520151610180820152612a77565b60405160008152602090f35b0390f35b9050600154143861029e565b5060a03660031901126101c4576103de610d06565b604051906103eb82610aec565b600435825260803660231901126101c4576040519161040983610b14565b6024359260038410156101c4576103ad93815260443561042881610e3b565b602082015261043636612cc4565b604082015260843561044781610e3b565b6060820152602082015261167b565b50346101c45760003660031901126101c457610470610d06565b60056000540361048d5760c060209161010061019c61018e610bbf565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101c457602060406104bf610d06565b6104f3816104cb610df5565b85810190600082515251151586825101526104e4610df5565b90600082525186820152611f22565b01511515604051908152f35b50346101c45760003660031901126101c457610519610d06565b600560005403610551576101206103b991610180610538610283610bbf565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b50610577610209366101e8565b61058e61058961022b60045460ff1690565b611057565b6107416040917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968351806105c3843383612d02565b0390a16105d4600160005414611077565b61072e6105df610bbf565b916106096105f7602094858082518301019101612d1c565b9151801590811561074b575b50611097565b61061334156110b7565b8281019261072960c06106268651610e1b565b9361064061063b606083019687519033611bb9565b6110d7565b61065c3360018060a01b036106558451610e1b565b16146110f7565b61068c61068461066a611ebd565b9861067e6106788551610e1b565b8b611645565b51610e1b565b858901611645565b6106a361069b8a830151610e1b565b8a8901611645565b6080810151606088015260e0810151608088015260006101008083015160a08a01526106d1848a0160019052565b6106e76106de8451610e1b565b60e08b01611645565b8801524361012088015260a0810151610140880152015191825193845190510193888282015191015115159161071b610c6a565b958652850152151587840152565b611cbe565b61016082015260006101808201526125df565b5160008152602090f35b90506001541438610603565b5060003660031901126101c457602060a0610770610d06565b6104f38161077c610df5565b8581019060018251525115156040825101526104e4610df5565b50346101c45760003660031901126101c4576020600154604051908152f35b5060003660031901126101c457602060806107ce610d06565b6104f3816107da610dab565b8581019060028251525115156060825101526107f4610dab565b9060008252518682015261167b565b50346101c45760003660031901126101c4576103b9610860610100610826610d06565b600054600781101561087257600561083e9114611137565b61085161085860c0610851610283610bbf565b0151151590565b151582840152565b60405190151581529081906020820190565b600761087e9114611117565b6108a861018061089e61088f610bbf565b602080825183010191016113da565b0151151582840152565b610851565b5060803660031901126101c4576108c2610d06565b604051906108cf82610aec565b600435825260603660231901126101c457604051916108ed83610b2f565b6024359260028410156101c4576103ad93815260443561090c81610e3b565b602082015260643561091d81610e3b565b60408201526020820152611f22565b50346101c45760008060031936011261099e578054610949610bbf565b906040519283918252602090604082840152835191826040850152815b83811061098757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610966565b80fd5b5060003660031901126101c4576020806109b9610d06565b6104f3816109c5610dab565b84810190600082515251151585825101526109de610dab565b9060008252518582015261167b565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101c457610a24610cc9565b506103b96060610a32610d06565b610a8d81604051610a4281610aec565b604051610a4e81610b4a565b6000815281526020810190610a61610d78565b8252600435815152600182515251604082510152610a7d610dab565b906000825251602082015261167b565b0151604051918291826109ed565b90600182811c92168015610acb575b6020831014610ab557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610aaa565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610b0757604052565b610b0f610ad5565b604052565b608081019081106001600160401b03821117610b0757604052565b606081019081106001600160401b03821117610b0757604052565b602081019081106001600160401b03821117610b0757604052565b6101a081019081106001600160401b03821117610b0757604052565b60a081019081106001600160401b03821117610b0757604052565b601f909101601f19168101906001600160401b03821190821017610b0757604052565b6040519060008260025491610bd383610a9b565b808352600193808516908115610c495750600114610bfb575b50610bf992500383610b9c565b565b60026000908152600080516020612db183398151915294602093509091905b818310610c31575050610bf9935082010138610bec565b85548884018501529485019487945091830191610c1a565b9050610bf994506020925060ff191682840152151560051b82010138610bec565b60405190606082016001600160401b03811183821017610b0757604052565b604051906101a082016001600160401b03811183821017610b0757604052565b6040519061012082016001600160401b03811183821017610b0757604052565b60405190606082016001600160401b03811183821017610cf9575b60405260006040838281528260208201520152565b610d01610ad5565b610ce4565b6040519061014082016001600160401b03811183821017610d6b575b60405281610120600091828152826020820152826040820152610d43610cc9565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610d73610ad5565b610d22565b60405190610d8582610b14565b6000606083828152826020820152604051610d9f81610b4a565b83815260408201520152565b60405190610db882610aec565b81600081526020610dc7610d78565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610ded57565b610bf9610dcc565b60405190610e0282610aec565b81600081526020610dc7610cc9565b60021115610ded57565b6001600160a01b031690565b51906001600160a01b03821682036101c457565b801515036101c457565b5190610bf982610e3b565b9080601f830112156101c457604091825192610e6b84610aec565b839260c08301928184116101c457935b838510610e8a57505050505090565b6060858303126101c4578251606091610ea282610b2f565b86518252602091828801518382015285880151610ebe81610e3b565b86820152815201940193610e7b565b610240818303126101c457610220610f9091610ee7610c89565b93610ef182610e27565b8552610eff60208301610e27565b6020860152610f1060408301610e27565b604086015260608201516060860152610f2b60808301610e27565b608086015260a082015160a0860152610f4660c08301610e45565b60c086015260e082015160e086015261010080830151908601526101208083015190860152610f7a61014091828401610e50565b9085015261020081015161016085015201610e45565b61018082015290565b15610fa057565b60405163100960cb60e01b815260226004820152602490fd5b15610fc057565b60405163100960cb60e01b815260236004820152602490fd5b15610fe057565b602460405163100960cb60e01b8152816004820152fd5b15610ffe57565b60405163100960cb60e01b815260256004820152602490fd5b1561101e57565b60405163100960cb60e01b815260266004820152602490fd5b1561103e57565b60405163100960cb60e01b815260276004820152602490fd5b1561105e57565b60405163100960cb60e01b815260116004820152602490fd5b1561107e57565b60405163100960cb60e01b815260126004820152602490fd5b1561109e57565b60405163100960cb60e01b815260136004820152602490fd5b156110be57565b60405163100960cb60e01b815260146004820152602490fd5b156110de57565b60405163100960cb60e01b815260156004820152602490fd5b156110fe57565b60405163100960cb60e01b815260166004820152602490fd5b1561111e57565b60405163100960cb60e01b8152600a6004820152602490fd5b1561113e57565b60405163100960cb60e01b815260096004820152602490fd5b1561115e57565b60405163100960cb60e01b815260176004820152602490fd5b1561117e57565b60405163100960cb60e01b815260186004820152602490fd5b1561119e57565b60405163100960cb60e01b815260196004820152602490fd5b156111be57565b60405163100960cb60e01b8152601a6004820152602490fd5b156111de57565b60405163100960cb60e01b815260206004820152602490fd5b156111fe57565b60405163100960cb60e01b815260216004820152602490fd5b1561121e57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561123e57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561125e57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561127e57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561129e57565b60405163100960cb60e01b8152601c6004820152602490fd5b156112be57565b60405163100960cb60e01b815260286004820152602490fd5b156112de57565b60405163100960cb60e01b815260296004820152602490fd5b156112fe57565b60405163100960cb60e01b8152602a6004820152602490fd5b1561131e57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561133e57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561135e57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561137e57565b60405163100960cb60e01b8152602c6004820152602490fd5b91908260809103126101c4576040516113af81610b14565b60608082946113bd81610e27565b845260208101516020850152604081015160408501520151910152565b906102a0828203126101c4576114b26102806113f4610c89565b936113fe81610e27565b855261140c60208201610e27565b602086015261141d60408201610e27565b604086015261142f8460608301611397565b606086015260e081015160808601526101008082015160a087015261012094611459868401610e45565b60c088015261149e61014091611470838601610e27565b60e08a015261016093611484858701610e45565b908a01526101809788860151908a01526101a08501610e50565b908701526102608201519086015201610e45565b9082015290565b604051610100810191906001600160401b0383118184101761151a575b8260405280926114e581610b4a565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610dc7610cc9565b611522610ad5565b6114d6565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015611584575b60408501526020810151151582850152604081015151608085015201511515910152565b61158c610dcc565b611560565b51600381101561159e5790565b6115a6610dcc565b90565b6040908151916115b883610aec565b8260005b8281106115c857505050565b6020906115d3610cc9565b81840152016115bc565b604051906115ea82610b65565b816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015261163b6115a9565b6101608201520152565b6001600160a01b039091169052565b9060028110156116655760051b0190565b634e487b7160e01b600052603260045260246000fd5b906116846114b9565b61169b61169661022b60045460ff1690565b611157565b6040927f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f9618451806116cd843383611534565b0390a16116de600560005414611177565b6116e6610bbf565b926116fb602094858082518301019101610ecd565b9261171183518015908115611af4575b50611197565b8460e0850193611723855143106111b7565b0161172e8151611591565b61173781610de3565b6117e2575050610bf9946117da61032a926117523415611277565b6000878488019261177461176f6117698651610e1b565b33611b4e565b611297565b8551600081527f9cd0b6b1fce0adaaca068d1d3bc5a53784d0da5eb5352b6b6da42690937d04c19080602081015b0390a1015261067e6117b26115dd565b976117c66117c08951610e1b565b8a611645565b6117d281890151610e1b565b908901611645565b908501611645565b60016117f5829896979495939851611591565b6117fe81610de3565b03611a5d578490510151865261182661181f61181a8751610e1b565b610e1b565b3314611217565b855151956101009161183d83880198895190611b17565b948483019580875260609182808b01928351109b6118608b88019d8e9015159052565b8c5115611a52576118748a51855190611b39565b828801525b8651518288015161188991611b39565b608088019081529961189b3415611237565b8b8d019d8e516118aa90610e1b565b8c516118b69133611bb9565b6118bf90611257565b5115611a45575184516118d191611b39565b60a08801525b5186515160a08801516118e991611b39565b6118f291611b17565b60c08701818152845160e090980180519290981115909152958651898251015283518b8251015280518b516119288192826109ed565b037f4a8c6e26084b08209f9a68c3bda4289e0bd3cc42be32d50775107dae551820d791a1519101526119586115dd565b99895161196490610e1b565b61196e908c611645565b868a015161197b90610e1b565b611987908c8901611645565b5161199190610e1b565b61199d908b8a01611645565b519089015260808701516119b090610e1b565b6119bd9060808a01611645565b60a0878101519089015260c08701511515151560c08901525160e08801525190860152610120438187015284015161014090818701528401519281840151928351905101928183820151910151151592611a15610c6a565b94855284015290151590820152611a2b91611d1b565b9061016091828401520151610180820152610bf990612a77565b50600060a08801526118d7565b600082880152611879565b600291939295949650611a709051611591565b611a7981610de3565b14611a86575b5050505050565b611aea946117da61032a92611a9b34156111d7565b6000608084880192611ab8611ab36117698651610e1b565b6111f7565b8551600081527fff4193a372eb9cb8ca16decfe1aeb590cc22ee0d50230b97f50814efa00db0319080602081016117a2565b3880808080611a7f565b9050600154143861170b565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611b2c575b82106101c457565b611b34611b00565b611b24565b908103908111611b465790565b6115a6611b00565b60006115a6928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152611b9281610b81565b5193165af1611ba9611ba2611bfc565b8092611c5e565b5060208082518301019101611c49565b6000916115a69383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611b9281610b81565b3d15611c44573d906001600160401b038211611c37575b60405191611c2b601f8201601f191660200184610b9c565b82523d6000602084013e565b611c3f610ad5565b611c13565b606090565b908160209103126101c457516115a681610e3b565b15611c665790565b805115611c7557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15611c965790565b805115611ca557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611cc86115a9565b9260005b60028110611cda5750508252565b80611ce760019284611654565b51611cf28288611654565b52611cfd8187611654565b506000198114611d0e575b01611ccc565b611d16611b00565b611d08565b9190611d256115a9565b9260005b60028110611d3a5750506020830152565b80611d4760019284611654565b51611d528288611654565b52611d5d8187611654565b506000198114611d6e575b01611d29565b611d76611b00565b611d68565b9190611d856115a9565b9260005b60028110611d9a5750506020830152565b80611da760019284611654565b51611db28288611654565b52611dbd8187611654565b506000198114611dce575b01611d89565b611dd6611b00565b611dc8565b9190611de56115a9565b9260005b60028110611df75750508252565b80611e0460019284611654565b51611e0f8288611654565b52611e1a8187611654565b506000198114611e2b575b01611de9565b611e33611b00565b611e25565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611e7e575b8285015260208101511515606085015201511515910152565b611e86610dcc565b611e65565b51600281101561159e5790565b60405190611ea582610b14565b60006060838281528260208201528260408201520152565b60405190611eca82610b65565b81610180600091828152826020820152826040820152611ee8611e98565b60608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015261163b6115a9565b611f9a90611f3d611f3861022b60045460ff1690565b6112b7565b60407f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a4347815180611f6e853383611e38565b0390a1611f7f6007600054146112d7565b611f87610bbf565b60209381858080945183010191016113da565b92611fb081518015908115612269575b506112f7565b01611fbb8151611e8b565b611fc481610e11565b6120e757506120639061205b610bf995611fde3415611357565b60008380870192611ffa611ff56117698651610e1b565b611377565b8151600081527f9f2e5d9e640fcff90513effa1d0df75d762101d4a647b1ec274e0e5adff02e5590602090a1015261067e612033611ebd565b966120476120418851610e1b565b89611645565b61205381880151610e1b565b908801611645565b908401611645565b606081015160608301526080810151608083015260a081015160a0830152600060c08301526120a161209860e0830151610e1b565b60e08401611645565b6120bb6101006120b381840151151590565b151590840152565b6101204381840152810151610140908184015281015190610160918284015201516101808201526125df565b6120f360019151611e8b565b6120fc81610e11565b14612108575b50505050565b6122609361224a9161211a3415611317565b6122458185019561217d60a06121308951610e1b565b9561214a61214560808b019889519033611bb9565b611337565b8551600181527f569419bc0b10a3f4a89348bee4ee11851725cdedd3372f020ab179c77e84e6c190602090a10160019052565b6121b86121b061218b611ebd565b986121996106788a51610e1b565b61067e6121a8858b0151610e1b565b858c01611645565b848901611645565b606086015160608801528351608088015260a086015160a08801526121ec6121e360c0880151151590565b151560c0890152565b6121f93360e08901611645565b6001610100880152610120438189015286015161014090818901528601519281840151948551905101948183820151910151151592612236610c6a565b96875286015284019015159052565b611d1b565b90610160918284015201516101808201526125df565b38808080612102565b90506001541438611faa565b506040513d6000823e3d90fd5b81811061228d575050565b60008155600101612282565b6122a4600254610a9b565b806122ac5750565b601f81116001146122bf57506000600255565b600260005261230490601f0160051c600080516020612db1833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612282565b6000602081208160025555565b6040519061231e82610b65565b8161018060009182815282602082015282604082015261233c611e98565b60608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261236f6115a9565b610140820152826101608201520152565b6000915b6002831061239157505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612384565b610bf9909291926102806102a08201946123db838251611527565b6123ed60208201516020850190611527565b6123ff60408201516040850190611527565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c081015161245d610120918287019015159052565b6124a560e0830151936124766101409586890190611527565b8301519161248b610160938489019015159052565b8301519361018094858801528301516101a0870190612380565b81015161026085015201511515910152565b90601f82116124c4575050565b610bf99160026000526020600020906020601f840160051c830193106124f2575b601f0160051c0190612282565b90915081906124e5565b80519091906001600160401b0381116125d2575b6125248161251f600254610a9b565b6124b7565b602080601f83116001146125605750819293600092612555575b50508160011b916000199060031b1c191617600255565b01519050388061253e565b6002600052601f19831694909190600080516020612db1833981519152926000905b8782106125ba5750508360019596106125a1575b505050811b01600255565b015160001960f88460031b161c19169055388080612596565b80600185968294968601518155019501930190612582565b6125da610ad5565b612510565b6101008181018051151580156128dc5760005b156126fe5750506126f96126eb916126c9610bf9946000612611612311565b9361262561261f8451610e1b565b86611645565b61263e6126356020850151610e1b565b60208701611645565b61265761264e6040850151610e1b565b60408701611645565b606083015160608601526080830151608086015260a083015160a086015261268260c0860160019052565b61269b61269260e0850151610e1b565b60e08701611645565b8401526101208082015190840152610160808201516101408501526101808092015190840152820160019052565b6126d36007600055565b6126dc43600155565b604051928391602083016123c0565b03601f198101835282610b9c565b6124fc565b909190156128515791610bf99261283d604083019361271d8551610e1b565b906127288551610e1b565b93612751610160958688019461273f865160200190565b5151916001600160a01b0316906128e8565b61278f61278661275f6115dd565b9861276d6106788a51610e1b565b61067e61277d60208b0151610e1b565b60208c01611645565b60408901611645565b60a086015160608801526127b26127a960e0880151610e1b565b60808901611645565b6101206127d56127cc82890194855160a08c015251151590565b151560c08a0152565b610140926000848901936127f38551604060608d0151015190611b17565b60e08c01528a01525190880152519086015251602081015190612838604060208401519301511515612823610c6a565b93600085526020850152604084019015159052565b611d7b565b908301526101808091015190820152612a77565b5050600080808361288d612869602084970151610e1b565b6128738351610e1b565b6101608401515151916001600160a01b03909116906128e8565b61018061289d61181a8351610e1b565b910151908282156128d3575bf1156128c6575b600080556128be6000600155565b610bf9612299565b6128ce612275565b6128b0565b506108fc6128a9565b60c084015115156125f2565b6000919061293d93838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261292681610b14565b5193165af1611ba9612936611bfc565b8092611c8e565b156101c457565b6040519061295182610aec565b60006020838281520152565b6040519061296a82610b65565b816101806000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261236f6115a9565b610bf9909291926102206101806102408301956129d2848251611527565b6129e460208201516020860190611527565b6129f660408201516040860190611527565b60608101516060850152612a1260808201516080860190611527565b60a081015160a0850152612a2f60c082015160c086019015159052565b60e081015160e085015261010080820151908501526101208082015190850152612a626101408083015190860190612380565b61016081015161020085015201511515910152565b612a7f612944565b610100808301805160608501805191909111845293929160e0840191825192610140938487015110600090600014612cbf5750845115155b15612bc6576126f994610bf99794612ba49484612b9c94612ae860206126eb9c98518b511115960195869015159052565b612af061295d565b98612afe6106788951610e1b565b612b0e61277d60208a0151610e1b565b612b27612b1e60408a0151610e1b565b60408c01611645565b5160608a0152612b46612b3d6080890151610e1b565b60808b01611645565b60a087015160a08a0152612b69612b6060c0890151151590565b151560c08b0152565b5160e089015251908701526101208085015190870152610160908185015190870152610180809401519086015251151590565b151590830152565b612bae6005600055565b612bb743600155565b604051928391602083016129b4565b5050505060008093508261288d829493612be4602085960151610e1b565b90612bef8151151590565b8514612cb057612c026080850151610e1b565b61016085018051515190936001600160a01b0392612c249291908416906128e8565b612c3b612c346040870151610e1b565b9251151590565b8614612c9757612c8d612c87612c518751610e1b565b945b51805190612c82604060208401519301511515612c6e610c6a565b938c85526020850152604084019015159052565b611ddb565b60200190565b51519216906128e8565b612c8d612c87612caa6080880151610e1b565b94612c53565b612cba8451610e1b565b612c02565b612ab7565b60209060631901126101c45760405190612cdd82610b4a565b6064358252565b91908260209103126101c457604051612cfc81610b4a565b91358252565b6001600160a01b0390911681529051602082015260400190565b90610220828203126101c457610200612d33610ca9565b92612d3d81610e27565b8452612d4b60208201610e27565b6020850152612d5c60408201610e27565b604085015260608101516060850152612d788360808301611397565b6080850152612d97610100938483015160a08701526101208301610e50565b60c08501526101e081015160e08501520151908201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 13968,
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
