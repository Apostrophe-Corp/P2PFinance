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
      const [v681, v682, v683, v684, v689, v691, v692] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = svs;
      return (await ((async () => {
        
        
        return v897;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_beginBlock = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v681, v682, v683, v684, v689, v691, v692] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = svs;
      return (await ((async () => {
        
        
        return v705;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_isLive = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v681, v682, v683, v684, v689, v691, v692] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = svs;
      return (await ((async () => {
        
        
        return v871;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = svs;
      return (await ((async () => {
        
        
        return v733;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const LoanViews_loanPaid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v681, v682, v683, v684, v689, v691, v692] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = svs;
      return (await ((async () => {
        
        
        return v927;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = svs;
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
      1: [ctc0, ctc1, ctc2, ctc3, ctc6, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc4, ctc2, ctc2, ctc6, ctc2, ctc4],
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
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc9,
    Lender_claim0_270: ctc6
    });
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v659 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v660 = [v659];
  const v666 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './src/contracts/loan_nnt_algo.rsh:43:43:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: 'getParams',
    who: 'B'
    });
  const v667 = v666.address;
  const v668 = v666.amount;
  const v669 = v666.collateral;
  const v670 = v666.maturation;
  const v671 = v666.principal;
  const v672 = v666.tokLoan;
  const v679 = stdlib.lt(v671, v668);
  stdlib.assert(v679, {
    at: './src/contracts/loan_nnt_algo.rsh:45:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:41:15:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:41:19:function exp)'],
    msg: null,
    who: 'B'
    });
  
  const v680 = {
    address: v667,
    amount: v668,
    maturation: v670,
    principal: v671
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v672, v669, v680],
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
      
      
      const {data: [v682, v683, v684], secs: v686, time: v685, didSend: v43, from: v681 } = txn1;
      
      const v687 = v660[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
      const v688 = stdlib.Array_set(v687, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
      const v689 = stdlib.Array_set(v660, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v688);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v682
        });
      ;
      const v691 = v684.principal;
      const v692 = v684.amount;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v682, v683, v684], secs: v686, time: v685, didSend: v43, from: v681 } = txn1;
  const v687 = v660[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0')];
  const v688 = stdlib.Array_set(v687, '0', stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'));
  const v689 = stdlib.Array_set(v660, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:47:11:dot', stdlib.UInt_max, '0'), v688);
  ;
  ;
  const v691 = v684.principal;
  const v692 = v684.amount;
  const v693 = stdlib.lt(v691, v692);
  stdlib.assert(v693, {
    at: './src/contracts/loan_nnt_algo.rsh:48:16:application',
    fs: [],
    msg: null,
    who: 'B'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v681, v682, v683, v684, v689, v691, v692],
    evt_cnt: 0,
    funcNum: 1,
    lct: v685,
    onlyIf: true,
    out_tys: [],
    pay: [v683, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v696, time: v695, didSend: v53, from: v694 } = txn2;
      
      sim_r.txns.push({
        amt: v683,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v702 = true;
      const v703 = v681;
      const v704 = false;
      const v705 = v695;
      const v711 = v689;
      const v712 = v683;
      
      if (await (async () => {
        const v727 = v704 ? false : v702;
        
        return v727;})()) {
        const v732 = v704 ? false : v702;
        const v733 = v732 ? true : v704;
        sim_r.isHalt = false;
        }
      else {
        const v870 = v704 ? false : v702;
        const v871 = v870 ? true : v704;
        if (v704) {
          const v883 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v884 = v883[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v890 = stdlib.sub(v884, v884);
          const v892 = stdlib.Array_set(v883, '0', v890);
          const v893 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v892);
          sim_r.txns.push({
            kind: 'from',
            to: v681,
            tok: v682
            });
          const v895 = v684.maturation;
          const v896 = stdlib.safeAdd(v705, v895);
          const v897 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v898 = v705;
          const v904 = v893;
          const v905 = v712;
          
          if (await (async () => {
            const v922 = stdlib.lt(v898, v896);
            const v924 = stdlib.lt(v897, v692);
            const v925 = v922 ? v924 : false;
            
            return v925;})()) {
            const v927 = stdlib.ge(v897, v692);
            sim_r.isHalt = false;
            }
          else {
            const v1275 = stdlib.lt(v897, v692);
            const v1276 = v1275 ? v703 : v681;
            sim_r.txns.push({
              kind: 'from',
              to: v1276,
              tok: undefined /* Nothing */
              });
            const v1281 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v1282 = v1281[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v1285 = v1275 ? v681 : v703;
            sim_r.txns.push({
              kind: 'from',
              to: v1285,
              tok: v682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v682
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
            to: v681,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v682
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
    tys: [ctc0, ctc2, ctc1, ctc4, ctc13, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v696, time: v695, didSend: v53, from: v694 } = txn2;
  ;
  const v699 = stdlib.addressEq(v681, v694);
  stdlib.assert(v699, {
    at: './src/contracts/loan_nnt_algo.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
    });
  stdlib.protect(ctc5, await interact.created(v695), {
    at: './src/contracts/loan_nnt_algo.rsh:51:27:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:51:27:application call to "liftedInteract" (defined at: ./src/contracts/loan_nnt_algo.rsh:51:27:application)'],
    msg: 'created',
    who: 'B'
    });
  
  let v702 = true;
  let v703 = v681;
  let v704 = false;
  let v705 = v695;
  let v711 = v689;
  let v712 = v683;
  
  let txn3 = txn2;
  while (await (async () => {
    const v727 = v704 ? false : v702;
    
    return v727;})()) {
    const v732 = v704 ? false : v702;
    const v733 = v732 ? true : v704;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v770], secs: v772, time: v771, didSend: v196, from: v769 } = txn4;
    switch (v770[0]) {
      case 'Borrower_close0_93': {
        const v773 = v770[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v806 = null;
        await txn4.getOutput('Borrower_close', 'v806', ctc5, v806);
        const cv702 = false;
        const cv703 = v703;
        const cv704 = v704;
        const cv705 = v771;
        const cv711 = v711;
        const cv712 = v712;
        
        v702 = cv702;
        v703 = cv703;
        v704 = cv704;
        v705 = cv705;
        v711 = cv711;
        v712 = cv712;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Lender_lend0_93': {
        const v821 = v770[1];
        undefined /* setApiDetails */;
        ;
        const v847 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
        const v849 = stdlib.add(v848, v691);
        const v851 = stdlib.Array_set(v847, '0', v849);
        const v852 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v851);
        ;
        const v862 = true;
        await txn4.getOutput('Lender_lend', 'v862', ctc8, v862);
        const cv702 = v702;
        const cv703 = v769;
        const cv704 = true;
        const cv705 = v771;
        const cv711 = v852;
        const cv712 = v712;
        
        v702 = cv702;
        v703 = cv703;
        v704 = cv704;
        v705 = cv705;
        v711 = cv711;
        v712 = cv712;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v870 = v704 ? false : v702;
  const v871 = v870 ? true : v704;
  if (v704) {
    const v883 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v884 = v883[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
    const v890 = stdlib.sub(v884, v884);
    const v892 = stdlib.Array_set(v883, '0', v890);
    const v893 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v892);
    ;
    const v895 = v684.maturation;
    const v896 = stdlib.safeAdd(v705, v895);
    let v897 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
    let v898 = v705;
    let v904 = v893;
    let v905 = v712;
    
    let txn4 = txn3;
    while (await (async () => {
      const v922 = stdlib.lt(v898, v896);
      const v924 = stdlib.lt(v897, v692);
      const v925 = v922 ? v924 : false;
      
      return v925;})()) {
      const v927 = stdlib.ge(v897, v692);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn5;
      switch (v1004[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1007 = v1004[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1055 = null;
          await txn5.getOutput('Borrower_claimRefund', 'v1055', ctc5, v1055);
          const cv897 = v897;
          const cv898 = v1005;
          const cv904 = v904;
          const cv905 = v905;
          
          v897 = cv897;
          v898 = cv898;
          v904 = cv904;
          v905 = cv905;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Borrower_repay0_270': {
          const v1095 = v1004[1];
          undefined /* setApiDetails */;
          const v1105 = v1095[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
          const v1106 = stdlib.addressEq(v1003, v681);
          stdlib.assert(v1106, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
            msg: 'You are not the Borrower',
            who: 'B'
            });
          const v1108 = stdlib.safeAdd(v1105, v897);
          const v1110 = stdlib.gt(v1108, v692);
          let v1111;
          if (v1110) {
            const v1114 = stdlib.safeSub(v1108, v692);
            v1111 = v1114;
            }
          else {
            v1111 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1115 = stdlib.safeSub(v1105, v1111);
          ;
          const v1136 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1137 = v1136[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1138 = stdlib.add(v1137, v1115);
          const v1140 = stdlib.Array_set(v1136, '0', v1138);
          const v1141 = stdlib.Array_set(v904, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1140);
          ;
          let v1156;
          if (v1110) {
            const v1159 = stdlib.safeSub(v1108, v692);
            v1156 = v1159;
            }
          else {
            v1156 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1160 = stdlib.safeSub(v1105, v1156);
          const v1162 = stdlib.safeAdd(v897, v1160);
          const v1164 = stdlib.ge(v1162, v692);
          const v1166 = [v1164, v1162, v692];
          await txn5.getOutput('Borrower_repay', 'v1166', ctc11, v1166);
          const cv897 = v1162;
          const cv898 = v1005;
          const cv904 = v1141;
          const cv905 = v905;
          
          v897 = cv897;
          v898 = cv898;
          v904 = cv904;
          v905 = cv905;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Lender_claim0_270': {
          const v1183 = v1004[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v1265 = null;
          await txn5.getOutput('Lender_claim', 'v1265', ctc5, v1265);
          const cv897 = v897;
          const cv898 = v1005;
          const cv904 = v904;
          const cv905 = v905;
          
          v897 = cv897;
          v898 = cv898;
          v904 = cv904;
          v905 = cv905;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    const v1275 = stdlib.lt(v897, v692);
    const v1276 = v1275 ? v703 : v681;
    ;
    const v1281 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
    const v1282 = v1281[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
    const v1285 = v1275 ? v681 : v703;
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
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc7,
    Lender_claim0_270: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v930 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:117:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_claimRefund0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:117:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_claimRefund'
    });
  const v934 = ['Borrower_claimRefund0_270', v930];
  
  const txn1 = await (ctc.sendrecv({
    args: [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927, v934],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:117:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
      
      switch (v1004[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1007 = v1004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_claimRefund"
            });
          ;
          ;
          const v1055 = null;
          const v1056 = await txn1.getOutput('Borrower_claimRefund', 'v1055', ctc9, v1055);
          
          const v2314 = v897;
          const v2316 = v904;
          const v2317 = v905;
          const v2318 = stdlib.lt(v1005, v896);
          const v2319 = stdlib.lt(v897, v692);
          const v2320 = v2318 ? v2319 : false;
          if (v2320) {
            const v2321 = stdlib.ge(v897, v692);
            sim_r.isHalt = false;
            }
          else {
            const v2324 = v2319 ? v703 : v681;
            sim_r.txns.push({
              kind: 'from',
              to: v2324,
              tok: undefined /* Nothing */
              });
            const v2325 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2326 = v2325[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2327 = v2319 ? v681 : v703;
            sim_r.txns.push({
              kind: 'from',
              to: v2327,
              tok: v682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v682
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Borrower_repay0_270': {
          const v1095 = v1004[1];
          
          break;
          }
        case 'Lender_claim0_270': {
          const v1183 = v1004[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
  switch (v1004[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1007 = v1004[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1055 = null;
      const v1056 = await txn1.getOutput('Borrower_claimRefund', 'v1055', ctc9, v1055);
      if (v514) {
        stdlib.protect(ctc9, await interact.out(v1007, v1056), {
          at: './src/contracts/loan_nnt_algo.rsh:117:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:117:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:118:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:117:58:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:117:58:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:117:58:function exp)'],
          msg: 'out',
          who: 'Borrower_claimRefund'
          });
        }
      else {
        }
      
      const v2314 = v897;
      const v2316 = v904;
      const v2317 = v905;
      const v2318 = stdlib.lt(v1005, v896);
      const v2319 = stdlib.lt(v897, v692);
      const v2320 = v2318 ? v2319 : false;
      if (v2320) {
        const v2321 = stdlib.ge(v897, v692);
        return;
        }
      else {
        const v2324 = v2319 ? v703 : v681;
        ;
        const v2325 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2326 = v2325[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2327 = v2319 ? v681 : v703;
        ;
        return;
        }
      break;
      }
    case 'Borrower_repay0_270': {
      const v1095 = v1004[1];
      return;
      break;
      }
    case 'Lender_claim0_270': {
      const v1183 = v1004[1];
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
  
  
  const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v736 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:21:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runBorrower_close0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:21:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Borrower_close'
    });
  const v740 = ['Borrower_close0_93', v736];
  
  const txn1 = await (ctc.sendrecv({
    args: [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733, v740],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:74:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:62:26:decimal', stdlib.UInt_max, '0'), v682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v770], secs: v772, time: v771, didSend: v196, from: v769 } = txn1;
      
      switch (v770[0]) {
        case 'Borrower_close0_93': {
          const v773 = v770[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_close"
            });
          ;
          ;
          const v806 = null;
          const v807 = await txn1.getOutput('Borrower_close', 'v806', ctc9, v806);
          
          const v2356 = false;
          const v2357 = v703;
          const v2358 = v704;
          const v2359 = v771;
          const v2360 = v711;
          const v2361 = v712;
          const v2362 = v704 ? false : false;
          if (v2362) {
            const v2364 = true;
            sim_r.isHalt = false;
            }
          else {
            const v2366 = v704;
            if (v704) {
              const v2367 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2368 = v2367[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
              const v2369 = stdlib.sub(v2368, v2368);
              const v2370 = stdlib.Array_set(v2367, '0', v2369);
              const v2371 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2370);
              sim_r.txns.push({
                kind: 'from',
                to: v681,
                tok: v682
                });
              const v2372 = v684.maturation;
              const v2373 = stdlib.safeAdd(v771, v2372);
              const v2419 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
              const v2421 = v2371;
              const v2422 = v712;
              const v2423 = stdlib.lt(v771, v2373);
              const v2424 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
              const v2425 = v2423 ? v2424 : false;
              if (v2425) {
                const v2426 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
                sim_r.isHalt = false;
                }
              else {
                const v2429 = v2424 ? v703 : v681;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2429,
                  tok: undefined /* Nothing */
                  });
                const v2430 = v2371[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
                const v2431 = v2430[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
                const v2432 = v2424 ? v681 : v703;
                sim_r.txns.push({
                  kind: 'from',
                  to: v2432,
                  tok: v682
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v682
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
                to: v681,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v682
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
          const v821 = v770[1];
          
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
  const {data: [v770], secs: v772, time: v771, didSend: v196, from: v769 } = txn1;
  switch (v770[0]) {
    case 'Borrower_close0_93': {
      const v773 = v770[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v806 = null;
      const v807 = await txn1.getOutput('Borrower_close', 'v806', ctc9, v806);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v773, v807), {
          at: './src/contracts/loan_nnt_algo.rsh:74:22:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:74:22:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:75:28:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:74:44:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:74:44:function exp)'],
          msg: 'out',
          who: 'Borrower_close'
          });
        }
      else {
        }
      
      const v2356 = false;
      const v2357 = v703;
      const v2358 = v704;
      const v2359 = v771;
      const v2360 = v711;
      const v2361 = v712;
      const v2362 = v704 ? false : false;
      if (v2362) {
        const v2364 = true;
        return;
        }
      else {
        const v2366 = v704;
        if (v704) {
          const v2367 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2368 = v2367[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2369 = stdlib.sub(v2368, v2368);
          const v2370 = stdlib.Array_set(v2367, '0', v2369);
          const v2371 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2370);
          ;
          const v2372 = v684.maturation;
          const v2373 = stdlib.safeAdd(v771, v2372);
          const v2419 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2421 = v2371;
          const v2422 = v712;
          const v2423 = stdlib.lt(v771, v2373);
          const v2424 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
          const v2425 = v2423 ? v2424 : false;
          if (v2425) {
            const v2426 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
            return;
            }
          else {
            const v2429 = v2424 ? v703 : v681;
            ;
            const v2430 = v2371[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2431 = v2430[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2432 = v2424 ? v681 : v703;
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
      const v821 = v770[1];
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
    Borrower_claimRefund0_270: ctc7,
    Borrower_repay0_270: ctc6,
    Lender_claim0_270: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc2, ctc2]);
  const ctc10 = stdlib.T_Null;
  
  
  const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v944 = ctc.selfAddress();
  const v946 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Borrower_repay'
    });
  const v947 = v946[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v949 = stdlib.addressEq(v944, v681);
  stdlib.assert(v949, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runBorrower_repay0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:101:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'You are not the Borrower',
    who: 'Borrower_repay'
    });
  const v951 = stdlib.safeAdd(v947, v897);
  const v953 = stdlib.gt(v951, v692);
  const v964 = ['Borrower_repay0_270', v946];
  
  let v981;
  if (v953) {
    const v984 = stdlib.safeSub(v951, v692);
    v981 = v984;
    }
  else {
    v981 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
    }
  const v985 = stdlib.safeSub(v947, v981);
  
  const txn1 = await (ctc.sendrecv({
    args: [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927, v964],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:109:42:decimal', stdlib.UInt_max, '0'), [[v985, v682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
      
      switch (v1004[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1007 = v1004[1];
          
          break;
          }
        case 'Borrower_repay0_270': {
          const v1095 = v1004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Borrower_repay"
            });
          const v1105 = v1095[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
          const v1108 = stdlib.safeAdd(v1105, v897);
          const v1110 = stdlib.gt(v1108, v692);
          let v1111;
          if (v1110) {
            const v1114 = stdlib.safeSub(v1108, v692);
            v1111 = v1114;
            }
          else {
            v1111 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1115 = stdlib.safeSub(v1105, v1111);
          ;
          const v1136 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1137 = v1136[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
          const v1138 = stdlib.add(v1137, v1115);
          const v1140 = stdlib.Array_set(v1136, '0', v1138);
          const v1141 = stdlib.Array_set(v904, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1140);
          sim_r.txns.push({
            amt: v1115,
            kind: 'to',
            tok: v682
            });
          let v1156;
          if (v1110) {
            const v1159 = stdlib.safeSub(v1108, v692);
            v1156 = v1159;
            }
          else {
            v1156 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
            }
          const v1160 = stdlib.safeSub(v1105, v1156);
          const v1162 = stdlib.safeAdd(v897, v1160);
          const v1164 = stdlib.ge(v1162, v692);
          const v1166 = [v1164, v1162, v692];
          const v1167 = await txn1.getOutput('Borrower_repay', 'v1166', ctc9, v1166);
          
          const v2524 = v1162;
          const v2526 = v1141;
          const v2527 = v905;
          const v2528 = stdlib.lt(v1005, v896);
          const v2529 = stdlib.lt(v1162, v692);
          const v2530 = v2528 ? v2529 : false;
          if (v2530) {
            sim_r.isHalt = false;
            }
          else {
            const v2534 = v2529 ? v703 : v681;
            sim_r.txns.push({
              kind: 'from',
              to: v2534,
              tok: undefined /* Nothing */
              });
            const v2535 = v1141[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2536 = v2535[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2537 = v2529 ? v681 : v703;
            sim_r.txns.push({
              kind: 'from',
              to: v2537,
              tok: v682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v682
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Lender_claim0_270': {
          const v1183 = v1004[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
  switch (v1004[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1007 = v1004[1];
      return;
      break;
      }
    case 'Borrower_repay0_270': {
      const v1095 = v1004[1];
      undefined /* setApiDetails */;
      const v1105 = v1095[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:101:30:spread', stdlib.UInt_max, '0')];
      const v1106 = stdlib.addressEq(v1003, v681);
      stdlib.assert(v1106, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)'],
        msg: 'You are not the Borrower',
        who: 'Borrower_repay'
        });
      const v1108 = stdlib.safeAdd(v1105, v897);
      const v1110 = stdlib.gt(v1108, v692);
      let v1111;
      if (v1110) {
        const v1114 = stdlib.safeSub(v1108, v692);
        v1111 = v1114;
        }
      else {
        v1111 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v1115 = stdlib.safeSub(v1105, v1111);
      ;
      const v1136 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1137 = v1136[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0')];
      const v1138 = stdlib.add(v1137, v1115);
      const v1140 = stdlib.Array_set(v1136, '0', v1138);
      const v1141 = stdlib.Array_set(v904, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:50:dot', stdlib.UInt_max, '0'), v1140);
      ;
      let v1156;
      if (v1110) {
        const v1159 = stdlib.safeSub(v1108, v692);
        v1156 = v1159;
        }
      else {
        v1156 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:106:51:decimal', stdlib.UInt_max, '0');
        }
      const v1160 = stdlib.safeSub(v1105, v1156);
      const v1162 = stdlib.safeAdd(v897, v1160);
      const v1164 = stdlib.ge(v1162, v692);
      const v1166 = [v1164, v1162, v692];
      const v1167 = await txn1.getOutput('Borrower_repay', 'v1166', ctc9, v1166);
      if (v514) {
        stdlib.protect(ctc10, await interact.out(v1095, v1167), {
          at: './src/contracts/loan_nnt_algo.rsh:101:31:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:101:31:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:31:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:112:55:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:110:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:110:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:110:50:function exp)'],
          msg: 'out',
          who: 'Borrower_repay'
          });
        }
      else {
        }
      
      const v2524 = v1162;
      const v2526 = v1141;
      const v2527 = v905;
      const v2528 = stdlib.lt(v1005, v896);
      const v2529 = stdlib.lt(v1162, v692);
      const v2530 = v2528 ? v2529 : false;
      if (v2530) {
        return;
        }
      else {
        const v2534 = v2529 ? v703 : v681;
        ;
        const v2535 = v1141[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2536 = v2535[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2537 = v2529 ? v681 : v703;
        ;
        return;
        }
      break;
      }
    case 'Lender_claim0_270': {
      const v1183 = v1004[1];
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
    Borrower_claimRefund0_270: ctc6,
    Borrower_repay0_270: ctc7,
    Lender_claim0_270: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3]);
  const v938 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:121:29:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to "runLender_claim0_270" (defined at: ./src/contracts/loan_nnt_algo.rsh:121:29:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp)'],
    msg: 'in',
    who: 'Lender_claim'
    });
  const v942 = ['Lender_claim0_270', v938];
  
  const txn1 = await (ctc.sendrecv({
    args: [v681, v682, v692, v703, v705, v871, v896, v897, v904, v905, v927, v942],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:121:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:99:34:decimal', stdlib.UInt_max, '0'), v682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
      
      switch (v1004[0]) {
        case 'Borrower_claimRefund0_270': {
          const v1007 = v1004[1];
          
          break;
          }
        case 'Borrower_repay0_270': {
          const v1095 = v1004[1];
          
          break;
          }
        case 'Lender_claim0_270': {
          const v1183 = v1004[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_claim"
            });
          ;
          ;
          const v1265 = null;
          const v1266 = await txn1.getOutput('Lender_claim', 'v1265', ctc9, v1265);
          
          const v2580 = v897;
          const v2582 = v904;
          const v2583 = v905;
          const v2584 = stdlib.lt(v1005, v896);
          const v2585 = stdlib.lt(v897, v692);
          const v2586 = v2584 ? v2585 : false;
          if (v2586) {
            const v2587 = stdlib.ge(v897, v692);
            sim_r.isHalt = false;
            }
          else {
            const v2590 = v2585 ? v703 : v681;
            sim_r.txns.push({
              kind: 'from',
              to: v2590,
              tok: undefined /* Nothing */
              });
            const v2591 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2592 = v2591[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2593 = v2585 ? v681 : v703;
            sim_r.txns.push({
              kind: 'from',
              to: v2593,
              tok: v682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v682
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1004], secs: v1006, time: v1005, didSend: v514, from: v1003 } = txn1;
  switch (v1004[0]) {
    case 'Borrower_claimRefund0_270': {
      const v1007 = v1004[1];
      return;
      break;
      }
    case 'Borrower_repay0_270': {
      const v1095 = v1004[1];
      return;
      break;
      }
    case 'Lender_claim0_270': {
      const v1183 = v1004[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1265 = null;
      const v1266 = await txn1.getOutput('Lender_claim', 'v1265', ctc9, v1265);
      if (v514) {
        stdlib.protect(ctc9, await interact.out(v1183, v1266), {
          at: './src/contracts/loan_nnt_algo.rsh:121:30:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:121:30:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:30:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:122:36:application call to "ret" (defined at: ./src/contracts/loan_nnt_algo.rsh:121:50:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:121:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:121:50:function exp)'],
          msg: 'out',
          who: 'Lender_claim'
          });
        }
      else {
        }
      
      const v2580 = v897;
      const v2582 = v904;
      const v2583 = v905;
      const v2584 = stdlib.lt(v1005, v896);
      const v2585 = stdlib.lt(v897, v692);
      const v2586 = v2584 ? v2585 : false;
      if (v2586) {
        const v2587 = stdlib.ge(v897, v692);
        return;
        }
      else {
        const v2590 = v2585 ? v703 : v681;
        ;
        const v2591 = v904[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2592 = v2591[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2593 = v2585 ? v681 : v703;
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
  
  
  const [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc3, ctc2, ctc2, ctc4, ctc0, ctc4, ctc6, ctc2, ctc4]);
  const v744 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/loan_nnt_algo.rsh:1:23:application',
    fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:39:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:39:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to "runLender_lend0_93" (defined at: ./src/contracts/loan_nnt_algo.rsh:64:22:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:53:62:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:53:62:function exp)'],
    msg: 'in',
    who: 'Lender_lend'
    });
  const v748 = ['Lender_lend0_93', v744];
  
  const txn1 = await (ctc.sendrecv({
    args: [v681, v682, v684, v691, v692, v702, v703, v704, v711, v712, v733, v748],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:66:34:decimal', stdlib.UInt_max, '0'), [[v691, v682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v770], secs: v772, time: v771, didSend: v196, from: v769 } = txn1;
      
      switch (v770[0]) {
        case 'Borrower_close0_93': {
          const v773 = v770[1];
          
          break;
          }
        case 'Lender_lend0_93': {
          const v821 = v770[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Lender_lend"
            });
          ;
          const v847 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
          const v849 = stdlib.add(v848, v691);
          const v851 = stdlib.Array_set(v847, '0', v849);
          const v852 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v851);
          sim_r.txns.push({
            amt: v691,
            kind: 'to',
            tok: v682
            });
          const v862 = true;
          const v863 = await txn1.getOutput('Lender_lend', 'v862', ctc4, v862);
          
          const v2672 = v769;
          const v2674 = v771;
          const v2681 = true;
          const v2682 = v852[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2683 = v2682[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
          const v2684 = stdlib.sub(v2683, v2683);
          const v2685 = stdlib.Array_set(v2682, '0', v2684);
          const v2686 = stdlib.Array_set(v852, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2685);
          sim_r.txns.push({
            kind: 'from',
            to: v681,
            tok: v682
            });
          const v2687 = v684.maturation;
          const v2688 = stdlib.safeAdd(v771, v2687);
          const v2734 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
          const v2736 = v2686;
          const v2737 = v712;
          const v2738 = stdlib.lt(v771, v2688);
          const v2739 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
          const v2740 = v2738 ? v2739 : false;
          if (v2740) {
            const v2741 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
            sim_r.isHalt = false;
            }
          else {
            const v2744 = v2739 ? v769 : v681;
            sim_r.txns.push({
              kind: 'from',
              to: v2744,
              tok: undefined /* Nothing */
              });
            const v2745 = v2686[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2746 = v2745[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
            const v2747 = v2739 ? v681 : v769;
            sim_r.txns.push({
              kind: 'from',
              to: v2747,
              tok: v682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v682
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
  const {data: [v770], secs: v772, time: v771, didSend: v196, from: v769 } = txn1;
  switch (v770[0]) {
    case 'Borrower_close0_93': {
      const v773 = v770[1];
      return;
      break;
      }
    case 'Lender_lend0_93': {
      const v821 = v770[1];
      undefined /* setApiDetails */;
      ;
      const v847 = v711[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v848 = v847[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0')];
      const v849 = stdlib.add(v848, v691);
      const v851 = stdlib.Array_set(v847, '0', v849);
      const v852 = stdlib.Array_set(v711, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:53:62:dot', stdlib.UInt_max, '0'), v851);
      ;
      const v862 = true;
      const v863 = await txn1.getOutput('Lender_lend', 'v862', ctc4, v862);
      if (v196) {
        stdlib.protect(ctc9, await interact.out(v821, v863), {
          at: './src/contracts/loan_nnt_algo.rsh:64:23:application',
          fs: ['at ./src/contracts/loan_nnt_algo.rsh:64:23:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:64:23:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:68:47:application call to "notify" (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)', 'at ./src/contracts/loan_nnt_algo.rsh:67:42:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:67:42:function exp)'],
          msg: 'out',
          who: 'Lender_lend'
          });
        }
      else {
        }
      
      const v2672 = v769;
      const v2674 = v771;
      const v2681 = true;
      const v2682 = v852[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2683 = v2682[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:33:application', stdlib.UInt_max, '0')];
      const v2684 = stdlib.sub(v2683, v2683);
      const v2685 = stdlib.Array_set(v2682, '0', v2684);
      const v2686 = stdlib.Array_set(v852, stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:83:55:application', stdlib.UInt_max, '0'), v2685);
      ;
      const v2687 = v684.maturation;
      const v2688 = stdlib.safeAdd(v771, v2687);
      const v2734 = stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0');
      const v2736 = v2686;
      const v2737 = v712;
      const v2738 = stdlib.lt(v771, v2688);
      const v2739 = stdlib.lt(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
      const v2740 = v2738 ? v2739 : false;
      if (v2740) {
        const v2741 = stdlib.ge(stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:88:51:decimal', stdlib.UInt_max, '0'), v692);
        return;
        }
      else {
        const v2744 = v2739 ? v769 : v681;
        ;
        const v2745 = v2686[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2746 = v2745[stdlib.checkedBigNumberify('./src/contracts/loan_nnt_algo.rsh:127:33:application', stdlib.UInt_max, '0')];
        const v2747 = v2739 ? v681 : v769;
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
  appApproval: `ByASAAEFBAgHICjZ9qi8Btfx250HnpLWlQjj1PHxD5Ov5PkGvvOm1wP2roD0A//xxroCAqCNBiYDAQEBAAAiNQAxGEEGfCpkSSJbNQEhBFs1AjYaABdJQQESIjUEIzUGSSEIDEAAeUkhCQxAAEBJIQoMQAApSSELDEAAFCELEkQqNf+AAQI0/1AhBK9QQgHDIQoSRCo1/yk0/1BCAOohCRJENhoBNf8oNP9QQgGlSSEMDEAAEiEMEkQqNf8pNP9QIQSvUEIBjCEIEkQ0ASQSRClkKGRQSTUDV2EINQdCBdpJIQ0MQAAuSSEODEAADiEOEkQqNf8oNP9QQgCMIQ0SRDQBJBJEKWQoZFBJNQNXggE1B0IFpUkhDwxAABkhDxJENAEkEkQpZChkUEk1A1dQCDUHQgWFgY/GxSoSRDQBSSEFDEAAFCEFEkQpZChkUEk1A1erATUHQgVhJBJEKWQoZFBJNQNXWAE1B0IFTjYaAhc1BDYaAzYaARdJJQxAAk9JJAxAAM0kEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSVcAIDX/IQZbNf5XKDg1/YFgWzX8gWhbNftXkhE1+oGjAVs1+Uk1BTX4gASxmSJFNPhQsDT4IlVAAC2ACAAAAAAAAAMmsCo1BzT/NP40/TT8NPsiNANXcSA0A1eRARcyBjT6NPlCAtI0+lcAETX3NPw0/ogE3oAJAAAAAAAAA14BsCg1BzT/NP40/TT8NPs0A1dwARcxACMyBjT6NPdJIls0/AgWXABcADT5QgKMSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpKVwAgNf8hBls1/iEHWzX9VzAgNfyBUFs1+1dYARc1+oFZWzX5gWFbNfhXaRE194F6WzX2STUFNfWABNWOHas09VCwNPUiVUkjDEAA6kkhEAxAACshEBJEgAgAAAAAAAAE8bAqNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2QgLCSDT1VwEINfQ09Bc18zEANP8SRDTzNPgISTXyNP0NSTXxQQAKNPI0/Qk18EIAAyI18DTzNPAJNe8091cAETXuNO80/ogDxDTxQQAKNPI0/Qk17UIAAyI17TT4NPM07QkINeyACAAAAAAAAASONOw0/Q8WUQcINOwWUDT9FlBQsDTsNP0PFlEHCDTsFlA0/RZQNQc0/zT+NP00/DT7NPo0+TTsMgY09zTuSSJbNO8IFlwAXAA09kICCkiACAAAAAAAAAQfsCo1BzT/NP40/TT8NPs0+jT5NPgyBjT3NPZCAeJJIwxAAF8jEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJVwAgNf8hB1s1/oAEmouRdLA0/ogC2jT/MQASRDT/NAMhBls0A1cwODQDgXlbNAOBgQFbIzT/IjIGNANXaBE0/kIAq0ghEYgCpyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBFs1/lcQODX9gARb8vLKNP8WUDT+FlA0/VCwgRGvSTX8SVcAESEEr1wAXAA1+yERiAJasSKyASKyEiWyEDIKshQ0/7IRszT9gTBbNfo0/SEGWzX5NPo0+QxEMQA0/xZQNP4WUDT9UDT7UDT6FlA0+RZQKUsBVwB/ZyhLAVd/CmdIIzUBMgY1AkIBsDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/BQ0+hBBADs09TT2FlA091A0+BZQNPkWUChQNPtQKVA0/lA0/xZQKFApSwFXAH9nKEsBV38tZ0ghBTUBMgY1AkIBVjT8QQBJNP5XABFJNfQiWzXzsSKyATTzshIlshA09bIUNPayEbM09TT2NPk0+zT9NPw0/TT3IQdbCCI0/TT+NPQ080kJFlwAXAA0/0IAKrEisgE0/7III7IQNPWyB7OxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAwzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/DT3DDX0NP00+ww09BBBAE40/DT3DzXzNPU09hZQNPcWUDT4UDT5FlA0+hZRBwhQNPsWUDT8FlA0/lA0/xZQNPMWUQcIUClLAVcAf2coSwFXfwRnSCQ1ATIGNQJCAGixIrIBNP+yCCOyEDT1NPg09E2yB7OxIrIBNP5XABEiW7ISJbIQNPg09TT0TbIUNPayEbOxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"internalType":"struct T12","name":"v2780","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"components":[{"internalType":"address payable","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maturation","type":"uint256"},{"internalType":"uint256","name":"_principal","type":"uint256"}],"internalType":"struct T10","name":"elem3","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1055","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v1166","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1265","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v806","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v862","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Borrower_claimRefund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Borrower_close","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v2766","type":"uint256"}],"name":"Borrower_repay","outputs":[{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Lender_lend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"LoanViews_amountPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_beginBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_isLive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LoanViews_loanPaid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2782","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_claimRefund0_270","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_Borrower_repay0_270","type":"tuple"},{"internalType":"bool","name":"_Lender_claim0_270","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v2794","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Borrower_close0_93","type":"bool"},{"internalType":"bool","name":"_Lender_lend0_93","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2808","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062002ee138819003601f8101601f191683016001600160401b0381118482101762000521578392829160405283398101039060e0821262000625576080604051926200004d846200062a565b825184526200005f6020840162000662565b602085015260408301516040850152605f190112620006255760c06040519162000089836200062a565b620000976060820162000662565b83526080810151602084015260a0810151604084015201516060820152606082015243600355604051610140810181811060018060401b03821117620005215760009161012091604052828152826020820152826040820152620000fa62000677565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152604051906200012f8262000646565b6200013962000677565b8252602082016200014962000698565b81526200015562000698565b604084015260ff600454166200060c577f3b0e87f61dbe6a7e6d73526e04014e151733b8b9937d8d542187100050a526ae6101006040513381528451602082015260018060a01b03602086015116604082015260408501516060820152620001c660608601516080830190620006df565ba181518015908115620005ff575b5015620005e657600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002138362000646565b60008352602083015260408201526200022b62000698565b9160005b600181106200059657505081526040830152346200057d57606081015160206060820151910151111562000564576040519160e08301916001600160401b03831184841017620005215760406060926020948252600086526000858701526000828701528151620002a0816200062a565b6000815260008682015260008382015260008582015284870152620002c462000698565b6080870152600060a0870152600060c087015233865260018060a01b0385840151168587015281830151828701528383015184870152015160808501528180820151015160a08501520151015160c08201526001600055436001556040519033602083015260018060a01b036020820151166040830152604081015160608301526200035960608201516080840190620006df565b6080810151600061010084015b60018210620005375760a084015161016086015260c0840151610180808701919091528552846101a081016001600160401b03811182821017620005215760405280516001600160401b0381116200052157600254600181811c9116801562000516575b60208210146200050057601f811162000496575b50602091601f82116001146200042c5791819260009262000420575b50508160011b916000199060031b1c1916176002555b6040516127ad9081620007348239f35b015190508280620003fa565b601f19821692600260005260206000209160005b8581106200047d5750836001951062000463575b505050811b0160025562000410565b015160001960f88460031b161c1916905582808062000454565b9192602060018192868501518155019401920162000440565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004f5575b601f0160051c01905b818110620004e85750620003de565b60008155600101620004d9565b9091508190620004d0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ca565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000366565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b620005a281836200070b565b51620005af82866200070b565b52620005bc81856200070b565b506000198114620005d0576001016200022f565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b90506001541438620001d4565b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200052157604052565b606081019081106001600160401b038211176200052157604052565b51906001600160a01b03821682036200062557565b60405190620006868262000646565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000521576040528260005b828110620006c857505050565b8290620006d462000677565b8184015201620006bb565b80516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9060018110156200071d5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631a76f4e6146101445780631e93b0f11461013b578063316dfd00146101325780633c4965541461012957806340410cd5146101205780634cd8755514610117578063573b85101461010e578063823c0a8d1461010557806383230757146100fc5780638dca4147146100f357806392e83e21146100ea57806394134348146100e1578063ab53f2c6146100d8578063bfbc9d04146100cf5763f9d773330361000e576100ca6107c8565b61000e565b506100ca61075a565b506100ca6106e5565b506100ca61063b565b506100ca6105ed565b506100ca61056e565b506100ca61054f565b506100ca610510565b506100ca610393565b506100ca610319565b506100ca6102c0565b506100ca610271565b506100ca6101d4565b506100ca6101b5565b50346101b05760003660031901126101b05761015e610a9f565b6005600054036101975760e0602091608061018861017a610978565b858082518301019101610c66565b01519182910152604051908152f35b60405163100960cb60e01b815260086004820152602490fd5b600080fd5b50346101b05760003660031901126101b0576020600354604051908152f35b5060a03660031901126101b0576101e9610a9f565b604051906101f6826108a5565b600435825260803660231901126101b05760405191610214836108cd565b6024359260038410156101b05761026193815260443561023381610bd4565b6020820152610241366126a6565b604082015260843561025281610bd4565b606082015260208201526112c8565b60405160008152602090f35b0390f35b50346101b05760003660031901126101b05761028b610a9f565b6005600054036102a75760c060209160e061018861017a610978565b60405163100960cb60e01b815260076004820152602490fd5b5060003660031901126101b057602060406102d9610a9f565b61030d816102e5610b8e565b85810190600082515251151586825101526102fe610b8e565b90600082525186820152611ad8565b01511515604051908152f35b50346101b05760003660031901126101b057610333610a9f565b60056000540361037a5761012061026d91610140610361610352610978565b60208082518301019101610c66565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b5060203660031901126101b0576103a8610a9f565b506102616103b5366126c6565b6103d06103cb6103c760045460ff1690565b1590565b610d15565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a1610410600160005414610d35565b61043f61042d61041e610978565b602080825183010191016126e6565b91518015908115610504575b50610d55565b6040810161044f81513414610d75565b61046b3360018060a01b036104648551610bb4565b1614610d95565b6080610475611a81565b926104896104838251610bb4565b85611292565b6104a26104996020830151610bb4565b60208601611292565b6060810151604085015260a0810151606085015260c0810151828501526104cc60a0850160019052565b6104e26104d98251610bb4565b60c08601611292565b600060e0850152436101008501520151610120830152516101408201526120f2565b90506001541438610439565b5060003660031901126101b057602060a0610529610a9f565b61030d81610535610b8e565b8581019060018251525115156040825101526102fe610b8e565b50346101b05760003660031901126101b0576020600154604051908152f35b5060803660031901126101b057610583610a9f565b60405190610590826108a5565b600435825260603660231901126101b057604051916105ae836108e8565b6024359260028410156101b0576102619381526044356105cd81610bd4565b60208201526064356105de81610bd4565b60408201526020820152611ad8565b5060003660031901126101b05760206080610606610a9f565b61030d81610612610b44565b85810190600282515251151560608251015261062c610b44565b906000825251868201526112c8565b50346101b05760003660031901126101b05761026d61069861010061065e610a9f565b60005460078110156106aa5760056106769114610dd5565b61068961069060a0610689610352610978565b0151151590565b151582840152565b60405190151581529081906020820190565b60076106b69114610db5565b6106e06101406106d66106c7610978565b60208082518301019101611056565b0151151582840152565b610689565b50346101b057600080600319360112610757578054610702610978565b906040519283918252602090604082840152835191826040850152815b83811061074057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161071f565b80fd5b5060003660031901126101b057602080610772610a9f565b61030d8161077e610b44565b8481019060008251525115158582510152610797610b44565b906000825251858201526112c8565b9190916040806060830194805115158452602081015160208501520151910152565b5060203660031901126101b0576107dd610a62565b5061026d60606107eb610a9f565b610846816040516107fb816108a5565b60405161080781610903565b600081528152602081019061081a610b11565b8252600435815152600182515251604082510152610836610b44565b90600082525160208201526112c8565b0151604051918291826107a6565b90600182811c92168015610884575b602083101461086e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610863565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108c057604052565b6108c861088e565b604052565b608081019081106001600160401b038211176108c057604052565b606081019081106001600160401b038211176108c057604052565b602081019081106001600160401b038211176108c057604052565b61016081019081106001600160401b038211176108c057604052565b60a081019081106001600160401b038211176108c057604052565b601f909101601f19168101906001600160401b038211908210176108c057604052565b604051906000826002549161098c83610854565b808352600193808516908115610a0257506001146109b4575b506109b292500383610955565b565b6002600090815260008051602061278183398151915294602093509091905b8183106109ea5750506109b29350820101386109a5565b855488840185015294850194879450918301916109d3565b90506109b294506020925060ff191682840152151560051b820101386109a5565b6040519061016082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b038111838210176108c057604052565b60405190606082016001600160401b03811183821017610a92575b60405260006040838281528260208201520152565b610a9a61088e565b610a7d565b6040519061014082016001600160401b03811183821017610b04575b60405281610120600091828152826020820152826040820152610adc610a62565b60608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b610b0c61088e565b610abb565b60405190610b1e826108cd565b6000606083828152826020820152604051610b3881610903565b83815260408201520152565b60405190610b51826108a5565b81600081526020610b60610b11565b910152565b50634e487b7160e01b600052602160045260246000fd5b60031115610b8657565b6109b2610b65565b60405190610b9b826108a5565b81600081526020610b60610a62565b60021115610b8657565b6001600160a01b031690565b51906001600160a01b03821682036101b057565b801515036101b057565b51906109b282610bd4565b9080601f830112156101b057604091825192610c0484610903565b83606093848401938185116101b057915b848310610c255750505050505090565b85838303126101b05783518691610c3b826108e8565b84518252602091828601518382015286860151610c5781610bd4565b87820152815201920191610c15565b6101a0818303126101b057610180610d0c91610c80610a23565b93610c8a82610bc0565b8552610c9860208301610bc0565b602086015260408201516040860152610cb360608301610bc0565b606086015260808201516080860152610cce60a08301610bde565b60a086015260c082015160c086015260e082015160e0860152610cf661010091828401610be9565b9085015261016081015161012085015201610bde565b61014082015290565b15610d1c57565b60405163100960cb60e01b815260106004820152602490fd5b15610d3c57565b60405163100960cb60e01b815260116004820152602490fd5b15610d5c57565b60405163100960cb60e01b815260126004820152602490fd5b15610d7c57565b60405163100960cb60e01b815260136004820152602490fd5b15610d9c57565b60405163100960cb60e01b815260146004820152602490fd5b15610dbc57565b60405163100960cb60e01b8152600a6004820152602490fd5b15610ddc57565b60405163100960cb60e01b815260096004820152602490fd5b15610dfc57565b60405163100960cb60e01b815260156004820152602490fd5b15610e1c57565b60405163100960cb60e01b815260166004820152602490fd5b15610e3c57565b60405163100960cb60e01b815260176004820152602490fd5b15610e5c57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610e7c57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610e9c57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610ebc57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610edc57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610efc57565b60405163100960cb60e01b815260186004820152602490fd5b15610f1c57565b60405163100960cb60e01b815260196004820152602490fd5b15610f3c57565b60405163100960cb60e01b8152601f6004820152602490fd5b15610f5c57565b60405163100960cb60e01b815260206004820152602490fd5b15610f7c57565b60405163100960cb60e01b815260216004820152602490fd5b15610f9c57565b602460405163100960cb60e01b8152816004820152fd5b15610fba57565b60405163100960cb60e01b815260256004820152602490fd5b15610fda57565b60405163100960cb60e01b815260226004820152602490fd5b15610ffa57565b60405163100960cb60e01b815260236004820152602490fd5b91908260809103126101b05760405161102b816108cd565b606080829461103981610bc0565b845260208101516020850152604081015160408501520151910152565b90610200828203126101b05761110f6101e0611070610a23565b9361107a81610bc0565b855261108860208201610bc0565b602086015261109a8460408301611013565b604086015260c0810151606086015260e081015160808601526101006110c1818301610bde565b60a0870152610120906110d5828401610bc0565b60c08801526110fb610140966110ec888601610bde565b60e08a01526101608501610be9565b908701526101c08201519086015201610bde565b9082015290565b604051610100810191906001600160401b03831181841017611177575b82604052809261114281610903565b60009081815282528060208301528060408301528060608301528060808301528060a083015260c082015260e0610b60610a62565b61117f61088e565b611133565b6001600160a01b03169052565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156111e1575b60408501526020810151151582850152604081015151608085015201511515910152565b6111e9610b65565b6111bd565b5160038110156111fb5790565b611203610b65565b90565b6040519061121382610903565b8160005b60208110611223575050565b60209061122e610a62565b8184015201611217565b604051906112458261091e565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611288611206565b6101208201520152565b6001600160a01b039091169052565b9060018110156112b25760051b0190565b634e487b7160e01b600052603260045260246000fd5b906112d1611116565b916112e96112e46103c760045460ff1690565b610df5565b60407f8c7da3097fc2734a7dab663f1784d1101ba1067bc2e7544545fbddc0eb87f96181518061131a853383611191565b0390a161132b600560005414610e15565b611349611336610978565b6020918183808094518301019101610c66565b9361135f81518015908115611778575b50610e35565b019461136b86516111ee565b61137481610b7c565b61148757506109b2945061140e9061138c3415610ef5565b600081808601966113ae6113a96113a38a51610bb4565b336117d2565b610f15565b8551600081527fc97e8e14b77255b1e272f45470da1e1b27d0e6475541fe1ed5d1068648fcf71d9080602081015b0390a101526114066113ec611238565b956114006113fa8751610bb4565b88611292565b51610bb4565b908501611292565b808201519083015261142f6114266060830151610bb4565b60608401611292565b6080810151608083015261145261144960a0830151151590565b151560a0840152565b60c081015160c083015260e081015160e0830152610100438184015281015190610120918284015201516101408201526124c6565b9394600161149582516111ee565b61149e81610b7c565b036116ea57829051015184526114c66114bf6114ba8551610bb4565b610bb4565b3314610e95565b835151916114da60e085019384519061179b565b918086019083825282860193845110966114f984820198899015159052565b8751156116de5761150d83518651906117bd565b60608201525b8051516060820151611524916117bd565b60808201908152946115363415610eb5565b82880198895161154590610bb4565b8751611551913361183d565b61155a90610ed5565b5115156000149960606115a06116bb996116b6976109b29e6116d157518551611582916117bd565b60a08701525b5161159a86515160a0880151906117bd565b9061179b565b936115be60e060c08301968088528651111592019182519015159052565b84518682510152835188825101527f0d4f6183070e2dfdb0aedadd9ef9b3412a507999d5006328801d15ab4a9f7ce86115fd82518a51918291826107a6565b0390a15191015261162e611626611612611238565b9a6114006116208c51610bb4565b8d611292565b848b01611292565b518489015261164c6116436060890151610bb4565b60608a01611292565b6080870151608089015261166f61166660a0890151151590565b151560a08a0152565b60c087015160c08901525160e088015261010043818901528601519283519485519051019481838201519101511515926116a7610a43565b96875286015284019015159052565b611942565b90610120918284015201516101408201526124c6565b50600060a0870152611588565b60006060820152611513565b6002919594506116fa90516111ee565b61170381610b7c565b1461170f575b50505050565b61140e61176f946117203415610e55565b600060808286019661173d6117386113a38a51610bb4565b610e75565b8551600081527f0b02e327b3495ba5f25e227e53a0ad3f3606b948095ac7f963ba78b8622c06ed9080602081016113dc565b38808080611709565b90506001541438611359565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116117b0575b82106101b057565b6117b8611784565b6117a8565b9081039081116117ca5790565b611203611784565b6000611203928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526118168161093a565b5193165af161182d611826611880565b80926118e2565b50602080825183010191016118cd565b6000916112039383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526118168161093a565b3d156118c8573d906001600160401b0382116118bb575b604051916118af601f8201601f191660200184610955565b82523d6000602084013e565b6118c361088e565b611897565b606090565b908160209103126101b0575161120381610bd4565b156118ea5790565b8051156118f957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b1561191a5790565b80511561192957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b919061194c611206565b9260005b6001811061195e5750508252565b8061196b600192846112a1565b5161197682886112a1565b5261198181876112a1565b506000198114611992575b01611950565b61199a611784565b61198c565b91906119a9611206565b9260005b600181106119bb5750508252565b806119c8600192846112a1565b516119d382886112a1565b526119de81876112a1565b5060001981146119ef575b016119ad565b6119f7611784565b6119e9565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611a42575b8285015260208101511515606085015201511515910152565b611a4a610b65565b611a29565b5160028110156111fb5790565b60405190611a69826108cd565b60006060838281528260208201528260408201520152565b60405190611a8e8261091e565b81610140600091828152826020820152611aa6611a5c565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152611288611206565b90611b5191611af4611aef6103c760045460ff1690565b610f35565b60407fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa815180611b258533836119fc565b0390a1611b36600760005414610f55565b611b3e610978565b6020948186808094518301019101611056565b92611b6781518015908115611da7575b50610f75565b01611b728151611a4f565b611b7b81610baa565b611c5c5750611be66109b294611b913415610fd3565b60008382860196611bad611ba86113a38a51610bb4565b610ff3565b8151600081527f54247b6fe35db45b58022afc93e4377361d49793e117c00754498fbb98fe612090602090a101526114066113ec611a81565b80820151908301526060810151606083015260808101516080830152600060a0830152611c22611c1960c0830151610bb4565b60c08401611292565b611c3b611c3260e0830151151590565b151560e0840152565b610100438184015281015190610120918284015201516101408201526120f2565b611c6b60019195949551611a4f565b611c7481610baa565b14611c7f5750505050565b61176f93611d9191611c913415610f95565b611d8c85850195611cf460a0611ca78951610bb4565b95611cc1611cbc60608b01988951903361183d565b610fb3565b8551600181527fa6b9ab57175630d49bc52b04083d50e5f20dd17111645c00206b515932020eae90602090a10160019052565b611d1e611d16611d02611a81565b98611400611d108a51610bb4565b8b611292565b828901611292565b82860151838801528351606088015260808601516080880152611d50611d4760a0880151151590565b151560a0890152565b611d5d3360c08901611292565b600160e088015261010043818901528601519283519485519051019481838201519101511515926116a7610a43565b61199f565b90610120918284015201516101408201526120f2565b90506001541438611b61565b506040513d6000823e3d90fd5b818110611dcb575050565b60008155600101611dc0565b611de2600254610854565b80611dea5750565b601f8111600114611dfd57506000600255565b6002600052611e4290601f0160051c600080516020612781833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611dc0565b6000602081208160025555565b60405190611e5c8261091e565b81610140600091828152826020820152611e74611a5c565b60408201528260608201528260808201528260a08201528260c08201528260e0820152611e9f611206565b610100820152826101208201520152565b6000915b60018310611ec157505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611eb4565b6109b2909291926101e0610200820194611f0b838251611184565b611f1d60208201516020850190611184565b60408181015180516001600160a01b0316858301526020810151606080870191909152918101516080860152015160a0840152606081015160c0840152608081015160e084015260a081015190611f7b610100928386019015159052565b60c0810151611f906101209182870190611184565b611fb860e083015193611faa610140958689019015159052565b830151610160870190611eb0565b8101516101c085015201511515910152565b90601f8211611fd7575050565b6109b29160026000526020600020906020601f840160051c83019310612005575b601f0160051c0190611dc0565b9091508190611ff8565b80519091906001600160401b0381116120e5575b61203781612032600254610854565b611fca565b602080601f83116001146120735750819293600092612068575b50508160011b916000199060031b1c191617600255565b015190503880612051565b6002600052601f19831694909190600080516020612781833981519152926000905b8782106120cd5750508360019596106120b4575b505050811b01600255565b015160001960f88460031b161c191690553880806120a9565b80600185968294968601518155019501930190612095565b6120ed61088e565b612023565b60e081018051151580156123575760005b156121ec5750506121d96121e76109b2926121b761211f611e4f565b9161213361212d8251610bb4565b84611292565b61214c6121436020830151610bb4565b60208501611292565b60408101516040840152606081015160608401526080810151608084015261217760a0840160019052565b61219061218760c0830151610bb4565b60c08501611292565b600060e0840152610120808201516101008501526101408092015190840152820160019052565b6121c16007600055565b6121ca43600155565b60405192839160208301611ef0565b03601f198101835282610955565b61200f565b15612301578160206109b29301916122ed6122078451610bb4565b6122118451610bb4565b926122306101209485870193845151519160018060a01b031690612363565b61225b61225261223e611238565b9761140061224c8951610bb4565b8a611292565b60208801611292565b6080850151604087015261227e61227560c0870151610bb4565b60608801611292565b61010090612299611d4783880192835160808b015251151590565b6122ac815160408089015101519061179b565b60c0880152600060e08801525190860152518051906116b66040602084015193015115156122d8610a43565b93600085526020850152604084019015159052565b9083015261014080910151908201526124c6565b5060008080836101406123186114ba849751610bb4565b9101519082821561234e575bf115612341575b600080556123396000600155565b6109b2611dd7565b612349611db3565b61232b565b506108fc612324565b60a08301511515612103565b600091906123b893838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526123a1816108cd565b5193165af161182d6123b1611880565b8092611912565b156101b057565b604051906123cc826108a5565b60006020838281520152565b604051906123e58261091e565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611e9f611206565b6109b2909291926101806101406101a083019561243f848251611184565b61245160208201516020860190611184565b6040810151604085015261246d60608201516060860190611184565b6080810151608085015261248a60a082015160a086019015159052565b60c081015160c085015260e081015160e08501526124b16101008083015190860190611eb0565b61012081015161016085015201511515910152565b6124ce6123bf565b60e082018051604084018051919091118352929190610100908184015160c08501908151116000906000146126a15750835115155b156125e557936125bb6121e7946109b29794846121d99861253360206125c398518a511115950194859015159052565b61253b6123d8565b9761254961224c8851610bb4565b6125626125596020890151610bb4565b60208b01611292565b5160408901526125786116436060880151610bb4565b6080860151608089015261259261166660a0880151151590565b5160c08801525160e0870152610120908185015190870152610140809401519086015251151590565b151590830152565b6125cd6005600055565b6125d643600155565b60405192839160208301612421565b50505061232b92506125f78151151590565b15612692576126096060830151610bb4565b6000808080610140870151818115612689575b6001600160a01b0396871690f11561267c575b61264661263f6020850151610bb4565b9251151590565b15612666576101206126588451610bb4565b935b01515151921690612363565b6101206126766060850151610bb4565b9361265a565b612684611db3565b61262f565b506108fc61261c565b61269c8251610bb4565b612609565b612503565b60209060631901126101b057604051906126bf82610903565b6064358252565b60209060031901126101b057604051906126df82610903565b6004358252565b610180818303126101b0576040519161016091906127599060e085016001600160401b03811186821017612773575b60405261272183610bc0565b855261272f60208401610bc0565b60208601526040830151604086015261274b8160608501611013565b606086015260e08301610be9565b608084015261014081015160a0840152015160c082015290565b61277b61088e565b61271556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 12001,
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
    at: './src/contracts/loan_nnt_algo.rsh:131:17:after expr stmt',
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
