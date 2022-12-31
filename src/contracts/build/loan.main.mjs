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
      const [v528, v529, v530, v531, v532, v541, v545, v546] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v528, v529, v530, v546, v562, v641, v680, v681, v688, v689, v712] = svs;
      return (await ((async () => {
        
        
        return v681;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v528, v529, v530, v532, v545, v546, v561, v570, v571, v603] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v528, v529, v530, v531, v532, v541, v545, v546] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v528, v529, v530, v546, v562, v641, v680, v681, v688, v689, v712] = svs;
      return (await ((async () => {
        
        
        return v641;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v528, v529, v530, v532, v545, v546, v561, v570, v571, v603] = svs;
      return (await ((async () => {
        
        
        return v603;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v528, v529, v530, v531, v532, v541, v545, v546] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v528, v529, v530, v546, v562, v641, v680, v681, v688, v689, v712] = svs;
      return (await ((async () => {
        
        
        return v712;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v528, v529, v530, v532, v545, v546, v561, v570, v571, v603] = svs;
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
      1: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4]
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
  const ctc9 = stdlib.T_Tuple([ctc7, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v502 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v503 = [v502, v502];
  const v509 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan.rsh:42:43:application',
    fs: ['at ./src/contracts/loan.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:40:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v510 = v509.address;
  const v511 = v509.amount;
  const v512 = v509.collateral;
  const v513 = v509.maturation;
  const v514 = v509.principal;
  const v515 = v509.tokCollateral;
  const v516 = v509.tokLoan;
  const v524 = stdlib.lt(v514, v511);
  stdlib.assert(v524, {
    at: './src/contracts/loan.rsh:44:23:application',
    fs: ['at ./src/contracts/loan.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:40:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v525 = stdlib.tokenEq(v515, v516);
  const v526 = v525 ? false : true;
  stdlib.assert(v526, {
    at: './src/contracts/loan.rsh:45:23:application',
    fs: ['at ./src/contracts/loan.rsh:40:15:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:40:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v527 = {
    address: v510,
    amount: v511,
    maturation: v513,
    principal: v514
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v515, v516, v512, v527],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v529, v530, v531, v532], secs: v534, time: v533, didSend: v51, from: v528 } = txn1;
      
      const v535 = v503[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v536 = stdlib.Array_set(v535, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v537 = stdlib.Array_set(v503, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'), v536);
      const v539 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '1')];
      const v540 = stdlib.Array_set(v539, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v541 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '1'), v540);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v529
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v530
        });
      ;
      const v545 = v532.principal;
      const v546 = v532.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v529, v530, v531, v532], secs: v534, time: v533, didSend: v51, from: v528 } = txn1;
  const v535 = v503[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v536 = stdlib.Array_set(v535, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v537 = stdlib.Array_set(v503, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'), v536);
  const v539 = v537[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '1')];
  const v540 = stdlib.Array_set(v539, '0', stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v541 = stdlib.Array_set(v537, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:47:11:dot', stdlib.UInt_max, '1'), v540);
  const v543 = stdlib.tokenEq(v530, v529);
  const v544 = v543 ? false : true;
  stdlib.assert(v544, {
    at: './src/contracts/loan.rsh:47:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v545 = v532.principal;
  const v546 = v532.amount;
  const v547 = stdlib.lt(v545, v546);
  stdlib.assert(v547, {
    at: './src/contracts/loan.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v528, v529, v530, v531, v532, v541, v545, v546],
    evt_cnt: 0,
    funcNum: 1,
    lct: v533,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0'), [[v531, v529]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v550, time: v549, didSend: v61, from: v548 } = txn2;
      
      ;
      const v551 = v541[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v553 = stdlib.add(v552, v531);
      const v555 = stdlib.Array_set(v551, '0', v553);
      const v556 = stdlib.Array_set(v541, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0'), v555);
      sim_r.txns.push({
        amt: v531,
        kind: 'to',
        tok: v529
        });
      
      const v561 = stdlib.safeAdd(v549, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '23351'));
      const v562 = v528;
      const v563 = false;
      const v564 = v549;
      const v570 = v556;
      const v571 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:38:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v591 = stdlib.le(v564, v561);
        const v592 = v563 ? false : true;
        const v593 = v591 ? v592 : false;
        
        return v593;})()) {
        const v600 = stdlib.le(v564, v561);
        const v601 = v563 ? false : true;
        const v602 = v600 ? v601 : false;
        const v603 = v602 ? true : v563;
        sim_r.isHalt = false;
        }
      else {
        const v638 = stdlib.le(v564, v561);
        const v639 = v563 ? false : true;
        const v640 = v638 ? v639 : false;
        const v641 = v640 ? true : v563;
        if (v563) {
          const v667 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '1')];
          const v668 = v667[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '0')];
          const v674 = stdlib.sub(v668, v668);
          const v676 = stdlib.Array_set(v667, '0', v674);
          const v677 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:55:application', stdlib.UInt_max, '1'), v676);
          sim_r.txns.push({
            kind: 'from',
            to: v528,
            tok: v530
            });
          const v679 = v532.maturation;
          const v680 = stdlib.safeAdd(v564, v679);
          const v681 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v682 = v564;
          const v688 = v677;
          const v689 = v571;
          
          if (await (async () => {
            const v707 = stdlib.le(v682, v680);
            const v709 = stdlib.lt(v681, v546);
            const v710 = v707 ? v709 : false;
            
            return v710;})()) {
            const v712 = stdlib.ge(v681, v546);
            sim_r.isHalt = false;
            }
          else {
            const v800 = v688[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
            const v801 = v800[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
            const v803 = stdlib.lt(v681, v546);
            const v804 = v803 ? v562 : v528;
            const v810 = stdlib.sub(v801, v801);
            const v812 = stdlib.Array_set(v800, '0', v810);
            const v813 = stdlib.Array_set(v688, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v812);
            sim_r.txns.push({
              kind: 'from',
              to: v804,
              tok: v529
              });
            const v814 = v813[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
            const v815 = v814[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
            const v818 = v803 ? v528 : v562;
            sim_r.txns.push({
              kind: 'from',
              to: v818,
              tok: v530
              });
            sim_r.txns.push({
              kind: 'from',
              to: v528,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v530
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v529
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v643 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:80:33:application', stdlib.UInt_max, '0')];
          const v644 = v643[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:80:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v528,
            tok: v529
            });
          sim_r.txns.push({
            kind: 'from',
            to: v528,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v530
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v529
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc11, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v550, time: v549, didSend: v61, from: v548 } = txn2;
  ;
  const v551 = v541[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v553 = stdlib.add(v552, v531);
  const v555 = stdlib.Array_set(v551, '0', v553);
  const v556 = stdlib.Array_set(v541, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:50:11:dot', stdlib.UInt_max, '0'), v555);
  ;
  const v557 = stdlib.addressEq(v528, v548);
  stdlib.assert(v557, {
    at: './src/contracts/loan.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v549), {
    at: './src/contracts/loan.rsh:51:27:application',
    fs: ['at ./src/contracts/loan.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:51:27:function exp)', 'at ./src/contracts/loan.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  const v561 = stdlib.safeAdd(v549, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:18:24:decimal', stdlib.UInt_max, '23351'));
  let v562 = v528;
  let v563 = false;
  let v564 = v549;
  let v570 = v556;
  let v571 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:38:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v591 = stdlib.le(v564, v561);
    const v592 = v563 ? false : true;
    const v593 = v591 ? v592 : false;
    
    return v593;})()) {
    const v600 = stdlib.le(v564, v561);
    const v601 = v563 ? false : true;
    const v602 = v600 ? v601 : false;
    const v603 = v602 ? true : v563;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v615], secs: v617, time: v616, didSend: v148, from: v614 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v624 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1')];
    const v625 = v624[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '0')];
    const v626 = stdlib.add(v625, v545);
    const v628 = stdlib.Array_set(v624, '0', v626);
    const v629 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1'), v628);
    ;
    const v630 = true;
    await txn4.getOutput('Lender_lend', 'v630', ctc7, v630);
    const cv562 = v614;
    const cv563 = true;
    const cv564 = v616;
    const cv570 = v629;
    const cv571 = v571;
    
    v562 = cv562;
    v563 = cv563;
    v564 = cv564;
    v570 = cv570;
    v571 = cv571;
    
    txn3 = txn4;
    continue;
    
    }
  const v638 = stdlib.le(v564, v561);
  const v639 = v563 ? false : true;
  const v640 = v638 ? v639 : false;
  const v641 = v640 ? true : v563;
  if (v563) {
    const v667 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '1')];
    const v668 = v667[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '0')];
    const v674 = stdlib.sub(v668, v668);
    const v676 = stdlib.Array_set(v667, '0', v674);
    const v677 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:55:application', stdlib.UInt_max, '1'), v676);
    ;
    const v679 = v532.maturation;
    const v680 = stdlib.safeAdd(v564, v679);
    let v681 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0');
    let v682 = v564;
    let v688 = v677;
    let v689 = v571;
    
    let txn4 = txn3;
    while (await (async () => {
      const v707 = stdlib.le(v682, v680);
      const v709 = stdlib.lt(v681, v546);
      const v710 = v707 ? v709 : false;
      
      return v710;})()) {
      const v712 = stdlib.ge(v681, v546);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v747], secs: v749, time: v748, didSend: v357, from: v746 } = txn5;
      undefined /* setApiDetails */;
      const v751 = v747[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:30:spread', stdlib.UInt_max, '0')];
      const v752 = stdlib.addressEq(v746, v528);
      stdlib.assert(v752, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan.rsh:104:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v754 = stdlib.safeAdd(v751, v681);
      const v756 = stdlib.gt(v754, v546);
      let v757;
      if (v756) {
        const v760 = stdlib.safeSub(v754, v546);
        v757 = v760;
        }
      else {
        v757 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
        }
      const v761 = stdlib.safeSub(v751, v757);
      ;
      const v766 = v688[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1')];
      const v767 = v766[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v768 = stdlib.add(v767, v761);
      const v770 = stdlib.Array_set(v766, '0', v768);
      const v771 = stdlib.Array_set(v688, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1'), v770);
      ;
      let v778;
      if (v756) {
        const v781 = stdlib.safeSub(v754, v546);
        v778 = v781;
        }
      else {
        v778 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
        }
      const v782 = stdlib.safeSub(v751, v778);
      const v784 = stdlib.safeAdd(v681, v782);
      const v786 = stdlib.ge(v784, v546);
      const v788 = [v786, v784, v546];
      await txn5.getOutput('Borrower_repay', 'v788', ctc9, v788);
      const cv681 = v784;
      const cv682 = v748;
      const cv688 = v771;
      const cv689 = v689;
      
      v681 = cv681;
      v682 = cv682;
      v688 = cv688;
      v689 = cv689;
      
      txn4 = txn5;
      continue;
      
      }
    const v800 = v688[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
    const v801 = v800[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
    const v803 = stdlib.lt(v681, v546);
    const v804 = v803 ? v562 : v528;
    const v810 = stdlib.sub(v801, v801);
    const v812 = stdlib.Array_set(v800, '0', v810);
    const v813 = stdlib.Array_set(v688, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v812);
    ;
    const v814 = v813[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
    const v815 = v814[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
    const v818 = v803 ? v528 : v562;
    ;
    ;
    return;
    }
  else {
    const v643 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:80:33:application', stdlib.UInt_max, '0')];
    const v644 = v643[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:80:33:application', stdlib.UInt_max, '0')];
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
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v528, v529, v530, v546, v562, v641, v680, v681, v688, v689, v712] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v713 = ctc.selfAddress();
  const v715 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v716 = v715[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v718 = stdlib.addressEq(v713, v528);
  stdlib.assert(v718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:104:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v720 = stdlib.safeAdd(v716, v681);
  const v722 = stdlib.gt(v720, v546);
  
  let v737;
  if (v722) {
    const v740 = stdlib.safeSub(v720, v546);
    v737 = v740;
    }
  else {
    v737 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
    }
  const v741 = stdlib.safeSub(v716, v737);
  
  const txn1 = await (ctc.sendrecv({
    args: [v528, v529, v530, v546, v562, v641, v680, v681, v688, v689, v712, v715],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:111:42:decimal', stdlib.UInt_max, '0'), [[v741, v530]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v747], secs: v749, time: v748, didSend: v357, from: v746 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v751 = v747[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:30:spread', stdlib.UInt_max, '0')];
      const v754 = stdlib.safeAdd(v751, v681);
      const v756 = stdlib.gt(v754, v546);
      let v757;
      if (v756) {
        const v760 = stdlib.safeSub(v754, v546);
        v757 = v760;
        }
      else {
        v757 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
        }
      const v761 = stdlib.safeSub(v751, v757);
      ;
      const v766 = v688[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1')];
      const v767 = v766[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v768 = stdlib.add(v767, v761);
      const v770 = stdlib.Array_set(v766, '0', v768);
      const v771 = stdlib.Array_set(v688, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1'), v770);
      sim_r.txns.push({
        amt: v761,
        kind: 'to',
        tok: v530
        });
      let v778;
      if (v756) {
        const v781 = stdlib.safeSub(v754, v546);
        v778 = v781;
        }
      else {
        v778 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
        }
      const v782 = stdlib.safeSub(v751, v778);
      const v784 = stdlib.safeAdd(v681, v782);
      const v786 = stdlib.ge(v784, v546);
      const v788 = [v786, v784, v546];
      const v789 = await txn1.getOutput('Borrower_repay', 'v788', ctc7, v788);
      
      const v1053 = v784;
      const v1055 = v771;
      const v1056 = v689;
      const v1057 = stdlib.le(v748, v680);
      const v1058 = stdlib.lt(v784, v546);
      const v1059 = v1057 ? v1058 : false;
      if (v1059) {
        sim_r.isHalt = false;
        }
      else {
        const v1062 = v771[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
        const v1063 = v1062[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
        const v1065 = v1058 ? v562 : v528;
        const v1066 = stdlib.sub(v1063, v1063);
        const v1067 = stdlib.Array_set(v1062, '0', v1066);
        const v1068 = stdlib.Array_set(v771, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v1067);
        sim_r.txns.push({
          kind: 'from',
          to: v1065,
          tok: v529
          });
        const v1069 = v1068[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
        const v1070 = v1069[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
        const v1071 = v1058 ? v528 : v562;
        sim_r.txns.push({
          kind: 'from',
          to: v1071,
          tok: v530
          });
        sim_r.txns.push({
          kind: 'from',
          to: v528,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v530
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v529
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v747], secs: v749, time: v748, didSend: v357, from: v746 } = txn1;
  undefined /* setApiDetails */;
  const v751 = v747[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:103:30:spread', stdlib.UInt_max, '0')];
  const v752 = stdlib.addressEq(v746, v528);
  stdlib.assert(v752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan.rsh:104:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)', 'at ./src/contracts/loan.rsh:103:53:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v754 = stdlib.safeAdd(v751, v681);
  const v756 = stdlib.gt(v754, v546);
  let v757;
  if (v756) {
    const v760 = stdlib.safeSub(v754, v546);
    v757 = v760;
    }
  else {
    v757 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
    }
  const v761 = stdlib.safeSub(v751, v757);
  ;
  const v766 = v688[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1')];
  const v767 = v766[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '0')];
  const v768 = stdlib.add(v767, v761);
  const v770 = stdlib.Array_set(v766, '0', v768);
  const v771 = stdlib.Array_set(v688, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:50:dot', stdlib.UInt_max, '1'), v770);
  ;
  let v778;
  if (v756) {
    const v781 = stdlib.safeSub(v754, v546);
    v778 = v781;
    }
  else {
    v778 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:108:51:decimal', stdlib.UInt_max, '0');
    }
  const v782 = stdlib.safeSub(v751, v778);
  const v784 = stdlib.safeAdd(v681, v782);
  const v786 = stdlib.ge(v784, v546);
  const v788 = [v786, v784, v546];
  const v789 = await txn1.getOutput('Borrower_repay', 'v788', ctc7, v788);
  if (v357) {
    stdlib.protect(ctc8, await interact.out(v747, v789), {
      at: './src/contracts/loan.rsh:103:31:application',
      fs: ['at ./src/contracts/loan.rsh:103:31:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:103:31:function exp)', 'at ./src/contracts/loan.rsh:114:55:application call to "notify" (defined at: ./src/contracts/loan.rsh:112:50:function exp)', 'at ./src/contracts/loan.rsh:112:50:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:112:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1053 = v784;
  const v1055 = v771;
  const v1056 = v689;
  const v1057 = stdlib.le(v748, v680);
  const v1058 = stdlib.lt(v784, v546);
  const v1059 = v1057 ? v1058 : false;
  if (v1059) {
    return;
    }
  else {
    const v1062 = v771[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
    const v1063 = v1062[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
    const v1065 = v1058 ? v562 : v528;
    const v1066 = stdlib.sub(v1063, v1063);
    const v1067 = stdlib.Array_set(v1062, '0', v1066);
    const v1068 = stdlib.Array_set(v771, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v1067);
    ;
    const v1069 = v1068[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
    const v1070 = v1069[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
    const v1071 = v1058 ? v528 : v562;
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
  
  
  const [v528, v529, v530, v532, v545, v546, v561, v570, v571, v603] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4]);
  const v606 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan.rsh:1:23:application',
    fs: ['at ./src/contracts/loan.rsh:69:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:69:39:function exp)', 'at ./src/contracts/loan.rsh:69:39:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:69:39:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v528, v529, v530, v532, v545, v546, v561, v570, v571, v603, v606],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan.rsh:71:34:decimal', stdlib.UInt_max, '0'), [[v545, v530]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v615], secs: v617, time: v616, didSend: v148, from: v614 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Lender_lend"
        });
      ;
      const v624 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1')];
      const v625 = v624[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '0')];
      const v626 = stdlib.add(v625, v545);
      const v628 = stdlib.Array_set(v624, '0', v626);
      const v629 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1'), v628);
      sim_r.txns.push({
        amt: v545,
        kind: 'to',
        tok: v530
        });
      const v630 = true;
      const v631 = await txn1.getOutput('Lender_lend', 'v630', ctc4, v630);
      
      const v1072 = v614;
      const v1075 = v629;
      const v1076 = v571;
      const v1077 = stdlib.le(v616, v561);
      const v1079 = v1077 ? false : false;
      if (v1079) {
        const v1083 = true;
        sim_r.isHalt = false;
        }
      else {
        const v1087 = true;
        const v1088 = v629[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '1')];
        const v1089 = v1088[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '0')];
        const v1090 = stdlib.sub(v1089, v1089);
        const v1091 = stdlib.Array_set(v1088, '0', v1090);
        const v1092 = stdlib.Array_set(v629, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:55:application', stdlib.UInt_max, '1'), v1091);
        sim_r.txns.push({
          kind: 'from',
          to: v528,
          tok: v530
          });
        const v1093 = v532.maturation;
        const v1094 = stdlib.safeAdd(v616, v1093);
        const v1140 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0');
        const v1142 = v1092;
        const v1143 = v571;
        const v1144 = stdlib.le(v616, v1094);
        const v1145 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0'), v546);
        const v1146 = v1144 ? v1145 : false;
        if (v1146) {
          const v1147 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0'), v546);
          sim_r.isHalt = false;
          }
        else {
          const v1149 = v1092[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
          const v1150 = v1149[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
          const v1152 = v1145 ? v614 : v528;
          const v1153 = stdlib.sub(v1150, v1150);
          const v1154 = stdlib.Array_set(v1149, '0', v1153);
          const v1155 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v1154);
          sim_r.txns.push({
            kind: 'from',
            to: v1152,
            tok: v529
            });
          const v1156 = v1155[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
          const v1157 = v1156[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
          const v1158 = v1145 ? v528 : v614;
          sim_r.txns.push({
            kind: 'from',
            to: v1158,
            tok: v530
            });
          sim_r.txns.push({
            kind: 'from',
            to: v528,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v530
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v529
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
    tys: [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v615], secs: v617, time: v616, didSend: v148, from: v614 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v624 = v570[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1')];
  const v625 = v624[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '0')];
  const v626 = stdlib.add(v625, v545);
  const v628 = stdlib.Array_set(v624, '0', v626);
  const v629 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:54:54:dot', stdlib.UInt_max, '1'), v628);
  ;
  const v630 = true;
  const v631 = await txn1.getOutput('Lender_lend', 'v630', ctc4, v630);
  if (v148) {
    stdlib.protect(ctc8, await interact.out(v615, v631), {
      at: './src/contracts/loan.rsh:69:23:application',
      fs: ['at ./src/contracts/loan.rsh:69:23:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:69:23:function exp)', 'at ./src/contracts/loan.rsh:73:47:application call to "notify" (defined at: ./src/contracts/loan.rsh:72:42:function exp)', 'at ./src/contracts/loan.rsh:72:42:application call to [unknown function] (defined at: ./src/contracts/loan.rsh:72:42:function exp)'],
      msg: 'out',
      who: 'Lender_lend'
      });
    }
  else {
    }
  
  const v1072 = v614;
  const v1075 = v629;
  const v1076 = v571;
  const v1077 = stdlib.le(v616, v561);
  const v1079 = v1077 ? false : false;
  if (v1079) {
    const v1083 = true;
    return;
    }
  else {
    const v1087 = true;
    const v1088 = v629[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '1')];
    const v1089 = v1088[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:33:application', stdlib.UInt_max, '0')];
    const v1090 = stdlib.sub(v1089, v1089);
    const v1091 = stdlib.Array_set(v1088, '0', v1090);
    const v1092 = stdlib.Array_set(v629, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:85:55:application', stdlib.UInt_max, '1'), v1091);
    ;
    const v1093 = v532.maturation;
    const v1094 = stdlib.safeAdd(v616, v1093);
    const v1140 = stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0');
    const v1142 = v1092;
    const v1143 = v571;
    const v1144 = stdlib.le(v616, v1094);
    const v1145 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0'), v546);
    const v1146 = v1144 ? v1145 : false;
    if (v1146) {
      const v1147 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan.rsh:88:51:decimal', stdlib.UInt_max, '0'), v546);
      return;
      }
    else {
      const v1149 = v1092[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
      const v1150 = v1149[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:33:application', stdlib.UInt_max, '0')];
      const v1152 = v1145 ? v614 : v528;
      const v1153 = stdlib.sub(v1150, v1150);
      const v1154 = stdlib.Array_set(v1149, '0', v1153);
      const v1155 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./src/contracts/loan.rsh:120:67:application', stdlib.UInt_max, '0'), v1154);
      ;
      const v1156 = v1155[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '1')];
      const v1157 = v1156[stdlib.checkedBigNumberify('./src/contracts/loan.rsh:123:33:application', stdlib.UInt_max, '0')];
      const v1158 = v1145 ? v528 : v614;
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
    impure: [`Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`],
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEEBQgHKCAwoI0G9q6A9APZ9qi8Btfx250HvvOm1wMmAwEBAQAAIjUAMRhBBjIqZEkiWzUBIQRbNQI2GgAXSUEAnSI1BCM1BkkhCgxAADlJIQsMQAAqSSEMDEAACiEMEkQ2GgFCASUhCxJENAElEkQpZChkUEk1A1dhCDUHQgXYIQoSRCpCAHNJIQ0MQAAZIQ0SRDQBJRJEKWQoZFBJNQNXkwE1B0IFsIGPxsUqEkQ0AUkhBQxAABQhBRJEKWQoZFBJNQNXqgE1B0IFjCUSRClkKGRQSTUDV1gBNQdCBXk2GgIXNQQ2GgM2GgEXSSQMQAGeSSUMQACTJRJEIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lJIQZbNf+BaFs1/leAIjX9STUFNfyABGiSZGM0/FCwNP1XERE1+zT+NP+IBVSACQAAAAAAAAJ2AbAoNQc0A1cAIDQDIQdbNP80A1cwODT+NAOBcFs0A4F4WzEAIzIGNP00+0kiWzT+CBZcAFwRNAOBogFbQgJ5SCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQZbNf4hCFs1/YFhWzX8V2kiNftJNQU1+oAEzjxwZjT6ULA0+hc1+TEANP8SRDT5NPwISTX4NP0NSTX3QQAKNPg0/Qk19kIAAyI19jT5NPYJNfU0+1cRETX0NPU0/ogEiTT3QQAKNPg0/Qk180IAAyI18zT8NPk08wkINfKACAAAAAAAAAMUNPI0/Q8WUQcINPIWUDT9FlBQsDTyNP0PFlEHCDTyFlA0/RZQNQc0/zQDIQdbNP40/TQDVzggNANXWAEXNAOBWVs08jIGNPs09EkiWzT1CBZcAFwRNAOBiwFbQgJ8SSMMQACFIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpXACA1/yEHWzX+IQhbNf1XcCI1/IAEmouRdLA0/FcAETX7NP00/ogDujT/MQASRDT/NP40AyEGWzQDVzg4NAOBkgFbNAOBmgFbMgaBt7YBCDT/IjIGNPw0+0kiWzT9CBZcAFwAIkIA6UghCYgDXSI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9Vxg4NfyABPGSWIo0/xZQNP4WUDT9FlA0/FCwgRGvSTX7SVBJNfpJVwARIQSvXABcAEk1+UlXEREhBK9cAFwRNfg0/jT/E0QhCYgC7rEisgEishIkshAyCrIUNP+yEbMhCYgC1rEisgEishIkshAyCrIUNP6yEbM0/CEIWzX3NPwhB1s19jT3NPYMRDEANP8WUDT+FlA0/RZQNPxQNPhQNPcWUDT2FlApSwFXAH9nKEsBV38jZ0gjNQEyBjUCQgIoNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NP00+g40/BQQQQA8NPQ09RZQNPYWUDT3UDT4FlA0+RZQNPoWUDT+UDT/FlAoUClLAVcAf2coSwFXfyxnSCEFNQEyBjUCQgHINPxBAEk0/lcREUk18yJbNfKxIrIBNPKyEiSyEDT0shQ09rIRszT0NPU09jT5NPs0/DT9NPchBlsIIjT9NP408zTySQkWXABcETT/QgBasSKyATT+VwARIluyEiSyEDT0shQ09bIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJLIQMgmyFTIKshQ09rIRs7EisgEishIkshAyCbIVMgqyFDT1shGzQgEFNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8NPgMNfQ0/TT7DjT0EEEATjT8NPgPNfM09TT2FlA09xZQNPgWUDT5UDT6FlEHCFA0+xZQNPwWUDT+UDT/FlA08xZRBwhQKUsBVwB/ZyhLAVd/FWdIJTUBMgY1AkIAqjT+VwARSTXzIls18rEisgE08rISJLIQNPU0+TT0TbIUNPayEbOxIrIBNP408zTySQkWXABcAFcRESJbshIkshA0+TT1NPRNshQ097IRs7EisgE0/7III7IQNPWyB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs7EisgEishIkshAyCbIVMgqyFDT2shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 171,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T8","name":"elem4","type":"tuple"}],"internalType":"struct T10","name":"v1175","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T8","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v630","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v788","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1167","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v1177","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1188","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"v1194","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002b9c38819003601f8101601f191683016001600160401b038111848210176200060f578392829160405283398101039061010082126200076e576040519160a08301906001600160401b038211848310176200060f57608091604052825184526200007160208401620007ab565b60208501526200008460408401620007ab565b604085015260608301516060850152607f1901126200076e5760e060405191620000ae8362000773565b620000bc60808201620007ab565b835260a0810151602084015260c081015160408401520151606082015260808201524360035560405160c0810181811060018060401b038211176200060f5760009160a09160405282815262000111620007c0565b6020820152826040820152826060820152826080820152015260405190620001398262000773565b62000143620007c0565b82526200014f620007e1565b60208301526200015e620007e1565b60408301526200016d620007e1565b606083015260ff6004541662000755577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b03604085015116606082015260608401516080820152620001f0608085015160a083019062000828565ba18051801590811562000748575b50156200072f5760008251526000602083510152600060408351015281516020830151528151602080840151015260208201518051604060208201519101511515604051916200024e836200078f565b600083526020830152604082015262000266620007e1565b9160005b60028110620006f557505081528060408401526020810151604060208201519101511515604051916200029d836200078f565b6000835260208301526040820152620002b5620007e1565b9160005b60028110620006a55750506020820152606083015260018060a01b0360408201511660018060a01b03602083015116146000146200069d5760005b156200068457346200066b5760808101516020606082015191015111156200065257604051916001600160401b036101008401908111908411176200060f57602091606060809261010086016040526000865260008587015260006040870152600082870152604051620003688162000773565b6000815260008682015260006040820152600083820152848701526200038d620007e1565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015260018060a01b03604084015116604087015281830151828701528383015184870152015160a0850152606082820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b0360408201511660608301526060810151608083015262000447608082015160a084019062000828565b60a0810151600061012084015b60028210620006255760c08401516101e086015260e08401516102008087019190915285528461022081016001600160401b038111828210176200060f5760405280516001600160401b0381116200060f57600254600181811c9116801562000604575b6020821014620005ee57601f811162000584575b50602091601f82116001146200051a579181926000926200050e575b50508160011b916000199060031b1c1916176002555b60405161231f90816200087d8239f35b015190508280620004e8565b601f19821692600260005260206000209160005b8581106200056b5750836001951062000551575b505050811b01600255620004fe565b015160001960f88460031b161c1916905582808062000542565b919260206001819286850151815501940192016200052e565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005e3575b601f0160051c01905b818110620005d65750620004cc565b60008155600101620005c7565b9091508190620005be565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004b8565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000454565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b6001620002f4565b620006b1818362000854565b51620006be828662000854565b52620006cb818562000854565b506000198114620006df57600101620002b9565b634e487b7160e01b600052601160045260246000fd5b62000701818362000854565b516200070e828662000854565b526200071b818562000854565b506000198114620006df576001016200026a565b60405163100960cb60e01b8152600c6004820152602490fd5b90506001541438620001fe565b60405163100960cb60e01b8152600b6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200060f57604052565b606081019081106001600160401b038211176200060f57604052565b51906001600160a01b03821682036200076e57565b60405190620007cf826200078f565b60006040838281528260208201520152565b6040805191908281016001600160401b038111848210176200060f5781528260005b8281106200081057505050565b6020906200081d620007c0565b818401520162000803565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906002811015620008665760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063160a366a146100f45780631e93b0f1146100eb5780633c496554146100e25780634cd87555146100d9578063573b8510146100d0578063823c0a8d146100c757806383230757146100be57806394134348146100b5578063ab53f2c6146100ac578063ea121ca3146100a35763f9d773330361000e5761009e610688565b61000e565b5061009e610600565b5061009e61058b565b5061009e6104e2565b5061009e6104c3565b5061009e610472565b5061009e61027a565b5061009e6101fd565b5061009e610191565b5061009e610172565b5061009e610113565b604090600319011261010e57600490565b600080fd5b50604036600319011261010e57610129366100fd565b610131610965565b60408236031261010e576101679160206040519161014e83610761565b80358352013561015d816109f4565b6020820152611665565b602060405160008152f35b503461010e57600036600319011261010e576020600354604051908152f35b503461010e57600036600319011261010e576101ab610965565b6005600054036101e457606060209160e06101d56101c76107fe565b858082518301019101610a86565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b503461010e57600036600319011261010e57610217610965565b6005600054036102615760a061025d916101406102446102356107fe565b60208082518301019101610a86565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b8152600a6004820152602490fd5b5060208060031936011261010e57610290610965565b5061045c61029d3661224a565b916102b96102b46102b060045460ff1690565b1590565b610b3c565b60408051338152845160208201529093610449917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a1610300600160005414610b5c565b61032e61031c61030e6107fe565b85808251830101910161226a565b91518015908115610466575b50610b7c565b6103383415610b9c565b8281019261044460a061034b86516109d4565b9361036561036060608301968751903361132f565b610bbc565b61038033600180851b0361037984516109d4565b1614610bdc565b6103b06103a861038e6115de565b986103a261039c85516109d4565b8b610f9b565b516109d4565b858901610f9b565b6103c76103bf8a8301516109d4565b8a8901610f9b565b6080810151606088015260c0810151608088015260e0810151828801526103ed436112df565b60c08801526104086103ff82516109d4565b60e08901610f9b565b60006101008801524361012088015201519182519384519051019388828201519101511515916104366108a9565b958652850152151587840152565b611481565b6101408201526000610160820152611b8b565b5160008152602090f35b90506001541438610328565b50600036600319011261010e576020604061048b610965565b6104b781835161049a81610789565b600081526104a66109bb565b906000825251151586820152611665565b01511515604051908152f35b503461010e57600036600319011261010e576020600154604051908152f35b503461010e57600036600319011261010e5761025d61053e6080610504610965565b600054600781101561055057600561051c9114610c1c565b61052f61053660a061052f6102356107fe565b0151151590565b151582840152565b60405190151581529081906020820190565b600761055c9114610bfc565b61058661012061057c61056d6107fe565b60208082518301019101610dfd565b0151151582840152565b61052f565b503461010e576000806003193601126105fd5780546105a86107fe565b906040519283918252602090604082840152835191826040850152815b8381106105e657505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016105c5565b80fd5b50604036600319011261010e57610616366100fd565b61061e610965565b8136036040811261010e5760206040519161063883610761565b84358352601f19011261010e576101679260206040519161065883610789565b013581526020820152610fd1565b9190916040806060830194805115158452602081015160208501520151910152565b50602036600319011261010e5761069d610928565b5061025d60206106ab610965565b610702816040516106bb81610789565b6040516106c781610789565b8082526004359052604051906106dc82610761565b60008252858201906040516106f081610789565b60008152825260008352519052610fd1565b015160405191829182610666565b90600182811c92168015610740575b602083101461072a57565b634e487b7160e01b600052602260045260246000fd5b91607f169161071f565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761077c57604052565b61078461074a565b604052565b602081019081106001600160401b0382111761077c57604052565b606081019081106001600160401b0382111761077c57604052565b61016081019081106001600160401b0382111761077c57604052565b601f909101601f19168101906001600160401b0382119082101761077c57604052565b604051906000826002549161081283610710565b808352600193808516908115610888575060011461083a575b50610838925003836107db565b565b600260009081526000805160206122f383398151915294602093509091905b81831061087057505061083893508201013861082b565b85548884018501529485019487945091830191610859565b905061083894506020925060ff191682840152151560051b8201013861082b565b60405190606082016001600160401b0381118382101761077c57604052565b6040519061016082016001600160401b0381118382101761077c57604052565b6040519061014082016001600160401b0381118382101761077c57604052565b6040519061010082016001600160401b0381118382101761077c57604052565b60405190606082016001600160401b03811183821017610958575b60405260006040838281528260208201520152565b61096061074a565b610943565b6040519060c082016001600160401b038111838210176109ae575b604052600060a083828152610993610928565b60208201528260408201528260608201528260808201520152565b6109b661074a565b610980565b604051906109c882610761565b60006020838281520152565b6001600160a01b031690565b51906001600160a01b038216820361010e57565b8015150361010e57565b5190610838826109f4565b9080601f8301121561010e57604091825192610a2484610761565b839260c083019281841161010e57935b838510610a4357505050505090565b60608583031261010e578251606091610a5b826107a4565b86518252602091828801518382015285880151610a77816109f4565b86820152815201940193610a34565b6102008183031261010e576101e0610b3391610aa06108c8565b93610aaa826109e0565b8552610ab8602083016109e0565b6020860152610ac9604083016109e0565b604086015260608201516060860152610ae4608083016109e0565b6080860152610af560a083016109fe565b60a086015260c082015160c086015260e082015160e0860152610b1d61010091828401610a09565b908501526101c0810151610120850152016109fe565b61014082015290565b15610b4357565b60405163100960cb60e01b815260106004820152602490fd5b15610b6357565b60405163100960cb60e01b815260116004820152602490fd5b15610b8357565b60405163100960cb60e01b815260126004820152602490fd5b15610ba357565b60405163100960cb60e01b815260136004820152602490fd5b15610bc357565b60405163100960cb60e01b815260146004820152602490fd5b15610be357565b60405163100960cb60e01b815260156004820152602490fd5b15610c0357565b60405163100960cb60e01b815260096004820152602490fd5b15610c2357565b60405163100960cb60e01b815260086004820152602490fd5b15610c4357565b60405163100960cb60e01b815260166004820152602490fd5b15610c6357565b60405163100960cb60e01b815260176004820152602490fd5b15610c8357565b60405163100960cb60e01b815260186004820152602490fd5b15610ca357565b60405163100960cb60e01b815260196004820152602490fd5b15610cc357565b60405163100960cb60e01b8152601a6004820152602490fd5b15610ce357565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d0357565b60405163100960cb60e01b8152601c6004820152602490fd5b15610d2357565b60405163100960cb60e01b8152601d6004820152602490fd5b15610d4357565b60405163100960cb60e01b8152601e6004820152602490fd5b15610d6357565b60405163100960cb60e01b8152601f6004820152602490fd5b15610d8357565b60405163100960cb60e01b815260206004820152602490fd5b919082608091031261010e57604051608081016001600160401b03811182821017610df0575b6040526060808294610dd3816109e0565b845260208101516020850152604081015160408501520151910152565b610df861074a565b610dc2565b906102408282031261010e57610e9c610220610e176108e8565b93610e21816109e0565b8552610e2f602082016109e0565b6020860152610e40604082016109e0565b6040860152610e528460608301610d9c565b606086015260e081015160808601526101008082015160a0870152610e87610120958684015160c08901526101408401610a09565b60e087015261020082015190860152016109fe565b9082015290565b6040519060e082016001600160401b03811183821017610ef3575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0610eee610928565b910152565b610efb61074a565b610ebe565b6001600160a01b03169052565b604090815191610f1c83610761565b8260005b828110610f2c57505050565b602090610f37610928565b8184015201610f20565b60405190610f4e826107bf565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152610f91610f0d565b6101208201520152565b6001600160a01b039091169052565b906002811015610fbb5760051b0190565b634e487b7160e01b600052603260045260246000fd5b61111a9161106691610fe1610ea3565b91610ff9610ff46102b060045460ff1690565b610c3c565b60408051338152835160208083019190915284015151818301529093907f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a161104a600560005414610c5c565b6110526107fe565b916020958387808096518301019101610a86565b958461107e88965180159081156112bc575b50610c7c565b61109a61109361108e88516109d4565b6109d4565b3314610c9c565b019083825151926110b160e0880194855190611303565b9384865261112e60608901958651106110cf85890191829015159052565b8051156112b1576110e38851885190611317565b8b8901525b6111286111238c6110ff875151828d015190611317565b9c60608c019d8e526111113415610cbc565b019e8f516109d4565b8c51903361132f565b610cdc565b51151590565b156112a5576111408651865190611317565b60808701525b51905151608086015161115891611317565b61116191611303565b60a08501818152845160c09096018051929096111590915293845182825101528351888251015280518851611197819282610666565b037fe45ea5a84778eb813a65884ea75d393d3719404fab0ae5809df308eb5da2d0b791a1519101526111c7610f41565b9686516111d3906109d4565b6111dd9089610f9b565b838701516111ea906109d4565b6111f690898601610f9b565b51611200906109d4565b61120c90888701610f9b565b5160608701526080850151611220906109d4565b61122d9060808801610f9b565b60a08501511515151560a087015260c085015160c08701525160e0860152610100438187015284015192818401519283519051019281838201519101511515926112756108a9565b9485528401529015159082015261128b916114de565b906101209182840152015161014082015261083890611ffc565b60006080870152611146565b60008b8901526110e8565b90506001541438611078565b50634e487b7160e01b600052601160045260246000fd5b90615b378201918281116112f6575b821061010e57565b6112fe6112c8565b6112ee565b91908201918281116112f657821061010e57565b9081039081116113245790565b61132c6112c8565b90565b6040516323b872dd60e01b602082019081526001600160a01b03928316602483015230604483015260648083019590955293815261132c936000938493909284919060a081016001600160401b038111828210176113b2575b6040525193165af16113a261139b6113bf565b8092611421565b506020808251830101910161140c565b6113ba61074a565b611388565b3d15611407573d906001600160401b0382116113fa575b604051916113ee601f8201601f1916602001846107db565b82523d6000602084013e565b61140261074a565b6113d6565b606090565b9081602091031261010e575161132c816109f4565b156114295790565b80511561143857805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156114595790565b80511561146857805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b919061148b610f0d565b9260005b6002811061149d5750508252565b806114aa60019284610faa565b516114b58288610faa565b526114c08187610faa565b5060001981146114d1575b0161148f565b6114d96112c8565b6114cb565b91906114e8610f0d565b9260005b600281106114fd5750506020830152565b8061150a60019284610faa565b516115158288610faa565b526115208187610faa565b506000198114611531575b016114ec565b6115396112c8565b61152b565b9190611548610f0d565b9260005b6002811061155a5750508252565b8061156760019284610faa565b516115728288610faa565b5261157d8187610faa565b50600019811461158e575b0161154c565b6115966112c8565b611588565b60405190608082016001600160401b038111838210176115d1575b60405260006060838281528260208201528260408201520152565b6115d961074a565b6115b6565b6040519061018082016001600160401b03811183821017611658575b6040528161016060009182815282602082015282604082015261161b61159b565b60608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261164e610f0d565b6101408201520152565b61166061074a565b6115fa565b6108389161168061167b6102b060045460ff1690565b610cfc565b6040805133815283516020808301919091528401511515818301529092907fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d90606090a16116d2600760005414610d1c565b6118356116dd6107fe565b926117076116f5602095868082518301019101610dfd565b93518015908115611848575b50610d3c565b6117113415610d5c565b848301946117708161172388516109d4565b9361173d61173860808901968751903361132f565b610d7c565b8151600181527f913050007acac9e177378a174408080c224f6bc72bcef1ec6107b04084d8085790602090a10160019052565b6117b16117a961177e6115de565b9761179261178c88516109d4565b8a610f9b565b6103a26117a1898901516109d4565b898b01610f9b565b828801610f9b565b606084015160608701528151608087015260a084015160a087015260c084015160c08701526117e33360e08801610f9b565b611830610100956117f687890160019052565b4361012089015260e086015192818401519485519051019481838201519101511515926118216108a9565b96875286015284019015159052565b6114de565b6101408401520151610160820152611b8b565b90506001541438611701565b506040513d6000823e3d90fd5b81811061186c575050565b60008155600101611861565b611883600254610710565b8061188b5750565b601f811160011461189e57506000600255565b60026000526118e390601f0160051c6000805160206122f3833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611861565b6000602081208160025555565b6040519061014082016001600160401b0381118382101761195c575b6040528161012060009182815282602082015282604082015261192d61159b565b60608201528260808201528260a08201528260c082015261194c610f0d565b60e0820152826101008201520152565b61196461074a565b61190c565b6000915b6002831061197a57505050565b60019060608351918251815260209283810151848301526040809101511515908201520192019201919061196d565b610838909291926102206102408201946119c4838251610f00565b6119d660208201516020850190610f00565b6119e860408201516040850190610f00565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c0810151916101209283860152611a5160e0830151610140870190611969565b81015161020085015201511515910152565b90601f8211611a70575050565b6108389160026000526020600020906020601f840160051c83019310611a9e575b601f0160051c0190611861565b9091508190611a91565b80519091906001600160401b038111611b7e575b611ad081611acb600254610710565b611a63565b602080601f8311600114611b0c5750819293600092611b01575b50508160011b916000199060031b1c191617600255565b015190503880611aea565b6002600052601f198316949091906000805160206122f3833981519152926000905b878210611b66575050836001959610611b4d575b505050811b01600255565b015160001960f88460031b161c19169055388080611b42565b80600185968294968601518155019501930190611b2e565b611b8661074a565b611abc565b610120908181019081519160c082019283511015600090600014611e77575061010082015115611e705760005b15611c925750611c7f91611c5d61083894610160611c8d94611bd86118f0565b94611bec611be683516109d4565b87610f9b565b611c05611bfc60208401516109d4565b60208801610f9b565b611c1e611c1560408401516109d4565b60408801610f9b565b606082015160608701526080820151608087015260a082015160a08701525160c086015261014081015160e08601520151610100840152820160019052565b611c676007600055565b611c7043600155565b604051928391602083016119a9565b03601f1981018352826107db565b611aa8565b915061010092838201611ca58151151590565b15611de15760408301948551611cba906109d4565b948451611cc6906109d4565b9261014096878701948551611cdb9060200190565b5151611cf29290916001600160a01b031690611e7c565b611cfa610f41565b978651611d06906109d4565b611d10908a610f9b565b6020870151611d1e906109d4565b611d2b9060208b01610f9b565b51611d35906109d4565b611d429060408a01610f9b565b60a0860151606089015260e0860151611d5a906109d4565b611d679060808a01610f9b565b51151560a08801528051606086015160400151611d8391611303565b60c088015260e08701600090525190860152516020810151602081015190604001511515611daf6108a9565b60008152602081019290925215156040820152611dcb916114de565b9084015261016001519082015261083890611ffc565b5050600080935080925081611e21611dfd6020849501516109d4565b611e0783516109d4565b6101408401515151916001600160a01b0390911690611e7c565b610160611e3161108e83516109d4565b91015190828215611e67575bf115611e5a575b60008055611e526000600155565b610838611878565b611e62611854565b611e44565b506108fc611e3d565b6001611bb8565b611bb8565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611ee893600093849392849190608081016001600160401b03811182821017611eef575b6040525193165af16113a2611ee16113bf565b8092611451565b1561010e57565b611ef761074a565b611ece565b60405190611f09826107bf565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611f45610f0d565b610100820152826101208201520152565b610838909291926101e0610140610200830195611f74848251610f00565b611f8660208201516020860190610f00565b611f9860408201516040860190610f00565b60608101516060850152611fb460808201516080860190610f00565b60a08181015115159085015260c081015160c085015260e081015160e0850152611fe76101008083015190860190611969565b6101208101516101c085015201511515910152565b6120046109bb565b60e082018051606084018051919091118352929190610100908184015160c0850190815110156000906000146122455750835115155b1561213d5793612113611c8d94610838979484611c7f9861206a602061211b98518a511115950194859015159052565b612072611efc565b9761208061178c88516109d4565b61209961209060208901516109d4565b60208b01610f9b565b6120b26120a960408901516109d4565b60408b01610f9b565b5160608901526120d16120c860808801516109d4565b60808a01610f9b565b6120ea6120e160a0880151151590565b151560a08a0152565b5160c08801525160e0870152610120908185015190870152610140809401519086015251151590565b151590830152565b6121256005600055565b61212e43600155565b60405192839160208301611f56565b50505060008093508261220d82949361215a6020859601516109d4565b906121658151151590565b85146122365761217860808501516109d4565b61012085018051515190936001600160a01b039261219a929190841690611e7c565b6121b16121aa60408701516109d4565b9251151590565b861461221d576122036121fd6121c787516109d4565b945b518051906121f86040602084015193015115156121e46108a9565b938c85526020850152604084019015159052565b61153e565b60200190565b5151921690611e7c565b610140611e3161108e83516109d4565b6122036121fd61223060808801516109d4565b946121c9565b61224084516109d4565b612178565b61203a565b602090600319011261010e576040519061226382610789565b6004358252565b6102008183031261010e576101e0906122d8612284610908565b9361228e836109e0565b855261229c602084016109e0565b60208601526122ad604084016109e0565b6040860152606083015160608601526122c98160808501610d9c565b60808601526101008301610a09565b60a08401526101c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 11164,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan.rsh:49:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan.rsh:128:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan.rsh:88:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan.rsh:82:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan.rsh:54:54:after expr stmt semicolon',
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
