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
    impure: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `_reachp_0((uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_claimRefund()void`, `Borrower_close()void`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_claim()void`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`, `_reachp_0((uint64,uint64,uint64,(address,uint64,uint64,uint64)))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(byte,byte[8])))void`, `_reachp_5((uint64,(byte,byte[0])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEFCAcgKBGgjQYEJgMAAQEBADEYQQSjKGRJIls1ASVbNQIqZClkUIINBAVRYw8EDCkD+wQnUbj/BDrpub4EPoAXdgRnijtZBHO2+NcEjvcBQQSTqeROBJdNI/oEpHqhMgTf2SMoBPTSp0g2GgCODQDhAAEA0QD8AKMAswB4BBsAPQQmAIsEEAQAACEHrzUOJDQBEkSIBTs0DiJbNQ80DlcICTUVgAQpJ2w2NA8WUDQVULA0D4gFajQVIlWNAwQYBBsEHkL/w4EJrzULIQQ0ARJEiAV7NAsiWzUMNAtXCAE1DYAEBRynmjQMFlA0DVCwNAyIBS00DSJVjQID8gP1Qv+INhoBFzULJa8pNAsWUFA1DkL/e4ARAAAAAAAAAAACAAAAAAAAAAA1DkL/Y4AJAAAAAAAAAAABNQtC/480ASQSRIgEjjQZFjUEMRkiEkSABBUffHU0BFCwI0M0ASQSRIgEcDQQFjUEQv/fNAEhBAxBBDM0ASQSRIgEWDQTFlEHCDUEQv/ENAEkEkSIBEU0DxZRBwg1BEL/sSg1DoAIAAAAAAAABH00DlCwNA41BDIGNQ00GTQUDDUONA00EQw0DhBBA5s0GTQUDzUPNBg0FxZQNBQWUDQSUDQQFlA0ExZRBwhQNBEWUDQZFlA0DRZQNAxQNAsWUDQPFlEHCFCBIa9QJDIGNQI1ASpLAVcAf2cpTFd/LWcoNAEWNAIWUGcxGSISRIgEcDQDQP8uQv8hKDULgAgAAAAAAAADezQLULA0CzUEIjIGNRA1EzQRFDQTEEECpCM1DCM1EyI1ETQYNBcWUDQWUDQVFlA0FBZQNBMWUQcIUDQSUDQRFlEHCFA0D1A0DhZQNAwWUQcIUCEEMgZC/3E0FSNbNRoxADQYEkQ0DTQRDkQ0GjQZCEk1GzQUDUk1D0ECLzQbNBQJNQ40GjQOCTUWNAxXABE1FTQWNBeIA9wyBjQRDkQ0D0ECDjQbNBQJNQ40GTQaNA4JCEk1DzQUDxZRBwg0DxZQNBQWUDUOgAgAAAAAAAAE9TQOULA0DjUENA8yBjQMNBVJIls0FggWXABcADUMNQ01GUL+hCg1DoAIAAAAAAAABV40DlCwNA41BDIGNQ1C/mg0D1cAETUMNBU0F4gDViM1C4AIAAAAAAAAA7M0CxZRBwhQsDQLFlEHCDUEMQAjMgY0DzQMSSJbNBUIFlwAXAA1DzUQNRE1EkL+tjEANRg0CyJbNQw0CyVbNRc0C4EQWzUZNAtXGDg1FoAE8ZJYijQMFlA0FxZQNBkWUDQWULA0DIgCVSEHr0k1C0lXABElr1wAXAA1DSEIiALEIjQXMgqIAkA0FoEwWzUVNBYhBVs1FDQVNBQMRDQYNBcWUDQZFlA0FlA0DVA0FRZQNBQWUIEjr1AjMgZC/eIjNAESRElXACA1GEkhBVs1F0khBls1GUlXMDg1FklXaBE1DUmBeVs1FYGBAVs1FDQLFzUMgATVFRkUNAwWULA0DIgBvDQZiAHJNBgxABJEIzQYIjIGNA00GTUONQ81EDURNRI1E0L9wIgBkSEIiAIWNhoBNQtC/vqIAYE2GgE1C0L/fYgBdjYaATUOQvvgiAFrNhoBNQtC/BEiMTQSRIEDMTUSRCIxNhJEIjE3EkSIAUuBrAGvIiJC/ShC/LpC/bFC/kkiNQ5C/dIiNQ5C/fNC/TpC/lM0ETUTNBFBADs0D1cAEUk1GiJbSTUVNBc0GIgBGDQQNBYhBlsINREiNBA0DzQaNBVJCRZcAFwANA41CzUMNQ01GUL8dzQONBiIAO4iNBcyCjIJiAFWMRkkEkSIAUIiMgoyCYgBdUL8xzQLNBg0EjQOTYgAxTQMVwARIls0FzQSNBg0Dk2IAK4iNBcyCjIJiAEaQv/BIrIBI7IQsgeyCLOJIrIBIQmyELIUshGyErOJNAEhBBJEiAChNAwWUQcINQRC+5BIiUwJSTUGMgmIAGqJCUlB/+5JNQaIAGKJSVcAIDUYSSEFWzUXSSEGWzUUSVcwIDUSSYFQWzUQSVdYARc1E0mBWVs1EUmBYVs1GUmBaVs1DUlXcRE1DEmBggFbNQtXigEXNQ+JIzUDiUkiEkw0AhIRRImxQv9nsUL/VzEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJVwAgNRhJIQVbNRdJVyg4NRZJgWBbNRVJgWhbNRRJV3ABFzUTSVdxIDUSSVeRARc1EUlXkhE1D0mBowFbNQ5XqwEXNQyJNAY0B0oPQf8dQv8lsbIVQv7vNAYINQaJMRY0ACMISTUACUcDOBQyChJEOBAhCRJEOBFPAhJEOBISRImxsglC/rQ=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `550`,
    1001: `550`,
    1002: `551`,
    1003: `551`,
    1004: `552`,
    1005: `552`,
    1006: `552`,
    1007: `553`,
    1008: `553`,
    1009: `554`,
    101: `21`,
    1010: `554`,
    1011: `555`,
    1012: `556`,
    1013: `556`,
    1014: `557`,
    1015: `557`,
    1016: `558`,
    1017: `558`,
    1018: `559`,
    1019: `560`,
    102: `21`,
    1020: `560`,
    1021: `561`,
    1022: `561`,
    1023: `562`,
    1024: `562`,
    1025: `563`,
    1026: `564`,
    1027: `568`,
    1028: `568`,
    1029: `569`,
    103: `21`,
    1030: `569`,
    1031: `570`,
    1032: `571`,
    1033: `572`,
    1034: `572`,
    1035: `573`,
    1036: `574`,
    1037: `575`,
    1038: `575`,
    1039: `576`,
    104: `21`,
    1040: `577`,
    1041: `577`,
    1042: `578`,
    1043: `579`,
    1044: `579`,
    1045: `580`,
    1046: `581`,
    1047: `582`,
    1048: `582`,
    1049: `583`,
    105: `21`,
    1050: `584`,
    1051: `585`,
    1052: `585`,
    1053: `586`,
    1054: `587`,
    1055: `588`,
    1056: `589`,
    1057: `589`,
    1058: `590`,
    1059: `590`,
    106: `21`,
    1060: `590`,
    1061: `592`,
    1062: `593`,
    1063: `593`,
    1064: `594`,
    1065: `595`,
    1066: `597`,
    1067: `598`,
    1068: `598`,
    1069: `598`,
    107: `21`,
    1070: `599`,
    1071: `599`,
    1072: `600`,
    1073: `601`,
    1074: `601`,
    1075: `602`,
    1076: `603`,
    1077: `603`,
    1078: `604`,
    1079: `605`,
    108: `21`,
    1080: `605`,
    1081: `606`,
    1082: `607`,
    1083: `607`,
    1084: `608`,
    1085: `609`,
    1086: `609`,
    1087: `609`,
    1088: `610`,
    1089: `610`,
    109: `21`,
    1090: `611`,
    1091: `612`,
    1092: `612`,
    1093: `612`,
    1094: `613`,
    1095: `613`,
    1096: `614`,
    1097: `615`,
    1098: `615`,
    1099: `616`,
    11: `2`,
    110: `22`,
    1100: `617`,
    1101: `617`,
    1102: `618`,
    1103: `618`,
    1104: `618`,
    1105: `619`,
    1106: `620`,
    1107: `620`,
    1108: `621`,
    1109: `621`,
    111: `22`,
    1110: `622`,
    1111: `623`,
    1112: `623`,
    1113: `624`,
    1114: `624`,
    1115: `624`,
    1116: `624`,
    1117: `624`,
    1118: `624`,
    1119: `625`,
    112: `22`,
    1120: `625`,
    1121: `626`,
    1122: `627`,
    1123: `628`,
    1124: `630`,
    1125: `630`,
    1126: `631`,
    1127: `631`,
    1128: `631`,
    1129: `632`,
    113: `23`,
    1130: `632`,
    1131: `633`,
    1132: `633`,
    1133: `633`,
    1134: `636`,
    1135: `636`,
    1136: `637`,
    1137: `637`,
    1138: `638`,
    1139: `639`,
    114: `23`,
    1140: `642`,
    1141: `643`,
    1142: `643`,
    1143: `644`,
    1144: `645`,
    1145: `645`,
    1146: `646`,
    1147: `646`,
    1148: `647`,
    1149: `647`,
    115: `23`,
    1150: `648`,
    1151: `648`,
    1152: `649`,
    1153: `649`,
    1154: `650`,
    1155: `650`,
    1156: `651`,
    1157: `651`,
    1158: `652`,
    1159: `652`,
    116: `23`,
    1160: `653`,
    1161: `653`,
    1162: `654`,
    1163: `654`,
    1164: `654`,
    1165: `656`,
    1166: `656`,
    1167: `656`,
    1168: `657`,
    1169: `657`,
    117: `23`,
    1170: `658`,
    1171: `658`,
    1172: `658`,
    1173: `659`,
    1174: `659`,
    1175: `659`,
    1176: `660`,
    1177: `660`,
    1178: `661`,
    1179: `661`,
    118: `23`,
    1180: `661`,
    1181: `663`,
    1182: `663`,
    1183: `663`,
    1184: `664`,
    1185: `664`,
    1186: `664`,
    1187: `665`,
    1188: `665`,
    1189: `666`,
    119: `23`,
    1190: `666`,
    1191: `666`,
    1192: `668`,
    1193: `668`,
    1194: `668`,
    1195: `669`,
    1196: `669`,
    1197: `669`,
    1198: `670`,
    1199: `670`,
    12: `2`,
    120: `23`,
    1200: `671`,
    1201: `671`,
    1202: `671`,
    1203: `673`,
    1204: `673`,
    1205: `673`,
    1206: `674`,
    1207: `674`,
    1208: `674`,
    1209: `675`,
    121: `23`,
    1210: `675`,
    1211: `676`,
    1212: `676`,
    1213: `676`,
    1214: `678`,
    1215: `679`,
    1216: `679`,
    1217: `680`,
    1218: `681`,
    1219: `682`,
    122: `23`,
    1220: `682`,
    1221: `683`,
    1222: `683`,
    1223: `684`,
    1224: `685`,
    1225: `686`,
    1226: `687`,
    1227: `687`,
    1228: `688`,
    1229: `689`,
    123: `23`,
    1230: `690`,
    1231: `691`,
    1232: `691`,
    1233: `692`,
    1234: `693`,
    1235: `694`,
    1236: `694`,
    1237: `694`,
    1238: `695`,
    1239: `695`,
    124: `23`,
    1240: `695`,
    1241: `696`,
    1242: `697`,
    1243: `698`,
    1244: `699`,
    1245: `699`,
    1246: `699`,
    1247: `701`,
    1248: `701`,
    1249: `701`,
    125: `23`,
    1250: `703`,
    1251: `703`,
    1252: `703`,
    1253: `705`,
    1254: `705`,
    1255: `705`,
    1256: `707`,
    1257: `708`,
    1258: `708`,
    1259: `709`,
    126: `23`,
    1260: `709`,
    1261: `709`,
    1262: `711`,
    1263: `712`,
    1264: `712`,
    1265: `713`,
    1266: `713`,
    1267: `713`,
    1268: `715`,
    1269: `715`,
    127: `23`,
    1270: `715`,
    1271: `717`,
    1272: `717`,
    1273: `717`,
    1274: `719`,
    1275: `719`,
    1276: `720`,
    1277: `720`,
    1278: `721`,
    1279: `721`,
    128: `23`,
    1280: `722`,
    1281: `722`,
    1282: `722`,
    1283: `723`,
    1284: `723`,
    1285: `724`,
    1286: `724`,
    1287: `724`,
    1288: `725`,
    1289: `726`,
    129: `23`,
    1290: `726`,
    1291: `727`,
    1292: `728`,
    1293: `729`,
    1294: `730`,
    1295: `730`,
    1296: `732`,
    1297: `732`,
    1298: `734`,
    1299: `734`,
    13: `2`,
    130: `23`,
    1300: `735`,
    1301: `735`,
    1302: `735`,
    1303: `736`,
    1304: `736`,
    1305: `737`,
    1306: `737`,
    1307: `738`,
    1308: `738`,
    1309: `739`,
    131: `23`,
    1310: `740`,
    1311: `741`,
    1312: `741`,
    1313: `742`,
    1314: `743`,
    1315: `743`,
    1316: `744`,
    1317: `744`,
    1318: `745`,
    1319: `745`,
    132: `23`,
    1320: `746`,
    1321: `746`,
    1322: `747`,
    1323: `748`,
    1324: `749`,
    1325: `750`,
    1326: `750`,
    1327: `751`,
    1328: `751`,
    1329: `752`,
    133: `23`,
    1330: `752`,
    1331: `753`,
    1332: `753`,
    1333: `754`,
    1334: `754`,
    1335: `755`,
    1336: `755`,
    1337: `756`,
    1338: `756`,
    1339: `757`,
    134: `23`,
    1340: `757`,
    1341: `757`,
    1342: `759`,
    1343: `759`,
    1344: `761`,
    1345: `761`,
    1346: `762`,
    1347: `762`,
    1348: `762`,
    1349: `764`,
    135: `23`,
    1350: `766`,
    1351: `766`,
    1352: `767`,
    1353: `767`,
    1354: `768`,
    1355: `768`,
    1356: `769`,
    1357: `769`,
    1358: `769`,
    1359: `771`,
    136: `23`,
    1360: `771`,
    1361: `772`,
    1362: `773`,
    1363: `774`,
    1364: `776`,
    1365: `776`,
    1366: `776`,
    1367: `778`,
    1368: `779`,
    1369: `779`,
    137: `23`,
    1370: `780`,
    1371: `780`,
    1372: `781`,
    1373: `781`,
    1374: `781`,
    1375: `782`,
    1376: `782`,
    1377: `782`,
    1378: `784`,
    1379: `784`,
    138: `23`,
    1380: `786`,
    1381: `786`,
    1382: `787`,
    1383: `787`,
    1384: `788`,
    1385: `788`,
    1386: `789`,
    1387: `790`,
    1388: `790`,
    1389: `790`,
    139: `23`,
    1390: `791`,
    1391: `791`,
    1392: `792`,
    1393: `792`,
    1394: `792`,
    1395: `793`,
    1396: `794`,
    1397: `796`,
    1398: `796`,
    1399: `798`,
    14: `2`,
    140: `23`,
    1400: `798`,
    1401: `799`,
    1402: `799`,
    1403: `800`,
    1404: `800`,
    1405: `801`,
    1406: `802`,
    1407: `802`,
    1408: `802`,
    1409: `804`,
    141: `25`,
    1410: `805`,
    1411: `805`,
    1412: `806`,
    1413: `806`,
    1414: `807`,
    1415: `807`,
    1416: `808`,
    1417: `808`,
    1418: `808`,
    1419: `809`,
    142: `28`,
    1420: `809`,
    1421: `809`,
    1422: `811`,
    1423: `812`,
    1424: `812`,
    1425: `813`,
    1426: `814`,
    1427: `814`,
    1428: `815`,
    1429: `815`,
    143: `28`,
    1430: `816`,
    1431: `816`,
    1432: `817`,
    1433: `818`,
    1434: `820`,
    1435: `821`,
    1436: `821`,
    1437: `822`,
    1438: `822`,
    1439: `823`,
    144: `29`,
    1440: `823`,
    1441: `824`,
    1442: `824`,
    1443: `825`,
    1444: `825`,
    1445: `826`,
    1446: `826`,
    1447: `827`,
    1448: `828`,
    1449: `830`,
    145: `30`,
    1450: `830`,
    1451: `831`,
    1452: `831`,
    1453: `832`,
    1454: `833`,
    1455: `836`,
    1456: `836`,
    1457: `836`,
    1458: `837`,
    1459: `837`,
    146: `30`,
    1460: `838`,
    1461: `839`,
    1462: `839`,
    1463: `839`,
    1464: `840`,
    1465: `840`,
    1466: `841`,
    1467: `841`,
    1468: `841`,
    1469: `843`,
    147: `32`,
    1470: `844`,
    1471: `846`,
    1472: `847`,
    1473: `848`,
    1474: `849`,
    1475: `849`,
    1476: `850`,
    1477: `850`,
    1478: `851`,
    1479: `851`,
    148: `33`,
    1480: `851`,
    1481: `852`,
    1482: `854`,
    1483: `855`,
    1484: `856`,
    1485: `856`,
    1486: `856`,
    1487: `857`,
    1488: `858`,
    1489: `858`,
    149: `33`,
    1490: `859`,
    1491: `859`,
    1492: `859`,
    1493: `860`,
    1494: `862`,
    1495: `863`,
    1496: `863`,
    1497: `863`,
    1498: `864`,
    1499: `864`,
    15: `2`,
    150: `34`,
    1500: `865`,
    1501: `866`,
    1502: `866`,
    1503: `867`,
    1504: `868`,
    1505: `868`,
    1506: `869`,
    1507: `870`,
    1508: `870`,
    1509: `871`,
    151: `35`,
    1510: `872`,
    1511: `872`,
    1512: `873`,
    1513: `874`,
    1514: `874`,
    1515: `874`,
    1516: `875`,
    1517: `875`,
    1518: `876`,
    1519: `877`,
    152: `36`,
    1520: `877`,
    1521: `878`,
    1522: `879`,
    1523: `879`,
    1524: `880`,
    1525: `881`,
    1526: `881`,
    1527: `881`,
    1528: `882`,
    1529: `883`,
    153: `36`,
    1530: `883`,
    1531: `884`,
    1532: `885`,
    1533: `885`,
    1534: `886`,
    1535: `887`,
    1536: `887`,
    1537: `888`,
    1538: `889`,
    1539: `889`,
    154: `36`,
    1540: `890`,
    1541: `891`,
    1542: `891`,
    1543: `892`,
    1544: `893`,
    1545: `893`,
    1546: `894`,
    1547: `895`,
    1548: `895`,
    1549: `896`,
    155: `37`,
    1550: `897`,
    1551: `897`,
    1552: `897`,
    1553: `898`,
    1554: `898`,
    1555: `899`,
    1556: `900`,
    1557: `900`,
    1558: `900`,
    1559: `901`,
    156: `37`,
    1560: `902`,
    1561: `902`,
    1562: `903`,
    1563: `903`,
    1564: `903`,
    1565: `904`,
    1566: `905`,
    1567: `905`,
    1568: `906`,
    1569: `908`,
    157: `38`,
    1570: `909`,
    1571: `909`,
    1572: `910`,
    1573: `912`,
    1574: `913`,
    1575: `914`,
    1576: `915`,
    1577: `916`,
    1578: `916`,
    1579: `917`,
    158: `39`,
    1580: `918`,
    1581: `919`,
    1582: `920`,
    1583: `922`,
    1584: `923`,
    1585: `923`,
    1586: `923`,
    1587: `925`,
    1588: `926`,
    1589: `926`,
    159: `40`,
    1590: `926`,
    1591: `929`,
    1592: `929`,
    1593: `930`,
    1594: `930`,
    1595: `931`,
    1596: `932`,
    1597: `933`,
    1598: `934`,
    1599: `934`,
    16: `2`,
    160: `40`,
    1600: `935`,
    1601: `936`,
    1602: `936`,
    1603: `937`,
    1604: `937`,
    1605: `938`,
    1606: `938`,
    1607: `939`,
    1608: `940`,
    1609: `941`,
    161: `41`,
    1610: `941`,
    1611: `942`,
    1612: `943`,
    1613: `944`,
    1614: `945`,
    1615: `945`,
    1616: `946`,
    1617: `947`,
    1618: `948`,
    1619: `950`,
    162: `41`,
    1620: `951`,
    1621: `951`,
    1622: `951`,
    1623: `952`,
    1624: `952`,
    1625: `953`,
    1626: `954`,
    1627: `954`,
    1628: `955`,
    1629: `956`,
    163: `42`,
    1630: `956`,
    1631: `957`,
    1632: `958`,
    1633: `958`,
    1634: `958`,
    1635: `959`,
    1636: `959`,
    1637: `960`,
    1638: `961`,
    1639: `961`,
    164: `42`,
    1640: `962`,
    1641: `963`,
    1642: `963`,
    1643: `964`,
    1644: `965`,
    1645: `965`,
    1646: `966`,
    1647: `967`,
    1648: `967`,
    1649: `968`,
    165: `42`,
    1650: `969`,
    1651: `969`,
    1652: `969`,
    1653: `970`,
    1654: `971`,
    1655: `971`,
    1656: `972`,
    1657: `973`,
    1658: `973`,
    1659: `973`,
    166: `43`,
    1660: `974`,
    1661: `974`,
    1662: `975`,
    1663: `976`,
    1664: `976`,
    1665: `976`,
    1666: `977`,
    1667: `978`,
    1668: `978`,
    1669: `979`,
    167: `43`,
    1670: `980`,
    1671: `980`,
    1672: `980`,
    1673: `981`,
    1674: `981`,
    1675: `982`,
    1676: `983`,
    1677: `983`,
    1678: `983`,
    1679: `984`,
    168: `44`,
    1680: `985`,
    1681: `985`,
    1682: `986`,
    1683: `986`,
    1684: `986`,
    1685: `987`,
    1686: `988`,
    1687: `988`,
    1688: `989`,
    1689: `991`,
    169: `44`,
    1690: `991`,
    1691: `992`,
    1692: `992`,
    1693: `993`,
    1694: `994`,
    1695: `995`,
    1696: `995`,
    1697: `995`,
    1698: `996`,
    1699: `996`,
    17: `2`,
    170: `44`,
    1700: `996`,
    1701: `998`,
    1702: `999`,
    1703: `999`,
    1704: `1000`,
    1705: `1000`,
    1706: `1000`,
    1707: `1002`,
    1708: `1002`,
    1709: `1003`,
    171: `44`,
    1710: `1004`,
    1711: `1004`,
    1712: `1005`,
    1713: `1008`,
    1714: `1008`,
    1715: `1009`,
    1716: `1009`,
    1717: `1010`,
    1718: `1011`,
    1719: `1012`,
    172: `44`,
    1720: `1013`,
    1721: `1013`,
    1722: `1014`,
    1723: `1015`,
    1724: `1015`,
    1725: `1016`,
    1726: `1016`,
    1727: `1017`,
    1728: `1017`,
    1729: `1018`,
    173: `44`,
    1730: `1019`,
    1731: `1020`,
    1732: `1020`,
    1733: `1021`,
    1734: `1021`,
    1735: `1022`,
    1736: `1023`,
    1737: `1024`,
    1738: `1024`,
    1739: `1025`,
    174: `45`,
    1740: `1025`,
    1741: `1026`,
    1742: `1027`,
    1743: `1028`,
    1744: `1028`,
    1745: `1029`,
    1746: `1030`,
    1747: `1031`,
    1748: `1033`,
    1749: `1034`,
    175: `45`,
    1750: `1034`,
    1751: `1035`,
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
    674: `357`,
    675: `357`,
    676: `358`,
    677: `358`,
    678: `359`,
    679: `360`,
    68: `21`,
    680: `368`,
    681: `368`,
    682: `369`,
    683: `369`,
    684: `370`,
    685: `371`,
    686: `372`,
    687: `372`,
    688: `373`,
    689: `373`,
    69: `21`,
    690: `374`,
    691: `375`,
    692: `376`,
    693: `376`,
    694: `377`,
    695: `377`,
    696: `377`,
    697: `378`,
    698: `378`,
    699: `379`,
    7: `2`,
    70: `21`,
    700: `379`,
    701: `380`,
    702: `381`,
    703: `381`,
    704: `383`,
    705: `383`,
    706: `384`,
    707: `384`,
    708: `385`,
    709: `386`,
    71: `21`,
    710: `386`,
    711: `387`,
    712: `387`,
    713: `388`,
    714: `388`,
    715: `388`,
    716: `389`,
    717: `389`,
    718: `390`,
    719: `390`,
    72: `21`,
    720: `391`,
    721: `391`,
    722: `392`,
    723: `392`,
    724: `392`,
    725: `395`,
    726: `395`,
    727: `396`,
    728: `396`,
    729: `397`,
    73: `21`,
    730: `398`,
    731: `403`,
    732: `403`,
    733: `404`,
    734: `404`,
    735: `404`,
    736: `405`,
    737: `405`,
    738: `406`,
    739: `406`,
    74: `21`,
    740: `407`,
    741: `408`,
    742: `408`,
    743: `410`,
    744: `410`,
    745: `411`,
    746: `411`,
    747: `412`,
    748: `412`,
    749: `413`,
    75: `21`,
    750: `414`,
    751: `415`,
    752: `416`,
    753: `416`,
    754: `417`,
    755: `417`,
    756: `418`,
    757: `419`,
    758: `420`,
    759: `420`,
    76: `21`,
    760: `420`,
    761: `421`,
    762: `421`,
    763: `422`,
    764: `423`,
    765: `424`,
    766: `424`,
    767: `425`,
    768: `426`,
    769: `427`,
    77: `21`,
    770: `427`,
    771: `428`,
    772: `428`,
    773: `428`,
    774: `428`,
    775: `428`,
    776: `428`,
    777: `428`,
    778: `428`,
    779: `428`,
    78: `21`,
    780: `428`,
    781: `429`,
    782: `429`,
    783: `430`,
    784: `431`,
    785: `432`,
    786: `432`,
    787: `433`,
    788: `433`,
    789: `434`,
    79: `21`,
    790: `434`,
    791: `435`,
    792: `435`,
    793: `436`,
    794: `436`,
    795: `437`,
    796: `437`,
    797: `438`,
    798: `439`,
    799: `440`,
    8: `2`,
    80: `21`,
    800: `441`,
    801: `441`,
    802: `442`,
    803: `443`,
    804: `444`,
    805: `444`,
    806: `445`,
    807: `445`,
    808: `446`,
    809: `446`,
    81: `21`,
    810: `447`,
    811: `447`,
    812: `448`,
    813: `448`,
    814: `449`,
    815: `449`,
    816: `449`,
    817: `451`,
    818: `452`,
    819: `452`,
    82: `21`,
    820: `453`,
    821: `453`,
    822: `453`,
    823: `453`,
    824: `453`,
    825: `453`,
    826: `453`,
    827: `453`,
    828: `453`,
    829: `453`,
    83: `21`,
    830: `454`,
    831: `454`,
    832: `455`,
    833: `456`,
    834: `457`,
    835: `457`,
    836: `458`,
    837: `458`,
    838: `459`,
    839: `459`,
    84: `21`,
    840: `460`,
    841: `460`,
    842: `461`,
    843: `461`,
    844: `461`,
    845: `463`,
    846: `463`,
    847: `464`,
    848: `464`,
    849: `464`,
    85: `21`,
    850: `465`,
    851: `465`,
    852: `466`,
    853: `466`,
    854: `467`,
    855: `467`,
    856: `468`,
    857: `468`,
    858: `468`,
    859: `471`,
    86: `21`,
    860: `472`,
    861: `472`,
    862: `473`,
    863: `473`,
    864: `473`,
    865: `473`,
    866: `473`,
    867: `473`,
    868: `473`,
    869: `473`,
    87: `21`,
    870: `473`,
    871: `473`,
    872: `474`,
    873: `474`,
    874: `475`,
    875: `476`,
    876: `476`,
    877: `476`,
    878: `477`,
    879: `478`,
    88: `21`,
    880: `479`,
    881: `479`,
    882: `480`,
    883: `481`,
    884: `481`,
    885: `481`,
    886: `482`,
    887: `482`,
    888: `483`,
    889: `483`,
    89: `21`,
    890: `484`,
    891: `485`,
    892: `485`,
    893: `486`,
    894: `486`,
    895: `487`,
    896: `487`,
    897: `488`,
    898: `489`,
    899: `490`,
    9: `2`,
    90: `21`,
    900: `491`,
    901: `491`,
    902: `492`,
    903: `493`,
    904: `494`,
    905: `494`,
    906: `495`,
    907: `495`,
    908: `496`,
    909: `496`,
    91: `21`,
    910: `497`,
    911: `497`,
    912: `498`,
    913: `498`,
    914: `499`,
    915: `499`,
    916: `500`,
    917: `500`,
    918: `500`,
    919: `502`,
    92: `21`,
    920: `502`,
    921: `503`,
    922: `503`,
    923: `504`,
    924: `504`,
    925: `505`,
    926: `506`,
    927: `507`,
    928: `507`,
    929: `508`,
    93: `21`,
    930: `508`,
    931: `509`,
    932: `510`,
    933: `511`,
    934: `511`,
    935: `512`,
    936: `512`,
    937: `513`,
    938: `513`,
    939: `514`,
    94: `21`,
    940: `515`,
    941: `515`,
    942: `516`,
    943: `516`,
    944: `517`,
    945: `517`,
    946: `517`,
    947: `518`,
    948: `518`,
    949: `519`,
    95: `21`,
    950: `519`,
    951: `519`,
    952: `519`,
    953: `519`,
    954: `519`,
    955: `520`,
    956: `520`,
    957: `521`,
    958: `522`,
    959: `523`,
    96: `21`,
    960: `523`,
    961: `524`,
    962: `525`,
    963: `526`,
    964: `526`,
    965: `527`,
    966: `528`,
    967: `529`,
    968: `529`,
    969: `530`,
    97: `21`,
    970: `531`,
    971: `533`,
    972: `533`,
    973: `534`,
    974: `534`,
    975: `534`,
    976: `535`,
    977: `535`,
    978: `536`,
    979: `537`,
    98: `21`,
    980: `538`,
    981: `538`,
    982: `539`,
    983: `540`,
    984: `540`,
    985: `540`,
    986: `541`,
    987: `542`,
    988: `543`,
    989: `543`,
    99: `21`,
    990: `544`,
    991: `544`,
    992: `545`,
    993: `545`,
    994: `546`,
    995: `546`,
    996: `547`,
    997: `547`,
    998: `547`,
    999: `548`
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
  warnings: [`API Borrower_close may use up to 5 accounts, but the limit is 4. API Borrower_close starts at /app/src/contracts/loan_nnt_algo.rsh:53:62:application.`, `API Lender_lend may use up to 5 accounts, but the limit is 4. API Lender_lend starts at /app/src/contracts/loan_nnt_algo.rsh:53:62:application.`, `Step 1 may use up to 5 accounts, but the limit is 4. Step 1 starts at /app/src/contracts/loan_nnt_algo.rsh:50:11:dot.`, `Step 5 may use up to 5 accounts, but the limit is 4. Step 5 starts at /app/src/contracts/loan_nnt_algo.rsh:53:62:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2899","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1149","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1269","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1374","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v891","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v947","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2888","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2902","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2905","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2908","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002fc038819003601f8101601f191683016001600160401b0381118482101762000530578392829160405283398101039060e0821262000634576080604051926200004d8462000639565b825184526200005f6020840162000671565b602085015260408301516040850152605f190112620006345760c060405191620000898362000639565b620000976060820162000671565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005305760009161012091604052828152826020820152826040820152620000fa62000686565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906040820182811060018060401b0382111762000530576040526200014762000686565b825262000153620006a7565b602083015260ff600454166200061b577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528351602082015260018060a01b03602085015116604082015260408401516060820152620001c460608501516080830190620006ee565ba1805180159081156200060e575b5015620005f557600082515260006020835101526000604083510152815160208301515234620005dc576060810151602060608201519101511115620005c3576040519160e08301906001600160401b0382118483101762000530576020916040526000845260008285015260006040850152604051620002538162000639565b60008152600083820152600060408201526000606082015260608501526200027a620006a7565b6080850152600060a0850152600060c085015233845260018060a01b0382840151168285015260408301516040850152606083015160608501520151805160406020820151910151151560405191620002d38362000655565b6000835260208301526040820152620002eb620006a7565b9160005b6001811062000573578560206060878787815260808501528180820151015160a08501520151015160c08201526001600055436001556040519060018060a01b03815116602083015260018060a01b036020820151166040830152604081015160608301526200036860608201516080840190620006ee565b6080810151600061010084015b60018210620005465760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005305760405280516001600160401b0381116200053057600254600181811c9116801562000525575b60208210146200050f57601f8111620004a5575b50602091601f82116001146200043b579181926000926200042f575b50508160011b916000199060031b1c1916176002555b60405161287d9081620007438239f35b01519050828062000409565b601f19821692600260005260206000209160005b8581106200048c5750836001951062000472575b505050811b016002556200041f565b015160001960f88460031b161c1916905582808062000463565b919260206001819286850151815501940192016200044f565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000504575b601f0160051c01905b818110620004f75750620003ed565b60008155600101620004e8565b9091508190620004df565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003d9565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000375565b6200057f81836200071a565b516200058c82866200071a565b526200059981856200071a565b506000198114620005ad57600101620002ef565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d2565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200053057604052565b606081019081106001600160401b038211176200053057604052565b51906001600160a01b03821682036200063457565b60405190620006958262000655565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000530576040528260005b828110620006d757505050565b8290620006e362000686565b8184015201620006ca565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200072c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca6107c8565b61000e565b506100ca61075a565b506100ca6106e5565b506100ca61063b565b506100ca6105ed565b506100ca61056e565b506100ca61054f565b506100ca610510565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610abf565b6005600054036101975760e0602091608061018861017a610978565b858082518301019101610ce1565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610abf565b604051906101f6826108a5565b600435825260803660231901126101b05760405191610214836108cd565b6024359260038410156101b05761026193815260443561023381610c4f565b602082015261024136612776565b604082015260843561025281610c4f565b60608201526020820152610edf565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610abf565b6005600054036102a75760c060209160e061018861017a610978565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610abf565b61030d816102e5611f1a565b85810190600082515251151586825101526102fe611f1a565b9060008252518682015261211f565b01511515604051908152f35b50346101b05760003660031901126101b057610333610abf565b60056000540361037a5761012061026d91610160610361610352610978565b60208082518301019101610ce1565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5060203660031901126101b0576103a8610abf565b506102616103b536612796565b6103c3600160005414611411565b61043f6103e06103d1610978565b602080825183010191016127b6565b916103fc6103f76103f360045460ff1690565b1590565b611431565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1518015908115610504575b50611451565b6040810161044f81513414611471565b61046b3360018060a01b036104648551610c2f565b1614611491565b60806104756120c8565b926104896104838251610c2f565b85610ea9565b6104a26104996020830151610c2f565b60208601610ea9565b6060810151604085015260a0810151606085015260c0810151828501526104cc60a0850160019052565b6104e26104d98251610c2f565b60c08601610ea9565b600060e085015243610100850152015161012083015251610140820152612535565b90506001541438610439565b5060003660031901126101b057602060a0610529610abf565b61030d81610535611f1a565b8581019060018251525115156040825101526102fe611f1a565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b057610583610abf565b60405190610590826108a5565b600435825260603660231901126101b057604051916105ae836108e8565b6024359260028410156101b0576102619381526044356105cd81610c4f565b60208201526064356105de81610c4f565b6040820152602082015261211f565b5060003660031901126101b05760206080610606610abf565b61030d81610612610b77565b85810190600282515251151560608251015261062c610b77565b90600082525186820152610edf565b50346101b05760003660031901126101b05761026d61069861010061065e610abf565b60005460078110156106aa57600561067691146114d1565b61068961069060a0610689610352610978565b0151151590565b151582840152565b60405190151581529081906020820190565b60076106b691146114b1565b6106e06101406106d66106c7610978565b60208082518301019101611f83565b0151151582840152565b610689565b50346101b057600080600319360112610757578054610702610978565b906040519283918252602090604082840152835191826040850152815b83811061074057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161071f565b80fd5b5060003660031901126101b057602080610772610abf565b61030d8161077e610b77565b8481019060008251525115158582510152610797610b77565b90600082525185820152610edf565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b0576107dd610a82565b5061026d60606107eb610abf565b610846816040516107fb816108a5565b60405161080781610903565b600081528152602081019061081a610b44565b8252600435815152600182515251604082510152610836610b77565b9060008252516020820152610edf565b0151604051918291826107a6565b90600182811c92168015610884575b602083101461086e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610863565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108c057604052565b6108c861088e565b604052565b608081019081106001600160401b038211176108c057604052565b606081019081106001600160401b038211176108c057604052565b602081019081106001600160401b038211176108c057604052565b61016081019081106001600160401b038211176108c057604052565b60a081019081106001600160401b038211176108c057604052565b601f909101601f19168101906001600160401b038211908210176108c057604052565b604051906000826002549161098c83610854565b808352600193808516908115610a0257506001146109b4575b506109b292500383610955565b565b6002600090815260008051602061285183398151915294602093509091905b8183106109ea5750506109b29350820101386109a5565b855488840185015294850194879450918301916109d3565b90506109b294506020925060ff191682840152151560051b820101386109a5565b6040519061018082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b038111838210176108c057604052565b6040519061016082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b03811183821017610ab2575b60405260006040838281528260208201520152565b610aba61088e565b610a9d565b6040519061014082016001600160401b03811183821017610b24575b60405281610120600091828152826020820152826040820152610afc610a82565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b2c61088e565b610adb565b60405190610b3e82610903565b60008252565b60405190610b51826108cd565b6000606083828152826020820152604051610b6b81610903565b83815260408201520152565b60405190610b84826108a5565b81600081526020610b93610b44565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610bb957565b6109b2610b98565b604051610100810191906001600160401b03831181841017610c22575b826040528092610bed81610903565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610b93610a82565b610c2a61088e565b610bde565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109b282610c4f565b9080601f830112156101b057604091825192610c7f84610903565b83606093848401938185116101b057915b848310610ca05750505050505090565b85838303126101b05783518691610cb6826108e8565b84518252602091828601518382015286860151610cd281610c4f565b87820152815201920191610c90565b6101c0818303126101b0576101a0610d9291610cfb610a23565b93610d0582610c3b565b8552610d1360208301610c3b565b602086015260408201516040860152610d2e60608301610c3b565b606086015260808201516080860152610d4960a08301610c59565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610d7c61012091828401610c64565b9085015261018081015161014085015201610c59565b61016082015290565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015610df8575b60408501526020810151151582850152604081015151608085015201511515910152565b610e00610b98565b610dd4565b516003811015610e125790565b610e1a610b98565b90565b60405190610e2a82610903565b8160005b60208110610e3a575050565b602090610e45610a82565b8184015201610e2e565b60405190610e5c8261091e565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610e9f610e1d565b6101208201520152565b6001600160a01b039091169052565b906001811015610ec95760051b0190565b634e487b7160e01b600052603260045260246000fd5b90610ee8610bc1565b610ef66005600054146114f1565b610efe610978565b610f12602091828082518301019101610ce1565b91610f2a610f256103f360045460ff1690565b611511565b816040957f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f961875180610f5d843383610da8565b0390a1610f75815180159081156113b7575b50611531565b01610f808151610e05565b610f8981610baf565b61109d575050926110236109b294610fa13415611631565b60008180860196610fc3610fbe610fb88a51610c2f565b3361174f565b611651565b8551600081527f807b1a21f9e5a1722d0467c3c78df82f2a026fc69ef0889e84a2018bc21c659c9080602081015b0390a1015261101b611001610e4f565b9561101561100f8751610c2f565b88610ea9565b51610c2f565b908501610ea9565b808201519083015261104461103b6060830151610c2f565b60608401610ea9565b6080810151608083015261106761105e60a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e08301524361010083015261012080820151908301526101408091015190820152611cad565b60016110ac8297939751610e05565b6110b581610baf565b0361132957819051015185526110dd6110d66110d18551610c2f565b610c2f565b3314611591565b6101009081840151906110f760c0860192835110156115b1565b8651519261110b60e08701948551906113da565b9785810193898552838801998a51109961112a8584019b8c9015159052565b8a511561131d5761113e86518251906113fc565b60608401525b8251516060840151611155916113fc565b608084019081529561116734156115d1565b888a019b8c5161117690610c2f565b885161118291336117ba565b61118b906115f1565b835143111561119990611611565b5115156000146109b29c6112609c60606111e66112fc9c61126e9661126696611310575188516111c8916113fc565b60a08b01525b516111e08a515160a08c0151906113fc565b906113da565b9761120460e060c083019a808c528951111592019182519015159052565b8d8951908251015286518b825101527f0f0aa3f0135c9a727aa4067798f89a7e06793daf097a38c3391f497bd8393de961124482518d51918291826107a6565b0390a1519101526110158c611257610e4f565b9e8f9151610c2f565b90610ea9565b898c01610ea9565b51848a015261128c61128360608a0151610c2f565b60608b01610ea9565b608088015160808a01526112af6112a660a08a0151151590565b151560a08b0152565b5160c08901525160e088015243908701526112f761012094858701519283519485519051019481838201519101511515926112e8610a43565b96875286015284019015159052565b6118bf565b908301526101408091015190820152611cad565b50600060a08b01526111ce565b60006060840152611144565b6002919295506113399051610e05565b61134281610baf565b1461134e575b50505050565b6110236113ae9461135f3415611551565b600060808286019661137c611377610fb88a51610c2f565b611571565b8551600081527f353188529c7f82ea007ebb52f7194263e6108e8c195a0ae38307aee8a62ecd71908060208101610ff1565b38808080611348565b90506001541438610f6f565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116113ef575b82106101b057565b6113f76113c3565b6113e7565b9081039081116114095790565b610e1a6113c3565b1561141857565b60405163100960cb60e01b815260106004820152602490fd5b1561143857565b60405163100960cb60e01b815260116004820152602490fd5b1561145857565b60405163100960cb60e01b815260126004820152602490fd5b1561147857565b60405163100960cb60e01b815260136004820152602490fd5b1561149857565b60405163100960cb60e01b815260146004820152602490fd5b156114b857565b60405163100960cb60e01b8152600a6004820152602490fd5b156114d857565b60405163100960cb60e01b815260096004820152602490fd5b156114f857565b60405163100960cb60e01b815260156004820152602490fd5b1561151857565b60405163100960cb60e01b815260166004820152602490fd5b1561153857565b60405163100960cb60e01b815260176004820152602490fd5b1561155857565b60405163100960cb60e01b8152601f6004820152602490fd5b1561157857565b60405163100960cb60e01b815260206004820152602490fd5b1561159857565b60405163100960cb60e01b8152601a6004820152602490fd5b156115b857565b60405163100960cb60e01b8152601b6004820152602490fd5b156115d857565b60405163100960cb60e01b8152601c6004820152602490fd5b156115f857565b60405163100960cb60e01b8152601d6004820152602490fd5b1561161857565b60405163100960cb60e01b8152601e6004820152602490fd5b1561163857565b60405163100960cb60e01b815260186004820152602490fd5b1561165857565b60405163100960cb60e01b815260196004820152602490fd5b1561167857565b60405163100960cb60e01b815260216004820152602490fd5b1561169857565b60405163100960cb60e01b815260226004820152602490fd5b156116b857565b60405163100960cb60e01b815260236004820152602490fd5b156116d857565b60405163100960cb60e01b815260266004820152602490fd5b156116f857565b60405163100960cb60e01b815260276004820152602490fd5b1561171857565b602460405163100960cb60e01b8152816004820152fd5b1561173657565b60405163100960cb60e01b815260256004820152602490fd5b6000610e1a928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526117938161093a565b5193165af16117aa6117a36117fd565b809261185f565b506020808251830101910161184a565b600091610e1a9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526117938161093a565b3d15611845573d906001600160401b038211611838575b6040519161182c601f8201601f191660200184610955565b82523d6000602084013e565b61184061088e565b611814565b606090565b908160209103126101b05751610e1a81610c4f565b156118675790565b80511561187657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156118975790565b8051156118a657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906118c9610e1d565b9260005b600181106118db5750508252565b806118e860019284610eb8565b516118f38288610eb8565b526118fe8187610eb8565b50600019811461190f575b016118cd565b6119176113c3565b611909565b9190611926610e1d565b9260005b600181106119385750508252565b8061194560019284610eb8565b516119508288610eb8565b5261195b8187610eb8565b50600019811461196c575b0161192a565b6119746113c3565b611966565b506040513d6000823e3d90fd5b818110611991575050565b60008155600101611986565b6119a8600254610854565b806119b05750565b601f81116001146119c357506000600255565b6002600052611a0890601f0160051c600080516020612851833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611986565b6000602081208160025555565b6040519061018082016001600160401b03811183821017611a88575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611a77610e1d565b610120820152826101408201520152565b611a9061088e565b611a31565b6000915b60018310611aa657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611a99565b6109b2909291926101a06101606101c0830195611af3848251610d9b565b611b0560208201516020860190610d9b565b60408101516040850152611b2160608201516060860190610d9b565b60808101516080850152611b3e60a082015160a086019015159052565b60c081015160c085015260e081015160e08501526101008082015190850152611b706101208083015190860190611a95565b61014081015161018085015201511515910152565b90601f8211611b92575050565b6109b29160026000526020600020906020601f840160051c83019310611bc0575b601f0160051c0190611986565b9091508190611bb3565b80519091906001600160401b038111611ca0575b611bf281611bed600254610854565b611b85565b602080601f8311600114611c2e5750819293600092611c23575b50508160011b916000199060031b1c191617600255565b015190503880611c0c565b6002600052601f19831694909190600080516020612851833981519152926000905b878210611c88575050836001959610611c6f575b505050811b01600255565b015160001960f88460031b161c19169055388080611c64565b80600185968294968601518155019501930190611c50565b611ca861088e565b611bde565b611cb5610b31565b60e082018051604084018051919091118352919261010080820180519560c0840196875111600090600014611eb95750805115155b15611de4575093611ddf936109b29693611daf93611dd197611d0a611a15565b96611d1e611d188551610c2f565b89610ea9565b611d37611d2e6020860151610c2f565b60208a01610ea9565b85516040890152611d57611d4e6060860151610c2f565b60608a01610ea9565b60808401516080890152611d7a611d7160a0860151151590565b151560a08a0152565b5160c0880152835160e08801525190860152610120818101519086015261014090810151908501525190511115610160830152565b611db96005600055565b611dc243600155565b60405192839160208301611ad5565b03601f198101835282610955565b611bca565b935050509150611e689250611df98151151590565b15611eaa57611e0b6060830151610c2f565b6000808080610140870151818115611ea1575b6001600160a01b0396871690f115611e94575b611e48611e416020850151610c2f565b9251151590565b15611e7e57610120611e5a8451610c2f565b935b01515151921690611ebe565b60008055611e766000600155565b6109b261199d565b610120611e8e6060850151610c2f565b93611e5c565b611e9c611979565b611e31565b506108fc611e1e565b611eb48251610c2f565b611e0b565b611cea565b60009190611f1393838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152611efc816108cd565b5193165af16117aa611f0c6117fd565b809261188f565b156101b057565b60405190611f27826108a5565b81600081526020610b93610a82565b60021115610bb957565b91908260809103126101b057604051611f58816108cd565b6060808294611f6681610c3b565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b05761203c6101e0611f9d610a62565b93611fa781610c3b565b8552611fb560208201610c3b565b6020860152611fc78460408301611f40565b604086015260c0810151606086015260e08101516080860152610100611fee818301610c59565b60a087015261012090612002828401610c3b565b60c088015261202861014096612019888601610c59565b60e08a01526101608501610c64565b908701526101c08201519086015201610c59565b9082015290565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015612089575b8285015260208101511515606085015201511515910152565b612091610b98565b612070565b516002811015610e125790565b604051906120b0826108cd565b60006060838281528260208201528260408201520152565b604051906120d58261091e565b816101406000918281528260208201526120ed6120a3565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610e9f610e1d565b9061212e600760005414611671565b612136610978565b9161214b602093848082518301019101611f83565b9061216361215e6103f360045460ff1690565b611691565b836040917fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa835180612196843383612043565b0390a16121ae815180159081156123ee575b506116b1565b016121b98151612096565b6121c281611f36565b6122a3575061222d6109b2946121d83415611711565b600083828601966121f46121ef610fb88a51610c2f565b61172f565b8151600081527f7e2a311a441f7229078d840da112f46fbf989e5b4982e1fa137a5369972a830190602090a1015261101b6110016120c8565b80820151908301526060810151606083015260808101516080830152600060a083015261226961226060c0830151610c2f565b60c08401610ea9565b61228261227960e0830151151590565b151560e0840152565b61010043818401528101519061012091828401520151610140820152612535565b6122b260019195949551612096565b6122bb81611f36565b146122c65750505050565b6113ae936123d8916122d834156116d1565b6123d38585019561233b60a06122ee8951610c2f565b9561230861230360608b0198895190336117ba565b6116f1565b8551600181527f26a3a08b70de3687de302893b53fcb62192538c8863ce8ef9b1ce56b6ca4294a90602090a10160019052565b61236561235d6123496120c8565b986110156123578a51610c2f565b8b610ea9565b828901610ea9565b8286015183880152835160608801526080860151608088015261239761238e60a0880151151590565b151560a0890152565b6123a43360c08901610ea9565b600160e088015261010043818901528601519283519485519051019481838201519101511515926112e8610a43565b61191c565b9061012091828401520151610140820152612535565b905060015414386121a8565b604051906124078261091e565b8161014060009182815282602082015261241f6120a3565b60408201528260608201528260808201528260a08201528260c08201528260e082015261244a610e1d565b610100820152826101208201520152565b6109b2909291926101e0610200820194612476838251610d9b565b61248860208201516020850190610d9b565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a0810151906124e6610100928386019015159052565b60c08101516124fb6101209182870190610d9b565b61252360e083015193612515610140958689019015159052565b830151610160870190611a95565b8101516101c085015201511515910152565b60e0810180511515801561276a5760005b1561261c575050611dd1611ddf6109b2926125fa6125626123fa565b916125766125708251610c2f565b84610ea9565b61258f6125866020830151610c2f565b60208501610ea9565b6040810151604084015260608101516060840152608081015160808401526125ba60a0840160019052565b6125d36125ca60c0830151610c2f565b60c08501610ea9565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b6126046007600055565b61260d43600155565b6040519283916020830161245b565b1561271d578160206109b29301916112fc6126378451610c2f565b6126418451610c2f565b926126606101209485870193845151519160018060a01b031690611ebe565b61268b61268261266e610e4f565b9761101561267c8951610c2f565b8a610ea9565b60208801610ea9565b608085015160408701526126ae6126a560c0870151610c2f565b60608801610ea9565b610100906126c961238e83880192835160808b015251151590565b6126dc81516040808901510151906113da565b60c0880152600060e08801525190860152518051906112f7604060208401519301511515612708610a43565b93600085526020850152604084019015159052565b5060008080836101406127346110d1849751610c2f565b91015190828215612761575bf1156127545760008055611e766000600155565b61275c611979565b611e68565b506108fc612740565b60a08301511515612546565b60209060631901126101b0576040519061278f82610903565b6064358252565b60209060031901126101b057604051906127af82610903565b6004358252565b610180818303126101b0576040519161016091906128299060e085016001600160401b03811186821017612843575b6040526127f183610c3b565b85526127ff60208401610c3b565b60208601526040830151604086015261281b8160608501611f40565b606086015260e08301610c64565b608084015261014081015160a0840152015160c082015290565b61284b61088e565b6127e556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 12224,
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
