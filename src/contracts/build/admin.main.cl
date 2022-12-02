#lang pl
EP {
  apis = {
    Just "A" = {
      sendLoyaltyToken = ("A_sendLoyaltyToken", IT_Fun [Address] Bool)
      }
    },
  exports = {
    
    },
  init = {
    maps = {
      
      }
    },
  m = {
    ("A_sendLoyaltyToken", Just 4) = interact {
      in = IT_Fun [] Tuple(Address),
      out = IT_Fun [Tuple(Address),Bool] Null
      };
    fromConsensus 4 (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/180), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/187), (netBalance/188 : UInt, netBalance/188)]) ;
    only(Right False) {
      const _/196 : Tuple(Address)* = protect<Tuple(Address)>("A_sendLoyaltyToken".interact.in());
       };
    send({
      amt = [0, ],
      as = (_/196 ),
      saved = (Admin/161 : Address, loyaltyToken/162 : Token, trackedSupply/180 : UInt, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/188 : UInt ),
      soloSend = False,
      when = true,
      which = 3
      })
    recv({
      didSendv = didPublish/75 : Bool,
      from = v201 : Address,
      lct = Nothing,
      msg = (.fork46.msg/202 : Tuple(Address) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/204 : UInt,
      timev = thisConsensusTime/203 : UInt,
      which = 3
      })
    {
      setApiDetails("A_sendLoyaltyToken", [Tuple(Address)], None, AIC_SpreadArg );
      checkPay(0, None);
      const user/206 : Address! = .fork46.msg/202[0];
      const tokInfo/207 : Tuple(UInt, UInt, Bool)* = tokenInfos/187[0];
      const v208 : UInt* = tokInfo/207[0];
      const v209 : Bool! = v208 >= 5;
      if v209 then {
        const v215 : UInt! = v208 - 5;
        const tokInfo'/217 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/207, 0, v215 );
        const tokInfos'/218 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/187, 0, tokInfo'/217 );
        transfer.(5, Some loyaltyToken/162).to(user/206);
        const v219 : Bool! = true;
        const .api36.rngl/220 : Bool* = emitLog(api("A_sendLoyaltyToken"))(v219 );
        only(Right True) {
          local(Just v222 : Null) if didPublish/75 then {
            protect<Null>("A_sendLoyaltyToken".interact.out(.fork46.msg/202, .api36.rngl/220 ));
             }
          else {
             };
           };
        const v226 : UInt! = trackedSupply/180 - 5;
        const trackedSupply/394 : UInt! = v226;
        const tokenInfos/396 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/218;
        const netBalance/397 : UInt! = netBalance/188;
        fromConsensus 4 (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/394), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/396), (netBalance/188 : UInt, netBalance/397)]) ;
         }
      else {
        const v231 : Bool! = false;
        const .api36.rngl/232 : Bool* = emitLog(api("A_sendLoyaltyToken"))(v231 );
        only(Right True) {
          local(Just v234 : Null) if didPublish/75 then {
            protect<Null>("A_sendLoyaltyToken".interact.out(.fork46.msg/202, .api36.rngl/232 ));
             }
          else {
             };
           };
        const trackedSupply/401 : UInt! = trackedSupply/180;
        const tokenInfos/403 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/187;
        const netBalance/404 : UInt! = netBalance/188;
        fromConsensus 4 (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/401), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/403), (netBalance/188 : UInt, netBalance/404)]) ;
         }; },
    ("Admin", Nothing) = interact {
      loyaltyToken = IT_Val Token
      };
    const initialInfo/153 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
    const tokInfos/154 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/153 ]);
    only(Right False) {
      const loyaltyToken/158 : Token! = "Admin".interact.loyaltyToken;
       };
    send({
      amt = [0, ],
      as = (loyaltyToken/158 ),
      saved = (),
      soloSend = True,
      when = true,
      which = 0
      })
    recv({
      didSendv = didPublish/27 : Bool,
      from = Admin/161 : Address,
      lct = Just 0,
      msg = (loyaltyToken/162 : Token ),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/164 : UInt,
      timev = thisConsensusTime/163 : UInt,
      which = 0
      })
    {
      const tokInfo/165 : Tuple(UInt, UInt, Bool)! = tokInfos/154[0];
      const tokInfo'/166 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/165, 0, 0 );
      const tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/154, 0, tokInfo'/166 );
      tokenInit(loyaltyToken/162);
      checkPay(0, None);
      fromConsensus 1 (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/167)]) ;
      send({
        amt = [0, (1000000, loyaltyToken/162 ) ],
        as = (),
        saved = (Admin/161 : Address, loyaltyToken/162 : Token, tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1) ),
        soloSend = True,
        when = true,
        which = 1
        })
      recv({
        didSendv = didPublish/34 : Bool,
        from = Admin/169 : Address,
        lct = Just thisConsensusTime/163,
        msg = (),
        out = (),
        prev = 1,
        secsv = thisConsensusSecs/171 : UInt,
        timev = thisConsensusTime/170 : UInt,
        which = 1
        })
      {
        checkPay(0, None);
        const tokInfo/172 : Tuple(UInt, UInt, Bool)* = tokInfos'/167[0];
        const v173 : UInt! = tokInfo/172[0];
        const v174 : UInt! = v173 + 1000000;
        const tokInfo'/176 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/172, 0, v174 );
        const tokInfos'/177 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/167, 0, tokInfo'/176 );
        checkPay(1000000, Some loyaltyToken/162);
        const v178 : Bool! = Admin/161 == Admin/169;
        claim(CT_Require)(v178, Just "sender correct");
        loopvar {
          keepRunning/179 : Bool = true,
          trackedSupply/180 : UInt = 1000000,
          thisConsensusTime/181 : UInt = thisConsensusTime/170,
          tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/177,
          netBalance/188 : UInt = 0
          };
        invariant{
          () }
        while{
          
          return keepRunning/179; }
        {
          fromConsensus 4 (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/180), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/187), (netBalance/188 : UInt, netBalance/188)]) ;
          recv({
            didSendv = didPublish/75 : Bool,
            from = v201 : Address,
            lct = Just thisConsensusTime/181,
            msg = (.fork46.msg/202 : Tuple(Address) ),
            out = (),
            prev = 4,
            secsv = thisConsensusSecs/204 : UInt,
            timev = thisConsensusTime/203 : UInt,
            which = 3
            })
          {
            setApiDetails("A_sendLoyaltyToken", [Tuple(Address)], None, AIC_SpreadArg );
            checkPay(0, None);
            const user/206 : Address! = .fork46.msg/202[0];
            const tokInfo/207 : Tuple(UInt, UInt, Bool)* = tokenInfos/187[0];
            const v208 : UInt* = tokInfo/207[0];
            const v209 : Bool! = v208 >= 5;
            if v209 then {
              const v215 : UInt! = v208 - 5;
              const tokInfo'/217 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/207, 0, v215 );
              const tokInfos'/218 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/187, 0, tokInfo'/217 );
              transfer.(5, Some loyaltyToken/162).to(user/206);
              const v219 : Bool! = true;
              emitLog(api("A_sendLoyaltyToken"))(v219 );
              const v226 : UInt! = trackedSupply/180 - 5;
              {
                keepRunning/179 : Bool = true,
                trackedSupply/180 : UInt = v226,
                thisConsensusTime/181 : UInt = thisConsensusTime/203,
                tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/218,
                netBalance/188 : UInt = netBalance/188
                }
              continue; }
            else {
              const v231 : Bool! = false;
              emitLog(api("A_sendLoyaltyToken"))(v231 );
              {
                keepRunning/179 : Bool = true,
                trackedSupply/180 : UInt = trackedSupply/180,
                thisConsensusTime/181 : UInt = thisConsensusTime/203,
                tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/187,
                netBalance/188 : UInt = netBalance/188
                }
              continue; }; } }
        transfer.(netBalance/188, None).to(Admin/161);
        const tokInfo/247 : Tuple(UInt, UInt, Bool)! = tokenInfos/187[0];
        const v248 : UInt! = tokInfo/247[0];
        transfer.(v248, Some loyaltyToken/162).to(Admin/161);
        fromConsensus 3 (halt [loyaltyToken/162]) ;
         } }
    }
  }
