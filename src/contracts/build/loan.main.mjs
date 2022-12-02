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
      const [v495, v496, v497, v498, v499, v500, v508, v512, v513] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v495, v496, v497, v513, v529, v622, v623, v624, v630, v631, v654] = svs;
      return (await ((async () => {
        
        
        return v623;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v495, v496, v497, v499, v512, v513, v528, v531, v537, v538] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v495, v496, v497, v498, v499, v500, v508, v512, v513] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v495, v496, v497, v513, v529, v622, v623, v624, v630, v631, v654] = svs;
      return (await ((async () => {
        
        
        return v654;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v495, v496, v497, v499, v512, v513, v528, v531, v537, v538] = svs;
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
          rng: ctc4
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc2, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2]
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
  
  
  const v469 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v470 = [v469, v469];
  const v476 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan.rsh:41:43:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v477 = v476.address;
  const v478 = v476.amount;
  const v479 = v476.collateral;
  const v480 = v476.maturation;
  const v481 = v476.principal;
  const v482 = v476.tokCollateral;
  const v483 = v476.tokLoan;
  const v491 = stdlib.lt(v481, v478);
  stdlib.assert(v491, {
    at: './src/contracts/loan.rsh:43:23:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v492 = stdlib.tokenEq(v482, v483);
  const v493 = v492 ? false : true;
  stdlib.assert(v493, {
    at: './src/contracts/loan.rsh:44:23:application',
    fs: ['at ./src/contracts/loan.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v494 = {
    address: v477,
    amount: v478,
    maturation: v480,
    principal: v481
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v482, v483, v479, v494],
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
      
      
      const {data: [v496, v497, v498, v499], secs: v501, time: v500, didSend: v51, from: v495 } = txn1;
      
      const v502 = v470[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0')];
      const v503 = stdlib.Array_set(v502, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v504 = stdlib.Array_set(v470, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'), v503);
      const v506 = v504[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1')];
      const v507 = stdlib.Array_set(v506, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v508 = stdlib.Array_set(v504, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1'), v507);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v496
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v497
        });
      ;
      const v512 = v499.principal;
      const v513 = v499.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v496, v497, v498, v499], secs: v501, time: v500, didSend: v51, from: v495 } = txn1;
  const v502 = v470[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0')];
  const v503 = stdlib.Array_set(v502, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v504 = stdlib.Array_set(v470, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'), v503);
  const v506 = v504[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1')];
  const v507 = stdlib.Array_set(v506, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v508 = stdlib.Array_set(v504, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:46:11:dot', stdlib.UInt_max, '1'), v507);
  const v510 = stdlib.tokenEq(v497, v496);
  const v511 = v510 ? false : true;
  stdlib.assert(v511, {
    at: './src/contracts/loan.rsh:46:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v512 = v499.principal;
  const v513 = v499.amount;
  const v514 = stdlib.lt(v512, v513);
  stdlib.assert(v514, {
    at: './src/contracts/loan.rsh:47:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v495, v496, v497, v498, v499, v500, v508, v512, v513],
    evt_cnt: 0,
    funcNum: 1,
    lct: v500,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), [[v498, v496]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v517, time: v516, didSend: v61, from: v515 } = txn2;
      
      ;
      const v518 = v508[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v519 = v518[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v520 = stdlib.add(v519, v498);
      const v522 = stdlib.Array_set(v518, '0', v520);
      const v523 = stdlib.Array_set(v508, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), v522);
      sim_r.txns.push({
        amt: v498,
        kind: 'to',
        tok: v496
        });
      
      const v528 = stdlib.safeAdd(v500, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '50'));
      const v529 = v495;
      const v530 = false;
      const v531 = v516;
      const v532 = v500;
      const v537 = v523;
      const v538 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v548 = stdlib.gt(v528, v532);
        const v549 = v530 ? false : true;
        const v550 = v548 ? v549 : false;
        
        return v550;})()) {
        sim_r.isHalt = false;
        }
      else {
        if (v530) {
          const v609 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
          const v610 = v609[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
          const v616 = stdlib.sub(v610, v610);
          const v618 = stdlib.Array_set(v609, '0', v616);
          const v619 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v618);
          sim_r.txns.push({
            kind: 'from',
            to: v495,
            tok: v497
            });
          const v620 = v499.maturation;
          const v622 = stdlib.safeAdd(v532, v620);
          const v623 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
          const v624 = v531;
          const v625 = v532;
          const v630 = v619;
          const v631 = v538;
          
          if (await (async () => {
            const v649 = stdlib.gt(v622, v625);
            const v651 = stdlib.lt(v623, v513);
            const v652 = v649 ? v651 : false;
            
            return v652;})()) {
            const v654 = stdlib.ge(v623, v513);
            sim_r.isHalt = false;
            }
          else {
            const v735 = v630[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
            const v736 = v735[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
            const v738 = stdlib.lt(v623, v513);
            const v739 = v738 ? v529 : v495;
            const v745 = stdlib.sub(v736, v736);
            const v747 = stdlib.Array_set(v735, '0', v745);
            const v748 = stdlib.Array_set(v630, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v747);
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: v496
              });
            const v749 = v748[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
            const v750 = v749[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
            const v753 = v738 ? v495 : v529;
            sim_r.txns.push({
              kind: 'from',
              to: v753,
              tok: v497
              });
            sim_r.txns.push({
              kind: 'from',
              to: v495,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v497
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v585 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
          const v586 = v585[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v495,
            tok: v496
            });
          sim_r.txns.push({
            kind: 'from',
            to: v495,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v497
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v496
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc1, ctc10, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v517, time: v516, didSend: v61, from: v515 } = txn2;
  ;
  const v518 = v508[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v519 = v518[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v520 = stdlib.add(v519, v498);
  const v522 = stdlib.Array_set(v518, '0', v520);
  const v523 = stdlib.Array_set(v508, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:49:11:dot', stdlib.UInt_max, '0'), v522);
  ;
  const v524 = stdlib.addressEq(v495, v515);
  stdlib.assert(v524, {
    at: './src/contracts/loan.rsh:49:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v516), {
    at: './src/contracts/loan.rsh:50:27:application',
    fs: ['at ./src/contracts/loan.rsh:50:27:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:50:27:function exp)', 'at ./src/contracts/loan.rsh:50:27:application call to "liftedInteract" (defined at: ./src/contracts/loan.rsh:50:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  const v528 = stdlib.safeAdd(v500, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '50'));
  let v529 = v495;
  let v530 = false;
  let v531 = v516;
  let v532 = v500;
  let v537 = v523;
  let v538 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v548 = stdlib.gt(v528, v532);
    const v549 = v530 ? false : true;
    const v550 = v548 ? v549 : false;
    
    return v550;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v562], secs: v564, time: v563, didSend: v126, from: v561 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v571 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
    const v572 = v571[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
    const v573 = stdlib.add(v572, v512);
    const v575 = stdlib.Array_set(v571, '0', v573);
    const v576 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v575);
    ;
    const v577 = true;
    await txn4.getOutput('Lender_lend', 'v577', ctc7, v577);
    const cv529 = v561;
    const cv530 = true;
    const cv531 = v563;
    const cv532 = v531;
    const cv537 = v576;
    const cv538 = v538;
    
    v529 = cv529;
    v530 = cv530;
    v531 = cv531;
    v532 = cv532;
    v537 = cv537;
    v538 = cv538;
    
    txn3 = txn4;
    continue;
    
    }
  if (v530) {
    const v609 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
    const v610 = v609[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
    const v616 = stdlib.sub(v610, v610);
    const v618 = stdlib.Array_set(v609, '0', v616);
    const v619 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v618);
    ;
    const v620 = v499.maturation;
    const v622 = stdlib.safeAdd(v532, v620);
    let v623 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
    let v624 = v531;
    let v625 = v532;
    let v630 = v619;
    let v631 = v538;
    
    let txn4 = txn3;
    while (await (async () => {
      const v649 = stdlib.gt(v622, v625);
      const v651 = stdlib.lt(v623, v513);
      const v652 = v649 ? v651 : false;
      
      return v652;})()) {
      const v654 = stdlib.ge(v623, v513);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v689], secs: v691, time: v690, didSend: v331, from: v688 } = txn5;
      undefined /* setApiDetails */;
      const v693 = v689[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
      const v694 = stdlib.addressEq(v688, v495);
      stdlib.assert(v694, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v696 = stdlib.safeAdd(v693, v623);
      const v698 = stdlib.gt(v696, v513);
      let v699;
      if (v698) {
        const v702 = stdlib.safeSub(v696, v513);
        v699 = v702;
        }
      else {
        v699 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v703 = stdlib.safeSub(v693, v699);
      ;
      const v708 = v630[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
      const v709 = v708[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
      const v710 = stdlib.add(v709, v703);
      const v712 = stdlib.Array_set(v708, '0', v710);
      const v713 = stdlib.Array_set(v630, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v712);
      ;
      let v720;
      if (v698) {
        const v723 = stdlib.safeSub(v696, v513);
        v720 = v723;
        }
      else {
        v720 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v724 = stdlib.safeSub(v693, v720);
      await txn5.getOutput('Borrower_repay', 'v623', ctc1, v623);
      const v732 = stdlib.safeAdd(v623, v724);
      const cv623 = v732;
      const cv624 = v690;
      const cv625 = v624;
      const cv630 = v713;
      const cv631 = v631;
      
      v623 = cv623;
      v624 = cv624;
      v625 = cv625;
      v630 = cv630;
      v631 = cv631;
      
      txn4 = txn5;
      continue;
      
      }
    const v735 = v630[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v736 = v735[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v738 = stdlib.lt(v623, v513);
    const v739 = v738 ? v529 : v495;
    const v745 = stdlib.sub(v736, v736);
    const v747 = stdlib.Array_set(v735, '0', v745);
    const v748 = stdlib.Array_set(v630, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v747);
    ;
    const v749 = v748[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
    const v750 = v749[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
    const v753 = v738 ? v495 : v529;
    ;
    ;
    return;
    }
  else {
    const v585 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
    const v586 = v585[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:74:33:application', stdlib.UInt_max, '0')];
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
  
  
  const [v495, v496, v497, v513, v529, v622, v623, v624, v630, v631, v654] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v655 = ctc.selfAddress();
  const v657 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v658 = v657[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v660 = stdlib.addressEq(v655, v495);
  stdlib.assert(v660, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v662 = stdlib.safeAdd(v658, v623);
  const v664 = stdlib.gt(v662, v513);
  
  let v679;
  if (v664) {
    const v682 = stdlib.safeSub(v662, v513);
    v679 = v682;
    }
  else {
    v679 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v683 = stdlib.safeSub(v658, v679);
  
  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v497, v513, v529, v622, v623, v624, v630, v631, v654, v657],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:106:34:decimal', stdlib.UInt_max, '0'), [[v683, v497]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v689], secs: v691, time: v690, didSend: v331, from: v688 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v693 = v689[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
      const v696 = stdlib.safeAdd(v693, v623);
      const v698 = stdlib.gt(v696, v513);
      let v699;
      if (v698) {
        const v702 = stdlib.safeSub(v696, v513);
        v699 = v702;
        }
      else {
        v699 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v703 = stdlib.safeSub(v693, v699);
      ;
      const v708 = v630[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
      const v709 = v708[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
      const v710 = stdlib.add(v709, v703);
      const v712 = stdlib.Array_set(v708, '0', v710);
      const v713 = stdlib.Array_set(v630, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v712);
      sim_r.txns.push({
        amt: v703,
        kind: 'to',
        tok: v497
        });
      let v720;
      if (v698) {
        const v723 = stdlib.safeSub(v696, v513);
        v720 = v723;
        }
      else {
        v720 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
        }
      const v724 = stdlib.safeSub(v693, v720);
      const v726 = await txn1.getOutput('Borrower_repay', 'v623', ctc2, v623);
      
      const v732 = stdlib.safeAdd(v623, v724);
      const v976 = v732;
      const v977 = v690;
      const v979 = v713;
      const v980 = v631;
      const v981 = stdlib.gt(v622, v624);
      const v982 = stdlib.lt(v732, v513);
      const v983 = v981 ? v982 : false;
      if (v983) {
        const v984 = stdlib.ge(v732, v513);
        sim_r.isHalt = false;
        }
      else {
        const v986 = v713[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
        const v987 = v986[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
        const v989 = v982 ? v529 : v495;
        const v990 = stdlib.sub(v987, v987);
        const v991 = stdlib.Array_set(v986, '0', v990);
        const v992 = stdlib.Array_set(v713, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v991);
        sim_r.txns.push({
          kind: 'from',
          to: v989,
          tok: v496
          });
        const v993 = v992[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
        const v994 = v993[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
        const v995 = v982 ? v495 : v529;
        sim_r.txns.push({
          kind: 'from',
          to: v995,
          tok: v497
          });
        sim_r.txns.push({
          kind: 'from',
          to: v495,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v497
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v496
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v689], secs: v691, time: v690, didSend: v331, from: v688 } = txn1;
  undefined /* setApiDetails */;
  const v693 = v689[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:98:22:spread', stdlib.UInt_max, '0')];
  const v694 = stdlib.addressEq(v688, v495);
  stdlib.assert(v694, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:99:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)', 'at ./src/contracts/loan.rsh:98:45:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:45:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v696 = stdlib.safeAdd(v693, v623);
  const v698 = stdlib.gt(v696, v513);
  let v699;
  if (v698) {
    const v702 = stdlib.safeSub(v696, v513);
    v699 = v702;
    }
  else {
    v699 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v703 = stdlib.safeSub(v693, v699);
  ;
  const v708 = v630[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1')];
  const v709 = v708[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '0')];
  const v710 = stdlib.add(v709, v703);
  const v712 = stdlib.Array_set(v708, '0', v710);
  const v713 = stdlib.Array_set(v630, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:42:dot', stdlib.UInt_max, '1'), v712);
  ;
  let v720;
  if (v698) {
    const v723 = stdlib.safeSub(v696, v513);
    v720 = v723;
    }
  else {
    v720 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:43:decimal', stdlib.UInt_max, '0');
    }
  const v724 = stdlib.safeSub(v693, v720);
  const v726 = await txn1.getOutput('Borrower_repay', 'v623', ctc2, v623);
  if (v331) {
    stdlib.protect(ctc7, await interact.out(v689, v726), {
      at: './src/contracts/loan.rsh:98:23:application',
      fs: ['at ./src/contracts/loan.rsh:98:23:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:98:23:function exp)', 'at ./src/contracts/loan.rsh:108:47:application call to "notify" (defined at: ./src/contracts/loan.rsh:107:42:function exp)', 'at ./src/contracts/loan.rsh:107:42:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:107:42:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v732 = stdlib.safeAdd(v623, v724);
  const v976 = v732;
  const v977 = v690;
  const v979 = v713;
  const v980 = v631;
  const v981 = stdlib.gt(v622, v624);
  const v982 = stdlib.lt(v732, v513);
  const v983 = v981 ? v982 : false;
  if (v983) {
    const v984 = stdlib.ge(v732, v513);
    return;
    }
  else {
    const v986 = v713[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v987 = v986[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
    const v989 = v982 ? v529 : v495;
    const v990 = stdlib.sub(v987, v987);
    const v991 = stdlib.Array_set(v986, '0', v990);
    const v992 = stdlib.Array_set(v713, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v991);
    ;
    const v993 = v992[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
    const v994 = v993[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
    const v995 = v982 ? v495 : v529;
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
  const ctc8 = stdlib.T_Null;
  
  
  const [v495, v496, v497, v499, v512, v513, v528, v531, v537, v538] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2]);
  const v553 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:39:function exp)', 'at ./src/contracts/loan.rsh:63:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:39:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v497, v499, v512, v513, v528, v531, v537, v538, v553],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:65:34:decimal', stdlib.UInt_max, '0'), [[v512, v497]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v562], secs: v564, time: v563, didSend: v126, from: v561 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Lender_lend"
        });
      ;
      const v571 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
      const v572 = v571[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
      const v573 = stdlib.add(v572, v512);
      const v575 = stdlib.Array_set(v571, '0', v573);
      const v576 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v575);
      sim_r.txns.push({
        amt: v512,
        kind: 'to',
        tok: v497
        });
      const v577 = true;
      const v578 = await txn1.getOutput('Lender_lend', 'v577', ctc4, v577);
      
      const v996 = v561;
      const v998 = v563;
      const v1000 = v576;
      const v1001 = v538;
      const v1002 = stdlib.gt(v528, v531);
      const v1004 = v1002 ? false : false;
      if (v1004) {
        sim_r.isHalt = false;
        }
      else {
        const v1005 = v576[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
        const v1006 = v1005[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
        const v1007 = stdlib.sub(v1006, v1006);
        const v1008 = stdlib.Array_set(v1005, '0', v1007);
        const v1009 = stdlib.Array_set(v576, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v1008);
        sim_r.txns.push({
          kind: 'from',
          to: v495,
          tok: v497
          });
        const v1010 = v499.maturation;
        const v1011 = stdlib.safeAdd(v531, v1010);
        const v1056 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
        const v1057 = v563;
        const v1059 = v1009;
        const v1060 = v538;
        const v1061 = stdlib.gt(v1011, v531);
        const v1062 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v513);
        const v1063 = v1061 ? v1062 : false;
        if (v1063) {
          const v1064 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v513);
          sim_r.isHalt = false;
          }
        else {
          const v1066 = v1009[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
          const v1067 = v1066[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
          const v1069 = v1062 ? v561 : v495;
          const v1070 = stdlib.sub(v1067, v1067);
          const v1071 = stdlib.Array_set(v1066, '0', v1070);
          const v1072 = stdlib.Array_set(v1009, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v1071);
          sim_r.txns.push({
            kind: 'from',
            to: v1069,
            tok: v496
            });
          const v1073 = v1072[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
          const v1074 = v1073[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
          const v1075 = v1062 ? v495 : v561;
          sim_r.txns.push({
            kind: 'from',
            to: v1075,
            tok: v497
            });
          sim_r.txns.push({
            kind: 'from',
            to: v495,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v497
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v496
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
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v562], secs: v564, time: v563, didSend: v126, from: v561 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v571 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1')];
  const v572 = v571[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '0')];
  const v573 = stdlib.add(v572, v512);
  const v575 = stdlib.Array_set(v571, '0', v573);
  const v576 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:53:54:dot', stdlib.UInt_max, '1'), v575);
  ;
  const v577 = true;
  const v578 = await txn1.getOutput('Lender_lend', 'v577', ctc4, v577);
  if (v126) {
    stdlib.protect(ctc8, await interact.out(v562, v578), {
      at: './src/contracts/loan.rsh:63:23:application',
      fs: ['at ./src/contracts/loan.rsh:63:23:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:63:23:function exp)', 'at ./src/contracts/loan.rsh:67:47:application call to "notify" (defined at: ./src/contracts/loan.rsh:66:42:function exp)', 'at ./src/contracts/loan.rsh:66:42:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:66:42:function exp)'],
      msg: 'out',
      who: 'Lender_lend'
      });
    }
  else {
    }
  
  const v996 = v561;
  const v998 = v563;
  const v1000 = v576;
  const v1001 = v538;
  const v1002 = stdlib.gt(v528, v531);
  const v1004 = v1002 ? false : false;
  if (v1004) {
    return;
    }
  else {
    const v1005 = v576[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '1')];
    const v1006 = v1005[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:33:application', stdlib.UInt_max, '0')];
    const v1007 = stdlib.sub(v1006, v1006);
    const v1008 = stdlib.Array_set(v1005, '0', v1007);
    const v1009 = stdlib.Array_set(v576, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:79:55:application', stdlib.UInt_max, '1'), v1008);
    ;
    const v1010 = v499.maturation;
    const v1011 = stdlib.safeAdd(v531, v1010);
    const v1056 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0');
    const v1057 = v563;
    const v1059 = v1009;
    const v1060 = v538;
    const v1061 = stdlib.gt(v1011, v531);
    const v1062 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v513);
    const v1063 = v1061 ? v1062 : false;
    if (v1063) {
      const v1064 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:83:43:decimal', stdlib.UInt_max, '0'), v513);
      return;
      }
    else {
      const v1066 = v1009[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
      const v1067 = v1066[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:25:application', stdlib.UInt_max, '0')];
      const v1069 = v1062 ? v561 : v495;
      const v1070 = stdlib.sub(v1067, v1067);
      const v1071 = stdlib.Array_set(v1066, '0', v1070);
      const v1072 = stdlib.Array_set(v1009, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:114:59:application', stdlib.UInt_max, '0'), v1071);
      ;
      const v1073 = v1072[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '1')];
      const v1074 = v1073[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:117:25:application', stdlib.UInt_max, '0')];
      const v1075 = v1062 ? v495 : v561;
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
  appApproval: `ByAPAAEEBQgoIDCgjQbZ9qi8BvuO1uwM9q6A9AMHaHAmAwEBAQAAIjUAMRhBBegqZEkiWzUBIQRbNQI2GgAXSUEAYyI1BCM1BkkhCQxAACpJIQoMQAAKIQoSRDYaAUIA+CEJEkQ0ASUSRClkKGRQSTUDV2AINQdCBZVJIQsMQAAIIQsSRCpCADmBvvOm1wMSRDQBJRJEKWQoZFBJNQNXmgE1B0IFaTYaAhc1BDYaAzYaARdJJAxAAYNJJQxAAJklEkQhDDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUkhBVs1/yENWzX+V4giNf1JNQU1/IAEaJJkYzT8ULA0/VcRETX7NP40/4gFRIAJAAAAAAAAAkEBsCg1BzQDVwAgNAMhBls0/zQDVzA4NP40AyEOWzQDgXhbMQAjMgY0A4GAAVs0/TT7SSJbNP4IFlwAXBE0A4GqAVtCAmJIJTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpJVwAgNf8hBVs1/iEHWzX9gWBbNfxXcCI1+0k1BTX6gATOPHBmNPpQsDT6FzX5MQA0/xJENPk0/AhJNfg0/Q1JNfdBAAo0+DT9CTX2QgADIjX2NPk09gk19TT7VxERNfQ09TT+iARzNPdBAAo0+DT9CTXzQgADIjXzgAgAAAAAAAACbzT8FlCwNPwWNQc0/zQDIQZbNP40/TQDVzggNAOBWFs0/DT5NPMJCDIGNAMhDVs0+zT0SSJbNPUIFlwAXBE0A4GSAVtCAopJIwxAAIsjEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSklXACA1/yEGWzX+IQdbNf0hDls1/Fd4IjX7gASai5F0sDT7VwARNfo0/TT+iAO/NP8xABJENP80/jQDIQVbNANXODg0A4GaAVs0A4GiAVs0/IEyCDT/IjIGNPw0+zT6SSJbNP0IFlwAXAAiQgDtSCEIiANiIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEEWzX+gRBbNf1XGDg1/IAE8ZJYijT/FlA0/hZQNP0WUDT8ULCBEa9JNftJUEk1+klXABEhBK9cAFwASTX5SVcRESEEr1wAXBE1+DT+NP8TRCEIiALzsSKyASKyEiSyEDIKshQ0/7IRsyEIiALbsSKyASKyEiSyEDIKshQ0/rIRszT8IQdbNfc0/CEGWzX2NPc09gxEMQA0/xZQNP4WUDT9FlA0/FAyBhZQNPhQNPcWUDT2FlApSwFXAH9nKEsBV38rZ0gjNQEyBjUCQgIpNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0+TT9DTT7FBBBAD408zT0FlA09RZQNPZQNPcWUDT4FlA0+RZQNPwWUDT+UDT/FlApSwFXAH9nKEsBV38zZ0ghDDUBMgY1AkIBxTT7QQBJNP5XERFJNfIiWzXxsSKyATTxshIkshA087IUNPWyEbM08zT0NPU0+DT6NP009iEFWwgiNPw0/TT+NPI08UkJFlwAXBE0/0IAWrEisgE0/lcAESJbshIkshA087IUNPSyEbOxIrIBNP+yCCOyEDTzsgezsSKyASKyEiSyEDIJshUyCrIUNPWyEbOxIrIBIrISJLIQMgmyFTIKshQ09LIRs0IBAjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0+zT4DDX0NPo0/Q009BBBAEs0+zT4DzXzNPU09hZQNPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/lA0/xZQNPMWUQcIUClLAVcAf2coSwFXfxxnSCU1ATIGNQJCAKo0/lcAEUk18yJbNfKxIrIBNPKyEiSyEDT1NPk09E2yFDT2shGzsSKyATT+NPM08kkJFlwAXABXEREiW7ISJLIQNPk09TT0TbIUNPeyEbOxIrIBNP+yCCOyEDT1sgezsSKyASKyEiSyEDIJshUyCrIUNPeyEbOxIrIBIrISJLIQMgmyFTIKshQ09rIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 178,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T7","name":"elem4","type":"tuple"}],"internalType":"struct T8","name":"v1088","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T7","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v577","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v623","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1080","type":"uint256"}],"name":"Borrower_repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v1090","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v1103","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v1110","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200297838819003601f8101601f191683016001600160401b03811184821017620005fa5783928291604052833981010390610100821262000759576080604051926200004e846200075e565b825184526200006060208401620007b2565b60208501526200007360408401620007b2565b604085015260608301516060850152607f190112620007595760e0604051916200009d836200077a565b620000ab60808201620007b2565b835260a0810151602084015260c081015160408401520151606082015260808201524360035560006080604051620000e3816200075e565b82815282602082015282604082015282606082015201526040519062000109826200077a565b62000113620007c7565b82526200011f620007e8565b60208301526200012e620007e8565b60408301526200013d620007e8565b606083015260ff6004541662000740577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b03604085015116606082015260608401516080820152620001c0608085015160a08301906200082f565ba18051801590811562000733575b50156200071a5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200021e8362000796565b600083526020830152604082015262000236620007e8565b9160005b60028110620006e057505081528060408401526020810151604060208201519101511515604051916200026d8362000796565b600083526020830152604082015262000285620007e8565b9160005b60028110620006905750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006885760005b156200066f5734620006565760808101516020606082015191015111156200063d57604051916001600160401b03610120840190811190841117620005fa5760209160606080926101208601604052600086526000858701526000604087015260008287015260405162000338816200077a565b600081526000868201526000604082015260008382015284870152600060a087015262000364620007e8565b60c0870152600060e0870152600061010087015233865260018060a01b0385840151168587015260018060a01b036040840151166040870152818301518287015283830151848701524360a0870152015160c0850152606082820151015160e0850152015101516101008201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000426608082015160a08401906200082f565b60a081015161012083015260c0810151600061014084015b60028210620006105760e08401516102008601526101008401516102208087019190915285528461024081016001600160401b03811182821017620005fa5760405280516001600160401b038111620005fa57600254600181811c91168015620005ef575b6020821014620005d957601f81116200056f575b50602091601f82116001146200050557918192600092620004f9575b50508160011b916000199060031b1c1916176002555b6040516120f49081620008848239f35b015190508280620004d3565b601f19821692600260005260206000209160005b85811062000556575083600195106200053c575b505050811b01600255620004e9565b015160001960f88460031b161c191690558280806200052d565b9192602060018192868501518155019401920162000519565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005ce575b601f0160051c01905b818110620005c15750620004b7565b60008155600101620005b2565b9091508190620005a9565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004a3565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200043e565b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b6001620002c4565b6200069c81836200085b565b51620006a982866200085b565b52620006b681856200085b565b506000198114620006ca5760010162000289565b634e487b7160e01b600052601160045260246000fd5b620006ec81836200085b565b51620006f982866200085b565b526200070681856200085b565b506000198114620006ca576001016200023a565b60405163100960cb60e01b8152600a6004820152602490fd5b90506001541438620001ce565b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b60a081019081106001600160401b03821117620005fa57604052565b608081019081106001600160401b03821117620005fa57604052565b606081019081106001600160401b03821117620005fa57604052565b51906001600160a01b03821682036200075957565b60405190620007d68262000796565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620005fa5781528260005b8281106200081757505050565b60209062000824620007c7565b81840152016200080a565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060028110156200086d5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063160a366a146100e05780631e93b0f1146100d75780633c496554146100ce5780634cd87555146100c5578063573b8510146100bc578063823c0a8d146100b357806383230757146100aa578063ab53f2c6146100a1578063ea121ca3146100985763f9d773330361000e576100936105b6565b61000e565b50610093610550565b506100936104db565b506100936104bc565b5061009361046b565b50610093610266565b506100936101e9565b5061009361017d565b5061009361015e565b506100936100ff565b60409060031901126100fa57600490565b600080fd5b5060403660031901126100fa57610115366100e9565b61011d610835565b6040823603126100fa576101539160206040519161013a83610680565b803583520135610149816108b7565b602082015261145a565b602060405160008152f35b50346100fa5760003660031901126100fa576020600354604051908152f35b50346100fa5760003660031901126100fa57610197610835565b6005600054036101d057606060209160c06101c16101b361071d565b858082518301019101610949565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b50346100fa5760003660031901126100fa57610203610835565b60056000540361024d5760806102499161014061023061022161071d565b60208082518301019101610949565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b815260086004820152602490fd5b506020806003193601126100fa5761027c610835565b5061045561028936612013565b916102a56102a061029c60045460ff1690565b1590565b6109f8565b60408051338152845160208201529093610442917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a16102ec600160005414610a18565b61031a6103086102fa61071d565b858082518301019101612033565b9151801590811561045f575b50610a38565b6103243415610a58565b8281019261043d60c06103378651610897565b9361035161034c60608301968751903361101d565b610a78565b61036d3360018060a01b036103668451610897565b1614610a98565b61039d61039561037b6113cc565b9861038f6103898551610897565b8b610cc6565b51610897565b858901610cc6565b6103b46103ac8a830151610897565b8a8901610cc6565b6080810151606088015260e081015160808801526101008082015160a0890152600060a08301916103e58351610fce565b858b01526103ff6103f68551610897565b60e08c01610cc6565b8901524361012089015251610140880152015191825193845190510193888282015191015115159161042f6107c8565b958652850152151587840152565b61116f565b6101608201526000610180820152611985565b5160008152602090f35b90506001541438610314565b5060003660031901126100fa5760206040610484610835565b6104b0818351610493816106a8565b6000815261049f61087e565b90600082525115158682015261145a565b01511515604051908152f35b50346100fa5760003660031901126100fa576020600154604051908152f35b50346100fa5760008060031936011261054d5780546104f861071d565b906040519283918252602090604082840152835191826040850152815b83811061053657505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610515565b80fd5b5060403660031901126100fa57610566366100e9565b61056e610835565b813603604081126100fa5760206040519161058883610680565b84358352601f1901126100fa57610153926020604051916105a8836106a8565b013581526020820152610cfc565b5060203660031901126100fa576020806105ce610835565b610625816040516105de816106a8565b6040516105ea816106a8565b8082526004359052604051906105ff82610680565b6000825285820190604051610613816106a8565b60008152825260008352519052610cfc565b0151604051908152f35b90600182811c9216801561065f575b602083101461064957565b634e487b7160e01b600052602260045260246000fd5b91607f169161063e565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761069b57604052565b6106a3610669565b604052565b602081019081106001600160401b0382111761069b57604052565b606081019081106001600160401b0382111761069b57604052565b61016081019081106001600160401b0382111761069b57604052565b601f909101601f19168101906001600160401b0382119082101761069b57604052565b60405190600082600254916107318361062f565b8083526001938085169081156107a75750600114610759575b50610757925003836106fa565b565b600260009081526000805160206120c883398151915294602093509091905b81831061078f57505061075793508201013861074a565b85548884018501529485019487945091830191610778565b905061075794506020925060ff191682840152151560051b8201013861074a565b60405190610757826106c3565b6040519061016082016001600160401b0381118382101761069b57604052565b6040519061014082016001600160401b0381118382101761069b57604052565b6040519061012082016001600160401b0381118382101761069b57604052565b6040519060a082016001600160401b03811183821017610871575b60405260006080838281528260208201528260408201528260608201520152565b610879610669565b610850565b6040519061088b82610680565b60006020838281520152565b6001600160a01b031690565b51906001600160a01b03821682036100fa57565b801515036100fa57565b5190610757826108b7565b9080601f830112156100fa576040918251926108e784610680565b839260c08301928184116100fa57935b83851061090657505050505090565b6060858303126100fa57825160609161091e826106c3565b8651825260209182880151838201528588015161093a816108b7565b868201528152019401936108f7565b610200818303126100fa576101e06109ef916109636107d5565b9361096d826108a3565b855261097b602083016108a3565b602086015261098c604083016108a3565b6040860152606082015160608601526109a7608083016108a3565b608086015260a082015160a086015260c082015160c086015260e082015160e08601526109d9610100918284016108cc565b908501526101c0810151610120850152016108c1565b61014082015290565b156109ff57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610a1f57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610a3f57565b60405163100960cb60e01b815260106004820152602490fd5b15610a5f57565b60405163100960cb60e01b815260116004820152602490fd5b15610a7f57565b60405163100960cb60e01b815260126004820152602490fd5b15610a9f57565b60405163100960cb60e01b815260136004820152602490fd5b15610abf57565b60405163100960cb60e01b815260146004820152602490fd5b15610adf57565b60405163100960cb60e01b815260156004820152602490fd5b15610aff57565b60405163100960cb60e01b815260166004820152602490fd5b15610b1f57565b60405163100960cb60e01b815260176004820152602490fd5b15610b3f57565b60405163100960cb60e01b815260186004820152602490fd5b15610b5f57565b60405163100960cb60e01b815260196004820152602490fd5b15610b7f57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610b9f57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610bbf57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610bdf57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610bff57565b60405163100960cb60e01b8152601e6004820152602490fd5b6001600160a01b03169052565b6040908151610c3381610680565b8092600091825b828110610c475750505050565b6020908351610c55816106c3565b858152858382015285858201528184015201610c3a565b60405190610c79826106de565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610cbc610c25565b6101208201520152565b6001600160a01b039091169052565b906002811015610ce65760051b0190565b634e487b7160e01b600052603260045260246000fd5b610e3891610d08610835565b90610d20610d1b61029c60045460ff1690565b610ab8565b60408051338152845160208083019190915285015151818301529092610d8f917f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1610d74600560005414610ad8565b610d7c61071d565b6020928184808094518301019101610949565b95610da581518015908115610fab575b50610af8565b610dc1610dba610db58951610897565b610897565b3314610b18565b0190815151610dd660c0880191825190610ff1565b80835260608801805191909110858401818152969015610fa057610dfd8451835190611005565b888501525b610e4c610e158651518a87015190611005565b9760608601988952610e273415610b38565b610e46610e418b8d019d8e51610897565b8b51903361101d565b610b58565b51151590565b15610f9457610e5e8451835190611005565b60808501525b825188519081527f5b68acd092e00e1aef8058fda460ece945ee5b4aaaf56c56debeb3c7e09995ed90602090a1858351910152610e9f610c6c565b988851610eab90610897565b610eb5908b610cc6565b85890151610ec290610897565b610ece908b8801610cc6565b51610ed890610897565b610ee4908a8901610cc6565b5160608901526080870151610ef890610897565b610f059060808a01610cc6565b60a087015160a0890152519151519060800151610f2191611005565b610f2a91610ff1565b60c08601524360e086015260e084015161010090818701528401519281840151928351905101928183820151910151151592610f646107c8565b94855284015290151590820152610f7a916111cc565b906101209182840152015161014082015261075790611ddd565b60006080850152610e64565b600088850152610e02565b90506001541438610d9f565b50634e487b7160e01b600052601160045260246000fd5b906032820191828111610fe4575b82106100fa57565b610fec610fb7565b610fdc565b9190820191828111610fe45782106100fa57565b9081039081116110125790565b61101a610fb7565b90565b6040516323b872dd60e01b602082019081526001600160a01b03928316602483015230604483015260648083019590955293815261101a936000938493909284919060a081016001600160401b038111828210176110a0575b6040525193165af16110906110896110ad565b809261110f565b50602080825183010191016110fa565b6110a8610669565b611076565b3d156110f5573d906001600160401b0382116110e8575b604051916110dc601f8201601f1916602001846106fa565b82523d6000602084013e565b6110f0610669565b6110c4565b606090565b908160209103126100fa575161101a816108b7565b156111175790565b80511561112657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156111475790565b80511561115657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611179610c25565b9260005b6002811061118b5750508252565b8061119860019284610cd5565b516111a38288610cd5565b526111ae8187610cd5565b5060001981146111bf575b0161117d565b6111c7610fb7565b6111b9565b91906111d6610c25565b9260005b600281106111eb5750506020830152565b806111f860019284610cd5565b516112038288610cd5565b5261120e8187610cd5565b50600019811461121f575b016111da565b611227610fb7565b611219565b9190611236610c25565b9260005b600281106112485750508252565b8061125560019284610cd5565b516112608288610cd5565b5261126b8187610cd5565b50600019811461127c575b0161123a565b611284610fb7565b611276565b91908260809103126100fa57604051608081016001600160401b038111828210176112dd575b60405260608082946112c0816108a3565b845260208101516020850152604081015160408501520151910152565b6112e5610669565b6112af565b90610240828203126100fa576102206113016107f5565b9261130b816108a3565b8452611319602082016108a3565b602085015261132a604082016108a3565b604085015261133c8360608301611289565b606085015260e081015160808501526101008082015160a086015261137c610120948584015160c088015261014084015160e088015261016084016108cc565b9085015201519082015290565b60405190608082016001600160401b038111838210176113bf575b60405260006060838281528260208201528260408201520152565b6113c7610669565b6113a4565b604051906101a082016001600160401b0381118382101761144d575b60405281610180600091828152826020820152826040820152611409611389565b60608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015282610140820152611443610c25565b6101608201520152565b611455610669565b6113e8565b6107579161147561147061029c60045460ff1690565b610b78565b6040805133815283516020808301919091528401511515818301529092907fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d90606090a16114c7600760005414610b98565b6116356114d261071d565b926114fc6114ea6020958680825183010191016112ea565b93518015908115611648575b50610bb8565b6115063415610bd8565b84830194611565816115188851610897565b9361153261152d60808901968751903361101d565b610bf8565b8151600181527ffedbf445eb7f79e7b29d452a6af329b1a6968060608f6c7477c53f12f79b7b5790602090a10160019052565b6115a661159e6115736113cc565b976115876115818851610897565b8a610cc6565b61038f61159689890151610897565b898b01610cc6565b828801610cc6565b606084015160608701528151608087015260a084015160a087015260c084015160c08701526115d83360e08801610cc6565b611630610100956115eb87890160019052565b6101209643888a015260e08701516101408a015286015192818401519485519051019481838201519101511515926116216107c8565b96875286015284019015159052565b6111cc565b6101608401520151610180820152611985565b905060015414386114f6565b506040513d6000823e3d90fd5b81811061166c575050565b60008155600101611661565b61168360025461062f565b8061168b5750565b601f811160011461169e57506000600255565b60026000526116e390601f0160051c6000805160206120c8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611661565b6000602081208160025555565b6040519061014082016001600160401b0381118382101761175c575b6040528161012060009182815282602082015282604082015261172d611389565b60608201528260808201528260a08201528260c08201528260e0820152611752610c25565b6101008201520152565b611764610669565b61170c565b6000915b6002831061177a57505050565b60019060608351918251815260209283810151848301526040809101511515908201520192019201919061176d565b9190916102206102408201936117c0838251610c18565b6117d260208201516020850190610c18565b6117e460408201516040850190610c18565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015261185660c082015192610120938487015260e0830151610140870152820151610160860190611769565b0151910152565b90601f821161186a575050565b6107579160026000526020600020906020601f840160051c83019310611898575b601f0160051c0190611661565b909150819061188b565b80519091906001600160401b038111611978575b6118ca816118c560025461062f565b61185d565b602080601f831160011461190657508192936000926118fb575b50508160011b916000199060031b1c191617600255565b0151905038806118e4565b6002600052601f198316949091906000805160206120c8833981519152926000905b878210611960575050836001959610611947575b505050811b01600255565b015160001960f88460031b161c1916905538808061193c565b80600185968294968601518155019501930190611928565b611980610669565b6118b6565b60c08101805161014080840191825110600090600014611c5a575061010084015115611c535760005b15611a89575050611a84611a7691610757936119c86116f0565b916119dc6119d68351610897565b84610cc6565b6119f56119ec6020840151610897565b60208501610cc6565b611a0e611a056040840151610897565b60408501610cc6565b606082015160608401526080820151608084015260a082015160a08401525160c0830152610180610120918281015160e0850152610160810151610100850152015190820152611a5e6007600055565b611a6743600155565b604051928391602083016117a9565b03601f1981018352826106fa565b6118a2565b90915061010091611a9c83850151151590565b15611bc7578361018091611bb86040610757970195611abb8751610897565b90611aec611ac98651610897565b610160870193611ada855160200190565b5151916001600160a01b031690611c5f565b611b30611b27611afa610c6c565b99611b0e611b088951610897565b8c610cc6565b61038f611b1e60208a0151610897565b60208d01610cc6565b60408a01610cc6565b60a08501516060890152611b53611b4a60e0870151610897565b60808a01610cc6565b611b67845160406060880151015190610ff1565b60a0890152600060c0890152610120938486015160e08a0152519088015251602081015190611630604060208401519301511515611ba36107c8565b93600085526020850152604084019015159052565b90850152015190820152611ddd565b5050506000808083611c04611be0602084970151610897565b611bea8351610897565b6101608401515151916001600160a01b0390911690611c5f565b610180611c14610db58351610897565b91015190828215611c4a575bf115611c3d575b60008055611c356000600155565b610757611678565b611c45611654565b611c27565b506108fc611c20565b60016119ae565b6119ae565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611ccb93600093849392849190608081016001600160401b03811182821017611cd2575b6040525193165af1611090611cc46110ad565b809261113f565b156100fa57565b611cda610669565b611cb1565b60405190611cec826106de565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611d28610c25565b610100820152826101208201520152565b610757909291926101e0610140610200830195611d57848251610c18565b611d6960208201516020860190610c18565b611d7b60408201516040860190610c18565b60608101516060850152611d9760808201516080860190610c18565b60a081015160a085015260c081015160c085015260e081015160e0850152611dc86101008083015190860190611769565b6101208101516101c085015201511515910152565b611de561087e565b60c08201805160608401805191909111835292919060a083019081519161010092838601511060009060001461200e5750835115155b15611f065793611edc611a8494610757979484611a7698611e4b6020611ee498518a511115950194859015159052565b611e53611cdf565b97611e616115818851610897565b611e7a611e716020890151610897565b60208b01610cc6565b611e93611e8a6040890151610897565b60408b01610cc6565b516060890152611ea9611b4a6080880151610897565b5160a08801525160c087015260e084015160e0870152610120908185015190870152610140809401519086015251151590565b151590830152565b611eee6005600055565b611ef743600155565b60405192839160208301611d39565b505050600080935082611fd6829493611f23602085960151610897565b90611f2e8151151590565b8514611fff57611f416080850151610897565b61012085018051515190936001600160a01b0392611f63929190841690611c5f565b611f7a611f736040870151610897565b9251151590565b8614611fe657611fcc611fc6611f908751610897565b945b51805190611fc1604060208401519301511515611fad6107c8565b938c85526020850152604084019015159052565b61122c565b60200190565b5151921690611c5f565b610140611c14610db58351610897565b611fcc611fc6611ff96080880151610897565b94611f92565b6120098451610897565b611f41565b611e1b565b60209060031901126100fa576040519061202c826106a8565b6004358252565b90610220828203126100fa5761020061204a610815565b92612054816108a3565b8452612062602082016108a3565b6020850152612073604082016108a3565b60408501526060810151606085015261208f8360808301611289565b60808501526120ae610100938483015160a087015261012083016108cc565b60c08501526101e081015160e08501520151908201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10616,
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
