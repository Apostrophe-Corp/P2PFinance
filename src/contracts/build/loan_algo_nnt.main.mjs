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
      const [v493, v494, v495, v496, v501, v503, v504] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v493, v494, v504, v519, v620, v650, v651, v658, v659, v681] = svs;
      return (await ((async () => {
        
        
        return v651;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v493, v494, v495, v496, v501, v503, v504] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v493, v494, v504, v519, v620, v650, v651, v658, v659, v681] = svs;
      return (await ((async () => {
        
        
        return v620;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545] = svs;
      return (await ((async () => {
        
        
        return v545;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v493, v494, v495, v496, v501, v503, v504] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v493, v494, v504, v519, v620, v650, v651, v658, v659, v681] = svs;
      return (await ((async () => {
        
        
        return v681;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545] = svs;
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
      5: [ctc0, ctc1, ctc2, ctc0, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
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
    Borrower_close0_89: ctc6,
    Lender_lend0_89: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v471 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v472 = [v471];
  const v478 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:40:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:38:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v479 = v478.address;
  const v480 = v478.amount;
  const v481 = v478.collateral;
  const v482 = v478.maturation;
  const v483 = v478.principal;
  const v484 = v478.tokCollateral;
  const v491 = stdlib.lt(v483, v480);
  stdlib.assert(v491, {
    at: './src/contracts/loan_algo_nnt.rsh:42:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:38:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v492 = {
    address: v479,
    amount: v480,
    maturation: v482,
    principal: v483
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v484, v481, v492],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v494, v495, v496], secs: v498, time: v497, didSend: v43, from: v493 } = txn1;
      
      const v499 = v472[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0')];
      const v500 = stdlib.Array_set(v499, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'));
      const v501 = stdlib.Array_set(v472, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'), v500);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v494
        });
      ;
      const v503 = v496.principal;
      const v504 = v496.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v494, v495, v496], secs: v498, time: v497, didSend: v43, from: v493 } = txn1;
  const v499 = v472[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0')];
  const v500 = stdlib.Array_set(v499, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'));
  const v501 = stdlib.Array_set(v472, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'), v500);
  ;
  ;
  const v503 = v496.principal;
  const v504 = v496.amount;
  const v505 = stdlib.lt(v503, v504);
  stdlib.assert(v505, {
    at: './src/contracts/loan_algo_nnt.rsh:45:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v493, v494, v495, v496, v501, v503, v504],
    evt_cnt: 0,
    funcNum: 1,
    lct: v497,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), [[v495, v494]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v508, time: v507, didSend: v53, from: v506 } = txn2;
      
      ;
      const v509 = v501[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v510 = v509[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v511 = stdlib.add(v510, v495);
      const v513 = stdlib.Array_set(v509, '0', v511);
      const v514 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v513);
      sim_r.txns.push({
        amt: v495,
        kind: 'to',
        tok: v494
        });
      
      const v518 = true;
      const v519 = v493;
      const v520 = false;
      const v521 = v507;
      const v527 = v514;
      const v528 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:36:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v541 = v520 ? false : v518;
        
        return v541;})()) {
        const v545 = v520 ? false : v518;
        sim_r.isHalt = false;
        }
      else {
        const v620 = v520 ? false : v518;
        if (v520) {
          const v647 = stdlib.sub(v528, v528);
          sim_r.txns.push({
            kind: 'from',
            to: v493,
            tok: undefined /* Nothing */
            });
          const v649 = v496.maturation;
          const v650 = stdlib.safeAdd(v521, v649);
          const v651 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v652 = v521;
          const v658 = v527;
          const v659 = v647;
          
          if (await (async () => {
            const v676 = stdlib.le(v652, v650);
            const v678 = stdlib.lt(v651, v504);
            const v679 = v676 ? v678 : false;
            
            return v679;})()) {
            const v681 = stdlib.ge(v651, v504);
            sim_r.isHalt = false;
            }
          else {
            const v757 = v658[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v758 = v757[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v760 = stdlib.lt(v651, v504);
            const v761 = v760 ? v519 : v493;
            sim_r.txns.push({
              kind: 'from',
              to: v761,
              tok: v494
              });
            const v774 = v760 ? v493 : v519;
            sim_r.txns.push({
              kind: 'from',
              to: v774,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v494
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v622 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          const v623 = v622[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v493,
            tok: v494
            });
          sim_r.txns.push({
            kind: 'from',
            to: v493,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v494
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
    tys: [ctc0, ctc2, ctc1, ctc4, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v53, from: v506 } = txn2;
  ;
  const v509 = v501[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v510 = v509[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v511 = stdlib.add(v510, v495);
  const v513 = stdlib.Array_set(v509, '0', v511);
  const v514 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v513);
  ;
  const v515 = stdlib.addressEq(v493, v506);
  stdlib.assert(v515, {
    at: './src/contracts/loan_algo_nnt.rsh:47:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v507), {
    at: './src/contracts/loan_algo_nnt.rsh:48:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:48:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:48:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:48:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:48:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v518 = true;
  let v519 = v493;
  let v520 = false;
  let v521 = v507;
  let v527 = v514;
  let v528 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:36:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v541 = v520 ? false : v518;
    
    return v541;})()) {
    const v545 = v520 ? false : v518;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v566], secs: v568, time: v567, didSend: v154, from: v565 } = txn4;
    switch (v566[0]) {
      case 'Borrower_close0_89': {
        const v569 = v566[1];
        undefined /* setApiDetails */;
        ;
        const v579 = null;
        await txn4.getOutput('Borrower_close', 'v579', ctc5, v579);
        const cv518 = false;
        const cv519 = v519;
        const cv520 = v520;
        const cv521 = v567;
        const cv527 = v527;
        const cv528 = v528;
        
        v518 = cv518;
        v519 = cv519;
        v520 = cv520;
        v521 = cv521;
        v527 = cv527;
        v528 = cv528;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_89': {
        const v594 = v566[1];
        undefined /* setApiDetails */;
        const v602 = stdlib.add(v528, v503);
        ;
        const v612 = true;
        await txn4.getOutput('Lender_lend', 'v612', ctc8, v612);
        const cv518 = v518;
        const cv519 = v565;
        const cv520 = true;
        const cv521 = v567;
        const cv527 = v527;
        const cv528 = v602;
        
        v518 = cv518;
        v519 = cv519;
        v520 = cv520;
        v521 = cv521;
        v527 = cv527;
        v528 = cv528;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v620 = v520 ? false : v518;
  if (v520) {
    const v647 = stdlib.sub(v528, v528);
    ;
    const v649 = v496.maturation;
    const v650 = stdlib.safeAdd(v521, v649);
    let v651 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
    let v652 = v521;
    let v658 = v527;
    let v659 = v647;
    
    let txn4 = txn3;
    while (await (async () => {
      const v676 = stdlib.le(v652, v650);
      const v678 = stdlib.lt(v651, v504);
      const v679 = v676 ? v678 : false;
      
      return v679;})()) {
      const v681 = stdlib.ge(v651, v504);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v712], secs: v714, time: v713, didSend: v361, from: v711 } = txn5;
      undefined /* setApiDetails */;
      const v716 = v712[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v717 = stdlib.addressEq(v711, v493);
      stdlib.assert(v717, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v719 = stdlib.safeAdd(v716, v651);
      const v721 = stdlib.gt(v719, v504);
      let v722;
      if (v721) {
        const v725 = stdlib.safeSub(v719, v504);
        v722 = v725;
        }
      else {
        v722 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v726 = stdlib.safeSub(v716, v722);
      const v728 = stdlib.add(v659, v726);
      ;
      let v735;
      if (v721) {
        const v738 = stdlib.safeSub(v719, v504);
        v735 = v738;
        }
      else {
        v735 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v739 = stdlib.safeSub(v716, v735);
      const v741 = stdlib.safeAdd(v651, v739);
      const v743 = stdlib.ge(v741, v504);
      const v745 = [v743, v741, v504];
      await txn5.getOutput('Borrower_repay', 'v745', ctc10, v745);
      const cv651 = v741;
      const cv652 = v713;
      const cv658 = v658;
      const cv659 = v728;
      
      v651 = cv651;
      v652 = cv652;
      v658 = cv658;
      v659 = cv659;
      
      txn4 = txn5;
      continue;
      
      }
    const v757 = v658[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v758 = v757[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v760 = stdlib.lt(v651, v504);
    const v761 = v760 ? v519 : v493;
    ;
    const v774 = v760 ? v493 : v519;
    ;
    return;
    }
  else {
    const v622 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
    const v623 = v622[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_89: ctc7,
    Lender_lend0_89: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v548 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:73:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to "runBorrower_close0_89" (defined at: ./src/contracts/loan_algo_nnt.rsh:73:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v552 = ['Borrower_close0_89', v548];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545, v552],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:73:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v566], secs: v568, time: v567, didSend: v154, from: v565 } = txn1;
      
      switch (v566[0]) {
        case 'Borrower_close0_89': {
          const v569 = v566[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v579 = null;
          const v580 = await txn1.getOutput('Borrower_close', 'v579', ctc9, v579);
          
          const v1190 = false;
          const v1191 = v519;
          const v1192 = v520;
          const v1194 = v527;
          const v1195 = v528;
          const v1196 = v520 ? false : false;
          if (v1196) {
            sim_r.isHalt = false;
            }
          else {
            if (v520) {
              const v1199 = stdlib.sub(v528, v528);
              sim_r.txns.push({
                kind: 'from',
                to: v493,
                tok: undefined /* Nothing */
                });
              const v1200 = v496.maturation;
              const v1201 = stdlib.safeAdd(v567, v1200);
              const v1238 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
              const v1240 = v527;
              const v1241 = v1199;
              const v1242 = stdlib.le(v567, v1201);
              const v1243 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
              const v1244 = v1242 ? v1243 : false;
              if (v1244) {
                const v1245 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
                sim_r.isHalt = false;
                }
              else {
                const v1247 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1248 = v1247[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1250 = v1243 ? v519 : v493;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1250,
                  tok: v494
                  });
                const v1251 = v1243 ? v493 : v519;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1251,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v494
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1236 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
              const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v493,
                tok: v494
                });
              sim_r.txns.push({
                kind: 'from',
                to: v493,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v494
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Lender_lend0_89': {
          const v594 = v566[1];
          
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
  const {data: [v566], secs: v568, time: v567, didSend: v154, from: v565 } = txn1;
  switch (v566[0]) {
    case 'Borrower_close0_89': {
      const v569 = v566[1];
      undefined /* setApiDetails */;
      ;
      const v579 = null;
      const v580 = await txn1.getOutput('Borrower_close', 'v579', ctc9, v579);
      if (v154) {
        stdlib.protect(ctc9, await interact.out(v569, v580), {
          at: './src/contracts/loan_algo_nnt.rsh:73:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:73:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:74:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:73:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:73:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1190 = false;
      const v1191 = v519;
      const v1192 = v520;
      const v1194 = v527;
      const v1195 = v528;
      const v1196 = v520 ? false : false;
      if (v1196) {
        return;
        }
      else {
        if (v520) {
          const v1199 = stdlib.sub(v528, v528);
          ;
          const v1200 = v496.maturation;
          const v1201 = stdlib.safeAdd(v567, v1200);
          const v1238 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1240 = v527;
          const v1241 = v1199;
          const v1242 = stdlib.le(v567, v1201);
          const v1243 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
          const v1244 = v1242 ? v1243 : false;
          if (v1244) {
            const v1245 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
            return;
            }
          else {
            const v1247 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1248 = v1247[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1250 = v1243 ? v519 : v493;
            ;
            const v1251 = v1243 ? v493 : v519;
            ;
            return;
            }}
        else {
          const v1236 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_89': {
      const v594 = v566[1];
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
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v493, v494, v504, v519, v620, v650, v651, v658, v659, v681] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v682 = ctc.selfAddress();
  const v684 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v685 = v684[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v687 = stdlib.addressEq(v682, v493);
  stdlib.assert(v687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v689 = stdlib.safeAdd(v685, v651);
  const v691 = stdlib.gt(v689, v504);
  
  let v706;
  if (v691) {
    const v709 = stdlib.safeSub(v689, v504);
    v706 = v709;
    }
  else {
    v706 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v710 = stdlib.safeSub(v685, v706);
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v504, v519, v620, v650, v651, v658, v659, v681, v684],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v710, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v712], secs: v714, time: v713, didSend: v361, from: v711 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v716 = v712[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v719 = stdlib.safeAdd(v716, v651);
      const v721 = stdlib.gt(v719, v504);
      let v722;
      if (v721) {
        const v725 = stdlib.safeSub(v719, v504);
        v722 = v725;
        }
      else {
        v722 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v726 = stdlib.safeSub(v716, v722);
      const v728 = stdlib.add(v659, v726);
      sim_r.txns.push({
        amt: v726,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v735;
      if (v721) {
        const v738 = stdlib.safeSub(v719, v504);
        v735 = v738;
        }
      else {
        v735 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v739 = stdlib.safeSub(v716, v735);
      const v741 = stdlib.safeAdd(v651, v739);
      const v743 = stdlib.ge(v741, v504);
      const v745 = [v743, v741, v504];
      const v746 = await txn1.getOutput('Borrower_repay', 'v745', ctc7, v745);
      
      const v1314 = v741;
      const v1316 = v658;
      const v1317 = v728;
      const v1318 = stdlib.le(v713, v650);
      const v1319 = stdlib.lt(v741, v504);
      const v1320 = v1318 ? v1319 : false;
      if (v1320) {
        sim_r.isHalt = false;
        }
      else {
        const v1323 = v658[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1324 = v1323[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1326 = v1319 ? v519 : v493;
        sim_r.txns.push({
          kind: 'from',
          to: v1326,
          tok: v494
          });
        const v1327 = v1319 ? v493 : v519;
        sim_r.txns.push({
          kind: 'from',
          to: v1327,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v494
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v712], secs: v714, time: v713, didSend: v361, from: v711 } = txn1;
  undefined /* setApiDetails */;
  const v716 = v712[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
  const v717 = stdlib.addressEq(v711, v493);
  stdlib.assert(v717, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v719 = stdlib.safeAdd(v716, v651);
  const v721 = stdlib.gt(v719, v504);
  let v722;
  if (v721) {
    const v725 = stdlib.safeSub(v719, v504);
    v722 = v725;
    }
  else {
    v722 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v726 = stdlib.safeSub(v716, v722);
  const v728 = stdlib.add(v659, v726);
  ;
  let v735;
  if (v721) {
    const v738 = stdlib.safeSub(v719, v504);
    v735 = v738;
    }
  else {
    v735 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v739 = stdlib.safeSub(v716, v735);
  const v741 = stdlib.safeAdd(v651, v739);
  const v743 = stdlib.ge(v741, v504);
  const v745 = [v743, v741, v504];
  const v746 = await txn1.getOutput('Borrower_repay', 'v745', ctc7, v745);
  if (v361) {
    stdlib.protect(ctc8, await interact.out(v712, v746), {
      at: './src/contracts/loan_algo_nnt.rsh:101:31:application',
      fs: ['at ./src/contracts/loan_algo_nnt.rsh:101:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:112:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:110:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:110:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:110:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1314 = v741;
  const v1316 = v658;
  const v1317 = v728;
  const v1318 = stdlib.le(v713, v650);
  const v1319 = stdlib.lt(v741, v504);
  const v1320 = v1318 ? v1319 : false;
  if (v1320) {
    return;
    }
  else {
    const v1323 = v658[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1324 = v1323[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1326 = v1319 ? v519 : v493;
    ;
    const v1327 = v1319 ? v493 : v519;
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_89: ctc7,
    Lender_lend0_89: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v556 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:63:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to "runLender_lend0_89" (defined at: ./src/contracts/loan_algo_nnt.rsh:63:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v560 = ['Lender_lend0_89', v556];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v496, v503, v504, v518, v519, v520, v527, v528, v545, v560],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v503, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v566], secs: v568, time: v567, didSend: v154, from: v565 } = txn1;
      
      switch (v566[0]) {
        case 'Borrower_close0_89': {
          const v569 = v566[1];
          
          break;
          }
        case 'Lender_lend0_89': {
          const v594 = v566[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v602 = stdlib.add(v528, v503);
          sim_r.txns.push({
            amt: v503,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v612 = true;
          const v613 = await txn1.getOutput('Lender_lend', 'v612', ctc4, v612);
          
          const v1391 = v565;
          const v1398 = false;
          const v1399 = stdlib.sub(v602, v602);
          sim_r.txns.push({
            kind: 'from',
            to: v493,
            tok: undefined /* Nothing */
            });
          const v1400 = v496.maturation;
          const v1401 = stdlib.safeAdd(v567, v1400);
          const v1438 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1440 = v527;
          const v1441 = v1399;
          const v1442 = stdlib.le(v567, v1401);
          const v1443 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
          const v1444 = v1442 ? v1443 : false;
          if (v1444) {
            const v1445 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
            sim_r.isHalt = false;
            }
          else {
            const v1447 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1448 = v1447[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1450 = v1443 ? v565 : v493;
            sim_r.txns.push({
              kind: 'from',
              to: v1450,
              tok: v494
              });
            const v1451 = v1443 ? v493 : v565;
            sim_r.txns.push({
              kind: 'from',
              to: v1451,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v494
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
  const {data: [v566], secs: v568, time: v567, didSend: v154, from: v565 } = txn1;
  switch (v566[0]) {
    case 'Borrower_close0_89': {
      const v569 = v566[1];
      return;
      break;
      }
    case 'Lender_lend0_89': {
      const v594 = v566[1];
      undefined /* setApiDetails */;
      const v602 = stdlib.add(v528, v503);
      ;
      const v612 = true;
      const v613 = await txn1.getOutput('Lender_lend', 'v612', ctc4, v612);
      if (v154) {
        stdlib.protect(ctc9, await interact.out(v594, v613), {
          at: './src/contracts/loan_algo_nnt.rsh:63:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:63:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:63:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:67:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:66:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:66:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1391 = v565;
      const v1398 = false;
      const v1399 = stdlib.sub(v602, v602);
      ;
      const v1400 = v496.maturation;
      const v1401 = stdlib.safeAdd(v567, v1400);
      const v1438 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
      const v1440 = v527;
      const v1441 = v1399;
      const v1442 = stdlib.le(v567, v1401);
      const v1443 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
      const v1444 = v1442 ? v1443 : false;
      if (v1444) {
        const v1445 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v504);
        return;
        }
      else {
        const v1447 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1448 = v1447[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1450 = v1443 ? v565 : v493;
        ;
        const v1451 = v1443 ? v493 : v565;
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
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEFBAcgCCjZ9qi8Btfx250HnpLWlQi+86bXA/augPQDoI0GJgMBAAEBACI1ADEYQQV9KmRJIls1ASEGWzUCNhoAF0lBAK8iNQQjNQZJIQgMQAA8SSEJDEAAH0khCgxAAA4hChJEKjX/KDT/UEIAoiEJEkQ2GgFCAVAhCBJENAEkEkQoZEk1A1dZCDUHQgUYSSELDEAAK0khDAxAAA4hDBJEKjX/KTT/UEIAZiELEkQ0ASQSRChkSTUDV3oBNQdCBOaBj8bFKhJENAFJIQQMQAAUIQQSRChkKWRQSTUDV6sBNQdCBMIkEkQoZEk1A1dQATUHQgSyNhoCFzUENhoDNhoBF0klDEABpEkkDEAAuiQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBVs1/lcoODX9gWBbNfyBaFs1+1eSETX6gaMBWzX5STUFNfiABLGZIkU0+FCwNPgiVUAALYAIAAAAAAAAAkOwKjUHNP80/jT9NPw0+yI0A1dxIDQDV5EBFzIGNPo0+UICQTT8iAQzgAkAAAAAAAACZAGwKTUHNP80/jT9NPw0+zQDV3ABFzEAIzIGNPo0+TT8CEICDkgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQdbNf6BWVs1/Uk1BTX8gATOPHBmNPxQsDT8FzX7MQA0/xJENPs0/QhJNfo0/g1JNflBAAo0+jT+CTX4QgADIjX4NPs0+Ak19zT3iAOaNPlBAAo0+jT+CTX2QgADIjX2NP00+zT2CQg19YAIAAAAAAAAAuk09TT+DxZRBwg09RZQNP4WUFCwNPU0/g8WUQcINPUWUDT+FlA1BzT/NAMhBVs0/jQDVzAgNANXUAEXNAOBUVs09TIGNANXYRE0A4FyWzT3CEIB/kkjDEAAeSMSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBVs1/iEHWzX9V2gRNfyABJqLkXSwNPxXABE1+zT9NP6IAu00/zEAEkQ0/zT+NANXMDg0A4F5WzQDgYEBWyM0/yIyBjT8NPtJIls0/QgWXABcACJCAKtIIQ2IApwiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQZbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBq9cAFwANfshDYgCT7EisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBVs1+TT6NPkMRDEANP8WUDT+FlA0/VA0+1A0+hZQNPkWUChLAVcAf2cpSwFXfwpnSCM1ATIGNQJCAaU1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwUNPoQQQA7NPU09hZQNPdQNPgWUDT5FlApUDT7UChQNP5QNP8WUClQKEsBVwB/ZylLAVd/LWdIIQQ1ATIGNQJCAUs0/EEAMrEisgE0/7III7IQNPWyB7M09TT2NPk0+zT8FDT6EDT9NPchB1sIIjT9NP40/0kJQgBDsSKyATT+VwARIluyEiWyEDT1shQ09rIRs7EisgE0/7III7IQNPWyB7OxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAtjX/Nf41/TX8Nfs1+jX5Nfg19zX2NPw0+Aw19TT9NPsONPUQQQBDNPw0+A819DT2NPcWUDT4FlA0+VA0+hZRBwhQNPsWUDT8FlA0/lA0/xZQNPQWUQcIUChLAVcAe2dIJDUBMgY1AkIAaLEisgE0/lcAESJbshIlshA09jT5NPVNshQ097IRs7EisgE0/7III7IQNPk09jT1TbIHs7EisgEishIlshAyCbIVMgqyFDT3shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"internalType":"struct T11","name":"v1473","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_89","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_89","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v579","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v612","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v745","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1464","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1475","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1487","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_89","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_89","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1493","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200298138819003601f8101601f191683016001600160401b03811184821017620004eb578392829160405283398101039060e08212620005ef576080604051926200004d84620005f4565b825184526200005f6020840162000648565b602085015260408301516040850152605f190112620005ef5760c0604051916200008983620005f4565b620000976060820162000648565b83526080810151602084015260a0810151604084015201516060820152606082015243600355600060c0604051620000cf8162000610565b828152826020820152620000e26200065d565b60408201528260608201528260808201528260a08201520152604051906200010a826200062c565b620001146200065d565b825260208201620001246200067e565b8152620001306200067e565b604084015260ff60045416620005d6577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001a160608601516080830190620006c5565ba181518015908115620005c9575b5015620005b057600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620001ee836200062c565b6000835260208301526040820152620002066200067e565b9160005b60018110620005605750508152604083015234620005475760608101516020606082015191015111156200052e57606060209160408051946200024d8662000610565b6000865260008587015260008287015281516200026a81620005f4565b60008152600086820152600083820152600085820152848701526200028e6200067e565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200032360608201516080840190620006c5565b6080810151600061010084015b60018210620005015760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620004eb5760405280516001600160401b038111620004eb57600254600181811c91168015620004e0575b6020821014620004ca57601f811162000460575b50602091601f8211600114620003f657918192600092620003ea575b50508160011b916000199060031b1c1916176002555b60405161226790816200071a8239f35b015190508280620003c4565b601f19821692600260005260206000209160005b85811062000447575083600195106200042d575b505050811b01600255620003da565b015160001960f88460031b161c191690558280806200041e565b919260206001819286850151815501940192016200040a565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004bf575b601f0160051c01905b818110620004b25750620003a8565b60008155600101620004a3565b90915081906200049a565b634e487b7160e01b600052602260045260246000fd5b90607f169062000394565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000330565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b6200056c8183620006f1565b51620005798286620006f1565b52620005868185620006f1565b5060001981146200059a576001016200020a565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b90506001541438620001af565b60405163100960cb60e01b8152600b6004820152602490fd5b600080fd5b608081019081106001600160401b03821117620004eb57604052565b60e081019081106001600160401b03821117620004eb57604052565b606081019081106001600160401b03821117620004eb57604052565b51906001600160a01b0382168203620005ef57565b604051906200066c826200062c565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004eb576040528260005b828110620006ae57505050565b8290620006ba6200065d565b8184015201620006a1565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007035760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780633c496554146100ff57806340410cd5146100f65780634cd87555146100ed578063573b8510146100e4578063823c0a8d146100db57806383230757146100d25780638dca4147146100c957806394134348146100c0578063ab53f2c6146100b7578063ea121ca3146100ae5763f9d773330361000e576100a96106e0565b61000e565b506100a9610661565b506100a96105ec565b506100a9610543565b506100a96104b8565b506100a9610499565b506100a961044b565b506100a961026d565b506100a96101f0565b506100a9610198565b506100a961012c565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b5034610127576000366003190112610127576101466109d2565b60056000540361017f57608060209160c061017061016261088b565b858082518301019101610b04565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b506000366003190112610127576020806101b06109d2565b6101e4816101bc610a11565b84810190600082515251151585825101526101d5610a11565b906000825251858201526113bc565b01511515604051908152f35b50346101275760003660031901126101275761020a6109d2565b6005600054036102545760c06102509161012061023761022861088b565b60208082518301019101610b04565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b8152600a6004820152602490fd5b50602080600319360112610127576102836109d2565b50610435610290366120a3565b916102ac6102a76102a360045460ff1690565b1590565b610ba7565b60408051338152845160208201529093610422917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a16102f3600160005414610bc7565b61032161030f61030161088b565b8580825183010191016120c3565b9151801590811561043f575b50610be7565b61032b3415610c07565b8281019261041d608061033e8651610a52565b936103576103528a8301968751903361215d565b610c27565b6103733360018060a01b0361036c8451610a52565b1614610c47565b6103a361039b61038161135b565b9861039561038f8551610a52565b8b610fd4565b51610a52565b858901610fd4565b60608101518988015260a0810151606088015260c0810151828801526103cc60a0880160019052565b6103e26103d98251610a52565b60c08901610fd4565b600060e088015243610100880152015191825193845190510193888282015191015115159161040f610936565b958652850152151587840152565b6121dd565b61012082015260006101408201526119d5565b5160008152602090f35b9050600154143861031b565b50600036600319011261012757602060606104646109d2565b6101e481610470610a11565b85810190600182515251151560408251015261048a610a11565b906000825251868201526113bc565b5034610127576000366003190112610127576020600154604051908152f35b506080366003190112610127576104cd6109d2565b604051906104da826107b7565b6004358252606036602319011261012757604051916104f8836107df565b6024359260028410156101275761053793815260443561051781610a72565b602082015260643561052881610a72565b604082015260208201526113bc565b60405160008152602090f35b50346101275760003660031901126101275761025061059f60a06105656109d2565b60005460078110156105b157600561057d9114610c87565b610590610597608061059061022861088b565b0151151590565b151582840152565b60405190151581529081906020820190565b60076105bd9114610c67565b6105e76101406105dd6105ce61088b565b60208082518301019101610e48565b0151151582840152565b610590565b50346101275760008060031936011261065e57805461060961088b565b906040519283918252602090604082840152835191826040850152815b83811061064757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610626565b80fd5b506040366003190112610127576106766109d2565b60405190610683826107b7565b60043582526020366023190112610127576106b3916040516106a4816107fa565b60243581526020820152610fe3565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b506020366003190112610127576106f5610995565b506102506107016109d2565b60408161075982938351610714816107fa565b845161071f816107fa565b8082526004359052845190610733826107b7565b6000825260208201908651610747816107fa565b60008152825260008352519052610fe3565b01519051918291826106be565b90600182811c92168015610796575b602083101461078057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610775565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176107d257604052565b6107da6107a0565b604052565b606081019081106001600160401b038211176107d257604052565b602081019081106001600160401b038211176107d257604052565b60e081019081106001600160401b038211176107d257604052565b61014081019081106001600160401b038211176107d257604052565b61016081019081106001600160401b038211176107d257604052565b601f909101601f19168101906001600160401b038211908210176107d257604052565b604051906000826002549161089f83610766565b80835260019380851690811561091557506001146108c7575b506108c592500383610868565b565b6002600090815260008051602061223b83398151915294602093509091905b8183106108fd5750506108c59350820101386108b8565b855488840185015294850194879450918301916108e6565b90506108c594506020925060ff191682840152151560051b820101386108b8565b60405190606082016001600160401b038111838210176107d257604052565b6040519061014082016001600160401b038111838210176107d257604052565b6040519061016082016001600160401b038111838210176107d257604052565b60405190606082016001600160401b038111838210176109c5575b60405260006040838281528260208201520152565b6109cd6107a0565b6109b0565b604051906109df82610815565b8160c06000918281528260208201526109f6610995565b60408201528260608201528260808201528260a08201520152565b60405190610a1e826107b7565b81600081526020610a2d610995565b910152565b60021115610a3c57565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361012757565b8015150361012757565b51906108c582610a72565b9080601f8301121561012757604091825192610aa2846107fa565b836060938484019381851161012757915b848310610ac35750505050505090565b85838303126101275783518691610ad9826107df565b84518252602091828601518382015286860151610af581610a72565b87820152815201920191610ab3565b6101808183031261012757610160610b9e91610b87610b21610955565b94610b2b83610a5e565b8652610b3960208401610a5e565b602087015260408301516040870152610b5460608401610a5e565b6060870152610b6560808401610a7c565b608087015260a083015160a087015260c083015160c087015260e08301610a87565b60e085015261014081015161010085015201610a7c565b61012082015290565b15610bae57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610bce57565b60405163100960cb60e01b815260106004820152602490fd5b15610bee57565b60405163100960cb60e01b815260116004820152602490fd5b15610c0e57565b60405163100960cb60e01b815260126004820152602490fd5b15610c2e57565b60405163100960cb60e01b815260136004820152602490fd5b15610c4e57565b60405163100960cb60e01b815260146004820152602490fd5b15610c6e57565b60405163100960cb60e01b815260096004820152602490fd5b15610c8e57565b60405163100960cb60e01b815260086004820152602490fd5b15610cae57565b60405163100960cb60e01b815260156004820152602490fd5b15610cce57565b60405163100960cb60e01b815260166004820152602490fd5b15610cee57565b60405163100960cb60e01b815260176004820152602490fd5b15610d0e57565b60405163100960cb60e01b815260186004820152602490fd5b15610d2e57565b60405163100960cb60e01b815260196004820152602490fd5b15610d4e57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d6e57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d8e57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610dae57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610dce57565b60405163100960cb60e01b8152601d6004820152602490fd5b919082608091031261012757604051608081016001600160401b03811182821017610e3b575b6040526060808294610e1e81610a5e565b845260208101516020850152604081015160408501520151910152565b610e436107a0565b610e0d565b906102008282031261012757610f016101e0610e62610975565b93610e6c81610a5e565b8552610e7a60208201610a5e565b6020860152610e8c8460408301610de7565b604086015260c0810151606086015260e08101516080860152610100610eb3818301610a7c565b60a087015261012090610ec7828401610a5e565b60c0880152610eed61014096610ede888601610a7c565b60e08a01526101608501610a87565b908701526101c08201519086015201610a7c565b9082015290565b60405190610f1582610815565b81600080825280602083015280604083015280606083015280608083015260a082015260c0610a2d610995565b6001600160a01b03169052565b60405190610f5c826107fa565b8160005b60208110610f6c575050565b602090610f77610995565b8184015201610f60565b60405190610f8e82610830565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610fca610f4f565b6101008201520152565b6001600160a01b039091169052565b6108c59161107391610ff3610f08565b61100a6110056102a360045460ff1690565b610ca7565b60408051338152835160208083019190915284015151818301527f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611058600560005414610cc7565b61106061088b565b6020958187808094518301019101610b04565b9361108981518015908115611267575b50610ce7565b6110a561109e6110998751610a52565b610a52565b3314610d07565b01805151948261114e6110be60c088019889519061128a565b9384875261114883890195865110996110dc8c8a019b8c9015159052565b8a511561125c576110f089518851906112ac565b858a01525b611121611108845151878c0151906112ac565b9b61111b8d60608d019e8f523414610d27565b51151590565b156112505761113389518851906112ac565b60808a01525b519151516080890151906112ac565b9061128a565b9461116c60c060a08301978089528651111592019182519015159052565b85518982510152835182825101527f3ed045fa2fc90f4454f41184d6c8935e0a715bc375f8bbf95de94c4cab136c8b6111ab82518451918291826106be565b0390a1519101526111e56111bd610f81565b966111d16111cb8751610a52565b89610fd4565b6111dd81870151610a52565b908801610fd4565b51908501526112036111fa6060840151610a52565b60608601610fd4565b61121c6112136080840151151590565b15156080860152565b60a082015160a08501525160c08401524360e084015260e08101519061010091828501520151905101610120820152611eb9565b600060808a0152611139565b6000858a01526110f5565b90506001541438611083565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161129f575b821061012757565b6112a7611273565b611297565b9081039081116112b95790565b6112c1611273565b90565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610a3c576080916040918285015260208101511515606085015201511515910152565b516002811015610a3c5790565b60405190608082016001600160401b0381118382101761134e575b60405260006060838281528260208201528260408201520152565b6113566107a0565b611333565b604051906113688261084c565b81610140600091828152826020820152611380611318565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526113b2610f4f565b6101208201520152565b611435906113d76113d26102a360045460ff1690565b610d47565b6040927fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8451806114098533836112c4565b0390a161141a600760005414610d67565b61142261088b565b6020938185808094518301019101610e48565b9261144b81518015908115611663575b50610d87565b01611456815161130b565b61145f81610a32565b61154d5750926000836108c5956114763415610dc7565b8351600081527f1ef2481f5020b5b66e408f78061db098ee18301124d9ab186eda3a3e48c2bf8d90602090a101526114d76114af61135b565b936114c36114bd8551610a52565b86610fd4565b6114cf81850151610a52565b908501610fd4565b80820151908301526060810151606083015260808101516080830152600060a083015261151361150a60c0830151610a52565b60c08401610fd4565b61152c61152360e0830151151590565b151560e0840152565b610100438184015281015190610120918284015201516101408201526119d5565b61155c6001919392935161130b565b61156581610a32565b14611571575b50505050565b61165a936115bd60608084019461158a86513414610da7565b8351600181527fb7ce36ca70e6475d8a8a5a727935aec94a24d48760c0d33d242dedb714117a9290602090a10160019052565b6115f06115c861135b565b946115dc6115d68551610a52565b87610fd4565b6115e881850151610a52565b908601610fd4565b8082015190840152815160608401526080810151608084015261162261161960a0830151151590565b151560a0850152565b61162f3360c08501610fd4565b600160e0840152610100438185015281015190610120918285015201519051016101408201526119d5565b3880808061156b565b90506001541438611445565b9060018110156116805760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b8181106116ae575050565b600081556001016116a3565b6116c5600254610766565b806116cd5750565b601f81116001146116e057506000600255565b600260005261172590601f0160051c60008051602061223b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6116a3565b6000602081208160025555565b6040519061173f8261084c565b81610140600091828152826020820152611757611318565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611782610f4f565b610100820152826101208201520152565b6000915b600183106117a457505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611797565b6108c5909291926101e06102008201946117ee838251610f42565b61180060208201516020850190610f42565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a08101519061185e610100928386019015159052565b60c08101516118736101209182870190610f42565b61189b60e08301519361188d610140958689019015159052565b830151610160870190611793565b8101516101c085015201511515910152565b90601f82116118ba575050565b6108c59160026000526020600020906020601f840160051c830193106118e8575b601f0160051c01906116a3565b90915081906118db565b80519091906001600160401b0381116119c8575b61191a81611915600254610766565b6118ad565b602080601f8311600114611956575081929360009261194b575b50508160011b916000199060031b1c191617600255565b015190503880611934565b6002600052601f1983169490919060008051602061223b833981519152926000905b8782106119b0575050836001959610611997575b505050811b01600255565b015160001960f88460031b161c1916905538808061198c565b80600185968294968601518155019501930190611978565b6119d06107a0565b611906565b60e08101805115158015611c5c5760005b15611acf575050611abc611aca6108c592611a9a611a02611732565b91611a16611a108251610a52565b84610fd4565b611a2f611a266020830151610a52565b60208501610fd4565b604081015160408401526060810151606084015260808101516080840152611a5a60a0840160019052565b611a73611a6a60c0830151610a52565b60c08501610fd4565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b611aa46007600055565b611aad43600155565b604051928391602083016117d3565b03601f198101835282610868565b6118f2565b15611bd25760008281808080611aeb6110996108c59951610a52565b61014086015190828215611bc9575bf115611bbc575b611b56611b0c610f81565b93611b1a6114bd8451610a52565b611b33611b2a6020850151610a52565b60208701610fd4565b6080830151604086015261111b611b4d60c0850151610a52565b60608701610fd4565b8214611ba757611b6a825b15156080850152565b610100808201611b83815160408086015101519061128a565b60a08601528360c08601525160e08501526101208092015190840152820152611eb9565b611b6a611bb760a0830151151590565b611b61565b611bc4611696565b611b01565b506108fc611afa565b506000808083611c0d611be9602084970151610a52565b611bf38351610a52565b6101208401515151916001600160a01b0390911690611c68565b610140611c1d6110998351610a52565b91015190828215611c53575bf115611c46575b60008055611c3e6000600155565b6108c56116ba565b611c4e611696565b611c30565b506108fc611c29565b60a083015115156119e6565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611ce493600093849392849190608081016001600160401b03811182821017611ceb575b6040525193165af1611cd4611ccd611cf8565b8092611d5a565b5060208082518301019101611d45565b1561012757565b611cf36107a0565b611cba565b3d15611d40573d906001600160401b038211611d33575b60405191611d27601f8201601f191660200184610868565b82523d6000602084013e565b611d3b6107a0565b611d0f565b606090565b9081602091031261012757516112c181610a72565b15611d625790565b805115611d7157805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15611d925790565b805115611da157805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60405190611dc7826107b7565b60006020838281520152565b60405190611de082610830565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152611e16610f4f565b60e0820152826101008201520152565b6108c590929192610160610120610180830195611e44848251610f42565b611e5660208201516020860190610f42565b60408101516040850152611e7260608201516060860190610f42565b60808181015115159085015260a081015160a085015260c081015160c0850152611ea460e082015160e0860190611793565b61010081015161014085015201511515910152565b611ec1611dba565b60c08201805160408401805191909111835291929060e082015160a08301805190916000911061209e5750845115155b15611fda57611aca92611fb06108c59684611fb894611f206020611abc9a985189511115940193849015159052565b611f28611dd3565b96611f366111cb8751610a52565b611f4f611f466020880151610a52565b60208a01610fd4565b516040880152611f6e611f656060870151610a52565b60608901610fd4565b611f87611f7e6080870151151590565b15156080890152565b5160a08701525160c08601526101008084015160e0870152610120809401519086015251151590565b151590830152565b611fc26005600055565b611fcb43600155565b60405192839160208301611e26565b50506000809381935082612034611ff5602085960151610a52565b926120008151151590565b851461208b5761111b6120166060850151610a52565b945b61010085015151516001600160a01b0396909190871690611c68565b8314612075576101206120478251610a52565b915b0151918391831561206b575b1690f115611c465760008055611c3e6000600155565b6108fc9250612055565b6101206120856060830151610a52565b91612049565b61111b6120988451610a52565b94612018565b611ef1565b602090600319011261012757604051906120bc826107fa565b6004358252565b61018081830312610127576040519161016091906121369060e085016001600160401b03811186821017612150575b6040526120fe83610a5e565b855261210c60208401610a5e565b6020860152604083015160408601526121288160608501610de7565b606086015260e08301610a87565b608084015261014081015160a0840152015160c082015290565b6121586107a0565b6120f2565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526112c1936000938493909284919060a081016001600160401b038111828210176121d0575b6040525193165af1611cd46121c9611cf8565b8092611d8a565b6121d86107a0565b6121b6565b91906121e7610f4f565b9260005b600181106121f95750508252565b806122066001928461166f565b51612211828861166f565b5261221c818761166f565b50600019811461222d575b016121eb565b612235611273565b61222756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10625,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_algo_nnt.rsh:46:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_algo_nnt.rsh:123:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_algo_nnt.rsh:86:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_algo_nnt.rsh:80:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_algo_nnt.rsh:50:62:after expr stmt semicolon',
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