/*** OLD ***/
CP {
  apis = {
    "A_sendLoyaltyToken" = {
      4 = {
        compile = AIC_SpreadArg,
        mcase_id = Nothing,
        msg_tys = [Tuple(Address)],
        ret = Bool,
        which = 3
        }
      }
    },
  events = {
    
    },
  handlers = {
    0 = {
      Admin/161 : Address,
      (between [Nothing] [Nothing]),
      last = 0,
      [],
      [],
      [loyaltyToken/162 : Token*],
      [Token],
      timev = thisConsensusTime/163 : UInt,
      secsv = thisConsensusSecs/164 : UInt,
      {
        const initialInfo/153 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
        const tokInfos/154 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/153 ]);
        const tokInfo/165 : Tuple(UInt, UInt, Bool)! = tokInfos/154[0];
        const tokInfo'/166 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/165, 0, 0 );
        const tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/154, 0, tokInfo'/166 );
        tokenInit(loyaltyToken/162);
        checkPay(0, None);
        (from 1, (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/167)])) }
       },
    1 = {
      Admin/169 : Address,
      (between [Nothing] [Nothing]),
      last = 1,
      [Admin/161 : Address*, loyaltyToken/162 : Token*, tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)*],
      [Address, Token, Array(Tuple(UInt, UInt, Bool), 1)],
      [],
      [],
      timev = thisConsensusTime/170 : UInt,
      secsv = thisConsensusSecs/171 : UInt,
      {
        checkPay(0, None);
        const tokInfo/172 : Tuple(UInt, UInt, Bool)* = tokInfos'/167[0];
        const v173 : UInt! = tokInfo/172[0];
        const v174 : UInt! = v173 + 1000000;
        const tokInfo'/176 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/172, 0, v174 );
        const tokInfos'/177 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/167, 0, tokInfo'/176 );
        checkPay(1000000, Some loyaltyToken/162);
        const v178 : Bool! = Admin/161 == Admin/169;
        claim(CT_Require)(v178, Just "sender correct");
        (jump! 2 [Admin/161 : Address, loyaltyToken/162 : Token] {
          keepRunning/179 : Bool = true,
          trackedSupply/180 : UInt = 1000000,
          thisConsensusTime/181 : UInt = thisConsensusTime/170,
          tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/177,
          netBalance/188 : UInt = 0
          }) }
       },
    2 = {
      loop!,
      [Admin/161 : Address*, loyaltyToken/162 : Token*],
      [keepRunning/179 : Bool!, trackedSupply/180 : UInt*, thisConsensusTime/181 : UInt#, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/188 : UInt*],
      {
        if keepRunning/179 then {
          (from 4, (continue [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/180), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/187), (netBalance/188 : UInt, netBalance/188)])) }
        else {
          transfer.(netBalance/188, None).to(Admin/161);
          const tokInfo/247 : Tuple(UInt, UInt, Bool)! = tokenInfos/187[0];
          const v248 : UInt! = tokInfo/247[0];
          transfer.(v248, Some loyaltyToken/162).to(Admin/161);
          (from 3, (halt [loyaltyToken/162])) }; }
       },
    3 = {
      v201 : Address,
      (between [Nothing] [Nothing]),
      last = 4,
      [Admin/161 : Address*, loyaltyToken/162 : Token*, trackedSupply/180 : UInt*, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/188 : UInt*],
      [Address, Token, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt],
      [.fork46.msg/202 : Tuple(Address)!],
      [Tuple(Address)],
      timev = thisConsensusTime/203 : UInt,
      secsv = thisConsensusSecs/204 : UInt,
      {
        setApiDetails("A_sendLoyaltyToken", [Tuple(Address)], None, AIC_SpreadArg );
        checkPay(0, None);
        const user/206 : Address! = .fork46.msg/202[0];
        const tokInfo/207 : Tuple(UInt, UInt, Bool)* = tokenInfos/187[0];
        const v208 : UInt* = tokInfo/207[0];
        const v209 : Bool! = v208 >= 5;
        if v209 then {
          const v215 : UInt! = v208 - 5;
          const tokInfo'/217 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/207, 0, v215 );
          const tokInfos'/218 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/187, 0, tokInfo'/217 );
          transfer.(5, Some loyaltyToken/162).to(user/206);
          const v219 : Bool! = true;
          emitLog(api("A_sendLoyaltyToken"))(v219 );
          const v226 : UInt! = trackedSupply/180 - 5;
          (jump! 2 [Admin/161 : Address, loyaltyToken/162 : Token] {
            keepRunning/179 : Bool = true,
            trackedSupply/180 : UInt = v226,
            thisConsensusTime/181 : UInt = thisConsensusTime/203,
            tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/218,
            netBalance/188 : UInt = netBalance/188
            }) }
        else {
          const v231 : Bool! = false;
          emitLog(api("A_sendLoyaltyToken"))(v231 );
          (jump! 2 [Admin/161 : Address, loyaltyToken/162 : Token] {
            keepRunning/179 : Bool = true,
            trackedSupply/180 : UInt = trackedSupply/180,
            thisConsensusTime/181 : UInt = thisConsensusTime/203,
            tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/187,
            netBalance/188 : UInt = netBalance/188
            }) }; }
       }
    },
  init = {
    maps = {
      
      }
    },
  views = {
    vis = {
      1 = (view [Admin/161 : Address, loyaltyToken/162 : Token, tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)] {
        
        }),
      4 = (view [Admin/161 : Address, loyaltyToken/162 : Token, trackedSupply/180 : UInt, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/188 : UInt] {
        
        })
      },
    vs = {
      
      }
    }
  }
