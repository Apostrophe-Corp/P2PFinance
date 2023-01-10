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
      const [v498, v499, v500, v501, v506, v508, v509] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v498, v499, v509, v524, v630, v660, v661, v668, v669, v691] = svs;
      return (await ((async () => {
        
        
        return v661;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v498, v499, v500, v501, v506, v508, v509] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v498, v499, v509, v524, v630, v660, v661, v668, v669, v691] = svs;
      return (await ((async () => {
        
        
        return v630;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554] = svs;
      return (await ((async () => {
        
        
        return v554;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v498, v499, v500, v501, v506, v508, v509] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v498, v499, v509, v524, v630, v660, v661, v668, v669, v691] = svs;
      return (await ((async () => {
        
        
        return v691;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554] = svs;
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
    Borrower_close0_93: ctc6,
    Lender_lend0_93: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v476 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v477 = [v476];
  const v483 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:40:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:38:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v484 = v483.address;
  const v485 = v483.amount;
  const v486 = v483.collateral;
  const v487 = v483.maturation;
  const v488 = v483.principal;
  const v489 = v483.tokCollateral;
  const v496 = stdlib.lt(v488, v485);
  stdlib.assert(v496, {
    at: './src/contracts/loan_algo_nnt.rsh:42:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:38:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:38:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v497 = {
    address: v484,
    amount: v485,
    maturation: v487,
    principal: v488
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v486, v497],
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
      
      
      const {data: [v499, v500, v501], secs: v503, time: v502, didSend: v43, from: v498 } = txn1;
      
      const v504 = v477[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0')];
      const v505 = stdlib.Array_set(v504, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'));
      const v506 = stdlib.Array_set(v477, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'), v505);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v499
        });
      ;
      const v508 = v501.principal;
      const v509 = v501.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v499, v500, v501], secs: v503, time: v502, didSend: v43, from: v498 } = txn1;
  const v504 = v477[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0')];
  const v505 = stdlib.Array_set(v504, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'));
  const v506 = stdlib.Array_set(v477, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:44:11:dot', stdlib.UInt_max, '0'), v505);
  ;
  ;
  const v508 = v501.principal;
  const v509 = v501.amount;
  const v510 = stdlib.lt(v508, v509);
  stdlib.assert(v510, {
    at: './src/contracts/loan_algo_nnt.rsh:45:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v498, v499, v500, v501, v506, v508, v509],
    evt_cnt: 0,
    funcNum: 1,
    lct: v502,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), [[v500, v499]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v513, time: v512, didSend: v53, from: v511 } = txn2;
      
      ;
      const v514 = v506[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v515 = v514[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v516 = stdlib.add(v515, v500);
      const v518 = stdlib.Array_set(v514, '0', v516);
      const v519 = stdlib.Array_set(v506, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v518);
      sim_r.txns.push({
        amt: v500,
        kind: 'to',
        tok: v499
        });
      
      const v523 = true;
      const v524 = v498;
      const v525 = false;
      const v526 = v512;
      const v532 = v519;
      const v533 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:36:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v548 = v525 ? false : v523;
        
        return v548;})()) {
        const v553 = v525 ? false : v523;
        const v554 = v553 ? true : v525;
        sim_r.isHalt = false;
        }
      else {
        const v629 = v525 ? false : v523;
        const v630 = v629 ? true : v525;
        if (v525) {
          const v657 = stdlib.sub(v533, v533);
          sim_r.txns.push({
            kind: 'from',
            to: v498,
            tok: undefined /* Nothing */
            });
          const v659 = v501.maturation;
          const v660 = stdlib.safeAdd(v526, v659);
          const v661 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v662 = v526;
          const v668 = v532;
          const v669 = v657;
          
          if (await (async () => {
            const v686 = stdlib.le(v662, v660);
            const v688 = stdlib.lt(v661, v509);
            const v689 = v686 ? v688 : false;
            
            return v689;})()) {
            const v691 = stdlib.ge(v661, v509);
            sim_r.isHalt = false;
            }
          else {
            const v767 = v668[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v768 = v767[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v770 = stdlib.lt(v661, v509);
            const v771 = v770 ? v524 : v498;
            sim_r.txns.push({
              kind: 'from',
              to: v771,
              tok: v499
              });
            const v784 = v770 ? v498 : v524;
            sim_r.txns.push({
              kind: 'from',
              to: v784,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v499
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v632 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          const v633 = v632[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v498,
            tok: v499
            });
          sim_r.txns.push({
            kind: 'from',
            to: v498,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v499
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
  const {data: [], secs: v513, time: v512, didSend: v53, from: v511 } = txn2;
  ;
  const v514 = v506[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v515 = v514[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v516 = stdlib.add(v515, v500);
  const v518 = stdlib.Array_set(v514, '0', v516);
  const v519 = stdlib.Array_set(v506, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v518);
  ;
  const v520 = stdlib.addressEq(v498, v511);
  stdlib.assert(v520, {
    at: './src/contracts/loan_algo_nnt.rsh:47:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v512), {
    at: './src/contracts/loan_algo_nnt.rsh:48:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:48:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:48:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:48:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:48:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v523 = true;
  let v524 = v498;
  let v525 = false;
  let v526 = v512;
  let v532 = v519;
  let v533 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:36:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v548 = v525 ? false : v523;
    
    return v548;})()) {
    const v553 = v525 ? false : v523;
    const v554 = v553 ? true : v525;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v575], secs: v577, time: v576, didSend: v158, from: v574 } = txn4;
    switch (v575[0]) {
      case 'Borrower_close0_93': {
        const v578 = v575[1];
        undefined /* setApiDetails */;
        ;
        const v588 = null;
        await txn4.getOutput('Borrower_close', 'v588', ctc5, v588);
        const cv523 = false;
        const cv524 = v524;
        const cv525 = v525;
        const cv526 = v576;
        const cv532 = v532;
        const cv533 = v533;
        
        v523 = cv523;
        v524 = cv524;
        v525 = cv525;
        v526 = cv526;
        v532 = cv532;
        v533 = cv533;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v603 = v575[1];
        undefined /* setApiDetails */;
        const v611 = stdlib.add(v533, v508);
        ;
        const v621 = true;
        await txn4.getOutput('Lender_lend', 'v621', ctc8, v621);
        const cv523 = v523;
        const cv524 = v574;
        const cv525 = true;
        const cv526 = v576;
        const cv532 = v532;
        const cv533 = v611;
        
        v523 = cv523;
        v524 = cv524;
        v525 = cv525;
        v526 = cv526;
        v532 = cv532;
        v533 = cv533;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v629 = v525 ? false : v523;
  const v630 = v629 ? true : v525;
  if (v525) {
    const v657 = stdlib.sub(v533, v533);
    ;
    const v659 = v501.maturation;
    const v660 = stdlib.safeAdd(v526, v659);
    let v661 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
    let v662 = v526;
    let v668 = v532;
    let v669 = v657;
    
    let txn4 = txn3;
    while (await (async () => {
      const v686 = stdlib.le(v662, v660);
      const v688 = stdlib.lt(v661, v509);
      const v689 = v686 ? v688 : false;
      
      return v689;})()) {
      const v691 = stdlib.ge(v661, v509);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v722], secs: v724, time: v723, didSend: v366, from: v721 } = txn5;
      undefined /* setApiDetails */;
      const v726 = v722[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v727 = stdlib.addressEq(v721, v498);
      stdlib.assert(v727, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v729 = stdlib.safeAdd(v726, v661);
      const v731 = stdlib.gt(v729, v509);
      let v732;
      if (v731) {
        const v735 = stdlib.safeSub(v729, v509);
        v732 = v735;
        }
      else {
        v732 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v736 = stdlib.safeSub(v726, v732);
      const v738 = stdlib.add(v669, v736);
      ;
      let v745;
      if (v731) {
        const v748 = stdlib.safeSub(v729, v509);
        v745 = v748;
        }
      else {
        v745 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v749 = stdlib.safeSub(v726, v745);
      const v751 = stdlib.safeAdd(v661, v749);
      const v753 = stdlib.ge(v751, v509);
      const v755 = [v753, v751, v509];
      await txn5.getOutput('Borrower_repay', 'v755', ctc10, v755);
      const cv661 = v751;
      const cv662 = v723;
      const cv668 = v668;
      const cv669 = v738;
      
      v661 = cv661;
      v662 = cv662;
      v668 = cv668;
      v669 = cv669;
      
      txn4 = txn5;
      continue;
      
      }
    const v767 = v668[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v768 = v767[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v770 = stdlib.lt(v661, v509);
    const v771 = v770 ? v524 : v498;
    ;
    const v784 = v770 ? v498 : v524;
    ;
    return;
    }
  else {
    const v632 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
    const v633 = v632[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
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
    Borrower_close0_93: ctc7,
    Lender_lend0_93: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v557 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:73:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:73:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v561 = ['Borrower_close0_93', v557];
  
  const txn1 = await (ctc.sendrecv({
    args: [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554, v561],
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
      
      
      const {data: [v575], secs: v577, time: v576, didSend: v158, from: v574 } = txn1;
      
      switch (v575[0]) {
        case 'Borrower_close0_93': {
          const v578 = v575[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v588 = null;
          const v589 = await txn1.getOutput('Borrower_close', 'v588', ctc9, v588);
          
          const v1200 = false;
          const v1201 = v524;
          const v1202 = v525;
          const v1204 = v532;
          const v1205 = v533;
          const v1206 = v525 ? false : false;
          if (v1206) {
            const v1208 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1210 = v525;
            if (v525) {
              const v1211 = stdlib.sub(v533, v533);
              sim_r.txns.push({
                kind: 'from',
                to: v498,
                tok: undefined /* Nothing */
                });
              const v1212 = v501.maturation;
              const v1213 = stdlib.safeAdd(v576, v1212);
              const v1250 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
              const v1252 = v532;
              const v1253 = v1211;
              const v1254 = stdlib.le(v576, v1213);
              const v1255 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
              const v1256 = v1254 ? v1255 : false;
              if (v1256) {
                const v1257 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
                sim_r.isHalt = false;
                }
              else {
                const v1259 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1260 = v1259[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1262 = v1255 ? v524 : v498;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1262,
                  tok: v499
                  });
                const v1263 = v1255 ? v498 : v524;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1263,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v499
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1248 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
              const v1249 = v1248[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v498,
                tok: v499
                });
              sim_r.txns.push({
                kind: 'from',
                to: v498,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v499
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
          const v603 = v575[1];
          
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
  const {data: [v575], secs: v577, time: v576, didSend: v158, from: v574 } = txn1;
  switch (v575[0]) {
    case 'Borrower_close0_93': {
      const v578 = v575[1];
      undefined /* setApiDetails */;
      ;
      const v588 = null;
      const v589 = await txn1.getOutput('Borrower_close', 'v588', ctc9, v588);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v578, v589), {
          at: './src/contracts/loan_algo_nnt.rsh:73:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:73:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:74:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:73:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:73:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:73:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1200 = false;
      const v1201 = v524;
      const v1202 = v525;
      const v1204 = v532;
      const v1205 = v533;
      const v1206 = v525 ? false : false;
      if (v1206) {
        const v1208 = true;
        return;
        }
      else {
        const v1210 = v525;
        if (v525) {
          const v1211 = stdlib.sub(v533, v533);
          ;
          const v1212 = v501.maturation;
          const v1213 = stdlib.safeAdd(v576, v1212);
          const v1250 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1252 = v532;
          const v1253 = v1211;
          const v1254 = stdlib.le(v576, v1213);
          const v1255 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
          const v1256 = v1254 ? v1255 : false;
          if (v1256) {
            const v1257 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
            return;
            }
          else {
            const v1259 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1260 = v1259[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1262 = v1255 ? v524 : v498;
            ;
            const v1263 = v1255 ? v498 : v524;
            ;
            return;
            }}
        else {
          const v1248 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          const v1249 = v1248[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:78:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v603 = v575[1];
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
  
  
  const [v498, v499, v509, v524, v630, v660, v661, v668, v669, v691] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v692 = ctc.selfAddress();
  const v694 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v695 = v694[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v697 = stdlib.addressEq(v692, v498);
  stdlib.assert(v697, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v699 = stdlib.safeAdd(v695, v661);
  const v701 = stdlib.gt(v699, v509);
  
  let v716;
  if (v701) {
    const v719 = stdlib.safeSub(v699, v509);
    v716 = v719;
    }
  else {
    v716 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v720 = stdlib.safeSub(v695, v716);
  
  const txn1 = await (ctc.sendrecv({
    args: [v498, v499, v509, v524, v630, v660, v661, v668, v669, v691, v694],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v720, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v722], secs: v724, time: v723, didSend: v366, from: v721 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v726 = v722[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v729 = stdlib.safeAdd(v726, v661);
      const v731 = stdlib.gt(v729, v509);
      let v732;
      if (v731) {
        const v735 = stdlib.safeSub(v729, v509);
        v732 = v735;
        }
      else {
        v732 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v736 = stdlib.safeSub(v726, v732);
      const v738 = stdlib.add(v669, v736);
      sim_r.txns.push({
        amt: v736,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v745;
      if (v731) {
        const v748 = stdlib.safeSub(v729, v509);
        v745 = v748;
        }
      else {
        v745 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v749 = stdlib.safeSub(v726, v745);
      const v751 = stdlib.safeAdd(v661, v749);
      const v753 = stdlib.ge(v751, v509);
      const v755 = [v753, v751, v509];
      const v756 = await txn1.getOutput('Borrower_repay', 'v755', ctc7, v755);
      
      const v1328 = v751;
      const v1330 = v668;
      const v1331 = v738;
      const v1332 = stdlib.le(v723, v660);
      const v1333 = stdlib.lt(v751, v509);
      const v1334 = v1332 ? v1333 : false;
      if (v1334) {
        sim_r.isHalt = false;
        }
      else {
        const v1337 = v668[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1338 = v1337[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1340 = v1333 ? v524 : v498;
        sim_r.txns.push({
          kind: 'from',
          to: v1340,
          tok: v499
          });
        const v1341 = v1333 ? v498 : v524;
        sim_r.txns.push({
          kind: 'from',
          to: v1341,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v499
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
  const {data: [v722], secs: v724, time: v723, didSend: v366, from: v721 } = txn1;
  undefined /* setApiDetails */;
  const v726 = v722[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:101:30:spread', stdlib.UInt_max, '0')];
  const v727 = stdlib.addressEq(v721, v498);
  stdlib.assert(v727, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v729 = stdlib.safeAdd(v726, v661);
  const v731 = stdlib.gt(v729, v509);
  let v732;
  if (v731) {
    const v735 = stdlib.safeSub(v729, v509);
    v732 = v735;
    }
  else {
    v732 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v736 = stdlib.safeSub(v726, v732);
  const v738 = stdlib.add(v669, v736);
  ;
  let v745;
  if (v731) {
    const v748 = stdlib.safeSub(v729, v509);
    v745 = v748;
    }
  else {
    v745 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v749 = stdlib.safeSub(v726, v745);
  const v751 = stdlib.safeAdd(v661, v749);
  const v753 = stdlib.ge(v751, v509);
  const v755 = [v753, v751, v509];
  const v756 = await txn1.getOutput('Borrower_repay', 'v755', ctc7, v755);
  if (v366) {
    stdlib.protect(ctc8, await interact.out(v722, v756), {
      at: './src/contracts/loan_algo_nnt.rsh:101:31:application',
      fs: ['at ./src/contracts/loan_algo_nnt.rsh:101:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:101:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:112:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:110:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:110:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:110:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1328 = v751;
  const v1330 = v668;
  const v1331 = v738;
  const v1332 = stdlib.le(v723, v660);
  const v1333 = stdlib.lt(v751, v509);
  const v1334 = v1332 ? v1333 : false;
  if (v1334) {
    return;
    }
  else {
    const v1337 = v668[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1338 = v1337[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1340 = v1333 ? v524 : v498;
    ;
    const v1341 = v1333 ? v498 : v524;
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
    Borrower_close0_93: ctc7,
    Lender_lend0_93: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v565 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:63:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:63:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:50:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:50:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v569 = ['Lender_lend0_93', v565];
  
  const txn1 = await (ctc.sendrecv({
    args: [v498, v499, v501, v508, v509, v523, v524, v525, v532, v533, v554, v569],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v508, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v575], secs: v577, time: v576, didSend: v158, from: v574 } = txn1;
      
      switch (v575[0]) {
        case 'Borrower_close0_93': {
          const v578 = v575[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v603 = v575[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v611 = stdlib.add(v533, v508);
          sim_r.txns.push({
            amt: v508,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v621 = true;
          const v622 = await txn1.getOutput('Lender_lend', 'v621', ctc4, v621);
          
          const v1407 = v574;
          const v1416 = true;
          const v1417 = stdlib.sub(v611, v611);
          sim_r.txns.push({
            kind: 'from',
            to: v498,
            tok: undefined /* Nothing */
            });
          const v1418 = v501.maturation;
          const v1419 = stdlib.safeAdd(v576, v1418);
          const v1456 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1458 = v532;
          const v1459 = v1417;
          const v1460 = stdlib.le(v576, v1419);
          const v1461 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
          const v1462 = v1460 ? v1461 : false;
          if (v1462) {
            const v1463 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
            sim_r.isHalt = false;
            }
          else {
            const v1465 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1466 = v1465[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1468 = v1461 ? v574 : v498;
            sim_r.txns.push({
              kind: 'from',
              to: v1468,
              tok: v499
              });
            const v1469 = v1461 ? v498 : v574;
            sim_r.txns.push({
              kind: 'from',
              to: v1469,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v499
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
  const {data: [v575], secs: v577, time: v576, didSend: v158, from: v574 } = txn1;
  switch (v575[0]) {
    case 'Borrower_close0_93': {
      const v578 = v575[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v603 = v575[1];
      undefined /* setApiDetails */;
      const v611 = stdlib.add(v533, v508);
      ;
      const v621 = true;
      const v622 = await txn1.getOutput('Lender_lend', 'v621', ctc4, v621);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v603, v622), {
          at: './src/contracts/loan_algo_nnt.rsh:63:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:63:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:63:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:67:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:66:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:66:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1407 = v574;
      const v1416 = true;
      const v1417 = stdlib.sub(v611, v611);
      ;
      const v1418 = v501.maturation;
      const v1419 = stdlib.safeAdd(v576, v1418);
      const v1456 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0');
      const v1458 = v532;
      const v1459 = v1417;
      const v1460 = stdlib.le(v576, v1419);
      const v1461 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
      const v1462 = v1460 ? v1461 : false;
      if (v1462) {
        const v1463 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:86:51:decimal', stdlib.UInt_max, '0'), v509);
        return;
        }
      else {
        const v1465 = v532[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1466 = v1465[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1468 = v1461 ? v574 : v498;
        ;
        const v1469 = v1461 ? v498 : v574;
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
  appApproval: `ByAOAAEFBAcgCCjZ9qi8Btfx250HnpLWlQi+86bXA/augPQDoI0GJgMBAAEBACI1ADEYQQV5KmRJIls1ASEGWzUCNhoAF0lBAK8iNQQjNQZJIQgMQAA8SSEJDEAAH0khCgxAAA4hChJEKjX/KDT/UEIAoiEJEkQ2GgFCAVAhCBJENAEkEkQoZEk1A1dZCDUHQgUUSSELDEAAK0khDAxAAA4hDBJEKjX/KTT/UEIAZiELEkQ0ASQSRChkSTUDV3oBNQdCBOKBj8bFKhJENAFJIQQMQAAUIQQSRChkKWRQSTUDV6sBNQdCBL4kEkQoZEk1A1dQATUHQgSuNhoCFzUENhoDNhoBF0klDEABpEkkDEAAuiQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBVs1/lcoODX9gWBbNfyBaFs1+1eSETX6gaMBWzX5STUFNfiABLGZIkU0+FCwNPgiVUAALYAIAAAAAAAAAkywKjUHNP80/jT9NPw0+yI0A1dxIDQDV5EBFzIGNPo0+UICQTT8iAQvgAkAAAAAAAACbQGwKTUHNP80/jT9NPw0+zQDV3ABFzEAIzIGNPo0+TT8CEICDkgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQdbNf6BWVs1/Uk1BTX8gATOPHBmNPxQsDT8FzX7MQA0/xJENPs0/QhJNfo0/g1JNflBAAo0+jT+CTX4QgADIjX4NPs0+Ak19zT3iAOWNPlBAAo0+jT+CTX2QgADIjX2NP00+zT2CQg19YAIAAAAAAAAAvM09TT+DxZRBwg09RZQNP4WUFCwNPU0/g8WUQcINPUWUDT+FlA1BzT/NAMhBVs0/jQDVzAgNANXUAEXNAOBUVs09TIGNANXYRE0A4FyWzT3CEIB+kkjDEAAeSMSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBVs1/iEHWzX9V2gRNfyABJqLkXSwNPxXABE1+zT9NP6IAuk0/zEAEkQ0/zT+NANXMDg0A4F5WzQDgYEBWyM0/yIyBjT8NPtJIls0/QgWXABcACJCAKtIIQ2IApgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQZbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBq9cAFwANfshDYgCS7EisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBVs1+TT6NPkMRDEANP8WUDT+FlA0/VA0+1A0+hZQNPkWUChLAVcAf2cpSwFXfwpnSCM1ATIGNQJCAaE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwUNPoQQQA7NPU09hZQNPdQNPgWUDT5FlApUDT7UChQNP5QNP8WUClQKEsBVwB/ZylLAVd/LWdIIQQ1ATIGNQJCAUc0/EEALrEisgE0/7III7IQNPWyB7M09TT2NPk0+zT8NP009yEHWwgiNP00/jT/SQlCAEOxIrIBNP5XABEiW7ISJbIQNPWyFDT2shGzsSKyATT/sggjshA09bIHs7EisgEishIlshAyCbIVMgqyFDT2shGzQgC2Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/DT4DDX1NP00+w409RBBAEM0/DT4DzX0NPY09xZQNPgWUDT5UDT6FlEHCFA0+xZQNPwWUDT+UDT/FlA09BZRBwhQKEsBVwB7Z0gkNQEyBjUCQgBosSKyATT+VwARIluyEiWyEDT2NPk09U2yFDT3shGzsSKyATT/sggjshA0+TT2NPVNsgezsSKyASKyEiWyEDIJshUyCrIUNPeyEbNCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"internalType":"struct T11","name":"v1491","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v588","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v621","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v755","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1482","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1493","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1505","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1511","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200296438819003601f8101601f191683016001600160401b03811184821017620004eb578392829160405283398101039060e08212620005ef576080604051926200004d84620005f4565b825184526200005f6020840162000648565b602085015260408301516040850152605f190112620005ef5760c0604051916200008983620005f4565b620000976060820162000648565b83526080810151602084015260a0810151604084015201516060820152606082015243600355600060c0604051620000cf8162000610565b828152826020820152620000e26200065d565b60408201528260608201528260808201528260a08201520152604051906200010a826200062c565b620001146200065d565b825260208201620001246200067e565b8152620001306200067e565b604084015260ff60045416620005d6577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001a160608601516080830190620006c5565ba181518015908115620005c9575b5015620005b057600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620001ee836200062c565b6000835260208301526040820152620002066200067e565b9160005b60018110620005605750508152604083015234620005475760608101516020606082015191015111156200052e57606060209160408051946200024d8662000610565b6000865260008587015260008287015281516200026a81620005f4565b60008152600086820152600083820152600085820152848701526200028e6200067e565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200032360608201516080840190620006c5565b6080810151600061010084015b60018210620005015760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620004eb5760405280516001600160401b038111620004eb57600254600181811c91168015620004e0575b6020821014620004ca57601f811162000460575b50602091601f8211600114620003f657918192600092620003ea575b50508160011b916000199060031b1c1916176002555b60405161224a90816200071a8239f35b015190508280620003c4565b601f19821692600260005260206000209160005b85811062000447575083600195106200042d575b505050811b01600255620003da565b015160001960f88460031b161c191690558280806200041e565b919260206001819286850151815501940192016200040a565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004bf575b601f0160051c01905b818110620004b25750620003a8565b60008155600101620004a3565b90915081906200049a565b634e487b7160e01b600052602260045260246000fd5b90607f169062000394565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000330565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b6200056c8183620006f1565b51620005798286620006f1565b52620005868185620006f1565b5060001981146200059a576001016200020a565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b90506001541438620001af565b60405163100960cb60e01b8152600b6004820152602490fd5b600080fd5b608081019081106001600160401b03821117620004eb57604052565b60e081019081106001600160401b03821117620004eb57604052565b606081019081106001600160401b03821117620004eb57604052565b51906001600160a01b0382168203620005ef57565b604051906200066c826200062c565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620004eb576040528260005b828110620006ae57505050565b8290620006ba6200065d565b8184015201620006a1565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007035760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780633c496554146100ff57806340410cd5146100f65780634cd87555146100ed578063573b8510146100e4578063823c0a8d146100db57806383230757146100d25780638dca4147146100c957806394134348146100c0578063ab53f2c6146100b7578063ea121ca3146100ae5763f9d773330361000e576100a96106e0565b61000e565b506100a9610661565b506100a96105ec565b506100a9610543565b506100a96104b8565b506100a9610499565b506100a961044b565b506100a961026d565b506100a96101f0565b506100a9610198565b506100a961012c565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b5034610127576000366003190112610127576101466109d2565b60056000540361017f57608060209160c061017061016261088b565b858082518301019101610b04565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b506000366003190112610127576020806101b06109d2565b6101e4816101bc610a11565b84810190600082515251151585825101526101d5610a11565b906000825251858201526113bc565b01511515604051908152f35b50346101275760003660031901126101275761020a6109d2565b6005600054036102545760c06102509161012061023761022861088b565b60208082518301019101610b04565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b8152600a6004820152602490fd5b50602080600319360112610127576102836109d2565b5061043561029036612086565b916102ac6102a76102a360045460ff1690565b1590565b610ba7565b60408051338152845160208201529093610422917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a16102f3600160005414610bc7565b61032161030f61030161088b565b8580825183010191016120a6565b9151801590811561043f575b50610be7565b61032b3415610c07565b8281019261041d608061033e8651610a52565b936103576103528a83019687519033612140565b610c27565b6103733360018060a01b0361036c8451610a52565b1614610c47565b6103a361039b61038161135b565b9861039561038f8551610a52565b8b610fd4565b51610a52565b858901610fd4565b60608101518988015260a0810151606088015260c0810151828801526103cc60a0880160019052565b6103e26103d98251610a52565b60c08901610fd4565b600060e088015243610100880152015191825193845190510193888282015191015115159161040f610936565b958652850152151587840152565b6121c0565b61012082015260006101408201526119d5565b5160008152602090f35b9050600154143861031b565b50600036600319011261012757602060606104646109d2565b6101e481610470610a11565b85810190600182515251151560408251015261048a610a11565b906000825251868201526113bc565b5034610127576000366003190112610127576020600154604051908152f35b506080366003190112610127576104cd6109d2565b604051906104da826107b7565b6004358252606036602319011261012757604051916104f8836107df565b6024359260028410156101275761053793815260443561051781610a72565b602082015260643561052881610a72565b604082015260208201526113bc565b60405160008152602090f35b50346101275760003660031901126101275761025061059f60a06105656109d2565b60005460078110156105b157600561057d9114610c87565b610590610597608061059061022861088b565b0151151590565b151582840152565b60405190151581529081906020820190565b60076105bd9114610c67565b6105e76101406105dd6105ce61088b565b60208082518301019101610e48565b0151151582840152565b610590565b50346101275760008060031936011261065e57805461060961088b565b906040519283918252602090604082840152835191826040850152815b83811061064757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610626565b80fd5b506040366003190112610127576106766109d2565b60405190610683826107b7565b60043582526020366023190112610127576106b3916040516106a4816107fa565b60243581526020820152610fe3565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b506020366003190112610127576106f5610995565b506102506107016109d2565b60408161075982938351610714816107fa565b845161071f816107fa565b8082526004359052845190610733826107b7565b6000825260208201908651610747816107fa565b60008152825260008352519052610fe3565b01519051918291826106be565b90600182811c92168015610796575b602083101461078057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610775565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176107d257604052565b6107da6107a0565b604052565b606081019081106001600160401b038211176107d257604052565b602081019081106001600160401b038211176107d257604052565b60e081019081106001600160401b038211176107d257604052565b61014081019081106001600160401b038211176107d257604052565b61016081019081106001600160401b038211176107d257604052565b601f909101601f19168101906001600160401b038211908210176107d257604052565b604051906000826002549161089f83610766565b80835260019380851690811561091557506001146108c7575b506108c592500383610868565b565b6002600090815260008051602061221e83398151915294602093509091905b8183106108fd5750506108c59350820101386108b8565b855488840185015294850194879450918301916108e6565b90506108c594506020925060ff191682840152151560051b820101386108b8565b60405190606082016001600160401b038111838210176107d257604052565b6040519061014082016001600160401b038111838210176107d257604052565b6040519061016082016001600160401b038111838210176107d257604052565b60405190606082016001600160401b038111838210176109c5575b60405260006040838281528260208201520152565b6109cd6107a0565b6109b0565b604051906109df82610815565b8160c06000918281528260208201526109f6610995565b60408201528260608201528260808201528260a08201520152565b60405190610a1e826107b7565b81600081526020610a2d610995565b910152565b60021115610a3c57565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361012757565b8015150361012757565b51906108c582610a72565b9080601f8301121561012757604091825192610aa2846107fa565b836060938484019381851161012757915b848310610ac35750505050505090565b85838303126101275783518691610ad9826107df565b84518252602091828601518382015286860151610af581610a72565b87820152815201920191610ab3565b6101808183031261012757610160610b9e91610b87610b21610955565b94610b2b83610a5e565b8652610b3960208401610a5e565b602087015260408301516040870152610b5460608401610a5e565b6060870152610b6560808401610a7c565b608087015260a083015160a087015260c083015160c087015260e08301610a87565b60e085015261014081015161010085015201610a7c565b61012082015290565b15610bae57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610bce57565b60405163100960cb60e01b815260106004820152602490fd5b15610bee57565b60405163100960cb60e01b815260116004820152602490fd5b15610c0e57565b60405163100960cb60e01b815260126004820152602490fd5b15610c2e57565b60405163100960cb60e01b815260136004820152602490fd5b15610c4e57565b60405163100960cb60e01b815260146004820152602490fd5b15610c6e57565b60405163100960cb60e01b815260096004820152602490fd5b15610c8e57565b60405163100960cb60e01b815260086004820152602490fd5b15610cae57565b60405163100960cb60e01b815260156004820152602490fd5b15610cce57565b60405163100960cb60e01b815260166004820152602490fd5b15610cee57565b60405163100960cb60e01b815260176004820152602490fd5b15610d0e57565b60405163100960cb60e01b815260186004820152602490fd5b15610d2e57565b60405163100960cb60e01b815260196004820152602490fd5b15610d4e57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d6e57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d8e57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610dae57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610dce57565b60405163100960cb60e01b8152601d6004820152602490fd5b919082608091031261012757604051608081016001600160401b03811182821017610e3b575b6040526060808294610e1e81610a5e565b845260208101516020850152604081015160408501520151910152565b610e436107a0565b610e0d565b906102008282031261012757610f016101e0610e62610975565b93610e6c81610a5e565b8552610e7a60208201610a5e565b6020860152610e8c8460408301610de7565b604086015260c0810151606086015260e08101516080860152610100610eb3818301610a7c565b60a087015261012090610ec7828401610a5e565b60c0880152610eed61014096610ede888601610a7c565b60e08a01526101608501610a87565b908701526101c08201519086015201610a7c565b9082015290565b60405190610f1582610815565b81600080825280602083015280604083015280606083015280608083015260a082015260c0610a2d610995565b6001600160a01b03169052565b60405190610f5c826107fa565b8160005b60208110610f6c575050565b602090610f77610995565b8184015201610f60565b60405190610f8e82610830565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610fca610f4f565b6101008201520152565b6001600160a01b039091169052565b6108c59161107391610ff3610f08565b61100a6110056102a360045460ff1690565b610ca7565b60408051338152835160208083019190915284015151818301527f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611058600560005414610cc7565b61106061088b565b6020958187808094518301019101610b04565b9361108981518015908115611267575b50610ce7565b6110a561109e6110998751610a52565b610a52565b3314610d07565b01805151948261114e6110be60c088019889519061128a565b9384875261114883890195865110996110dc8c8a019b8c9015159052565b8a511561125c576110f089518851906112ac565b858a01525b611121611108845151878c0151906112ac565b9b61111b8d60608d019e8f523414610d27565b51151590565b156112505761113389518851906112ac565b60808a01525b519151516080890151906112ac565b9061128a565b9461116c60c060a08301978089528651111592019182519015159052565b85518982510152835182825101527f41578e424dc4c4696b6c6d846d0cc7c5d00adb189e81acc06518c393fd3205176111ab82518451918291826106be565b0390a1519101526111e56111bd610f81565b966111d16111cb8751610a52565b89610fd4565b6111dd81870151610a52565b908801610fd4565b51908501526112036111fa6060840151610a52565b60608601610fd4565b61121c6112136080840151151590565b15156080860152565b60a082015160a08501525160c08401524360e084015260e08101519061010091828501520151905101610120820152611e9c565b600060808a0152611139565b6000858a01526110f5565b90506001541438611083565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161129f575b821061012757565b6112a7611273565b611297565b9081039081116112b95790565b6112c1611273565b90565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610a3c576080916040918285015260208101511515606085015201511515910152565b516002811015610a3c5790565b60405190608082016001600160401b0381118382101761134e575b60405260006060838281528260208201528260408201520152565b6113566107a0565b611333565b604051906113688261084c565b81610140600091828152826020820152611380611318565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526113b2610f4f565b6101208201520152565b611435906113d76113d26102a360045460ff1690565b610d47565b6040927fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8451806114098533836112c4565b0390a161141a600760005414610d67565b61142261088b565b6020938185808094518301019101610e48565b9261144b81518015908115611663575b50610d87565b01611456815161130b565b61145f81610a32565b61154d5750926000836108c5956114763415610dc7565b8351600081527f69543f39f6e4b4435006d7bb24c6ede01a124a697952c61207b864505999651d90602090a101526114d76114af61135b565b936114c36114bd8551610a52565b86610fd4565b6114cf81850151610a52565b908501610fd4565b80820151908301526060810151606083015260808101516080830152600060a083015261151361150a60c0830151610a52565b60c08401610fd4565b61152c61152360e0830151151590565b151560e0840152565b610100438184015281015190610120918284015201516101408201526119d5565b61155c6001919392935161130b565b61156581610a32565b14611571575b50505050565b61165a936115bd60608084019461158a86513414610da7565b8351600181527f2e15f22f8b0e99c91c0bc64f8f441332c57189b7a87dc5bebe1721330fedf34b90602090a10160019052565b6115f06115c861135b565b946115dc6115d68551610a52565b87610fd4565b6115e881850151610a52565b908601610fd4565b8082015190840152815160608401526080810151608084015261162261161960a0830151151590565b151560a0850152565b61162f3360c08501610fd4565b600160e0840152610100438185015281015190610120918285015201519051016101408201526119d5565b3880808061156b565b90506001541438611445565b9060018110156116805760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b8181106116ae575050565b600081556001016116a3565b6116c5600254610766565b806116cd5750565b601f81116001146116e057506000600255565b600260005261172590601f0160051c60008051602061221e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6116a3565b6000602081208160025555565b6040519061173f8261084c565b81610140600091828152826020820152611757611318565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611782610f4f565b610100820152826101208201520152565b6000915b600183106117a457505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611797565b6108c5909291926101e06102008201946117ee838251610f42565b61180060208201516020850190610f42565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a08101519061185e610100928386019015159052565b60c08101516118736101209182870190610f42565b61189b60e08301519361188d610140958689019015159052565b830151610160870190611793565b8101516101c085015201511515910152565b90601f82116118ba575050565b6108c59160026000526020600020906020601f840160051c830193106118e8575b601f0160051c01906116a3565b90915081906118db565b80519091906001600160401b0381116119c8575b61191a81611915600254610766565b6118ad565b602080601f8311600114611956575081929360009261194b575b50508160011b916000199060031b1c191617600255565b015190503880611934565b6002600052601f1983169490919060008051602061221e833981519152926000905b8782106119b0575050836001959610611997575b505050811b01600255565b015160001960f88460031b161c1916905538808061198c565b80600185968294968601518155019501930190611978565b6119d06107a0565b611906565b60e08101805115158015611c3f5760005b15611acf575050611abc611aca6108c592611a9a611a02611732565b91611a16611a108251610a52565b84610fd4565b611a2f611a266020830151610a52565b60208501610fd4565b604081015160408401526060810151606084015260808101516080840152611a5a60a0840160019052565b611a73611a6a60c0830151610a52565b60c08501610fd4565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b611aa46007600055565b611aad43600155565b604051928391602083016117d3565b03601f198101835282610868565b6118f2565b15611bb55760008281808080611aeb6110996108c59951610a52565b61014086015190828215611bac575bf115611b9f575b611b62611b59611b0f610f81565b94611b1d6115d68551610a52565b611b36611b2d6020860151610a52565b60208801610fd4565b6080840151604087015261111b611b5060c0860151610a52565b60608801610fd4565b15156080850152565b610100808201611b7b815160408086015101519061128a565b60a08601528360c08601525160e08501526101208092015190840152820152611e9c565b611ba7611696565b611b01565b506108fc611afa565b506000808083611bf0611bcc602084970151610a52565b611bd68351610a52565b6101208401515151916001600160a01b0390911690611c4b565b610140611c006110998351610a52565b91015190828215611c36575bf115611c29575b60008055611c216000600155565b6108c56116ba565b611c31611696565b611c13565b506108fc611c0c565b60a083015115156119e6565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611cc793600093849392849190608081016001600160401b03811182821017611cce575b6040525193165af1611cb7611cb0611cdb565b8092611d3d565b5060208082518301019101611d28565b1561012757565b611cd66107a0565b611c9d565b3d15611d23573d906001600160401b038211611d16575b60405191611d0a601f8201601f191660200184610868565b82523d6000602084013e565b611d1e6107a0565b611cf2565b606090565b9081602091031261012757516112c181610a72565b15611d455790565b805115611d5457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15611d755790565b805115611d8457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60405190611daa826107b7565b60006020838281520152565b60405190611dc382610830565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152611df9610f4f565b60e0820152826101008201520152565b6108c590929192610160610120610180830195611e27848251610f42565b611e3960208201516020860190610f42565b60408101516040850152611e5560608201516060860190610f42565b60808181015115159085015260a081015160a085015260c081015160c0850152611e8760e082015160e0860190611793565b61010081015161014085015201511515910152565b611ea4611d9d565b60c08201805160408401805191909111835291929060e082015160a0830180519091600091106120815750845115155b15611fbd57611aca92611f936108c59684611f9b94611f036020611abc9a985189511115940193849015159052565b611f0b611db6565b96611f196111cb8751610a52565b611f32611f296020880151610a52565b60208a01610fd4565b516040880152611f51611f486060870151610a52565b60608901610fd4565b611f6a611f616080870151151590565b15156080890152565b5160a08701525160c08601526101008084015160e0870152610120809401519086015251151590565b151590830152565b611fa56005600055565b611fae43600155565b60405192839160208301611e09565b50506000809381935082612017611fd8602085960151610a52565b92611fe38151151590565b851461206e5761111b611ff96060850151610a52565b945b61010085015151516001600160a01b0396909190871690611c4b565b83146120585761012061202a8251610a52565b915b0151918391831561204e575b1690f115611c295760008055611c216000600155565b6108fc9250612038565b6101206120686060830151610a52565b9161202c565b61111b61207b8451610a52565b94611ffb565b611ed4565b6020906003190112610127576040519061209f826107fa565b6004358252565b61018081830312610127576040519161016091906121199060e085016001600160401b03811186821017612133575b6040526120e183610a5e565b85526120ef60208401610a5e565b60208601526040830151604086015261210b8160608501610de7565b606086015260e08301610a87565b608084015261014081015160a0840152015160c082015290565b61213b6107a0565b6120d5565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526064808301959095529381526112c1936000938493909284919060a081016001600160401b038111828210176121b3575b6040525193165af1611cb76121ac611cdb565b8092611d6d565b6121bb6107a0565b612199565b91906121ca610f4f565b9260005b600181106121dc5750508252565b806121e96001928461166f565b516121f4828861166f565b526121ff818761166f565b506000198114612210575b016121ce565b612218611273565b61220a56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10596,
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
