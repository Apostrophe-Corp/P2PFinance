// Automatically generated with Reach 0.1.13 (f79282c4)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  bool elem0;
  uint256 elem1;
  uint256 elem2;
  }
struct T2 {
  uint256 elem0;
  }
enum _enum_T3 {Borrower_claimRefund0_270, Borrower_repay0_270, Lender_claim0_270}
struct T3 {
  _enum_T3 which;
  bool _Borrower_claimRefund0_270;
  T2 _Borrower_repay0_270;
  bool _Lender_claim0_270;
  }
struct T4 {
  uint256 elem0;
  T3 elem1;
  }
enum _enum_T5 {Borrower_close0_93, Lender_lend0_93}
struct T5 {
  _enum_T5 which;
  bool _Borrower_close0_93;
  bool _Lender_lend0_93;
  }
struct T6 {
  uint256 elem0;
  T5 elem1;
  }
struct T7 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T9 {
  address payable v766;
  address payable v767;
  uint256 v777;
  address payable v788;
  uint256 v790;
  bool v956;
  uint256 v981;
  uint256 v982;
  uint256 v983;
  T7[1] v989;
  uint256 v990;
  bool v1012;
  }
struct T10 {
  address payable _address;
  uint256 _amount;
  uint256 _maturation;
  uint256 _principal;
  }
struct T11 {
  address payable v766;
  address payable v767;
  T10 v769;
  uint256 v776;
  uint256 v777;
  bool v787;
  address payable v788;
  bool v789;
  T7[1] v796;
  uint256 v797;
  bool v818;
  }
struct T12 {
  uint256 elem0;
  address payable elem1;
  uint256 elem2;
  T10 elem3;
  }
struct T13 {
  address payable v766;
  address payable v767;
  uint256 v768;
  T10 v769;
  T7[1] v774;
  uint256 v776;
  uint256 v777;
  }
struct T14 {
  address payable elem0;
  address payable elem1;
  T10 elem2;
  uint256 elem3;
  uint256 elem4;
  bool elem5;
  address payable elem6;
  bool elem7;
  uint256 elem8;
  T7[1] elem9;
  uint256 elem10;
  }