/*** CL ***/
// Definitions:
{
  "_reachr_A_sendLoyaltyToken" = mem Bool
  }
// Functions:
{
  "A_sendLoyaltyToken"(Address )Bool = external(Bool) mut (v407 : Address* ) => {
    jump "_reacha_A_sendLoyaltyToken"(v407 : Address ) Just Just "_reachr_A_sendLoyaltyToken" },
  "_reacha_A_sendLoyaltyToken"(Address )Null = internal mut (v407 : Address* ) => {
    v408 : UInt := state
    const v410 : UInt! = 0;
    const v409 : Tuple(Address)! = [v407 ];
    jump "_reachi_3"(v410 : UInt, v409 : Tuple(Address) ) Nothing },
  "_reachi_0"(Tuple(UInt, Token) )Null = internal mut (v412 : Tuple(UInt, Token)* ) => {
    emitPublish(0, Tuple(UInt, Token) )
    {
      from = Admin/161 : Address,
      secs = thisConsensusSecs/164 : UInt,
      time = thisConsensusTime/163 : UInt
      } := txn.metadata
    const v411 : UInt* = v412[0];
    const loyaltyToken/162 : Token* = v412[1];
    checkTime(v411 : UInt )
    checkInterval(thisConsensusTime/163 : UInt, thisConsensusSecs/164 : UInt, (between [Nothing] [Nothing]) )
    const initialInfo/153 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
    const tokInfos/154 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/153 ]);
    const tokInfo/165 : Tuple(UInt, UInt, Bool)! = tokInfos/154[0];
    const tokInfo'/166 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/165, 0, 0 );
    const tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/154, 0, tokInfo'/166 );
    tokenInit(loyaltyToken/162);
    checkPay(0, None);
    state1 <- [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/167)]
    exit() },
  "_reachi_1"(Tuple(UInt) )Null = internal mut (v414 : Tuple(UInt)* ) => {
    emitPublish(1, Tuple(UInt) )
    {
      from = Admin/169 : Address,
      secs = thisConsensusSecs/171 : UInt,
      time = thisConsensusTime/170 : UInt
      } := txn.metadata
    [Admin/161 : Address*, loyaltyToken/162 : Token*, tokInfos'/167 : Array(Tuple(UInt, UInt, Bool), 1)*] := state1 False
    const v413 : UInt* = v414[0];
    checkTime(v413 : UInt )
    checkInterval(thisConsensusTime/170 : UInt, thisConsensusSecs/171 : UInt, (between [Nothing] [Nothing]) )
    checkPay(0, None);
    const tokInfo/172 : Tuple(UInt, UInt, Bool)* = tokInfos'/167[0];
    const v173 : UInt! = tokInfo/172[0];
    const v174 : UInt! = v173 + 1000000;
    const tokInfo'/176 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/172, 0, v174 );
    const tokInfos'/177 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/167, 0, tokInfo'/176 );
    checkPay(1000000, Some loyaltyToken/162);
    const v178 : Bool! = Admin/161 == Admin/169;
    claim(CT_Require)(v178, Just "sender correct");
    const keepRunning/415 : Bool! = true;
    const trackedSupply/416 : UInt! = 1000000;
    const thisConsensusTime/417 : UInt! = thisConsensusTime/170;
    const tokenInfos/418 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/177;
    const netBalance/419 : UInt! = 0;
    jump "_reachl_2"(Admin/161 : Address, loyaltyToken/162 : Token, keepRunning/415 : Bool, trackedSupply/416 : UInt, thisConsensusTime/417 : UInt, tokenInfos/418 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/419 : UInt ) Nothing },
  "_reachi_3"(Tuple(UInt, Tuple(Address)) )Null = internal mut (v421 : Tuple(UInt, Tuple(Address))* ) => {
    emitPublish(3, Tuple(UInt, Tuple(Address)) )
    {
      from = v201 : Address,
      secs = thisConsensusSecs/204 : UInt,
      time = thisConsensusTime/203 : UInt
      } := txn.metadata
    [Admin/161 : Address*, loyaltyToken/162 : Token*, trackedSupply/180 : UInt*, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/188 : UInt*] := state4 False
    const v420 : UInt* = v421[0];
    const .fork46.msg/202 : Tuple(Address)! = v421[1];
    checkTime(v420 : UInt )
    checkInterval(thisConsensusTime/203 : UInt, thisConsensusSecs/204 : UInt, (between [Nothing] [Nothing]) )
    setApiDetails("A_sendLoyaltyToken", [Tuple(Address)], None, AIC_SpreadArg );
    checkPay(0, None);
    const user/206 : Address! = .fork46.msg/202[0];
    const tokInfo/207 : Tuple(UInt, UInt, Bool)* = tokenInfos/187[0];
    const v208 : UInt* = tokInfo/207[0];
    const v209 : Bool! = v208 >= 5;
    if v209 then {
      const v215 : UInt! = v208 - 5;
      const tokInfo'/217 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/207, 0, v215 );
      const tokInfos'/218 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/187, 0, tokInfo'/217 );
      transfer.(5, Some loyaltyToken/162).to(user/206);
      const v219 : Bool! = true;
      emitLog(api("A_sendLoyaltyToken"))(v219 );
      const v226 : UInt! = trackedSupply/180 - 5;
      const keepRunning/422 : Bool! = true;
      const trackedSupply/423 : UInt! = v226;
      const thisConsensusTime/424 : UInt! = thisConsensusTime/203;
      const tokenInfos/425 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/218;
      const netBalance/426 : UInt! = netBalance/188;
      jump "_reachl_2"(Admin/161 : Address, loyaltyToken/162 : Token, keepRunning/422 : Bool, trackedSupply/423 : UInt, thisConsensusTime/424 : UInt, tokenInfos/425 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/426 : UInt ) Nothing }
    else {
      const v231 : Bool! = false;
      emitLog(api("A_sendLoyaltyToken"))(v231 );
      const keepRunning/427 : Bool! = true;
      const trackedSupply/428 : UInt! = trackedSupply/180;
      const thisConsensusTime/429 : UInt! = thisConsensusTime/203;
      const tokenInfos/430 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/187;
      const netBalance/431 : UInt! = netBalance/188;
      jump "_reachl_2"(Admin/161 : Address, loyaltyToken/162 : Token, keepRunning/427 : Bool, trackedSupply/428 : UInt, thisConsensusTime/429 : UInt, tokenInfos/430 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/431 : UInt ) Nothing }; },
  "_reachl_2"(Address, Token, Bool, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt )Null = internal mut (Admin/161 : Address*, loyaltyToken/162 : Token*, keepRunning/179 : Bool!, trackedSupply/180 : UInt*, thisConsensusTime/181 : UInt#, tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/188 : UInt* ) => {
    if keepRunning/179 then {
      state4 <- [(Admin/161 : Address, Admin/161), (loyaltyToken/162 : Token, loyaltyToken/162), (trackedSupply/180 : UInt, trackedSupply/180), (tokenInfos/187 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/187), (netBalance/188 : UInt, netBalance/188)]
      exit() }
    else {
      transfer.(netBalance/188, None).to(Admin/161);
      const tokInfo/247 : Tuple(UInt, UInt, Bool)! = tokenInfos/187[0];
      const v248 : UInt! = tokInfo/247[0];
      transfer.(v248, Some loyaltyToken/162).to(Admin/161);
      Token.untrack(loyaltyToken/162)
      stateDestroy
      exit() }; },
  "_reachp_0"(Tuple(UInt, Token) )Null = external(Null) mut (v412 : Tuple(UInt, Token)* ) => {
    jump "_reachi_0"(v412 : Tuple(UInt, Token) ) Just Nothing },
  "_reachp_1"(Tuple(UInt) )Null = external(Null) mut (v414 : Tuple(UInt)* ) => {
    jump "_reachi_1"(v414 : Tuple(UInt) ) Just Nothing },
  "_reachp_3"(Tuple(UInt, Tuple(Address)) )Null = external(Null) mut (v421 : Tuple(UInt, Tuple(Address))* ) => {
    jump "_reachi_3"(v421 : Tuple(UInt, Tuple(Address)) ) Just Nothing }
  }
