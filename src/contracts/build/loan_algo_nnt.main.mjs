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
      const [v603, v604, v605, v606, v607, v611, v613, v614] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = svs;
      return (await ((async () => {
        
        
        return v767;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v603, v604, v605, v606, v607, v611, v613, v614] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = svs;
      return (await ((async () => {
        
        
        return v631;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v603, v604, v605, v606, v607, v611, v613, v614] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = svs;
      return (await ((async () => {
        
        
        return v735;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = svs;
      return (await ((async () => {
        
        
        return v659;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v603, v604, v605, v606, v607, v611, v613, v614] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = svs;
      return (await ((async () => {
        
        
        return v797;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = svs;
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
      1: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]
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
  const ctc10 = stdlib.T_Data({
    Borrower_claimRefund0_240: ctc6,
    Borrower_repay0_240: ctc9,
    Lender_claim0_240: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v581 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v582 = [v581];
  const v588 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v589 = v588.address;
  const v590 = v588.amount;
  const v591 = v588.collateral;
  const v592 = v588.maturation;
  const v593 = v588.principal;
  const v594 = v588.tokCollateral;
  const v601 = stdlib.lt(v593, v590);
  stdlib.assert(v601, {
    at: './src/contracts/loan_algo_nnt.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v602 = {
    address: v589,
    amount: v590,
    maturation: v592,
    principal: v593
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v594, v591, v602],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v604, v605, v606], secs: v608, time: v607, didSend: v43, from: v603 } = txn1;
      
      const v609 = v582[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v610 = stdlib.Array_set(v609, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v611 = stdlib.Array_set(v582, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v610);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v604
        });
      ;
      const v613 = v606.principal;
      const v614 = v606.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v604, v605, v606], secs: v608, time: v607, didSend: v43, from: v603 } = txn1;
  const v609 = v582[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v610 = stdlib.Array_set(v609, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v611 = stdlib.Array_set(v582, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:47:11:dot', stdlib.UInt_max, '0'), v610);
  ;
  ;
  const v613 = v606.principal;
  const v614 = v606.amount;
  const v615 = stdlib.lt(v613, v614);
  stdlib.assert(v615, {
    at: './src/contracts/loan_algo_nnt.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v603, v604, v605, v606, v607, v611, v613, v614],
    evt_cnt: 0,
    funcNum: 1,
    lct: v607,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), [[v605, v604]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v618, time: v617, didSend: v53, from: v616 } = txn2;
      
      ;
      const v619 = v611[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v620 = v619[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v621 = stdlib.add(v620, v605);
      const v623 = stdlib.Array_set(v619, '0', v621);
      const v624 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v623);
      sim_r.txns.push({
        amt: v605,
        kind: 'to',
        tok: v604
        });
      
      const v628 = true;
      const v629 = v603;
      const v630 = false;
      const v631 = v617;
      const v632 = v607;
      const v637 = v624;
      const v638 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v653 = v630 ? false : v628;
        
        return v653;})()) {
        const v658 = v630 ? false : v628;
        const v659 = v658 ? true : v630;
        sim_r.isHalt = false;
        }
      else {
        const v734 = v630 ? false : v628;
        const v735 = v734 ? true : v630;
        if (v630) {
          const v762 = stdlib.sub(v638, v638);
          sim_r.txns.push({
            kind: 'from',
            to: v603,
            tok: undefined /* Nothing */
            });
          const v764 = v606.maturation;
          const v766 = stdlib.safeAdd(v632, v764);
          const v767 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v768 = v631;
          const v769 = v632;
          const v774 = v637;
          const v775 = v762;
          
          if (await (async () => {
            const v792 = stdlib.gt(v766, v769);
            const v794 = stdlib.lt(v767, v614);
            const v795 = v792 ? v794 : false;
            
            return v795;})()) {
            const v797 = stdlib.ge(v767, v614);
            sim_r.isHalt = false;
            }
          else {
            const v1049 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v1050 = v1049[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v1052 = stdlib.lt(v767, v614);
            const v1053 = v1052 ? v629 : v603;
            sim_r.txns.push({
              kind: 'from',
              to: v1053,
              tok: v604
              });
            const v1066 = v1052 ? v603 : v629;
            sim_r.txns.push({
              kind: 'from',
              to: v1066,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v604
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v737 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v738 = v737[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v603,
            tok: v604
            });
          sim_r.txns.push({
            kind: 'from',
            to: v603,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v604
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
    tys: [ctc0, ctc2, ctc1, ctc4, ctc1, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v618, time: v617, didSend: v53, from: v616 } = txn2;
  ;
  const v619 = v611[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v620 = v619[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v621 = stdlib.add(v620, v605);
  const v623 = stdlib.Array_set(v619, '0', v621);
  const v624 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:50:11:dot', stdlib.UInt_max, '0'), v623);
  ;
  const v625 = stdlib.addressEq(v603, v616);
  stdlib.assert(v625, {
    at: './src/contracts/loan_algo_nnt.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v617), {
    at: './src/contracts/loan_algo_nnt.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v628 = true;
  let v629 = v603;
  let v630 = false;
  let v631 = v617;
  let v632 = v607;
  let v637 = v624;
  let v638 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:39:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v653 = v630 ? false : v628;
    
    return v653;})()) {
    const v658 = v630 ? false : v628;
    const v659 = v658 ? true : v630;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v680], secs: v682, time: v681, didSend: v158, from: v679 } = txn4;
    switch (v680[0]) {
      case 'Borrower_close0_93': {
        const v683 = v680[1];
        undefined /* setApiDetails */;
        ;
        const v693 = null;
        await txn4.getOutput('Borrower_close', 'v693', ctc5, v693);
        const cv628 = false;
        const cv629 = v629;
        const cv630 = v630;
        const cv631 = v681;
        const cv632 = v631;
        const cv637 = v637;
        const cv638 = v638;
        
        v628 = cv628;
        v629 = cv629;
        v630 = cv630;
        v631 = cv631;
        v632 = cv632;
        v637 = cv637;
        v638 = cv638;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v708 = v680[1];
        undefined /* setApiDetails */;
        const v716 = stdlib.add(v638, v613);
        ;
        const v726 = true;
        await txn4.getOutput('Lender_lend', 'v726', ctc8, v726);
        const cv628 = v628;
        const cv629 = v679;
        const cv630 = true;
        const cv631 = v681;
        const cv632 = v631;
        const cv637 = v637;
        const cv638 = v716;
        
        v628 = cv628;
        v629 = cv629;
        v630 = cv630;
        v631 = cv631;
        v632 = cv632;
        v637 = cv637;
        v638 = cv638;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v734 = v630 ? false : v628;
  const v735 = v734 ? true : v630;
  if (v630) {
    const v762 = stdlib.sub(v638, v638);
    ;
    const v764 = v606.maturation;
    const v766 = stdlib.safeAdd(v632, v764);
    let v767 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
    let v768 = v631;
    let v769 = v632;
    let v774 = v637;
    let v775 = v762;
    
    let txn4 = txn3;
    while (await (async () => {
      const v792 = stdlib.gt(v766, v769);
      const v794 = stdlib.lt(v767, v614);
      const v795 = v792 ? v794 : false;
      
      return v795;})()) {
      const v797 = stdlib.ge(v767, v614);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: ['time', v766],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797],
          evt_cnt: 0,
          funcNum: 5,
          lct: v768,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1044, time: v1043, didSend: v513, from: v1042 } = txn6;
            
            ;
            const cv767 = v767;
            const cv768 = v1043;
            const cv769 = v768;
            const cv774 = v774;
            const cv775 = v775;
            
            await (async () => {
              const v767 = cv767;
              const v768 = cv768;
              const v769 = cv769;
              const v774 = cv774;
              const v775 = cv775;
              
              if (await (async () => {
                const v792 = stdlib.gt(v766, v769);
                const v794 = stdlib.lt(v767, v614);
                const v795 = v792 ? v794 : false;
                
                return v795;})()) {
                const v797 = stdlib.ge(v767, v614);
                sim_r.isHalt = false;
                }
              else {
                const v1049 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v1050 = v1049[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v1052 = stdlib.lt(v767, v614);
                const v1053 = v1052 ? v629 : v603;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1053,
                  tok: v604
                  });
                const v1066 = v1052 ? v603 : v629;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1066,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v604
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
          tys: [ctc0, ctc2, ctc1, ctc0, ctc1, ctc8, ctc1, ctc1, ctc1, ctc13, ctc1, ctc8],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1044, time: v1043, didSend: v513, from: v1042 } = txn6;
        ;
        const v1045 = stdlib.addressEq(v603, v1042);
        stdlib.assert(v1045, {
          at: './src/contracts/loan_algo_nnt.rsh:91:50:dot',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:130:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:130:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv767 = v767;
        const cv768 = v1043;
        const cv769 = v768;
        const cv774 = v774;
        const cv775 = v775;
        
        v767 = cv767;
        v768 = cv768;
        v769 = cv769;
        v774 = cv774;
        v775 = cv775;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn5;
        switch (v856[0]) {
          case 'Borrower_claimRefund0_240': {
            const v859 = v856[1];
            undefined /* setApiDetails */;
            ;
            const v880 = null;
            await txn5.getOutput('Borrower_claimRefund', 'v880', ctc5, v880);
            const cv767 = v767;
            const cv768 = v857;
            const cv769 = v768;
            const cv774 = v774;
            const cv775 = v775;
            
            v767 = cv767;
            v768 = cv768;
            v769 = cv769;
            v774 = cv774;
            v775 = cv775;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Borrower_repay0_240': {
            const v920 = v856[1];
            undefined /* setApiDetails */;
            const v926 = v920[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
            const v927 = stdlib.addressEq(v855, v603);
            stdlib.assert(v927, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
              msg: 'You are not the Borrower',
              who: 'B'
              });
            const v929 = stdlib.safeAdd(v926, v767);
            const v931 = stdlib.gt(v929, v614);
            let v932;
            if (v931) {
              const v935 = stdlib.safeSub(v929, v614);
              v932 = v935;
              }
            else {
              v932 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
              }
            const v936 = stdlib.safeSub(v926, v932);
            const v939 = stdlib.add(v775, v936);
            ;
            let v954;
            if (v931) {
              const v957 = stdlib.safeSub(v929, v614);
              v954 = v957;
              }
            else {
              v954 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
              }
            const v958 = stdlib.safeSub(v926, v954);
            const v960 = stdlib.safeAdd(v767, v958);
            const v962 = stdlib.ge(v960, v614);
            const v964 = [v962, v960, v614];
            await txn5.getOutput('Borrower_repay', 'v964', ctc11, v964);
            const cv767 = v960;
            const cv768 = v857;
            const cv769 = v768;
            const cv774 = v774;
            const cv775 = v939;
            
            v767 = cv767;
            v768 = cv768;
            v769 = cv769;
            v774 = cv774;
            v775 = cv775;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Lender_claim0_240': {
            const v981 = v856[1];
            undefined /* setApiDetails */;
            ;
            const v1036 = null;
            await txn5.getOutput('Lender_claim', 'v1036', ctc5, v1036);
            const cv767 = v767;
            const cv768 = v857;
            const cv769 = v768;
            const cv774 = v774;
            const cv775 = v775;
            
            v767 = cv767;
            v768 = cv768;
            v769 = cv769;
            v774 = cv774;
            v775 = cv775;
            
            txn4 = txn5;
            continue;
            break;
            }
          }}
      
      }
    const v1049 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
    const v1050 = v1049[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
    const v1052 = stdlib.lt(v767, v614);
    const v1053 = v1052 ? v629 : v603;
    ;
    const v1066 = v1052 ? v603 : v629;
    ;
    return;
    }
  else {
    const v737 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v738 = v737[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    Borrower_claimRefund0_240: ctc6,
    Borrower_repay0_240: ctc7,
    Lender_claim0_240: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v805 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:122:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_claimRefund0_240" (defined at: ./src/contracts/loan_algo_nnt.rsh:122:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v809 = ['Borrower_claimRefund0_240', v805];
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797, v809],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
      
      switch (v856[0]) {
        case 'Borrower_claimRefund0_240': {
          const v859 = v856[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          const v880 = null;
          const v881 = await txn1.getOutput('Borrower_claimRefund', 'v880', ctc9, v880);
          
          const v2172 = v767;
          const v2173 = v857;
          const v2175 = v774;
          const v2176 = v775;
          const v2177 = stdlib.gt(v766, v768);
          const v2178 = stdlib.lt(v767, v614);
          const v2179 = v2177 ? v2178 : false;
          if (v2179) {
            const v2180 = stdlib.ge(v767, v614);
            sim_r.isHalt = false;
            }
          else {
            const v2182 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2183 = v2182[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2185 = v2178 ? v629 : v603;
            sim_r.txns.push({
              kind: 'from',
              to: v2185,
              tok: v604
              });
            const v2186 = v2178 ? v603 : v629;
            sim_r.txns.push({
              kind: 'from',
              to: v2186,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v604
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_240': {
          const v920 = v856[1];
          
          break;
          }
        case 'Lender_claim0_240': {
          const v981 = v856[1];
          
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
  const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
  switch (v856[0]) {
    case 'Borrower_claimRefund0_240': {
      const v859 = v856[1];
      undefined /* setApiDetails */;
      ;
      const v880 = null;
      const v881 = await txn1.getOutput('Borrower_claimRefund', 'v880', ctc9, v880);
      if (v434) {
        stdlib.protect(ctc9, await interact.out(v859, v881), {
          at: './src/contracts/loan_algo_nnt.rsh:122:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:122:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:123:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:122:58:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:122:58:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:122:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2172 = v767;
      const v2173 = v857;
      const v2175 = v774;
      const v2176 = v775;
      const v2177 = stdlib.gt(v766, v768);
      const v2178 = stdlib.lt(v767, v614);
      const v2179 = v2177 ? v2178 : false;
      if (v2179) {
        const v2180 = stdlib.ge(v767, v614);
        return;
        }
      else {
        const v2182 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2183 = v2182[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2185 = v2178 ? v629 : v603;
        ;
        const v2186 = v2178 ? v603 : v629;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_240': {
      const v920 = v856[1];
      return;
      break;
      }
    case 'Lender_claim0_240': {
      const v981 = v856[1];
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
  
  
  const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v662 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v666 = ['Borrower_close0_93', v662];
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659, v666],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:76:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v680], secs: v682, time: v681, didSend: v158, from: v679 } = txn1;
      
      switch (v680[0]) {
        case 'Borrower_close0_93': {
          const v683 = v680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v693 = null;
          const v694 = await txn1.getOutput('Borrower_close', 'v693', ctc9, v693);
          
          const v2217 = false;
          const v2218 = v629;
          const v2219 = v630;
          const v2220 = v681;
          const v2222 = v637;
          const v2223 = v638;
          const v2224 = v630 ? false : false;
          if (v2224) {
            const v2226 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2228 = v630;
            if (v630) {
              const v2229 = stdlib.sub(v638, v638);
              sim_r.txns.push({
                kind: 'from',
                to: v603,
                tok: undefined /* Nothing */
                });
              const v2230 = v606.maturation;
              const v2231 = stdlib.safeAdd(v631, v2230);
              const v2281 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
              const v2282 = v681;
              const v2284 = v637;
              const v2285 = v2229;
              const v2286 = stdlib.gt(v2231, v631);
              const v2287 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
              const v2288 = v2286 ? v2287 : false;
              if (v2288) {
                const v2289 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
                sim_r.isHalt = false;
                }
              else {
                const v2291 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v2292 = v2291[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
                const v2294 = v2287 ? v629 : v603;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2294,
                  tok: v604
                  });
                const v2295 = v2287 ? v603 : v629;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2295,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v604
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2279 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v2280 = v2279[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v603,
                tok: v604
                });
              sim_r.txns.push({
                kind: 'from',
                to: v603,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v604
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
          const v708 = v680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v680], secs: v682, time: v681, didSend: v158, from: v679 } = txn1;
  switch (v680[0]) {
    case 'Borrower_close0_93': {
      const v683 = v680[1];
      undefined /* setApiDetails */;
      ;
      const v693 = null;
      const v694 = await txn1.getOutput('Borrower_close', 'v693', ctc9, v693);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v683, v694), {
          at: './src/contracts/loan_algo_nnt.rsh:76:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:76:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:77:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:76:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:76:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2217 = false;
      const v2218 = v629;
      const v2219 = v630;
      const v2220 = v681;
      const v2222 = v637;
      const v2223 = v638;
      const v2224 = v630 ? false : false;
      if (v2224) {
        const v2226 = true;
        return;
        }
      else {
        const v2228 = v630;
        if (v630) {
          const v2229 = stdlib.sub(v638, v638);
          ;
          const v2230 = v606.maturation;
          const v2231 = stdlib.safeAdd(v631, v2230);
          const v2281 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2282 = v681;
          const v2284 = v637;
          const v2285 = v2229;
          const v2286 = stdlib.gt(v2231, v631);
          const v2287 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
          const v2288 = v2286 ? v2287 : false;
          if (v2288) {
            const v2289 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
            return;
            }
          else {
            const v2291 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2292 = v2291[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2294 = v2287 ? v629 : v603;
            ;
            const v2295 = v2287 ? v603 : v629;
            ;
            return;
            }}
        else {
          const v2279 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v2280 = v2279[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:81:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v708 = v680[1];
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
    Borrower_claimRefund0_240: ctc7,
    Borrower_repay0_240: ctc6,
    Lender_claim0_240: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v819 = ctc.selfAddress();
  const v821 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_240" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v822 = v821[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v824 = stdlib.addressEq(v819, v603);
  stdlib.assert(v824, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runBorrower_repay0_240" (defined at: ./src/contracts/loan_algo_nnt.rsh:106:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v826 = stdlib.safeAdd(v822, v767);
  const v828 = stdlib.gt(v826, v614);
  const v839 = ['Borrower_repay0_240', v821];
  
  let v849;
  if (v828) {
    const v852 = stdlib.safeSub(v826, v614);
    v849 = v852;
    }
  else {
    v849 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
    }
  const v853 = stdlib.safeSub(v822, v849);
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797, v839],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v853, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
      
      switch (v856[0]) {
        case 'Borrower_claimRefund0_240': {
          const v859 = v856[1];
          
          break;
          }
        case 'Borrower_repay0_240': {
          const v920 = v856[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v926 = v920[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
          const v929 = stdlib.safeAdd(v926, v767);
          const v931 = stdlib.gt(v929, v614);
          let v932;
          if (v931) {
            const v935 = stdlib.safeSub(v929, v614);
            v932 = v935;
            }
          else {
            v932 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v936 = stdlib.safeSub(v926, v932);
          const v939 = stdlib.add(v775, v936);
          sim_r.txns.push({
            amt: v936,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v954;
          if (v931) {
            const v957 = stdlib.safeSub(v929, v614);
            v954 = v957;
            }
          else {
            v954 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
            }
          const v958 = stdlib.safeSub(v926, v954);
          const v960 = stdlib.safeAdd(v767, v958);
          const v962 = stdlib.ge(v960, v614);
          const v964 = [v962, v960, v614];
          const v965 = await txn1.getOutput('Borrower_repay', 'v964', ctc9, v964);
          
          const v2390 = v960;
          const v2391 = v857;
          const v2393 = v774;
          const v2394 = v939;
          const v2395 = stdlib.gt(v766, v768);
          const v2396 = stdlib.lt(v960, v614);
          const v2397 = v2395 ? v2396 : false;
          if (v2397) {
            sim_r.isHalt = false;
            }
          else {
            const v2400 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2401 = v2400[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2403 = v2396 ? v629 : v603;
            sim_r.txns.push({
              kind: 'from',
              to: v2403,
              tok: v604
              });
            const v2404 = v2396 ? v603 : v629;
            sim_r.txns.push({
              kind: 'from',
              to: v2404,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v604
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_240': {
          const v981 = v856[1];
          
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
  const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
  switch (v856[0]) {
    case 'Borrower_claimRefund0_240': {
      const v859 = v856[1];
      return;
      break;
      }
    case 'Borrower_repay0_240': {
      const v920 = v856[1];
      undefined /* setApiDetails */;
      const v926 = v920[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:106:30:spread', stdlib.UInt_max, '0')];
      const v927 = stdlib.addressEq(v855, v603);
      stdlib.assert(v927, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_algo_nnt.rsh:107:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:106:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v929 = stdlib.safeAdd(v926, v767);
      const v931 = stdlib.gt(v929, v614);
      let v932;
      if (v931) {
        const v935 = stdlib.safeSub(v929, v614);
        v932 = v935;
        }
      else {
        v932 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
        }
      const v936 = stdlib.safeSub(v926, v932);
      const v939 = stdlib.add(v775, v936);
      ;
      let v954;
      if (v931) {
        const v957 = stdlib.safeSub(v929, v614);
        v954 = v957;
        }
      else {
        v954 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:111:51:decimal', stdlib.UInt_max, '0');
        }
      const v958 = stdlib.safeSub(v926, v954);
      const v960 = stdlib.safeAdd(v767, v958);
      const v962 = stdlib.ge(v960, v614);
      const v964 = [v962, v960, v614];
      const v965 = await txn1.getOutput('Borrower_repay', 'v964', ctc9, v964);
      if (v434) {
        stdlib.protect(ctc10, await interact.out(v920, v965), {
          at: './src/contracts/loan_algo_nnt.rsh:106:31:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:106:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:106:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:117:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:115:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:115:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:115:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2390 = v960;
      const v2391 = v857;
      const v2393 = v774;
      const v2394 = v939;
      const v2395 = stdlib.gt(v766, v768);
      const v2396 = stdlib.lt(v960, v614);
      const v2397 = v2395 ? v2396 : false;
      if (v2397) {
        return;
        }
      else {
        const v2400 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2401 = v2400[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2403 = v2396 ? v629 : v603;
        ;
        const v2404 = v2396 ? v603 : v629;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_240': {
      const v981 = v856[1];
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
    Borrower_claimRefund0_240: ctc6,
    Borrower_repay0_240: ctc7,
    Lender_claim0_240: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v813 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:126:29:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to "runLender_claim0_240" (defined at: ./src/contracts/loan_algo_nnt.rsh:126:29:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:91:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:91:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v817 = ['Lender_claim0_240', v813];
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v604, v614, v629, v631, v735, v766, v767, v768, v774, v775, v797, v817],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:126:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
      
      switch (v856[0]) {
        case 'Borrower_claimRefund0_240': {
          const v859 = v856[1];
          
          break;
          }
        case 'Borrower_repay0_240': {
          const v920 = v856[1];
          
          break;
          }
        case 'Lender_claim0_240': {
          const v981 = v856[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          const v1036 = null;
          const v1037 = await txn1.getOutput('Lender_claim', 'v1036', ctc9, v1036);
          
          const v2450 = v767;
          const v2451 = v857;
          const v2453 = v774;
          const v2454 = v775;
          const v2455 = stdlib.gt(v766, v768);
          const v2456 = stdlib.lt(v767, v614);
          const v2457 = v2455 ? v2456 : false;
          if (v2457) {
            const v2458 = stdlib.ge(v767, v614);
            sim_r.isHalt = false;
            }
          else {
            const v2460 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2461 = v2460[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2463 = v2456 ? v629 : v603;
            sim_r.txns.push({
              kind: 'from',
              to: v2463,
              tok: v604
              });
            const v2464 = v2456 ? v603 : v629;
            sim_r.txns.push({
              kind: 'from',
              to: v2464,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v604
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
  const {data: [v856], secs: v858, time: v857, didSend: v434, from: v855 } = txn1;
  switch (v856[0]) {
    case 'Borrower_claimRefund0_240': {
      const v859 = v856[1];
      return;
      break;
      }
    case 'Borrower_repay0_240': {
      const v920 = v856[1];
      return;
      break;
      }
    case 'Lender_claim0_240': {
      const v981 = v856[1];
      undefined /* setApiDetails */;
      ;
      const v1036 = null;
      const v1037 = await txn1.getOutput('Lender_claim', 'v1036', ctc9, v1036);
      if (v434) {
        stdlib.protect(ctc9, await interact.out(v981, v1037), {
          at: './src/contracts/loan_algo_nnt.rsh:126:30:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:126:30:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:30:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:127:36:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:126:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:126:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:126:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2450 = v767;
      const v2451 = v857;
      const v2453 = v774;
      const v2454 = v775;
      const v2455 = stdlib.gt(v766, v768);
      const v2456 = stdlib.lt(v767, v614);
      const v2457 = v2455 ? v2456 : false;
      if (v2457) {
        const v2458 = stdlib.ge(v767, v614);
        return;
        }
      else {
        const v2460 = v774[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2461 = v2460[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2463 = v2456 ? v629 : v603;
        ;
        const v2464 = v2456 ? v603 : v629;
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
  
  
  const [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v670 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:66:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v674 = ['Lender_lend0_93', v670];
  
  const txn1 = await (ctc.sendrecv({
    args: [v603, v604, v606, v613, v614, v628, v629, v630, v631, v637, v638, v659, v674],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v613, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v680], secs: v682, time: v681, didSend: v158, from: v679 } = txn1;
      
      switch (v680[0]) {
        case 'Borrower_close0_93': {
          const v683 = v680[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v708 = v680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v716 = stdlib.add(v638, v613);
          sim_r.txns.push({
            amt: v613,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v726 = true;
          const v727 = await txn1.getOutput('Lender_lend', 'v726', ctc4, v726);
          
          const v2545 = v679;
          const v2547 = v681;
          const v2555 = true;
          const v2556 = stdlib.sub(v716, v716);
          sim_r.txns.push({
            kind: 'from',
            to: v603,
            tok: undefined /* Nothing */
            });
          const v2557 = v606.maturation;
          const v2558 = stdlib.safeAdd(v631, v2557);
          const v2608 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
          const v2609 = v681;
          const v2611 = v637;
          const v2612 = v2556;
          const v2613 = stdlib.gt(v2558, v631);
          const v2614 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
          const v2615 = v2613 ? v2614 : false;
          if (v2615) {
            const v2616 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
            sim_r.isHalt = false;
            }
          else {
            const v2618 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2619 = v2618[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
            const v2621 = v2614 ? v679 : v603;
            sim_r.txns.push({
              kind: 'from',
              to: v2621,
              tok: v604
              });
            const v2622 = v2614 ? v603 : v679;
            sim_r.txns.push({
              kind: 'from',
              to: v2622,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v604
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
    tys: [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v680], secs: v682, time: v681, didSend: v158, from: v679 } = txn1;
  switch (v680[0]) {
    case 'Borrower_close0_93': {
      const v683 = v680[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v708 = v680[1];
      undefined /* setApiDetails */;
      const v716 = stdlib.add(v638, v613);
      ;
      const v726 = true;
      const v727 = await txn1.getOutput('Lender_lend', 'v726', ctc4, v726);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v708, v727), {
          at: './src/contracts/loan_algo_nnt.rsh:66:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:66:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:66:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:70:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:69:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:69:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2545 = v679;
      const v2547 = v681;
      const v2555 = true;
      const v2556 = stdlib.sub(v716, v716);
      ;
      const v2557 = v606.maturation;
      const v2558 = stdlib.safeAdd(v631, v2557);
      const v2608 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0');
      const v2609 = v681;
      const v2611 = v637;
      const v2612 = v2556;
      const v2613 = stdlib.gt(v2558, v631);
      const v2614 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
      const v2615 = v2613 ? v2614 : false;
      if (v2615) {
        const v2616 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:91:51:decimal', stdlib.UInt_max, '0'), v614);
        return;
        }
      else {
        const v2618 = v637[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2619 = v2618[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:132:33:application', stdlib.UInt_max, '0')];
        const v2621 = v2614 ? v679 : v603;
        ;
        const v2622 = v2614 ? v603 : v679;
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
  appApproval: `ByAZAAEFBAggByjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCBmhZUGFpggECoI0GJgMBAQEAACI1ADEYQQcaKmRJIls1ASEEWzUCNhoAF0lBARIiNQQjNQZJIQgMQAB5SSEJDEAAQEkhCgxAAClJIQsMQAAUIQsSRCo1/4ABAjT/UCEEr1BCAjAhChJEKjX/KTT/UEIA8iEJEkQ2GgE1/yg0/1BCAhJJIQwMQAASIQwSRCo1/yk0/1AhBK9QQgH5IQgSRDQBJBJEKWQoZFBJNQNXYQg1B0IGeEkhDQxAAC5JIQ4MQAAOIQ4SRCo1/yg0/1BCAJQhDRJENAEkEkQpZChkUEk1A1eKATUHQgZDSSEPDEAAGSEPEkQ0ASQSRClkKGRQSTUDV1AINQdCBiOBj8bFKhJENAFJIQYMQAAUIQYSRClkKGRQSTUDV7MBNQdCBf8kEkQpZChkUEk1A1dYATUHQgXsNhoCFzUENhoDNhoBF0klDEACu0kkDEABOkkhEAxAAMUhEBJEIQY0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEFWzX+Vyg4Nf2BYFs1/CERWzX7gZIBWzX6V5oRNfmBqwFbNfhJNQU194AEkE9kSTT3ULA09yJVQAAvgAgAAAAAAAACtbAqNQc0/zT+NP00/DT7IjQDV3EgNANXkQEXMgY0+jT5NPhCA1I0/IgFXYAJAAAAAAAAAtYBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk0+DT8CEIDHUgkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJVwAgNf8hEls1/oAEzJmSXLAyBjT+D0Q0/zEAEkQ0/zQDIQVbNAMhB1s0A1cwIDQDIRNbNANXWAEXNP40AyEUWzIGNAMhFVs0A1dxETQDIRZbQgOJSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKSVcAIDX/IQVbNf4hB1s1/VcwIDX8IRNbNftXWAEXNfohEls1+SEUWzX4IRVbNfdXcRE19iEWWzX1STUFNfSABNWOHas09FCwMgY0+QxENPQiVUkjDEAA20khFwxAAC0hFxJEgAgAAAAAAAAEDLAqNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2NPVCAt9INPRXAQg18zTzFzXyMQA0/xJENPI0+AhJNfE0/Q1JNfBBAAo08TT9CTXvQgADIjXvNPI07wk17jTuiAPYNPBBAAo08TT9CTXtQgADIjXtNPg08jTtCQg17IAIAAAAAAAAA8Q07DT9DxZRBwg07BZQNP0WUFCwNOw0/Q8WUQcINOwWUDT9FlA1BzT/NP40/TT8NPs0+jT5NOwyBjT3NPY09TTuCEICOEiACAAAAAAAAANwsCo1BzT/NP40/TT8NPs0+jT5NPgyBjT3NPY09UICDkkjDEAAfyMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBVs1/iEHWzX9V3ARNfyABJqLkXSwNPxXABE1+zT9NP6IAxA0/zEAEkQ0/zT+NANXMDg0A4GBAVs0A4GJAVsjNP8iMgY0AyERWzT8NPtJIls0/QgWXABcACJCAK9IIRiIArkiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBK9cAFwANfshGIgCbLEisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBVs1+TT6NPkMRDEANP8WUDT+FlA0/VAyBhZQNPtQNPoWUDT5FlApSwFXAH9nKEsBV38SZ0gjNQEyBjUCQgG+Nf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPsUNPkQQQA/NPQ09RZQNPZQNPcWUDT4FlAoUDT6UClQNPwWUDT+UDT/FlAoUClLAVcAf2coSwFXfzVnSCEGNQEyBjUCQgFeNPtBADKxIrIBNP+yCCOyEDT0sgezNPQ09TT4NPo0/DT7NP009iEHWwgiNPw0/TT+NP9JCUIAQ7EisgE0/lcAESJbshIlshA09LIUNPWyEbOxIrIBNP+yCCOyEDT0sgezsSKyASKyEiWyEDIJshUyCrIUNPWyEbNCAMk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+zT2DDXzNPo0/Q008xBBAFI0+zT2DzXyNPQ09RZQNPYWUDT3UDT4FlA0+RZRBwhQNPoWUDT7FlA0/BZQNP5QNP8WUDTyFlEHCFApSwFXAH9nKEsBV38MZ0gkNQEyBjUCQgBosSKyATT+VwARIluyEiWyEDT0NPc0802yFDT1shGzsSKyATT/sggjshA09zT0NPNNsgezsSKyASKyEiWyEDIJshUyCrIUNPWyEbNCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 180,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2655","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_240","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_240","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_240","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1036","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v693","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v726","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v880","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v964","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2641","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2657","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_240","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_240","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_240","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2671","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2688","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2695","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200309438819003601f8101601f191683016001600160401b0381118482101762000545578392829160405283398101039060e0821262000649576080604051926200004d846200064e565b825184526200005f6020840162000686565b602085015260408301516040850152605f190112620006495760c06040519162000089836200064e565b620000976060820162000686565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005455760009161012091604052828152826020820152826040820152620000fa6200069b565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f826200066a565b620001396200069b565b825262000145620006bc565b602083015262000154620006bc565b604083015260ff6004541662000630577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528351602082015260018060a01b03602085015116604082015260408401516060820152620001c56060850151608083019062000703565ba18051801590811562000623575b50156200060a576000825152600060208351015260006040835101528151602083015152602082015180516040602082015191015115156040519162000219836200066a565b600083526020830152604082015262000231620006bc565b9160005b60018110620005ba5750508152604083015234620005a15760608101516020606082015191015111156200058857604051916001600160401b036101008401908111908411176200054557602091604060609261010086018252600086526000858701526000828701528151620002ac816200064e565b600081526000868201526000838201526000858201528487015260006080870152620002d7620006bc565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015281830151828701528383015184870152436080870152015160a08501528180820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260408101516060830152620003726060820151608084019062000703565b608081015161010083015260a0810151600061012084015b600182106200055b5760c084015161018086015260e08401516101a0808701919091528552846101c081016001600160401b03811182821017620005455760405280516001600160401b0381116200054557600254600181811c911680156200053a575b60208210146200052457601f8111620004ba575b50602091601f8211600114620004505791819260009262000444575b50508160011b916000199060031b1c1916176002555b60405161293c9081620007588239f35b0151905082806200041e565b601f19821692600260005260206000209160005b858110620004a15750836001951062000487575b505050811b0160025562000434565b015160001960f88460031b161c1916905582808062000478565b9192602060018192868501518155019401920162000464565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000519575b601f0160051c01905b8181106200050c575062000402565b60008155600101620004fd565b9091508190620004f4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ee565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200038a565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005c681836200072f565b51620005d382866200072f565b52620005e081856200072f565b506000198114620005f45760010162000235565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d3565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200054557604052565b606081019081106001600160401b038211176200054557604052565b51906001600160a01b03821682036200064957565b60405190620006aa826200066a565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000545576040528260005b828110620006ec57505050565b8290620006f86200069b565b8184015201620006df565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007415760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101585780631e93b0f11461014f57806330dd5d0814610146578063316dfd001461013d5780633c4965541461013457806340410cd51461012b5780634cd8755514610122578063573b851014610119578063823c0a8d14610110578063832307571461010757806392e83e21146100fe57806394134348146100f557806396d6c36b146100ec578063ab53f2c6146100e3578063bfbc9d04146100da5763f9d773330361000e576100d56109da565b61000e565b506100d561096c565b506100d56108f7565b506100d5610878565b506100d56107ce565b506100d5610780565b506100d5610761565b506100d5610722565b506100d561054f565b506100d56104e4565b506100d561048b565b506100d561043c565b506100d56103af565b506100d56101f9565b506100d56101c9565b50346101c45760003660031901126101c457610172610cb6565b6005600054036101ab5760e0602091608061019c61018e610b6f565b858082518301019101610e7d565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101c45760003660031901126101c4576020600354604051908152f35b60209060031901126101c457600490565b50610393610219610209366101e8565b610211610cb6565b503690612779565b61023461022f61022b60045460ff1690565b1590565b610f37565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124960405180610264843383612797565b0390a1610275600560005414610f57565b6102a4610292610283610b6f565b60208082518301019101610e7d565b915180159081156103a3575b50610f77565b60c08101906102b68251431015610f97565b6102c03415610fb7565b6102dc3360018060a01b036102d58451610dcb565b1614610fd7565b6102e46114c6565b916102f86102f28351610dcb565b84611527565b6103116103086020840151610dcb565b60208501611527565b6040820151604084015261033461032b6060840151610dcb565b60608501611527565b6080820151608084015261035761034e60a0840151151590565b151560a0850152565b5160c083015260e081015160e0830152610100438184015281015161012090818401528101519061014091828401520151610160820152612552565b60405160008152602090f35b0390f35b9050600154143861029e565b5060a03660031901126101c4576103c4610cb6565b604051906103d182610ab7565b600435825260803660231901126101c457604051916103ef83610adf565b6024359260038410156101c45761039393815260443561040e81610deb565b602082015261041c36612759565b604082015260843561042d81610deb565b60608201526020820152611536565b50346101c45760003660031901126101c457610456610cb6565b6005600054036104725760c060209160e061019c61018e610b6f565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101c457602060406104a4610cb6565b6104d8816104b0610da5565b85810190600082515251151586825101526104c9610da5565b90600082525186820152611a57565b01511515604051908152f35b50346101c45760003660031901126101c4576104fe610cb6565b6005600054036105365761012061039f9161016061051d610283610b6f565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5061055c610209366101e8565b61057361056e61022b60045460ff1690565b610ff7565b61070c6040917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968351806105a8843383612797565b0390a16105b9600160005414611017565b6106f96105c4610b6f565b916105ee6105dc6020948580825183010191016127b1565b91518015908115610716575b50611037565b6105f83415611057565b828101926106f460a061060b8651610dcb565b9361062461061f8a83019687519033612832565b611077565b61063f33600180851b036106388451610dcb565b1614611097565b61066f61066761064d6119f9565b9861066161065b8551610dcb565b8b611527565b51610dcb565b858901611527565b60608101518988015260c0810151606088015260e0810151608088015261069882880160019052565b6106ae6106a58251610dcb565b60c08901611527565b600060e088015243610100880152608081015161012088015201519182519384519051019388828201519101511515916106e6610c1a565b958652850152151587840152565b6128b2565b6101408201526000610160820152612084565b5160008152602090f35b905060015414386105e8565b5060003660031901126101c457602060a061073b610cb6565b6104d881610747610da5565b8581019060018251525115156040825101526104c9610da5565b50346101c45760003660031901126101c4576020600154604051908152f35b5060003660031901126101c45760206080610799610cb6565b6104d8816107a5610d5b565b8581019060028251525115156060825101526107bf610d5b565b90600082525186820152611536565b50346101c45760003660031901126101c45761039f61082b6101006107f1610cb6565b600054600781101561083d57600561080991146110d7565b61081c61082360a061081c610283610b6f565b0151151590565b151582840152565b60405190151581529081906020820190565b600761084991146110b7565b61087361016061086961085a610b6f565b602080825183010191016112d8565b0151151582840152565b61081c565b5060803660031901126101c45761088d610cb6565b6040519061089a82610ab7565b600435825260603660231901126101c457604051916108b883610afa565b6024359260028410156101c4576103939381526044356108d781610deb565b60208201526064356108e881610deb565b60408201526020820152611a57565b50346101c457600080600319360112610969578054610914610b6f565b906040519283918252602090604082840152835191826040850152815b83811061095257505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610931565b80fd5b5060003660031901126101c457602080610984610cb6565b6104d881610990610d5b565b84810190600082515251151585825101526109a9610d5b565b90600082525185820152611536565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101c4576109ef610c79565b5061039f60606109fd610cb6565b610a5881604051610a0d81610ab7565b604051610a1981610b15565b6000815281526020810190610a2c610d28565b8252600435815152600182515251604082510152610a48610d5b565b9060008252516020820152611536565b0151604051918291826109b8565b90600182811c92168015610a96575b6020831014610a8057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610a75565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610ad257604052565b610ada610aa0565b604052565b608081019081106001600160401b03821117610ad257604052565b606081019081106001600160401b03821117610ad257604052565b602081019081106001600160401b03821117610ad257604052565b61018081019081106001600160401b03821117610ad257604052565b601f909101601f19168101906001600160401b03821190821017610ad257604052565b6040519060008260025491610b8383610a66565b808352600193808516908115610bf95750600114610bab575b50610ba992500383610b4c565b565b6002600090815260008051602061291083398151915294602093509091905b818310610be1575050610ba9935082010138610b9c565b85548884018501529485019487945091830191610bca565b9050610ba994506020925060ff191682840152151560051b82010138610b9c565b60405190606082016001600160401b03811183821017610ad257604052565b6040519061018082016001600160401b03811183821017610ad257604052565b6040519061010082016001600160401b03811183821017610ad257604052565b60405190606082016001600160401b03811183821017610ca9575b60405260006040838281528260208201520152565b610cb1610aa0565b610c94565b6040519061014082016001600160401b03811183821017610d1b575b60405281610120600091828152826020820152826040820152610cf3610c79565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610d23610aa0565b610cd2565b60405190610d3582610adf565b6000606083828152826020820152604051610d4f81610b15565b83815260408201520152565b60405190610d6882610ab7565b81600081526020610d77610d28565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610d9d57565b610ba9610d7c565b60405190610db282610ab7565b81600081526020610d77610c79565b60021115610d9d57565b6001600160a01b031690565b51906001600160a01b03821682036101c457565b801515036101c457565b5190610ba982610deb565b9080601f830112156101c457604091825192610e1b84610b15565b83606093848401938185116101c457915b848310610e3c5750505050505090565b85838303126101c45783518691610e5282610afa565b84518252602091828601518382015286860151610e6e81610deb565b87820152815201920191610e2c565b6101c0818303126101c4576101a0610f2e91610e97610c39565b93610ea182610dd7565b8552610eaf60208301610dd7565b602086015260408201516040860152610eca60608301610dd7565b606086015260808201516080860152610ee560a08301610df5565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610f1861012091828401610e00565b9085015261018081015161014085015201610df5565b61016082015290565b15610f3e57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610f5e57565b60405163100960cb60e01b8152601f6004820152602490fd5b15610f7e57565b60405163100960cb60e01b815260206004820152602490fd5b15610f9e57565b60405163100960cb60e01b815260216004820152602490fd5b15610fbe57565b60405163100960cb60e01b815260226004820152602490fd5b15610fde57565b60405163100960cb60e01b815260236004820152602490fd5b15610ffe57565b60405163100960cb60e01b815260106004820152602490fd5b1561101e57565b60405163100960cb60e01b815260116004820152602490fd5b1561103e57565b60405163100960cb60e01b815260126004820152602490fd5b1561105e57565b60405163100960cb60e01b815260136004820152602490fd5b1561107e57565b60405163100960cb60e01b815260146004820152602490fd5b1561109e57565b60405163100960cb60e01b815260156004820152602490fd5b156110be57565b60405163100960cb60e01b8152600a6004820152602490fd5b156110de57565b60405163100960cb60e01b815260096004820152602490fd5b156110fe57565b60405163100960cb60e01b815260166004820152602490fd5b1561111e57565b60405163100960cb60e01b815260176004820152602490fd5b1561113e57565b60405163100960cb60e01b815260186004820152602490fd5b1561115e57565b60405163100960cb60e01b815260196004820152602490fd5b1561117e57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561119e57565b60405163100960cb60e01b8152601b6004820152602490fd5b156111be57565b60405163100960cb60e01b8152601c6004820152602490fd5b156111de57565b60405163100960cb60e01b8152601a6004820152602490fd5b156111fe57565b602460405163100960cb60e01b8152816004820152fd5b1561121c57565b60405163100960cb60e01b815260256004820152602490fd5b1561123c57565b60405163100960cb60e01b815260266004820152602490fd5b1561125c57565b60405163100960cb60e01b815260286004820152602490fd5b1561127c57565b60405163100960cb60e01b815260276004820152602490fd5b91908260809103126101c4576040516112ad81610adf565b60608082946112bb81610dd7565b845260208101516020850152604081015160408501520151910152565b90610220828203126101c45761139d6102006112f2610c39565b936112fc81610dd7565b855261130a60208201610dd7565b602086015261131c8460408301611295565b604086015260c0810151606086015260e0810151608086015261010093611344858301610df5565b60a0870152610120611357818401610dd7565b60c08801526113896101409261136e848601610df5565b60e08a01526101609788860151908a01526101808501610e00565b908701526101e08201519086015201610df5565b9082015290565b604051610100810191906001600160401b03831181841017611405575b8260405280926113d081610b15565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610d77610c79565b61140d610aa0565b6113c1565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561146f575b60408501526020810151151582850152604081015151608085015201511515910152565b611477610d7c565b61144b565b5160038110156114895790565b611491610d7c565b90565b604051906114a182610b15565b8160005b602081106114b1575050565b6020906114bc610c79565b81840152016114a5565b604051906114d382610b30565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261151d611494565b6101408201520152565b6001600160a01b039091169052565b9061153f6113a4565b61155661155161022b60045460ff1690565b6110f7565b6040927f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f96184518061158884338361141f565b0390a1611599600560005414611117565b6115a1610b6f565b926115b6602094858082518301019101610e7d565b926115cc8351801590811561191a575b50611137565b8460c08501936115de85514310611157565b01906115ea825161147c565b6115f381610d93565b61168957505093600084610ba99661160b34156111d7565b8351600081527fba7fb89551c11726e215f4167c55483db31eeaaddbaff724b15c59657036eb379080602081015b0390a101526116716116496114c6565b9461165d6116578651610dcb565b87611527565b61166981860151610dcb565b908601611527565b808301519084015261033461032b6060840151610dcb565b9193929095600161169a885161147c565b6116a381610d93565b036118a55780610ba99751015183526116ce6116c76116c28651610dcb565b610dcb565b3314611197565b825151946116e260e086019687519061193d565b90606061177a89870198848a528589019485511099611706878a019b8c9015159052565b8a511561189a5761171a815187519061195f565b848a01525b61174b6117328a5151868c01519061195f565b9b6117458d60808d019e8f5234146111b7565b51151590565b1561188d5751855161175c9161195f565b60a08901525b5161177488515160a08a01519061195f565b9061193d565b9561179860e060c0830198808a528651111592019182519015159052565b86518a82510152835185825101527f90e57a0e2ffa9b4afb4dcacc6bedf9308f5aa11bd97579b0599ea9e35f4103636117d782518751918291826109b8565b0390a1519101526118116117e96114c6565b976117fd6117f78851610dcb565b8a611527565b61180981880151610dcb565b908901611527565b519086015261182f6118266060850151610dcb565b60608701611527565b6080830151608086015261185261184960a0850151151590565b151560a0870152565b5160c08501525160e0840152610100438185015281015161012090818501528101519061014091828501520151905101610160820152612552565b50600060a0890152611762565b6000848a015261171f565b91509192946118b66002915161147c565b6118bf81610d93565b146118cc575b5050505050565b60006080611910966118de3415611177565b8351600081527fd8903dc047eedff8d94c5e9a2440caf2af0463c5deacfd5b42f06f729a2ee783908060208101611639565b38808080806118c5565b905060015414386115c6565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611952575b82106101c457565b61195a611926565b61194a565b90810390811161196c5790565b611491611926565b9092916040602060809260a085019660018060a01b031685528051828601520151805160028110156119ba575b8285015260208101511515606085015201511515910152565b6119c2610d7c565b6119a1565b5160028110156114895790565b604051906119e182610adf565b60006060838281528260208201528260408201520152565b60405190611a0682610b30565b81610160600091828152826020820152611a1e6119d4565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261151d611494565b611ad090611a72611a6d61022b60045460ff1690565b6111f7565b6040927f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a4347845180611aa4853383611974565b0390a1611ab5600760005414611215565b611abd610b6f565b60209381858080945183010191016112d8565b92611ae681518015908115611cfe575b50611235565b01611af181516119c7565b611afa81610dc1565b611bf3575092600081610ba995611b113415611275565b8151600081527f47b7770328ec5796e4a791cbeeeacf77e4a9291560d265dece38e3a7156e9d4390602090a10152611b72611b4a6119f9565b93611b5e611b588551610dcb565b86611527565b611b6a81850151610dcb565b908501611527565b80820151908301526060810151606083015260808101516080830152600060a0830152611bae611ba560c0830151610dcb565b60c08401611527565b611bc7611bbe60e0830151151590565b151560e0840152565b610100438184015281015161012090818401528101519061014091828401520151610160820152612084565b611c02600191939293516119c7565b611c0b81610dc1565b14611c17575b50505050565b611cf593611c6460a06060840194611c3186513414611255565b8351600181527f5b1b1a382bc1d940aa4d6ec6f90c1fc672e81e2185c6e72d09b8a5c7cc8de46a90602090a10160019052565b611c89611c6f6119f9565b94611c7d6116578551610dcb565b61166981850151610dcb565b80820151908401528151606084015260808101516080840152611cb261034e60a0830151151590565b611cbf3360c08501611527565b600160e0840152610100438185015281015161012090818501528101519061014091828501520151905101610160820152612084565b38808080611c11565b90506001541438611ae0565b906001811015611d1b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110611d49575050565b60008155600101611d3e565b611d60600254610a66565b80611d685750565b601f8111600114611d7b57506000600255565b6002600052611dc090601f0160051c600080516020612910833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611d3e565b6000602081208160025555565b60405190611dda82610b30565b81610160600091828152826020820152611df26119d4565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611e24611494565b610120820152826101408201520152565b6000915b60018310611e4657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611e39565b610ba990929192610200610220820194611e90838251611412565b611ea260208201516020850190611412565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611f00610100928386019015159052565b60c081015191611f166101209384870190611412565b611f4a60e083015191611f30610140938489019015159052565b830151936101609485880152830151610180870190611e35565b8101516101e085015201511515910152565b90601f8211611f69575050565b610ba99160026000526020600020906020601f840160051c83019310611f97575b601f0160051c0190611d3e565b9091508190611f8a565b80519091906001600160401b038111612077575b611fc981611fc4600254610a66565b611f5c565b602080601f83116001146120055750819293600092611ffa575b50508160011b916000199060031b1c191617600255565b015190503880611fe3565b6002600052601f19831694909190600080516020612910833981519152926000905b87821061205f575050836001959610612046575b505050811b01600255565b015160001960f88460031b161c1916905538808061203b565b80600185968294968601518155019501930190612027565b61207f610aa0565b611fb5565b60e081018051151580156122ff5760005b1561217a575050612167612175610ba9926121456120b1611dcd565b916120bf6102f28251610dcb565b6120cf6103086020830151610dcb565b6040810151604084015260608101516060840152608081015160808401526120fa60a0840160019052565b61211361210a60c0830151610dcb565b60c08501611527565b600060e08401526101008082015190840152610140808201516101208501526101608092015190840152820160019052565b61214f6007600055565b61215843600155565b60405192839160208301611e75565b03601f198101835282610b4c565b611fa1565b15612275576000826121926116c2610ba99551610dcb565b908280808061016095868601519082821561226c575bf11561225f575b6121b76114c6565b936121c5611b588351610dcb565b6121de6121d56020840151610dcb565b60208701611527565b608082015160408601526121f861182660c0840151610dcb565b6101009061221c61221383850192835160808a015251151590565b151560a0880152565b6101209182840191612237835160408088015101519061193d565b60c08901528660e0890152519087015251908501526101408091015190840152820152612552565b612267611d31565b6121af565b506108fc6121a8565b5060008080836122b061228c602084970151610dcb565b6122968351610dcb565b6101408401515151916001600160a01b039091169061230b565b6101606122c06116c28351610dcb565b910151908282156122f6575bf1156122e9575b600080556122e16000600155565b610ba9611d55565b6122f1611d31565b6122d3565b506108fc6122cc565b60a08301511515612095565b6000919061237093838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261234981610adf565b5193165af1612360612359612377565b80926123d9565b50602080825183010191016123c4565b156101c457565b3d156123bf573d906001600160401b0382116123b2575b604051916123a6601f8201601f191660200184610b4c565b82523d6000602084013e565b6123ba610aa0565b61238e565b606090565b908160209103126101c4575161149181610deb565b156123e15790565b8051156123f057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156124115790565b80511561242057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6040519061244682610ab7565b60006020838281520152565b6040519061245f82610b30565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611e24611494565b610ba9909291926101a06101606101c08301956124c0848251611412565b6124d260208201516020860190611412565b604081015160408501526124ee60608201516060860190611412565b6080810151608085015261250b60a082015160a086019015159052565b60c081015160c085015260e081015160e0850152610100808201519085015261253d6101208083015190860190611e35565b61014081015161018085015201511515910152565b61255a612439565b60e08201805160408401805191909111835291929060c08201908151916101209283850151106000906000146127545750855115155b1561268f5792612665610ba996612167969484612175976125c0602061266d98518a511115950194859015159052565b6125c8612452565b976125d66117f78851610dcb565b6125ef6125e66020890151610dcb565b60208b01611527565b51604089015261260e6126056060880151610dcb565b60608a01611527565b6080860151608089015261263161262860a0880151151590565b151560a08a0152565b5160c08801525160e08701526101008085015190870152610140908185015190870152610160809401519086015251151590565b151590830152565b6126776005600055565b61268043600155565b604051928391602083016124a2565b50505060008093819350826126ea6126ab602085960151610dcb565b926126b68151151590565b8514612741576117456126cc6060850151610dcb565b945b61014085015151516001600160a01b039690919087169061230b565b831461272b576101606126fd8251610dcb565b915b01519183918315612721575b1690f1156122e957600080556122e16000600155565b6108fc925061270b565b61016061273b6060830151610dcb565b916126ff565b61174561274e8451610dcb565b946126ce565b612590565b60209060631901126101c4576040519061277282610b15565b6064358252565b91908260209103126101c45760405161279181610b15565b91358252565b6001600160a01b0390911681529051602082015260400190565b6101a0818303126101c457610180906128186127cb610c59565b936127d583610dd7565b85526127e360208401610dd7565b6020860152604083015160408601526127ff8160608501611295565b606086015260e083015160808601526101008301610e00565b60a084015261016081015160c0840152015160e082015290565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152611491936000938493909284919060a081016001600160401b038111828210176128a5575b6040525193165af161236061289e612377565b8092612409565b6128ad610aa0565b61288b565b91906128bc611494565b9260005b600181106128ce5750508252565b806128db60019284611d0a565b516128e68288611d0a565b526128f18187611d0a565b506000198114612902575b016128c0565b61290a611926565b6128fc56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12436,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_algo_nnt.rsh:49:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_algo_nnt.rsh:137:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_algo_nnt.rsh:91:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_algo_nnt.rsh:83:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_algo_nnt.rsh:53:62:after expr stmt semicolon',
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
