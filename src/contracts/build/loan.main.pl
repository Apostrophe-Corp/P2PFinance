#lang pl
EP {
  apis = {
    Just "Borrower" = {
      repay = ("Borrower_repay", IT_Fun [UInt] UInt)
      },
    Just "Lender" = {
      lend = ("Lender_lend", IT_Fun [] Bool)
      }
    },
  exports = {
    
    },
  init = {
    maps = {
      
      }
    },
  m = {
    ("B", Nothing) = interact {
      created = IT_Fun [UInt] Null,
      getParams = IT_Fun [] Object({"address": Address, "amount": UInt, "collateral": UInt, "maturation": UInt, "principal": UInt, "tokCollateral": Token, "tokLoan": Token})
      };
    const initialInfo/469 : Tuple(UInt, UInt, Bool)* = [0, 0, false ];
    const tokInfos/470 : Array(Tuple(UInt, UInt, Bool), 2)* = array(Tuple(UInt, UInt, Bool), [initialInfo/469, initialInfo/469 ]);
    only(Right False) {
      const v476 : Object({"address": Address, "amount": UInt, "collateral": UInt, "maturation": UInt, "principal": UInt, "tokCollateral": Token, "tokLoan": Token})* = protect<Object({"address": Address, "amount": UInt, "collateral": UInt, "maturation": UInt, "principal": UInt, "tokCollateral": Token, "tokLoan": Token})>("B".interact.getParams());
      const v477 : Address! = v476.address;
      const v478 : UInt* = v476.amount;
      const v479 : UInt! = v476.collateral;
      const v480 : UInt! = v476.maturation;
      const v481 : UInt* = v476.principal;
      const v482 : Token* = v476.tokCollateral;
      const v483 : Token* = v476.tokLoan;
      const v491 : Bool! = v481 < v478;
      claim(CT_Assume)(v491, Nothing);
      const x/492 : Bool! = v482 == v483;
      const v493 : Bool! = (x/492 ? false : true);
      claim(CT_Assume)(v493, Nothing);
       };
    only(Right False) {
      const v494 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})! = {
        address = v477,
        amount = v478,
        maturation = v480,
        principal = v481};
       };
    send({
      amt = [0, ],
      as = (v482, v483, v479, v494 ),
      saved = (),
      soloSend = True,
      when = true,
      which = 0
      })
    recv({
      didSendv = didPublish/51 : Bool,
      from = B/495 : Address,
      lct = Just 0,
      msg = (tokCollateral/496 : Token, tokLoan/497 : Token, collateral/498 : UInt, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}) ),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/501 : UInt,
      timev = thisConsensusTime/500 : UInt,
      which = 0
      })
    {
      const tokInfo/502 : Tuple(UInt, UInt, Bool)! = tokInfos/470[0];
      const tokInfo'/503 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/502, 0, 0 );
      const tokInfos'/504 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokInfos/470, 0, tokInfo'/503 );
      const tokInfo/506 : Tuple(UInt, UInt, Bool)! = tokInfos'/504[1];
      const tokInfo'/507 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/506, 0, 0 );
      const tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokInfos'/504, 1, tokInfo'/507 );
      const v510 : Bool! = tokLoan/497 == tokCollateral/496;
      const v511 : Bool! = (v510 ? false : true);
      claim(CT_Require)(v511, Just "non-network tokens distinct");
      tokenInit(tokCollateral/496);
      tokenInit(tokLoan/497);
      checkPay(0, None);
      const v512 : UInt* = loanInfo/499.principal;
      const v513 : UInt* = loanInfo/499.amount;
      const v514 : Bool! = v512 < v513;
      claim(CT_Require)(v514, Nothing);
      fromConsensus 1 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (collateral/498 : UInt, collateral/498), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (thisConsensusTime/500 : UInt, thisConsensusTime/500), (tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2), tokInfos'/508), (v512 : UInt, v512), (v513 : UInt, v513)]) ;
      send({
        amt = [0, (collateral/498, tokCollateral/496 ) ],
        as = (),
        saved = (B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, collateral/498 : UInt, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), thisConsensusTime/500 : UInt, tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2), v512 : UInt, v513 : UInt ),
        soloSend = True,
        when = true,
        which = 1
        })
      recv({
        didSendv = didPublish/61 : Bool,
        from = B/515 : Address,
        lct = Just thisConsensusTime/500,
        msg = (),
        out = (),
        prev = 1,
        secsv = thisConsensusSecs/517 : UInt,
        timev = thisConsensusTime/516 : UInt,
        which = 1
        })
      {
        checkPay(0, None);
        const tokInfo/518 : Tuple(UInt, UInt, Bool)* = tokInfos'/508[0];
        const v519 : UInt! = tokInfo/518[0];
        const v520 : UInt! = v519 + collateral/498;
        const tokInfo'/522 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/518, 0, v520 );
        const tokInfos'/523 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokInfos'/508, 0, tokInfo'/522 );
        checkPay(collateral/498, Some tokCollateral/496);
        const v524 : Bool! = B/495 == B/515;
        claim(CT_Require)(v524, Just "sender correct");
        only(Right True) {
          protect<Null>("B".interact.created(thisConsensusTime/516 ));
           };
        const endTime/528 : UInt* = thisConsensusTime/500 + 50;
        loopvar {
          lender/529 : Address = B/495,
          loanAccepted/530 : Bool = false,
          thisConsensusTime/531 : UInt = thisConsensusTime/516,
          lastConsensusTime/532 : UInt = thisConsensusTime/500,
          tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/523,
          netBalance/538 : UInt = 0
          };
        invariant{
          () }
        while{
          const v548 : Bool! = endTime/528 > lastConsensusTime/532;
          const v549 : Bool! = (loanAccepted/530 ? false : true);
          const v550 : Bool! = (v548 ? v549 : false);
          
          return v550; }
        {
          fromConsensus 7 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (v512 : UInt, v512), (v513 : UInt, v513), (endTime/528 : UInt, endTime/528), (thisConsensusTime/531 : UInt, thisConsensusTime/531), (tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/537), (netBalance/538 : UInt, netBalance/538)]) ;
          recv({
            didSendv = didPublish/126 : Bool,
            from = lender/561 : Address,
            lct = Just thisConsensusTime/531,
            msg = (.fork89.msg/562 : Tuple() ),
            out = (),
            prev = 7,
            secsv = thisConsensusSecs/564 : UInt,
            timev = thisConsensusTime/563 : UInt,
            which = 5
            })
          {
            setApiDetails("Lender_lend", [Tuple()], None, AIC_SpreadArg );
            checkPay(0, None);
            const tokInfo/571 : Tuple(UInt, UInt, Bool)* = tokenInfos/537[1];
            const v572 : UInt! = tokInfo/571[0];
            const v573 : UInt! = v572 + v512;
            const tokInfo'/575 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/571, 0, v573 );
            const tokInfos'/576 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/537, 1, tokInfo'/575 );
            checkPay(v512, Some tokLoan/497);
            const v577 : Bool! = true;
            emitLog(api("Lender_lend"))(v577 );
            {
              lender/529 : Address = lender/561,
              loanAccepted/530 : Bool = true,
              thisConsensusTime/531 : UInt = thisConsensusTime/563,
              lastConsensusTime/532 : UInt = thisConsensusTime/531,
              tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/576,
              netBalance/538 : UInt = netBalance/538
              }
            continue; } }
        if loanAccepted/530 then {
          const tokInfo/609 : Tuple(UInt, UInt, Bool)* = tokenInfos/537[1];
          const v610 : UInt* = tokInfo/609[0];
          const v616 : UInt! = v610 - v610;
          const tokInfo'/618 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/609, 0, v616 );
          const tokInfos'/619 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/537, 1, tokInfo'/618 );
          transfer.(v610, Some tokLoan/497).to(B/495);
          const deadline/620 : UInt! = loanInfo/499.maturation;
          const endTime/622 : UInt* = lastConsensusTime/532 + deadline/620;
          loopvar {
            amountPaid/623 : UInt = 0,
            thisConsensusTime/624 : UInt = thisConsensusTime/531,
            lastConsensusTime/625 : UInt = lastConsensusTime/532,
            tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/619,
            netBalance/631 : UInt = netBalance/538
            };
          invariant{
            () }
          while{
            const v649 : Bool! = endTime/622 > lastConsensusTime/625;
            const v651 : Bool! = amountPaid/623 < v513;
            const v652 : Bool! = (v649 ? v651 : false);
            
            return v652; }
          {
            const v654 : Bool* = amountPaid/623 >= v513;
            fromConsensus 5 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (v513 : UInt, v513), (lender/529 : Address, lender/529), (endTime/622 : UInt, endTime/622), (amountPaid/623 : UInt, amountPaid/623), (thisConsensusTime/624 : UInt, thisConsensusTime/624), (tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/630), (netBalance/631 : UInt, netBalance/631), (v654 : Bool, v654)]) ;
            recv({
              didSendv = didPublish/331 : Bool,
              from = this/688 : Address,
              lct = Just thisConsensusTime/624,
              msg = (.fork192.msg/689 : Tuple(UInt) ),
              out = (),
              prev = 5,
              secsv = thisConsensusSecs/691 : UInt,
              timev = thisConsensusTime/690 : UInt,
              which = 4
              })
            {
              setApiDetails("Borrower_repay", [Tuple(UInt)], None, AIC_SpreadArg );
              const amt/693 : UInt* = .fork192.msg/689[0];
              const v694 : Bool! = this/688 == B/495;
              claim(CT_Require)(v694, Just "You are not the Borrower");
              const v696 : UInt* = amt/693 + amountPaid/623;
              const v698 : Bool* = v696 > v513;
              let excess/699 : UInt;
              local(Just excess/699 : UInt) if v698 then {
                const v702 : UInt! = v696 - v513;
                excess/699 : UInt = v702;
                 }
              else {
                excess/699 : UInt = 0;
                 };
              const payAmt/703 : UInt* = amt/693 - excess/699;
              checkPay(0, None);
              const tokInfo/708 : Tuple(UInt, UInt, Bool)* = tokenInfos/630[1];
              const v709 : UInt! = tokInfo/708[0];
              const v710 : UInt! = v709 + payAmt/703;
              const tokInfo'/712 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/708, 0, v710 );
              const tokInfos'/713 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/630, 1, tokInfo'/712 );
              checkPay(payAmt/703, Some tokLoan/497);
              let excess/720 : UInt;
              local(Just excess/720 : UInt) if v698 then {
                const v723 : UInt! = v696 - v513;
                excess/720 : UInt = v723;
                 }
              else {
                excess/720 : UInt = 0;
                 };
              const payAmt/724 : UInt! = amt/693 - excess/720;
              emitLog(api("Borrower_repay"))(amountPaid/623 );
              const amountPaid/732 : UInt! = amountPaid/623 + payAmt/724;
              {
                amountPaid/623 : UInt = amountPaid/732,
                thisConsensusTime/624 : UInt = thisConsensusTime/690,
                lastConsensusTime/625 : UInt = thisConsensusTime/624,
                tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/713,
                netBalance/631 : UInt = netBalance/631
                }
              continue; } }
          const tokInfo/735 : Tuple(UInt, UInt, Bool)* = tokenInfos/630[0];
          const v736 : UInt* = tokInfo/735[0];
          const v738 : Bool* = amountPaid/623 < v513;
          const v739 : Address! = (v738 ? lender/529 : B/495);
          const v745 : UInt! = v736 - v736;
          const tokInfo'/747 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/735, 0, v745 );
          const tokInfos'/748 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/630, 0, tokInfo'/747 );
          transfer.(v736, Some tokCollateral/496).to(v739);
          const tokInfo/749 : Tuple(UInt, UInt, Bool)! = tokInfos'/748[1];
          const v750 : UInt! = tokInfo/749[0];
          const v753 : Address! = (v738 ? B/495 : lender/529);
          transfer.(v750, Some tokLoan/497).to(v753);
          transfer.(netBalance/631, None).to(B/495);
          fromConsensus 4 (halt [tokLoan/497, tokCollateral/496]) ;
           }
        else {
          const tokInfo/585 : Tuple(UInt, UInt, Bool)! = tokenInfos/537[0];
          const v586 : UInt! = tokInfo/585[0];
          transfer.(v586, Some tokCollateral/496).to(B/495);
          transfer.(netBalance/538, None).to(B/495);
          fromConsensus 6 (halt [tokLoan/497, tokCollateral/496]) ;
           }; } },
    ("Borrower_repay", Just 5) = interact {
      in = IT_Fun [] Tuple(UInt),
      out = IT_Fun [Tuple(UInt),UInt] Null
      };
    fromConsensus 5 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (v513 : UInt, v513), (lender/529 : Address, lender/529), (endTime/622 : UInt, endTime/622), (amountPaid/623 : UInt, amountPaid/623), (thisConsensusTime/624 : UInt, thisConsensusTime/624), (tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/630), (netBalance/631 : UInt, netBalance/631), (v654 : Bool, v654)]) ;
    only(Right False) {
      const this/655 : Address! = selfAddress("Borrower_repay", True, 227 )();
      const .api164.dom/657 : Tuple(UInt)* = protect<Tuple(UInt)>("Borrower_repay".interact.in());
      const v658 : UInt* = .api164.dom/657[0];
      const v660 : Bool! = this/655 == B/495;
      claim(CT_Assume)(v660, Just "You are not the Borrower");
      const v662 : UInt* = v658 + amountPaid/623;
      const v664 : Bool! = v662 > v513;
       };
    only(Right False) {
      let excess/679 : UInt;
      local(Just excess/679 : UInt) if v664 then {
        const v682 : UInt! = v662 - v513;
        excess/679 : UInt = v682;
         }
      else {
        excess/679 : UInt = 0;
         };
      const payAmt/683 : UInt! = v658 - excess/679;
       };
    send({
      amt = [0, (payAmt/683, tokLoan/497 ) ],
      as = (.api164.dom/657 ),
      saved = (B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, v513 : UInt, lender/529 : Address, endTime/622 : UInt, amountPaid/623 : UInt, thisConsensusTime/624 : UInt, tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), netBalance/631 : UInt, v654 : Bool ),
      soloSend = False,
      when = true,
      which = 4
      })
    recv({
      didSendv = didPublish/331 : Bool,
      from = this/688 : Address,
      lct = Nothing,
      msg = (.fork192.msg/689 : Tuple(UInt) ),
      out = (),
      prev = 5,
      secsv = thisConsensusSecs/691 : UInt,
      timev = thisConsensusTime/690 : UInt,
      which = 4
      })
    {
      setApiDetails("Borrower_repay", [Tuple(UInt)], None, AIC_SpreadArg );
      const amt/693 : UInt* = .fork192.msg/689[0];
      const v694 : Bool! = this/688 == B/495;
      claim(CT_Require)(v694, Just "You are not the Borrower");
      const v696 : UInt* = amt/693 + amountPaid/623;
      const v698 : Bool* = v696 > v513;
      let excess/699 : UInt;
      local(Just excess/699 : UInt) if v698 then {
        const v702 : UInt! = v696 - v513;
        excess/699 : UInt = v702;
         }
      else {
        excess/699 : UInt = 0;
         };
      const payAmt/703 : UInt* = amt/693 - excess/699;
      checkPay(0, None);
      const tokInfo/708 : Tuple(UInt, UInt, Bool)* = tokenInfos/630[1];
      const v709 : UInt! = tokInfo/708[0];
      const v710 : UInt! = v709 + payAmt/703;
      const tokInfo'/712 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/708, 0, v710 );
      const tokInfos'/713 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokenInfos/630, 1, tokInfo'/712 );
      checkPay(payAmt/703, Some tokLoan/497);
      let excess/720 : UInt;
      local(Just excess/720 : UInt) if v698 then {
        const v723 : UInt! = v696 - v513;
        excess/720 : UInt = v723;
         }
      else {
        excess/720 : UInt = 0;
         };
      const payAmt/724 : UInt! = amt/693 - excess/720;
      const .api164.rngl/726 : UInt* = emitLog(api("Borrower_repay"))(amountPaid/623 );
      only(Right True) {
        local(Just v728 : Null) if didPublish/331 then {
          protect<Null>("Borrower_repay".interact.out(.fork192.msg/689, .api164.rngl/726 ));
           }
        else {
           };
         };
      const amountPaid/732 : UInt* = amountPaid/623 + payAmt/724;
      const amountPaid/976 : UInt! = amountPaid/732;
      const thisConsensusTime/977 : UInt! = thisConsensusTime/690;
      const tokenInfos/979 : Array(Tuple(UInt, UInt, Bool), 2)! = tokInfos'/713;
      const netBalance/980 : UInt! = netBalance/631;
      const v981 : Bool! = endTime/622 > thisConsensusTime/624;
      const v982 : Bool* = amountPaid/732 < v513;
      const v983 : Bool! = (v981 ? v982 : false);
      if v983 then {
        const v984 : Bool! = amountPaid/732 >= v513;
        fromConsensus 5 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (v513 : UInt, v513), (lender/529 : Address, lender/529), (endTime/622 : UInt, endTime/622), (amountPaid/623 : UInt, amountPaid/976), (thisConsensusTime/624 : UInt, thisConsensusTime/977), (tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/979), (netBalance/631 : UInt, netBalance/980), (v654 : Bool, v984)]) ;
         }
      else {
        const tokInfo/986 : Tuple(UInt, UInt, Bool)* = tokInfos'/713[0];
        const v987 : UInt* = tokInfo/986[0];
        const v989 : Address! = (v982 ? lender/529 : B/495);
        const v990 : UInt! = v987 - v987;
        const tokInfo'/991 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/986, 0, v990 );
        const tokInfos'/992 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokInfos'/713, 0, tokInfo'/991 );
        transfer.(v987, Some tokCollateral/496).to(v989);
        const tokInfo/993 : Tuple(UInt, UInt, Bool)! = tokInfos'/992[1];
        const v994 : UInt! = tokInfo/993[0];
        const v995 : Address! = (v982 ? B/495 : lender/529);
        transfer.(v994, Some tokLoan/497).to(v995);
        transfer.(netBalance/631, None).to(B/495);
        fromConsensus 4 (halt [tokLoan/497, tokCollateral/496]) ;
         }; },
    ("Lender_lend", Just 7) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Bool] Null
      };
    fromConsensus 7 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (v512 : UInt, v512), (v513 : UInt, v513), (endTime/528 : UInt, endTime/528), (thisConsensusTime/531 : UInt, thisConsensusTime/531), (tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/537), (netBalance/538 : UInt, netBalance/538)]) ;
    only(Right False) {
      const .api71.dom/553 : Tuple()* = protect<Tuple()>("Lender_lend".interact.in());
       };
    send({
      amt = [0, (v512, tokLoan/497 ) ],
      as = (.api71.dom/553 ),
      saved = (B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), v512 : UInt, v513 : UInt, endTime/528 : UInt, thisConsensusTime/531 : UInt, tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), netBalance/538 : UInt ),
      soloSend = False,
      when = true,
      which = 5
      })
    recv({
      didSendv = didPublish/126 : Bool,
      from = lender/561 : Address,
      lct = Nothing,
      msg = (.fork89.msg/562 : Tuple() ),
      out = (),
      prev = 7,
      secsv = thisConsensusSecs/564 : UInt,
      timev = thisConsensusTime/563 : UInt,
      which = 5
      })
    {
      setApiDetails("Lender_lend", [Tuple()], None, AIC_SpreadArg );
      checkPay(0, None);
      const tokInfo/571 : Tuple(UInt, UInt, Bool)* = tokenInfos/537[1];
      const v572 : UInt! = tokInfo/571[0];
      const v573 : UInt! = v572 + v512;
      const tokInfo'/575 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/571, 0, v573 );
      const tokInfos'/576 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokenInfos/537, 1, tokInfo'/575 );
      checkPay(v512, Some tokLoan/497);
      const v577 : Bool! = true;
      const .api71.rngl/578 : Bool* = emitLog(api("Lender_lend"))(v577 );
      only(Right True) {
        local(Just v580 : Null) if didPublish/126 then {
          protect<Null>("Lender_lend".interact.out(.fork89.msg/562, .api71.rngl/578 ));
           }
        else {
           };
         };
      const lender/996 : Address! = lender/561;
      const thisConsensusTime/998 : UInt! = thisConsensusTime/563;
      const tokenInfos/1000 : Array(Tuple(UInt, UInt, Bool), 2)! = tokInfos'/576;
      const netBalance/1001 : UInt! = netBalance/538;
      const v1002 : Bool! = endTime/528 > thisConsensusTime/531;
      const v1004 : Bool! = (v1002 ? false : false);
      if v1004 then {
        fromConsensus 7 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (v512 : UInt, v512), (v513 : UInt, v513), (endTime/528 : UInt, endTime/528), (thisConsensusTime/531 : UInt, thisConsensusTime/998), (tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/1000), (netBalance/538 : UInt, netBalance/1001)]) ;
         }
      else {
        const tokInfo/1005 : Tuple(UInt, UInt, Bool)* = tokInfos'/576[1];
        const v1006 : UInt* = tokInfo/1005[0];
        const v1007 : UInt! = v1006 - v1006;
        const tokInfo'/1008 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1005, 0, v1007 );
        const tokInfos'/1009 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokInfos'/576, 1, tokInfo'/1008 );
        transfer.(v1006, Some tokLoan/497).to(B/495);
        const deadline/1010 : UInt! = loanInfo/499.maturation;
        const endTime/1011 : UInt* = thisConsensusTime/531 + deadline/1010;
        const amountPaid/1056 : UInt! = 0;
        const thisConsensusTime/1057 : UInt! = thisConsensusTime/563;
        const tokenInfos/1059 : Array(Tuple(UInt, UInt, Bool), 2)! = tokInfos'/1009;
        const netBalance/1060 : UInt! = netBalance/538;
        const v1061 : Bool! = endTime/1011 > thisConsensusTime/531;
        const v1062 : Bool* = 0 < v513;
        const v1063 : Bool! = (v1061 ? v1062 : false);
        if v1063 then {
          const v1064 : Bool! = 0 >= v513;
          fromConsensus 5 (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (v513 : UInt, v513), (lender/529 : Address, lender/996), (endTime/622 : UInt, endTime/1011), (amountPaid/623 : UInt, amountPaid/1056), (thisConsensusTime/624 : UInt, thisConsensusTime/1057), (tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/1059), (netBalance/631 : UInt, netBalance/1060), (v654 : Bool, v1064)]) ;
           }
        else {
          const tokInfo/1066 : Tuple(UInt, UInt, Bool)* = tokInfos'/1009[0];
          const v1067 : UInt* = tokInfo/1066[0];
          const v1069 : Address! = (v1062 ? lender/561 : B/495);
          const v1070 : UInt! = v1067 - v1067;
          const tokInfo'/1071 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1066, 0, v1070 );
          const tokInfos'/1072 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokInfos'/1009, 0, tokInfo'/1071 );
          transfer.(v1067, Some tokCollateral/496).to(v1069);
          const tokInfo/1073 : Tuple(UInt, UInt, Bool)! = tokInfos'/1072[1];
          const v1074 : UInt! = tokInfo/1073[0];
          const v1075 : Address! = (v1062 ? B/495 : lender/561);
          transfer.(v1074, Some tokLoan/497).to(v1075);
          transfer.(netBalance/538, None).to(B/495);
          fromConsensus 4 (halt [tokLoan/497, tokCollateral/496]) ;
           }; }; }
    }
  }
