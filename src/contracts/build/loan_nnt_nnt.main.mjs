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
      const [v597, v598, v599, v600, v601, v610, v614, v615] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v597, v598, v599, v615, v630, v799, v838, v839, v846, v847, v870] = svs;
      return (await ((async () => {
        
        
        return v839;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v597, v598, v599, v600, v601, v610, v614, v615] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v597, v598, v599, v615, v630, v799, v838, v839, v846, v847, v870] = svs;
      return (await ((async () => {
        
        
        return v799;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661] = svs;
      return (await ((async () => {
        
        
        return v661;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v597, v598, v599, v600, v601, v610, v614, v615] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v597, v598, v599, v615, v630, v799, v838, v839, v846, v847, v870] = svs;
      return (await ((async () => {
        
        
        return v870;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661] = svs;
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
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v571 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v572 = [v571, v571];
  const v578 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_nnt.rsh:41:43:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:39:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v579 = v578.address;
  const v580 = v578.amount;
  const v581 = v578.collateral;
  const v582 = v578.maturation;
  const v583 = v578.principal;
  const v584 = v578.tokCollateral;
  const v585 = v578.tokLoan;
  const v593 = stdlib.lt(v583, v580);
  stdlib.assert(v593, {
    at: './src/contracts/loan_nnt_nnt.rsh:43:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  const v594 = stdlib.tokenEq(v584, v585);
  const v595 = v594 ? false : true;
  stdlib.assert(v595, {
    at: './src/contracts/loan_nnt_nnt.rsh:44:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v596 = {
    address: v579,
    amount: v580,
    maturation: v582,
    principal: v583
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v584, v585, v581, v596],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v598, v599, v600, v601], secs: v603, time: v602, didSend: v51, from: v597 } = txn1;
      
      const v604 = v572[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0')];
      const v605 = stdlib.Array_set(v604, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v606 = stdlib.Array_set(v572, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'), v605);
      const v608 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '1')];
      const v609 = stdlib.Array_set(v608, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'));
      const v610 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '1'), v609);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v598
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v599
        });
      ;
      const v614 = v601.principal;
      const v615 = v601.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v598, v599, v600, v601], secs: v603, time: v602, didSend: v51, from: v597 } = txn1;
  const v604 = v572[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0')];
  const v605 = stdlib.Array_set(v604, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v606 = stdlib.Array_set(v572, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'), v605);
  const v608 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '1')];
  const v609 = stdlib.Array_set(v608, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '0'));
  const v610 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:46:11:dot', stdlib.UInt_max, '1'), v609);
  const v612 = stdlib.tokenEq(v599, v598);
  const v613 = v612 ? false : true;
  stdlib.assert(v613, {
    at: './src/contracts/loan_nnt_nnt.rsh:46:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'B'
    });
  ;
  ;
  ;
  const v614 = v601.principal;
  const v615 = v601.amount;
  const v616 = stdlib.lt(v614, v615);
  stdlib.assert(v616, {
    at: './src/contracts/loan_nnt_nnt.rsh:47:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v597, v598, v599, v600, v601, v610, v614, v615],
    evt_cnt: 0,
    funcNum: 1,
    lct: v602,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), [[v600, v598]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v619, time: v618, didSend: v61, from: v617 } = txn2;
      
      ;
      const v620 = v610[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v621 = v620[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
      const v622 = stdlib.add(v621, v600);
      const v624 = stdlib.Array_set(v620, '0', v622);
      const v625 = stdlib.Array_set(v610, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v624);
      sim_r.txns.push({
        amt: v600,
        kind: 'to',
        tok: v598
        });
      
      const v629 = true;
      const v630 = v597;
      const v631 = false;
      const v632 = v618;
      const v638 = v625;
      const v639 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v655 = v631 ? false : v629;
        
        return v655;})()) {
        const v660 = v631 ? false : v629;
        const v661 = v660 ? true : v631;
        sim_r.isHalt = false;
        }
      else {
        const v798 = v631 ? false : v629;
        const v799 = v798 ? true : v631;
        if (v631) {
          const v825 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
          const v826 = v825[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
          const v832 = stdlib.sub(v826, v826);
          const v834 = stdlib.Array_set(v825, '0', v832);
          const v835 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v834);
          sim_r.txns.push({
            kind: 'from',
            to: v597,
            tok: v599
            });
          const v837 = v601.maturation;
          const v838 = stdlib.safeAdd(v632, v837);
          const v839 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v840 = v632;
          const v846 = v835;
          const v847 = v639;
          
          if (await (async () => {
            const v865 = stdlib.le(v840, v838);
            const v867 = stdlib.lt(v839, v615);
            const v868 = v865 ? v867 : false;
            
            return v868;})()) {
            const v870 = stdlib.ge(v839, v615);
            sim_r.isHalt = false;
            }
          else {
            const v958 = v846[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v959 = v958[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v961 = stdlib.lt(v839, v615);
            const v962 = v961 ? v630 : v597;
            const v968 = stdlib.sub(v959, v959);
            const v970 = stdlib.Array_set(v958, '0', v968);
            const v971 = stdlib.Array_set(v846, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v970);
            sim_r.txns.push({
              kind: 'from',
              to: v962,
              tok: v598
              });
            const v972 = v971[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
            const v973 = v972[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
            const v976 = v961 ? v597 : v630;
            sim_r.txns.push({
              kind: 'from',
              to: v976,
              tok: v599
              });
            sim_r.txns.push({
              kind: 'from',
              to: v597,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v599
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v598
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v801 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v802 = v801[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v597,
            tok: v598
            });
          sim_r.txns.push({
            kind: 'from',
            to: v597,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v599
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v598
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc4, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v619, time: v618, didSend: v61, from: v617 } = txn2;
  ;
  const v620 = v610[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v621 = v620[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0')];
  const v622 = stdlib.add(v621, v600);
  const v624 = stdlib.Array_set(v620, '0', v622);
  const v625 = stdlib.Array_set(v610, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:49:11:dot', stdlib.UInt_max, '0'), v624);
  ;
  const v626 = stdlib.addressEq(v597, v617);
  stdlib.assert(v626, {
    at: './src/contracts/loan_nnt_nnt.rsh:49:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v618), {
    at: './src/contracts/loan_nnt_nnt.rsh:50:27:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:50:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:50:27:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:50:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_nnt.rsh:50:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v629 = true;
  let v630 = v597;
  let v631 = false;
  let v632 = v618;
  let v638 = v625;
  let v639 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v655 = v631 ? false : v629;
    
    return v655;})()) {
    const v660 = v631 ? false : v629;
    const v661 = v660 ? true : v631;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v698], secs: v700, time: v699, didSend: v204, from: v697 } = txn4;
    switch (v698[0]) {
      case 'Borrower_close0_101': {
        const v701 = v698[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v734 = null;
        await txn4.getOutput('Borrower_close', 'v734', ctc5, v734);
        const cv629 = false;
        const cv630 = v630;
        const cv631 = v631;
        const cv632 = v699;
        const cv638 = v638;
        const cv639 = v639;
        
        v629 = cv629;
        v630 = cv630;
        v631 = cv631;
        v632 = cv632;
        v638 = cv638;
        v639 = cv639;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_101': {
        const v749 = v698[1];
        undefined /* setApiDetails */;
        ;
        const v775 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1')];
        const v776 = v775[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '0')];
        const v777 = stdlib.add(v776, v614);
        const v779 = stdlib.Array_set(v775, '0', v777);
        const v780 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1'), v779);
        ;
        const v790 = true;
        await txn4.getOutput('Lender_lend', 'v790', ctc8, v790);
        const cv629 = v629;
        const cv630 = v697;
        const cv631 = true;
        const cv632 = v699;
        const cv638 = v780;
        const cv639 = v639;
        
        v629 = cv629;
        v630 = cv630;
        v631 = cv631;
        v632 = cv632;
        v638 = cv638;
        v639 = cv639;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v798 = v631 ? false : v629;
  const v799 = v798 ? true : v631;
  if (v631) {
    const v825 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
    const v826 = v825[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
    const v832 = stdlib.sub(v826, v826);
    const v834 = stdlib.Array_set(v825, '0', v832);
    const v835 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v834);
    ;
    const v837 = v601.maturation;
    const v838 = stdlib.safeAdd(v632, v837);
    let v839 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
    let v840 = v632;
    let v846 = v835;
    let v847 = v639;
    
    let txn4 = txn3;
    while (await (async () => {
      const v865 = stdlib.le(v840, v838);
      const v867 = stdlib.lt(v839, v615);
      const v868 = v865 ? v867 : false;
      
      return v868;})()) {
      const v870 = stdlib.ge(v839, v615);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v905], secs: v907, time: v906, didSend: v422, from: v904 } = txn5;
      undefined /* setApiDetails */;
      const v909 = v905[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
      const v910 = stdlib.addressEq(v904, v597);
      stdlib.assert(v910, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)'],
        msg: 'You are not the Borrower',
        who: 'B'
        });
      const v912 = stdlib.safeAdd(v909, v839);
      const v914 = stdlib.gt(v912, v615);
      let v915;
      if (v914) {
        const v918 = stdlib.safeSub(v912, v615);
        v915 = v918;
        }
      else {
        v915 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v919 = stdlib.safeSub(v909, v915);
      ;
      const v924 = v846[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1')];
      const v925 = v924[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '0')];
      const v926 = stdlib.add(v925, v919);
      const v928 = stdlib.Array_set(v924, '0', v926);
      const v929 = stdlib.Array_set(v846, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1'), v928);
      ;
      let v936;
      if (v914) {
        const v939 = stdlib.safeSub(v912, v615);
        v936 = v939;
        }
      else {
        v936 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v940 = stdlib.safeSub(v909, v936);
      const v942 = stdlib.safeAdd(v839, v940);
      const v944 = stdlib.ge(v942, v615);
      const v946 = [v944, v942, v615];
      await txn5.getOutput('Borrower_repay', 'v946', ctc10, v946);
      const cv839 = v942;
      const cv840 = v906;
      const cv846 = v929;
      const cv847 = v847;
      
      v839 = cv839;
      v840 = cv840;
      v846 = cv846;
      v847 = cv847;
      
      txn4 = txn5;
      continue;
      
      }
    const v958 = v846[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
    const v959 = v958[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
    const v961 = stdlib.lt(v839, v615);
    const v962 = v961 ? v630 : v597;
    const v968 = stdlib.sub(v959, v959);
    const v970 = stdlib.Array_set(v958, '0', v968);
    const v971 = stdlib.Array_set(v846, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v970);
    ;
    const v972 = v971[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
    const v973 = v972[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
    const v976 = v961 ? v597 : v630;
    ;
    ;
    return;
    }
  else {
    const v801 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v802 = v801[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
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
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v664 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:76:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:52:62:application call to "runBorrower_close0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:52:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:52:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v668 = ['Borrower_close0_101', v664];
  
  const txn1 = await (ctc.sendrecv({
    args: [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661, v668],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:76:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:64:26:decimal', stdlib.UInt_max, '0'), v599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v698], secs: v700, time: v699, didSend: v204, from: v697 } = txn1;
      
      switch (v698[0]) {
        case 'Borrower_close0_101': {
          const v701 = v698[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v734 = null;
          const v735 = await txn1.getOutput('Borrower_close', 'v734', ctc9, v734);
          
          const v1425 = false;
          const v1426 = v630;
          const v1427 = v631;
          const v1429 = v638;
          const v1430 = v639;
          const v1431 = v631 ? false : false;
          if (v1431) {
            const v1433 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1435 = v631;
            if (v631) {
              const v1436 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
              const v1437 = v1436[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
              const v1438 = stdlib.sub(v1437, v1437);
              const v1439 = stdlib.Array_set(v1436, '0', v1438);
              const v1440 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v1439);
              sim_r.txns.push({
                kind: 'from',
                to: v597,
                tok: v599
                });
              const v1441 = v601.maturation;
              const v1442 = stdlib.safeAdd(v699, v1441);
              const v1488 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
              const v1490 = v1440;
              const v1491 = v639;
              const v1492 = stdlib.le(v699, v1442);
              const v1493 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
              const v1494 = v1492 ? v1493 : false;
              if (v1494) {
                const v1495 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
                sim_r.isHalt = false;
                }
              else {
                const v1497 = v1440[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
                const v1498 = v1497[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
                const v1500 = v1493 ? v630 : v597;
                const v1501 = stdlib.sub(v1498, v1498);
                const v1502 = stdlib.Array_set(v1497, '0', v1501);
                const v1503 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1502);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1500,
                  tok: v598
                  });
                const v1504 = v1503[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
                const v1505 = v1504[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
                const v1506 = v1493 ? v597 : v630;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1506,
                  tok: v599
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v597,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v599
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v598
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1486 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v1487 = v1486[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v597,
                tok: v598
                });
              sim_r.txns.push({
                kind: 'from',
                to: v597,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v599
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v598
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
          const v749 = v698[1];
          
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
  const {data: [v698], secs: v700, time: v699, didSend: v204, from: v697 } = txn1;
  switch (v698[0]) {
    case 'Borrower_close0_101': {
      const v701 = v698[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v734 = null;
      const v735 = await txn1.getOutput('Borrower_close', 'v734', ctc9, v734);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v701, v735), {
          at: './src/contracts/loan_nnt_nnt.rsh:76:22:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:76:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:76:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:77:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_nnt.rsh:76:44:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:76:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:76:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1425 = false;
      const v1426 = v630;
      const v1427 = v631;
      const v1429 = v638;
      const v1430 = v639;
      const v1431 = v631 ? false : false;
      if (v1431) {
        const v1433 = true;
        return;
        }
      else {
        const v1435 = v631;
        if (v631) {
          const v1436 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
          const v1437 = v1436[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
          const v1438 = stdlib.sub(v1437, v1437);
          const v1439 = stdlib.Array_set(v1436, '0', v1438);
          const v1440 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v1439);
          ;
          const v1441 = v601.maturation;
          const v1442 = stdlib.safeAdd(v699, v1441);
          const v1488 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v1490 = v1440;
          const v1491 = v639;
          const v1492 = stdlib.le(v699, v1442);
          const v1493 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
          const v1494 = v1492 ? v1493 : false;
          if (v1494) {
            const v1495 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
            return;
            }
          else {
            const v1497 = v1440[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v1498 = v1497[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v1500 = v1493 ? v630 : v597;
            const v1501 = stdlib.sub(v1498, v1498);
            const v1502 = stdlib.Array_set(v1497, '0', v1501);
            const v1503 = stdlib.Array_set(v1440, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1502);
            ;
            const v1504 = v1503[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
            const v1505 = v1504[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
            const v1506 = v1493 ? v597 : v630;
            ;
            ;
            return;
            }}
        else {
          const v1486 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v1487 = v1486[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_101': {
      const v749 = v698[1];
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
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v597, v598, v599, v615, v630, v799, v838, v839, v846, v847, v870] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v871 = ctc.selfAddress();
  const v873 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v874 = v873[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v876 = stdlib.addressEq(v871, v597);
  stdlib.assert(v876, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v878 = stdlib.safeAdd(v874, v839);
  const v880 = stdlib.gt(v878, v615);
  
  let v895;
  if (v880) {
    const v898 = stdlib.safeSub(v878, v615);
    v895 = v898;
    }
  else {
    v895 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v899 = stdlib.safeSub(v874, v895);
  
  const txn1 = await (ctc.sendrecv({
    args: [v597, v598, v599, v615, v630, v799, v838, v839, v846, v847, v870, v873],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:112:42:decimal', stdlib.UInt_max, '0'), [[v899, v599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v905], secs: v907, time: v906, didSend: v422, from: v904 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v909 = v905[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
      const v912 = stdlib.safeAdd(v909, v839);
      const v914 = stdlib.gt(v912, v615);
      let v915;
      if (v914) {
        const v918 = stdlib.safeSub(v912, v615);
        v915 = v918;
        }
      else {
        v915 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v919 = stdlib.safeSub(v909, v915);
      ;
      const v924 = v846[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1')];
      const v925 = v924[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '0')];
      const v926 = stdlib.add(v925, v919);
      const v928 = stdlib.Array_set(v924, '0', v926);
      const v929 = stdlib.Array_set(v846, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1'), v928);
      sim_r.txns.push({
        amt: v919,
        kind: 'to',
        tok: v599
        });
      let v936;
      if (v914) {
        const v939 = stdlib.safeSub(v912, v615);
        v936 = v939;
        }
      else {
        v936 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v940 = stdlib.safeSub(v909, v936);
      const v942 = stdlib.safeAdd(v839, v940);
      const v944 = stdlib.ge(v942, v615);
      const v946 = [v944, v942, v615];
      const v947 = await txn1.getOutput('Borrower_repay', 'v946', ctc7, v946);
      
      const v1589 = v942;
      const v1591 = v929;
      const v1592 = v847;
      const v1593 = stdlib.le(v906, v838);
      const v1594 = stdlib.lt(v942, v615);
      const v1595 = v1593 ? v1594 : false;
      if (v1595) {
        sim_r.isHalt = false;
        }
      else {
        const v1598 = v929[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
        const v1599 = v1598[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
        const v1601 = v1594 ? v630 : v597;
        const v1602 = stdlib.sub(v1599, v1599);
        const v1603 = stdlib.Array_set(v1598, '0', v1602);
        const v1604 = stdlib.Array_set(v929, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1603);
        sim_r.txns.push({
          kind: 'from',
          to: v1601,
          tok: v598
          });
        const v1605 = v1604[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
        const v1606 = v1605[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
        const v1607 = v1594 ? v597 : v630;
        sim_r.txns.push({
          kind: 'from',
          to: v1607,
          tok: v599
          });
        sim_r.txns.push({
          kind: 'from',
          to: v597,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v599
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v598
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
  const {data: [v905], secs: v907, time: v906, didSend: v422, from: v904 } = txn1;
  undefined /* setApiDetails */;
  const v909 = v905[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
  const v910 = stdlib.addressEq(v904, v597);
  stdlib.assert(v910, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v912 = stdlib.safeAdd(v909, v839);
  const v914 = stdlib.gt(v912, v615);
  let v915;
  if (v914) {
    const v918 = stdlib.safeSub(v912, v615);
    v915 = v918;
    }
  else {
    v915 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v919 = stdlib.safeSub(v909, v915);
  ;
  const v924 = v846[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1')];
  const v925 = v924[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '0')];
  const v926 = stdlib.add(v925, v919);
  const v928 = stdlib.Array_set(v924, '0', v926);
  const v929 = stdlib.Array_set(v846, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:50:dot', stdlib.UInt_max, '1'), v928);
  ;
  let v936;
  if (v914) {
    const v939 = stdlib.safeSub(v912, v615);
    v936 = v939;
    }
  else {
    v936 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v940 = stdlib.safeSub(v909, v936);
  const v942 = stdlib.safeAdd(v839, v940);
  const v944 = stdlib.ge(v942, v615);
  const v946 = [v944, v942, v615];
  const v947 = await txn1.getOutput('Borrower_repay', 'v946', ctc7, v946);
  if (v422) {
    stdlib.protect(ctc8, await interact.out(v905, v947), {
      at: './src/contracts/loan_nnt_nnt.rsh:104:31:application',
      fs: ['at ./src/contracts/loan_nnt_nnt.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:104:31:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:115:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:113:50:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:113:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:113:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1589 = v942;
  const v1591 = v929;
  const v1592 = v847;
  const v1593 = stdlib.le(v906, v838);
  const v1594 = stdlib.lt(v942, v615);
  const v1595 = v1593 ? v1594 : false;
  if (v1595) {
    return;
    }
  else {
    const v1598 = v929[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
    const v1599 = v1598[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
    const v1601 = v1594 ? v630 : v597;
    const v1602 = stdlib.sub(v1599, v1599);
    const v1603 = stdlib.Array_set(v1598, '0', v1602);
    const v1604 = stdlib.Array_set(v929, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1603);
    ;
    const v1605 = v1604[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
    const v1606 = v1605[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
    const v1607 = v1594 ? v597 : v630;
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
  const ctc8 = stdlib.T_Data({
    Borrower_close0_101: ctc7,
    Lender_lend0_101: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v672 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_nnt.rsh:66:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:66:39:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:52:62:application call to "runLender_lend0_101" (defined at: ./src/contracts/loan_nnt_nnt.rsh:66:22:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:52:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:52:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v676 = ['Lender_lend0_101', v672];
  
  const txn1 = await (ctc.sendrecv({
    args: [v597, v598, v599, v601, v614, v615, v629, v630, v631, v638, v639, v661, v676],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:68:34:decimal', stdlib.UInt_max, '0'), [[v614, v599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v698], secs: v700, time: v699, didSend: v204, from: v697 } = txn1;
      
      switch (v698[0]) {
        case 'Borrower_close0_101': {
          const v701 = v698[1];
          
          break;
          }
        case 'Lender_lend0_101': {
          const v749 = v698[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v775 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1')];
          const v776 = v775[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '0')];
          const v777 = stdlib.add(v776, v614);
          const v779 = stdlib.Array_set(v775, '0', v777);
          const v780 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1'), v779);
          sim_r.txns.push({
            amt: v614,
            kind: 'to',
            tok: v599
            });
          const v790 = true;
          const v791 = await txn1.getOutput('Lender_lend', 'v790', ctc4, v790);
          
          const v1691 = v697;
          const v1700 = true;
          const v1701 = v780[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
          const v1702 = v1701[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
          const v1703 = stdlib.sub(v1702, v1702);
          const v1704 = stdlib.Array_set(v1701, '0', v1703);
          const v1705 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v1704);
          sim_r.txns.push({
            kind: 'from',
            to: v597,
            tok: v599
            });
          const v1706 = v601.maturation;
          const v1707 = stdlib.safeAdd(v699, v1706);
          const v1753 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v1755 = v1705;
          const v1756 = v639;
          const v1757 = stdlib.le(v699, v1707);
          const v1758 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
          const v1759 = v1757 ? v1758 : false;
          if (v1759) {
            const v1760 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
            sim_r.isHalt = false;
            }
          else {
            const v1762 = v1705[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v1763 = v1762[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
            const v1765 = v1758 ? v697 : v597;
            const v1766 = stdlib.sub(v1763, v1763);
            const v1767 = stdlib.Array_set(v1762, '0', v1766);
            const v1768 = stdlib.Array_set(v1705, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1767);
            sim_r.txns.push({
              kind: 'from',
              to: v1765,
              tok: v598
              });
            const v1769 = v1768[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
            const v1770 = v1769[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
            const v1771 = v1758 ? v597 : v697;
            sim_r.txns.push({
              kind: 'from',
              to: v1771,
              tok: v599
              });
            sim_r.txns.push({
              kind: 'from',
              to: v597,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v599
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v598
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
  const {data: [v698], secs: v700, time: v699, didSend: v204, from: v697 } = txn1;
  switch (v698[0]) {
    case 'Borrower_close0_101': {
      const v701 = v698[1];
      return;
      break;
      }
    case 'Lender_lend0_101': {
      const v749 = v698[1];
      undefined /* setApiDetails */;
      ;
      const v775 = v638[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1')];
      const v776 = v775[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '0')];
      const v777 = stdlib.add(v776, v614);
      const v779 = stdlib.Array_set(v775, '0', v777);
      const v780 = stdlib.Array_set(v638, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:52:62:dot', stdlib.UInt_max, '1'), v779);
      ;
      const v790 = true;
      const v791 = await txn1.getOutput('Lender_lend', 'v790', ctc4, v790);
      if (v204) {
        stdlib.protect(ctc9, await interact.out(v749, v791), {
          at: './src/contracts/loan_nnt_nnt.rsh:66:23:application',
          fs: ['at ./src/contracts/loan_nnt_nnt.rsh:66:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:66:23:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:70:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:42:function exp)', 'at ./src/contracts/loan_nnt_nnt.rsh:69:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_nnt.rsh:69:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1691 = v697;
      const v1700 = true;
      const v1701 = v780[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '1')];
      const v1702 = v1701[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:33:application', stdlib.UInt_max, '0')];
      const v1703 = stdlib.sub(v1702, v1702);
      const v1704 = stdlib.Array_set(v1701, '0', v1703);
      const v1705 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:86:55:application', stdlib.UInt_max, '1'), v1704);
      ;
      const v1706 = v601.maturation;
      const v1707 = stdlib.safeAdd(v699, v1706);
      const v1753 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
      const v1755 = v1705;
      const v1756 = v639;
      const v1757 = stdlib.le(v699, v1707);
      const v1758 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
      const v1759 = v1757 ? v1758 : false;
      if (v1759) {
        const v1760 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v615);
        return;
        }
      else {
        const v1762 = v1705[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
        const v1763 = v1762[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:33:application', stdlib.UInt_max, '0')];
        const v1765 = v1758 ? v697 : v597;
        const v1766 = stdlib.sub(v1763, v1763);
        const v1767 = stdlib.Array_set(v1762, '0', v1766);
        const v1768 = stdlib.Array_set(v1705, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:121:67:application', stdlib.UInt_max, '0'), v1767);
        ;
        const v1769 = v1768[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '1')];
        const v1770 = v1769[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_nnt.rsh:124:33:application', stdlib.UInt_max, '0')];
        const v1771 = v1758 ? v597 : v697;
        ;
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
  appApproval: `ByAPAAEEBQgHICgwoI0G2faovAbX8dudB56S1pUIvvOm1wP2roD0AyYDAQEBAAAiNQAxGEEGiipkSSJbNQEhBFs1AjYaABdJQQC4IjUEIzUGSSEKDEAAP0khCwxAAB9JIQwMQAAOIQwSRCo1/yk0/1BCAKshCxJENhoBQgF1IQoSRDQBJRJEKWQoZFBJNQNXYQg1B0IGIkkhDQxAAC5JIQ4MQAAOIQ4SRCo1/yg0/1BCAGwhDRJENAElEkQpZChkUEk1A1eTATUHQgXtgY/GxSoSRDQBSSEFDEAAFCEFEkQpZChkUEk1A1fEATUHQgXJJRJEKWQoZFBJNQNXWAE1B0IFtjYaAhc1BDYaAzYaARdJJAxAAeFJJQxAANYlEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQZbNf4hB1s1/VcwODX8gWhbNfuBcFs1+leaIjX5gbwBWzX4STUFNfeABLGZIkU091CwNPciVUAAL4AIAAAAAAAAAt6wKjUHNP80/jT9NPw0+zT6IjQDV3kgNANXmQEXMgY0+TT4QgK7NPlXERE19jT7NP2IBT+ACQAAAAAAAAMWAbAoNQc0/zT+NP00/DT7NPo0A1d4ARcxACMyBjT5NPZJIls0+wgWXABcETT4QgJzSCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf4hCFs1/YFhWzX8V2kiNftJNQU1+oAEzjxwZjT6ULA0+hc1+TEANP8SRDT5NPwISTX4NP0NSTX3QQAKNPg0/Qk19kIAAyI19jT5NPYJNfU0+1cRETX0NPU0/ogEgzT3QQAKNPg0/Qk180IAAyI18zT8NPk08wkINfKACAAAAAAAAAOyNPI0/Q8WUQcINPIWUDT9FlBQsDTyNP0PFlEHCDTyFlA0/RZQNQc0/zQDIQZbNP40/TQDVzggNANXWAEXNAOBWVs08jIGNPs09EkiWzT1CBZcAFwRNAOBiwFbQgJ2SSMMQAB/IxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpXACA1/yEGWzX+IQhbNf1XcCI1/IAEmouRdLA0/FcAETX7NP00/ogDtDT/MQASRDT/NP40AyEHWzQDVzg4NAOBkgFbNAOBmgFbIzT/IjIGNPw0+0kiWzT9CBZcAFwAIkIA6UghCYgDXSI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9Vxg4NfyABPGSWIo0/xZQNP4WUDT9FlA0/FCwgRGvSTX7SVBJNfpJVwARIQSvXABcAEk1+UlXEREhBK9cAFwRNfg0/jT/E0QhCYgC7rEisgEishIkshAyCrIUNP+yEbMhCYgC1rEisgEishIkshAyCrIUNP6yEbM0/CEIWzX3NPwhBls19jT3NPYMRDEANP8WUDT+FlA0/RZQNPxQNPhQNPcWUDT2FlApSwFXAH9nKEsBV38jZ0gjNQEyBjUCQgIoNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPwUNPoQQQA/NPQ09RZQNPYWUDT3UDT4FlA0+RZQKFA0+1ApUDT+UDT/FlAoUClLAVcAf2coSwFXf0ZnSCEFNQEyBjUCQgHINPxBAEk0/lcREUk18yJbNfKxIrIBNPKyEiSyEDT0shQ09rIRszT0NPU09jT5NPs0/DT9NPchB1sIIjT9NP408zTySQkWXABcETT/QgBasSKyATT+VwARIluyEiSyEDT0shQ09bIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJLIQMgmyFTIKshQ09rIRs7EisgEishIkshAyCbIVMgqyFDT1shGzQgEFNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8NPgMNfQ0/TT7DjT0EEEATjT8NPgPNfM09TT2FlA09xZQNPgWUDT5UDT6FlEHCFA0+xZQNPwWUDT+UDT/FlA08xZRBwhQKUsBVwB/ZyhLAVd/FWdIJTUBMgY1AkIAqjT+VwARSTXzIls18rEisgE08rISJLIQNPU0+TT0TbIUNPayEbOxIrIBNP408zTySQkWXABcAFcRESJbshIkshA0+TT1NPRNshQ097IRs7EisgE0/7III7IQNPWyB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs7EisgEishIkshAyCbIVMgqyFDT2shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 197,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem4","type":"tuple"}],"internalType":"struct T11","name":"v1793","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem4","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v734","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v790","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v946","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1784","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1795","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1807","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_101","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_101","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1813","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002ef438819003601f8101601f191683016001600160401b03811184821017620006155783928291604052833981010390610100821262000774576040519160a08301906001600160401b038211848310176200061557608091604052825184526200007160208401620007b1565b60208501526200008460408401620007b1565b604085015260608301516060850152607f190112620007745760e060405191620000ae8362000779565b620000bc60808201620007b1565b835260a0810151602084015260c081015160408401520151606082015260808201524360035560405160e0810181811060018060401b03821117620006155760009160c09160405282815282602082015262000117620007c6565b60408201528260608201528260808201528260a08201520152604051906200013f8262000779565b62000149620007c6565b825262000155620007e7565b602083015262000164620007e7565b604083015262000173620007e7565b606083015260ff600454166200075b577f0afc6dfb8e46904d26b470c9776dbda504ff03bf5751054892c18288aa52c9e46101206040513381528351602082015260018060a01b03602085015116604082015260018060a01b03604085015116606082015260608401516080820152620001f6608085015160a08301906200082e565ba1805180159081156200074e575b501562000735576000825152600060208351015260006040835101528151602083015152815160208084015101526020820151805160406020820151910151151560405191620002548362000795565b60008352602083015260408201526200026c620007e7565b9160005b60028110620006fb5750508152806040840152602081015160406020820151910151151560405191620002a38362000795565b6000835260208301526040820152620002bb620007e7565b9160005b60028110620006ab5750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620006a35760005b156200068a5734620006715760808101516020606082015191015111156200065857604051916001600160401b0361010084019081119084111762000615576020916060608092610100860160405260008652600085870152600060408701526000828701526040516200036e8162000779565b60008152600086820152600060408201526000838201528487015262000393620007e7565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015260018060a01b03604084015116604087015281830151828701528383015184870152015160a0850152606082820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260018060a01b036040820151166060830152606081015160808301526200044d608082015160a08401906200082e565b60a0810151600061012084015b600282106200062b5760c08401516101e086015260e08401516102008087019190915285528461022081016001600160401b03811182821017620006155760405280516001600160401b0381116200061557600254600181811c911680156200060a575b6020821014620005f457601f81116200058a575b50602091601f8211600114620005205791819260009262000514575b50508160011b916000199060031b1c1916176002555b6040516126719081620008838239f35b015190508280620004ee565b601f19821692600260005260206000209160005b858110620005715750836001951062000557575b505050811b0160025562000504565b015160001960f88460031b161c1916905582808062000548565b9192602060018192868501518155019401920162000534565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005e9575b601f0160051c01905b818110620005dc5750620004d2565b60008155600101620005cd565b9091508190620005c4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004be565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200045a565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b6001620002fa565b620006b781836200085a565b51620006c482866200085a565b52620006d181856200085a565b506000198114620006e557600101620002bf565b634e487b7160e01b600052601160045260246000fd5b6200070781836200085a565b516200071482866200085a565b526200072181856200085a565b506000198114620006e55760010162000270565b60405163100960cb60e01b8152600c6004820152602490fd5b9050600154143862000204565b60405163100960cb60e01b8152600b6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200061557604052565b606081019081106001600160401b038211176200061557604052565b51906001600160a01b03821682036200077457565b60405190620007d58262000795565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620006155781528260005b8281106200081657505050565b60209062000823620007c6565b818401520162000809565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060028110156200086c5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780633c496554146100ff57806340410cd5146100f65780634cd87555146100ed578063573b8510146100e4578063823c0a8d146100db57806383230757146100d25780638dca4147146100c957806394134348146100c0578063ab53f2c6146100b7578063ea121ca3146100ae5763f9d773330361000e576100a96106f3565b61000e565b506100a9610674565b506100a96105ff565b506100a961055c565b506100a96104d1565b506100a96104b2565b506100a9610464565b506100a961026d565b506100a96101f0565b506100a9610198565b506100a961012c565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b503461012757600036600319011261012757610146610a20565b60056000540361017f57608060209160e06101706101626108b9565b858082518301019101610b52565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b506000366003190112610127576020806101b0610a20565b6101e4816101bc610a5f565b84810190600082515251151585825101526101d5610a5f565b90600082525185820152611818565b01511515604051908152f35b50346101275760003660031901126101275761020a610a20565b6005600054036102545760c0610250916101406102376102286108b9565b60208082518301019101610b52565b0151151591018190526040519081529081906020820190565b0390f35b60405163100960cb60e01b8152600a6004820152602490fd5b5060208060031936011261012757610283610a20565b5061044e6102903661259c565b916102ac6102a76102a360045460ff1690565b1590565b610c08565b6040805133815284516020820152909361043b917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908690a16102f3600160005414610c28565b61032161030f6103016108b9565b8580825183010191016125bc565b91518015908115610458575b50610c48565b61032b3415610c68565b8281019261043660a061033e8651610aa0565b9361035861035360608301968751903361149a565b610c88565b61037333600180851b0361036c8451610aa0565b1614610ca8565b6103a361039b6103816117b0565b9861039561038f8551610aa0565b8b6110b1565b51610aa0565b8589016110b1565b6103ba6103b28a830151610aa0565b8a89016110b1565b6080810151606088015260c0810151608088015260e0810151828801526103e460c0880160019052565b6103fa6103f18251610aa0565b60e089016110b1565b6000610100880152436101208801520151918251938451905101938882820151910151151591610428610964565b958652850152151587840152565b61159f565b6101408201526000610160820152611eb3565b5160008152602090f35b9050600154143861031b565b506000366003190112610127576020606061047d610a20565b6101e481610489610a5f565b8581019060018251525115156040825101526104a3610a5f565b90600082525186820152611818565b5034610127576000366003190112610127576020600154604051908152f35b506080366003190112610127576104e6610a20565b604051906104f3826107ca565b600435825260603660231901126101275760405191610511836107f2565b6024359260028410156101275761055093815260443561053081610ac0565b602082015260643561054181610ac0565b60408201526020820152611818565b60405160008152602090f35b5034610127576000366003190112610127576102506105b760a061057e610a20565b60005460078110156105c95760056105969114610ce8565b6105a86105af836105a86102286108b9565b0151151590565b151582840152565b60405190151581529081906020820190565b60076105d59114610cc8565b6101606105f26105e36108b9565b60208082518301019101610f09565b01511515828201526105a8565b50346101275760008060031936011261067157805461061c6108b9565b906040519283918252602090604082840152835191826040850152815b83811061065a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610639565b80fd5b50604036600319011261012757610689610a20565b60405190610696826107ca565b60043582526020366023190112610127576106c6916040516106b78161080d565b602435815260208201526110e7565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b506020366003190112610127576107086109e3565b50610250610714610a20565b60408161076c829383516107278161080d565b84516107328161080d565b8082526004359052845190610746826107ca565b600082526020820190865161075a8161080d565b600081528252600083525190526110e7565b01519051918291826106d1565b90600182811c921680156107a9575b602083101461079357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610788565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176107e557604052565b6107ed6107b3565b604052565b606081019081106001600160401b038211176107e557604052565b602081019081106001600160401b038211176107e557604052565b60e081019081106001600160401b038211176107e557604052565b61016081019081106001600160401b038211176107e557604052565b61018081019081106001600160401b038211176107e557604052565b60a081019081106001600160401b038211176107e557604052565b601f909101601f19168101906001600160401b038211908210176107e557604052565b60405190600082600254916108cd83610779565b80835260019380851690811561094357506001146108f5575b506108f392500383610896565b565b6002600090815260008051602061264583398151915294602093509091905b81831061092b5750506108f39350820101386108e6565b85548884018501529485019487945091830191610914565b90506108f394506020925060ff191682840152151560051b820101386108e6565b60405190606082016001600160401b038111838210176107e557604052565b6040519061016082016001600160401b038111838210176107e557604052565b6040519061018082016001600160401b038111838210176107e557604052565b6040519061010082016001600160401b038111838210176107e557604052565b60405190606082016001600160401b03811183821017610a13575b60405260006040838281528260208201520152565b610a1b6107b3565b6109fe565b60405190610a2d82610828565b8160c0600091828152826020820152610a446109e3565b60408201528260608201528260808201528260a08201520152565b60405190610a6c826107ca565b81600081526020610a7b6109e3565b910152565b60021115610a8a57565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361012757565b8015150361012757565b51906108f382610ac0565b9080601f8301121561012757604091825192610af0846107ca565b839260c083019281841161012757935b838510610b0f57505050505090565b606085830312610127578251606091610b27826107f2565b86518252602091828801518382015285880151610b4381610ac0565b86820152815201940193610b00565b61020081830312610127576101e0610bff91610b6c610983565b93610b7682610aac565b8552610b8460208301610aac565b6020860152610b9560408301610aac565b604086015260608201516060860152610bb060808301610aac565b6080860152610bc160a08301610aca565b60a086015260c082015160c086015260e082015160e0860152610be961010091828401610ad5565b908501526101c081015161012085015201610aca565b61014082015290565b15610c0f57565b60405163100960cb60e01b815260106004820152602490fd5b15610c2f57565b60405163100960cb60e01b815260116004820152602490fd5b15610c4f57565b60405163100960cb60e01b815260126004820152602490fd5b15610c6f57565b60405163100960cb60e01b815260136004820152602490fd5b15610c8f57565b60405163100960cb60e01b815260146004820152602490fd5b15610caf57565b60405163100960cb60e01b815260156004820152602490fd5b15610ccf57565b60405163100960cb60e01b815260096004820152602490fd5b15610cef57565b60405163100960cb60e01b815260086004820152602490fd5b15610d0f57565b60405163100960cb60e01b815260166004820152602490fd5b15610d2f57565b60405163100960cb60e01b815260176004820152602490fd5b15610d4f57565b60405163100960cb60e01b815260186004820152602490fd5b15610d6f57565b60405163100960cb60e01b815260196004820152602490fd5b15610d8f57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610daf57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610dcf57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610def57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610e0f57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610e2f57565b60405163100960cb60e01b815260216004820152602490fd5b15610e4f57565b60405163100960cb60e01b815260226004820152602490fd5b15610e6f57565b60405163100960cb60e01b8152601f6004820152602490fd5b15610e8f57565b60405163100960cb60e01b815260206004820152602490fd5b919082608091031261012757604051608081016001600160401b03811182821017610efc575b6040526060808294610edf81610aac565b845260208101516020850152604081015160408501520151910152565b610f046107b3565b610ece565b906102808282031261012757610fd5610260610f236109a3565b93610f2d81610aac565b8552610f3b60208201610aac565b6020860152610f4c60408201610aac565b6040860152610f5e8460608301610ea8565b606086015260e08101516080860152610100938482015160a0870152610120610f88818401610aca565b60c0880152610fc161014092610f9f848601610aac565b60e08a015261016097610fb3898701610aca565b908a01526101808501610ad5565b908701526102408201519086015201610aca565b9082015290565b60405190610fe982610828565b81600080825280602083015280604083015280606083015280608083015260a082015260c0610a7b6109e3565b6001600160a01b03169052565b604090815191611032836107ca565b8260005b82811061104257505050565b60209061104d6109e3565b8184015201611036565b6040519061106482610843565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526110a7611023565b6101208201520152565b6001600160a01b039091169052565b9060028110156110d15760051b0190565b634e487b7160e01b600052603260045260246000fd5b6112309161117c916110f7610fdc565b9161110f61110a6102a360045460ff1690565b610d08565b60408051338152835160208083019190915284015151818301529093907f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611160600560005414610d28565b6111686108b9565b916020958387808096518301019101610b52565b958461119488965180159081156113d2575b50610d48565b6111b06111a96111a48851610aa0565b610aa0565b3314610d68565b019085825151926111c760e08801948551906113f5565b9384865261124460608901958651106111e589890191829015159052565b8051156113c7576111f98851885190611417565b858901525b61123e61123986611215875151828d015190611417565b9c60608c019d8e526112273415610d88565b019e8f51610aa0565b8c51903361149a565b610da8565b51151590565b156113bb576112568651865190611417565b60808701525b51905151608086015161126e91611417565b611277916113f5565b60a08501818152845160c090960180519290961115909152938451868251015283518282510152805182516112ad8192826106d1565b037fe40859618737b9398aef223bd7d61ef256c2af8399a29890bb8f6979903f461891a1519101526112dd611057565b9686516112e990610aa0565b6112f390896110b1565b8387015161130090610aa0565b61130c908986016110b1565b5161131690610aa0565b611322908887016110b1565b516060870152608085015161133690610aa0565b61134390608088016110b1565b60a08501511515151560a087015260c085015160c08701525160e08601526101004381870152840151928184015192835190510192818382015191015115159261138b610964565b948552840152901515908201526113a1916115fc565b90610120918284015201516101408201526108f390612348565b6000608087015261125c565b6000858901526111fe565b9050600154143861118e565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161140a575b821061012757565b6114126113de565b611402565b9081039081116114245790565b61142c6113de565b90565b600061142c928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526114738161087b565b5193165af161148a6114836114dd565b809261153f565b506020808251830101910161152a565b60009161142c9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526114738161087b565b3d15611525573d906001600160401b038211611518575b6040519161150c601f8201601f191660200184610896565b82523d6000602084013e565b6115206107b3565b6114f4565b606090565b90816020910312610127575161142c81610ac0565b156115475790565b80511561155657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156115775790565b80511561158657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b91906115a9611023565b9260005b600281106115bb5750508252565b806115c8600192846110c0565b516115d382886110c0565b526115de81876110c0565b5060001981146115ef575b016115ad565b6115f76113de565b6115e9565b9190611606611023565b9260005b6002811061161b5750506020830152565b80611628600192846110c0565b5161163382886110c0565b5261163e81876110c0565b50600019811461164f575b0161160a565b6116576113de565b611649565b9190611666611023565b9260005b6002811061167b5750506020830152565b80611688600192846110c0565b5161169382886110c0565b5261169e81876110c0565b5060001981146116af575b0161166a565b6116b76113de565b6116a9565b91906116c6611023565b9260005b600281106116d85750508252565b806116e5600192846110c0565b516116f082886110c0565b526116fb81876110c0565b50600019811461170c575b016116ca565b6117146113de565b611706565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610a8a576080916040918285015260208101511515606085015201511515910152565b516002811015610a8a5790565b60405190608082016001600160401b038111838210176117a3575b60405260006060838281528260208201528260408201520152565b6117ab6107b3565b611788565b604051906117bd8261085f565b816101606000918281528260208201528260408201526117db61176d565b60608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261180e611023565b6101408201520152565b6118909061183361182e6102a360045460ff1690565b610dc8565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa815180611864853383611719565b0390a1611875600760005414610de8565b61187d6108b9565b6020938185808094518301019101610f09565b926118a681518015908115611b4f575b50610e08565b016118b18151611760565b6118ba81610a80565b6119d8575061195f906119576108f3956118d43415610e68565b600086848701926118f66118f16118eb8651610aa0565b3361142f565b610e88565b8551600081527f1e75cb36b95ba08656b27685c88d8290a733387bb6e11910718494d39672926e90602090a1015261039561192f6117b0565b9661194361193d8851610aa0565b896110b1565b61194f81880151610aa0565b9088016110b1565b9084016110b1565b606081015160608301526080810151608083015260a081015160a0830152600060c083015261199d61199460e0830151610aa0565b60e084016110b1565b6119b76101006119af81840151151590565b151590840152565b61012043818401528101519061014091828401520151610160820152611eb3565b6119e460019151611760565b6119ed81610a80565b146119f9575b50505050565b611b4693611b3091611a0b3415610e28565b611b2b81850195611a6e6060611a218951610aa0565b95611a3b611a3660808b01988951903361149a565b610e48565b8551600181527f8b7c04b80da66f78012eb5ea464906a9d795c02c8240d02a6cee08ace14eb4a090602090a10160019052565b611aa9611aa1611a7c6117b0565b98611a8a61038f8a51610aa0565b610395611a99858b0151610aa0565b858c016110b1565b8489016110b1565b606086015160608801528351608088015260a086015160a0880152611add611ad460c0880151151590565b151560c0890152565b611aea3360e089016110b1565b600161010088015261012043818901528601519281840151948551905101948183820151910151151592611b1c610964565b96875286015284019015159052565b61165c565b9061014091828401520151610160820152611eb3565b388080806119f3565b905060015414386118a0565b506040513d6000823e3d90fd5b818110611b73575050565b60008155600101611b68565b611b8a600254610779565b80611b925750565b601f8111600114611ba557506000600255565b6002600052611bea90601f0160051c600080516020612645833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611b68565b6000602081208160025555565b60405190611c048261085f565b81610160600091828152826020820152826040820152611c2261176d565b60608201528260808201528260a08201528260c08201528260e082015282610100820152611c4e611023565b610120820152826101408201520152565b6000915b60028310611c7057505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611c63565b6108f390929192610260610280820194611cba838251611016565b611ccc60208201516020850190611016565b611cde60408201516040850190611016565b60608181015180516001600160a01b03168583015260208101516080860152604081015160a0860152015160c0840152608081015160e084015260a081015190610100918285015260c081015191611d3d610120938487019015159052565b611d7960e083015191611d566101409384890190611016565b83015193611d6b610160958689019015159052565b830151610180870190611c5f565b81015161024085015201511515910152565b90601f8211611d98575050565b6108f39160026000526020600020906020601f840160051c83019310611dc6575b601f0160051c0190611b68565b9091508190611db9565b80519091906001600160401b038111611ea6575b611df881611df3600254610779565b611d8b565b602080601f8311600114611e345750819293600092611e29575b50508160011b916000199060031b1c191617600255565b015190503880611e12565b6002600052601f19831694909190600080516020612645833981519152926000905b878210611e8e575050836001959610611e75575b505050811b01600255565b015160001960f88460031b161c19169055388080611e6a565b80600185968294968601518155019501930190611e56565b611eae6107b3565b611de4565b61010090818101611ec48151151590565b80156121a35760005b15611fce575050611fc96108f392611f99611fbb936000611eec611bf7565b93611f00611efa8451610aa0565b866110b1565b611f19611f106020850151610aa0565b602087016110b1565b611f32611f296040850151610aa0565b604087016110b1565b606083015160608601526080830151608086015260a083015160a0860152611f5d60c0860160019052565b611f76611f6d60e0850151610aa0565b60e087016110b1565b840152610140808201516101208501526101608092015190840152820160019052565b611fa36007600055565b611fac43600155565b60405192839160208301611c9f565b03601f198101835282610896565b611dd0565b909190156121165760408101928351611fe690610aa0565b928251611ff290610aa0565b90610140948585019283516120079060200190565b515161201e9290916001600160a01b0316906121af565b612026611057565b95845161203290610aa0565b61203c90886110b1565b602085015161204a90610aa0565b61205790602089016110b1565b5161206190610aa0565b61206e90604088016110b1565b60a0840151606087015260e084015161208690610aa0565b61209390608088016110b1565b511515151560a08601526101209182840180516060860151604001516120b8916113f5565b60c088015260e087016000905251908601525160208101516020810151906040015115156120e4610964565b60008152602081019290925215156040820152612100916115fc565b908401526101600151908201526108f390612348565b600080935080925081612154612130602084950151610aa0565b61213a8351610aa0565b6101408401515151916001600160a01b03909116906121af565b6101606121646111a48351610aa0565b9101519082821561219a575bf11561218d575b600080556121856000600155565b6108f3611b7f565b612195611b5b565b612177565b506108fc612170565b60c08301511515611ecd565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261221b93600093849392849190608081016001600160401b03811182821017612222575b6040525193165af161148a6122146114dd565b809261156f565b1561012757565b61222a6107b3565b612201565b6040519061223c826107ca565b60006020838281520152565b6040519061225582610843565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152612291611023565b610100820152826101208201520152565b6108f3909291926101e06101406102008301956122c0848251611016565b6122d260208201516020860190611016565b6122e460408201516040860190611016565b6060810151606085015261230060808201516080860190611016565b60a08181015115159085015260c081015160c085015260e081015160e08501526123336101008083015190860190611c5f565b6101208101516101c085015201511515910152565b61235061222f565b60e082018051606084018051919091118352929190610100908184015160c0850190815110156000906000146125975750835115155b1561248f5793612465611fc9946108f3979484611fbb986123b6602061246d98518a511115950194859015159052565b6123be612248565b976123d26123cc8851610aa0565b8a6110b1565b6123eb6123e26020890151610aa0565b60208b016110b1565b6124046123fb6040890151610aa0565b60408b016110b1565b51606089015261242361241a6080880151610aa0565b60808a016110b1565b61243c61243360a0880151151590565b151560a08a0152565b5160c08801525160e0870152610120908185015190870152610140809401519086015251151590565b151590830152565b6124776005600055565b61248043600155565b604051928391602083016122a2565b50505060008093508261255f8294936124ac602085960151610aa0565b906124b78151151590565b8514612588576124ca6080850151610aa0565b61012085018051515190936001600160a01b03926124ec9291908416906121af565b6125036124fc6040870151610aa0565b9251151590565b861461256f5761255561254f6125198751610aa0565b945b5180519061254a604060208401519301511515612536610964565b938c85526020850152604084019015159052565b6116bc565b60200190565b51519216906121af565b6101406121646111a48351610aa0565b61255561254f6125826080880151610aa0565b9461251b565b6125928451610aa0565b6124ca565b612386565b602090600319011261012757604051906125b58261080d565b6004358252565b61020081830312610127576101e09061262a6125d66109c3565b936125e083610aac565b85526125ee60208401610aac565b60208601526125ff60408401610aac565b60408601526060830151606086015261261b8160808501610ea8565b60808601526101008301610ad5565b60a08401526101c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12020,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_nnt.rsh:48:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_nnt.rsh:129:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_nnt.rsh:89:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_nnt.rsh:83:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_nnt.rsh:52:62:after expr stmt semicolon',
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
