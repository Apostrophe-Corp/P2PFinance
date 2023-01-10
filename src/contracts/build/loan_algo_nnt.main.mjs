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
      const [v519, v520, v521, v522, v523, v527, v529, v530] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713] = svs;
      return (await ((async () => {
        
        
        return v683;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v519, v520, v521, v522, v523, v527, v529, v530] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713] = svs;
      return (await ((async () => {
        
        
        return v547;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v519, v520, v521, v522, v523, v527, v529, v530] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713] = svs;
      return (await ((async () => {
        
        
        return v651;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = svs;
      return (await ((async () => {
        
        
        return v575;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v519, v520, v521, v522, v523, v527, v529, v530] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713] = svs;
      return (await ((async () => {
        
        
        return v713;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = svs;
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
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v497 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v498 = [v497];
  const v504 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_algo_nnt.rsh:41:43:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:39:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v505 = v504.address;
  const v506 = v504.amount;
  const v507 = v504.collateral;
  const v508 = v504.maturation;
  const v509 = v504.principal;
  const v510 = v504.tokCollateral;
  const v517 = stdlib.lt(v509, v506);
  stdlib.assert(v517, {
    at: './src/contracts/loan_algo_nnt.rsh:43:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:39:15:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:39:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v518 = {
    address: v505,
    amount: v506,
    maturation: v508,
    principal: v509
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v510, v507, v518],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v520, v521, v522], secs: v524, time: v523, didSend: v43, from: v519 } = txn1;
      
      const v525 = v498[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0')];
      const v526 = stdlib.Array_set(v525, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0'));
      const v527 = stdlib.Array_set(v498, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0'), v526);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v520
        });
      ;
      const v529 = v522.principal;
      const v530 = v522.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v520, v521, v522], secs: v524, time: v523, didSend: v43, from: v519 } = txn1;
  const v525 = v498[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0')];
  const v526 = stdlib.Array_set(v525, '0', stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0'));
  const v527 = stdlib.Array_set(v498, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:45:11:dot', stdlib.UInt_max, '0'), v526);
  ;
  ;
  const v529 = v522.principal;
  const v530 = v522.amount;
  const v531 = stdlib.lt(v529, v530);
  stdlib.assert(v531, {
    at: './src/contracts/loan_algo_nnt.rsh:46:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v519, v520, v521, v522, v523, v527, v529, v530],
    evt_cnt: 0,
    funcNum: 1,
    lct: v523,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0'), [[v521, v520]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v534, time: v533, didSend: v53, from: v532 } = txn2;
      
      ;
      const v535 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0')];
      const v536 = v535[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0')];
      const v537 = stdlib.add(v536, v521);
      const v539 = stdlib.Array_set(v535, '0', v537);
      const v540 = stdlib.Array_set(v527, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0'), v539);
      sim_r.txns.push({
        amt: v521,
        kind: 'to',
        tok: v520
        });
      
      const v544 = true;
      const v545 = v519;
      const v546 = false;
      const v547 = v533;
      const v548 = v523;
      const v553 = v540;
      const v554 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v569 = v546 ? false : v544;
        
        return v569;})()) {
        const v574 = v546 ? false : v544;
        const v575 = v574 ? true : v546;
        sim_r.isHalt = false;
        }
      else {
        const v650 = v546 ? false : v544;
        const v651 = v650 ? true : v546;
        if (v546) {
          const v678 = stdlib.sub(v554, v554);
          sim_r.txns.push({
            kind: 'from',
            to: v519,
            tok: undefined /* Nothing */
            });
          const v680 = v522.maturation;
          const v682 = stdlib.safeAdd(v548, v680);
          const v683 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v684 = v547;
          const v685 = v548;
          const v690 = v553;
          const v691 = v678;
          
          if (await (async () => {
            const v708 = stdlib.gt(v682, v685);
            const v710 = stdlib.lt(v683, v530);
            const v711 = v708 ? v710 : false;
            
            return v711;})()) {
            const v713 = stdlib.ge(v683, v530);
            sim_r.isHalt = false;
            }
          else {
            const v799 = v690[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v800 = v799[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v802 = stdlib.lt(v683, v530);
            const v803 = v802 ? v545 : v519;
            sim_r.txns.push({
              kind: 'from',
              to: v803,
              tok: v520
              });
            const v816 = v802 ? v519 : v545;
            sim_r.txns.push({
              kind: 'from',
              to: v816,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v520
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v653 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
          const v654 = v653[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v519,
            tok: v520
            });
          sim_r.txns.push({
            kind: 'from',
            to: v519,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v520
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
  const {data: [], secs: v534, time: v533, didSend: v53, from: v532 } = txn2;
  ;
  const v535 = v527[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0')];
  const v536 = v535[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0')];
  const v537 = stdlib.add(v536, v521);
  const v539 = stdlib.Array_set(v535, '0', v537);
  const v540 = stdlib.Array_set(v527, stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:48:11:dot', stdlib.UInt_max, '0'), v539);
  ;
  const v541 = stdlib.addressEq(v519, v532);
  stdlib.assert(v541, {
    at: './src/contracts/loan_algo_nnt.rsh:48:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v533), {
    at: './src/contracts/loan_algo_nnt.rsh:49:27:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:49:27:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:49:27:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:49:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_algo_nnt.rsh:49:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v544 = true;
  let v545 = v519;
  let v546 = false;
  let v547 = v533;
  let v548 = v523;
  let v553 = v540;
  let v554 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:37:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v569 = v546 ? false : v544;
    
    return v569;})()) {
    const v574 = v546 ? false : v544;
    const v575 = v574 ? true : v546;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v596], secs: v598, time: v597, didSend: v158, from: v595 } = txn4;
    switch (v596[0]) {
      case 'Borrower_close0_93': {
        const v599 = v596[1];
        undefined /* setApiDetails */;
        ;
        const v609 = null;
        await txn4.getOutput('Borrower_close', 'v609', ctc5, v609);
        const cv544 = false;
        const cv545 = v545;
        const cv546 = v546;
        const cv547 = v597;
        const cv548 = v547;
        const cv553 = v553;
        const cv554 = v554;
        
        v544 = cv544;
        v545 = cv545;
        v546 = cv546;
        v547 = cv547;
        v548 = cv548;
        v553 = cv553;
        v554 = cv554;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v624 = v596[1];
        undefined /* setApiDetails */;
        const v632 = stdlib.add(v554, v529);
        ;
        const v642 = true;
        await txn4.getOutput('Lender_lend', 'v642', ctc8, v642);
        const cv544 = v544;
        const cv545 = v595;
        const cv546 = true;
        const cv547 = v597;
        const cv548 = v547;
        const cv553 = v553;
        const cv554 = v632;
        
        v544 = cv544;
        v545 = cv545;
        v546 = cv546;
        v547 = cv547;
        v548 = cv548;
        v553 = cv553;
        v554 = cv554;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v650 = v546 ? false : v544;
  const v651 = v650 ? true : v546;
  if (v546) {
    const v678 = stdlib.sub(v554, v554);
    ;
    const v680 = v522.maturation;
    const v682 = stdlib.safeAdd(v548, v680);
    let v683 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
    let v684 = v547;
    let v685 = v548;
    let v690 = v553;
    let v691 = v678;
    
    let txn4 = txn3;
    while (await (async () => {
      const v708 = stdlib.gt(v682, v685);
      const v710 = stdlib.lt(v683, v530);
      const v711 = v708 ? v710 : false;
      
      return v711;})()) {
      const v713 = stdlib.ge(v683, v530);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: ['time', v682],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713],
          evt_cnt: 0,
          funcNum: 5,
          lct: v684,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:50:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v794, time: v793, didSend: v429, from: v792 } = txn6;
            
            ;
            const cv683 = v683;
            const cv684 = v793;
            const cv685 = v684;
            const cv690 = v690;
            const cv691 = v691;
            
            await (async () => {
              const v683 = cv683;
              const v684 = cv684;
              const v685 = cv685;
              const v690 = cv690;
              const v691 = cv691;
              
              if (await (async () => {
                const v708 = stdlib.gt(v682, v685);
                const v710 = stdlib.lt(v683, v530);
                const v711 = v708 ? v710 : false;
                
                return v711;})()) {
                const v713 = stdlib.ge(v683, v530);
                sim_r.isHalt = false;
                }
              else {
                const v799 = v690[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
                const v800 = v799[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
                const v802 = stdlib.lt(v683, v530);
                const v803 = v802 ? v545 : v519;
                sim_r.txns.push({
                  kind: 'from',
                  to: v803,
                  tok: v520
                  });
                const v816 = v802 ? v519 : v545;
                sim_r.txns.push({
                  kind: 'from',
                  to: v816,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v520
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
        const {data: [], secs: v794, time: v793, didSend: v429, from: v792 } = txn6;
        ;
        const v795 = stdlib.addressEq(v519, v792);
        stdlib.assert(v795, {
          at: './src/contracts/loan_algo_nnt.rsh:89:50:dot',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:120:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:120:39:function exp)'],
          msg: 'sender correct',
          who: 'B'
          });
        const cv683 = v683;
        const cv684 = v793;
        const cv685 = v684;
        const cv690 = v690;
        const cv691 = v691;
        
        v683 = cv683;
        v684 = cv684;
        v685 = cv685;
        v690 = cv690;
        v691 = cv691;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v749], secs: v751, time: v750, didSend: v369, from: v748 } = txn5;
        undefined /* setApiDetails */;
        const v753 = v749[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
        const v754 = stdlib.addressEq(v748, v519);
        stdlib.assert(v754, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)'],
          msg: 'You are not the Borrower',
          who: 'B'
          });
        const v756 = stdlib.safeAdd(v753, v683);
        const v758 = stdlib.gt(v756, v530);
        let v759;
        if (v758) {
          const v762 = stdlib.safeSub(v756, v530);
          v759 = v762;
          }
        else {
          v759 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
          }
        const v763 = stdlib.safeSub(v753, v759);
        const v765 = stdlib.add(v691, v763);
        ;
        let v772;
        if (v758) {
          const v775 = stdlib.safeSub(v756, v530);
          v772 = v775;
          }
        else {
          v772 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
          }
        const v776 = stdlib.safeSub(v753, v772);
        const v778 = stdlib.safeAdd(v683, v776);
        const v780 = stdlib.ge(v778, v530);
        const v782 = [v780, v778, v530];
        await txn5.getOutput('Borrower_repay', 'v782', ctc10, v782);
        const cv683 = v778;
        const cv684 = v750;
        const cv685 = v684;
        const cv690 = v690;
        const cv691 = v765;
        
        v683 = cv683;
        v684 = cv684;
        v685 = cv685;
        v690 = cv690;
        v691 = cv691;
        
        txn4 = txn5;
        continue;}
      
      }
    const v799 = v690[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
    const v800 = v799[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
    const v802 = stdlib.lt(v683, v530);
    const v803 = v802 ? v545 : v519;
    ;
    const v816 = v802 ? v519 : v545;
    ;
    return;
    }
  else {
    const v653 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
    const v654 = v653[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
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
  
  
  const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v578 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:74:21:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:74:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:74:21:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:51:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v582 = ['Borrower_close0_93', v578];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575, v582],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:74:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v596], secs: v598, time: v597, didSend: v158, from: v595 } = txn1;
      
      switch (v596[0]) {
        case 'Borrower_close0_93': {
          const v599 = v596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          const v609 = null;
          const v610 = await txn1.getOutput('Borrower_close', 'v609', ctc9, v609);
          
          const v1318 = false;
          const v1319 = v545;
          const v1320 = v546;
          const v1321 = v597;
          const v1323 = v553;
          const v1324 = v554;
          const v1325 = v546 ? false : false;
          if (v1325) {
            const v1327 = true;
            sim_r.isHalt = false;
            }
          else {
            const v1329 = v546;
            if (v546) {
              const v1330 = stdlib.sub(v554, v554);
              sim_r.txns.push({
                kind: 'from',
                to: v519,
                tok: undefined /* Nothing */
                });
              const v1331 = v522.maturation;
              const v1332 = stdlib.safeAdd(v547, v1331);
              const v1375 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
              const v1376 = v597;
              const v1378 = v553;
              const v1379 = v1330;
              const v1380 = stdlib.gt(v1332, v547);
              const v1381 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
              const v1382 = v1380 ? v1381 : false;
              if (v1382) {
                const v1383 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
                sim_r.isHalt = false;
                }
              else {
                const v1385 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
                const v1386 = v1385[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
                const v1388 = v1381 ? v545 : v519;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1388,
                  tok: v520
                  });
                const v1389 = v1381 ? v519 : v545;
                sim_r.txns.push({
                  kind: 'from',
                  to: v1389,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v520
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1373 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
              const v1374 = v1373[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v519,
                tok: v520
                });
              sim_r.txns.push({
                kind: 'from',
                to: v519,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v520
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
          const v624 = v596[1];
          
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
  const {data: [v596], secs: v598, time: v597, didSend: v158, from: v595 } = txn1;
  switch (v596[0]) {
    case 'Borrower_close0_93': {
      const v599 = v596[1];
      undefined /* setApiDetails */;
      ;
      const v609 = null;
      const v610 = await txn1.getOutput('Borrower_close', 'v609', ctc9, v609);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v599, v610), {
          at: './src/contracts/loan_algo_nnt.rsh:74:22:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:74:22:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:74:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:75:28:application call to "ret" (defined at: ./src/contracts/loan_algo_nnt.rsh:74:44:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:74:44:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:74:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v1318 = false;
      const v1319 = v545;
      const v1320 = v546;
      const v1321 = v597;
      const v1323 = v553;
      const v1324 = v554;
      const v1325 = v546 ? false : false;
      if (v1325) {
        const v1327 = true;
        return;
        }
      else {
        const v1329 = v546;
        if (v546) {
          const v1330 = stdlib.sub(v554, v554);
          ;
          const v1331 = v522.maturation;
          const v1332 = stdlib.safeAdd(v547, v1331);
          const v1375 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v1376 = v597;
          const v1378 = v553;
          const v1379 = v1330;
          const v1380 = stdlib.gt(v1332, v547);
          const v1381 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
          const v1382 = v1380 ? v1381 : false;
          if (v1382) {
            const v1383 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
            return;
            }
          else {
            const v1385 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v1386 = v1385[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v1388 = v1381 ? v545 : v519;
            ;
            const v1389 = v1381 ? v519 : v545;
            ;
            return;
            }}
        else {
          const v1373 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
          const v1374 = v1373[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:79:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Lender_lend0_93': {
      const v624 = v596[1];
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
  
  
  const [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v719 = ctc.selfAddress();
  const v721 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v722 = v721[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v724 = stdlib.addressEq(v719, v519);
  stdlib.assert(v724, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v726 = stdlib.safeAdd(v722, v683);
  const v728 = stdlib.gt(v726, v530);
  
  let v743;
  if (v728) {
    const v746 = stdlib.safeSub(v726, v530);
    v743 = v746;
    }
  else {
    v743 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v747 = stdlib.safeSub(v722, v743);
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v530, v545, v547, v651, v682, v683, v684, v690, v691, v713, v721],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v747, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v749], secs: v751, time: v750, didSend: v369, from: v748 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Borrower_repay"
        });
      const v753 = v749[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
      const v756 = stdlib.safeAdd(v753, v683);
      const v758 = stdlib.gt(v756, v530);
      let v759;
      if (v758) {
        const v762 = stdlib.safeSub(v756, v530);
        v759 = v762;
        }
      else {
        v759 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v763 = stdlib.safeSub(v753, v759);
      const v765 = stdlib.add(v691, v763);
      sim_r.txns.push({
        amt: v763,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v772;
      if (v758) {
        const v775 = stdlib.safeSub(v756, v530);
        v772 = v775;
        }
      else {
        v772 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
        }
      const v776 = stdlib.safeSub(v753, v772);
      const v778 = stdlib.safeAdd(v683, v776);
      const v780 = stdlib.ge(v778, v530);
      const v782 = [v780, v778, v530];
      const v783 = await txn1.getOutput('Borrower_repay', 'v782', ctc7, v782);
      
      const v1462 = v778;
      const v1463 = v750;
      const v1465 = v690;
      const v1466 = v765;
      const v1467 = stdlib.gt(v682, v684);
      const v1468 = stdlib.lt(v778, v530);
      const v1469 = v1467 ? v1468 : false;
      if (v1469) {
        sim_r.isHalt = false;
        }
      else {
        const v1472 = v690[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
        const v1473 = v1472[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
        const v1475 = v1468 ? v545 : v519;
        sim_r.txns.push({
          kind: 'from',
          to: v1475,
          tok: v520
          });
        const v1476 = v1468 ? v519 : v545;
        sim_r.txns.push({
          kind: 'from',
          to: v1476,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v520
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
  const {data: [v749], secs: v751, time: v750, didSend: v369, from: v748 } = txn1;
  undefined /* setApiDetails */;
  const v753 = v749[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:104:30:spread', stdlib.UInt_max, '0')];
  const v754 = stdlib.addressEq(v748, v519);
  stdlib.assert(v754, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:105:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:104:53:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:53:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v756 = stdlib.safeAdd(v753, v683);
  const v758 = stdlib.gt(v756, v530);
  let v759;
  if (v758) {
    const v762 = stdlib.safeSub(v756, v530);
    v759 = v762;
    }
  else {
    v759 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v763 = stdlib.safeSub(v753, v759);
  const v765 = stdlib.add(v691, v763);
  ;
  let v772;
  if (v758) {
    const v775 = stdlib.safeSub(v756, v530);
    v772 = v775;
    }
  else {
    v772 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:109:51:decimal', stdlib.UInt_max, '0');
    }
  const v776 = stdlib.safeSub(v753, v772);
  const v778 = stdlib.safeAdd(v683, v776);
  const v780 = stdlib.ge(v778, v530);
  const v782 = [v780, v778, v530];
  const v783 = await txn1.getOutput('Borrower_repay', 'v782', ctc7, v782);
  if (v369) {
    stdlib.protect(ctc8, await interact.out(v749, v783), {
      at: './src/contracts/loan_algo_nnt.rsh:104:31:application',
      fs: ['at ./src/contracts/loan_algo_nnt.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:104:31:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:115:55:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:113:50:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:113:50:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:113:50:function exp)'],
      msg: 'out',
      who: 'Borrower_repay'
      });
    }
  else {
    }
  
  const v1462 = v778;
  const v1463 = v750;
  const v1465 = v690;
  const v1466 = v765;
  const v1467 = stdlib.gt(v682, v684);
  const v1468 = stdlib.lt(v778, v530);
  const v1469 = v1467 ? v1468 : false;
  if (v1469) {
    return;
    }
  else {
    const v1472 = v690[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
    const v1473 = v1472[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
    const v1475 = v1468 ? v545 : v519;
    ;
    const v1476 = v1468 ? v519 : v545;
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
  
  
  const [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc2, ctc6, ctc2, ctc4]);
  const v586 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_algo_nnt.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_algo_nnt.rsh:64:39:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:64:39:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_algo_nnt.rsh:64:22:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:51:62:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:51:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v590 = ['Lender_lend0_93', v586];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v522, v529, v530, v544, v545, v546, v547, v553, v554, v575, v590],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v529, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v596], secs: v598, time: v597, didSend: v158, from: v595 } = txn1;
      
      switch (v596[0]) {
        case 'Borrower_close0_93': {
          const v599 = v596[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v624 = v596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          const v632 = stdlib.add(v554, v529);
          sim_r.txns.push({
            amt: v529,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v642 = true;
          const v643 = await txn1.getOutput('Lender_lend', 'v642', ctc4, v642);
          
          const v1550 = v595;
          const v1552 = v597;
          const v1560 = true;
          const v1561 = stdlib.sub(v632, v632);
          sim_r.txns.push({
            kind: 'from',
            to: v519,
            tok: undefined /* Nothing */
            });
          const v1562 = v522.maturation;
          const v1563 = stdlib.safeAdd(v547, v1562);
          const v1606 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
          const v1607 = v597;
          const v1609 = v553;
          const v1610 = v1561;
          const v1611 = stdlib.gt(v1563, v547);
          const v1612 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
          const v1613 = v1611 ? v1612 : false;
          if (v1613) {
            const v1614 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
            sim_r.isHalt = false;
            }
          else {
            const v1616 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v1617 = v1616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
            const v1619 = v1612 ? v595 : v519;
            sim_r.txns.push({
              kind: 'from',
              to: v1619,
              tok: v520
              });
            const v1620 = v1612 ? v519 : v595;
            sim_r.txns.push({
              kind: 'from',
              to: v1620,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v520
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
  const {data: [v596], secs: v598, time: v597, didSend: v158, from: v595 } = txn1;
  switch (v596[0]) {
    case 'Borrower_close0_93': {
      const v599 = v596[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v624 = v596[1];
      undefined /* setApiDetails */;
      const v632 = stdlib.add(v554, v529);
      ;
      const v642 = true;
      const v643 = await txn1.getOutput('Lender_lend', 'v642', ctc4, v642);
      if (v158) {
        stdlib.protect(ctc9, await interact.out(v624, v643), {
          at: './src/contracts/loan_algo_nnt.rsh:64:23:application',
          fs: ['at ./src/contracts/loan_algo_nnt.rsh:64:23:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:64:23:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:68:47:application call to "notify" (defined at: ./src/contracts/loan_algo_nnt.rsh:67:42:function exp)', 'at ./src/contracts/loan_algo_nnt.rsh:67:42:application call to [unknown function] (defined at: ./src/contracts/loan_algo_nnt.rsh:67:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v1550 = v595;
      const v1552 = v597;
      const v1560 = true;
      const v1561 = stdlib.sub(v632, v632);
      ;
      const v1562 = v522.maturation;
      const v1563 = stdlib.safeAdd(v547, v1562);
      const v1606 = stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0');
      const v1607 = v597;
      const v1609 = v553;
      const v1610 = v1561;
      const v1611 = stdlib.gt(v1563, v547);
      const v1612 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
      const v1613 = v1611 ? v1612 : false;
      if (v1613) {
        const v1614 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:89:51:decimal', stdlib.UInt_max, '0'), v530);
        return;
        }
      else {
        const v1616 = v553[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
        const v1617 = v1616[stdlib.checkedBigNumberify('./src/contracts/loan_algo_nnt.rsh:122:33:application', stdlib.UInt_max, '0')];
        const v1619 = v1612 ? v595 : v519;
        ;
        const v1620 = v1612 ? v519 : v595;
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
  appApproval: `ByAWAAEFBCAHKAj2roD0A9fx250HnpLWlQjZ9qi8Bv/xxroCvvOm1wMGaFlQYWmCAaCNBiYDAQEBAAAiNQAxGEEGXipkSSJbNQEhB1s1AjYaABdJQQDYIjUEIzUGSSEIDEAAVEkhCQxAAB9JIQoMQAAOIQoSRCo1/yk0/1BCANMhCRJENhoBQgH5SSELDEAAGSELEkQ0ASQSRClkKGRQSTUDV2EINQdCBe8hCBJEKjX/KDT/UEIAm0khDAxAADlJIQ0MQAAZIQ0SRDQBJBJEKWQoZFBJNQNXigE1B0IFuiEMEkQ0ASQSRClkKGRQSTUDV1AINQdCBaGBj8bFKhJENAFJIQUMQAAUIQUSRClkKGRQSTUDV7MBNQdCBX0kEkQpZChkUEk1A1dYATUHQgVqNhoCFzUENhoDNhoBF0klDEACOUkkDEABOkkhDgxAAMUhDhJEIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEEWzX+Vyg4Nf2BYFs1/CEPWzX7gZIBWzX6V5oRNfmBqwFbNfhJNQU194AEkE9kSTT3ULA09yJVQAAvgAgAAAAAAAACYbAqNQc0/zT+NP00/DT7IjQDV3EgNANXkQEXMgY0+jT5NPhCAtA0/IgE24AJAAAAAAAAAoIBsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPk0+DT8CEICm0gkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJVwAgNf8hEFs1/oAEzJmSXLAyBjT+D0Q0/zEAEkQ0/zQDIQRbNAMhBls0A1cwIDQDIRFbNANXWAEXNP40AyESWzIGNAMhE1s0A1dxETQDIRRbQgMHSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKVwAgNf8hBls1/iEQWzX9IRJbNfxJNQU1+4AEzjxwZjT7ULAyBjT9DEQ0+xc1+jEANP8SRDT6NPwISTX5NP4NSTX4QQAKNPk0/gk190IAAyI19zT6NPcJNfY09ogDxDT4QQAKNPk0/gk19UIAAyI19TT8NPo09QkINfSACAAAAAAAAAMONPQ0/g8WUQcINPQWUDT+FlBQsDT0NP4PFlEHCDT0FlA0/hZQNQc0/zQDIQRbNP40A1cwIDQDIRFbNANXWAEXNP009DIGNAMhE1s0A1dxETQDIRRbNPYIQgIOSSMMQAB/IxJEIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpXACA1/yEEWzX+IQZbNf1XcBE1/IAEmouRdLA0/FcAETX7NP00/ogDEDT/MQASRDT/NP40A1cwODQDgYEBWzQDgYkBWyM0/yIyBjQDIQ9bNPw0+0kiWzT9CBZcAFwAIkIAr0ghFYgCuSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/lcQODX9gARb8vLKNP8WUDT+FlA0/VCwgRGvSTX8SVcAESEHr1wAXAA1+yEViAJssSKyASKyEiWyEDIKshQ0/7IRszT9gTBbNfo0/SEEWzX5NPo0+QxEMQA0/xZQNP4WUDT9UDIGFlA0+1A0+hZQNPkWUClLAVcAf2coSwFXfxJnSCM1ATIGNQJCAb41/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0+xQ0+RBBAD809DT1FlA09lA09xZQNPgWUChQNPpQKVA0/BZQNP5QNP8WUChQKUsBVwB/ZyhLAVd/NWdIIQU1ATIGNQJCAV40+0EAMrEisgE0/7III7IQNPSyB7M09DT1NPg0+jT8NPs0/TT2IQZbCCI0/DT9NP40/0kJQgBDsSKyATT+VwARIluyEiWyEDT0shQ09bIRs7EisgE0/7III7IQNPSyB7OxIrIBIrISJbIQMgmyFTIKshQ09bIRs0IAyTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT7NPYMNfM0+jT9DTTzEEEAUjT7NPYPNfI09DT1FlA09hZQNPdQNPgWUDT5FlEHCFA0+hZQNPsWUDT8FlA0/lA0/xZQNPIWUQcIUClLAVcAf2coSwFXfwxnSCQ1ATIGNQJCAGixIrIBNP5XABEiW7ISJbIQNPQ09zTzTbIUNPWyEbOxIrIBNP+yCCOyEDT3NPQ0802yB7OxIrIBIrISJbIQMgmyFTIKshQ09bIRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"internalType":"struct T11","name":"v1644","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T9","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v609","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v642","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v782","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1635","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1646","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v1660","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v1667","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1674","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002d4338819003601f8101601f191683016001600160401b0381118482101762000509578392829160405283398101039060e082126200060d576080604051926200004d8462000612565b825184526200005f6020840162000667565b602085015260408301516040850152605f1901126200060d5760c060405191620000898362000612565b620000976060820162000667565b83526080810151602084015260a0810151604084015201516060820152606082015243600355600060e0604051620000cf816200062e565b828152826020820152620000e26200067c565b60408201528260608201528260808201528260a08201528260c082015201526040519062000110826200064b565b6200011a6200067c565b8252602082016200012a6200069d565b8152620001366200069d565b604084015260ff60045416620005f4577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001a760608601516080830190620006e4565ba181518015908115620005e7575b5015620005ce57600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620001f4836200064b565b60008352602083015260408201526200020c6200069d565b9160005b600181106200057e5750508152604083015234620005655760608101516020606082015191015111156200054c576060602091604080519462000253866200062e565b600086526000858701526000828701528151620002708162000612565b6000815260008682015260008382015260008582015284870152600060808701526200029b6200069d565b60a0870152600060c0870152600060e087015233865260018060a01b0385840151168587015281830151828701528383015184870152436080870152015160a08501528180820151015160c08501520151015160e08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200033660608201516080840190620006e4565b608081015161010083015260a0810151600061012084015b600182106200051f5760c084015161018086015260e08401516101a0808701919091528552846101c081016001600160401b03811182821017620005095760405280516001600160401b0381116200050957600254600181811c91168015620004fe575b6020821014620004e857601f81116200047e575b50602091601f8211600114620004145791819260009262000408575b50508160011b916000199060031b1c1916176002555b60405161260a9081620007398239f35b015190508280620003e2565b601f19821692600260005260206000209160005b85811062000465575083600195106200044b575b505050811b01600255620003f8565b015160001960f88460031b161c191690558280806200043c565b9192602060018192868501518155019401920162000428565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004dd575b601f0160051c01905b818110620004d05750620003c6565b60008155600101620004c1565b9091508190620004b8565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003b2565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200034e565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b6200058a818362000710565b5162000597828662000710565b52620005a4818562000710565b506000198114620005b85760010162000210565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001b5565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200050957604052565b61010081019081106001600160401b038211176200050957604052565b606081019081106001600160401b038211176200050957604052565b51906001600160a01b03821682036200060d57565b604051906200068b826200064b565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000509576040528260005b828110620006cd57505050565b8290620006d96200067c565b8184015201620006c0565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b906001811015620007225760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101305780631e93b0f11461012757806330dd5d081461011e5780633c4965541461011557806340410cd51461010c5780634cd8755514610103578063573b8510146100fa578063823c0a8d146100f157806383230757146100e857806394134348146100df57806396d6c36b146100d6578063ab53f2c6146100cd578063ea121ca3146100c45763f9d773330361000e576100bf6108f4565b61000e565b506100bf610875565b506100bf610800565b506100bf610781565b506100bf6106d8565b506100bf6106b9565b506100bf61066b565b506100bf610498565b506100bf61042e565b506100bf6103d6565b506100bf610387565b506100bf6101d1565b506100bf6101a1565b503461019c57600036600319011261019c5761014a610baf565b6005600054036101835760a06020916080610174610166610a68565b858082518301019101610d06565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b503461019c57600036600319011261019c576020600354604051908152f35b602090600319011261019c57600490565b5061036b6101f16101e1366101c0565b6101e9610baf565b503690612447565b61020c61020761020360045460ff1690565b1590565b610dc0565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061023c843383612465565b0390a161024d600560005414610de0565b61027c61026a61025b610a68565b60208082518301019101610d06565b9151801590811561037b575b50610e00565b60c081019061028e8251431015610e20565b6102983415610e40565b6102b43360018060a01b036102ad8451610c54565b1614610e60565b6102bc6112a2565b916102d06102ca8351610c54565b84611303565b6102e96102e06020840151610c54565b60208501611303565b6040820151604084015261030c6103036060840151610c54565b60608501611303565b6080820151608084015261032f61032660a0840151151590565b151560a0850152565b5160c083015260e081015160e083015261010043818401528101516101209081840152810151906101409182840152015161016082015261223a565b60405160008152602090f35b0390f35b90506001541438610276565b503461019c57600036600319011261019c576103a1610baf565b6005600054036103bd57608060209160e0610174610166610a68565b60405163100960cb60e01b815260076004820152602490fd5b50600036600319011261019c576020806103ee610baf565b610422816103fa610c13565b8481019060008251525115158582510152610413610c13565b9060008252518582015261170e565b01511515604051908152f35b503461019c57600036600319011261019c57610448610baf565b60056000540361047f5760e06103779161016061046661025b610a68565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b506104a56101e1366101c0565b6104bc6104b761020360045460ff1690565b610e80565b6106556040917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968351806104f1843383612465565b0390a1610502600160005414610ea0565b61064261050d610a68565b9161053761052560209485808251830101910161247f565b9151801590811561065f575b50610ec0565b6105413415610ee0565b8281019261063d60a06105548651610c54565b9361056d6105688a83019687519033612500565b610f00565b61058833600180851b036105818451610c54565b1614610f20565b6105b86105b06105966116b0565b986105aa6105a48551610c54565b8b611303565b51610c54565b858901611303565b60608101518988015260c0810151606088015260e081015160808801526105e182880160019052565b6105f76105ee8251610c54565b60c08901611303565b600060e0880152436101008801526080810151610120880152015191825193845190510193888282015191015115159161062f610b13565b958652850152151587840152565b612580565b6101408201526000610160820152611d48565b5160008152602090f35b90506001541438610531565b50600036600319011261019c5760206060610684610baf565b61042281610690610c13565b8581019060018251525115156040825101526106aa610c13565b9060008252518682015261170e565b503461019c57600036600319011261019c576020600154604051908152f35b503461019c57600036600319011261019c5761037761073460c06106fa610baf565b60005460078110156107465760056107129114610f60565b61072561072c60a061072561025b610a68565b0151151590565b151582840152565b60405190151581529081906020820190565b60076107529114610f40565b61077c610160610772610763610a68565b6020808251830101910161113f565b0151151582840152565b610725565b50608036600319011261019c57610796610baf565b604051906107a3826109cb565b6004358252606036602319011261019c57604051916107c1836109f3565b60243592600284101561019c5761036b9381526044356107e081610c74565b60208201526064356107f181610c74565b6040820152602082015261170e565b503461019c5760008060031936011261087257805461081d610a68565b906040519283918252602090604082840152835191826040850152815b83811061085b57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161083a565b80fd5b50604036600319011261019c5761088a610baf565b60405190610897826109cb565b6004358252602036602319011261019c576108c7916040516108b881610a0e565b60243581526020820152611312565b602060405160008152f35b9190916040806060830194805115158452602081015160208501520151910152565b50602036600319011261019c57610909610b72565b50610377610915610baf565b60408161096d8293835161092881610a0e565b845161093381610a0e565b8082526004359052845190610947826109cb565b600082526020820190865161095b81610a0e565b60008152825260008352519052611312565b01519051918291826108d2565b90600182811c921680156109aa575b602083101461099457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610989565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176109e657604052565b6109ee6109b4565b604052565b606081019081106001600160401b038211176109e657604052565b602081019081106001600160401b038211176109e657604052565b61018081019081106001600160401b038211176109e657604052565b601f909101601f19168101906001600160401b038211908210176109e657604052565b6040519060008260025491610a7c8361097a565b808352600193808516908115610af25750600114610aa4575b50610aa292500383610a45565b565b600260009081526000805160206125de83398151915294602093509091905b818310610ada575050610aa2935082010138610a95565b85548884018501529485019487945091830191610ac3565b9050610aa294506020925060ff191682840152151560051b82010138610a95565b60405190606082016001600160401b038111838210176109e657604052565b6040519061018082016001600160401b038111838210176109e657604052565b6040519061010082016001600160401b038111838210176109e657604052565b60405190606082016001600160401b03811183821017610ba2575b60405260006040838281528260208201520152565b610baa6109b4565b610b8d565b6040519061010082016001600160401b03811183821017610c06575b6040528160e0600091828152826020820152610be5610b72565b60408201528260608201528260808201528260a08201528260c08201520152565b610c0e6109b4565b610bcb565b60405190610c20826109cb565b81600081526020610c2f610b72565b910152565b60021115610c3e57565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b031690565b51906001600160a01b038216820361019c57565b8015150361019c57565b5190610aa282610c74565b9080601f8301121561019c57604091825192610ca484610a0e565b836060938484019381851161019c57915b848310610cc55750505050505090565b858383031261019c5783518691610cdb826109f3565b84518252602091828601518382015286860151610cf781610c74565b87820152815201920191610cb5565b6101c08183031261019c576101a0610db791610d20610b32565b93610d2a82610c60565b8552610d3860208301610c60565b602086015260408201516040860152610d5360608301610c60565b606086015260808201516080860152610d6e60a08301610c7e565b60a086015260c082015160c086015260e082015160e08601526101008083015190860152610da161012091828401610c89565b9085015261018081015161014085015201610c7e565b61016082015290565b15610dc757565b60405163100960cb60e01b8152601c6004820152602490fd5b15610de757565b60405163100960cb60e01b8152601d6004820152602490fd5b15610e0757565b60405163100960cb60e01b8152601e6004820152602490fd5b15610e2757565b60405163100960cb60e01b8152601f6004820152602490fd5b15610e4757565b60405163100960cb60e01b815260206004820152602490fd5b15610e6757565b60405163100960cb60e01b815260216004820152602490fd5b15610e8757565b60405163100960cb60e01b815260106004820152602490fd5b15610ea757565b60405163100960cb60e01b815260116004820152602490fd5b15610ec757565b60405163100960cb60e01b815260126004820152602490fd5b15610ee757565b60405163100960cb60e01b815260136004820152602490fd5b15610f0757565b60405163100960cb60e01b815260146004820152602490fd5b15610f2757565b60405163100960cb60e01b815260156004820152602490fd5b15610f4757565b60405163100960cb60e01b8152600a6004820152602490fd5b15610f6757565b60405163100960cb60e01b815260096004820152602490fd5b15610f8757565b60405163100960cb60e01b815260166004820152602490fd5b15610fa757565b60405163100960cb60e01b815260176004820152602490fd5b15610fc757565b60405163100960cb60e01b815260186004820152602490fd5b15610fe757565b60405163100960cb60e01b815260196004820152602490fd5b1561100757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561102757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561104757565b60405163100960cb60e01b815260226004820152602490fd5b1561106757565b60405163100960cb60e01b815260236004820152602490fd5b1561108757565b602460405163100960cb60e01b8152816004820152fd5b156110a557565b60405163100960cb60e01b815260266004820152602490fd5b156110c557565b60405163100960cb60e01b815260256004820152602490fd5b919082608091031261019c57604051608081016001600160401b03811182821017611132575b604052606080829461111581610c60565b845260208101516020850152604081015160408501520151910152565b61113a6109b4565b611104565b906102208282031261019c57611204610200611159610b32565b9361116381610c60565b855261117160208201610c60565b602086015261118384604083016110de565b604086015260c0810151606086015260e08101516080860152610100936111ab858301610c7e565b60a08701526101206111be818401610c60565b60c08801526111f0610140926111d5848601610c7e565b60e08a01526101609788860151908a01526101808501610c89565b908701526101e08201519086015201610c7e565b9082015290565b6040519060e082016001600160401b03811183821017611256575b60405281600080825280602083015280604083015280606083015280608083015260a082015260c0610c2f610b72565b61125e6109b4565b611226565b6001600160a01b03169052565b6040519061127d82610a0e565b8160005b6020811061128d575050565b602090611298610b72565b8184015201611281565b604051906112af82610a29565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526112f9611270565b6101408201520152565b6001600160a01b039091169052565b9061131b61120b565b9061133361132e61020360045460ff1690565b610f80565b60408051338152845160208083019190915285015151818301529093907f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc090606090a1611384600560005414610fa0565b61138c610a68565b926113a1602094858082518301019101610d06565b916113b7815180159081156115bc575b50610fc0565b8460c08401916113c983514310610fe0565b6113e56113de6113d98751610c54565b610c54565b3314611000565b0195865151946113fb60e08601968751906115df565b908185528280870192835110976114178a8801998a9015159052565b8851156115b15761142b8751855190611601565b828801525b8a51518288015161144091611601565b986060880199808b52341461145490611020565b5115156000149a61148c61149292610aa29d6115a5576114778a51885190611601565b60808b01525b5191515160808a015190611601565b906115df565b956114b060c060a0830198808a528651111592019182519015159052565b86518a82510152835182825101527ff039adb882754b3f6ab2db6abf09be8d225d01049e34a7f26b40ef3fc44230826114ef82518451918291826108d2565b0390a1519101526115296115016112a2565b9761151561150f8851610c54565b8a611303565b61152181880151610c54565b908901611303565b519086015261154761153e6060850151610c54565b60608701611303565b6080830151608086015261156a61156160a0850151151590565b151560a0870152565b5160c08501525160e084015261010043818501528101516101209081850152810151906101409182850152015190510161016082015261223a565b600060808b015261147d565b600082880152611430565b905060015414386113b1565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116115f4575b821061019c57565b6115fc6115c8565b6115ec565b90810390811161160e5790565b6116166115c8565b90565b90929160209060a083019460018060a01b03168352805182840152015180516002811015610c3e576080916040918285015260208101511515606085015201511515910152565b516002811015610c3e5790565b60405190608082016001600160401b038111838210176116a3575b60405260006060838281528260208201528260408201520152565b6116ab6109b4565b611688565b604051906116bd82610a29565b816101606000918281528260208201526116d561166d565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201526112f9611270565b6117879061172961172461020360045460ff1690565b611040565b6040927f56431f322734a4d544cd5793f2c620cf62c31de190c5350d0b4265ff121a434784518061175b853383611619565b0390a161176c600760005414611060565b611774610a68565b602093818580809451830101910161113f565b9261179d815180159081156119c2575b50611080565b016117a88151611660565b6117b181610c34565b6118aa575092600083610aa2956117c834156110be565b8351600081527f1deacf8e55870875978010fcb9993ab536f13df312434eba184a3ecd873c266590602090a101526118296118016116b0565b9361181561180f8551610c54565b86611303565b61182181850151610c54565b908501611303565b80820151908301526060810151606083015260808101516080830152600060a083015261186561185c60c0830151610c54565b60c08401611303565b61187e61187560e0830151151590565b151560e0840152565b610100438184015281015161012090818401528101519061014091828401520151610160820152611d48565b6118b960019193929351611660565b6118c281610c34565b146118ce575b50505050565b6119b99361191a6060808401946118e78651341461109e565b8351600181527f8802c552f461df9c36375dbba6b80f2ddaf4cc41ea76ee41932e88da3e96a41590602090a10160019052565b61194d6119256116b0565b946119396119338551610c54565b87611303565b61194581850151610c54565b908601611303565b8082015190840152815160608401526080810151608084015261197661032660a0830151151590565b6119833360c08501611303565b600160e0840152610100438185015281015161012090818501528101519061014091828501520151905101610160820152611d48565b388080806118c8565b90506001541438611797565b9060018110156119df5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110611a0d575050565b60008155600101611a02565b611a2460025461097a565b80611a2c5750565b601f8111600114611a3f57506000600255565b6002600052611a8490601f0160051c6000805160206125de833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611a02565b6000602081208160025555565b60405190611a9e82610a29565b81610160600091828152826020820152611ab661166d565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611ae8611270565b610120820152826101408201520152565b6000915b60018310611b0a57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611afd565b610aa290929192610200610220820194611b54838251611263565b611b6660208201516020850190611263565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611bc4610100928386019015159052565b60c081015191611bda6101209384870190611263565b611c0e60e083015191611bf4610140938489019015159052565b830151936101609485880152830151610180870190611af9565b8101516101e085015201511515910152565b90601f8211611c2d575050565b610aa29160026000526020600020906020601f840160051c83019310611c5b575b601f0160051c0190611a02565b9091508190611c4e565b80519091906001600160401b038111611d3b575b611c8d81611c8860025461097a565b611c20565b602080601f8311600114611cc95750819293600092611cbe575b50508160011b916000199060031b1c191617600255565b015190503880611ca7565b6002600052601f198316949091906000805160206125de833981519152926000905b878210611d23575050836001959610611d0a575b505050811b01600255565b015160001960f88460031b161c19169055388080611cff565b80600185968294968601518155019501930190611ceb565b611d436109b4565b611c79565b60e08101805115158015611fc35760005b15611e3e575050611e2b611e39610aa292611e09611d75611a91565b91611d836102ca8251610c54565b611d936102e06020830151610c54565b604081015160408401526060810151606084015260808101516080840152611dbe60a0840160019052565b611dd7611dce60c0830151610c54565b60c08501611303565b600060e08401526101008082015190840152610140808201516101208501526101608092015190840152820160019052565b611e136007600055565b611e1c43600155565b60405192839160208301611b39565b03601f198101835282610a45565b611c65565b15611f3957600082611e566113d9610aa29551610c54565b9082808080610160958686015190828215611f30575bf115611f23575b611e7b6112a2565b93611e8961180f8351610c54565b611ea2611e996020840151610c54565b60208701611303565b60808201516040860152611ebc61153e60c0840151610c54565b61010090611ee0611ed783850192835160808a015251151590565b151560a0880152565b6101209182840191611efb83516040808801510151906115df565b60c08901528660e089015251908701525190850152610140809101519084015282015261223a565b611f2b6119f5565b611e73565b506108fc611e6c565b506000808083611f74611f50602084970151610c54565b611f5a8351610c54565b6101408401515151916001600160a01b0390911690611fcf565b610160611f846113d98351610c54565b91015190828215611fba575bf115611fad575b60008055611fa56000600155565b610aa2611a19565b611fb56119f5565b611f97565b506108fc611f90565b60a08301511515611d59565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261204b93600093849392849190608081016001600160401b03811182821017612052575b6040525193165af161203b61203461205f565b80926120c1565b50602080825183010191016120ac565b1561019c57565b61205a6109b4565b612021565b3d156120a7573d906001600160401b03821161209a575b6040519161208e601f8201601f191660200184610a45565b82523d6000602084013e565b6120a26109b4565b612076565b606090565b9081602091031261019c575161161681610c74565b156120c95790565b8051156120d857805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156120f95790565b80511561210857805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6040519061212e826109cb565b60006020838281520152565b6040519061214782610a29565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611ae8611270565b610aa2909291926101a06101606101c08301956121a8848251611263565b6121ba60208201516020860190611263565b604081015160408501526121d660608201516060860190611263565b608081015160808501526121f360a082015160a086019015159052565b60c081015160c085015260e081015160e085015261010080820151908501526122256101208083015190860190611af9565b61014081015161018085015201511515910152565b612242612121565b60e08201805160408401805191909111835291929060c08201908151916101209283850151106000906000146124425750855115155b15612377579261234d610aa296611e2b969484611e39976122a8602061235598518a511115950194859015159052565b6122b061213a565b976122be61150f8851610c54565b6122d76122ce6020890151610c54565b60208b01611303565b5160408901526122f66122ed6060880151610c54565b60608a01611303565b6080860151608089015261231961231060a0880151151590565b151560a08a0152565b5160c08801525160e08701526101008085015190870152610140908185015190870152610160809401519086015251151590565b151590830152565b61235f6005600055565b61236843600155565b6040519283916020830161218a565b50505060008093819350826123d8612393602085960151610c54565b9261239e8151151590565b851461242f576123d26123b46060850151610c54565b945b61014085015151516001600160a01b0396909190871690611fcf565b51151590565b8314612419576101606123eb8251610c54565b915b0151918391831561240f575b1690f115611fad5760008055611fa56000600155565b6108fc92506123f9565b6101606124296060830151610c54565b916123ed565b6123d261243c8451610c54565b946123b6565b612278565b919082602091031261019c5760405161245f81610a0e565b91358252565b6001600160a01b0390911681529051602082015260400190565b6101a08183031261019c57610180906124e6612499610b52565b936124a383610c60565b85526124b160208401610c60565b6020860152604083015160408601526124cd81606085016110de565b606086015260e083015160808601526101008301610c89565b60a084015261016081015160c0840152015160e082015290565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152606480830195909552938152611616936000938493909284919060a081016001600160401b03811182821017612573575b6040525193165af161203b61256c61205f565b80926120f1565b61257b6109b4565b612559565b919061258a611270565b9260005b6001811061259c5750508252565b806125a9600192846119ce565b516125b482886119ce565b526125bf81876119ce565b5060001981146125d0575b0161258e565b6125d86115c8565b6125ca56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 11587,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/loan_algo_nnt.rsh:47:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/loan_algo_nnt.rsh:127:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/loan_algo_nnt.rsh:89:50:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/loan_algo_nnt.rsh:81:17:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/loan_algo_nnt.rsh:51:62:after expr stmt semicolon',
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
