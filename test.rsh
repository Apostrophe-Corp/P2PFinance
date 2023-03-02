.api(
    B.PrimaryBuy,
    (numberOfTokens) => {
    assume(numberOfTokens <= balance(token), "balance is less")
    check(numberOfTokens > 0, "can't be less than 0")
    check(!halt, "Code has been halted")
    },
    (numberOfTokens) => [price * numberOfTokens, [0, token]],
    (numberOfTokens, k) => {
        check(numberOfTokens <= balance(token));
        transfer(numberOfTokens, token).to(this)
        const v = numberOfTokens
        k(v)
        return [
            tokenInContract - v, // I assume this is the balance of your tokens
            tokensOnSale,
            tokensOutOfContract + numberOfTokens,
            salesIndex,
            true,
            halt
        ]
    }
)