CP {
  apis = {
    "Borrower_repay" = {
      5 = {
        compile = AIC_SpreadArg,
        mcase_id = Nothing,
        msg_tys = [Tuple(UInt)],
        ret = UInt,
        which = 4
        }
      },
    "Lender_lend" = {
      7 = {
        compile = AIC_SpreadArg,
        mcase_id = Nothing,
        msg_tys = [Tuple()],
        ret = Bool,
        which = 5
        }
      }
    },
  events = {
    
    },
  handlers = {
    0 = {
      B/495 : Address,
      (between [Nothing] [Nothing]),
      last = 0,
      [],
      [],
      [tokCollateral/496 : Token*, tokLoan/497 : Token*, collateral/498 : UInt*, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})*],
      [Token, Token, UInt, Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})],
      timev = thisConsensusTime/500 : UInt,
      secsv = thisConsensusSecs/501 : UInt,
      {
        const initialInfo/469 : Tuple(UInt, UInt, Bool)* = [0, 0, false ];
        const tokInfos/470 : Array(Tuple(UInt, UInt, Bool), 2)* = array(Tuple(UInt, UInt, Bool), [initialInfo/469, initialInfo/469 ]);
        const tokInfo/502 : Tuple(UInt, UInt, Bool)! = tokInfos/470[0];
        const tokInfo'/503 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/502, 0, 0 );
        const tokInfos'/504 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokInfos/470, 0, tokInfo'/503 );
        const tokInfo/506 : Tuple(UInt, UInt, Bool)! = tokInfos'/504[1];
        const tokInfo'/507 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/506, 0, 0 );
        const tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2)* = Array.set(tokInfos'/504, 1, tokInfo'/507 );
        const v510 : Bool! = tokLoan/497 == tokCollateral/496;
        const v511 : Bool! = (v510 ? false : true);
        claim(CT_Require)(v511, Just "non-network tokens distinct");
        tokenInit(tokCollateral/496);
        tokenInit(tokLoan/497);
        checkPay(0, None);
        const v512 : UInt* = loanInfo/499.principal;
        const v513 : UInt* = loanInfo/499.amount;
        const v514 : Bool! = v512 < v513;
        claim(CT_Require)(v514, Nothing);
        (from 1, (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (collateral/498 : UInt, collateral/498), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (thisConsensusTime/500 : UInt, thisConsensusTime/500), (tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2), tokInfos'/508), (v512 : UInt, v512), (v513 : UInt, v513)])) }
       },
    1 = {
      B/515 : Address,
      (between [Nothing] [Nothing]),
      last = 1,
      [B/495 : Address*, tokCollateral/496 : Token*, tokLoan/497 : Token!, collateral/498 : UInt*, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})!, thisConsensusTime/500 : UInt*, tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2)*, v512 : UInt!, v513 : UInt!],
      [Address, Token, Token, UInt, Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), UInt, Array(Tuple(UInt, UInt, Bool), 2), UInt, UInt],
      [],
      [],
      timev = thisConsensusTime/516 : UInt,
      secsv = thisConsensusSecs/517 : UInt,
      {
        checkPay(0, None);
        const tokInfo/518 : Tuple(UInt, UInt, Bool)* = tokInfos'/508[0];
        const v519 : UInt! = tokInfo/518[0];
        const v520 : UInt! = v519 + collateral/498;
        const tokInfo'/522 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/518, 0, v520 );
        const tokInfos'/523 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokInfos'/508, 0, tokInfo'/522 );
        checkPay(collateral/498, Some tokCollateral/496);
        const v524 : Bool! = B/495 == B/515;
        claim(CT_Require)(v524, Just "sender correct");
        const endTime/528 : UInt! = thisConsensusTime/500 + 50;
        (jump! 2 [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), v512 : UInt, v513 : UInt, endTime/528 : UInt] {
          lender/529 : Address = B/495,
          loanAccepted/530 : Bool = false,
          thisConsensusTime/531 : UInt = thisConsensusTime/516,
          lastConsensusTime/532 : UInt = thisConsensusTime/500,
          tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/523,
          netBalance/538 : UInt = 0
          }) }
       },
    2 = {
      loop!,
      [B/495 : Address*, tokCollateral/496 : Token*, tokLoan/497 : Token*, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})*, v512 : UInt*, v513 : UInt*, endTime/528 : UInt*],
      [lender/529 : Address!, loanAccepted/530 : Bool*, thisConsensusTime/531 : UInt*, lastConsensusTime/532 : UInt*, tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2)*, netBalance/538 : UInt*],
      {
        const v548 : Bool! = endTime/528 > lastConsensusTime/532;
        const v549 : Bool! = (loanAccepted/530 ? false : true);
        const v550 : Bool! = (v548 ? v549 : false);
        if v550 then {
          (from 7, (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), loanInfo/499), (v512 : UInt, v512), (v513 : UInt, v513), (endTime/528 : UInt, endTime/528), (thisConsensusTime/531 : UInt, thisConsensusTime/531), (tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/537), (netBalance/538 : UInt, netBalance/538)])) }
        else {
          if loanAccepted/530 then {
            const tokInfo/609 : Tuple(UInt, UInt, Bool)* = tokenInfos/537[1];
            const v610 : UInt* = tokInfo/609[0];
            const v616 : UInt! = v610 - v610;
            const tokInfo'/618 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/609, 0, v616 );
            const tokInfos'/619 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/537, 1, tokInfo'/618 );
            transfer.(v610, Some tokLoan/497).to(B/495);
            const deadline/620 : UInt! = loanInfo/499.maturation;
            const endTime/622 : UInt! = lastConsensusTime/532 + deadline/620;
            (jump! 3 [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, v513 : UInt, lender/529 : Address, endTime/622 : UInt] {
              amountPaid/623 : UInt = 0,
              thisConsensusTime/624 : UInt = thisConsensusTime/531,
              lastConsensusTime/625 : UInt = lastConsensusTime/532,
              tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/619,
              netBalance/631 : UInt = netBalance/538
              }) }
          else {
            const tokInfo/585 : Tuple(UInt, UInt, Bool)! = tokenInfos/537[0];
            const v586 : UInt! = tokInfo/585[0];
            transfer.(v586, Some tokCollateral/496).to(B/495);
            transfer.(netBalance/538, None).to(B/495);
            (from 6, (halt [tokLoan/497, tokCollateral/496])) }; }; }
       },
    3 = {
      loop!,
      [B/495 : Address*, tokCollateral/496 : Token*, tokLoan/497 : Token*, v513 : UInt*, lender/529 : Address*, endTime/622 : UInt*],
      [amountPaid/623 : UInt*, thisConsensusTime/624 : UInt*, lastConsensusTime/625 : UInt!, tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2)*, netBalance/631 : UInt*],
      {
        const v649 : Bool! = endTime/622 > lastConsensusTime/625;
        const v651 : Bool* = amountPaid/623 < v513;
        const v652 : Bool! = (v649 ? v651 : false);
        if v652 then {
          const v654 : Bool* = amountPaid/623 >= v513;
          (from 5, (continue [(B/495 : Address, B/495), (tokCollateral/496 : Token, tokCollateral/496), (tokLoan/497 : Token, tokLoan/497), (v513 : UInt, v513), (lender/529 : Address, lender/529), (endTime/622 : UInt, endTime/622), (amountPaid/623 : UInt, amountPaid/623), (thisConsensusTime/624 : UInt, thisConsensusTime/624), (tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), tokenInfos/630), (netBalance/631 : UInt, netBalance/631), (v654 : Bool, v654)])) }
        else {
          const tokInfo/735 : Tuple(UInt, UInt, Bool)* = tokenInfos/630[0];
          const v736 : UInt* = tokInfo/735[0];
          const v739 : Address! = (v651 ? lender/529 : B/495);
          const v745 : UInt! = v736 - v736;
          const tokInfo'/747 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/735, 0, v745 );
          const tokInfos'/748 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/630, 0, tokInfo'/747 );
          transfer.(v736, Some tokCollateral/496).to(v739);
          const tokInfo/749 : Tuple(UInt, UInt, Bool)! = tokInfos'/748[1];
          const v750 : UInt! = tokInfo/749[0];
          const v753 : Address! = (v651 ? B/495 : lender/529);
          transfer.(v750, Some tokLoan/497).to(v753);
          transfer.(netBalance/631, None).to(B/495);
          (from 4, (halt [tokLoan/497, tokCollateral/496])) }; }
       },
    4 = {
      this/688 : Address,
      (between [Nothing] [Nothing]),
      last = 5,
      [B/495 : Address*, tokCollateral/496 : Token!, tokLoan/497 : Token*, v513 : UInt*, lender/529 : Address!, endTime/622 : UInt!, amountPaid/623 : UInt*, thisConsensusTime/624 : UInt!, tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2)*, netBalance/631 : UInt!, v654 : Bool#],
      [Address, Token, Token, UInt, Address, UInt, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 2), UInt, Bool],
      [.fork192.msg/689 : Tuple(UInt)!],
      [Tuple(UInt)],
      timev = thisConsensusTime/690 : UInt,
      secsv = thisConsensusSecs/691 : UInt,
      {
        setApiDetails("Borrower_repay", [Tuple(UInt)], None, AIC_SpreadArg );
        const amt/693 : UInt* = .fork192.msg/689[0];
        const v694 : Bool! = this/688 == B/495;
        claim(CT_Require)(v694, Just "You are not the Borrower");
        const v696 : UInt* = amt/693 + amountPaid/623;
        const v698 : Bool* = v696 > v513;
        let excess/699 : UInt;
        local(Just excess/699 : UInt) if v698 then {
          const v702 : UInt! = v696 - v513;
          excess/699 : UInt = v702;
           }
        else {
          excess/699 : UInt = 0;
           };
        const payAmt/703 : UInt* = amt/693 - excess/699;
        checkPay(0, None);
        const tokInfo/708 : Tuple(UInt, UInt, Bool)* = tokenInfos/630[1];
        const v709 : UInt! = tokInfo/708[0];
        const v710 : UInt! = v709 + payAmt/703;
        const tokInfo'/712 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/708, 0, v710 );
        const tokInfos'/713 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/630, 1, tokInfo'/712 );
        checkPay(payAmt/703, Some tokLoan/497);
        let excess/720 : UInt;
        local(Just excess/720 : UInt) if v698 then {
          const v723 : UInt! = v696 - v513;
          excess/720 : UInt = v723;
           }
        else {
          excess/720 : UInt = 0;
           };
        const payAmt/724 : UInt! = amt/693 - excess/720;
        emitLog(api("Borrower_repay"))(amountPaid/623 );
        const amountPaid/732 : UInt! = amountPaid/623 + payAmt/724;
        (jump! 3 [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, v513 : UInt, lender/529 : Address, endTime/622 : UInt] {
          amountPaid/623 : UInt = amountPaid/732,
          thisConsensusTime/624 : UInt = thisConsensusTime/690,
          lastConsensusTime/625 : UInt = thisConsensusTime/624,
          tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/713,
          netBalance/631 : UInt = netBalance/631
          }) }
       },
    5 = {
      lender/561 : Address,
      (between [Nothing] [Nothing]),
      last = 7,
      [B/495 : Address!, tokCollateral/496 : Token!, tokLoan/497 : Token*, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt})!, v512 : UInt*, v513 : UInt!, endTime/528 : UInt!, thisConsensusTime/531 : UInt!, tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2)*, netBalance/538 : UInt!],
      [Address, Token, Token, Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), UInt, UInt, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 2), UInt],
      [.fork89.msg/562 : Tuple()#],
      [Tuple()],
      timev = thisConsensusTime/563 : UInt,
      secsv = thisConsensusSecs/564 : UInt,
      {
        setApiDetails("Lender_lend", [Tuple()], None, AIC_SpreadArg );
        checkPay(0, None);
        const tokInfo/571 : Tuple(UInt, UInt, Bool)* = tokenInfos/537[1];
        const v572 : UInt! = tokInfo/571[0];
        const v573 : UInt! = v572 + v512;
        const tokInfo'/575 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/571, 0, v573 );
        const tokInfos'/576 : Array(Tuple(UInt, UInt, Bool), 2)! = Array.set(tokenInfos/537, 1, tokInfo'/575 );
        checkPay(v512, Some tokLoan/497);
        const v577 : Bool! = true;
        emitLog(api("Lender_lend"))(v577 );
        (jump! 2 [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), v512 : UInt, v513 : UInt, endTime/528 : UInt] {
          lender/529 : Address = lender/561,
          loanAccepted/530 : Bool = true,
          thisConsensusTime/531 : UInt = thisConsensusTime/563,
          lastConsensusTime/532 : UInt = thisConsensusTime/531,
          tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2) = tokInfos'/576,
          netBalance/538 : UInt = netBalance/538
          }) }
       }
    },
  init = {
    maps = {
      
      }
    },
  views = {
    vis = {
      1 = (view [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, collateral/498 : UInt, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), thisConsensusTime/500 : UInt, tokInfos'/508 : Array(Tuple(UInt, UInt, Bool), 2), v512 : UInt, v513 : UInt] {
        
        }),
      5 = (view [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, v513 : UInt, lender/529 : Address, endTime/622 : UInt, amountPaid/623 : UInt, thisConsensusTime/624 : UInt, tokenInfos/630 : Array(Tuple(UInt, UInt, Bool), 2), netBalance/631 : UInt, v654 : Bool] {
        Just "LoanViews" = {
          amountPaid = export (Nothing) => {
          return amountPaid/623;},
          loanPaid = export (Nothing) => {
          return v654;}
          }
        }),
      7 = (view [B/495 : Address, tokCollateral/496 : Token, tokLoan/497 : Token, loanInfo/499 : Object({"address": Address, "amount": UInt, "maturation": UInt, "principal": UInt}), v512 : UInt, v513 : UInt, endTime/528 : UInt, thisConsensusTime/531 : UInt, tokenInfos/537 : Array(Tuple(UInt, UInt, Bool), 2), netBalance/538 : UInt] {
        
        })
      },
    vs = {
      Just "LoanViews" = {
        amountPaid = (IT_Val UInt, []),
        loanPaid = (IT_Val Bool, [])
        }
      }
    }
  }
