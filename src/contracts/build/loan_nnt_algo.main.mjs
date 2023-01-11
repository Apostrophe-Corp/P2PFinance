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
      const [v702, v703, v704, v705, v706, v710, v712, v713] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = svs;
      return (await ((async () => {
        
        
        return v919;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v702, v703, v704, v705, v706, v710, v712, v713] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = svs;
      return (await ((async () => {
        
        
        return v726;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v702, v703, v704, v705, v706, v710, v712, v713] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = svs;
      return (await ((async () => {
        
        
        return v892;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = svs;
      return (await ((async () => {
        
        
        return v754;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v702, v703, v704, v705, v706, v710, v712, v713] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = svs;
      return (await ((async () => {
        
        
        return v949;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = svs;
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
    Borrower_claimRefund0_273: ctc6,
    Borrower_repay0_273: ctc9,
    Lender_claim0_273: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v680 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v681 = [v680];
  const v687 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_algo.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v688 = v687.address;
  const v689 = v687.amount;
  const v690 = v687.collateral;
  const v691 = v687.maturation;
  const v692 = v687.principal;
  const v693 = v687.tokLoan;
  const v700 = stdlib.lt(v692, v689);
  stdlib.assert(v700, {
    at: './src/contracts/loan_nnt_algo.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v701 = {
    address: v688,
    amount: v689,
    maturation: v691,
    principal: v692
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v693, v690, v701],
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
      
      
      const {data: [v703, v704, v705], secs: v707, time: v706, didSend: v43, from: v702 } = txn1;
      
      const v708 = v681[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v709 = stdlib.Array_set(v708, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v710 = stdlib.Array_set(v681, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v709);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v703
        });
      ;
      const v712 = v705.principal;
      const v713 = v705.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v703, v704, v705], secs: v707, time: v706, didSend: v43, from: v702 } = txn1;
  const v708 = v681[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v709 = stdlib.Array_set(v708, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v710 = stdlib.Array_set(v681, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v709);
  ;
  ;
  const v712 = v705.principal;
  const v713 = v705.amount;
  const v714 = stdlib.lt(v712, v713);
  stdlib.assert(v714, {
    at: './src/contracts/loan_nnt_algo.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v702, v703, v704, v705, v706, v710, v712, v713],
    evt_cnt: 0,
    funcNum: 1,
    lct: v706,
    onlyIf: true,
    out_tys: [],
    pay: [v704, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v717, time: v716, didSend: v53, from: v715 } = txn2;
      
      sim_r.txns.push({
        amt: v704,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v723 = true;
      const v724 = v702;
      const v725 = false;
      const v726 = v716;
      const v727 = v706;
      const v732 = v710;
      const v733 = v704;
      
      if (await (async () => {
        const v748 = v725 ? false : v723;
        
        return v748;})()) {
        const v753 = v725 ? false : v723;
        const v754 = v753 ? true : v725;
        sim_r.isHalt = false;
        }
      else {
        const v891 = v725 ? false : v723;
        const v892 = v891 ? true : v725;
        if (v725) {
          const v904 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v905 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v911 = stdlib.sub(v905, v905);
          const v913 = stdlib.Array_set(v904, '0', v911);
          const v914 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v913);
          sim_r.txns.push({
            kind: 'from',
            to: v702,
            tok: v703
            });
          const v916 = v705.maturation;
          const v918 = stdlib.safeAdd(v727, v916);
          const v919 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v920 = v726;
          const v921 = v727;
          const v926 = v914;
          const v927 = v733;
          
          if (await (async () => {
            const v944 = stdlib.gt(v918, v921);
            const v946 = stdlib.lt(v919, v713);
            const v947 = v944 ? v946 : false;
            
            return v947;})()) {
            const v949 = stdlib.ge(v919, v713);
            sim_r.isHalt = false;
            }
          else {
            const v1307 = stdlib.lt(v919, v713);
            const v1308 = v1307 ? v724 : v702;
            sim_r.txns.push({
              kind: 'from',
              to: v1308,
              tok: undefined /* Nothing */
              });
            const v1313 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v1317 = v1307 ? v702 : v724;
            sim_r.txns.push({
              kind: 'from',
              to: v1317,
              tok: v703
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v703
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
            to: v702,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v703
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
  const {data: [], secs: v717, time: v716, didSend: v53, from: v715 } = txn2;
  ;
  const v720 = stdlib.addressEq(v702, v715);
  stdlib.assert(v720, {
    at: './src/contracts/loan_nnt_algo.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v716), {
    at: './src/contracts/loan_nnt_algo.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v723 = true;
  let v724 = v702;
  let v725 = false;
  let v726 = v716;
  let v727 = v706;
  let v732 = v710;
  let v733 = v704;
  
  let txn3 = txn2;
  while (await (async () => {
    const v748 = v725 ? false : v723;
    
    return v748;})()) {
    const v753 = v725 ? false : v723;
    const v754 = v753 ? true : v725;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v791], secs: v793, time: v792, didSend: v196, from: v790 } = txn4;
    switch (v791[0]) {
      case 'Borrower_close0_93': {
        const v794 = v791[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v827 = null;
        await txn4.getOutput('Borrower_close', 'v827', ctc5, v827);
        const cv723 = false;
        const cv724 = v724;
        const cv725 = v725;
        const cv726 = v792;
        const cv727 = v726;
        const cv732 = v732;
        const cv733 = v733;
        
        v723 = cv723;
        v724 = cv724;
        v725 = cv725;
        v726 = cv726;
        v727 = cv727;
        v732 = cv732;
        v733 = cv733;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v842 = v791[1];
        undefined /* setApiDetails */;
        ;
        const v868 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v869 = v868[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v870 = stdlib.add(v869, v712);
        const v872 = stdlib.Array_set(v868, '0', v870);
        const v873 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v872);
        ;
        const v883 = true;
        await txn4.getOutput('Lender_lend', 'v883', ctc8, v883);
        const cv723 = v723;
        const cv724 = v790;
        const cv725 = true;
        const cv726 = v792;
        const cv727 = v726;
        const cv732 = v873;
        const cv733 = v733;
        
        v723 = cv723;
        v724 = cv724;
        v725 = cv725;
        v726 = cv726;
        v727 = cv727;
        v732 = cv732;
        v733 = cv733;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v891 = v725 ? false : v723;
  const v892 = v891 ? true : v725;
  if (v725) {
    const v904 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v905 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v911 = stdlib.sub(v905, v905);
    const v913 = stdlib.Array_set(v904, '0', v911);
    const v914 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v913);
    ;
    const v916 = v705.maturation;
    const v918 = stdlib.safeAdd(v727, v916);
    let v919 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
    let v920 = v726;
    let v921 = v727;
    let v926 = v914;
    let v927 = v733;
    
    let txn4 = txn3;
    while (await (async () => {
      const v944 = stdlib.gt(v918, v921);
      const v946 = stdlib.lt(v919, v713);
      const v947 = v944 ? v946 : false;
      
      return v947;})()) {
      const v949 = stdlib.ge(v919, v713);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: ['time', v918],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949],
          evt_cnt: 0,
          funcNum: 5,
          lct: v920,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1300, time: v1299, didSend: v596, from: v1298 } = txn6;
            
            ;
            const cv919 = v919;
            const cv920 = v1299;
            const cv921 = v920;
            const cv926 = v926;
            const cv927 = v927;
            
            await (async () => {
              const v919 = cv919;
              const v920 = cv920;
              const v921 = cv921;
              const v926 = cv926;
              const v927 = cv927;
              
              if (await (async () => {
                const v944 = stdlib.gt(v918, v921);
                const v946 = stdlib.lt(v919, v713);
                const v947 = v944 ? v946 : false;
                
                return v947;})()) {
                const v949 = stdlib.ge(v919, v713);
                sim_r.isHalt = false;
                }
              else {
                const v1307 = stdlib.lt(v919, v713);
                const v1308 = v1307 ? v724 : v702;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1308,
                  tok: undefined /* Nothing */
                  });
                const v1313 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v1317 = v1307 ? v702 : v724;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1317,
                  tok: v703
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v703
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
        const {data: [], secs: v1300, time: v1299, didSend: v596, from: v1298 } = txn6;
        ;
        const v1301 = stdlib.addressEq(v702, v1298);
        stdlib.assert(v1301, {
          at: './src/contracts/loan_nnt_algo.rsh:88:50:dot',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:125:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:125:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv919 = v919;
        const cv920 = v1299;
        const cv921 = v920;
        const cv926 = v926;
        const cv927 = v927;
        
        v919 = cv919;
        v920 = cv920;
        v921 = cv921;
        v926 = cv926;
        v927 = cv927;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn5;
        switch (v1031[0]) {
          case 'Borrower_claimRefund0_273': {
            const v1034 = v1031[1];
            undefined /* setApiDetails */;
            ;
            ;
            const v1082 = null;
            await txn5.getOutput('Borrower_claimRefund', 'v1082', ctc5, v1082);
            const cv919 = v919;
            const cv920 = v1032;
            const cv921 = v920;
            const cv926 = v926;
            const cv927 = v927;
            
            v919 = cv919;
            v920 = cv920;
            v921 = cv921;
            v926 = cv926;
            v927 = cv927;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Borrower_repay0_273': {
            const v1122 = v1031[1];
            undefined /* setApiDetails */;
            const v1132 = v1122[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
            const v1133 = stdlib.addressEq(v1030, v702);
            stdlib.assert(v1133, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
              msg: 'You are not the Borrower',
              who: 'B'
              });
            const v1135 = stdlib.safeAdd(v1132, v919);
            const v1137 = stdlib.gt(v1135, v713);
            let v1138;
            if (v1137) {
              const v1141 = stdlib.safeSub(v1135, v713);
              v1138 = v1141;
              }
            else {
              v1138 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
              }
            const v1142 = stdlib.safeSub(v1132, v1138);
            ;
            const v1163 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
            const v1164 = v1163[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
            const v1165 = stdlib.add(v1164, v1142);
            const v1167 = stdlib.Array_set(v1163, '0', v1165);
            const v1168 = stdlib.Array_set(v926, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1167);
            ;
            let v1183;
            if (v1137) {
              const v1186 = stdlib.safeSub(v1135, v713);
              v1183 = v1186;
              }
            else {
              v1183 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
              }
            const v1187 = stdlib.safeSub(v1132, v1183);
            const v1189 = stdlib.safeAdd(v919, v1187);
            const v1191 = stdlib.ge(v1189, v713);
            const v1193 = [v1191, v1189, v713];
            await txn5.getOutput('Borrower_repay', 'v1193', ctc11, v1193);
            const cv919 = v1189;
            const cv920 = v1032;
            const cv921 = v920;
            const cv926 = v1168;
            const cv927 = v927;
            
            v919 = cv919;
            v920 = cv920;
            v921 = cv921;
            v926 = cv926;
            v927 = cv927;
            
            txn4 = txn5;
            continue;
            break;
            }
          case 'Lender_claim0_273': {
            const v1210 = v1031[1];
            undefined /* setApiDetails */;
            ;
            ;
            const v1292 = null;
            await txn5.getOutput('Lender_claim', 'v1292', ctc5, v1292);
            const cv919 = v919;
            const cv920 = v1032;
            const cv921 = v920;
            const cv926 = v926;
            const cv927 = v927;
            
            v919 = cv919;
            v920 = cv920;
            v921 = cv921;
            v926 = cv926;
            v927 = cv927;
            
            txn4 = txn5;
            continue;
            break;
            }
          }}
      
      }
    const v1307 = stdlib.lt(v919, v713);
    const v1308 = v1307 ? v724 : v702;
    ;
    const v1313 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
    const v1314 = v1313[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
    const v1317 = v1307 ? v702 : v724;
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
    Borrower_claimRefund0_273: ctc6,
    Borrower_repay0_273: ctc7,
    Lender_claim0_273: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v957 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:117:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_claimRefund0_273" (defined at: ./src/contracts/loan_nnt_algo.rsh:117:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v961 = ['Borrower_claimRefund0_273', v957];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949, v961],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:117:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
      
      switch (v1031[0]) {
        case 'Borrower_claimRefund0_273': {
          const v1034 = v1031[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1082 = null;
          const v1083 = await txn1.getOutput('Borrower_claimRefund', 'v1082', ctc9, v1082);
          
          const v2428 = v919;
          const v2429 = v1032;
          const v2431 = v926;
          const v2432 = v927;
          const v2433 = stdlib.gt(v918, v920);
          const v2434 = stdlib.lt(v919, v713);
          const v2435 = v2433 ? v2434 : false;
          if (v2435) {
            const v2436 = stdlib.ge(v919, v713);
            sim_r.isHalt = false;
            }
          else {
            const v2439 = v2434 ? v724 : v702;
            sim_r.txns.push({
              kind: 'from',
              to: v2439,
              tok: undefined /* Nothing */
              });
            const v2440 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2441 = v2440[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2442 = v2434 ? v702 : v724;
            sim_r.txns.push({
              kind: 'from',
              to: v2442,
              tok: v703
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v703
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_273': {
          const v1122 = v1031[1];
          
          break;
          }
        case 'Lender_claim0_273': {
          const v1210 = v1031[1];
          
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
  const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
  switch (v1031[0]) {
    case 'Borrower_claimRefund0_273': {
      const v1034 = v1031[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1082 = null;
      const v1083 = await txn1.getOutput('Borrower_claimRefund', 'v1082', ctc9, v1082);
      if (v517) {
        stdlib.protect(ctc9, await interact.out(v1034, v1083), {
          at: './src/contracts/loan_nnt_algo.rsh:117:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:117:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:118:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:117:58:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:117:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2428 = v919;
      const v2429 = v1032;
      const v2431 = v926;
      const v2432 = v927;
      const v2433 = stdlib.gt(v918, v920);
      const v2434 = stdlib.lt(v919, v713);
      const v2435 = v2433 ? v2434 : false;
      if (v2435) {
        const v2436 = stdlib.ge(v919, v713);
        return;
        }
      else {
        const v2439 = v2434 ? v724 : v702;
        ;
        const v2440 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2441 = v2440[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2442 = v2434 ? v702 : v724;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_273': {
      const v1122 = v1031[1];
      return;
      break;
      }
    case 'Lender_claim0_273': {
      const v1210 = v1031[1];
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
  
  
  const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v757 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v761 = ['Borrower_close0_93', v757];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754, v761],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:74:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:62:26:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v791], secs: v793, time: v792, didSend: v196, from: v790 } = txn1;
      
      switch (v791[0]) {
        case 'Borrower_close0_93': {
          const v794 = v791[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v827 = null;
          const v828 = await txn1.getOutput('Borrower_close', 'v827', ctc9, v827);
          
          const v2473 = false;
          const v2474 = v724;
          const v2475 = v725;
          const v2476 = v792;
          const v2478 = v732;
          const v2479 = v733;
          const v2480 = v725 ? false : false;
          if (v2480) {
            const v2482 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2484 = v725;
            if (v725) {
              const v2485 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2486 = v2485[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2487 = stdlib.sub(v2486, v2486);
              const v2488 = stdlib.Array_set(v2485, '0', v2487);
              const v2489 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2488);
              sim_r.txns.push({
                kind: 'from',
                to: v702,
                tok: v703
                });
              const v2490 = v705.maturation;
              const v2491 = stdlib.safeAdd(v726, v2490);
              const v2543 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
              const v2544 = v792;
              const v2546 = v2489;
              const v2547 = v733;
              const v2548 = stdlib.gt(v2491, v726);
              const v2549 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
              const v2550 = v2548 ? v2549 : false;
              if (v2550) {
                const v2551 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
                sim_r.isHalt = false;
                }
              else {
                const v2554 = v2549 ? v724 : v702;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2554,
                  tok: undefined /* Nothing */
                  });
                const v2555 = v2489[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v2556 = v2555[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
                const v2557 = v2549 ? v702 : v724;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2557,
                  tok: v703
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v703
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
                to: v702,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v703
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
          const v842 = v791[1];
          
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
  const {data: [v791], secs: v793, time: v792, didSend: v196, from: v790 } = txn1;
  switch (v791[0]) {
    case 'Borrower_close0_93': {
      const v794 = v791[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v827 = null;
      const v828 = await txn1.getOutput('Borrower_close', 'v827', ctc9, v827);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v794, v828), {
          at: './src/contracts/loan_nnt_algo.rsh:74:22:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:75:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:74:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2473 = false;
      const v2474 = v724;
      const v2475 = v725;
      const v2476 = v792;
      const v2478 = v732;
      const v2479 = v733;
      const v2480 = v725 ? false : false;
      if (v2480) {
        const v2482 = true;
        return;
        }
      else {
        const v2484 = v725;
        if (v725) {
          const v2485 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2486 = v2485[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2487 = stdlib.sub(v2486, v2486);
          const v2488 = stdlib.Array_set(v2485, '0', v2487);
          const v2489 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2488);
          ;
          const v2490 = v705.maturation;
          const v2491 = stdlib.safeAdd(v726, v2490);
          const v2543 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2544 = v792;
          const v2546 = v2489;
          const v2547 = v733;
          const v2548 = stdlib.gt(v2491, v726);
          const v2549 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
          const v2550 = v2548 ? v2549 : false;
          if (v2550) {
            const v2551 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
            return;
            }
          else {
            const v2554 = v2549 ? v724 : v702;
            ;
            const v2555 = v2489[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2556 = v2555[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2557 = v2549 ? v702 : v724;
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
      const v842 = v791[1];
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
    Borrower_claimRefund0_273: ctc7,
    Borrower_repay0_273: ctc6,
    Lender_claim0_273: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v971 = ctc.selfAddress();
  const v973 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_273" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v974 = v973[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v976 = stdlib.addressEq(v971, v702);
  stdlib.assert(v976, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_273" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v978 = stdlib.safeAdd(v974, v919);
  const v980 = stdlib.gt(v978, v713);
  const v991 = ['Borrower_repay0_273', v973];
  
  let v1008;
  if (v980) {
    const v1011 = stdlib.safeSub(v978, v713);
    v1008 = v1011;
    }
  else {
    v1008 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v1012 = stdlib.safeSub(v974, v1008);
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949, v991],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:109:42:decimal', stdlib.UInt_max, '0'), [[v1012, v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
      
      switch (v1031[0]) {
        case 'Borrower_claimRefund0_273': {
          const v1034 = v1031[1];
          
          break;
          }
        case 'Borrower_repay0_273': {
          const v1122 = v1031[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1132 = v1122[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
          const v1135 = stdlib.safeAdd(v1132, v919);
          const v1137 = stdlib.gt(v1135, v713);
          let v1138;
          if (v1137) {
            const v1141 = stdlib.safeSub(v1135, v713);
            v1138 = v1141;
            }
          else {
            v1138 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1142 = stdlib.safeSub(v1132, v1138);
          ;
          const v1163 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1164 = v1163[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1165 = stdlib.add(v1164, v1142);
          const v1167 = stdlib.Array_set(v1163, '0', v1165);
          const v1168 = stdlib.Array_set(v926, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1167);
          sim_r.txns.push({
            amt: v1142,
            kind: 'to',
            tok: v703
            });
          let v1183;
          if (v1137) {
            const v1186 = stdlib.safeSub(v1135, v713);
            v1183 = v1186;
            }
          else {
            v1183 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1187 = stdlib.safeSub(v1132, v1183);
          const v1189 = stdlib.safeAdd(v919, v1187);
          const v1191 = stdlib.ge(v1189, v713);
          const v1193 = [v1191, v1189, v713];
          const v1194 = await txn1.getOutput('Borrower_repay', 'v1193', ctc9, v1193);
          
          const v2658 = v1189;
          const v2659 = v1032;
          const v2661 = v1168;
          const v2662 = v927;
          const v2663 = stdlib.gt(v918, v920);
          const v2664 = stdlib.lt(v1189, v713);
          const v2665 = v2663 ? v2664 : false;
          if (v2665) {
            sim_r.isHalt = false;
            }
          else {
            const v2669 = v2664 ? v724 : v702;
            sim_r.txns.push({
              kind: 'from',
              to: v2669,
              tok: undefined /* Nothing */
              });
            const v2670 = v1168[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2671 = v2670[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2672 = v2664 ? v702 : v724;
            sim_r.txns.push({
              kind: 'from',
              to: v2672,
              tok: v703
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v703
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_273': {
          const v1210 = v1031[1];
          
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
  const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
  switch (v1031[0]) {
    case 'Borrower_claimRefund0_273': {
      const v1034 = v1031[1];
      return;
      break;
      }
    case 'Borrower_repay0_273': {
      const v1122 = v1031[1];
      undefined /* setApiDetails */;
      const v1132 = v1122[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v1133 = stdlib.addressEq(v1030, v702);
      stdlib.assert(v1133, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1135 = stdlib.safeAdd(v1132, v919);
      const v1137 = stdlib.gt(v1135, v713);
      let v1138;
      if (v1137) {
        const v1141 = stdlib.safeSub(v1135, v713);
        v1138 = v1141;
        }
      else {
        v1138 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v1142 = stdlib.safeSub(v1132, v1138);
      ;
      const v1163 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1164 = v1163[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1165 = stdlib.add(v1164, v1142);
      const v1167 = stdlib.Array_set(v1163, '0', v1165);
      const v1168 = stdlib.Array_set(v926, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1167);
      ;
      let v1183;
      if (v1137) {
        const v1186 = stdlib.safeSub(v1135, v713);
        v1183 = v1186;
        }
      else {
        v1183 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v1187 = stdlib.safeSub(v1132, v1183);
      const v1189 = stdlib.safeAdd(v919, v1187);
      const v1191 = stdlib.ge(v1189, v713);
      const v1193 = [v1191, v1189, v713];
      const v1194 = await txn1.getOutput('Borrower_repay', 'v1193', ctc9, v1193);
      if (v517) {
        stdlib.protect(ctc10, await interact.out(v1122, v1194), {
          at: './src/contracts/loan_nnt_algo.rsh:101:31:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:31:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:112:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:110:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:110:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:110:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2658 = v1189;
      const v2659 = v1032;
      const v2661 = v1168;
      const v2662 = v927;
      const v2663 = stdlib.gt(v918, v920);
      const v2664 = stdlib.lt(v1189, v713);
      const v2665 = v2663 ? v2664 : false;
      if (v2665) {
        return;
        }
      else {
        const v2669 = v2664 ? v724 : v702;
        ;
        const v2670 = v1168[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2671 = v2670[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2672 = v2664 ? v702 : v724;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_273': {
      const v1210 = v1031[1];
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
    Borrower_claimRefund0_273: ctc6,
    Borrower_repay0_273: ctc7,
    Lender_claim0_273: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v965 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:121:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runLender_claim0_273" (defined at: ./src/contracts/loan_nnt_algo.rsh:121:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v969 = ['Lender_claim0_273', v965];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v713, v724, v726, v892, v918, v919, v920, v926, v927, v949, v969],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:121:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
      
      switch (v1031[0]) {
        case 'Borrower_claimRefund0_273': {
          const v1034 = v1031[1];
          
          break;
          }
        case 'Borrower_repay0_273': {
          const v1122 = v1031[1];
          
          break;
          }
        case 'Lender_claim0_273': {
          const v1210 = v1031[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1292 = null;
          const v1293 = await txn1.getOutput('Lender_claim', 'v1292', ctc9, v1292);
          
          const v2718 = v919;
          const v2719 = v1032;
          const v2721 = v926;
          const v2722 = v927;
          const v2723 = stdlib.gt(v918, v920);
          const v2724 = stdlib.lt(v919, v713);
          const v2725 = v2723 ? v2724 : false;
          if (v2725) {
            const v2726 = stdlib.ge(v919, v713);
            sim_r.isHalt = false;
            }
          else {
            const v2729 = v2724 ? v724 : v702;
            sim_r.txns.push({
              kind: 'from',
              to: v2729,
              tok: undefined /* Nothing */
              });
            const v2730 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2731 = v2730[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2732 = v2724 ? v702 : v724;
            sim_r.txns.push({
              kind: 'from',
              to: v2732,
              tok: v703
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v703
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
  const {data: [v1031], secs: v1033, time: v1032, didSend: v517, from: v1030 } = txn1;
  switch (v1031[0]) {
    case 'Borrower_claimRefund0_273': {
      const v1034 = v1031[1];
      return;
      break;
      }
    case 'Borrower_repay0_273': {
      const v1122 = v1031[1];
      return;
      break;
      }
    case 'Lender_claim0_273': {
      const v1210 = v1031[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1292 = null;
      const v1293 = await txn1.getOutput('Lender_claim', 'v1292', ctc9, v1292);
      if (v517) {
        stdlib.protect(ctc9, await interact.out(v1210, v1293), {
          at: './src/contracts/loan_nnt_algo.rsh:121:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:121:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:122:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:121:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:121:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2718 = v919;
      const v2719 = v1032;
      const v2721 = v926;
      const v2722 = v927;
      const v2723 = stdlib.gt(v918, v920);
      const v2724 = stdlib.lt(v919, v713);
      const v2725 = v2723 ? v2724 : false;
      if (v2725) {
        const v2726 = stdlib.ge(v919, v713);
        return;
        }
      else {
        const v2729 = v2724 ? v724 : v702;
        ;
        const v2730 = v926[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2731 = v2730[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2732 = v2724 ? v702 : v724;
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
  
  
  const [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v765 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:39:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:64:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v769 = ['Lender_lend0_93', v765];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v705, v712, v713, v723, v724, v725, v726, v732, v733, v754, v769],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:66:34:decimal', stdlib.UInt_max, '0'), [[v712, v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v791], secs: v793, time: v792, didSend: v196, from: v790 } = txn1;
      
      switch (v791[0]) {
        case 'Borrower_close0_93': {
          const v794 = v791[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v842 = v791[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v868 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v869 = v868[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v870 = stdlib.add(v869, v712);
          const v872 = stdlib.Array_set(v868, '0', v870);
          const v873 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v872);
          sim_r.txns.push({
            amt: v712,
            kind: 'to',
            tok: v703
            });
          const v883 = true;
          const v884 = await txn1.getOutput('Lender_lend', 'v883', ctc4, v883);
          
          const v2819 = v790;
          const v2821 = v792;
          const v2829 = true;
          const v2830 = v873[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2831 = v2830[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2832 = stdlib.sub(v2831, v2831);
          const v2833 = stdlib.Array_set(v2830, '0', v2832);
          const v2834 = stdlib.Array_set(v873, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2833);
          sim_r.txns.push({
            kind: 'from',
            to: v702,
            tok: v703
            });
          const v2835 = v705.maturation;
          const v2836 = stdlib.safeAdd(v726, v2835);
          const v2888 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2889 = v792;
          const v2891 = v2834;
          const v2892 = v733;
          const v2893 = stdlib.gt(v2836, v726);
          const v2894 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
          const v2895 = v2893 ? v2894 : false;
          if (v2895) {
            const v2896 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
            sim_r.isHalt = false;
            }
          else {
            const v2899 = v2894 ? v790 : v702;
            sim_r.txns.push({
              kind: 'from',
              to: v2899,
              tok: undefined /* Nothing */
              });
            const v2900 = v2834[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2901 = v2900[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
            const v2902 = v2894 ? v702 : v790;
            sim_r.txns.push({
              kind: 'from',
              to: v2902,
              tok: v703
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v703
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
  const {data: [v791], secs: v793, time: v792, didSend: v196, from: v790 } = txn1;
  switch (v791[0]) {
    case 'Borrower_close0_93': {
      const v794 = v791[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v842 = v791[1];
      undefined /* setApiDetails */;
      ;
      const v868 = v732[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v869 = v868[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v870 = stdlib.add(v869, v712);
      const v872 = stdlib.Array_set(v868, '0', v870);
      const v873 = stdlib.Array_set(v732, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v872);
      ;
      const v883 = true;
      const v884 = await txn1.getOutput('Lender_lend', 'v883', ctc4, v883);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v842, v884), {
          at: './src/contracts/loan_nnt_algo.rsh:64:23:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:23:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:68:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:67:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2819 = v790;
      const v2821 = v792;
      const v2829 = true;
      const v2830 = v873[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2831 = v2830[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2832 = stdlib.sub(v2831, v2831);
      const v2833 = stdlib.Array_set(v2830, '0', v2832);
      const v2834 = stdlib.Array_set(v873, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2833);
      ;
      const v2835 = v705.maturation;
      const v2836 = stdlib.safeAdd(v726, v2835);
      const v2888 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
      const v2889 = v792;
      const v2891 = v2834;
      const v2892 = v733;
      const v2893 = stdlib.gt(v2836, v726);
      const v2894 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
      const v2895 = v2893 ? v2894 : false;
      if (v2895) {
        const v2896 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v713);
        return;
        }
      else {
        const v2899 = v2894 ? v790 : v702;
        ;
        const v2900 = v2834[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2901 = v2900[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:128:33:application', stdlib.UInt_max, '0')];
        const v2902 = v2894 ? v702 : v790;
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
  appApproval: `ByAZAAEFBAggByjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCBmhZUGFpggECoI0GJgMBAQEAACI1ADEYQQcmKmRJIls1ASEEWzUCNhoAF0lBARIiNQQjNQZJIQgMQAB5SSEJDEAAQEkhCgxAAClJIQsMQAAUIQsSRCo1/4ABAjT/UCEEr1BCAkMhChJEKjX/KTT/UEIA8iEJEkQ2GgE1/yg0/1BCAiVJIQwMQAASIQwSRCo1/yk0/1AhBK9QQgIMIQgSRDQBJBJEKWQoZFBJNQNXYQg1B0IGhEkhDQxAAC5JIQ4MQAAOIQ4SRCo1/yg0/1BCAJQhDRJENAEkEkQpZChkUEk1A1eKATUHQgZPSSEPDEAAGSEPEkQ0ASQSRClkKGRQSTUDV1AINQdCBi+Bj8bFKhJENAFJIQYMQAAUIQYSRClkKGRQSTUDV7MBNQdCBgskEkQpZChkUEk1A1dYATUHQgX4NhoCFzUENhoDNhoBF0klDEAC4UkkDEABTUkhEAxAANghEBJEIQY0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEFWzX+Vyg4Nf2BYFs1/CERWzX7gZIBWzX6V5oRNfmBqwFbNfhJNQU194AEkE9kSTT3ULA09yJVQAAvgAgAAAAAAAADO7AqNQc0/zT+NP00/DT7IjQDV3EgNANXkQEXMgY0+jT5NPhCA140+VcAETX2NPw0/ogFeIAJAAAAAAAAA3MBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk09kkiWzT8CBZcAFwANPhCAxZIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IRJbNf6ABMyZklywMgY0/g9ENP8xABJENP80AyEFWzQDIQdbNANXMCA0AyETWzQDV1gBFzT+NAMhFFsyBjQDIRVbNANXcRE0AyEWW0IDgkgkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSklXACA1/yEFWzX+IQdbNf1XMCA1/CETWzX7V1gBFzX6IRJbNfkhFFs1+CEVWzX3V3ERNfYhFls19Uk1BTX0gATVjh2rNPRQsDIGNPkMRDT0IlVJIwxAAO5JIRcMQAAtIRcSRIAIAAAAAAAABQywKjUHNP80/jT9NPw0+zT6NPk0+DIGNPc09jT1QgLYSDT0VwEINfM08xc18jEANP8SRDTyNPgISTXxNP0NSTXwQQAKNPE0/Qk170IAAyI17zTyNO8JNe409lcAETXtNO40/ogD4DTwQQAKNPE0/Qk17EIAAyI17DT4NPI07AkINeuACAAAAAAAAASpNOs0/Q8WUQcINOsWUDT9FlBQsDTrNP0PFlEHCDTrFlA0/RZQNQc0/zT+NP00/DT7NPo0+TTrMgY09zT2NO1JIls07ggWXABcADT1QgIeSIAIAAAAAAAABDqwKjUHNP80/jT9NPw0+zT6NPk0+DIGNPc09jT1QgH0SSMMQABlIxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IQdbNf6ABJqLkXSwNP6IAvI0/zEAEkQ0/zQDIQVbNANXMDg0A4GBAVs0A4GJAVsjNP8iMgY0AyERWzQDV3ARNP5CAK9IIRiIArkiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf5XEDg1/YAEW/LyyjT/FlA0/hZQNP1QsIERr0k1/ElXABEhBK9cAFwANfshGIgCbLEisgEishIlshAyCrIUNP+yEbM0/YEwWzX6NP0hBVs1+TT6NPkMRDEANP8WUDT+FlA0/VAyBhZQNPtQNPoWUDT5FlApSwFXAH9nKEsBV38SZ0gjNQEyBjUCQgG+Nf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPsUNPkQQQA/NPQ09RZQNPZQNPcWUDT4FlAoUDT6UClQNPwWUDT+UDT/FlAoUClLAVcAf2coSwFXfzVnSCEGNQEyBjUCQgFeNPtBAEs0/lcAEUk18yJbNfKxIrIBNPKyEiWyEDT0shQ09bIRszT0NPU0+DT6NPw0+zT9NPYhB1sIIjT8NP00/jTzNPJJCRZcAFwANP9CACqxIrIBNP+yCCOyEDT0sgezsSKyASKyEiWyEDIJshUyCrIUNPWyEbNCAMk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+zT2DDXzNPo0/Q008xBBAFI0+zT2DzXyNPQ09RZQNPYWUDT3UDT4FlA0+RZRBwhQNPoWUDT7FlA0/BZQNP5QNP8WUDTyFlEHCFApSwFXAH9nKEsBV38MZ0gkNQEyBjUCQgBosSKyATT/sggjshA09DT3NPNNsgezsSKyATT+VwARIluyEiWyEDT3NPQ0802yFDT1shGzsSKyASKyEiWyEDIJshUyCrIUNPWyEbNCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2935","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_273","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_273","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_273","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1082","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1193","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1292","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v827","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v883","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2921","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2937","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_273","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_273","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_273","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2951","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2968","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2975","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200322138819003601f8101601f191683016001600160401b0381118482101762000545578392829160405283398101039060e0821262000649576080604051926200004d846200064e565b825184526200005f6020840162000686565b602085015260408301516040850152605f190112620006495760c06040519162000089836200064e565b620000976060820162000686565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005455760009161012091604052828152826020820152826040820152620000fa6200069b565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f826200066a565b620001396200069b565b825262000145620006bc565b602083015262000154620006bc565b604083015260ff6004541662000630577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528351602082015260018060a01b03602085015116604082015260408401516060820152620001c56060850151608083019062000703565ba18051801590811562000623575b50156200060a576000825152600060208351015260006040835101528151602083015152602082015180516040602082015191015115156040519162000219836200066a565b600083526020830152604082015262000231620006bc565b9160005b60018110620005ba5750508152604083015234620005a15760608101516020606082015191015111156200058857604051916001600160401b036101008401908111908411176200054557602091604060609261010086018252600086526000858701526000828701528151620002ac816200064e565b600081526000868201526000838201526000858201528487015260006080870152620002d7620006bc565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015281830151828701528383015184870152436080870152015160a08501528180820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b03602082015116604083015260408101516060830152620003726060820151608084019062000703565b608081015161010083015260a0810151600061012084015b600182106200055b5760c084015161018086015260e08401516101a0808701919091528552846101c081016001600160401b03811182821017620005455760405280516001600160401b0381116200054557600254600181811c911680156200053a575b60208210146200052457601f8111620004ba575b50602091601f8211600114620004505791819260009262000444575b50508160011b916000199060031b1c1916176002555b604051612ac99081620007588239f35b0151905082806200041e565b601f19821692600260005260206000209160005b858110620004a15750836001951062000487575b505050811b0160025562000434565b015160001960f88460031b161c1916905582808062000478565b9192602060018192868501518155019401920162000464565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000519575b601f0160051c01905b8181106200050c575062000402565b60008155600101620004fd565b9091508190620004f4565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ee565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200038a565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005c681836200072f565b51620005d382866200072f565b52620005e081856200072f565b506000198114620005f45760010162000235565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d3565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200054557604052565b606081019081106001600160401b038211176200054557604052565b51906001600160a01b03821682036200064957565b60405190620006aa826200066a565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000545576040528260005b828110620006ec57505050565b8290620006f86200069b565b8184015201620006df565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007415760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101585780631e93b0f11461014f57806330dd5d0814610146578063316dfd001461013d5780633c4965541461013457806340410cd51461012b5780634cd8755514610122578063573b851014610119578063823c0a8d14610110578063832307571461010757806392e83e21146100fe57806394134348146100f557806396d6c36b146100ec578063ab53f2c6146100e3578063bfbc9d04146100da5763f9d773330361000e576100d561097a565b61000e565b506100d561090c565b506100d5610897565b506100d5610818565b506100d561076e565b506100d5610720565b506100d5610701565b506100d56106c2565b506100d561054f565b506100d56104e4565b506100d561048b565b506100d561043c565b506100d56103af565b506100d56101f9565b506100d56101c9565b50346101c45760003660031901126101c457610172610c71565b6005600054036101ab5760e0602091608061019c61018e610b2a565b858082518301019101610e38565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101c45760003660031901126101c4576020600354604051908152f35b60209060031901126101c457600490565b50610393610219610209366101e8565b610211610c71565b5036906129e3565b61023461022f61022b60045460ff1690565b1590565b610ef2565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124960405180610264843383612a01565b0390a1610275600560005414610f12565b6102a4610292610283610b2a565b60208082518301019101610e38565b915180159081156103a3575b50610f32565b60c08101906102b68251431015610f52565b6102c03415610f72565b6102dc3360018060a01b036102d58451610d86565b1614610f90565b6102e4611501565b916102f86102f28351610d86565b84611562565b6103116103086020840151610d86565b60208501611562565b6040820151604084015261033461032b6060840151610d86565b60608501611562565b6080820151608084015261035761034e60a0840151151590565b151560a0850152565b5160c083015260e081015160e08301526101004381840152810151610120908184015281015190610140918284015201516101608201526127c5565b60405160008152602090f35b0390f35b9050600154143861029e565b5060a03660031901126101c4576103c4610c71565b604051906103d182610a57565b600435825260803660231901126101c457604051916103ef83610a7f565b6024359260038410156101c45761039393815260443561040e81610da6565b602082015261041c366129c3565b604082015260843561042d81610da6565b60608201526020820152611598565b50346101c45760003660031901126101c457610456610c71565b6005600054036104725760c060209160e061019c61018e610b2a565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101c457602060406104a4610c71565b6104d8816104b0610d60565b85810190600082515251151586825101526104c9610d60565b90600082525186820152611d6c565b01511515604051908152f35b50346101c45760003660031901126101c4576104fe610c71565b6005600054036105365761012061039f9161016061051d610283610b2a565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5061039361055f610209366101e8565b61057661057161022b60045460ff1690565b610fb0565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806105a6843383612a01565b0390a16105b7600160005414610fd0565b6105e66105d46105c5610b2a565b60208082518301019101612a1b565b915180159081156106b6575b50610ff0565b604081016105f681513414611010565b6106123360018060a01b0361060b8551610d86565b1614611030565b60a061061c611d0e565b9261063061062a8251610d86565b85611562565b6106496106406020830151610d86565b60208601611562565b6060810151604085015260c0810151606085015260e0810151608085015261067382850160019052565b6106896106808251610d86565b60c08601611562565b600060e08501524361010085015260808101516101208501520151610140830152516101608201526123d6565b905060015414386105e0565b5060003660031901126101c457602060a06106db610c71565b6104d8816106e7610d60565b8581019060018251525115156040825101526104c9610d60565b50346101c45760003660031901126101c4576020600154604051908152f35b5060003660031901126101c45760206080610739610c71565b6104d881610745610d16565b85810190600282515251151560608251015261075f610d16565b90600082525186820152611598565b50346101c45760003660031901126101c45761039f6107cb610100610791610c71565b60005460078110156107dd5760056107a99114611070565b6107bc6107c360a06107bc610283610b2a565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107e99114611050565b6108136101606108096107fa610b2a565b60208082518301019101611313565b0151151582840152565b6107bc565b5060803660031901126101c45761082d610c71565b6040519061083a82610a57565b600435825260603660231901126101c4576040519161085883610a9a565b6024359260028410156101c45761039393815260443561087781610da6565b602082015260643561088881610da6565b60408201526020820152611d6c565b50346101c4576000806003193601126109095780546108b4610b2a565b906040519283918252602090604082840152835191826040850152815b8381106108f257505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016108d1565b80fd5b5060003660031901126101c457602080610924610c71565b6104d881610930610d16565b8481019060008251525115158582510152610949610d16565b90600082525185820152611598565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101c45761098f610c34565b5061039f606061099d610c71565b6109f8816040516109ad81610a57565b6040516109b981610ab5565b60008152815260208101906109cc610ce3565b82526004358151526001825152516040825101526109e8610d16565b9060008252516020820152611598565b015160405191829182610958565b90600182811c92168015610a36575b6020831014610a2057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610a15565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610a7257604052565b610a7a610a40565b604052565b608081019081106001600160401b03821117610a7257604052565b606081019081106001600160401b03821117610a7257604052565b602081019081106001600160401b03821117610a7257604052565b61018081019081106001600160401b03821117610a7257604052565b60a081019081106001600160401b03821117610a7257604052565b601f909101601f19168101906001600160401b03821190821017610a7257604052565b6040519060008260025491610b3e83610a06565b808352600193808516908115610bb45750600114610b66575b50610b6492500383610b07565b565b60026000908152600080516020612a9d83398151915294602093509091905b818310610b9c575050610b64935082010138610b57565b85548884018501529485019487945091830191610b85565b9050610b6494506020925060ff191682840152151560051b82010138610b57565b6040519061018082016001600160401b03811183821017610a7257604052565b60405190606082016001600160401b03811183821017610a7257604052565b6040519061010082016001600160401b03811183821017610a7257604052565b60405190606082016001600160401b03811183821017610c64575b60405260006040838281528260208201520152565b610c6c610a40565b610c4f565b6040519061014082016001600160401b03811183821017610cd6575b60405281610120600091828152826020820152826040820152610cae610c34565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610cde610a40565b610c8d565b60405190610cf082610a7f565b6000606083828152826020820152604051610d0a81610ab5565b83815260408201520152565b60405190610d2382610a57565b81600081526020610d32610ce3565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610d5857565b610b64610d37565b60405190610d6d82610a57565b81600081526020610d32610c34565b60021115610d5857565b6001600160a01b031690565b51906001600160a01b03821682036101c457565b801515036101c457565b5190610b6482610da6565b9080601f830112156101c457604091825192610dd684610ab5565b83606093848401938185116101c457915b848310610df75750505050505090565b85838303126101c45783518691610e0d82610a9a565b84518252602091828601518382015286860151610e2981610da6565b87820152815201920191610de7565b6101c0818303126101c4576101a0610ee991610e52610bd5565b93610e5c82610d92565b8552610e6a60208301610d92565b602086015260408201516040860152610e8560608301610d92565b606086015260808201516080860152610ea060a08301610db0565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610ed361012091828401610dbb565b9085015261018081015161014085015201610db0565b61016082015290565b15610ef957565b60405163100960cb60e01b815260206004820152602490fd5b15610f1957565b60405163100960cb60e01b815260216004820152602490fd5b15610f3957565b60405163100960cb60e01b815260226004820152602490fd5b15610f5957565b60405163100960cb60e01b815260236004820152602490fd5b15610f7957565b602460405163100960cb60e01b8152816004820152fd5b15610f9757565b60405163100960cb60e01b815260256004820152602490fd5b15610fb757565b60405163100960cb60e01b815260106004820152602490fd5b15610fd757565b60405163100960cb60e01b815260116004820152602490fd5b15610ff757565b60405163100960cb60e01b815260126004820152602490fd5b1561101757565b60405163100960cb60e01b815260136004820152602490fd5b1561103757565b60405163100960cb60e01b815260146004820152602490fd5b1561105757565b60405163100960cb60e01b8152600a6004820152602490fd5b1561107757565b60405163100960cb60e01b815260096004820152602490fd5b1561109757565b60405163100960cb60e01b815260156004820152602490fd5b156110b757565b60405163100960cb60e01b815260166004820152602490fd5b156110d757565b60405163100960cb60e01b815260176004820152602490fd5b156110f757565b60405163100960cb60e01b815260186004820152602490fd5b1561111757565b60405163100960cb60e01b8152601e6004820152602490fd5b1561113757565b60405163100960cb60e01b8152601f6004820152602490fd5b1561115757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561117757565b60405163100960cb60e01b8152601c6004820152602490fd5b1561119757565b60405163100960cb60e01b8152601d6004820152602490fd5b156111b757565b60405163100960cb60e01b815260196004820152602490fd5b156111d757565b60405163100960cb60e01b8152601a6004820152602490fd5b156111f757565b60405163100960cb60e01b815260266004820152602490fd5b1561121757565b60405163100960cb60e01b815260276004820152602490fd5b1561123757565b60405163100960cb60e01b815260286004820152602490fd5b1561125757565b60405163100960cb60e01b8152602b6004820152602490fd5b1561127757565b60405163100960cb60e01b8152602c6004820152602490fd5b1561129757565b60405163100960cb60e01b815260296004820152602490fd5b156112b757565b60405163100960cb60e01b8152602a6004820152602490fd5b91908260809103126101c4576040516112e881610a7f565b60608082946112f681610d92565b845260208101516020850152604081015160408501520151910152565b90610220828203126101c4576113d861020061132d610bd5565b9361133781610d92565b855261134560208201610d92565b602086015261135784604083016112d0565b604086015260c0810151606086015260e081015160808601526101009361137f858301610db0565b60a0870152610120611392818401610d92565b60c08801526113c4610140926113a9848601610db0565b60e08a01526101609788860151908a01526101808501610dbb565b908701526101e08201519086015201610db0565b9082015290565b604051610100810191906001600160401b03831181841017611440575b82604052809261140b81610ab5565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610d32610c34565b611448610a40565b6113fc565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156114aa575b60408501526020810151151582850152604081015151608085015201511515910152565b6114b2610d37565b611486565b5160038110156114c45790565b6114cc610d37565b90565b604051906114dc82610ab5565b8160005b602081106114ec575050565b6020906114f7610c34565b81840152016114e0565b6040519061150e82610ad0565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526115586114cf565b6101408201520152565b6001600160a01b039091169052565b9060018110156115825760051b0190565b634e487b7160e01b600052603260045260246000fd5b906115a16113df565b6115b86115b361022b60045460ff1690565b611090565b60407f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f9618151806115e987338361145a565b0390a16115fa6005600054146110b0565b611602610b2a565b611616602091828082518301019101610e38565b9261162c86518015908115611a05575b506110d0565b8160c085019661163e885143106110f0565b0161164981516114b7565b61165281610d4e565b611705575050906116ed610b64959261166b34156111b0565b6000818087019761168d6116886116828b51610d86565b33611a5f565b6111d0565b8551600081527ff6ed24e7d4d196fa8a62d5dd37cda784dd95882e1a3fee7c58564355c8afd2479080602081015b0390a101526116e56116cb611501565b966116df6116d98851610d86565b89611562565b51610d86565b908601611562565b808301519084015261033461032b6060840151610d86565b600161171482959395516114b7565b61171d81610d4e565b03611974578190510151835261174561173e6117398651610d86565b610d86565b3314611150565b8251519261175960e0860194855190611a28565b928082019184835283870194855110986117788583019a8b9015159052565b8951156119685761178c8451875190611a4a565b60608301525b81515160608301516117a391611a4a565b60808301908152956117b53415611170565b8389019a8b516117c490610d86565b88516117d09133611aca565b6117d990611190565b5115156000146118a9610b649c6118a39c60606118296119459d6119409b6118b19761195b5751885161180b91611a4a565b60a08b01525b516118238a515160a08c015190611a4a565b90611a28565b9761184760e060c083019a808c528951111592019182519015159052565b88518a8251015286518c825101527f44e8b6426a8b79ac5eb6723bda9716f6befdcf68ee984127d4ee2f62d2550a2f6118878d8351905191829182610958565b0390a1519101526116df8c61189a611501565b9e8f9151610d86565b90611562565b858c01611562565b51858a01526118cf6118c660608a0151610d86565b60608b01611562565b608088015160808a01526118f26118e960a08a0151151590565b151560a08b0152565b5160c08901525160e088015261010043818901528601516101209081890152860151928351948551905101948183820151910151151592611931610bf5565b96875286015284019015159052565b611bcf565b90610140918284015201516101608201526127c5565b50600060a08b0152611811565b60006060830152611792565b6002919296935061198590516114b7565b61198e81610d4e565b1461199b575b5050505050565b6116ed6119fb956119ac3415611110565b60006080828701976119c96119c46116828b51610d86565b611130565b8551600081527f3e247fa0b36a1ecedfa4cbc5fbc4fb09e0124f251595d87dc83ebaef90f113699080602081016116bb565b3880808080611994565b90506001541438611626565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611a3d575b82106101c457565b611a45611a11565b611a35565b908103908111611a575790565b6114cc611a11565b60006114cc928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152611aa381610aec565b5193165af1611aba611ab3611b0d565b8092611b6f565b5060208082518301019101611b5a565b6000916114cc9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611aa381610aec565b3d15611b55573d906001600160401b038211611b48575b60405191611b3c601f8201601f191660200184610b07565b82523d6000602084013e565b611b50610a40565b611b24565b606090565b908160209103126101c457516114cc81610da6565b15611b775790565b805115611b8657805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15611ba75790565b805115611bb657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611bd96114cf565b9260005b60018110611beb5750508252565b80611bf860019284611571565b51611c038288611571565b52611c0e8187611571565b506000198114611c1f575b01611bdd565b611c27611a11565b611c19565b9190611c366114cf565b9260005b60018110611c485750508252565b80611c5560019284611571565b51611c608288611571565b52611c6b8187611571565b506000198114611c7c575b01611c3a565b611c84611a11565b611c76565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611ccf575b8285015260208101511515606085015201511515910152565b611cd7610d37565b611cb6565b5160028110156114c45790565b60405190611cf682610a7f565b60006060838281528260208201528260408201520152565b60405190611d1b82610ad0565b81610160600091828152826020820152611d33611ce9565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526115586114cf565b90611de591611d88611d8361022b60045460ff1690565b6111f0565b60407f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a4347815180611db9853383611c89565b0390a1611dca600760005414611210565b611dd2610b2a565b6020948186808094518301019101611313565b92611dfb81518015908115612077575b50611230565b01611e068151611cdc565b611e0f81610d7c565b611f175750611e96610b6494611e253415611290565b60008382860196611e41611e3c6116828a51610d86565b6112b0565b8151600081527f0c278abe5d20697296d384a577146f93e03075badb8c078d6890d05d752da72990602090a10152611e8e611e7a611d0e565b956116df611e888751610d86565b88611562565b908501611562565b80820151908301526060810151606083015260808101516080830152600060a0830152611ed2611ec960c0830151610d86565b60c08401611562565b611eeb611ee260e0830151151590565b151560e0840152565b6101004381840152810151610120908184015281015190610140918284015201516101608201526123d6565b611f2660019195949551611cdc565b611f2f81610d7c565b14611f3b575b50505050565b61206e9361205891611f4d3415611250565b61205385850195611fb060a0611f638951610d86565b95611f7d611f7860608b019889519033611aca565b611270565b8551600181527f47cd60b8438759162f8bfddd40a623ae659314f1d6f7e803f6d1a46596cbdc1890602090a10160019052565b611fda611fd2611fbe611d0e565b986116df611fcc8a51610d86565b8b611562565b828901611562565b8286015183880152835160608801526080860151608088015261200c61200360a0880151151590565b151560a0890152565b6120193360c08901611562565b600160e088015261010043818901528601516101209081890152860151928351948551905101948183820151910151151592611931610bf5565b611c2c565b90610140918284015201516101608201526123d6565b38808080611f35565b90506001541438611df5565b506040513d6000823e3d90fd5b81811061209b575050565b60008155600101612090565b6120b2600254610a06565b806120ba5750565b601f81116001146120cd57506000600255565b600260005261211290601f0160051c600080516020612a9d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612090565b6000602081208160025555565b6040519061212c82610ad0565b81610160600091828152826020820152612144611ce9565b60408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526121766114cf565b610120820152826101408201520152565b6000915b6001831061219857505050565b60019060608351918251815260209283810151848301526040809101511515908201520192019201919061218b565b610b64909291926102006102208201946121e283825161144d565b6121f46020820151602085019061144d565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190612252610100928386019015159052565b60c081015191612268610120938487019061144d565b61229c60e083015191612282610140938489019015159052565b830151936101609485880152830151610180870190612187565b8101516101e085015201511515910152565b90601f82116122bb575050565b610b649160026000526020600020906020601f840160051c830193106122e9575b601f0160051c0190612090565b90915081906122dc565b80519091906001600160401b0381116123c9575b61231b81612316600254610a06565b6122ae565b602080601f8311600114612357575081929360009261234c575b50508160011b916000199060031b1c191617600255565b015190503880612335565b6002600052601f19831694909190600080516020612a9d833981519152926000905b8782106123b1575050836001959610612398575b505050811b01600255565b015160001960f88460031b161c1916905538808061238d565b80600185968294968601518155019501930190612379565b6123d1610a40565b612307565b60e081018051151580156126445760005b156124cc5750506124b96124c7610b649261249761240361211f565b916124116102f28251610d86565b6124216103086020830151610d86565b60408101516040840152606081015160608401526080810151608084015261244c60a0840160019052565b61246561245c60c0830151610d86565b60c08501611562565b600060e08401526101008082015190840152610140808201516101208501526101608092015190840152820160019052565b6124a16007600055565b6124aa43600155565b604051928391602083016121c7565b03601f198101835282610b07565b6122f3565b156125ee57816020610b649301916125da6124e78451610d86565b6124f18451610d86565b926125106101409485870193845151519160018060a01b031690612650565b61253b61253261251e611501565b976116df61252c8951610d86565b8a611562565b60208801611562565b6080850151604087015261255e61255560c0870151610d86565b60608801611562565b6101009061257961200383880192835160808b015251151590565b610120918287019161259483516040808b0151015190611a28565b60c08a0152600060e08a015251908801525190860152518051906119406040602084015193015115156125c5610bf5565b93600085526020850152604084019015159052565b9083015261016080910151908201526127c5565b506000808083610160612605611739849751610d86565b9101519082821561263b575bf11561262e575b600080556126266000600155565b610b646120a7565b612636612083565b612618565b506108fc612611565b60a083015115156123e7565b600091906126a593838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261268e81610a7f565b5193165af1611aba61269e611b0d565b8092611b9f565b156101c457565b604051906126b982610a57565b60006020838281520152565b604051906126d282610ad0565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526121766114cf565b610b64909291926101a06101606101c083019561273384825161144d565b6127456020820151602086019061144d565b604081015160408501526127616060820151606086019061144d565b6080810151608085015261277e60a082015160a086019015159052565b60c081015160c085015260e081015160e085015261010080820151908501526127b06101208083015190860190612187565b61014081015161018085015201511515910152565b6127cd6126ac565b60e08201805160408401805191909111835292919060c08301908151916101209283860151106000906000146129be5750835115155b1561290257936128d86124c794610b649794846124b99861283360206128e098518a511115950194859015159052565b61283b6126c5565b9761284961252c8851610d86565b6128626128596020890151610d86565b60208b01611562565b5160408901526128816128786060880151610d86565b60608a01611562565b608086015160808901526128a461289b60a0880151151590565b151560a08a0152565b5160c08801525160e08701526101008085015190870152610140908185015190870152610160809401519086015251151590565b151590830152565b6128ea6005600055565b6128f343600155565b60405192839160208301612715565b50505061261892506129148151151590565b156129af576129266060830151610d86565b60008080806101608701518181156129a6575b6001600160a01b0396871690f115612999575b61296361295c6020850151610d86565b9251151590565b15612983576101406129758451610d86565b935b01515151921690612650565b6101406129936060850151610d86565b93612977565b6129a1612083565b61294c565b506108fc612939565b6129b98251610d86565b612926565b612803565b60209060631901126101c457604051906129dc82610ab5565b6064358252565b91908260209103126101c4576040516129fb81610ab5565b91358252565b6001600160a01b0390911681529051602082015260400190565b6101a0818303126101c45761018090612a82612a35610c14565b93612a3f83610d92565b8552612a4d60208401610d92565b602086015260408301516040860152612a6981606085016112d0565b606086015260e083015160808601526101008301610dbb565b60a084015261016081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12833,
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
