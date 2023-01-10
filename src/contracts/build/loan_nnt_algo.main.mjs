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
      const [v576, v577, v578, v579, v580, v584, v586, v587] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823] = svs;
      return (await ((async () => {
        
        
        return v793;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v576, v577, v578, v579, v580, v584, v586, v587] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823] = svs;
      return (await ((async () => {
        
        
        return v600;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v576, v577, v578, v579, v580, v584, v586, v587] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823] = svs;
      return (await ((async () => {
        
        
        return v766;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = svs;
      return (await ((async () => {
        
        
        return v628;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v576, v577, v578, v579, v580, v584, v586, v587] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823] = svs;
      return (await ((async () => {
        
        
        return v823;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = svs;
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
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v554 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v555 = [v554];
  const v561 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_algo.rsh:41:43:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:39:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v562 = v561.address;
  const v563 = v561.amount;
  const v564 = v561.collateral;
  const v565 = v561.maturation;
  const v566 = v561.principal;
  const v567 = v561.tokLoan;
  const v574 = stdlib.lt(v566, v563);
  stdlib.assert(v574, {
    at: './src/contracts/loan_nnt_algo.rsh:43:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v575 = {
    address: v562,
    amount: v563,
    maturation: v565,
    principal: v566
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v567, v564, v575],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v577, v578, v579], secs: v581, time: v580, didSend: v43, from: v576 } = txn1;
      
      const v582 = v555[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0')];
      const v583 = stdlib.Array_set(v582, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0'));
      const v584 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0'), v583);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v577
        });
      ;
      const v586 = v579.principal;
      const v587 = v579.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v577, v578, v579], secs: v581, time: v580, didSend: v43, from: v576 } = txn1;
  const v582 = v555[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0')];
  const v583 = stdlib.Array_set(v582, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0'));
  const v584 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:45:11:dot', stdlib.UInt_max, '0'), v583);
  ;
  ;
  const v586 = v579.principal;
  const v587 = v579.amount;
  const v588 = stdlib.lt(v586, v587);
  stdlib.assert(v588, {
    at: './src/contracts/loan_nnt_algo.rsh:46:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v576, v577, v578, v579, v580, v584, v586, v587],
    evt_cnt: 0,
    funcNum: 1,
    lct: v580,
    onlyIf: true,
    out_tys: [],
    pay: [v578, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v591, time: v590, didSend: v53, from: v589 } = txn2;
      
      sim_r.txns.push({
        amt: v578,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v597 = true;
      const v598 = v576;
      const v599 = false;
      const v600 = v590;
      const v601 = v580;
      const v606 = v584;
      const v607 = v578;
      
      if (await (async () => {
        const v622 = v599 ? false : v597;
        
        return v622;})()) {
        const v627 = v599 ? false : v597;
        const v628 = v627 ? true : v599;
        sim_r.isHalt = false;
        }
      else {
        const v765 = v599 ? false : v597;
        const v766 = v765 ? true : v599;
        if (v599) {
          const v778 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v779 = v778[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v785 = stdlib.sub(v779, v779);
          const v787 = stdlib.Array_set(v778, '0', v785);
          const v788 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v787);
          sim_r.txns.push({
            kind: 'from',
            to: v576,
            tok: v577
            });
          const v790 = v579.maturation;
          const v792 = stdlib.safeAdd(v601, v790);
          const v793 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v794 = v600;
          const v795 = v601;
          const v800 = v788;
          const v801 = v607;
          
          if (await (async () => {
            const v818 = stdlib.gt(v792, v795);
            const v820 = stdlib.lt(v793, v587);
            const v821 = v818 ? v820 : false;
            
            return v821;})()) {
            const v823 = stdlib.ge(v793, v587);
            sim_r.isHalt = false;
            }
          else {
            const v929 = stdlib.lt(v793, v587);
            const v930 = v929 ? v598 : v576;
            sim_r.txns.push({
              kind: 'from',
              to: v930,
              tok: undefined /* Nothing */
              });
            const v935 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v936 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v939 = v929 ? v576 : v598;
            sim_r.txns.push({
              kind: 'from',
              to: v939,
              tok: v577
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v577
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
            to: v576,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v577
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
    tys: [ctc0, ctc2, ctc1, ctc4, ctc1, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v591, time: v590, didSend: v53, from: v589 } = txn2;
  ;
  const v594 = stdlib.addressEq(v576, v589);
  stdlib.assert(v594, {
    at: './src/contracts/loan_nnt_algo.rsh:48:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v590), {
    at: './src/contracts/loan_nnt_algo.rsh:49:27:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:49:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:49:27:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:49:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_algo.rsh:49:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v597 = true;
  let v598 = v576;
  let v599 = false;
  let v600 = v590;
  let v601 = v580;
  let v606 = v584;
  let v607 = v578;
  
  let txn3 = txn2;
  while (await (async () => {
    const v622 = v599 ? false : v597;
    
    return v622;})()) {
    const v627 = v599 ? false : v597;
    const v628 = v627 ? true : v599;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v665], secs: v667, time: v666, didSend: v196, from: v664 } = txn4;
    switch (v665[0]) {
      case 'Borrower_close0_93': {
        const v668 = v665[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v701 = null;
        await txn4.getOutput('Borrower_close', 'v701', ctc5, v701);
        const cv597 = false;
        const cv598 = v598;
        const cv599 = v599;
        const cv600 = v666;
        const cv601 = v600;
        const cv606 = v606;
        const cv607 = v607;
        
        v597 = cv597;
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v606 = cv606;
        v607 = cv607;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v716 = v665[1];
        undefined /* setApiDetails */;
        ;
        const v742 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
        const v743 = v742[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
        const v744 = stdlib.add(v743, v586);
        const v746 = stdlib.Array_set(v742, '0', v744);
        const v747 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0'), v746);
        ;
        const v757 = true;
        await txn4.getOutput('Lender_lend', 'v757', ctc8, v757);
        const cv597 = v597;
        const cv598 = v664;
        const cv599 = true;
        const cv600 = v666;
        const cv601 = v600;
        const cv606 = v747;
        const cv607 = v607;
        
        v597 = cv597;
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v606 = cv606;
        v607 = cv607;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v765 = v599 ? false : v597;
  const v766 = v765 ? true : v599;
  if (v599) {
    const v778 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v779 = v778[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
    const v785 = stdlib.sub(v779, v779);
    const v787 = stdlib.Array_set(v778, '0', v785);
    const v788 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v787);
    ;
    const v790 = v579.maturation;
    const v792 = stdlib.safeAdd(v601, v790);
    let v793 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
    let v794 = v600;
    let v795 = v601;
    let v800 = v788;
    let v801 = v607;
    
    let txn4 = txn3;
    while (await (async () => {
      const v818 = stdlib.gt(v792, v795);
      const v820 = stdlib.lt(v793, v587);
      const v821 = v818 ? v820 : false;
      
      return v821;})()) {
      const v823 = stdlib.ge(v793, v587);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: ['time', v792],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823],
          evt_cnt: 0,
          funcNum: 5,
          lct: v794,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v922, time: v921, didSend: v478, from: v920 } = txn6;
            
            ;
            const cv793 = v793;
            const cv794 = v921;
            const cv795 = v794;
            const cv800 = v800;
            const cv801 = v801;
            
            await (async () => {
              const v793 = cv793;
              const v794 = cv794;
              const v795 = cv795;
              const v800 = cv800;
              const v801 = cv801;
              
              if (await (async () => {
                const v818 = stdlib.gt(v792, v795);
                const v820 = stdlib.lt(v793, v587);
                const v821 = v818 ? v820 : false;
                
                return v821;})()) {
                const v823 = stdlib.ge(v793, v587);
                sim_r.isHalt = false;
                }
              else {
                const v929 = stdlib.lt(v793, v587);
                const v930 = v929 ? v598 : v576;
                sim_r.txns.push({
                  kind: 'from',
                  to: v930,
                  tok: undefined /* Nothing */
                  });
                const v935 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v936 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v939 = v929 ? v576 : v598;
                sim_r.txns.push({
                  kind: 'from',
                  to: v939,
                  tok: v577
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v577
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
          tys: [ctc0, ctc2, ctc1, ctc0, ctc1, ctc8, ctc1, ctc1, ctc1, ctc12, ctc1, ctc8],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v922, time: v921, didSend: v478, from: v920 } = txn6;
        ;
        const v923 = stdlib.addressEq(v576, v920);
        stdlib.assert(v923, {
          at: './src/contracts/loan_nnt_algo.rsh:86:50:dot',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:115:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:115:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv793 = v793;
        const cv794 = v921;
        const cv795 = v794;
        const cv800 = v800;
        const cv801 = v801;
        
        v793 = cv793;
        v794 = cv794;
        v795 = cv795;
        v800 = cv800;
        v801 = cv801;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v866], secs: v868, time: v867, didSend: v418, from: v865 } = txn5;
        undefined /* setApiDetails */;
        const v870 = v866[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:30:spread', stdlib.UInt_max, '0')];
        const v871 = stdlib.addressEq(v865, v576);
        stdlib.assert(v871, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:100:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:97:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:97:34:function exp)'],
          msg: 'You are not the Borrower',
          who: 'B'
          });
        const v873 = stdlib.safeAdd(v870, v793);
        const v875 = stdlib.gt(v873, v587);
        let v876;
        if (v875) {
          const v879 = stdlib.safeSub(v873, v587);
          v876 = v879;
          }
        else {
          v876 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
          }
        const v880 = stdlib.safeSub(v870, v876);
        ;
        const v888 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
        const v889 = v888[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
        const v890 = stdlib.add(v889, v880);
        const v892 = stdlib.Array_set(v888, '0', v890);
        const v893 = stdlib.Array_set(v800, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0'), v892);
        ;
        let v900;
        if (v875) {
          const v903 = stdlib.safeSub(v873, v587);
          v900 = v903;
          }
        else {
          v900 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
          }
        const v904 = stdlib.safeSub(v870, v900);
        const v906 = stdlib.safeAdd(v793, v904);
        const v908 = stdlib.ge(v906, v587);
        const v910 = [v908, v906, v587];
        await txn5.getOutput('Borrower_repay', 'v910', ctc10, v910);
        const cv793 = v906;
        const cv794 = v867;
        const cv795 = v794;
        const cv800 = v893;
        const cv801 = v801;
        
        v793 = cv793;
        v794 = cv794;
        v795 = cv795;
        v800 = cv800;
        v801 = cv801;
        
        txn4 = txn5;
        continue;}
      
      }
    const v929 = stdlib.lt(v793, v587);
    const v930 = v929 ? v598 : v576;
    ;
    const v935 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v936 = v935[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v939 = v929 ? v576 : v598;
    ;
    return;
    }
  else {
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
  
  
  const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v631 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:72:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:72:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:72:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:51:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v635 = ['Borrower_close0_93', v631];
  
  const txn1 = await (ctc.sendrecv({
    args: [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628, v635],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:72:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:60:26:decimal', stdlib.UInt_max, '0'), v577]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v665], secs: v667, time: v666, didSend: v196, from: v664 } = txn1;
      
      switch (v665[0]) {
        case 'Borrower_close0_93': {
          const v668 = v665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v701 = null;
          const v702 = await txn1.getOutput('Borrower_close', 'v701', ctc9, v701);
          
          const v1446 = false;
          const v1447 = v598;
          const v1448 = v599;
          const v1449 = v666;
          const v1451 = v606;
          const v1452 = v607;
          const v1453 = v599 ? false : false;
          if (v1453) {
            const v1455 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1457 = v599;
            if (v599) {
              const v1458 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v1459 = v1458[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
              const v1460 = stdlib.sub(v1459, v1459);
              const v1461 = stdlib.Array_set(v1458, '0', v1460);
              const v1462 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v1461);
              sim_r.txns.push({
                kind: 'from',
                to: v576,
                tok: v577
                });
              const v1463 = v579.maturation;
              const v1464 = stdlib.safeAdd(v600, v1463);
              const v1509 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
              const v1510 = v666;
              const v1512 = v1462;
              const v1513 = v607;
              const v1514 = stdlib.gt(v1464, v600);
              const v1515 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
              const v1516 = v1514 ? v1515 : false;
              if (v1516) {
                const v1517 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
                sim_r.isHalt = false;
                }
              else {
                const v1520 = v1515 ? v598 : v576;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1520,
                  tok: undefined /* Nothing */
                  });
                const v1521 = v1462[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1522 = v1521[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
                const v1523 = v1515 ? v576 : v598;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1523,
                  tok: v577
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v577
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
                to: v576,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v577
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
          const v716 = v665[1];
          
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
  const {data: [v665], secs: v667, time: v666, didSend: v196, from: v664 } = txn1;
  switch (v665[0]) {
    case 'Borrower_close0_93': {
      const v668 = v665[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v701 = null;
      const v702 = await txn1.getOutput('Borrower_close', 'v701', ctc9, v701);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v668, v702), {
          at: './src/contracts/loan_nnt_algo.rsh:72:22:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:72:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:72:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:73:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:72:44:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:72:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:72:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1446 = false;
      const v1447 = v598;
      const v1448 = v599;
      const v1449 = v666;
      const v1451 = v606;
      const v1452 = v607;
      const v1453 = v599 ? false : false;
      if (v1453) {
        const v1455 = true;
        return;
        }
      else {
        const v1457 = v599;
        if (v599) {
          const v1458 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v1459 = v1458[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v1460 = stdlib.sub(v1459, v1459);
          const v1461 = stdlib.Array_set(v1458, '0', v1460);
          const v1462 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v1461);
          ;
          const v1463 = v579.maturation;
          const v1464 = stdlib.safeAdd(v600, v1463);
          const v1509 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1510 = v666;
          const v1512 = v1462;
          const v1513 = v607;
          const v1514 = stdlib.gt(v1464, v600);
          const v1515 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
          const v1516 = v1514 ? v1515 : false;
          if (v1516) {
            const v1517 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
            return;
            }
          else {
            const v1520 = v1515 ? v598 : v576;
            ;
            const v1521 = v1462[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1522 = v1521[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1523 = v1515 ? v576 : v598;
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
      const v716 = v665[1];
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
  
  
  const [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v829 = ctc.selfAddress();
  const v831 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v832 = v831[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v834 = stdlib.addressEq(v829, v576);
  stdlib.assert(v834, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:100:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v836 = stdlib.safeAdd(v832, v793);
  const v838 = stdlib.gt(v836, v587);
  
  let v853;
  if (v838) {
    const v856 = stdlib.safeSub(v836, v587);
    v853 = v856;
    }
  else {
    v853 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
    }
  const v857 = stdlib.safeSub(v832, v853);
  
  const txn1 = await (ctc.sendrecv({
    args: [v576, v577, v587, v598, v600, v766, v792, v793, v794, v800, v801, v823, v831],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:107:42:decimal', stdlib.UInt_max, '0'), [[v857, v577]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v866], secs: v868, time: v867, didSend: v418, from: v865 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v870 = v866[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:30:spread', stdlib.UInt_max, '0')];
      const v873 = stdlib.safeAdd(v870, v793);
      const v875 = stdlib.gt(v873, v587);
      let v876;
      if (v875) {
        const v879 = stdlib.safeSub(v873, v587);
        v876 = v879;
        }
      else {
        v876 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
        }
      const v880 = stdlib.safeSub(v870, v876);
      ;
      const v888 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
      const v889 = v888[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
      const v890 = stdlib.add(v889, v880);
      const v892 = stdlib.Array_set(v888, '0', v890);
      const v893 = stdlib.Array_set(v800, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0'), v892);
      sim_r.txns.push({
        amt: v880,
        kind: 'to',
        tok: v577
        });
      let v900;
      if (v875) {
        const v903 = stdlib.safeSub(v873, v587);
        v900 = v903;
        }
      else {
        v900 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
        }
      const v904 = stdlib.safeSub(v870, v900);
      const v906 = stdlib.safeAdd(v793, v904);
      const v908 = stdlib.ge(v906, v587);
      const v910 = [v908, v906, v587];
      const v911 = await txn1.getOutput('Borrower_repay', 'v910', ctc7, v910);
      
      const v1602 = v906;
      const v1603 = v867;
      const v1605 = v893;
      const v1606 = v801;
      const v1607 = stdlib.gt(v792, v794);
      const v1608 = stdlib.lt(v906, v587);
      const v1609 = v1607 ? v1608 : false;
      if (v1609) {
        sim_r.isHalt = false;
        }
      else {
        const v1613 = v1608 ? v598 : v576;
        sim_r.txns.push({
          kind: 'from',
          to: v1613,
          tok: undefined /* Nothing */
          });
        const v1614 = v893[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1615 = v1614[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1616 = v1608 ? v576 : v598;
        sim_r.txns.push({
          kind: 'from',
          to: v1616,
          tok: v577
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v577
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v866], secs: v868, time: v867, didSend: v418, from: v865 } = txn1;
  undefined /* setApiDetails */;
  const v870 = v866[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:30:spread', stdlib.UInt_max, '0')];
  const v871 = stdlib.addressEq(v865, v576);
  stdlib.assert(v871, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:100:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:97:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:97:34:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v873 = stdlib.safeAdd(v870, v793);
  const v875 = stdlib.gt(v873, v587);
  let v876;
  if (v875) {
    const v879 = stdlib.safeSub(v873, v587);
    v876 = v879;
    }
  else {
    v876 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
    }
  const v880 = stdlib.safeSub(v870, v876);
  ;
  const v888 = v800[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
  const v889 = v888[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0')];
  const v890 = stdlib.add(v889, v880);
  const v892 = stdlib.Array_set(v888, '0', v890);
  const v893 = stdlib.Array_set(v800, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:50:dot', stdlib.UInt_max, '0'), v892);
  ;
  let v900;
  if (v875) {
    const v903 = stdlib.safeSub(v873, v587);
    v900 = v903;
    }
  else {
    v900 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:104:51:decimal', stdlib.UInt_max, '0');
    }
  const v904 = stdlib.safeSub(v870, v900);
  const v906 = stdlib.safeAdd(v793, v904);
  const v908 = stdlib.ge(v906, v587);
  const v910 = [v908, v906, v587];
  const v911 = await txn1.getOutput('Borrower_repay', 'v910', ctc7, v910);
  if (v418) {
    stdlib.protect(ctc8, await interact.out(v866, v911), {
      at: './src/contracts/loan_nnt_algo.rsh:99:31:application',
      fs: ['at ./src/contracts/loan_nnt_algo.rsh:99:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:31:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:110:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:108:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:108:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:108:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1602 = v906;
  const v1603 = v867;
  const v1605 = v893;
  const v1606 = v801;
  const v1607 = stdlib.gt(v792, v794);
  const v1608 = stdlib.lt(v906, v587);
  const v1609 = v1607 ? v1608 : false;
  if (v1609) {
    return;
    }
  else {
    const v1613 = v1608 ? v598 : v576;
    ;
    const v1614 = v893[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1615 = v1614[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
    const v1616 = v1608 ? v576 : v598;
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
  
  
  const [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v639 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:62:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:62:39:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:62:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:51:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v643 = ['Lender_lend0_93', v639];
  
  const txn1 = await (ctc.sendrecv({
    args: [v576, v577, v579, v586, v587, v597, v598, v599, v600, v606, v607, v628, v643],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:64:34:decimal', stdlib.UInt_max, '0'), [[v586, v577]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v665], secs: v667, time: v666, didSend: v196, from: v664 } = txn1;
      
      switch (v665[0]) {
        case 'Borrower_close0_93': {
          const v668 = v665[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v716 = v665[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v742 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
          const v743 = v742[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
          const v744 = stdlib.add(v743, v586);
          const v746 = stdlib.Array_set(v742, '0', v744);
          const v747 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0'), v746);
          sim_r.txns.push({
            amt: v586,
            kind: 'to',
            tok: v577
            });
          const v757 = true;
          const v758 = await txn1.getOutput('Lender_lend', 'v757', ctc4, v757);
          
          const v1696 = v664;
          const v1698 = v666;
          const v1706 = true;
          const v1707 = v747[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v1708 = v1707[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
          const v1709 = stdlib.sub(v1708, v1708);
          const v1710 = stdlib.Array_set(v1707, '0', v1709);
          const v1711 = stdlib.Array_set(v747, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v1710);
          sim_r.txns.push({
            kind: 'from',
            to: v576,
            tok: v577
            });
          const v1712 = v579.maturation;
          const v1713 = stdlib.safeAdd(v600, v1712);
          const v1758 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
          const v1759 = v666;
          const v1761 = v1711;
          const v1762 = v607;
          const v1763 = stdlib.gt(v1713, v600);
          const v1764 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
          const v1765 = v1763 ? v1764 : false;
          if (v1765) {
            const v1766 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
            sim_r.isHalt = false;
            }
          else {
            const v1769 = v1764 ? v664 : v576;
            sim_r.txns.push({
              kind: 'from',
              to: v1769,
              tok: undefined /* Nothing */
              });
            const v1770 = v1711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1771 = v1770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
            const v1772 = v1764 ? v576 : v664;
            sim_r.txns.push({
              kind: 'from',
              to: v1772,
              tok: v577
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v577
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
  const {data: [v665], secs: v667, time: v666, didSend: v196, from: v664 } = txn1;
  switch (v665[0]) {
    case 'Borrower_close0_93': {
      const v668 = v665[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v716 = v665[1];
      undefined /* setApiDetails */;
      ;
      const v742 = v606[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
      const v743 = v742[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0')];
      const v744 = stdlib.add(v743, v586);
      const v746 = stdlib.Array_set(v742, '0', v744);
      const v747 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:51:62:dot', stdlib.UInt_max, '0'), v746);
      ;
      const v757 = true;
      const v758 = await txn1.getOutput('Lender_lend', 'v757', ctc4, v757);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v716, v758), {
          at: './src/contracts/loan_nnt_algo.rsh:62:23:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:62:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:62:23:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:66:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:65:42:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:65:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:65:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1696 = v664;
      const v1698 = v666;
      const v1706 = true;
      const v1707 = v747[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
      const v1708 = v1707[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:33:application', stdlib.UInt_max, '0')];
      const v1709 = stdlib.sub(v1708, v1708);
      const v1710 = stdlib.Array_set(v1707, '0', v1709);
      const v1711 = stdlib.Array_set(v747, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:81:55:application', stdlib.UInt_max, '0'), v1710);
      ;
      const v1712 = v579.maturation;
      const v1713 = stdlib.safeAdd(v600, v1712);
      const v1758 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0');
      const v1759 = v666;
      const v1761 = v1711;
      const v1762 = v607;
      const v1763 = stdlib.gt(v1713, v600);
      const v1764 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
      const v1765 = v1763 ? v1764 : false;
      if (v1765) {
        const v1766 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:86:51:decimal', stdlib.UInt_max, '0'), v587);
        return;
        }
      else {
        const v1769 = v1764 ? v664 : v576;
        ;
        const v1770 = v1711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1771 = v1770[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:118:33:application', stdlib.UInt_max, '0')];
        const v1772 = v1764 ? v576 : v664;
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
    pure: [`LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`],
    sigs: [`Borrower_close()byte[0]`, `Borrower_repay(uint64)(byte,uint64,uint64)`, `Lender_lend()byte`, `LoanViews_amountPaid()uint64`, `LoanViews_beginBlock()uint64`, `LoanViews_isLive()byte`, `LoanViews_loanPaid()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAWAAEFBCAHKAj2roD0A9fx250HnpLWlQjZ9qi8Bv/xxroCvvOm1wMGaFlQYWmCAaCNBiYDAQEBAAAiNQAxGEEGbypkSSJbNQEhB1s1AjYaABdJQQDYIjUEIzUGSSEIDEAAVEkhCQxAAB9JIQoMQAAOIQoSRCo1/yk0/1BCANMhCRJENhoBQgIMSSELDEAAGSELEkQ0ASQSRClkKGRQSTUDV2EINQdCBgAhCBJEKjX/KDT/UEIAm0khDAxAADlJIQ0MQAAZIQ0SRDQBJBJEKWQoZFBJNQNXigE1B0IFyyEMEkQ0ASQSRClkKGRQSTUDV1AINQdCBbKBj8bFKhJENAFJIQUMQAAUIQUSRClkKGRQSTUDV7MBNQdCBY4kEkQpZChkUEk1A1dYATUHQgV7NhoCFzUENhoDNhoBF0klDEACZEkkDEABTUkhDgxAANghDhJEIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEEWzX+Vyg4Nf2BYFs1/CEPWzX7gZIBWzX6V5oRNfmBqwFbNfhJNQU194AEkE9kSTT3ULA09yJVQAAvgAgAAAAAAAACvbAqNQc0/zT+NP00/DT7IjQDV3EgNANXkQEXMgY0+jT5NPhCAuE0+VcAETX2NPw0/ogE+4AJAAAAAAAAAvUBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk09kkiWzT8CBZcAFwANPhCAplIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSVcAIDX/IRBbNf6ABMyZklywMgY0/g9ENP8xABJENP80AyEEWzQDIQZbNANXMCA0AyERWzQDV1gBFzT+NAMhElsyBjQDIRNbNANXcRE0AyEUW0IDBUgkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpXACA1/yEEWzX+IQZbNf0hEFs1/CESWzX7V3ERNfpJNQU1+YAEzjxwZjT5ULAyBjT8DEQ0+Rc1+DEANP8SRDT4NPsISTX3NP0NSTX2QQAKNPc0/Qk19UIAAyI19TT4NPUJNfQ0+lcAETXzNPQ0/ogDxjT2QQAKNPc0/Qk18kIAAyI18jT7NPg08gkINfGACAAAAAAAAAOONPE0/Q8WUQcINPEWUDT9FlBQsDTxNP0PFlEHCDTxFlA0/RZQNQc0/zT+NP00A1cwIDQDIRFbNANXWAEXNPw08TIGNAMhE1s0+jTzSSJbNPQIFlwAXAA0AyEUW0IB9EkjDEAAZSMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lXACA1/yEGWzX+gASai5F0sDT+iALyNP8xABJENP80AyEEWzQDVzA4NAOBgQFbNAOBiQFbIzT/IjIGNAMhD1s0A1dwETT+QgCvSCEViAK5IjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEHWzX+VxA4Nf2ABFvy8so0/xZQNP4WUDT9ULCBEa9JNfxJVwARIQevXABcADX7IRWIAmyxIrIBIrISJbIQMgqyFDT/shGzNP2BMFs1+jT9IQRbNfk0+jT5DEQxADT/FlA0/hZQNP1QMgYWUDT7UDT6FlA0+RZQKUsBVwB/ZyhLAVd/EmdIIzUBMgY1AkIBvjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT7FDT5EEEAPzT0NPUWUDT2UDT3FlA0+BZQKFA0+lApUDT8FlA0/lA0/xZQKFApSwFXAH9nKEsBV381Z0ghBTUBMgY1AkIBXjT7QQBLNP5XABFJNfMiWzXysSKyATTyshIlshA09LIUNPWyEbM09DT1NPg0+jT8NPs0/TT2IQZbCCI0/DT9NP408zTySQkWXABcADT/QgAqsSKyATT/sggjshA09LIHs7EisgEishIlshAyCbIVMgqyFDT1shGzQgDJNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPs09gw18zT6NP0NNPMQQQBSNPs09g818jT0NPUWUDT2FlA091A0+BZQNPkWUQcIUDT6FlA0+xZQNPwWUDT+UDT/FlA08hZRBwhQKUsBVwB/ZyhLAVd/DGdIJDUBMgY1AkIAaLEisgE0/7III7IQNPQ09zTzTbIHs7EisgE0/lcAESJbshIlshA09zT0NPNNshQ09bIRs7EisgEishIlshAyCbIVMgqyFDT1shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"internalType":"struct T11","name":"v1796","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v701","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v757","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v910","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1787","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1798","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1812","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1819","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1826","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002e4538819003601f8101601f191683016001600160401b0381118482101762000509578392829160405283398101039060e082126200060d576080604051926200004d8462000612565b825184526200005f6020840162000667565b602085015260408301516040850152605f1901126200060d5760c060405191620000898362000612565b620000976060820162000667565b83526080810151602084015260a0810151604084015201516060820152606082015243600355600060e0604051620000cf816200062e565b828152826020820152620000e26200067c565b60408201528260608201528260808201528260a08201528260c082015201526040519062000110826200064b565b6200011a6200067c565b8252602082016200012a6200069d565b8152620001366200069d565b604084015260ff60045416620005f4577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001a760608601516080830190620006e4565ba181518015908115620005e7575b5015620005ce57600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620001f4836200064b565b60008352602083015260408201526200020c6200069d565b9160005b600181106200057e5750508152604083015234620005655760608101516020606082015191015111156200054c576060602091604080519462000253866200062e565b600086526000858701526000828701528151620002708162000612565b6000815260008682015260008382015260008582015284870152600060808701526200029b6200069d565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015281830151828701528383015184870152436080870152015160a08501528180820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200033660608201516080840190620006e4565b608081015161010083015260a0810151600061012084015b600182106200051f5760c084015161018086015260e08401516101a0808701919091528552846101c081016001600160401b03811182821017620005095760405280516001600160401b0381116200050957600254600181811c91168015620004fe575b6020821014620004e857601f81116200047e575b50602091601f8211600114620004145791819260009262000408575b50508160011b916000199060031b1c1916176002555b60405161270c9081620007398239f35b015190508280620003e2565b601f19821692600260005260206000209160005b85811062000465575083600195106200044b575b505050811b01600255620003f8565b015160001960f88460031b161c191690558280806200043c565b9192602060018192868501518155019401920162000428565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004dd575b601f0160051c01905b818110620004d05750620003c6565b60008155600101620004c1565b9091508190620004b8565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003b2565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200034e565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b6200058a818362000710565b5162000597828662000710565b52620005a4818562000710565b506000198114620005b85760010162000210565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001b5565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200050957604052565b61010081019081106001600160401b038211176200050957604052565b606081019081106001600160401b038211176200050957604052565b51906001600160a01b03821682036200060d57565b604051906200068b826200064b565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000509576040528260005b828110620006cd57505050565b8290620006d96200067c565b8184015201620006c0565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007225760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101305780631e93b0f11461012757806330dd5d081461011e5780633c4965541461011557806340410cd51461010c5780634cd8755514610103578063573b8510146100fa578063823c0a8d146100f157806383230757146100e857806394134348146100df57806396d6c36b146100d6578063ab53f2c6146100cd578063ea121ca3146100c45763f9d773330361000e576100bf610894565b61000e565b506100bf610815565b506100bf6107a0565b506100bf610721565b506100bf610678565b506100bf610659565b506100bf61060b565b506100bf610498565b506100bf61042e565b506100bf6103d6565b506100bf610387565b506100bf6101d1565b506100bf6101a1565b503461019c57600036600319011261019c5761014a610b6a565b6005600054036101835760a06020916080610174610166610a23565b858082518301019101610cc1565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b503461019c57600036600319011261019c576020600354604051908152f35b602090600319011261019c57600490565b5061036b6101f16101e1366101c0565b6101e9610b6a565b503690612626565b61020c61020761020360045460ff1690565b1590565b610d7b565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061023c843383612644565b0390a161024d600560005414610d9b565b61027c61026a61025b610a23565b60208082518301019101610cc1565b9151801590811561037b575b50610dbb565b60c081019061028e8251431015610ddb565b6102983415610dfb565b6102b43360018060a01b036102ad8451610c0f565b1614610e1b565b6102bc61129d565b916102d06102ca8351610c0f565b846112fe565b6102e96102e06020840151610c0f565b602085016112fe565b6040820151604084015261030c6103036060840151610c0f565b606085016112fe565b6080820151608084015261032f61032660a0840151151590565b151560a0850152565b5160c083015260e081015160e0830152610100438184015281015161012090818401528101519061014091828401520151610160820152612428565b60405160008152602090f35b0390f35b90506001541438610276565b503461019c57600036600319011261019c576103a1610b6a565b6005600054036103bd57608060209160e0610174610166610a23565b60405163100960cb60e01b815260076004820152602490fd5b50600036600319011261019c576020806103ee610b6a565b610422816103fa610bce565b8481019060008251525115158582510152610413610bce565b906000825251858201526119a6565b01511515604051908152f35b503461019c57600036600319011261019c57610448610b6a565b60056000540361047f5760e06103779161016061046661025b610a23565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5061036b6104a86101e1366101c0565b6104bf6104ba61020360045460ff1690565b610e3b565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104ef843383612644565b0390a1610500600160005414610e5b565b61052f61051d61050e610a23565b6020808251830101910161265e565b915180159081156105ff575b50610e7b565b6040810161053f81513414610e9b565b61055b3360018060a01b036105548551610c0f565b1614610ebb565b60a0610565611948565b926105796105738251610c0f565b856112fe565b6105926105896020830151610c0f565b602086016112fe565b6060810151604085015260c0810151606085015260e081015160808501526105bc82850160019052565b6105d26105c98251610c0f565b60c086016112fe565b600060e0850152436101008501526080810151610120850152015161014083015251610160820152612015565b90506001541438610529565b50600036600319011261019c5760206060610624610b6a565b61042281610630610bce565b85810190600182515251151560408251015261064a610bce565b906000825251868201526119a6565b503461019c57600036600319011261019c576020600154604051908152f35b503461019c57600036600319011261019c576103776106d460c061069a610b6a565b60005460078110156106e65760056106b29114610efb565b6106c56106cc60a06106c561025b610a23565b0151151590565b151582840152565b60405190151581529081906020820190565b60076106f29114610edb565b61071c610160610712610703610a23565b6020808251830101910161113a565b0151151582840152565b6106c5565b50608036600319011261019c57610736610b6a565b604051906107438261096b565b6004358252606036602319011261019c576040519161076183610993565b60243592600284101561019c5761036b93815260443561078081610c2f565b602082015260643561079181610c2f565b604082015260208201526119a6565b503461019c576000806003193601126108125780546107bd610a23565b906040519283918252602090604082840152835191826040850152815b8381106107fb57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016107da565b80fd5b50604036600319011261019c5761082a610b6a565b604051906108378261096b565b6004358252602036602319011261019c5761086791604051610858816109ae565b60243581526020820152611334565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b50602036600319011261019c576108a9610b2d565b506103776108b5610b6a565b60408161090d829383516108c8816109ae565b84516108d3816109ae565b80825260043590528451906108e78261096b565b60008252602082019086516108fb816109ae565b60008152825260008352519052611334565b0151905191829182610872565b90600182811c9216801561094a575b602083101461093457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610929565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761098657604052565b61098e610954565b604052565b606081019081106001600160401b0382111761098657604052565b602081019081106001600160401b0382111761098657604052565b61018081019081106001600160401b0382111761098657604052565b60a081019081106001600160401b0382111761098657604052565b601f909101601f19168101906001600160401b0382119082101761098657604052565b6040519060008260025491610a378361091a565b808352600193808516908115610aad5750600114610a5f575b50610a5d92500383610a00565b565b600260009081526000805160206126e083398151915294602093509091905b818310610a95575050610a5d935082010138610a50565b85548884018501529485019487945091830191610a7e565b9050610a5d94506020925060ff191682840152151560051b82010138610a50565b6040519061018082016001600160401b0381118382101761098657604052565b60405190606082016001600160401b0381118382101761098657604052565b6040519061010082016001600160401b0381118382101761098657604052565b60405190606082016001600160401b03811183821017610b5d575b60405260006040838281528260208201520152565b610b65610954565b610b48565b6040519061010082016001600160401b03811183821017610bc1575b6040528160e0600091828152826020820152610ba0610b2d565b60408201528260608201528260808201528260a08201528260c08201520152565b610bc9610954565b610b86565b60405190610bdb8261096b565b81600081526020610bea610b2d565b910152565b60021115610bf957565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361019c57565b8015150361019c57565b5190610a5d82610c2f565b9080601f8301121561019c57604091825192610c5f846109ae565b836060938484019381851161019c57915b848310610c805750505050505090565b858383031261019c5783518691610c9682610993565b84518252602091828601518382015286860151610cb281610c2f565b87820152815201920191610c70565b6101c08183031261019c576101a0610d7291610cdb610ace565b93610ce582610c1b565b8552610cf360208301610c1b565b602086015260408201516040860152610d0e60608301610c1b565b606086015260808201516080860152610d2960a08301610c39565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610d5c61012091828401610c44565b9085015261018081015161014085015201610c39565b61016082015290565b15610d8257565b60405163100960cb60e01b8152601c6004820152602490fd5b15610da257565b60405163100960cb60e01b8152601d6004820152602490fd5b15610dc257565b60405163100960cb60e01b8152601e6004820152602490fd5b15610de257565b60405163100960cb60e01b8152601f6004820152602490fd5b15610e0257565b60405163100960cb60e01b815260206004820152602490fd5b15610e2257565b60405163100960cb60e01b815260216004820152602490fd5b15610e4257565b60405163100960cb60e01b815260106004820152602490fd5b15610e6257565b60405163100960cb60e01b815260116004820152602490fd5b15610e8257565b60405163100960cb60e01b815260126004820152602490fd5b15610ea257565b60405163100960cb60e01b815260136004820152602490fd5b15610ec257565b60405163100960cb60e01b815260146004820152602490fd5b15610ee257565b60405163100960cb60e01b8152600a6004820152602490fd5b15610f0257565b60405163100960cb60e01b815260096004820152602490fd5b15610f2257565b60405163100960cb60e01b815260156004820152602490fd5b15610f4257565b60405163100960cb60e01b815260166004820152602490fd5b15610f6257565b60405163100960cb60e01b815260176004820152602490fd5b15610f8257565b60405163100960cb60e01b815260186004820152602490fd5b15610fa257565b60405163100960cb60e01b815260196004820152602490fd5b15610fc257565b60405163100960cb60e01b8152601a6004820152602490fd5b15610fe257565b60405163100960cb60e01b8152601b6004820152602490fd5b1561100257565b60405163100960cb60e01b815260226004820152602490fd5b1561102257565b60405163100960cb60e01b815260236004820152602490fd5b1561104257565b602460405163100960cb60e01b8152816004820152fd5b1561106057565b60405163100960cb60e01b815260276004820152602490fd5b1561108057565b60405163100960cb60e01b815260286004820152602490fd5b156110a057565b60405163100960cb60e01b815260256004820152602490fd5b156110c057565b60405163100960cb60e01b815260266004820152602490fd5b919082608091031261019c57604051608081016001600160401b0381118282101761112d575b604052606080829461111081610c1b565b845260208101516020850152604081015160408501520151910152565b611135610954565b6110ff565b906102208282031261019c576111ff610200611154610ace565b9361115e81610c1b565b855261116c60208201610c1b565b602086015261117e84604083016110d9565b604086015260c0810151606086015260e08101516080860152610100936111a6858301610c39565b60a08701526101206111b9818401610c1b565b60c08801526111eb610140926111d0848601610c39565b60e08a01526101609788860151908a01526101808501610c44565b908701526101e08201519086015201610c39565b9082015290565b6040519060e082016001600160401b03811183821017611251575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0610bea610b2d565b611259610954565b611221565b6001600160a01b03169052565b60405190611278826109ae565b8160005b60208110611288575050565b602090611293610b2d565b818401520161127c565b604051906112aa826109c9565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526112f461126b565b6101408201520152565b6001600160a01b039091169052565b90600181101561131e5760051b0190565b634e487b7160e01b600052603260045260246000fd5b9061133d611206565b61135461134f61020360045460ff1690565b610f1b565b60408051338152845160208083019190915285015151818301527f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a16113a2600560005414610f3b565b6113aa610a23565b91816113c0602094858082518301019101610cc1565b936113d68751801590811561162a575b50610f5b565b8060c08601976113e889514310610f7b565b6114046113fd6113f88951610c0f565b610c0f565b3314610f9b565b01908151519361141a60e088019586519061164d565b8082528488018051919091108383018181529a91901561161f57611441835182519061166f565b868401525b845151868401516114569161166f565b60608401908152966114683415610fbb565b848a019b8c5161147790610c0f565b895161148391336116f2565b61148c90610fdb565b511515600014610a5d9c6115559c6115fd9b6114dc6115f89a6114d66115699761156197611613576114c18c518b519061166f565b60808d01525b5191515160808c01519061166f565b9061164d565b976114fa60c060a083019a808c528951111592019182519015159052565b88518a82510152865182825101527fbcd1e180e26d512406e14f0cce088d056cb62c6dbcff3393d3a036ef162ca1e36115398251845191829182610872565b0390a15191015261155b8c61154c61129d565b9e8f9151610c0f565b906112fe565b51610c0f565b858c016112fe565b51858a015261158761157e60608a0151610c0f565b60608b016112fe565b608088015160808a01526115aa6115a160a08a0151151590565b151560a08b0152565b5160c08901525160e0880152610100438189015286015161012090818901528601519283519485519051019481838201519101511515926115e9610aee565b96875286015284019015159052565b6117f7565b9061014091828401520151610160820152612428565b600060808d01526114c7565b600086840152611446565b905060015414386113d0565b50634e487b7160e01b600052601160045260246000fd5b9190820191828111611662575b821061019c57565b61166a611636565b61165a565b90810390811161167c5790565b611684611636565b90565b6000611684928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526116cb816109e5565b5193165af16116e26116db611735565b8092611797565b5060208082518301019101611782565b6000916116849383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526116cb816109e5565b3d1561177d573d906001600160401b038211611770575b60405191611764601f8201601f191660200184610a00565b82523d6000602084013e565b611778610954565b61174c565b606090565b9081602091031261019c575161168481610c2f565b1561179f5790565b8051156117ae57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156117cf5790565b8051156117de57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b919061180161126b565b9260005b600181106118135750508252565b806118206001928461130d565b5161182b828861130d565b52611836818761130d565b506000198114611847575b01611805565b61184f611636565b611841565b919061185e61126b565b9260005b600181106118705750508252565b8061187d6001928461130d565b51611888828861130d565b52611893818761130d565b5060001981146118a4575b01611862565b6118ac611636565b61189e565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610bf9576080916040918285015260208101511515606085015201511515910152565b516002811015610bf95790565b60405190608082016001600160401b0381118382101761193b575b60405260006060838281528260208201528260408201520152565b611943610954565b611920565b60405190611955826109c9565b8161016060009182815282602082015261196d611905565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526112f461126b565b90611a1f916119c26119bd61020360045460ff1690565b610ffb565b60407f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a43478151806119f38533836118b1565b0390a1611a0460076000541461101b565b611a0c610a23565b602094818680809451830101910161113a565b92611a3581518015908115611cb6575b5061103b565b01611a4081516118f8565b611a4981610bef565b611b575750611ad6610a5d94611a5f3415611099565b60008180860196611a81611a7c611a768a51610c0f565b33611687565b6110b9565b8551600081527f66dd1dbde5bb53feba4eec0bdd1c4dd1ba6955df6355c5f0c53a0e6534d2883590602090a10152611ace611aba611948565b9561155b611ac88751610c0f565b886112fe565b9085016112fe565b80820151908301526060810151606083015260808101516080830152600060a0830152611b12611b0960c0830151610c0f565b60c084016112fe565b611b2b611b2260e0830151151590565b151560e0840152565b610100438184015281015161012090818401528101519061014091828401520151610160820152612015565b611b66600191959495516118f8565b611b6f81610bef565b14611b7b575b50505050565b611cad93611c9791611b8d3415611059565b611c9285850195611bef6060611ba38951610c0f565b95611bbc611bb7838b0198895190336116f2565b611079565b8551600181527fb188b0e33b683fd24a6adfd3fff966bf5be52b89bb092f35fb829c7a755cc0bb90602090a10160019052565b611c19611c11611bfd611948565b9861155b611c0b8a51610c0f565b8b6112fe565b8289016112fe565b82860151838801528351606088015260808601516080880152611c4b611c4260a0880151151590565b151560a0890152565b611c583360c089016112fe565b600160e0880152610100438189015286015161012090818901528601519283519485519051019481838201519101511515926115e9610aee565b611854565b9061014091828401520151610160820152612015565b38808080611b75565b90506001541438611a2f565b506040513d6000823e3d90fd5b818110611cda575050565b60008155600101611ccf565b611cf160025461091a565b80611cf95750565b601f8111600114611d0c57506000600255565b6002600052611d5190601f0160051c6000805160206126e0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611ccf565b6000602081208160025555565b60405190611d6b826109c9565b81610160600091828152826020820152611d83611905565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611db561126b565b610120820152826101408201520152565b6000915b60018310611dd757505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611dca565b610a5d90929192610200610220820194611e2183825161125e565b611e336020820151602085019061125e565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611e91610100928386019015159052565b60c081015191611ea7610120938487019061125e565b611edb60e083015191611ec1610140938489019015159052565b830151936101609485880152830151610180870190611dc6565b8101516101e085015201511515910152565b90601f8211611efa575050565b610a5d9160026000526020600020906020601f840160051c83019310611f28575b601f0160051c0190611ccf565b9091508190611f1b565b80519091906001600160401b038111612008575b611f5a81611f5560025461091a565b611eed565b602080601f8311600114611f965750819293600092611f8b575b50508160011b916000199060031b1c191617600255565b015190503880611f74565b6002600052601f198316949091906000805160206126e0833981519152926000905b878210611ff0575050836001959610611fd7575b505050811b01600255565b015160001960f88460031b161c19169055388080611fcc565b80600185968294968601518155019501930190611fb8565b612010610954565b611f46565b60e081018051151580156122835760005b1561210b5750506120f8612106610a5d926120d6612042611d5e565b916120506102ca8251610c0f565b6120606102e06020830151610c0f565b60408101516040840152606081015160608401526080810151608084015261208b60a0840160019052565b6120a461209b60c0830151610c0f565b60c085016112fe565b600060e08401526101008082015190840152610140808201516101208501526101608092015190840152820160019052565b6120e06007600055565b6120e943600155565b60405192839160208301611e06565b03601f198101835282610a00565b611f32565b1561222d57816020610a5d9301916122196121268451610c0f565b6121308451610c0f565b9261214f6101409485870193845151519160018060a01b03169061228f565b61217a61217161215d61129d565b9761155b61216b8951610c0f565b8a6112fe565b602088016112fe565b6080850151604087015261219d61219460c0870151610c0f565b606088016112fe565b610100906121b8611c4283880192835160808b015251151590565b61012091828701916121d383516040808b015101519061164d565b60c08a0152600060e08a015251908801525190860152518051906115f8604060208401519301511515612204610aee565b93600085526020850152604084019015159052565b908301526101608091015190820152612428565b5060008080836101606122446113f8849751610c0f565b9101519082821561227a575bf11561226d575b600080556122656000600155565b610a5d611ce6565b612275611cc2565b612257565b506108fc612250565b60a08301511515612026565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526122fb93600093849392849190608081016001600160401b03811182821017612302575b6040525193165af16116e26122f4611735565b80926117c7565b1561019c57565b61230a610954565b6122e1565b6040519061231c8261096b565b60006020838281520152565b60405190612335826109c9565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611db561126b565b610a5d909291926101a06101606101c083019561239684825161125e565b6123a86020820151602086019061125e565b604081015160408501526123c46060820151606086019061125e565b608081015160808501526123e160a082015160a086019015159052565b60c081015160c085015260e081015160e085015261010080820151908501526124136101208083015190860190611dc6565b61014081015161018085015201511515910152565b61243061230f565b60e08201805160408401805191909111835292919060c08301908151916101209283860151106000906000146126215750835115155b15612565579361253b61210694610a5d9794846120f898612496602061254398518a511115950194859015159052565b61249e612328565b976124ac61216b8851610c0f565b6124c56124bc6020890151610c0f565b60208b016112fe565b5160408901526124e46124db6060880151610c0f565b60608a016112fe565b608086015160808901526125076124fe60a0880151151590565b151560a08a0152565b5160c08801525160e08701526101008085015190870152610140908185015190870152610160809401519086015251151590565b151590830152565b61254d6005600055565b61255643600155565b60405192839160208301612378565b50505061225792506125778151151590565b15612612576125896060830151610c0f565b6000808080610160870151818115612609575b6001600160a01b0396871690f1156125fc575b6125c66125bf6020850151610c0f565b9251151590565b156125e6576101406125d88451610c0f565b935b0151515192169061228f565b6101406125f66060850151610c0f565b936125da565b612604611cc2565b6125af565b506108fc61259c565b61261c8251610c0f565b612589565b612466565b919082602091031261019c5760405161263e816109ae565b91358252565b6001600160a01b0390911681529051602082015260400190565b6101a08183031261019c57610180906126c5612678610b0d565b9361268283610c1b565b855261269060208401610c1b565b6020860152604083015160408601526126ac81606085016110d9565b606086015260e083015160808601526101008301610c44565b60a084015261016081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 11845,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_nnt_algo.rsh:47:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_nnt_algo.rsh:122:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_nnt_algo.rsh:86:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_nnt_algo.rsh:78:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_nnt_algo.rsh:51:62:after expr stmt semicolon',
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
