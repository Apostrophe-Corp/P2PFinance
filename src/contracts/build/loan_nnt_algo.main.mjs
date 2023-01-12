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
      const [v766, v767, v768, v769, v774, v776, v777] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = svs;
      return (await ((async () => {
        
        
        return v982;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v766, v767, v768, v769, v774, v776, v777] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = svs;
      return (await ((async () => {
        
        
        return v790;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v766, v767, v768, v769, v774, v776, v777] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = svs;
      return (await ((async () => {
        
        
        return v956;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = svs;
      return (await ((async () => {
        
        
        return v818;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v766, v767, v768, v769, v774, v776, v777] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = svs;
      return (await ((async () => {
        
        
        return v1012;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = svs;
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
  const ctc10 = stdlib.T_Data({
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc9,
    Lender_claim0_270: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v744 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v745 = [v744];
  const v751 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_algo.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v752 = v751.address;
  const v753 = v751.amount;
  const v754 = v751.collateral;
  const v755 = v751.maturation;
  const v756 = v751.principal;
  const v757 = v751.tokLoan;
  const v764 = stdlib.lt(v756, v753);
  stdlib.assert(v764, {
    at: './src/contracts/loan_nnt_algo.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v765 = {
    address: v752,
    amount: v753,
    maturation: v755,
    principal: v756
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v757, v754, v765],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v767, v768, v769], secs: v771, time: v770, didSend: v43, from: v766 } = txn1;
      
      const v772 = v745[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v773 = stdlib.Array_set(v772, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v774 = stdlib.Array_set(v745, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v773);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v767
        });
      ;
      const v776 = v769.principal;
      const v777 = v769.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v767, v768, v769], secs: v771, time: v770, didSend: v43, from: v766 } = txn1;
  const v772 = v745[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v773 = stdlib.Array_set(v772, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v774 = stdlib.Array_set(v745, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v773);
  ;
  ;
  const v776 = v769.principal;
  const v777 = v769.amount;
  const v778 = stdlib.lt(v776, v777);
  stdlib.assert(v778, {
    at: './src/contracts/loan_nnt_algo.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v766, v767, v768, v769, v774, v776, v777],
    evt_cnt: 0,
    funcNum: 1,
    lct: v770,
    onlyIf: true,
    out_tys: [],
    pay: [v768, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v781, time: v780, didSend: v53, from: v779 } = txn2;
      
      sim_r.txns.push({
        amt: v768,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v787 = true;
      const v788 = v766;
      const v789 = false;
      const v790 = v780;
      const v796 = v774;
      const v797 = v768;
      
      if (await (async () => {
        const v812 = v789 ? false : v787;
        
        return v812;})()) {
        const v817 = v789 ? false : v787;
        const v818 = v817 ? true : v789;
        sim_r.isHalt = false;
        }
      else {
        const v955 = v789 ? false : v787;
        const v956 = v955 ? true : v789;
        if (v789) {
          const v968 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v969 = v968[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v975 = stdlib.sub(v969, v969);
          const v977 = stdlib.Array_set(v968, '0', v975);
          const v978 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v977);
          sim_r.txns.push({
            kind: 'from',
            to: v766,
            tok: v767
            });
          const v980 = v769.maturation;
          const v981 = stdlib.safeAdd(v790, v980);
          const v982 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v983 = v790;
          const v989 = v978;
          const v990 = v797;
          
          if (await (async () => {
            const v1007 = stdlib.lt(v983, v981);
            const v1009 = stdlib.lt(v982, v777);
            const v1010 = v1007 ? v1009 : false;
            
            return v1010;})()) {
            const v1012 = stdlib.ge(v982, v777);
            sim_r.isHalt = false;
            }
          else {
            const v1384 = stdlib.lt(v982, v777);
            const v1385 = v1384 ? v788 : v766;
            sim_r.txns.push({
              kind: 'from',
              to: v1385,
              tok: undefined /* Nothing */
              });
            const v1390 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v1391 = v1390[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v1394 = v1384 ? v766 : v788;
            sim_r.txns.push({
              kind: 'from',
              to: v1394,
              tok: v767
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v767
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
            to: v766,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v767
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
  const {data: [], secs: v781, time: v780, didSend: v53, from: v779 } = txn2;
  ;
  const v784 = stdlib.addressEq(v766, v779);
  stdlib.assert(v784, {
    at: './src/contracts/loan_nnt_algo.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v780), {
    at: './src/contracts/loan_nnt_algo.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v787 = true;
  let v788 = v766;
  let v789 = false;
  let v790 = v780;
  let v796 = v774;
  let v797 = v768;
  
  let txn3 = txn2;
  while (await (async () => {
    const v812 = v789 ? false : v787;
    
    return v812;})()) {
    const v817 = v789 ? false : v787;
    const v818 = v817 ? true : v789;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v855], secs: v857, time: v856, didSend: v196, from: v854 } = txn4;
    switch (v855[0]) {
      case 'Borrower_close0_93': {
        const v858 = v855[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v891 = null;
        await txn4.getOutput('Borrower_close', 'v891', ctc5, v891);
        const cv787 = false;
        const cv788 = v788;
        const cv789 = v789;
        const cv790 = v856;
        const cv796 = v796;
        const cv797 = v797;
        
        v787 = cv787;
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v906 = v855[1];
        undefined /* setApiDetails */;
        ;
        const v932 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v933 = v932[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v934 = stdlib.add(v933, v776);
        const v936 = stdlib.Array_set(v932, '0', v934);
        const v937 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v936);
        ;
        const v947 = true;
        await txn4.getOutput('Lender_lend', 'v947', ctc8, v947);
        const cv787 = v787;
        const cv788 = v854;
        const cv789 = true;
        const cv790 = v856;
        const cv796 = v937;
        const cv797 = v797;
        
        v787 = cv787;
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v955 = v789 ? false : v787;
  const v956 = v955 ? true : v789;
  if (v789) {
    const v968 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v969 = v968[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v975 = stdlib.sub(v969, v969);
    const v977 = stdlib.Array_set(v968, '0', v975);
    const v978 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v977);
    ;
    const v980 = v769.maturation;
    const v981 = stdlib.safeAdd(v790, v980);
    let v982 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
    let v983 = v790;
    let v989 = v978;
    let v990 = v797;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1007 = stdlib.lt(v983, v981);
      const v1009 = stdlib.lt(v982, v777);
      const v1010 = v1007 ? v1009 : false;
      
      return v1010;})()) {
      const v1012 = stdlib.ge(v982, v777);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn5;
      switch (v1095[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1098 = v1095[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1149 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v1149', ctc5, v1149);
          const cv982 = v982;
          const cv983 = v1096;
          const cv989 = v989;
          const cv990 = v990;
          
          v982 = cv982;
          v983 = cv983;
          v989 = cv989;
          v990 = cv990;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_270': {
          const v1192 = v1095[1];
          undefined /* setApiDetails */;
          const v1202 = v1192[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
          const v1203 = stdlib.addressEq(v1094, v766);
          stdlib.assert(v1203, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v1206 = stdlib.le(v983, v981);
          stdlib.assert(v1206, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          const v1208 = stdlib.safeAdd(v1202, v982);
          const v1210 = stdlib.gt(v1208, v777);
          let v1211;
          if (v1210) {
            const v1214 = stdlib.safeSub(v1208, v777);
            v1211 = v1214;
            }
          else {
            v1211 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
            }
          const v1215 = stdlib.safeSub(v1202, v1211);
          ;
          const v1236 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1238 = stdlib.add(v1237, v1215);
          const v1240 = stdlib.Array_set(v1236, '0', v1238);
          const v1241 = stdlib.Array_set(v989, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1240);
          ;
          const v1254 = stdlib.le(v1096, v981);
          stdlib.assert(v1254, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:111:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:111:50:function exp)'],
            msg: 'Its past the deadline',
            who: 'B'
            });
          let v1259;
          if (v1210) {
            const v1262 = stdlib.safeSub(v1208, v777);
            v1259 = v1262;
            }
          else {
            v1259 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
            }
          const v1263 = stdlib.safeSub(v1202, v1259);
          const v1265 = stdlib.safeAdd(v982, v1263);
          const v1267 = stdlib.ge(v1265, v777);
          const v1269 = [v1267, v1265, v777];
          await txn5.getOutput('Borrower_repay', 'v1269', ctc11, v1269);
          const cv982 = v1265;
          const cv983 = v1096;
          const cv989 = v1241;
          const cv990 = v990;
          
          v982 = cv982;
          v983 = cv983;
          v989 = cv989;
          v990 = cv990;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_270': {
          const v1286 = v1095[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1374 = null;
          await txn5.getOutput('Lender_claim', 'v1374', ctc5, v1374);
          const cv982 = v982;
          const cv983 = v1096;
          const cv989 = v989;
          const cv990 = v990;
          
          v982 = cv982;
          v983 = cv983;
          v989 = cv989;
          v990 = cv990;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1384 = stdlib.lt(v982, v777);
    const v1385 = v1384 ? v788 : v766;
    ;
    const v1390 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
    const v1391 = v1390[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
    const v1394 = v1384 ? v766 : v788;
    ;
    return;
    }
  else {
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
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc7,
    Lender_claim0_270: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1015 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:118:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:118:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_claimRefund0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:118:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v1019 = ['Borrower_claimRefund0_270', v1015];
  
  const txn1 = await (ctc.sendrecv({
    args: [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012, v1019],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v767]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
      
      switch (v1095[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1098 = v1095[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1149 = null;
          const v1150 = await txn1.getOutput('Borrower_claimRefund', 'v1149', ctc9, v1149);
          
          const v2423 = v982;
          const v2424 = v1096;
          const v2425 = v989;
          const v2426 = v990;
          const v2427 = stdlib.lt(v1096, v981);
          const v2428 = stdlib.lt(v982, v777);
          const v2429 = v2427 ? v2428 : false;
          if (v2429) {
            const v2430 = stdlib.ge(v982, v777);
            sim_r.isHalt = false;
            }
          else {
            const v2433 = v2428 ? v788 : v766;
            sim_r.txns.push({
              kind: 'from',
              to: v2433,
              tok: undefined /* Nothing */
              });
            const v2434 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2435 = v2434[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2436 = v2428 ? v766 : v788;
            sim_r.txns.push({
              kind: 'from',
              to: v2436,
              tok: v767
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v767
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_270': {
          const v1192 = v1095[1];
          
          break;
          }
        case 'Lender_claim0_270': {
          const v1286 = v1095[1];
          
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
  const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
  switch (v1095[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1098 = v1095[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1149 = null;
      const v1150 = await txn1.getOutput('Borrower_claimRefund', 'v1149', ctc9, v1149);
      if (v582) {
        stdlib.protect(ctc9, await interact.out(v1098, v1150), {
          at: './src/contracts/loan_nnt_algo.rsh:118:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:118:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:118:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:119:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:118:58:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:118:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:118:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2423 = v982;
      const v2424 = v1096;
      const v2425 = v989;
      const v2426 = v990;
      const v2427 = stdlib.lt(v1096, v981);
      const v2428 = stdlib.lt(v982, v777);
      const v2429 = v2427 ? v2428 : false;
      if (v2429) {
        const v2430 = stdlib.ge(v982, v777);
        return;
        }
      else {
        const v2433 = v2428 ? v788 : v766;
        ;
        const v2434 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2435 = v2434[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2436 = v2428 ? v766 : v788;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_270': {
      const v1192 = v1095[1];
      return;
      break;
      }
    case 'Lender_claim0_270': {
      const v1286 = v1095[1];
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
  
  
  const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v821 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v825 = ['Borrower_close0_93', v821];
  
  const txn1 = await (ctc.sendrecv({
    args: [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818, v825],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:74:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:62:26:decimal', stdlib.UInt_max, '0'), v767]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v855], secs: v857, time: v856, didSend: v196, from: v854 } = txn1;
      
      switch (v855[0]) {
        case 'Borrower_close0_93': {
          const v858 = v855[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v891 = null;
          const v892 = await txn1.getOutput('Borrower_close', 'v891', ctc9, v891);
          
          const v2465 = false;
          const v2466 = v788;
          const v2467 = v789;
          const v2468 = v856;
          const v2469 = v796;
          const v2470 = v797;
          const v2471 = v789 ? false : false;
          if (v2471) {
            const v2473 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2475 = v789;
            if (v789) {
              const v2476 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2477 = v2476[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2478 = stdlib.sub(v2477, v2477);
              const v2479 = stdlib.Array_set(v2476, '0', v2478);
              const v2480 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2479);
              sim_r.txns.push({
                kind: 'from',
                to: v766,
                tok: v767
                });
              const v2481 = v769.maturation;
              const v2482 = stdlib.safeAdd(v856, v2481);
              const v2530 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
              const v2531 = v856;
              const v2532 = v2480;
              const v2533 = v797;
              const v2534 = stdlib.lt(v856, v2482);
              const v2535 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
              const v2536 = v2534 ? v2535 : false;
              if (v2536) {
                const v2537 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
                sim_r.isHalt = false;
                }
              else {
                const v2540 = v2535 ? v788 : v766;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2540,
                  tok: undefined /* Nothing */
                  });
                const v2541 = v2480[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v2542 = v2541[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v2543 = v2535 ? v766 : v788;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2543,
                  tok: v767
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v767
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
                to: v766,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v767
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
          const v906 = v855[1];
          
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
  const {data: [v855], secs: v857, time: v856, didSend: v196, from: v854 } = txn1;
  switch (v855[0]) {
    case 'Borrower_close0_93': {
      const v858 = v855[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v891 = null;
      const v892 = await txn1.getOutput('Borrower_close', 'v891', ctc9, v891);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v858, v892), {
          at: './src/contracts/loan_nnt_algo.rsh:74:22:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:75:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:74:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2465 = false;
      const v2466 = v788;
      const v2467 = v789;
      const v2468 = v856;
      const v2469 = v796;
      const v2470 = v797;
      const v2471 = v789 ? false : false;
      if (v2471) {
        const v2473 = true;
        return;
        }
      else {
        const v2475 = v789;
        if (v789) {
          const v2476 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2477 = v2476[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2478 = stdlib.sub(v2477, v2477);
          const v2479 = stdlib.Array_set(v2476, '0', v2478);
          const v2480 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2479);
          ;
          const v2481 = v769.maturation;
          const v2482 = stdlib.safeAdd(v856, v2481);
          const v2530 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2531 = v856;
          const v2532 = v2480;
          const v2533 = v797;
          const v2534 = stdlib.lt(v856, v2482);
          const v2535 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
          const v2536 = v2534 ? v2535 : false;
          if (v2536) {
            const v2537 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
            return;
            }
          else {
            const v2540 = v2535 ? v788 : v766;
            ;
            const v2541 = v2480[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2542 = v2541[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2543 = v2535 ? v766 : v788;
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
      const v906 = v855[1];
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
    Borrower_claimRefund0_270: ctc7,
    Borrower_repay0_270: ctc6,
    Lender_claim0_270: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1029 = ctc.selfAddress();
  const v1031 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v1032 = v1031[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1034 = stdlib.addressEq(v1029, v766);
  stdlib.assert(v1034, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v1037 = stdlib.le(v983, v981);
  stdlib.assert(v1037, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'Its past the deadline',
    who: 'Borrower_repay'
    });
  const v1039 = stdlib.safeAdd(v1032, v982);
  const v1041 = stdlib.gt(v1039, v777);
  const v1052 = ['Borrower_repay0_270', v1031];
  
  let v1072;
  if (v1041) {
    const v1075 = stdlib.safeSub(v1039, v777);
    v1072 = v1075;
    }
  else {
    v1072 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
    }
  const v1076 = stdlib.safeSub(v1032, v1072);
  
  const txn1 = await (ctc.sendrecv({
    args: [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012, v1052],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:110:42:decimal', stdlib.UInt_max, '0'), [[v1076, v767]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
      
      switch (v1095[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1098 = v1095[1];
          
          break;
          }
        case 'Borrower_repay0_270': {
          const v1192 = v1095[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1202 = v1192[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
          const v1208 = stdlib.safeAdd(v1202, v982);
          const v1210 = stdlib.gt(v1208, v777);
          let v1211;
          if (v1210) {
            const v1214 = stdlib.safeSub(v1208, v777);
            v1211 = v1214;
            }
          else {
            v1211 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
            }
          const v1215 = stdlib.safeSub(v1202, v1211);
          ;
          const v1236 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1238 = stdlib.add(v1237, v1215);
          const v1240 = stdlib.Array_set(v1236, '0', v1238);
          const v1241 = stdlib.Array_set(v989, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1240);
          sim_r.txns.push({
            amt: v1215,
            kind: 'to',
            tok: v767
            });
          let v1259;
          if (v1210) {
            const v1262 = stdlib.safeSub(v1208, v777);
            v1259 = v1262;
            }
          else {
            v1259 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
            }
          const v1263 = stdlib.safeSub(v1202, v1259);
          const v1265 = stdlib.safeAdd(v982, v1263);
          const v1267 = stdlib.ge(v1265, v777);
          const v1269 = [v1267, v1265, v777];
          const v1270 = await txn1.getOutput('Borrower_repay', 'v1269', ctc9, v1269);
          
          const v2637 = v1265;
          const v2638 = v1096;
          const v2639 = v1241;
          const v2640 = v990;
          const v2641 = stdlib.lt(v1096, v981);
          const v2642 = stdlib.lt(v1265, v777);
          const v2643 = v2641 ? v2642 : false;
          if (v2643) {
            sim_r.isHalt = false;
            }
          else {
            const v2647 = v2642 ? v788 : v766;
            sim_r.txns.push({
              kind: 'from',
              to: v2647,
              tok: undefined /* Nothing */
              });
            const v2648 = v1241[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2649 = v2648[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2650 = v2642 ? v766 : v788;
            sim_r.txns.push({
              kind: 'from',
              to: v2650,
              tok: v767
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v767
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_270': {
          const v1286 = v1095[1];
          
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
  const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
  switch (v1095[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1098 = v1095[1];
      return;
      break;
      }
    case 'Borrower_repay0_270': {
      const v1192 = v1095[1];
      undefined /* setApiDetails */;
      const v1202 = v1192[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v1203 = stdlib.addressEq(v1094, v766);
      stdlib.assert(v1203, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1206 = stdlib.le(v983, v981);
      stdlib.assert(v1206, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      const v1208 = stdlib.safeAdd(v1202, v982);
      const v1210 = stdlib.gt(v1208, v777);
      let v1211;
      if (v1210) {
        const v1214 = stdlib.safeSub(v1208, v777);
        v1211 = v1214;
        }
      else {
        v1211 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
        }
      const v1215 = stdlib.safeSub(v1202, v1211);
      ;
      const v1236 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1238 = stdlib.add(v1237, v1215);
      const v1240 = stdlib.Array_set(v1236, '0', v1238);
      const v1241 = stdlib.Array_set(v989, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1240);
      ;
      const v1254 = stdlib.le(v1096, v981);
      stdlib.assert(v1254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:111:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:111:50:function exp)'],
        msg: 'Its past the deadline',
        who: 'Borrower_repay'
        });
      let v1259;
      if (v1210) {
        const v1262 = stdlib.safeSub(v1208, v777);
        v1259 = v1262;
        }
      else {
        v1259 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:51:decimal', stdlib.UInt_max, '0');
        }
      const v1263 = stdlib.safeSub(v1202, v1259);
      const v1265 = stdlib.safeAdd(v982, v1263);
      const v1267 = stdlib.ge(v1265, v777);
      const v1269 = [v1267, v1265, v777];
      const v1270 = await txn1.getOutput('Borrower_repay', 'v1269', ctc9, v1269);
      if (v582) {
        stdlib.protect(ctc10, await interact.out(v1192, v1270), {
          at: './src/contracts/loan_nnt_algo.rsh:101:31:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:31:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:113:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:111:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:111:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:111:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2637 = v1265;
      const v2638 = v1096;
      const v2639 = v1241;
      const v2640 = v990;
      const v2641 = stdlib.lt(v1096, v981);
      const v2642 = stdlib.lt(v1265, v777);
      const v2643 = v2641 ? v2642 : false;
      if (v2643) {
        return;
        }
      else {
        const v2647 = v2642 ? v788 : v766;
        ;
        const v2648 = v1241[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2649 = v2648[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2650 = v2642 ? v766 : v788;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_270': {
      const v1286 = v1095[1];
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
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc7,
    Lender_claim0_270: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v1023 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:122:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:122:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runLender_claim0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:122:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v1027 = ['Lender_claim0_270', v1023];
  
  const txn1 = await (ctc.sendrecv({
    args: [v766, v767, v777, v788, v790, v956, v981, v982, v983, v989, v990, v1012, v1027],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:122:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v767]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
      
      switch (v1095[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1098 = v1095[1];
          
          break;
          }
        case 'Borrower_repay0_270': {
          const v1192 = v1095[1];
          
          break;
          }
        case 'Lender_claim0_270': {
          const v1286 = v1095[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1374 = null;
          const v1375 = await txn1.getOutput('Lender_claim', 'v1374', ctc9, v1374);
          
          const v2693 = v982;
          const v2694 = v1096;
          const v2695 = v989;
          const v2696 = v990;
          const v2697 = stdlib.lt(v1096, v981);
          const v2698 = stdlib.lt(v982, v777);
          const v2699 = v2697 ? v2698 : false;
          if (v2699) {
            const v2700 = stdlib.ge(v982, v777);
            sim_r.isHalt = false;
            }
          else {
            const v2703 = v2698 ? v788 : v766;
            sim_r.txns.push({
              kind: 'from',
              to: v2703,
              tok: undefined /* Nothing */
              });
            const v2704 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2705 = v2704[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2706 = v2698 ? v766 : v788;
            sim_r.txns.push({
              kind: 'from',
              to: v2706,
              tok: v767
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v767
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
  const {data: [v1095], secs: v1097, time: v1096, didSend: v582, from: v1094 } = txn1;
  switch (v1095[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1098 = v1095[1];
      return;
      break;
      }
    case 'Borrower_repay0_270': {
      const v1192 = v1095[1];
      return;
      break;
      }
    case 'Lender_claim0_270': {
      const v1286 = v1095[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1374 = null;
      const v1375 = await txn1.getOutput('Lender_claim', 'v1374', ctc9, v1374);
      if (v582) {
        stdlib.protect(ctc9, await interact.out(v1286, v1375), {
          at: './src/contracts/loan_nnt_algo.rsh:122:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:122:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:122:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:123:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:122:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:122:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:122:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2693 = v982;
      const v2694 = v1096;
      const v2695 = v989;
      const v2696 = v990;
      const v2697 = stdlib.lt(v1096, v981);
      const v2698 = stdlib.lt(v982, v777);
      const v2699 = v2697 ? v2698 : false;
      if (v2699) {
        const v2700 = stdlib.ge(v982, v777);
        return;
        }
      else {
        const v2703 = v2698 ? v788 : v766;
        ;
        const v2704 = v989[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2705 = v2704[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2706 = v2698 ? v766 : v788;
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
  
  
  const [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v829 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:39:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:64:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v833 = ['Lender_lend0_93', v829];
  
  const txn1 = await (ctc.sendrecv({
    args: [v766, v767, v769, v776, v777, v787, v788, v789, v796, v797, v818, v833],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:66:34:decimal', stdlib.UInt_max, '0'), [[v776, v767]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v855], secs: v857, time: v856, didSend: v196, from: v854 } = txn1;
      
      switch (v855[0]) {
        case 'Borrower_close0_93': {
          const v858 = v855[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v906 = v855[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v932 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v933 = v932[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v934 = stdlib.add(v933, v776);
          const v936 = stdlib.Array_set(v932, '0', v934);
          const v937 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v936);
          sim_r.txns.push({
            amt: v776,
            kind: 'to',
            tok: v767
            });
          const v947 = true;
          const v948 = await txn1.getOutput('Lender_lend', 'v947', ctc4, v947);
          
          const v2787 = v854;
          const v2789 = v856;
          const v2796 = true;
          const v2797 = v937[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2798 = v2797[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2799 = stdlib.sub(v2798, v2798);
          const v2800 = stdlib.Array_set(v2797, '0', v2799);
          const v2801 = stdlib.Array_set(v937, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2800);
          sim_r.txns.push({
            kind: 'from',
            to: v766,
            tok: v767
            });
          const v2802 = v769.maturation;
          const v2803 = stdlib.safeAdd(v856, v2802);
          const v2851 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2852 = v856;
          const v2853 = v2801;
          const v2854 = v797;
          const v2855 = stdlib.lt(v856, v2803);
          const v2856 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
          const v2857 = v2855 ? v2856 : false;
          if (v2857) {
            const v2858 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
            sim_r.isHalt = false;
            }
          else {
            const v2861 = v2856 ? v854 : v766;
            sim_r.txns.push({
              kind: 'from',
              to: v2861,
              tok: undefined /* Nothing */
              });
            const v2862 = v2801[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2863 = v2862[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2864 = v2856 ? v766 : v854;
            sim_r.txns.push({
              kind: 'from',
              to: v2864,
              tok: v767
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v767
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
  const {data: [v855], secs: v857, time: v856, didSend: v196, from: v854 } = txn1;
  switch (v855[0]) {
    case 'Borrower_close0_93': {
      const v858 = v855[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v906 = v855[1];
      undefined /* setApiDetails */;
      ;
      const v932 = v796[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v933 = v932[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v934 = stdlib.add(v933, v776);
      const v936 = stdlib.Array_set(v932, '0', v934);
      const v937 = stdlib.Array_set(v796, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v936);
      ;
      const v947 = true;
      const v948 = await txn1.getOutput('Lender_lend', 'v947', ctc4, v947);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v906, v948), {
          at: './src/contracts/loan_nnt_algo.rsh:64:23:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:23:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:68:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:67:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2787 = v854;
      const v2789 = v856;
      const v2796 = true;
      const v2797 = v937[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2798 = v2797[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2799 = stdlib.sub(v2798, v2798);
      const v2800 = stdlib.Array_set(v2797, '0', v2799);
      const v2801 = stdlib.Array_set(v937, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2800);
      ;
      const v2802 = v769.maturation;
      const v2803 = stdlib.safeAdd(v856, v2802);
      const v2851 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
      const v2852 = v856;
      const v2853 = v2801;
      const v2854 = v797;
      const v2855 = stdlib.lt(v856, v2803);
      const v2856 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
      const v2857 = v2855 ? v2856 : false;
      if (v2857) {
        const v2858 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v777);
        return;
        }
      else {
        const v2861 = v2856 ? v854 : v766;
        ;
        const v2862 = v2801[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2863 = v2862[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2864 = v2856 ? v766 : v854;
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
  appApproval: `ByASAAEFBAgHICjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCAqCNBiYDAQEBAAAiNQAxGEEGkCpkSSJbNQEhBFs1AjYaABdJQQESIjUEIzUGSSEIDEAAeUkhCQxAAEBJIQoMQAApSSELDEAAFCELEkQqNf+AAQI0/1AhBK9QQgHDIQoSRCo1/yk0/1BCAOohCRJENhoBNf8oNP9QQgGlSSEMDEAAEiEMEkQqNf8pNP9QIQSvUEIBjCEIEkQ0ASQSRClkKGRQSTUDV2EINQdCBe5JIQ0MQAAuSSEODEAADiEOEkQqNf8oNP9QQgCMIQ0SRDQBJBJEKWQoZFBJNQNXigE1B0IFuUkhDwxAABkhDxJENAEkEkQpZChkUEk1A1dQCDUHQgWZgY/GxSoSRDQBSSEFDEAAFCEFEkQpZChkUEk1A1erATUHQgV1JBJEKWQoZFBJNQNXWAE1B0IFYjYaAhc1BDYaAzYaARdJJQxAAl9JJAxAAM0kEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSVcAIDX/IQZbNf5XKDg1/YFgWzX8gWhbNftXkhE1+oGjAVs1+Uk1BTX4gASxmSJFNPhQsDT4IlVAAC2ACAAAAAAAAAN7sCo1BzT/NP40/TT8NPsiNANXcSA0A1eRARcyBjT6NPlCAuI0+lcAETX3NPw0/ogE8oAJAAAAAAAAA7MBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPdJIls0/AgWXABcADT5QgKcSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKVwAgNf8hBls1/iEHWzX9VzAgNfyBUFs1+1dYARc1+oFZWzX5gWFbNfhXcRE194GCAVs19kk1BTX1gATVjh2rNPVQsDT1IlVJIwxAAPlJIRAMQAArIRASRIAIAAAAAAAABV6wKjUHNP80/jT9NPw0+zT6NPk0+DIGNPc09kIC0Ug09VcBCDX0NPQXNfMxADT/EkQ0A4FpWzT5DkQ08zT4CEk18jT9DUk18UEACjTyNP0JNfBCAAMiNfA08zTwCTXvNPdXABE17jTvNP6IA84yBjT5DkQ08UEACjTyNP0JNe1CAAMiNe00+DTzNO0JCDXsgAgAAAAAAAAE9TTsNP0PFlEHCDTsFlA0/RZQULA07DT9DxZRBwg07BZQNP0WUDUHNP80/jT9NPw0+zT6NPk07DIGNPc07kkiWzTvCBZcAFwANPZCAgpIgAgAAAAAAAAEfbAqNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2QgHiSSMMQABfIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IQdbNf6ABJqLkXSwNP6IAt40/zEAEkQ0/zQDIQZbNANXMDg0A4F5WzQDgYEBWyM0/yIyBjQDV2gRNP5CAKtIIRGIAqsiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBK9cAFwANfshEYgCXrEisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBls1+TT6NPkMRDEANP8WUDT+FlA0/VA0+1A0+hZQNPkWUClLAVcAf2coSwFXfwpnSCM1ATIGNQJCAbQ1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwUNPoQQQA7NPU09hZQNPdQNPgWUDT5FlAoUDT7UClQNP5QNP8WUChQKUsBVwB/ZyhLAVd/LWdIIQU1ATIGNQJCAVo0/EEASTT+VwARSTX0Ils187EisgE087ISJbIQNPWyFDT2shGzNPU09jT5NPs0/TT8NP009yEHWwgiNP00/jT0NPNJCRZcAFwANP9CACqxIrIBNP+yCCOyEDT1sgezsSKyASKyEiWyEDIJshUyCrIUNPayEbNCAMc1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPw09ww19DT9NPsMNPQQQQBSNPw09w818zT1NPYWUDT3FlA0+FA0+RZQNPoWUQcIUDT7FlA0/BZQNP0WUDT+UDT/FlA08xZRBwhQKUsBVwB/ZyhLAVd/DGdIJDUBMgY1AkIAaLEisgE0/7III7IQNPU0+DT0TbIHs7EisgE0/lcAESJbshIlshA0+DT1NPRNshQ09rIRs7EisgEishIlshAyCbIVMgqyFDT2shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2897","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1149","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1269","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1374","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v891","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v947","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2883","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2899","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2911","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2925","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002fae38819003601f8101601f191683016001600160401b0381118482101762000521578392829160405283398101039060e0821262000625576080604051926200004d846200062a565b825184526200005f6020840162000662565b602085015260408301516040850152605f190112620006255760c06040519162000089836200062a565b620000976060820162000662565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005215760009161012091604052828152826020820152826040820152620000fa62000677565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f8262000646565b6200013962000677565b8252602082016200014962000698565b81526200015562000698565b604084015260ff600454166200060c577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001c660608601516080830190620006df565ba181518015908115620005ff575b5015620005e657600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002138362000646565b60008352602083015260408201526200022b62000698565b9160005b600181106200059657505081526040830152346200057d57606081015160206060820151910151111562000564576040519160e08301916001600160401b03831184841017620005215760406060926020948252600086526000858701526000828701528151620002a0816200062a565b6000815260008682015260008382015260008582015284870152620002c462000698565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200035960608201516080840190620006df565b6080810151600061010084015b60018210620005375760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005215760405280516001600160401b0381116200052157600254600181811c9116801562000516575b60208210146200050057601f811162000496575b50602091601f82116001146200042c5791819260009262000420575b50508160011b916000199060031b1c1916176002555b60405161287a9081620007348239f35b015190508280620003fa565b601f19821692600260005260206000209160005b8581106200047d5750836001951062000463575b505050811b0160025562000410565b015160001960f88460031b161c1916905582808062000454565b9192602060018192868501518155019401920162000440565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004f5575b601f0160051c01905b818110620004e85750620003de565b60008155600101620004d9565b9091508190620004d0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ca565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000366565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005a281836200070b565b51620005af82866200070b565b52620005bc81856200070b565b506000198114620005d0576001016200022f565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d4565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200052157604052565b606081019081106001600160401b038211176200052157604052565b51906001600160a01b03821682036200062557565b60405190620006868262000646565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000521576040528260005b828110620006c857505050565b8290620006d462000677565b8184015201620006bb565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200071d5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca6107c8565b61000e565b506100ca61075a565b506100ca6106e5565b506100ca61063b565b506100ca6105ed565b506100ca61056e565b506100ca61054f565b506100ca610510565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610abf565b6005600054036101975760e0602091608061018861017a610978565b858082518301019101610c86565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610abf565b604051906101f6826108a5565b600435825260803660231901126101b05760405191610214836108cd565b6024359260038410156101b05761026193815260443561023381610bf4565b602082015261024136612773565b604082015260843561025281610bf4565b60608201526020820152611333565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610abf565b6005600054036102a75760c060209160e061018861017a610978565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610abf565b61030d816102e5610bae565b85810190600082515251151586825101526102fe610bae565b90600082525186820152611b6d565b01511515604051908152f35b50346101b05760003660031901126101b057610333610abf565b60056000540361037a5761012061026d91610160610361610352610978565b60208082518301019101610c86565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5060203660031901126101b0576103a8610abf565b506102616103b536612793565b6103d06103cb6103c760045460ff1690565b1590565b610d40565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1610410600160005414610d60565b61043f61042d61041e610978565b602080825183010191016127b3565b91518015908115610504575b50610d80565b6040810161044f81513414610da0565b61046b3360018060a01b036104648551610bd4565b1614610dc0565b6080610475611b16565b926104896104838251610bd4565b856112fd565b6104a26104996020830151610bd4565b602086016112fd565b6060810151604085015260a0810151606085015260c0810151828501526104cc60a0850160019052565b6104e26104d98251610bd4565b60c086016112fd565b600060e085015243610100850152015161012083015251610140820152612187565b90506001541438610439565b5060003660031901126101b057602060a0610529610abf565b61030d81610535610bae565b8581019060018251525115156040825101526102fe610bae565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b057610583610abf565b60405190610590826108a5565b600435825260603660231901126101b057604051916105ae836108e8565b6024359260028410156101b0576102619381526044356105cd81610bf4565b60208201526064356105de81610bf4565b60408201526020820152611b6d565b5060003660031901126101b05760206080610606610abf565b61030d81610612610b64565b85810190600282515251151560608251015261062c610b64565b90600082525186820152611333565b50346101b05760003660031901126101b05761026d61069861010061065e610abf565b60005460078110156106aa5760056106769114610e00565b61068961069060a0610689610352610978565b0151151590565b151582840152565b60405190151581529081906020820190565b60076106b69114610de0565b6106e06101406106d66106c7610978565b602080825183010191016110c1565b0151151582840152565b610689565b50346101b057600080600319360112610757578054610702610978565b906040519283918252602090604082840152835191826040850152815b83811061074057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161071f565b80fd5b5060003660031901126101b057602080610772610abf565b61030d8161077e610b64565b8481019060008251525115158582510152610797610b64565b90600082525185820152611333565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b0576107dd610a82565b5061026d60606107eb610abf565b610846816040516107fb816108a5565b60405161080781610903565b600081528152602081019061081a610b31565b8252600435815152600182515251604082510152610836610b64565b9060008252516020820152611333565b0151604051918291826107a6565b90600182811c92168015610884575b602083101461086e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610863565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108c057604052565b6108c861088e565b604052565b608081019081106001600160401b038211176108c057604052565b606081019081106001600160401b038211176108c057604052565b602081019081106001600160401b038211176108c057604052565b61016081019081106001600160401b038211176108c057604052565b60a081019081106001600160401b038211176108c057604052565b601f909101601f19168101906001600160401b038211908210176108c057604052565b604051906000826002549161098c83610854565b808352600193808516908115610a0257506001146109b4575b506109b292500383610955565b565b6002600090815260008051602061284e83398151915294602093509091905b8183106109ea5750506109b29350820101386109a5565b855488840185015294850194879450918301916109d3565b90506109b294506020925060ff191682840152151560051b820101386109a5565b6040519061018082016001600160401b038111838210176108c057604052565b6040519061016082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b03811183821017610ab2575b60405260006040838281528260208201520152565b610aba61088e565b610a9d565b6040519061014082016001600160401b03811183821017610b24575b60405281610120600091828152826020820152826040820152610afc610a82565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b2c61088e565b610adb565b60405190610b3e826108cd565b6000606083828152826020820152604051610b5881610903565b83815260408201520152565b60405190610b71826108a5565b81600081526020610b80610b31565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610ba657565b6109b2610b85565b60405190610bbb826108a5565b81600081526020610b80610a82565b60021115610ba657565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109b282610bf4565b9080601f830112156101b057604091825192610c2484610903565b83606093848401938185116101b057915b848310610c455750505050505090565b85838303126101b05783518691610c5b826108e8565b84518252602091828601518382015286860151610c7781610bf4565b87820152815201920191610c35565b6101c0818303126101b0576101a0610d3791610ca0610a23565b93610caa82610be0565b8552610cb860208301610be0565b602086015260408201516040860152610cd360608301610be0565b606086015260808201516080860152610cee60a08301610bfe565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610d2161012091828401610c09565b9085015261018081015161014085015201610bfe565b61016082015290565b15610d4757565b60405163100960cb60e01b815260106004820152602490fd5b15610d6757565b60405163100960cb60e01b815260116004820152602490fd5b15610d8757565b60405163100960cb60e01b815260126004820152602490fd5b15610da757565b60405163100960cb60e01b815260136004820152602490fd5b15610dc757565b60405163100960cb60e01b815260146004820152602490fd5b15610de757565b60405163100960cb60e01b8152600a6004820152602490fd5b15610e0757565b60405163100960cb60e01b815260096004820152602490fd5b15610e2757565b60405163100960cb60e01b815260156004820152602490fd5b15610e4757565b60405163100960cb60e01b815260166004820152602490fd5b15610e6757565b60405163100960cb60e01b815260176004820152602490fd5b15610e8757565b60405163100960cb60e01b8152601f6004820152602490fd5b15610ea757565b60405163100960cb60e01b815260206004820152602490fd5b15610ec757565b60405163100960cb60e01b8152601a6004820152602490fd5b15610ee757565b60405163100960cb60e01b8152601b6004820152602490fd5b15610f0757565b60405163100960cb60e01b8152601c6004820152602490fd5b15610f2757565b60405163100960cb60e01b8152601d6004820152602490fd5b15610f4757565b60405163100960cb60e01b8152601e6004820152602490fd5b15610f6757565b60405163100960cb60e01b815260186004820152602490fd5b15610f8757565b60405163100960cb60e01b815260196004820152602490fd5b15610fa757565b60405163100960cb60e01b815260216004820152602490fd5b15610fc757565b60405163100960cb60e01b815260226004820152602490fd5b15610fe757565b60405163100960cb60e01b815260236004820152602490fd5b1561100757565b60405163100960cb60e01b815260266004820152602490fd5b1561102757565b60405163100960cb60e01b815260276004820152602490fd5b1561104757565b602460405163100960cb60e01b8152816004820152fd5b1561106557565b60405163100960cb60e01b815260256004820152602490fd5b91908260809103126101b057604051611096816108cd565b60608082946110a481610be0565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b05761117a6101e06110db610a43565b936110e581610be0565b85526110f360208201610be0565b6020860152611105846040830161107e565b604086015260c0810151606086015260e0810151608086015261010061112c818301610bfe565b60a087015261012090611140828401610be0565b60c088015261116661014096611157888601610bfe565b60e08a01526101608501610c09565b908701526101c08201519086015201610bfe565b9082015290565b604051610100810191906001600160401b038311818410176111e2575b8260405280926111ad81610903565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610b80610a82565b6111ea61088e565b61119e565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561124c575b60408501526020810151151582850152604081015151608085015201511515910152565b611254610b85565b611228565b5160038110156112665790565b61126e610b85565b90565b6040519061127e82610903565b8160005b6020811061128e575050565b602090611299610a82565b8184015201611282565b604051906112b08261091e565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112f3611271565b6101208201520152565b6001600160a01b039091169052565b90600181101561131d5760051b0190565b634e487b7160e01b600052603260045260246000fd5b9061133c611181565b9161135461134f6103c760045460ff1690565b610e20565b6113b56040937f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f9618551806113898633836111fc565b0390a161139a600560005414610e40565b6113a2610978565b6020928184808094518301019101610c86565b936113cb8151801590811561180d575b50610e60565b016113d68151611259565b6113df81610b9c565b6114f3575050926114796109b2946113f73415610f60565b6000818086019661141961141461140e8a51610bd4565b33611867565b610f80565b8551600081527f807b1a21f9e5a1722d0467c3c78df82f2a026fc69ef0889e84a2018bc21c659c9080602081015b0390a101526114716114576112a3565b9561146b6114658751610bd4565b886112fd565b51610bd4565b9085016112fd565b808201519083015261149a6114916060830151610bd4565b606084016112fd565b608081015160808301526114bd6114b460a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e08301524361010083015261012080820151908301526101408091015190820152612589565b60016115028297939751611259565b61150b81610b9c565b0361177f578190510151855261153361152c6115278551610bd4565b610bd4565b3314610ec0565b61010090818401519061154d60c086019283511015610ee0565b8651519261156160e0870194855190611830565b9785810193898552838801998a5110996115808584019b8c9015159052565b8a5115611773576115948651825190611852565b60608401525b82515160608401516115ab91611852565b60808401908152956115bd3415610f00565b888a019b8c516115cc90610bd4565b88516115d891336118d2565b6115e190610f20565b83514311156115ef90610f40565b5115156000146109b29c6116b69c606061163c6117529c6116c4966116bc966117665751885161161e91611852565b60a08b01525b516116368a515160a08c015190611852565b90611830565b9761165a60e060c083019a808c528951111592019182519015159052565b8d8951908251015286518b825101527f0f0aa3f0135c9a727aa4067798f89a7e06793daf097a38c3391f497bd8393de961169a82518d51918291826107a6565b0390a15191015261146b8c6116ad6112a3565b9e8f9151610bd4565b906112fd565b898c016112fd565b51848a01526116e26116d960608a0151610bd4565b60608b016112fd565b608088015160808a01526117056116fc60a08a0151151590565b151560a08b0152565b5160c08901525160e0880152439087015261174d610120948587015192835194855190510194818382015191015115159261173e610a63565b96875286015284019015159052565b6119d7565b908301526101408091015190820152612589565b50600060a08b0152611624565b6000606084015261159a565b60029192955061178f9051611259565b61179881610b9c565b146117a4575b50505050565b611479611804946117b53415610e80565b60006080828601966117d26117cd61140e8a51610bd4565b610ea0565b8551600081527f353188529c7f82ea007ebb52f7194263e6108e8c195a0ae38307aee8a62ecd71908060208101611447565b3880808061179e565b905060015414386113c5565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611845575b82106101b057565b61184d611819565b61183d565b90810390811161185f5790565b61126e611819565b600061126e928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526118ab8161093a565b5193165af16118c26118bb611915565b8092611977565b5060208082518301019101611962565b60009161126e9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526118ab8161093a565b3d1561195d573d906001600160401b038211611950575b60405191611944601f8201601f191660200184610955565b82523d6000602084013e565b61195861088e565b61192c565b606090565b908160209103126101b0575161126e81610bf4565b1561197f5790565b80511561198e57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156119af5790565b8051156119be57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906119e1611271565b9260005b600181106119f35750508252565b80611a006001928461130c565b51611a0b828861130c565b52611a16818761130c565b506000198114611a27575b016119e5565b611a2f611819565b611a21565b9190611a3e611271565b9260005b60018110611a505750508252565b80611a5d6001928461130c565b51611a68828861130c565b52611a73818761130c565b506000198114611a84575b01611a42565b611a8c611819565b611a7e565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611ad7575b8285015260208101511515606085015201511515910152565b611adf610b85565b611abe565b5160028110156112665790565b60405190611afe826108cd565b60006060838281528260208201528260408201520152565b60405190611b238261091e565b81610140600091828152826020820152611b3b611af1565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112f3611271565b90611be691611b89611b846103c760045460ff1690565b610fa0565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa815180611bba853383611a91565b0390a1611bcb600760005414610fc0565b611bd3610978565b60209481868080945183010191016110c1565b92611bfc81518015908115611e3c575b50610fe0565b01611c078151611ae4565b611c1081610bca565b611cf15750611c7b6109b294611c263415611040565b60008382860196611c42611c3d61140e8a51610bd4565b61105e565b8151600081527f7e2a311a441f7229078d840da112f46fbf989e5b4982e1fa137a5369972a830190602090a10152611471611457611b16565b80820151908301526060810151606083015260808101516080830152600060a0830152611cb7611cae60c0830151610bd4565b60c084016112fd565b611cd0611cc760e0830151151590565b151560e0840152565b61010043818401528101519061012091828401520151610140820152612187565b611d0060019195949551611ae4565b611d0981610bca565b14611d145750505050565b61180493611e2691611d263415611000565b611e2185850195611d8960a0611d3c8951610bd4565b95611d56611d5160608b0198895190336118d2565b611020565b8551600181527f26a3a08b70de3687de302893b53fcb62192538c8863ce8ef9b1ce56b6ca4294a90602090a10160019052565b611db3611dab611d97611b16565b9861146b611da58a51610bd4565b8b6112fd565b8289016112fd565b82860151838801528351606088015260808601516080880152611de5611ddc60a0880151151590565b151560a0890152565b611df23360c089016112fd565b600160e0880152610100438189015286015192835194855190510194818382015191015115159261173e610a63565b611a34565b9061012091828401520151610140820152612187565b90506001541438611bf6565b506040513d6000823e3d90fd5b818110611e60575050565b60008155600101611e55565b611e77600254610854565b80611e7f5750565b601f8111600114611e9257506000600255565b6002600052611ed790601f0160051c60008051602061284e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611e55565b6000602081208160025555565b60405190611ef18261091e565b81610140600091828152826020820152611f09611af1565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611f34611271565b610100820152826101208201520152565b6000915b60018310611f5657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611f49565b6109b2909291926101e0610200820194611fa08382516111ef565b611fb2602082015160208501906111ef565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190612010610100928386019015159052565b60c081015161202561012091828701906111ef565b61204d60e08301519361203f610140958689019015159052565b830151610160870190611f45565b8101516101c085015201511515910152565b90601f821161206c575050565b6109b29160026000526020600020906020601f840160051c8301931061209a575b601f0160051c0190611e55565b909150819061208d565b80519091906001600160401b03811161217a575b6120cc816120c7600254610854565b61205f565b602080601f831160011461210857508192936000926120fd575b50508160011b916000199060031b1c191617600255565b0151905038806120e6565b6002600052601f1983169490919060008051602061284e833981519152926000905b878210612162575050836001959610612149575b505050811b01600255565b015160001960f88460031b161c1916905538808061213e565b8060018596829496860151815501950193019061212a565b61218261088e565b6120b8565b60e081018051151580156123d85760005b1561228157505061226e61227c6109b29261224c6121b4611ee4565b916121c86121c28251610bd4565b846112fd565b6121e16121d86020830151610bd4565b602085016112fd565b60408101516040840152606081015160608401526080810151608084015261220c60a0840160019052565b61222561221c60c0830151610bd4565b60c085016112fd565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b6122566007600055565b61225f43600155565b60405192839160208301611f85565b03601f198101835282610955565b6120a4565b15612382578160206109b293019161175261229c8451610bd4565b6122a68451610bd4565b926122c56101209485870193845151519160018060a01b0316906123e4565b6122f06122e76122d36112a3565b9761146b6122e18951610bd4565b8a6112fd565b602088016112fd565b6080850151604087015261231361230a60c0870151610bd4565b606088016112fd565b6101009061232e611ddc83880192835160808b015251151590565b6123418151604080890151015190611830565b60c0880152600060e088015251908601525180519061174d60406020840151930151151561236d610a63565b93600085526020850152604084019015159052565b506000808083610140612399611527849751610bd4565b910151908282156123cf575bf1156123c2575b600080556123ba6000600155565b6109b2611e6c565b6123ca611e48565b6123ac565b506108fc6123a5565b60a08301511515612198565b6000919061243993838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152612422816108cd565b5193165af16118c2612432611915565b80926119a7565b156101b057565b6040519061244d826108a5565b60006020838281520152565b6040519061018082016001600160401b038111838210176124cc575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526124bb611271565b610120820152826101408201520152565b6124d461088e565b612475565b6109b2909291926101a06101606101c08301956124f78482516111ef565b612509602082015160208601906111ef565b60408101516040850152612525606082015160608601906111ef565b6080810151608085015261254260a082015160a086019015159052565b60c081015160c085015260e081015160e085015261010080820151908501526125746101208083015190860190611f45565b61014081015161018085015201511515910152565b612591612440565b60e08201805160408401805191909111835292906101009081830190815160c085019081511160009060001461276e5750855115155b156126b0579461227c946109b2979461268e948461226e996125f8602061268498518b511115970196879015159052565b612600612459565b9861260e611da58751610bd4565b61262761261e6020880151610bd4565b60208c016112fd565b5160408a015261263d6116d96060870151610bd4565b608085015160808a01526126576116fc60a0870151151590565b5160c08901525160e088015251908601526101208082015190860152610140809101519085015251151590565b1515610160830152565b6126986005600055565b6126a143600155565b604051928391602083016124d9565b50505050906123ac92506126c48151151590565b1561275f576126d66060830151610bd4565b6000808080610140870151818115612756575b6001600160a01b0396871690f115612749575b61271361270c6020850151610bd4565b9251151590565b15612733576101206127258451610bd4565b935b015151519216906123e4565b6101206127436060850151610bd4565b93612727565b612751611e48565b6126fc565b506108fc6126e9565b6127698251610bd4565b6126d6565b6125c7565b60209060631901126101b0576040519061278c82610903565b6064358252565b60209060031901126101b057604051906127ac82610903565b6004358252565b610180818303126101b0576040519161016091906128269060e085016001600160401b03811186821017612840575b6040526127ee83610be0565b85526127fc60208401610be0565b602086015260408301516040860152612818816060850161107e565b606086015260e08301610c09565b608084015261014081015160a0840152015160c082015290565b61284861088e565b6127e256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12206,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_algo.rsh:49:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_algo.rsh:132:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_algo.rsh:88:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_algo.rsh:80:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_algo.rsh:53:62:after expr stmt semicolon',
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
