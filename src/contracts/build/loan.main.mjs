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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const LoanViews_amountPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v491, v492, v493, v494, v504, v508, v509] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v491, v492, v493, v509, v524, v525, v619, v626, v627, v650] = svs;
      return (await ((async () => {
        
        
        return v619;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v491, v492, v493, v508, v509, v524, v533, v534] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v491, v492, v493, v494, v504, v508, v509] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v491, v492, v493, v509, v524, v525, v619, v626, v627, v650] = svs;
      return (await ((async () => {
        
        
        return v650;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v491, v492, v493, v508, v509, v524, v533, v534] = svs;
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
        loanPaid: {
          decode: LoanViews_loanPaid,
          dom: [],
          rng: ctc3
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc5, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0, ctc2, ctc5, ctc2, ctc3],
      7: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc5, ctc2]
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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v465 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v466 = [v465, v465];
  const v472 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan.rsh:41:43:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v473 = v472.address;
  const v474 = v472.amount;
  const v475 = v472.collateral;
  const v476 = v472.maturation;
  const v477 = v472.principal;
  const v478 = v472.tokCollateral;
  const v479 = v472.tokLoan;
  const v487 = stdlib.lt(v477, v474);
  stdlib.assert(v487, {
    at: './src/contracts/loan.rsh:43:23:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v488 = stdlib.tokenEq(v478, v479);
  const v489 = v488 ? false : true;
  stdlib.assert(v489, {
    at: './src/contracts/loan.rsh:44:23:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v490 = {
    address: v473,
    amount: v474,
    maturation: v476,
    principal: v477
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v478, v479, v475, v490],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v492, v493, v494, v495], secs: v497, time: v496, didSend: v51, from: v491 } = txn1;
      
      const v498 = v466[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0')];
      const v499 = stdlib.Array_set(v498, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v500 = stdlib.Array_set(v466, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'), v499);
      const v502 = v500[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1')];
      const v503 = stdlib.Array_set(v502, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v504 = stdlib.Array_set(v500, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1'), v503);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v492
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v493
        });
      ;
      const v508 = v495.principal;
      const v509 = v495.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v492, v493, v494, v495], secs: v497, time: v496, didSend: v51, from: v491 } = txn1;
  const v498 = v466[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0')];
  const v499 = stdlib.Array_set(v498, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v500 = stdlib.Array_set(v466, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'), v499);
  const v502 = v500[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1')];
  const v503 = stdlib.Array_set(v502, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v504 = stdlib.Array_set(v500, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1'), v503);
  const v506 = stdlib.tokenEq(v493, v492);
  const v507 = v506 ? false : true;
  stdlib.assert(v507, {
    at: './src/contracts/loan.rsh:46:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v508 = v495.principal;
  const v509 = v495.amount;
  const v510 = stdlib.lt(v508, v509);
  stdlib.assert(v510, {
    at: './src/contracts/loan.rsh:47:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v491, v492, v493, v494, v504, v508, v509],
    evt_cnt: 0,
    funcNum: 1,
    lct: v496,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), [[v494, v492]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v513, time: v512, didSend: v61, from: v511 } = txn2;
      
      ;
      const v514 = v504[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v515 = v514[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v516 = stdlib.add(v515, v494);
      const v518 = stdlib.Array_set(v514, '0', v516);
      const v519 = stdlib.Array_set(v504, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), v518);
      sim_r.txns.push({
        amt: v494,
        kind: 'to',
        tok: v492
        });
      
      const v524 = stdlib.safeAdd(v512, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '50'));
      const v525 = v491;
      const v526 = false;
      const v527 = v512;
      const v533 = v519;
      const v534 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v544 = stdlib.le(v527, v524);
        const v545 = v526 ? false : true;
        const v546 = v544 ? v545 : false;
        
        return v546;})()) {
        sim_r.isHalt = false;
        }
      else {
        if (v526) {
          const v605 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
          const v606 = v605[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
          const v612 = stdlib.sub(v606, v606);
          const v614 = stdlib.Array_set(v605, '0', v612);
          const v615 = stdlib.Array_set(v533, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v614);
          sim_r.txns.push({
            kind: 'from',
            to: v491,
            tok: v493
            });
          const v619 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
          const v620 = v527;
          const v626 = v615;
          const v627 = v534;
          
          if (await (async () => {
            const v645 = stdlib.le(v620, v524);
            const v647 = stdlib.lt(v619, v509);
            const v648 = v645 ? v647 : false;
            
            return v648;})()) {
            const v650 = stdlib.ge(v619, v509);
            sim_r.isHalt = false;
            }
          else {
            const v731 = v626[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
            const v732 = v731[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
            const v734 = stdlib.lt(v619, v509);
            const v735 = v734 ? v525 : v491;
            const v741 = stdlib.sub(v732, v732);
            const v743 = stdlib.Array_set(v731, '0', v741);
            const v744 = stdlib.Array_set(v626, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v743);
            sim_r.txns.push({
              kind: 'from',
              to: v735,
              tok: v492
              });
            const v745 = v744[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
            const v746 = v745[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
            const v749 = v734 ? v491 : v525;
            sim_r.txns.push({
              kind: 'from',
              to: v749,
              tok: v493
              });
            sim_r.txns.push({
              kind: 'from',
              to: v491,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v493
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v492
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v581 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
          const v582 = v581[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v491,
            tok: v492
            });
          sim_r.txns.push({
            kind: 'from',
            to: v491,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v493
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v492
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc10, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v513, time: v512, didSend: v61, from: v511 } = txn2;
  ;
  const v514 = v504[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v515 = v514[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v516 = stdlib.add(v515, v494);
  const v518 = stdlib.Array_set(v514, '0', v516);
  const v519 = stdlib.Array_set(v504, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), v518);
  ;
  const v520 = stdlib.addressEq(v491, v511);
  stdlib.assert(v520, {
    at: './src/contracts/loan.rsh:49:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v512), {
    at: './src/contracts/loan.rsh:50:27:application',
    fs: ['at ./src/contracts/loan.rsh:50:27:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:50:27:function exp)', 'at ./src/contracts/loan.rsh:50:27:application call to "liftedInteract" (defined at: ./src/contracts/loan.rsh:50:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  const v524 = stdlib.safeAdd(v512, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '50'));
  let v525 = v491;
  let v526 = false;
  let v527 = v512;
  let v533 = v519;
  let v534 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v544 = stdlib.le(v527, v524);
    const v545 = v526 ? false : true;
    const v546 = v544 ? v545 : false;
    
    return v546;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v558], secs: v560, time: v559, didSend: v124, from: v557 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v567 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
    const v568 = v567[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
    const v569 = stdlib.add(v568, v508);
    const v571 = stdlib.Array_set(v567, '0', v569);
    const v572 = stdlib.Array_set(v533, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v571);
    ;
    const v573 = true;
    await txn4.getOutput('Lender_lend', 'v573', ctc7, v573);
    const cv525 = v557;
    const cv526 = true;
    const cv527 = v559;
    const cv533 = v572;
    const cv534 = v534;
    
    v525 = cv525;
    v526 = cv526;
    v527 = cv527;
    v533 = cv533;
    v534 = cv534;
    
    txn3 = txn4;
    continue;
    
    }
  if (v526) {
    const v605 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
    const v606 = v605[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
    const v612 = stdlib.sub(v606, v606);
    const v614 = stdlib.Array_set(v605, '0', v612);
    const v615 = stdlib.Array_set(v533, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v614);
    ;
    let v619 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
    let v620 = v527;
    let v626 = v615;
    let v627 = v534;
    
    let txn4 = txn3;
    while (await (async () => {
      const v645 = stdlib.le(v620, v524);
      const v647 = stdlib.lt(v619, v509);
      const v648 = v645 ? v647 : false;
      
      return v648;})()) {
      const v650 = stdlib.ge(v619, v509);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v685], secs: v687, time: v686, didSend: v327, from: v684 } = txn5;
      undefined /* setApiDetails */;
      const v689 = v685[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
      const v690 = stdlib.addressEq(v684, v491);
      stdlib.assert(v690, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v692 = stdlib.safeAdd(v689, v619);
      const v694 = stdlib.gt(v692, v509);
      let v695;
      if (v694) {
        const v698 = stdlib.safeSub(v692, v509);
        v695 = v698;
        }
      else {
        v695 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v699 = stdlib.safeSub(v689, v695);
      ;
      const v704 = v626[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
      const v705 = v704[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
      const v706 = stdlib.add(v705, v699);
      const v708 = stdlib.Array_set(v704, '0', v706);
      const v709 = stdlib.Array_set(v626, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v708);
      ;
      let v716;
      if (v694) {
        const v719 = stdlib.safeSub(v692, v509);
        v716 = v719;
        }
      else {
        v716 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v720 = stdlib.safeSub(v689, v716);
      await txn5.getOutput('Borrower_repay', 'v619', ctc1, v619);
      const v728 = stdlib.safeAdd(v619, v720);
      const cv619 = v728;
      const cv620 = v686;
      const cv626 = v709;
      const cv627 = v627;
      
      v619 = cv619;
      v620 = cv620;
      v626 = cv626;
      v627 = cv627;
      
      txn4 = txn5;
      continue;
      
      }
    const v731 = v626[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v732 = v731[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v734 = stdlib.lt(v619, v509);
    const v735 = v734 ? v525 : v491;
    const v741 = stdlib.sub(v732, v732);
    const v743 = stdlib.Array_set(v731, '0', v741);
    const v744 = stdlib.Array_set(v626, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v743);
    ;
    const v745 = v744[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
    const v746 = v745[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
    const v749 = v734 ? v491 : v525;
    ;
    ;
    return;
    }
  else {
    const v581 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
    const v582 = v581[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
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
  const ctc7 = stdlib.T_Null;
  
  
  const [v491, v492, v493, v509, v524, v525, v619, v626, v627, v650] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0, ctc2, ctc5, ctc2, ctc3]);
  const v651 = ctc.selfAddress();
  const v653 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v654 = v653[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v656 = stdlib.addressEq(v651, v491);
  stdlib.assert(v656, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v658 = stdlib.safeAdd(v654, v619);
  const v660 = stdlib.gt(v658, v509);
  
  let v675;
  if (v660) {
    const v678 = stdlib.safeSub(v658, v509);
    v675 = v678;
    }
  else {
    v675 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v679 = stdlib.safeSub(v654, v675);
  
  const txn1 = await (ctc.sendrecv({
    args: [v491, v492, v493, v509, v524, v525, v619, v626, v627, v650, v653],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:106:34:decimal', stdlib.UInt_max, '0'), [[v679, v493]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v685], secs: v687, time: v686, didSend: v327, from: v684 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v689 = v685[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
      const v692 = stdlib.safeAdd(v689, v619);
      const v694 = stdlib.gt(v692, v509);
      let v695;
      if (v694) {
        const v698 = stdlib.safeSub(v692, v509);
        v695 = v698;
        }
      else {
        v695 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v699 = stdlib.safeSub(v689, v695);
      ;
      const v704 = v626[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
      const v705 = v704[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
      const v706 = stdlib.add(v705, v699);
      const v708 = stdlib.Array_set(v704, '0', v706);
      const v709 = stdlib.Array_set(v626, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v708);
      sim_r.txns.push({
        amt: v699,
        kind: 'to',
        tok: v493
        });
      let v716;
      if (v694) {
        const v719 = stdlib.safeSub(v692, v509);
        v716 = v719;
        }
      else {
        v716 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v720 = stdlib.safeSub(v689, v716);
      const v722 = await txn1.getOutput('Borrower_repay', 'v619', ctc2, v619);
      
      const v728 = stdlib.safeAdd(v619, v720);
      const v972 = v728;
      const v974 = v709;
      const v975 = v627;
      const v976 = stdlib.le(v686, v524);
      const v977 = stdlib.lt(v728, v509);
      const v978 = v976 ? v977 : false;
      if (v978) {
        const v979 = stdlib.ge(v728, v509);
        sim_r.isHalt = false;
        }
      else {
        const v981 = v709[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
        const v982 = v981[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
        const v984 = v977 ? v525 : v491;
        const v985 = stdlib.sub(v982, v982);
        const v986 = stdlib.Array_set(v981, '0', v985);
        const v987 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v986);
        sim_r.txns.push({
          kind: 'from',
          to: v984,
          tok: v492
          });
        const v988 = v987[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
        const v989 = v988[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
        const v990 = v977 ? v491 : v525;
        sim_r.txns.push({
          kind: 'from',
          to: v990,
          tok: v493
          });
        sim_r.txns.push({
          kind: 'from',
          to: v491,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v493
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v492
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v685], secs: v687, time: v686, didSend: v327, from: v684 } = txn1;
  undefined /* setApiDetails */;
  const v689 = v685[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
  const v690 = stdlib.addressEq(v684, v491);
  stdlib.assert(v690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v692 = stdlib.safeAdd(v689, v619);
  const v694 = stdlib.gt(v692, v509);
  let v695;
  if (v694) {
    const v698 = stdlib.safeSub(v692, v509);
    v695 = v698;
    }
  else {
    v695 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v699 = stdlib.safeSub(v689, v695);
  ;
  const v704 = v626[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
  const v705 = v704[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
  const v706 = stdlib.add(v705, v699);
  const v708 = stdlib.Array_set(v704, '0', v706);
  const v709 = stdlib.Array_set(v626, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v708);
  ;
  let v716;
  if (v694) {
    const v719 = stdlib.safeSub(v692, v509);
    v716 = v719;
    }
  else {
    v716 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v720 = stdlib.safeSub(v689, v716);
  const v722 = await txn1.getOutput('Borrower_repay', 'v619', ctc2, v619);
  if (v327) {
    stdlib.protect(ctc7, await interact.out(v685, v722), {
      at: './src/contracts/loan.rsh:98:23:application',
      fs: ['at ./src/contracts/loan.rsh:98:23:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:23:function exp)', 'at ./src/contracts/loan.rsh:108:47:application call to "notify" (defined at: ./src/contracts/loan.rsh:107:42:function exp)', 'at ./src/contracts/loan.rsh:107:42:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:107:42:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v728 = stdlib.safeAdd(v619, v720);
  const v972 = v728;
  const v974 = v709;
  const v975 = v627;
  const v976 = stdlib.le(v686, v524);
  const v977 = stdlib.lt(v728, v509);
  const v978 = v976 ? v977 : false;
  if (v978) {
    const v979 = stdlib.ge(v728, v509);
    return;
    }
  else {
    const v981 = v709[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v982 = v981[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v984 = v977 ? v525 : v491;
    const v985 = stdlib.sub(v982, v982);
    const v986 = stdlib.Array_set(v981, '0', v985);
    const v987 = stdlib.Array_set(v709, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v986);
    ;
    const v988 = v987[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
    const v989 = v988[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
    const v990 = v977 ? v491 : v525;
    ;
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v491, v492, v493, v508, v509, v524, v533, v534] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v549 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:39:function exp)', 'at ./src/contracts/loan.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:39:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v491, v492, v493, v508, v509, v524, v533, v534, v549],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:65:34:decimal', stdlib.UInt_max, '0'), [[v508, v493]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v558], secs: v560, time: v559, didSend: v124, from: v557 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Lender_lend"
        });
      ;
      const v567 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
      const v568 = v567[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
      const v569 = stdlib.add(v568, v508);
      const v571 = stdlib.Array_set(v567, '0', v569);
      const v572 = stdlib.Array_set(v533, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v571);
      sim_r.txns.push({
        amt: v508,
        kind: 'to',
        tok: v493
        });
      const v573 = true;
      const v574 = await txn1.getOutput('Lender_lend', 'v573', ctc3, v573);
      
      const v991 = v557;
      const v994 = v572;
      const v995 = v534;
      const v996 = stdlib.le(v559, v524);
      const v998 = v996 ? false : false;
      if (v998) {
        sim_r.isHalt = false;
        }
      else {
        const v999 = v572[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
        const v1000 = v999[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
        const v1001 = stdlib.sub(v1000, v1000);
        const v1002 = stdlib.Array_set(v999, '0', v1001);
        const v1003 = stdlib.Array_set(v572, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v1002);
        sim_r.txns.push({
          kind: 'from',
          to: v491,
          tok: v493
          });
        const v1047 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
        const v1049 = v1003;
        const v1050 = v534;
        const v1052 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v509);
        const v1053 = v996 ? v1052 : false;
        if (v1053) {
          const v1054 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v509);
          sim_r.isHalt = false;
          }
        else {
          const v1056 = v1003[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
          const v1057 = v1056[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
          const v1059 = v1052 ? v557 : v491;
          const v1060 = stdlib.sub(v1057, v1057);
          const v1061 = stdlib.Array_set(v1056, '0', v1060);
          const v1062 = stdlib.Array_set(v1003, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v1061);
          sim_r.txns.push({
            kind: 'from',
            to: v1059,
            tok: v492
            });
          const v1063 = v1062[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
          const v1064 = v1063[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
          const v1065 = v1052 ? v491 : v557;
          sim_r.txns.push({
            kind: 'from',
            to: v1065,
            tok: v493
            });
          sim_r.txns.push({
            kind: 'from',
            to: v491,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v493
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v492
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc5, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v558], secs: v560, time: v559, didSend: v124, from: v557 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v567 = v533[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
  const v568 = v567[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
  const v569 = stdlib.add(v568, v508);
  const v571 = stdlib.Array_set(v567, '0', v569);
  const v572 = stdlib.Array_set(v533, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v571);
  ;
  const v573 = true;
  const v574 = await txn1.getOutput('Lender_lend', 'v573', ctc3, v573);
  if (v124) {
    stdlib.protect(ctc7, await interact.out(v558, v574), {
      at: './src/contracts/loan.rsh:63:23:application',
      fs: ['at ./src/contracts/loan.rsh:63:23:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:23:function exp)', 'at ./src/contracts/loan.rsh:67:47:application call to "notify" (defined at: ./src/contracts/loan.rsh:66:42:function exp)', 'at ./src/contracts/loan.rsh:66:42:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:66:42:function exp)'],
      msg: 'out',
      who: 'Lender_lend'
      });
    }
  else {
    }
  
  const v991 = v557;
  const v994 = v572;
  const v995 = v534;
  const v996 = stdlib.le(v559, v524);
  const v998 = v996 ? false : false;
  if (v998) {
    return;
    }
  else {
    const v999 = v572[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
    const v1000 = v999[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
    const v1001 = stdlib.sub(v1000, v1000);
    const v1002 = stdlib.Array_set(v999, '0', v1001);
    const v1003 = stdlib.Array_set(v572, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v1002);
    ;
    const v1047 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
    const v1049 = v1003;
    const v1050 = v534;
    const v1052 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v509);
    const v1053 = v996 ? v1052 : false;
    if (v1053) {
      const v1054 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v509);
      return;
      }
    else {
      const v1056 = v1003[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
      const v1057 = v1056[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
      const v1059 = v1052 ? v557 : v491;
      const v1060 = stdlib.sub(v1057, v1057);
      const v1061 = stdlib.Array_set(v1056, '0', v1060);
      const v1062 = stdlib.Array_set(v1003, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v1061);
      ;
      const v1063 = v1062[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
      const v1064 = v1063[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
      const v1065 = v1052 ? v491 : v557;
      ;
      ;
      return;
      }}
  
  
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
    impure: [`Borrower_repay(uint64)uint64`, `Lender_lend()byte`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_repay(uint64)uint64`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEEBQgwICigjQbZ9qi8BvuO1uwM9q6A9AMHOCYDAQABAQAiNQAxGEEFlCpkSSJbNQEhBFs1AjYaABdJQQBjIjUEIzUGSSEJDEAAKkkhCgxAAAohChJENhoBQgDpIQkSRDQBJRJEKGQpZFBJNQNXYAg1B0IFQUkhCwxAAAghCxJEKkIAOYG+86bXAxJENAElEkQoZClkUEk1A1eSATUHQgUVNhoCFzUENhoDNhoBF0kkDEABb0klDEAAiiUSRCEMNAESRDQESSISTDQCEhFEKGRJNQNJSSEHWzX/IQVbNf5XSCI1/Uk1BTX8gARokmRjNPxQsDT9VxERNfs0/jT/iATzgAkAAAAAAAACPQGwKTUHNANXACA0AyEGWzT/NP40AyENWzQDgUBbMQAjMgY0/TT7SSJbNP4IFlwAXBE0A4FqW0ICPUglNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yEHWzX+IQVbNf2BYFs1/FdoIjX7STUFNfqABM48cGY0+lCwNPoXNfkxADT/EkQ0+TT8CEk1+DT9DUk190EACjT4NP0JNfZCAAMiNfY0+TT2CTX1NPtXERE19DT1NP6IBC4090EACjT4NP0JNfNCAAMiNfOACAAAAAAAAAJrNPwWULA0/BY1BzT/NAMhBls0/jT9NAMhDVs0A1dAIDT8NPk08wkIMgY0+zT0SSJbNPUIFlwAXBE0A4GKAVtCAlBJIwxAAHkjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQZbNf4hBVs1/Vc4IjX8gASai5F0sDT8VwARNfs0/TT+iAOINP8xABJENP80/jQDIQdbNAOBWls0A4FiWzIGgTIINP8iMgY0/DT7SSJbNP0IFlwAXAAiQgDfSCEIiAM0IjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+gRBbNf1XGDg1/IAE8ZJYijT/FlA0/hZQNP0WUDT8ULCBEa9JNftJUEk1+klXABEhBK9cAFwASTX5SVcRESEEr1wAXBE1+DT+NP8TRCEIiALFsSKyASKyEiSyEDIKshQ0/7IRsyEIiAKtsSKyASKyEiSyEDIKshQ0/rIRszT8IQVbNfc0/CEGWzX2NPc09gxEMQA0/xZQNP4WUDT9FlA0+FA09xZQNPYWUChLAVcAamdIIzUBMgY1AkICCTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT6DjT8FBBBADA09TT2FlA09xZQNPgWUDT5FlA0+hZQNP5QNP8WUChLAVcAcmdIIQw1ATIGNQJCAbc0/EEAQTT+VxERSTX0Ils187EisgE087ISJLIQNPWyFDT3shGzNPU09jT3NPk0+jT7IjT9NP409DTzSQkWXABcETT/QgBasSKyATT+VwARIluyEiSyEDT1shQ09rIRs7EisgE0/7III7IQNPWyB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs7EisgEishIkshAyCbIVMgqyFDT2shGzQgD8Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/DT5DDX1NP00+g409RBBAEc0/DT5DzX0NPY09xZQNPgWUDT5FlA0+hZQNPtQNPwWUDT+UDT/FlA09BZRBwhQKEsBVwB/ZylLAVd/FGdIJTUBMgY1AkIAqjT+VwARSTX0Ils187EisgE087ISJLIQNPY0+zT1TbIUNPeyEbOxIrIBNP409DTzSQkWXABcAFcRESJbshIkshA0+zT2NPVNshQ0+LIRs7EisgE0/7III7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ0+LIRs7EisgEishIkshAyCbIVMgqyFDT3shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 147,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T7","name":"elem4","type":"tuple"}],"internalType":"struct T8","name":"v1078","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T7","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v573","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v619","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1070","type":"uint256"}],"name":"Borrower_repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v1080","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v1091","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v1097","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200270738819003601f8101601f191683016001600160401b03811184821017620005b75783928291604052833981010390610100821262000716576080604051926200004e846200071b565b8251845262000060602084016200076f565b602085015262000073604084016200076f565b604085015260608301516060850152607f190112620007165760e0604051916200009d8362000737565b620000ab608082016200076f565b835260a0810151602084015260c081015160408401520151606082015260808201524360035560006080604051620000e3816200071b565b828152826020820152826040820152826060820152015260405190620001098262000737565b6200011362000784565b82526200011f620007a5565b60208301526200012e620007a5565b60408301526200013d620007a5565b606083015260ff60045416620006fd577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b036040850151166060820152606084015160808201526060608085015160018060a01b0381511660a0840152602081015160c0840152604081015160e08401520151610100820152a180518015908115620006f0575b5015620006d75760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200023c8362000753565b600083526020830152604082015262000254620007a5565b9160005b600281106200069d57505081528060408401526020810151604060208201519101511515604051916200028b8362000753565b6000835260208301526040820152620002a3620007a5565b9160005b600281106200064d5750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006455760005b156200062c573462000613576080810151602060608201519101511115620005fa576040519160e08301916001600160401b03831184841017620005b757606060809260209460405260008652600085870152600060408701526000828701526200034c620007a5565b84870152600060a0870152600060c087015233865260018060a01b0385840151168587015260018060a01b0360408401511660408701528183015182870152015182850152606082820151015160a08501520151015160c0820152600190816000554382556040519033602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260608101516080830152608081015160a08301846000915b60028310620005cd575060a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005b7576040528051906001600160401b038211620005b7576002548381811c91168015620005ac575b60208210146200059657601f811162000529575b50602090601f8311600114620004be57928293918392600094620004b2575b50501b916000199060031b1c1916176002555b604051611ef29081620008158239f35b0151925084806200048f565b90601f1983169160026000528360206000209360005b878282106200050f57505010620004f5575b505050811b01600255620004a2565b015160001960f88460031b161c19169055828080620004e6565b8486015187559095019460209485019487935001620004d4565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c810191602085106200058b575b601f0160051c019084905b8281106200057e57505062000470565b600081550184906200056e565b909150819062000563565b634e487b7160e01b600052602260045260246000fd5b90607f16906200045c565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918590620003f7565b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b6001620002e2565b620006598183620007ec565b51620006668286620007ec565b52620006738185620007ec565b5060001981146200068757600101620002a7565b634e487b7160e01b600052601160045260246000fd5b620006a98183620007ec565b51620006b68286620007ec565b52620006c38185620007ec565b506000198114620006875760010162000258565b60405163100960cb60e01b8152600a6004820152602490fd5b90506001541438620001ec565b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b60a081019081106001600160401b03821117620005b757604052565b608081019081106001600160401b03821117620005b757604052565b606081019081106001600160401b03821117620005b757604052565b51906001600160a01b03821682036200071657565b60405190620007938262000753565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620005b75781528260005b828110620007d457505050565b602090620007e162000784565b8184015201620007c7565b906002811015620007fe5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063160a366a146100e05780631e93b0f1146100d75780633c496554146100ce5780634cd87555146100c5578063573b8510146100bc578063823c0a8d146100b357806383230757146100aa578063ab53f2c6146100a1578063ea121ca3146100985763f9d773330361000e5761009361059f565b61000e565b50610093610539565b506100936104c4565b506100936104a5565b50610093610454565b50610093610266565b506100936101e9565b5061009361017d565b5061009361015e565b506100936100ff565b60409060031901126100fa57600490565b600080fd5b5060403660031901126100fa57610115366100e9565b61011d6107fa565b6040823603126100fa576101539160206040519161013a83610669565b8035835201356101498161087c565b602082015261131e565b602060405160008152f35b50346100fa5760003660031901126100fa576020600354604051908152f35b50346100fa5760003660031901126100fa576101976107fa565b6005600054036101d057606060209160c06101c16101b3610722565b85808251830101910161090e565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b50346100fa5760003660031901126100fa576102036107fa565b60056000540361024d57608061024991610120610230610221610722565b6020808251830101910161090e565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b815260086004820152602490fd5b506020806003193601126100fa5761027c6107fa565b5061043e61028936611e0c565b916102a56102a061029c60045460ff1690565b1590565b6109b1565b6040805133815284516020820152909361042b917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a16102ec6001600054146109d1565b61031a6103086102fa610722565b858082518301019101611e2c565b91518015908115610448575b506109f1565b6103243415610a11565b828101926104266080610337865161085c565b9361035161034c606083019687519033610fb7565b610a31565b61036d3360018060a01b03610366845161085c565b1614610a51565b61039d61039561037b6112a5565b9861038f610389855161085c565b8b610c6b565b5161085c565b858901610c6b565b6103b46103ac8a83015161085c565b8a8901610c6b565b60a0810151606088015260c0810151828801526103d043610f68565b60a08801526103eb6103e2825161085c565b60c08901610c6b565b600060e08801524361010088015201519182519384519051019388828201519101511515916104186107cd565b958652850152151587840152565b611109565b61012082015260006101408201526117cd565b5160008152602090f35b90506001541438610314565b5060003660031901126100fa576020604061046d6107fa565b61049981835161047c81610691565b60008152610488610843565b90600082525115158682015261131e565b01511515604051908152f35b50346100fa5760003660031901126100fa576020600154604051908152f35b50346100fa576000806003193601126105365780546104e1610722565b906040519283918252602090604082840152835191826040850152815b83811061051f57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104fe565b80fd5b5060403660031901126100fa5761054f366100e9565b6105576107fa565b813603604081126100fa5760206040519161057183610669565b84358352601f1901126100fa576101539260206040519161059183610691565b013581526020820152610ca1565b5060203660031901126100fa576020806105b76107fa565b61060e816040516105c781610691565b6040516105d381610691565b8082526004359052604051906105e882610669565b60008252858201906040516105fc81610691565b60008152825260008352519052610ca1565b0151604051908152f35b90600182811c92168015610648575b602083101461063257565b634e487b7160e01b600052602260045260246000fd5b91607f1691610627565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761068457604052565b61068c610652565b604052565b602081019081106001600160401b0382111761068457604052565b606081019081106001600160401b0382111761068457604052565b61014081019081106001600160401b0382111761068457604052565b61010081019081106001600160401b0382111761068457604052565b601f909101601f19168101906001600160401b0382119082101761068457604052565b604051906000826002549161073683610618565b8083526001938085169081156107ac575060011461075e575b5061075c925003836106ff565b565b60026000908152600080516020611ec683398151915294602093509091905b81831061079457505061075c93508201013861074f565b8554888401850152948501948794509183019161077d565b905061075c94506020925060ff191682840152151560051b8201013861074f565b6040519061075c826106ac565b6040519061014082016001600160401b0381118382101761068457604052565b6040519060a082016001600160401b03811183821017610836575b60405260006080838281528260208201528260408201528260608201520152565b61083e610652565b610815565b6040519061085082610669565b60006020838281520152565b6001600160a01b031690565b51906001600160a01b03821682036100fa57565b801515036100fa57565b519061075c8261087c565b9080601f830112156100fa576040918251926108ac84610669565b839260c08301928184116100fa57935b8385106108cb57505050505090565b6060858303126100fa5782516060916108e3826106ac565b865182526020918288015183820152858801516108ff8161087c565b868201528152019401936108bc565b6101e0818303126100fa576101c06109a89161099161092b6107da565b9461093583610868565b865261094360208401610868565b602087015261095460408401610868565b6040870152606083015160608701526080830151608087015261097960a08401610868565b60a087015260c083015160c087015260e08301610891565b60e08501526101a081015161010085015201610886565b61012082015290565b156109b857565b60405163100960cb60e01b8152600e6004820152602490fd5b156109d857565b60405163100960cb60e01b8152600f6004820152602490fd5b156109f857565b60405163100960cb60e01b815260106004820152602490fd5b15610a1857565b60405163100960cb60e01b815260116004820152602490fd5b15610a3857565b60405163100960cb60e01b815260126004820152602490fd5b15610a5857565b60405163100960cb60e01b815260136004820152602490fd5b15610a7857565b60405163100960cb60e01b815260146004820152602490fd5b15610a9857565b60405163100960cb60e01b815260156004820152602490fd5b15610ab857565b60405163100960cb60e01b815260166004820152602490fd5b15610ad857565b60405163100960cb60e01b815260176004820152602490fd5b15610af857565b60405163100960cb60e01b815260186004820152602490fd5b15610b1857565b60405163100960cb60e01b815260196004820152602490fd5b15610b3857565b60405163100960cb60e01b8152601a6004820152602490fd5b15610b5857565b60405163100960cb60e01b8152601b6004820152602490fd5b15610b7857565b60405163100960cb60e01b8152601c6004820152602490fd5b15610b9857565b60405163100960cb60e01b8152601d6004820152602490fd5b15610bb857565b60405163100960cb60e01b8152601e6004820152602490fd5b6040908151610bdf81610669565b8092600091825b828110610bf35750505050565b6020908351610c01816106ac565b858152858382015285858201528184015201610be6565b60405190610c25826106c7565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610c61610bd1565b6101008201520152565b6001600160a01b039091169052565b906002811015610c8b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b610ddd91610cad6107fa565b90610cc5610cc061029c60045460ff1690565b610a71565b60408051338152845160208083019190915285015151818301529092610d34917f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1610d19600560005414610a91565b610d21610722565b602092818480809451830101910161090e565b95610d4a81518015908115610f45575b50610ab1565b610d66610d5f610d5a895161085c565b61085c565b3314610ad1565b0190815151610d7b60c0880191825190610f8b565b80835260608801805191909110858401818152969015610f3a57610da28451835190610f9f565b888501525b610df1610dba8651518a87015190610f9f565b9760608601988952610dcc3415610af1565b610deb610de68b8d019d8e5161085c565b8b519033610fb7565b610b11565b51151590565b15610f2e57610e038451835190610f9f565b60808501525b825188519081527f9dcf26bb52ce142e8ca1227f65ccd1ff596e15ce9b5e92aab7199898ae31f95990602090a1858351910152610e44610c18565b988851610e509061085c565b610e5a908b610c6b565b85890151610e679061085c565b610e73908b8801610c6b565b51610e7d9061085c565b610e89908a8901610c6b565b5160608901526080870151608089015260a0870151610ea79061085c565b610eb49060a08a01610c6b565b519151519060800151610ec691610f9f565b610ecf91610f8b565b60c08601524360e086015260e08401519281840151928351905101928183820151910151151592610efe6107cd565b94855284015290151590820152610f1491611166565b906101009182840152015161012082015261075c90611bd9565b60006080850152610e09565b600088850152610da7565b90506001541438610d44565b50634e487b7160e01b600052601160045260246000fd5b906032820191828111610f7e575b82106100fa57565b610f86610f51565b610f76565b9190820191828111610f7e5782106100fa57565b908103908111610fac5790565b610fb4610f51565b90565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152610fb4936000938493909284919060a081016001600160401b0381118282101761103a575b6040525193165af161102a611023611047565b80926110a9565b5060208082518301019101611094565b611042610652565b611010565b3d1561108f573d906001600160401b038211611082575b60405191611076601f8201601f1916602001846106ff565b82523d6000602084013e565b61108a610652565b61105e565b606090565b908160209103126100fa5751610fb48161087c565b156110b15790565b8051156110c057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156110e15790565b8051156110f057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611113610bd1565b9260005b600281106111255750508252565b8061113260019284610c7a565b5161113d8288610c7a565b526111488187610c7a565b506000198114611159575b01611117565b611161610f51565b611153565b9190611170610bd1565b9260005b600281106111855750506020830152565b8061119260019284610c7a565b5161119d8288610c7a565b526111a88187610c7a565b5060001981146111b9575b01611174565b6111c1610f51565b6111b3565b91906111d0610bd1565b9260005b600281106111e25750508252565b806111ef60019284610c7a565b516111fa8288610c7a565b526112058187610c7a565b506000198114611216575b016111d4565b61121e610f51565b611210565b6101a0818303126100fa576101809061129660405193611242856106e3565b61124b83610868565b855261125960208401610868565b602086015261126a60408401610868565b6040860152606083015160608601526080830151608086015260a083015160a086015260c08301610891565b60c0840152015160e082015290565b6040519061016082016001600160401b03811183821017611311575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611307610bd1565b6101208201520152565b611319610652565b6112c1565b9060e061075c9261133c61133761029c60045460ff1690565b610b31565b60408051338152825160208083019190915283015115158183015290936114dd917fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d90606090a1611391600760005414610b51565b611399610722565b946113c36113b1602097888082518301019101611223565b945180159081156114f0575b50610b71565b6113cd3415610b91565b6114d88185019661142f836113e28a5161085c565b956113fc6113f760608b019889519033610fb7565b610bb1565b8151600181527f4510f143594c24f7318cc9feebabe3ed57b2b72dc1deb4c7b1880c86b5620d5790602090a10160019052565b61147061146861143d6112a5565b9961145161144b8a5161085c565b8c610c6b565b61038f611460858b015161085c565b858d01610c6b565b848a01610c6b565b835160608901526080860151608089015260a086015160a08901526114983360c08a01610c6b565b6001888801524361010089015260c086015192818401519485519051019481838201519101511515926114c96107cd565b96875286015284019015159052565b611166565b61012084015201516101408201526117cd565b905060015414386113bd565b506040513d6000823e3d90fd5b818110611514575050565b60008155600101611509565b61152b600254610618565b806115335750565b601f811160011461154657506000600255565b600260005261158b90601f0160051c600080516020611ec6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611509565b6000602081208160025555565b6040519061010082016001600160401b038111838210176115ef575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201526115e6610bd1565b60c08201520152565b6115f7610652565b6115b4565b6000915b6002831061160d57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611600565b91909161018060e06101a083019460018060a01b038082511685528060208301511660208601526040820151166040850152606081015160608501526080810151608085015260a081015160a085015261169e60c082015160c08601906115fc565b0151910152565b90601f82116116b2575050565b61075c9160026000526020600020906020601f840160051c830193106116e0575b601f0160051c0190611509565b90915081906116d3565b80519091906001600160401b0381116117c0575b6117128161170d600254610618565b6116a5565b602080601f831160011461174e5750819293600092611743575b50508160011b916000199060031b1c191617600255565b01519050388061172c565b6002600052601f19831694909190600080516020611ec6833981519152926000905b8782106117a857505083600195961061178f575b505050811b01600255565b015160001960f88460031b161c19169055388080611784565b80600185968294968601518155019501930190611770565b6117c8610652565b6116fe565b610100818101805160a08401805190939160009110611a62575060e084015115611a5b5760005b156118b85750506118b36118a59161014061075c94611811611598565b9261182561181f835161085c565b85610c6b565b61183e611835602084015161085c565b60208601610c6b565b61185761184e604084015161085c565b60408601610c6b565b60608201516060850152608082015160808501525160a084015261012081015160c0840152015160e082015261188d6007600055565b61189643600155565b6040519283916020830161163c565b03601f1981018352826106ff565b6116ea565b60e0840151919291156119cf5783610140916119c0604061075c9701956118df875161085c565b906118ea855161085c565b966119136101209889880194611901865160200190565b5151916001600160a01b031690611a67565b61195761194e611921610c18565b9a61193561192f8a5161085c565b8d610c6b565b61038f8c6020611947818d015161085c565b9101610c6b565b60408b01610c6b565b608086015160608a015251608089015261198061197760c087015161085c565b60a08a01610c6b565b600060c08901525160e0880152516020810151906114d86040602084015193015115156119ab6107cd565b93600085526020850152604084019015159052565b90850152015190820152611bd9565b5050506000808083611a0c6119e860208497015161085c565b6119f2835161085c565b6101208401515151916001600160a01b0390911690611a67565b610140611a1c610d5a835161085c565b91015190828215611a52575bf115611a45575b60008055611a3d6000600155565b61075c611520565b611a4d6114fc565b611a2f565b506108fc611a28565b60016117f4565b6117f4565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611ad393600093849392849190608081016001600160401b03811182821017611ada575b6040525193165af161102a611acc611047565b80926110d9565b156100fa57565b611ae2610652565b611ab9565b60405190611af4826106c7565b816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152611b2a610bd1565b60e0820152826101008201520152565b81516001600160a01b031681526101e08101929161075c91906101c090610120906020818101516001600160a01b0316908501526040818101516001600160a01b031690850152606081810151908501526080808201519085015260a0808201516001600160a01b03169085015260c081015160c0850152611bc460e082015160e08601906115fc565b6101008101516101a085015201511515910152565b611be1610843565b60c08201805160608401805191909111835292919060e0830151608084018051909160009110611e075750825115155b15611d00576118a593611cd66118b39484611cde94611c40602061075c9b985189511115940193849015159052565b611c48611ae7565b96611c5c611c56875161085c565b89610c6b565b611c75611c6c602088015161085c565b60208a01610c6b565b611c8e611c85604088015161085c565b60408a01610c6b565b516060880152516080870152611cb3611caa60a086015161085c565b60a08801610c6b565b5160c08601526101008084015160e0870152610120809401519086015251151590565b151590830152565b611ce86005600055565b611cf143600155565b60405192839160208301611b3a565b5050600080935082611dcf829493611d1c60208596015161085c565b90611d278151151590565b8514611df857611d3a60a085015161085c565b61010085018051515190936001600160a01b0392611d5c929190841690611a67565b611d73611d6c604087015161085c565b9251151590565b8614611ddf57611dc5611dbf611d89875161085c565b945b51805190611dba604060208401519301511515611da66107cd565b938c85526020850152604084019015159052565b6111c6565b60200190565b5151921690611a67565b610120611a1c610d5a835161085c565b611dc5611dbf611df260a088015161085c565b94611d8b565b611e02845161085c565b611d3a565b611c11565b60209060031901126100fa5760405190611e2582610691565b6004358252565b610180818303126100fa57604051916101609190611e9e9060e085016001600160401b03811186821017611eb8575b604052611e6783610868565b8552611e7560208401610868565b6020860152611e8660408401610868565b60408601526060830151606086015260808301610891565b608084015261014081015160a0840152015160c082015290565b611ec0610652565b611e5b56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 9991,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan.rsh:48:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan.rsh:122:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan.rsh:83:42:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan.rsh:76:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan.rsh:53:54:after expr stmt semicolon',
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
  "Borrower_repay": Borrower_repay,
  "Lender_lend": Lender_lend
  };
export const _APIs = {
  Borrower: {
    repay: Borrower_repay
    },
  Lender: {
    lend: Lender_lend
    }
  };
