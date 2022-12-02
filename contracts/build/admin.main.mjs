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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc5, ctc2]
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
export async function _A_sendLoyaltyToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_sendLoyaltyToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_sendLoyaltyToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v161, v162, v180, v187, v188] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc5, ctc2]);
  const v196 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/admin.rsh:1:23:application',
    fs: ['at ./contracts/admin.rsh:33:21:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:21:function exp)', 'at ./contracts/admin.rsh:33:21:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:21:function exp)'],
    msg: 'in',
    who: 'A_sendLoyaltyToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v161, v162, v180, v187, v188, v196],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./contracts/admin.rsh:33:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v202], secs: v204, time: v203, didSend: v75, from: v201 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "A_sendLoyaltyToken"
        });
      ;
      const v206 = v202[stdlib.checkedBigNumberify('./contracts/admin.rsh:33:21:spread', stdlib.UInt_max, '0')];
      const v207 = v187[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
      const v208 = v207[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
      const v209 = stdlib.ge(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:34:54:decimal', stdlib.UInt_max, '5'));
      if (v209) {
        const v215 = stdlib.sub(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:44:decimal', stdlib.UInt_max, '5'));
        const v217 = stdlib.Array_set(v207, '0', v215);
        const v218 = stdlib.Array_set(v187, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:65:application', stdlib.UInt_max, '0'), v217);
        sim_r.txns.push({
          kind: 'from',
          to: v206,
          tok: v162
          });
        const v219 = true;
        const v220 = await txn1.getOutput('A_sendLoyaltyToken', 'v219', ctc3, v219);
        
        const v226 = stdlib.safeSub(v180, stdlib.checkedBigNumberify('./contracts/admin.rsh:37:63:decimal', stdlib.UInt_max, '5'));
        const v394 = v226;
        const v396 = v218;
        const v397 = v188;
        sim_r.isHalt = false;
        }
      else {
        const v231 = false;
        const v232 = await txn1.getOutput('A_sendLoyaltyToken', 'v231', ctc3, v231);
        
        const v401 = v180;
        const v403 = v187;
        const v404 = v188;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v75, from: v201 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v206 = v202[stdlib.checkedBigNumberify('./contracts/admin.rsh:33:21:spread', stdlib.UInt_max, '0')];
  const v207 = v187[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
  const v208 = v207[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
  const v209 = stdlib.ge(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:34:54:decimal', stdlib.UInt_max, '5'));
  if (v209) {
    const v215 = stdlib.sub(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:44:decimal', stdlib.UInt_max, '5'));
    const v217 = stdlib.Array_set(v207, '0', v215);
    const v218 = stdlib.Array_set(v187, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:65:application', stdlib.UInt_max, '0'), v217);
    ;
    const v219 = true;
    const v220 = await txn1.getOutput('A_sendLoyaltyToken', 'v219', ctc3, v219);
    if (v75) {
      stdlib.protect(ctc7, await interact.out(v202, v220), {
        at: './contracts/admin.rsh:33:22:application',
        fs: ['at ./contracts/admin.rsh:33:22:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:22:function exp)', 'at ./contracts/admin.rsh:36:39:application call to "notify" (defined at: ./contracts/admin.rsh:33:57:function exp)', 'at ./contracts/admin.rsh:33:57:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:57:function exp)'],
        msg: 'out',
        who: 'A_sendLoyaltyToken'
        });
      }
    else {
      }
    
    const v226 = stdlib.safeSub(v180, stdlib.checkedBigNumberify('./contracts/admin.rsh:37:63:decimal', stdlib.UInt_max, '5'));
    const v394 = v226;
    const v396 = v218;
    const v397 = v188;
    return;
    }
  else {
    const v231 = false;
    const v232 = await txn1.getOutput('A_sendLoyaltyToken', 'v231', ctc3, v231);
    if (v75) {
      stdlib.protect(ctc7, await interact.out(v202, v232), {
        at: './contracts/admin.rsh:33:22:application',
        fs: ['at ./contracts/admin.rsh:33:22:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:22:function exp)', 'at ./contracts/admin.rsh:39:39:application call to "notify" (defined at: ./contracts/admin.rsh:33:57:function exp)', 'at ./contracts/admin.rsh:33:57:application call to [unknown function] (defined at: ./contracts/admin.rsh:33:57:function exp)'],
        msg: 'out',
        who: 'A_sendLoyaltyToken'
        });
      }
    else {
      }
    
    const v401 = v180;
    const v403 = v187;
    const v404 = v188;
    return;
    }
  
  
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v153 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v154 = [v153];
  const v158 = stdlib.protect(ctc0, interact.loyaltyToken, 'for Admin\'s interact field loyaltyToken');
  
  const txn1 = await (ctc.sendrecv({
    args: [v158],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v162], secs: v164, time: v163, didSend: v27, from: v161 } = txn1;
      
      const v165 = v154[stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0')];
      const v166 = stdlib.Array_set(v165, '0', stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0'));
      const v167 = stdlib.Array_set(v154, stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0'), v166);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v162
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v162], secs: v164, time: v163, didSend: v27, from: v161 } = txn1;
  const v165 = v154[stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0')];
  const v166 = stdlib.Array_set(v165, '0', stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0'));
  const v167 = stdlib.Array_set(v154, stdlib.checkedBigNumberify('./contracts/admin.rsh:25:15:dot', stdlib.UInt_max, '0'), v166);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v161, v162, v167],
    evt_cnt: 0,
    funcNum: 1,
    lct: v163,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000'), v162]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v171, time: v170, didSend: v34, from: v169 } = txn2;
      
      ;
      const v172 = v167[stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0')];
      const v173 = v172[stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0')];
      const v174 = stdlib.add(v173, stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000'));
      const v176 = stdlib.Array_set(v172, '0', v174);
      const v177 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0'), v176);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000'),
        kind: 'to',
        tok: v162
        });
      const v179 = true;
      const v180 = stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000');
      const v181 = v170;
      const v187 = v177;
      const v188 = stdlib.checkedBigNumberify('./contracts/admin.rsh:19:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v179;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v161,
          tok: undefined /* Nothing */
          });
        const v247 = v187[stdlib.checkedBigNumberify('./contracts/admin.rsh:45:21:application', stdlib.UInt_max, '0')];
        const v248 = v247[stdlib.checkedBigNumberify('./contracts/admin.rsh:45:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v161,
          tok: v162
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v162
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v171, time: v170, didSend: v34, from: v169 } = txn2;
  ;
  const v172 = v167[stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0')];
  const v173 = v172[stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0')];
  const v174 = stdlib.add(v173, stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000'));
  const v176 = stdlib.Array_set(v172, '0', v174);
  const v177 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./contracts/admin.rsh:27:15:dot', stdlib.UInt_max, '0'), v176);
  ;
  const v178 = stdlib.addressEq(v161, v169);
  stdlib.assert(v178, {
    at: './contracts/admin.rsh:27:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  let v179 = true;
  let v180 = stdlib.checkedBigNumberify('./contracts/admin.rsh:8:16:decimal', stdlib.UInt_max, '1000000');
  let v181 = v170;
  let v187 = v177;
  let v188 = stdlib.checkedBigNumberify('./contracts/admin.rsh:19:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v179;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v202], secs: v204, time: v203, didSend: v75, from: v201 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v206 = v202[stdlib.checkedBigNumberify('./contracts/admin.rsh:33:21:spread', stdlib.UInt_max, '0')];
    const v207 = v187[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
    const v208 = v207[stdlib.checkedBigNumberify('./contracts/admin.rsh:34:36:application', stdlib.UInt_max, '0')];
    const v209 = stdlib.ge(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:34:54:decimal', stdlib.UInt_max, '5'));
    if (v209) {
      const v215 = stdlib.sub(v208, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:44:decimal', stdlib.UInt_max, '5'));
      const v217 = stdlib.Array_set(v207, '0', v215);
      const v218 = stdlib.Array_set(v187, stdlib.checkedBigNumberify('./contracts/admin.rsh:35:65:application', stdlib.UInt_max, '0'), v217);
      ;
      const v219 = true;
      await txn4.getOutput('A_sendLoyaltyToken', 'v219', ctc3, v219);
      const v226 = stdlib.safeSub(v180, stdlib.checkedBigNumberify('./contracts/admin.rsh:37:63:decimal', stdlib.UInt_max, '5'));
      const cv179 = true;
      const cv180 = v226;
      const cv181 = v203;
      const cv187 = v218;
      const cv188 = v188;
      
      v179 = cv179;
      v180 = cv180;
      v181 = cv181;
      v187 = cv187;
      v188 = cv188;
      
      txn3 = txn4;
      continue;}
    else {
      const v231 = false;
      await txn4.getOutput('A_sendLoyaltyToken', 'v231', ctc3, v231);
      const cv179 = true;
      const cv180 = v180;
      const cv181 = v203;
      const cv187 = v187;
      const cv188 = v188;
      
      v179 = cv179;
      v180 = cv180;
      v181 = cv181;
      v187 = cv187;
      v188 = cv188;
      
      txn3 = txn4;
      continue;}
    
    }
  ;
  const v247 = v187[stdlib.checkedBigNumberify('./contracts/admin.rsh:45:21:application', stdlib.UInt_max, '0')];
  const v248 = v247[stdlib.checkedBigNumberify('./contracts/admin.rsh:45:21:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function A_sendLoyaltyToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_sendLoyaltyToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_sendLoyaltyToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_sendLoyaltyToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_sendLoyaltyToken(address)byte`],
    pure: [],
    sigs: [`A_sendLoyaltyToken(address)byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAJAAEEBcCEPQgDIKCNBiYCAQAAIjUAMRhBAo0pZEkiWzUBIQVbNQI2GgAXSUEAFCI1BCM1BoHPnOyfDBJENhoBQgAeNhoCFzUENhoDNhoBF0kjDEABHUkhBgxAALYhBhJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hB1s1/oEoWzX9VzARNfyBQVs1+0k1BTX6gAT5piHpNPpQsDT8VwARSTX5IltJNfglD0EAQbEisgElshIkshA0+rIUNP6yEbOACQAAAAAAAADbAbCAAQE1BzT/NP4jNP0lCTIGNPw0+TT4JQkWXABcADT7QgDsgAkAAAAAAAAA5wCwKDUHNP80/iM0/TIGNPw0+0IAzSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/lcoETX9gASai5F0sDT9VwARNfwhBDT+iAGNNP8xABJENP80/iMhBDIGNP00/EkiWyEECBZcAFwAIkIAbUghCIgBTSI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIERr0k1/klXABEhBa9cAFwANf0hCIgBFLEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/VAoSwFXADlnSCM1ATIGNQJCAJQ1/zX+Nf01/DX7Nfo1+TT7QQAjNPk0+hZQNPwWUDT+UDT/FlAoSwFXAElnSCQ1ATIGNQJCAF6xIrIBNP+yCCOyEDT5sgezsSKyATT+VwARIluyEiSyEDT5shQ0+rIRs7EisgEishIkshAyCbIVMgqyFDT6shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 73,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"v412","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v219","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v231","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v407","type":"address"}],"name":"A_sendLoyaltyToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"v414","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T1","name":"v421","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200172560806001600160401b03601f1938849003601f81018216840190848210848311176200043a578085916040978894855283398101031262000435578351926200004c8462000450565b805184526020908101516001600160a01b0394909190858316830362000435578082809201938452436003558751620000858162000450565b600093818580935201528751906200009d826200046c565b620000a762000488565b8252828201620000b6620004a9565b815289830190620000c6620004a9565b825260049360ff8554166200041e578b51933385528051878601528b8951168d8601527fdfc9ca24641405bcf22714584c5a6a755e437739bd3255aaabe0d859c10c4e1360608096a151801590811562000411575b5015620003fa5786815152868682510152868c82510152518151525180518b8682015191015115158c519162000151836200046c565b888352878301528c82015262000166620004a9565b91875b60018110620003ad575050815281523462000396578951906200018c826200046c565b85825289858301978789528c840193620001a5620004a9565b855233905251168752518152600198898655438a558a5196338689015251168a87015251818601909189858c88945b8386106200036c575050505050505060a0845260c08401848110878211176200035957885283519586116200034657600254908782811c921680156200033b575b83831014620003285750601f8111620002dc575b508093601f8611600114620002745750509183949184939462000268575b50501b916000199060031b1c1916176002555b5161120c9081620005198239f35b01519250388062000247565b600283528183209493928692918316915b88838310620002c15750505010620002a7575b505050811b016002556200025a565b015160001960f88460031b161c1916905538808062000298565b85870151885590960195948501948793509081019062000285565b60028352818320601f870160051c8101918388106200031d575b601f0160051c019087905b8281106200031157505062000229565b84815501879062000301565b9091508190620002f6565b634e487b7160e01b845260229052602483fd5b91607f169162000215565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8185928851805184528581015186850152015115159082015201940192019192858c8c92620001d4565b895163100960cb60e01b8152600981850152602490fd5b620003b98183620004f0565b51620003c68286620004f0565b52620003d38185620004f0565b506000198114620003e75760010162000169565b634e487b7160e01b895260118752602489fd5b8b5163100960cb60e01b8152600881870152602490fd5b905060015414386200011b565b8b5163100960cb60e01b8152600781870152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176200043a57604052565b606081019081106001600160401b038211176200043a57604052565b6040519062000497826200046c565b60006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200043a576040528260005b828110620004d957505050565b8290620004e562000488565b8184015201620004cc565b906001811015620005025760051b0190565b634e487b7160e01b600052603260045260246000fdfe604060808152600436101561001a575b50361561001857005b005b6000803560e01c91826315f4000c1461009d57505080631e93b0f1146100945780633af838e21461008b578063573b85101461008257806383230757146100795763ab53f2c61461006c575b3861000f565b6100746103a1565b610066565b50610074610382565b506100746101df565b50610074610179565b5061007461015a565b60203660031901126101345760206101309261011d600435916100bf83610144565b6100c76105bb565b9283918651916100d683610467565b8751906100e282610467565b8184526001600160a01b031690528651916100fc8361048f565b81835286830191885161010e81610467565b818152835283525190526107bc565b0151905190151581529081906020820190565b0390f35b5080fd5b6001600160a01b031690565b6001600160a01b0381160361015557565b600080fd5b5034610155576000366003190112610155576020600354604051908152f35b5060403660031901126101555761018e6105bb565b6040519061019b8261048f565b60043582526020366023190112610155576101d4916040516101bc81610467565b6024356101c881610144565b815260208201526107bc565b602060405160008152f35b50602080600319360112610155576101f56105bb565b5061036c60409161035b835161020a81610467565b600435815261022a61022561022160045460ff1690565b1590565b610a51565b8451338152815160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a161026a600160005414610a71565b610298610286610278610503565b858082518301019101611110565b91518015908115610376575b50610a91565b6102a23415610ab1565b828101926102c46102bf6102b68651610138565b3090339061115b565b610ad1565b6102e03360018060a01b036102d98551610138565b1614610af1565b6103106103086102ee61075f565b956103026102fc8651610138565b886105d4565b51610138565b8286016105d4565b60018487015261035686620f4240938460608801524360808801520151918251938451019388828201519101511515916103486105ae565b958652850152151587840152565b610cfd565b60a0820152600060c0820152610feb565b5160008152602090f35b90506001541438610292565b5034610155576000366003190112610155576020600154604051908152f35b5034610155576000806003193601126104135780546103be610503565b906040519283918252602090604082840152835191826040850152815b8381106103fc57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016103db565b80fd5b90600182811c92168015610446575b602083101461043057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610425565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761048257604052565b61048a610450565b604052565b604081019081106001600160401b0382111761048257604052565b606081019081106001600160401b0382111761048257604052565b608081019081106001600160401b0382111761048257604052565b601f909101601f19168101906001600160401b0382119082101761048257604052565b604051906000826002549161051783610416565b80835260019380851690811561058d575060011461053f575b5061053d925003836104e0565b565b600260009081526000805160206111e083398151915294602093509091905b81831061057557505061053d935082010138610530565b8554888401850152948501948794509183019161055e565b905061053d94506020925060ff191682840152151560051b82010138610530565b6040519061053d826104aa565b604051906105c88261048f565b60006020838281520152565b6001600160a01b039091169052565b5190811515820361015557565b9080601f830112156101555760409182519261060b84610467565b836060938484019381851161015557915b84831061062c5750505050505090565b85838303126101555783518691610642826104aa565b84518252602091828601518382015261065c8787016105e3565b8782015281520192019161061c565b60e081830312610155576040519160c091906106ce9060a085016001600160401b038111868210176106dd575b60405282516106a681610144565b855260208301516106b681610144565b602086015260408301516040860152606083016105f0565b60608401520151608082015290565b6106e5610450565b610698565b9060018110156106fb5760051b0190565b634e487b7160e01b600052603260045260246000fd5b604080519161071f83610467565b8291600090815b602080821015610756579060209184845191610741836104aa565b81835282015284848201528188015201610726565b50505050909150565b6040519060e082016001600160401b038111838210176107af575b6040528160c06000918281528260208201528260408201528260608201528260808201526107a6610711565b60a08201520152565b6107b7610450565b61077a565b906107d46107cf61022160045460ff1690565b610b11565b604080513381528351602080830191909152840151516001600160a01b0316818301527fee3bc1f4d4c499b854813d79a19675a1ad29af723ef5be60c1811a34d141397890606090a161082b600460005414610b31565b610833610503565b9061084860209283808251830101910161066b565b9261085e85518015908115610a14575b50610b51565b6108683415610b71565b6060840190600582515151101560001461097c5783908186019682885161088e90610138565b910151516001600160a01b03166108a490610138565b6108ad91610b91565b8351600181527f202e5ee770f0e6c3ab4386a32fc6c6d662e471b85271888cb0504fc5800a9b8f90602090a160019101526108e661075f565b9484516108f290610138565b6108fc90876105d4565b5161090690610138565b610912908685016105d4565b6001858301528184015161092590610a37565b6060860152436080860152519182519160041983510192818382015191015115159261094f6105ae565b9485528401529015159082015261096591610cfd565b60a08301526080015160c082015261053d90610feb565b61053d95509160008460809596947fd3d3d9aa08a1ecb07654de17536f574489b41ea3fe9bafa9f133f0acc6af2b128451806109bd81906000602083019252565b0390a101526109ef6109cd61075f565b956109db6102fc8651610138565b6109e781860151610138565b9087016105d4565b600185820152820151606085015243838501525160a0840152015160c0820152610feb565b90506001541438610858565b50634e487b7160e01b600052601160045260246000fd5b6004198101908111610a465790565b610a4e610a20565b90565b15610a5857565b60405163100960cb60e01b8152600a6004820152602490fd5b15610a7857565b60405163100960cb60e01b8152600b6004820152602490fd5b15610a9857565b60405163100960cb60e01b8152600c6004820152602490fd5b15610ab857565b60405163100960cb60e01b8152600d6004820152602490fd5b15610ad857565b60405163100960cb60e01b8152600e6004820152602490fd5b15610af857565b60405163100960cb60e01b8152600f6004820152602490fd5b15610b1857565b60405163100960cb60e01b815260106004820152602490fd5b15610b3857565b60405163100960cb60e01b815260116004820152602490fd5b15610b5857565b60405163100960cb60e01b815260126004820152602490fd5b15610b7857565b60405163100960cb60e01b815260136004820152602490fd5b60008091610bf7938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526005604482015260448152610bd0816104c5565b5193165af1610be7610be0610c3c565b8092610c9d565b5060208082518301019101610c89565b1561015557565b60009190610bf793838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152610bd0816104c5565b3d15610c84573d906001600160401b038211610c77575b60405191610c6b601f8201601f1916602001846104e0565b82523d6000602084013e565b610c7f610450565b610c53565b606090565b9081602091031261015557610a4e906105e3565b15610ca55790565b805115610cb457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15610cd55790565b805115610ce457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b9190610d07610711565b9260005b60018110610d195750508252565b80610d26600192846106ea565b51610d3182886106ea565b52610d3c81876106ea565b506000198114610d4d575b01610d0b565b610d55610a20565b610d47565b506040513d6000823e3d90fd5b818110610d72575050565b60008155600101610d67565b610d89600254610416565b80610d915750565b601f8111600114610da457506000600255565b6002600052610de990601f0160051c6000805160206111e0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610d67565b6000602081208160025555565b6040519060a082016001600160401b03811183821017610e39575b6040526000608083828152826020820152826040820152610e30610711565b60608201520152565b610e41610450565b610e11565b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015160e08501969593916000918187015b60018410610e9b57505050505050608060c0910151910152565b8483600192888551805183528481015185840152015115158982015201920193019290610e81565b90601f8211610ed0575050565b61053d9160026000526020600020906020601f840160051c83019310610efe575b601f0160051c0190610d67565b9091508190610ef1565b80519091906001600160401b038111610fde575b610f3081610f2b600254610416565b610ec3565b602080601f8311600114610f6c5750819293600092610f61575b50508160011b916000199060031b1c191617600255565b015190503880610f4a565b6002600052601f198316949091906000805160206111e0833981519152926000905b878210610fc6575050836001959610610fad575b505050811b01600255565b015160001960f88460031b161c19169055388080610fa2565b80600185968294968601518155019501930190610f8e565b610fe6610450565b610f1c565b6040810151156110865761107361108161053d9260c0611009610df6565b9161101d6110178251610138565b846105d4565b61103661102d6020830151610138565b602085016105d4565b6060810151604084015260a081015160608401520151608082015261105b6004600055565b61106443600155565b60405192839160208301610e46565b03601f1981018352826104e0565b610f08565b8060008080806110a161109c6110e49751610138565b610138565b60c086015190828215611107575bf1156110fa575b6110c36020820151610138565b60a06110cf8351610138565b9201515151916001600160a01b031690610bfe565b600080556110f26000600155565b61053d610d7e565b611102610d5a565b6110b6565b506108fc6110af565b9060a0828203126101555761115390604080519361112d856104aa565b805161113881610144565b8552602081015161114881610144565b6020860152016105f0565b604082015290565b6040516323b872dd60e01b602082019081526001600160a01b0393841660248301529383166044820152620f42406064808301919091528152610a4e9360009384939284919060a081016001600160401b038111828210176111d2575b6040525193165af1610be76111cb610c3c565b8092610ccd565b6111da610450565b6111b856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 5925,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './contracts/admin.rsh:26:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/admin.rsh:46:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './contracts/admin.rsh:29:60:after expr stmt semicolon',
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
  "A_sendLoyaltyToken": A_sendLoyaltyToken,
  "Admin": Admin
  };
export const _APIs = {
  A: {
    sendLoyaltyToken: A_sendLoyaltyToken
    }
  };