struct T15 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  address payable elem3;
  uint256 elem4;
  bool elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  T7[1] elem9;
  uint256 elem10;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set8(T7[1] memory arr, uint256 idx, T7 memory val) internal  returns (T7[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T12 _a);
  event _reach_e1(address _who, T2 _a);
  event _reach_e4(address _who, T4 _a);
  event _reach_e5(address _who, T6 _a);
  event _reach_oe_v1149(bool v0);
  event _reach_oe_v1269(T0 v0);
  event _reach_oe_v1374(bool v0);
  event _reach_oe_v891(bool v0);
  event _reach_oe_v947(bool v0);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_Borrower_claimRefund;
    bool _reachr_Borrower_close;
    T0 _reachr_Borrower_repay;
    bool _reachr_Lender_claim;
    bool _reachr_Lender_lend;
    uint256 _reachr_LoanViews_amountPaid;
    uint256 _reachr_LoanViews_beginBlock;
    bool _reachr_LoanViews_isLive;
    bool _reachr_LoanViews_loanPaid;
    }
  struct _F2909 {
    bool v2876;
    T3 v2877;
    }
  function _reacha_Borrower_claimRefund(bool _a, Memory memory _Memory) internal  {
    _F2909 memory _f;
    _f.v2877.which = _enum_T3.Borrower_claimRefund0_270;
    _f.v2877._Borrower_claimRefund0_270 = _f.v2876;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v2877;
    _reachi_4(_ja, _Memory);
    }
  struct _F2910 {
    bool v2880;
    T5 v2881;
    }
  function _reacha_Borrower_close(bool _a, Memory memory _Memory) internal  {
    _F2910 memory _f;
    _f.v2881.which = _enum_T5.Borrower_close0_93;
    _f.v2881._Borrower_close0_93 = _f.v2880;
    T6  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v2881;
    _reachi_5(_ja, _Memory);
    }
  struct _F2911 {
    T2 v2885;
    T3 v2886;
    }
  function _reacha_Borrower_repay(uint256 _a, Memory memory _Memory) internal  {
    _F2911 memory _f;
    _f.v2885.elem0 = _a;
    _f.v2886.which = _enum_T3.Borrower_repay0_270;
    _f.v2886._Borrower_repay0_270 = _f.v2885;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v2886;
    _reachi_4(_ja, _Memory);
    }
  struct _F2912 {
    bool v2890;
    T3 v2891;
    }
  function _reacha_Lender_claim(bool _a, Memory memory _Memory) internal  {
    _F2912 memory _f;
    _f.v2891.which = _enum_T3.Lender_claim0_270;
    _f.v2891._Lender_claim0_270 = _f.v2890;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v2891;
    _reachi_4(_ja, _Memory);
    }
  struct _F2913 {
    bool v2894;
    T5 v2895;
    }
  function _reacha_Lender_lend(bool _a, Memory memory _Memory) internal  {
    _F2913 memory _f;
    _f.v2895.which = _enum_T5.Lender_lend0_93;
    _f.v2895._Lender_lend0_93 = _f.v2894;
    T6  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v2895;
    _reachi_5(_ja, _Memory);
    }
  function _reacha_LoanViews_amountPaid(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(5))), uint256(7) /*'(./src/contracts/loan_nnt_algo.rsh:35:27:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    _Memory._reachr_LoanViews_amountPaid = _svs.v982;
    }
  function _reacha_LoanViews_beginBlock(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(5))), uint256(8) /*'(./src/contracts/loan_nnt_algo.rsh:36:27:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    _Memory._reachr_LoanViews_beginBlock = _svs.v790;
    }
  function _reacha_LoanViews_isLive(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(7))) {
      reachRequire(((current_step == uint256(5))), uint256(9) /*'(./src/contracts/loan_nnt_algo.rsh:33:23:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T9 memory _svs) = abi.decode(current_svbs, (T9));
      _Memory._reachr_LoanViews_isLive = _svs.v956;
      }
    else {
      reachRequire(((current_step == uint256(7))), uint256(10) /*'(./src/contracts/loan_nnt_algo.rsh:33:23:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T11 memory _svs) = abi.decode(current_svbs, (T11));
      _Memory._reachr_LoanViews_isLive = _svs.v818;
      }
    }
  function _reacha_LoanViews_loanPaid(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(5))), uint256(11) /*'(./src/contracts/loan_nnt_algo.rsh:34:25:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    _Memory._reachr_LoanViews_loanPaid = _svs.v1012;
    }
  struct _F2918 {
    T7 v744;
    T7[1] v745;
    }
  function _reachi_0(T12 memory _a, Memory memory _Memory) internal  {
    _F2918 memory _f;
    reachRequire((! locked), uint256(12) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(13) /*'time check at ./src/contracts/loan_nnt_algo.rsh:47:11:dot'*/);
    _f.v744.elem0 = uint256(0);
    _f.v744.elem1 = uint256(0);
    _f.v744.elem2 = false;
    _f.v745[0] = _f.v744;
    
    reachRequire((msg.value == uint256(0)), uint256(14) /*'(./src/contracts/loan_nnt_algo.rsh:47:11:dot,[],"verify network token pay amount")'*/);
    reachRequire(((((_a.elem3)._principal) < ((_a.elem3)._amount))), uint256(15) /*'(./src/contracts/loan_nnt_algo.rsh:48:16:application,[],Nothing)'*/);
    T13 memory nsvs;
    nsvs.v766 = payable(msg.sender);
    nsvs.v767 = (_a.elem1);
    nsvs.v768 = (_a.elem2);
    nsvs.v769 = (_a.elem3);
    nsvs.v774 = (array_set8(_f.v745, uint256(0), (T7({elem0: uint256(0), elem1: (_f.v745[uint256(0)]).elem1, elem2: (_f.v745[uint256(0)]).elem2}))));
    nsvs.v776 = ((_a.elem3)._principal);
    nsvs.v777 = ((_a.elem3)._amount);
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_1(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(1)), uint256(16) /*'state check at ./src/contracts/loan_nnt_algo.rsh:50:11:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(17) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(18) /*'time check at ./src/contracts/loan_nnt_algo.rsh:50:11:dot'*/);
    reachRequire((msg.value == _svs.v768), uint256(19) /*'(./src/contracts/loan_nnt_algo.rsh:50:11:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v766 == payable(msg.sender))), uint256(20) /*'(./src/contracts/loan_nnt_algo.rsh:50:11:dot,[],Just "sender correct")'*/);
    T14  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v769;
    _ja.elem3 = _svs.v776;
    _ja.elem4 = _svs.v777;
    _ja.elem5 = true;
    _ja.elem6 = _svs.v766;
    _ja.elem7 = false;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v774;
    _ja.elem10 = _svs.v768;
    _reachl_2(_ja, _Memory);
    }
  struct _F2920 {
    T2 v1192;
    uint256 v1208;
    bool v1210;
    uint256 v1211;
    uint256 v1215;
    uint256 v1259;
    uint256 v1265;
    T0 v1269;
    }
  function _reachi_4(T4 memory _a, Memory memory _Memory) internal  {
    _F2920 memory _f;
    reachRequire((current_step == uint256(5)), uint256(21) /*'state check at ./src/contracts/loan_nnt_algo.rsh:88:50:dot'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    reachRequire((! locked), uint256(22) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(23) /*'time check at ./src/contracts/loan_nnt_algo.rsh:88:50:dot'*/);
    if ((_a.elem1).which == _enum_T3.Borrower_claimRefund0_270) {
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v767, uint256(0))), uint256(25) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v1149( (false));
    _Memory._reachr_Borrower_claimRefund = (false);
    T15  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v777;
    _ja.elem3 = _svs.v788;
    _ja.elem4 = _svs.v790;
    _ja.elem5 = _svs.v956;
    _ja.elem6 = _svs.v981;
    _ja.elem7 = _svs.v982;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v989;
    _ja.elem10 = _svs.v990;
    _reachl_3(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.Borrower_repay0_270) {
    _f.v1192 = (_a.elem1)._Borrower_repay0_270;
    reachRequire(((payable(msg.sender) == _svs.v766)), uint256(26) /*'(reach standard library:57:5:application,[at ./src/contracts/loan_nnt_algo.rsh:102:38:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp),at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp),at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp),at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)],Just "You are not the Borrower")'*/);
    reachRequire(((_svs.v983 <= _svs.v981)), uint256(27) /*'(reach standard library:57:5:application,[at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/loan_nnt_algo.rsh:101:53:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp),at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:101:53:function exp),at ./src/contracts/loan_nnt_algo.rsh:88:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:88:50:function exp),at ./src/contracts/loan_nnt_algo.rsh:99:34:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:99:34:function exp)],Just "Its past the deadline")'*/);
    _f.v1208 = safeAdd((_f.v1192.elem0), _svs.v982);
    _f.v1210 = _f.v1208 > _svs.v777;
    if (_f.v1210) {
      _f.v1211 = (safeSub(_f.v1208, _svs.v777));
      }
    else {
      _f.v1211 = uint256(0);
      }
    _f.v1215 = safeSub((_f.v1192.elem0), _f.v1211);
    reachRequire((msg.value == uint256(0)), uint256(28) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v767, _f.v1215)), uint256(29) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.number) <= _svs.v981)), uint256(30) /*'(reach standard library:57:5:application,[at ./src/contracts/loan_nnt_algo.rsh:103:38:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/loan_nnt_algo.rsh:111:50:application call to [unknown function] (defined at: ./src/contracts/loan_nnt_algo.rsh:111:50:function exp)],Just "Its past the deadline")'*/);
    if (_f.v1210) {
      _f.v1259 = (safeSub(_f.v1208, _svs.v777));
      }
    else {
      _f.v1259 = uint256(0);
      }
    _f.v1265 = safeAdd(_svs.v982, (safeSub((_f.v1192.elem0), _f.v1259)));
    _f.v1269.elem0 = (_f.v1265 >= _svs.v777);
    _f.v1269.elem1 = _f.v1265;
    _f.v1269.elem2 = _svs.v777;
    emit _reach_oe_v1269( _f.v1269);
    _Memory._reachr_Borrower_repay = _f.v1269;
    T15  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v777;
    _ja.elem3 = _svs.v788;
    _ja.elem4 = _svs.v790;
    _ja.elem5 = _svs.v956;
    _ja.elem6 = _svs.v981;
    _ja.elem7 = _f.v1265;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set8(_svs.v989, uint256(0), (T7({elem0: (unsafeAdd(((_svs.v989[uint256(0)]).elem0), _f.v1215)), elem1: (_svs.v989[uint256(0)]).elem1, elem2: (_svs.v989[uint256(0)]).elem2}))));
    _ja.elem10 = _svs.v990;
    _reachl_3(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.Lender_claim0_270) {
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v767, uint256(0))), uint256(32) /*'(./src/contracts/loan_nnt_algo.rsh:88:50:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v1374( (false));
    _Memory._reachr_Lender_claim = (false);
    T15  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v777;
    _ja.elem3 = _svs.v788;
    _ja.elem4 = _svs.v790;
    _ja.elem5 = _svs.v956;
    _ja.elem6 = _svs.v981;
    _ja.elem7 = _svs.v982;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v989;
    _ja.elem10 = _svs.v990;
    _reachl_3(_ja, _Memory);
    }
    }
  function _reachi_5(T6 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(7)), uint256(33) /*'state check at ./src/contracts/loan_nnt_algo.rsh:53:62:dot'*/);
    (T11 memory _svs) = abi.decode(current_svbs, (T11));
    reachRequire((! locked), uint256(34) /*'locked'*/);
    emit _reach_e5(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(35) /*'time check at ./src/contracts/loan_nnt_algo.rsh:53:62:dot'*/);
    if ((_a.elem1).which == _enum_T5.Borrower_close0_93) {
    reachRequire((msg.value == uint256(0)), uint256(36) /*'(./src/contracts/loan_nnt_algo.rsh:53:62:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v767, uint256(0))), uint256(37) /*'(./src/contracts/loan_nnt_algo.rsh:53:62:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v891( (false));
    _Memory._reachr_Borrower_close = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v769;
    _ja.elem3 = _svs.v776;
    _ja.elem4 = _svs.v777;
    _ja.elem5 = false;
    _ja.elem6 = _svs.v788;
    _ja.elem7 = _svs.v789;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v796;
    _ja.elem10 = _svs.v797;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T5.Lender_lend0_93) {
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./src/contracts/loan_nnt_algo.rsh:53:62:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v767, _svs.v776)), uint256(39) /*'(./src/contracts/loan_nnt_algo.rsh:53:62:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v947( (true));
    _Memory._reachr_Lender_lend = (true);
    T14  memory _ja;
    _ja.elem0 = _svs.v766;
    _ja.elem1 = _svs.v767;
    _ja.elem2 = _svs.v769;
    _ja.elem3 = _svs.v776;
    _ja.elem4 = _svs.v777;
    _ja.elem5 = _svs.v787;
    _ja.elem6 = payable(msg.sender);
    _ja.elem7 = true;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set8(_svs.v796, uint256(0), (T7({elem0: (unsafeAdd(((_svs.v796[uint256(0)]).elem0), _svs.v776)), elem1: (_svs.v796[uint256(0)]).elem1, elem2: (_svs.v796[uint256(0)]).elem2}))));
    _ja.elem10 = _svs.v797;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if ((_a.elem7 ? false : _a.elem5)) {
      T11 memory nsvs;
      nsvs.v766 = _a.elem0;
      nsvs.v767 = _a.elem1;
      nsvs.v769 = _a.elem2;
      nsvs.v776 = _a.elem3;
      nsvs.v777 = _a.elem4;
      nsvs.v787 = true;
      nsvs.v788 = _a.elem6;
      nsvs.v789 = false;
      nsvs.v796 = _a.elem9;
      nsvs.v797 = _a.elem10;
      nsvs.v818 = (true);
      current_step = uint256(7);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      if (_a.elem7) {
        safeTokenTransfer(_a.elem1, _a.elem0, ((_a.elem9[uint256(0)]).elem0));
        T15  memory _ja;
        _ja.elem0 = _a.elem0;
        _ja.elem1 = _a.elem1;
        _ja.elem2 = _a.elem4;
        _ja.elem3 = _a.elem6;
        _ja.elem4 = _a.elem8;
        _ja.elem5 = (_a.elem7);
        _ja.elem6 = (safeAdd(_a.elem8, (_a.elem2._maturation)));
        _ja.elem7 = uint256(0);
        _ja.elem8 = _a.elem8;
        _ja.elem9 = (array_set8(_a.elem9, uint256(0), (T7({elem0: (unsafeSub(((_a.elem9[uint256(0)]).elem0), ((_a.elem9[uint256(0)]).elem0))), elem1: (_a.elem9[uint256(0)]).elem1, elem2: (_a.elem9[uint256(0)]).elem2}))));
        _ja.elem10 = _a.elem10;
        _reachl_3(_ja, _Memory);
        }
      else {
        _a.elem0.transfer(_a.elem10);
        current_step = 0x0;
        current_time = 0x0;
        delete current_svbs;
        }
      }
    }
  struct _F2923 {
    bool v1009;
    }
  function _reachl_3(T15 memory _a, Memory memory _Memory) internal  {
    _F2923 memory _f;
    _f.v1009 = _a.elem7 < _a.elem2;
    if (((_a.elem8 < _a.elem6) ? _f.v1009 : false)) {
      T9 memory nsvs;
      nsvs.v766 = _a.elem0;
      nsvs.v767 = _a.elem1;
      nsvs.v777 = _a.elem2;
      nsvs.v788 = _a.elem3;
      nsvs.v790 = _a.elem4;
      nsvs.v956 = _a.elem5;
      nsvs.v981 = _a.elem6;
      nsvs.v982 = _a.elem7;
      nsvs.v983 = _a.elem8;
      nsvs.v989 = _a.elem9;
      nsvs.v990 = _a.elem10;
      nsvs.v1012 = (_a.elem7 >= _a.elem2);
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      (_f.v1009 ? _a.elem3 : _a.elem0).transfer(_a.elem10);
      safeTokenTransfer(_a.elem1, (_f.v1009 ? _a.elem0 : _a.elem3), ((_a.elem9[uint256(0)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Borrower_claimRefund() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Borrower_claimRefund(_ja, _Memory);
    return _Memory._reachr_Borrower_claimRefund;
    }
  function Borrower_close() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Borrower_close(_ja, _Memory);
    return _Memory._reachr_Borrower_close;
    }
  function Borrower_repay(uint256 v2888) external payable returns (T0 memory) {
    Memory memory _Memory;
    _reacha_Borrower_repay(v2888, _Memory);
    return _Memory._reachr_Borrower_repay;
    }
  function Lender_claim() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Lender_claim(_ja, _Memory);
    return _Memory._reachr_Lender_claim;
    }
  function Lender_lend() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Lender_lend(_ja, _Memory);
    return _Memory._reachr_Lender_lend;
    }
  function LoanViews_amountPaid() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_LoanViews_amountPaid(_ja, _Memory);
    return _Memory._reachr_LoanViews_amountPaid;
    }
  function LoanViews_beginBlock() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_LoanViews_beginBlock(_ja, _Memory);
    return _Memory._reachr_LoanViews_beginBlock;
    }
  function LoanViews_isLive() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_LoanViews_isLive(_ja, _Memory);
    return _Memory._reachr_LoanViews_isLive;
    }
  function LoanViews_loanPaid() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_LoanViews_loanPaid(_ja, _Memory);
    return _Memory._reachr_LoanViews_loanPaid;
    }
  constructor(T12 memory v2899) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v2899, _Memory);
    }
  function _reachp_1(T2 calldata v2902) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v2902, _Memory);
    }
  function _reachp_4(T4 calldata v2905) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v2905, _Memory);
    }
  function _reachp_5(T6 calldata v2908) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_5(v2908, _Memory);
    }
  }
