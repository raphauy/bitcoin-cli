export const bitcoinCliCommands = [
  { "name": "abandontransaction", 
    "description": "Marks an in-wallet transaction and all its in-wallet descendants as abandoned. This allows their inputs to be respent.",
    "arguments": [
      "txid (string): The transaction id"
    ]
  },
  { "name": "abortrescan",
    "description": "Stops current wallet rescan triggered by an RPC call, e.g. by an importprivkey call.",
    "arguments": [
      "none"
    ]
  },
  { "name": "addmultisigaddress",
    "description": "Adds an nrequired-to-sign multisignature address to the wallet.",
    "arguments": [
      "nrequired (number): The number of required signatures",
      "[\"key\",...] (array of strings): Array of public keys",
      "\"label\" (string, optional): A label for the address",
      "\"address_type\" (string, optional): The address type"
    ]
  },
  { "name": "addnode",
    "description": "Attempts to add or remove a node from the addnode list, or to try a connection to a node once.",
    "arguments": [
      "node (string): The node address",
      "command (string): 'add' to add a node, 'remove' to remove a node, or 'onetry' to try a connection to a node once"
    ]
  },
  { "name": "analyzepsbt",
    "description": "Analyzes and provides information about the current status of a PSBT and its inputs.",
    "arguments": [
      "psbt (string): The PSBT to analyze"
    ]
  },
  { "name": "backupwallet",
    "description": "Safely copies current wallet file to destination, which can be a directory or a path with filename.",
    "arguments": [
      "destination (string): The destination path"
    ]
  },
  { "name": "bumpfee",
    "description": "Bumps the fee of an opt-in-RBF transaction T, replacing it with a new transaction B.",
    "arguments": [
      "txid (string): The transaction id",
      "options (object, optional): Options for bumping the fee"
    ]
  },
  { "name": "clearbanned",
    "description": "Clears all banned IPs.",
    "arguments": [
      "none"
    ]
  },
  { "name": "combinepsbt",
    "description": "Combines multiple partially signed Bitcoin transactions into one transaction. Implements the Combiner role.",
    "arguments": [
      "[\"psbt\",...] (array of strings): Array of PSBTs"
    ]
  },
  { "name": "combinerawtransaction",
    "description": "Combines multiple partially signed transactions into one transaction. The combined transaction may be another partially signed transaction or a fully signed transaction.",
    "arguments": [
      "[\"hexstring\",...] (array of strings): Array of raw transaction hex strings"
    ]
  },
  { "name": "converttopsbt",
    "description": "Converts a network serialized transaction to a PSBT. This should be used only with createrawtransaction and fundrawtransaction.",
    "arguments": [
      "hexstring (string): The raw transaction hex string",
      "permitsigdata (boolean, optional): Whether to include signature data",
      "iswitness (boolean, optional): Whether the transaction is witness"
    ]
  },
  { "name": "createmultisig",
    "description": "Creates a multi-signature address with n signature of m keys required. It returns a json object with the address and redeemScript.",
    "arguments": [
      "nrequired (number): The number of required signatures",
      "[\"key\",...] (array of strings): Array of public keys",
      "\"address_type\" (string, optional): The address type"
    ]
  },
  { "name": "createpsbt",
    "description": "Creates a transaction in the Partially Signed Transaction format. Implements the Creator role.",
    "arguments": [
      "[{\"txid\":\"hex\",\"vout\":n,\"sequence\":n},...] (array of objects): Array of inputs",
      "[{\"address\":amount,...},{\"data\":\"hex\"},...] (array of objects): Array of outputs",
      "locktime (number, optional): The lock time",
      "replaceable (boolean, optional): Whether the transaction is replaceable"
    ]
  },
  { "name": "createrawtransaction",
    "description": "Creates a transaction spending the given inputs and creating new outputs. Outputs can be addresses or data. Returns hex-encoded raw transaction. Note that the transaction's inputs are not signed, and it is not stored in the wallet or transmitted to the network.",
    "arguments": [
      "[{\"txid\":\"hex\",\"vout\":n,\"sequence\":n},...] (array of objects): Array of inputs",
      "[{\"address\":amount,...},{\"data\":\"hex\"},...] (array of objects): Array of outputs",
      "locktime (number, optional): The lock time",
      "replaceable (boolean, optional): Whether the transaction is replaceable"
    ]
  },
  { "name": "createwallet",
    "description": "Creates and loads a new wallet.",
    "arguments": [
      "wallet_name (string): The name of the wallet",
      "disable_private_keys (boolean, optional): Whether to disable private keys",
      "blank (boolean, optional): Whether to create a blank wallet",
      "passphrase (string, optional): The wallet passphrase",
      "avoid_reuse (boolean, optional): Whether to avoid reuse",
      "descriptors (boolean, optional): Whether to use descriptors",
      "load_on_startup (boolean, optional): Whether to load the wallet on startup",
      "external_signer (boolean, optional): Whether to use an external signer"
    ]
  },
  { "name": "decodepsbt",
    "description": "Returns a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.",
    "arguments": [
      "psbt (string): The PSBT to decode"
    ]
  },
  { "name": "decoderawtransaction",
    "description": "Returns a JSON object representing the serialized, hex-encoded transaction.",
    "arguments": [
      "hexstring (string): The transaction in hex format",
      "iswitness (boolean, optional): Whether the transaction is witness"
    ]
  },
  { "name": "decodescript",
    "description": "Decodes a hex-encoded script.",
    "arguments": [
      "hexstring (string): The script in hex format"
    ]
  },
  { "name": "deriveaddresses",
    "description": "Returns one or more addresses corresponding to an output descriptor.",
    "arguments": [
      "descriptor (string): The descriptor",
      "range (array, optional): The range"
    ]
  },
  { "name": "disconnectnode",
    "description": "Immediately disconnects from the specified peer node.",
    "arguments": [
      "address (string, optional): The node address",
      "nodeid (number, optional): The node id"
    ]
  },
  { "name": "dumpprivkey",
    "description": "Reveals the private key corresponding to 'address'.",
    "arguments": [
      "address (string): The Bitcoin address"
    ]
  },
  { "name": "dumpwallet",
    "description": "Dumps all wallet keys in a human-readable format to a server-side file. This does not allow overwriting existing files.",
    "arguments": [
      "filename (string): The filename"
    ]
  },
  { "name": "encryptwallet",
    "description": "Encrypts the wallet with 'passphrase'. This is for first time encryption.",
    "arguments": [
      "passphrase (string): The passphrase"
    ]
  },
  { "name": "enumeratesigners",
    "description": "Returns a list of external signers from -signer.",
    "arguments": [
      "none"
    ]
  },
  { "name": "estimaterawfee",
    "description": "Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks if possible. External clients can query and use this data in their own fee estimation logic.",
    "arguments": [
      "conf_target (number): The confirmation target",
      "threshold (number, optional): The threshold"
    ]
  },
  { "name": "estimatesmartfee",
    "description": "Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf_target blocks if possible and return the number of blocks for which the estimate is valid.",
    "arguments": [
      "conf_target (number): The confirmation target",
      "\"estimate_mode\" (string, optional): The estimate mode"
    ]
  },
  { "name": "finalizepsbt",
    "description": "Finalizes the inputs of a PSBT. If the transaction is fully signed, it will produce a network serialized transaction which can be broadcast with sendrawtransaction. Otherwise a PSBT will be created which has the final_scriptSig and final_scriptWitness fields filled for inputs that are complete. Implements the Finalizer and Extractor roles.",
    "arguments": [
      "psbt (string): The PSBT to finalize",
      "extract (boolean, optional): Whether to extract the transaction"
    ]
  },
  { "name": "fundrawtransaction",
    "description": "Adds inputs to a transaction until it has enough in value to meet its out value.",
    "arguments": [
      "hexstring (string): The transaction hex string",
      "options (object, optional): Options for funding the transaction",
      "iswitness (boolean, optional): Whether the transaction is witness"
    ]
  },
  { "name": "generate",
    "description": "Nearly instantly generates blocks.",
    "arguments": [
      "nblocks (number): The number of blocks to generate",
      "maxtries (number, optional): The maximum number of tries"
    ]
  },
  { "name": "generateblock",
    "description": "Mines a set of ordered transactions to a specified address or descriptor and return the block hash.",
    "arguments": [
      "output (string): The address or descriptor",
      "[\"rawtx/txid\",...] (array of strings): Array of raw transactions or transaction ids"
    ]
  },
  { "name": "generatetoaddress",
    "description": "Mines to a specified address and returns the block hashes.",
    "arguments": [
      "nblocks (number): The number of blocks to generate",
      "address (string): The Bitcoin address",
      "maxtries (number, optional): The maximum number of tries"
    ]
  },
  { "name": "generatetodescriptor",
    "description": "Mines to a specified descriptor and returns the block hashes.",
    "arguments": [
      "num_blocks (number): The number of blocks to generate",
      "descriptor (string): The descriptor",
      "maxtries (number, optional): The maximum number of tries"
    ]
  },
  { "name": "getaddressinfo",
    "description": "Returns information about the given bitcoin address. Some information requires the address to be in the wallet.",
    "arguments": [
      "address (string): The bitcoin address"
    ]
  },
  { "name": "getbestblockhash",
    "description": "Returns the hash of the best (tip) block in the most-work fully-validated chain.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getblock",
    "description": "Gets a block. If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'. If verbosity is 1, returns an Object with information about block. If verbosity is 2, returns an Object with information about block and information about each transaction.",
    "arguments": [
      "blockhash (string): The block hash",
      "verbosity (number, optional): The verbosity level"
    ]
  },
  { "name": "getblockchaininfo",
    "description": "Provides information about the current state of the block chain.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getblockcount",
    "description": "Returns the height of the most-work fully-validated chain.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getblockfilter",
    "description": "Retrieve a BIP 157 content filter for a particular block.",
    "arguments": [
      "blockhash (string): The block hash",
      "\"filtertype\" (string, optional): The filter type"
    ]
  },
  { "name": "getblockfrompeer",
    "description": "Attempts to fetch block from a given peer. Must have the header for this block, e.g. using submitheader. Subsequent calls for the same block and a new peer will cause the response from the previous peer to be ignored.",
    "arguments": [
      "blockhash (string): The block hash",
      "peer_id (number): The peer id"
    ]
  },
  { "name": "getblockhash",
    "description": "Returns the header hash of a block at the given height in the local best block chain.",
    "arguments": [
      "height (number): The block height"
    ]
  },
  { "name": "getblockheader",
    "description": "Gets a block header with a particular header hash from the local block database either as a JSON object or as a serialized block header.",
    "arguments": [
      "hash (string): The block hash",
      "verbose (boolean, optional): Whether to return a JSON object"
    ]
  },
  { "name": "getblockstats",
    "description": "Computes per block statistics for a given window. All amounts are in satoshis.",
    "arguments": [
      "hash_or_height (string or number): The block hash or height",
      "stats (array, optional): The statistics to compute"
    ]
  },
  { "name": "getblocktemplate",
    "description": "Returns data needed to construct a block to work on.",
    "arguments": [
      "\"template_request\" (object, optional): The template request"
    ]
  },
  { "name": "getchaintips",
    "description": "Returns information about the highest-height block (tip) of each local block chain.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getchaintxstats",
    "description": "Computes statistics about the total number and rate of transactions in the chain.",
    "arguments": [
      "nblocks (number, optional): The number of blocks",
      "blockhash (string, optional): The block hash"
    ]
  },
  { "name": "getconnectioncount",
    "description": "Returns the number of connections to other nodes.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getdeploymentinfo",
    "description": "Returns an object containing various state info regarding deployments of consensus changes.",
    "arguments": [
      "blockhash (string, optional): The block hash"
    ]
  },
  { "name": "getdescriptorinfo",
    "description": "Analyses a descriptor.",
    "arguments": [
      "descriptor (string): The descriptor"
    ]
  },
  { "name": "getdifficulty",
    "description": "Returns the proof-of-work difficulty as a multiple of the minimum difficulty.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getindexinfo",
    "description": "Returns the status of one or all available indices currently running in the node.",
    "arguments": [
      "\"index_name\" (string, optional): The index name"
    ]
  },
  { "name": "getmemoryinfo",
    "description": "Returns information about memory usage.",
    "arguments": [
      "\"mode\" (string, optional): The memory mode"
    ]
  },
  { "name": "getmempoolancestors",
    "description": "Returns all in-mempool ancestors for a transaction in the mempool.",
    "arguments": [
      "txid (string): The transaction id",
      "verbose (boolean, optional): Whether to return detailed information"
    ]
  },
  { "name": "getmempooldescendants",
    "description": "Returns all in-mempool descendants for a transaction in the mempool.",
    "arguments": [
      "txid (string): The transaction id",
      "verbose (boolean, optional): Whether to return detailed information"
    ]
  },
  { "name": "getmempoolentry",
    "description": "Returns details on the active state of the TX memory pool.",
    "arguments": [
      "txid (string): The transaction id"
    ]
  },
  { "name": "getmempoolinfo",
    "description": "Returns information about the node's current transaction memory pool.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getmininginfo",
    "description": "Returns a json object containing mining-related information.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getnettotals",
    "description": "Returns information about network traffic, including bytes in, bytes out, and the current time.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getnetworkhashps",
    "description": "Returns the estimated network hashes per second based on the last n blocks.",
    "arguments": [
      "nblocks (number, optional): The number of blocks",
      "height (number, optional): The block height"
    ]
  },
  { "name": "getnetworkinfo",
    "description": "Returns an object containing various state info regarding P2P networking.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getnewaddress",
    "description": "Returns a new Bitcoin address for receiving payments. If an account is specified, payments received with the address will be credited to that account.",
    "arguments": [
      "\"label\" (string, optional): The label",
      "\"address_type\" (string, optional): The address type"
    ]
  },
  { "name": "getnodeaddresses",
    "description": "Returns known addresses, after filtering for quality and recency. These can potentially be used to find new peers in the network.",
    "arguments": [
      "count (number, optional): The number of addresses to return",
      "\"network\" (string, optional): The network"
    ]
  },
  { "name": "getpeerinfo",
    "description": "Returns data about each connected network peer as a json array of objects.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getrawchangeaddress",
    "description": "Returns a new Bitcoin address for receiving change. This is for use with raw transactions, not normal use.",
    "arguments": [
      "\"address_type\" (string, optional): The address type"
    ]
  },
  { "name": "getrawmempool",
    "description": "Returns all transaction ids in memory pool as a json array of string transaction ids.",
    "arguments": [
      "verbose (boolean, optional): Whether to return detailed information",
      "mempool_sequence (boolean, optional): Whether to return mempool sequence"
    ]
  },
  { "name": "getrawtransaction",
    "description": "Returns the raw transaction data.",
    "arguments": [
      "txid (string): The transaction id",
      "verbose (boolean, optional): Whether to return detailed information",
      "\"blockhash\" (string, optional): The block hash"
    ]
  },
  { "name": "getreceivedbyaddress",
    "description": "Returns the total amount received by the given address in transactions with at least minconf confirmations.",
    "arguments": [
      "address (string): The Bitcoin address",
      "minconf (number, optional): The minimum confirmations",
      "include_immature_coinbase (boolean, optional): Whether to include immature coinbase"
    ]
  },
  { "name": "getreceivedbylabel",
    "description": "Returns the total amount received by addresses with in transactions with at least [minconf] confirmations.",
    "arguments": [
      "label (string): The label",
      "minconf (number, optional): The minimum confirmations",
      "include_immature_coinbase (boolean, optional): Whether to include immature coinbase"
    ]
  },
  { "name": "getrpcinfo",
    "description": "Returns details of the RPC server.",
    "arguments": [
      "none"
    ]
  },
  { "name": "gettransaction",
    "description": "Gets detailed information about an in-wallet transaction.",
    "arguments": [
      "txid (string): The transaction id",
      "include_watchonly (boolean, optional): Whether to include watch-only transactions",
      "verbose (boolean, optional): Whether to return detailed information"
    ]
  },
  { "name": "gettxout",
    "description": "Returns details about an unspent transaction output (UTXO).",
    "arguments": [
      "txid (string): The transaction id",
      "n (number): The output index",
      "include_mempool (boolean, optional): Whether to include the mempool"
    ]
  },
  { "name": "gettxoutproof",
    "description": "Returns a hex-encoded proof that one or more specified transactions were included in a block.",
    "arguments": [
      "[\"txid\",...] (array of strings): Array of transaction ids",
      "blockhash (string, optional): The block hash"
    ]
  },
  { "name": "gettxoutsetinfo",
    "description": "Returns statistics about the unspent transaction output set.",
    "arguments": [
      "\"hash_type\" (string, optional): The hash type",
      "hash_or_height (string or number, optional): The block hash or height",
      "use_index (boolean, optional): Whether to use the index"
    ]
  },
  { "name": "getunconfirmedbalance",
    "description": "Returns the wallet's total unconfirmed balance.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getwalletinfo",
    "description": "Returns an object containing various wallet state info.",
    "arguments": [
      "none"
    ]
  },
  { "name": "getzmqnotifications",
    "description": "Returns information about the active ZeroMQ notifications.",
    "arguments": [
      "none"
    ]
  },
  { "name": "help",
    "description": "Lists all available public RPC commands, or gets help for the specified RPC. Commands which are unavailable will not be listed, such as wallet RPCs if wallet support is disabled.",
    "arguments": [
      "\"command\" (string, optional): The command to get help for"
    ]
  },
  {
    "name": "importaddress",
    "description": "Adds an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.",
    "arguments": [
      "address (string): The Bitcoin address",
      "\"label\" (string, optional): The label",
      "rescan (boolean, optional): Whether to rescan",
      "p2sh (boolean, optional): Whether the address is P2SH"
    ]
  },
  {
    "name": "importdescriptors",
    "description": "Triggers a rescan of the blockchain based on the earliest timestamp of all descriptors being imported. Requires a new wallet backup.",
    "arguments": [
      "requests (array): Array of descriptor import requests"
    ]
  },
  {
    "name": "importmulti",
    "description": "Imports addresses or scripts (with private keys, public keys, or P2SH redeem scripts) and optionally performs the minimum necessary rescan for all imports.",
    "arguments": [
      "requests (array): Array of import requests",
      "\"options\" (object, optional): Additional options"
    ]
  },
  {
    "name": "importprivkey",
    "description": "Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup. Hint: use importmulti to import more than one private key.",
    "arguments": [
      "privkey (string): The private key",
      "\"label\" (string, optional): The label",
      "rescan (boolean, optional): Whether to rescan"
    ]
  },
  {
    "name": "importprunedfunds",
    "description": "Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.",
    "arguments": [
      "rawtransaction (string): The raw transaction",
      "txoutproof (string): The transaction output proof"
    ]
  },
  {
    "name": "importpubkey",
    "description": "Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.",
    "arguments": [
      "pubkey (string): The public key",
      "\"label\" (string, optional): The label",
      "rescan (boolean, optional): Whether to rescan"
    ]
  },
  {
    "name": "importwallet",
    "description": "Imports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys.",
    "arguments": [
      "filename (string): The wallet dump file"
    ]
  },
  {
    "name": "joinpsbts",
    "description": "Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs No input in any of the PSBTs can be in more than one of the PSBTs.",
    "arguments": [
      "psbt (array): Array of PSBTs"
    ]
  },
  {
    "name": "keypoolrefill",
    "description": "Fills the keypool.",
    "arguments": [
      "newsize (number, optional): The new keypool size"
    ]
  },
  {
    "name": "listaccounts",
    "description": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts) Lists accounts and their balances.",
    "arguments": []
  },
  {
    "name": "listaddressgroupings",
    "description": "Lists groups of addresses that may have had their common ownership made public by common use as inputs in the same transaction or from being used as change from a previous transaction.",
    "arguments": []
  },
  {
    "name": "listbanned",
    "description": "Lists all manually banned IPs/Subnets.",
    "arguments": []
  },
  {
    "name": "listdescriptors",
    "description": "Lists descriptors imported into a descriptor-enabled wallet.",
    "arguments": [
      "private (boolean, optional): Include private descriptors"
    ]
  },
  {
    "name": "listlabels",
    "description": "Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.",
    "arguments": [
      "\"purpose\" (string, optional): The purpose"
    ]
  },
  {
    "name": "listlockunspent",
    "description": "Returns a list of temporarily unspendable (locked) outputs.",
    "arguments": []
  },
  {
    "name": "listreceivedbyaccount",
    "description": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts) Lists the total number of bitcoins received by each account.",
    "arguments": []
  },
  {
    "name": "listreceivedbyaddress",
    "description": "Lists balances by receiving address.",
    "arguments": [
      "minconf (number, optional): Minimum number of confirmations",
      "include_empty (boolean, optional): Include addresses with 0 balances",
      "include_watchonly (boolean, optional): Include watch-only addresses",
      "\"address_filter\" (string, optional): Filter by address",
      "include_immature_coinbase (boolean, optional): Include immature coinbase transactions"
    ]
  },
  {
    "name": "listreceivedbylabel",
    "description": "Lists received transactions by label.",
    "arguments": [
      "minconf (number, optional): Minimum number of confirmations",
      "include_empty (boolean, optional): Include labels with 0 balances",
      "include_watchonly (boolean, optional): Include watch-only addresses",
      "include_immature_coinbase (boolean, optional): Include immature coinbase transactions"
    ]
  },
  {
    "name": "listsinceblock",
    "description": "Gets all transactions in blocks since block [blockhash], or all transactions if omitted.",
    "arguments": [
      "\"blockhash\" (string, optional): The block hash",
      "target_confirmations (number, optional): The confirmations count",
      "include_watchonly (boolean, optional): Include watch-only addresses",
      "include_removed (boolean, optional): Include removed transactions"
    ]
  },
  {
    "name": "listtransactions",
    "description": "Returns up to 'count' most recent transactions skipping the first 'from' transactions.",
    "arguments": [
      "dummy (string, optional): Dummy value",
      "count (number, optional): The number of transactions",
      "skip (number, optional): The number of transactions to skip",
      "include_watchonly (boolean, optional): Include watch-only addresses"
    ]
  },
  {
    "name": "listunspent",
    "description": "Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations. Optionally filter to only include txouts paid to specified addresses.",
    "arguments": [
      "minconf (number, optional): Minimum number of confirmations",
      "maxconf (number, optional): Maximum number of confirmations",
      "[\"addresses\",...] (array, optional): Array of addresses",
      "[include_unsafe] (boolean, optional): Include unsafe outputs",
      "[query_options] (object, optional): Query options"
    ]
  },
  {
    "name": "listwalletdir",
    "description": "Returns a list of wallets in the wallet directory.",
    "arguments": []
  },
  {
    "name": "listwallets",
    "description": "Returns a list of currently loaded wallets.",
    "arguments": []
  },
  {
    "name": "loadwallet",
    "description": "Loads a wallet from a wallet file or directory.",
    "arguments": [
      "filename (string): The wallet file or directory"
    ]
  },
  {
    "name": "lockunspent",
    "description": "Updates list of temporarily unspendable outputs. Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs. If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.",
    "arguments": [
      "unlock (boolean): Whether to unlock",
      "[{\"txid\":\"txid\",\"vout\":n},...] (array, optional): The transaction outputs"
    ]
  },
  {
    "name": "logging",
    "description": "Gets and sets the logging configuration.",
    "arguments": [
      "[\"include_category\",...] (array, optional): Categories to include",
      "[\"exclude_category\",...] (array, optional): Categories to exclude"
    ]
  },
  {
    "name": "migratewallet",
    "description": "Migrates Legacy (non-descriptor) wallets to Descriptor wallets. experimental",
    "arguments": []
  },
  {
    "name": "move",
    "description": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts) Moves a specified amount from one account in your wallet to another using an off-block-chain transaction.",
    "arguments": [
      "fromaccount (string): The source account",
      "toaccount (string): The destination account",
      "amount (number): The amount",
      "\"comment\" (string, optional): A comment"
    ]
  },
  {
    "name": "newkeypool",
    "description": "Entirely clears and refills the keypool.",
    "arguments": []
  },
  {
    "name": "ping",
    "description": "Requests that a ping be sent to all other nodes, to measure ping time. Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds. Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.",
    "arguments": []
  },
  {
    "name": "preciousblock",
    "description": "Treats a block as if it were received before others with the same work.",
    "arguments": [
      "blockhash (string): The block hash"
    ]
  },
  {
    "name": "prioritisetransaction",
    "description": "Accepts the transaction into mined blocks at a higher (or lower) priority",
    "arguments": [
      "txid (string): The transaction id",
      "dummy (string, optional): Dummy value",
      "fee_delta (number): The fee delta"
    ]
  },
  {
    "name": "pruneblockchain",
    "description": "Prunes the blockchain up to a specified height or timestamp.",
    "arguments": [
      "height (number): The block height or timestamp"
    ]
  },
  {
    "name": "psbtbumpfee",
    "description": "Bumps the fee of an opt-in-RBF transaction T, replacing it with a new transaction B.",
    "arguments": [
      "txid (string): The transaction id",
      "\"options\" (object, optional): Additional options"
    ]
  },
  {
    "name": "removeprunedfunds",
    "description": "Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds.",
    "arguments": [
      "txid (string): The transaction id"
    ]
  },
  {
    "name": "rescanblockchain",
    "description": "Rescan the local blockchain for wallet related transactions.",
    "arguments": [
      "start_height (number, optional): The start height",
      "stop_height (number, optional): The stop height"
    ]
  },
  {
    "name": "restorewallet",
    "description": "Restores and loads a wallet from backup.",
    "arguments": [
      "wallet_name (string): The wallet name",
      "backup_file (string): The backup file",
      "load_on_startup (boolean, optional): Load on startup"
    ]
  },
  {
    "name": "savemempool",
    "description": "Dumps the mempool to disk. It will fail until the previous dump is fully loaded.",
    "arguments": []
  },
  {
    "name": "scantxoutset",
    "description": "Scans the unspent transaction output set for entries that match certain output descriptors",
    "arguments": [
      "action (string): The action",
      "[scanobjects,...] (array, optional): Array of scan objects"
    ]
  },
  {
    "name": "send",
    "description": "Sends a transaction. EXPERIMENTAL",
    "arguments": [
      "[{\"address\":amount,...},{\"data\":\"hex\"},...] (array): Array of send objects",
      "conf_target (number, optional): Confirmation target",
      "\"estimate_mode\" (string, optional): Estimate mode",
      "fee_rate (number, optional): Fee rate",
      "options (object, optional): Additional options"
    ]
  },
  {
    "name": "sendall",
    "description": "Spends the value of all (or specific) confirmed UTXOs in the wallet to one or more recipients. EXPERIMENTAL",
    "arguments": [
      "[\"address\",{\"address\":amount,...},...] (array): Array of send objects",
      "conf_target (number, optional): Confirmation target",
      "\"estimate_mode\" (string, optional): Estimate mode",
      "fee_rate (number, optional): Fee rate",
      "options (object, optional): Additional options"
    ]
  },
  {
    "name": "sendfrom",
    "description": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts) Spends an amount from a local account to a bitcoin address.",
    "arguments": [
      "fromaccount (string): The source account",
      "toaddress (string): The destination address",
      "amount (number): The amount",
      "\"comment\" (string, optional): A comment",
      "\"comment_to\" (string, optional): A comment to",
      "replaceable (boolean, optional): Replaceable",
      "conf_target (number, optional): Confirmation target",
      "\"estimate_mode\" (string, optional): Estimate mode"
    ]
  },
  {
    "name": "sendmany",
    "description": "Creates and broadcasts a transaction which sends outputs to multiple addresses.",
    "arguments": [
      "\"\" (string): Dummy value",
      "{\"address\":amount,...} (object): Address and amount pairs",
      "minconf (number, optional): Minimum confirmations",
      "\"comment\" (string, optional): A comment",
      "[\"address\",...] (array, optional): Address array",
      "replaceable (boolean, optional): Replaceable",
      "conf_target (number, optional): Confirmation target",
      "\"estimate_mode\" (string, optional): Estimate mode"
    ]
  },
  {
    "name": "sendrawtransaction",
    "description": "Submits a raw transaction (serialized, hex-encoded) to local node and network.",
    "arguments": [
      "\"hexstring\" (string): The hex string of the raw transaction",
      "maxfeerate (number, optional): The maximum fee rate"
    ]
  },
  {
    "name": "sendtoaddress",
    "description": "Spends an amount to a given address.",
    "arguments": [
      "\"address\" (string): The Bitcoin address to send to",
      "amount (number): The amount to send",
      "\"comment\" (string, optional): A comment",
      "\"comment_to\" (string, optional): A comment to",
      "subtractfeefromamount (boolean, optional): Subtract fee from amount",
      "replaceable (boolean, optional): Replaceable",
      "conf_target (number, optional): Confirmation target",
      "\"estimate_mode\" (string, optional): Estimate mode",
      "avoid_reuse (boolean, optional): Avoid reuse",
      "fee_rate (number, optional): Fee rate",
      "verbose (boolean, optional): Verbose output"
    ]
  },
  {
    "name": "setaccount",
    "description": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts) Puts the specified address in the given account.",
    "arguments": [
      "\"address\" (string): The Bitcoin address",
      "\"account\" (string): The account name"
    ]
  },
  {
    "name": "setban",
    "description": "Attempts add or remove a IP/Subnet from the banned list.",
    "arguments": [
      "\"subnet\" (string): The subnet to ban",
      "\"command\" (string): 'add' or 'remove'",
      "bantime (number, optional): The ban time in seconds",
      "absolute (boolean, optional): Absolute time"
    ]
  },
  {
    "name": "sethdseed",
    "description": "Allows users to set a new HD seed or set their own HD seed. This allows for a new HD seed to be used. A new backup must be made when a new HD seed is set.",
    "arguments": [
      "newkeypool (boolean, optional): Whether to generate a new keypool",
      "\"seed\" (string, optional): The seed to set"
    ]
  },
  {
    "name": "setlabel",
    "description": "Intended as a replacement for the deprecated 'account' API.",
    "arguments": [
      "\"address\" (string): The Bitcoin address",
      "\"label\" (string): The label to assign"
    ]
  },
  {
    "name": "setnetworkactive",
    "description": "Disables/enables all P2P network activity.",
    "arguments": [
      "state (boolean): True to enable networking, false to disable"
    ]
  },
  {
    "name": "settxfee",
    "description": "Sets the transaction fee per kilobyte paid by transactions created by this wallet.",
    "arguments": [
      "amount (number): The transaction fee per kilobyte"
    ]
  },
  {
    "name": "setwalletflag",
    "description": "Changes the state of the given wallet flag for a wallet.",
    "arguments": [
      "\"flag\" (string): The wallet flag",
      "value (boolean, optional): The flag value"
    ]
  },
  {
    "name": "signmessage",
    "description": "Signs a message with the private key of an address.",
    "arguments": [
      "\"address\" (string): The Bitcoin address",
      "\"message\" (string): The message to sign"
    ]
  },
  {
    "name": "signmessagewithprivkey",
    "description": "Signs a message with the private key of an address.",
    "arguments": [
      "\"privkey\" (string): The private key",
      "\"message\" (string): The message to sign"
    ]
  },
  {
    "name": "signrawtransaction",
    "description": "Signs a transaction in the serialized transaction format using private keys stored in the wallet or provided in the call.",
    "arguments": [
      "\"hexstring\" (string): The hex string of the raw transaction",
      "[{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] (array, optional): Previous transaction outputs",
      "[\"privatekey1\",...] (array, optional): Private keys",
      "sighashtype (string, optional): Signature hash type"
    ]
  },
  {
    "name": "signrawtransactionwithkey",
    "description": "Signs inputs for raw transaction (serialized, hex-encoded).",
    "arguments": [
      "\"hexstring\" (string): The hex string of the raw transaction",
      "[\"privatekey\",...] (array): Private keys",
      "[{\"txid\":\"hex\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\",\"witnessScript\":\"hex\",\"amount\":amount},...] (array, optional): Previous transaction outputs",
      "sighashtype (string, optional): Signature hash type"
    ]
  },
  {
    "name": "signrawtransactionwithwallet",
    "description": "Signs inputs for raw transaction (serialized, hex-encoded).",
    "arguments": [
      "\"hexstring\" (string): The hex string of the raw transaction",
      "[{\"txid\":\"hex\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\",\"witnessScript\":\"hex\",\"amount\":amount},...] (array, optional): Previous transaction outputs",
      "sighashtype (string, optional): Signature hash type"
    ]
  },
  {
    "name": "simulaterawtransaction",
    "description": "Calculates the balance change resulting in the signing and broadcasting of the given transaction(s).",
    "arguments": [
      "[\"rawtx\",...] (array): Raw transactions",
      "{\"include_watchonly\":bool,...} (object, optional): Options"
    ]
  },
  {
    "name": "stop",
    "description": "Safely shuts down the Bitcoin Core server.",
    "arguments": []
  },
  {
    "name": "submitblock",
    "description": "Attempts to submit new block to network.",
    "arguments": [
      "\"hexdata\" (string): The hex-encoded block data",
      "\"dummy\" (string, optional): Dummy value"
    ]
  },
  {
    "name": "submitheader",
    "description": "Decodes the given hexdata as a header and submits it as a candidate chain tip if valid.",
    "arguments": [
      "\"hexdata\" (string): The hex-encoded block header"
    ]
  },
  {
    "name": "testmempoolaccept",
    "description": "Returns result of mempool acceptance tests indicating if raw transaction(s) (serialized, hex-encoded) would be accepted by mempool.",
    "arguments": [
      "[\"rawtx\",...] (array): Raw transactions",
      "maxfeerate (number, optional): The maximum fee rate"
    ]
  },
  {
    "name": "unloadwallet",
    "description": "Unloads the wallet referenced by the request endpoint otherwise unloads the wallet specified in the argument.",
    "arguments": [
      "\"wallet_name\" (string, optional): The name of the wallet",
      "load_on_startup (boolean, optional): Load on startup"
    ]
  },
  {
    "name": "upgradewallet",
    "description": "Upgrades to the latest version if no version number is specified. New keys may be generated and a new wallet backup will need to be made.",
    "arguments": [
      "version (number, optional): The version number"
    ]
  },
  {
    "name": "uptime",
    "description": "Returns the total uptime of the server in seconds.",
    "arguments": []
  },
  {
    "name": "utxoupdatepsbt",
    "description": "Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set or the mempool.",
    "arguments": [
      "\"psbt\" (string): The PSBT to update",
      "[\",{\"desc\":\"str\",\"range\":n or [n,n]},...] (array, optional): Additional options"
    ]
  },
  {
    "name": "validateaddress",
    "description": "Returns information about the given Bitcoin address.",
    "arguments": [
      "\"address\" (string): The Bitcoin address"
    ]
  },
  {
    "name": "verifychain",
    "description": "Verifies each entry in the local block chain database.",
    "arguments": [
      "checklevel (number, optional): The check level",
      "nblocks (number, optional): Number of blocks"
    ]
  },
  {
    "name": "verifymessage",
    "description": "Verifies a signed message.",
    "arguments": [
      "\"address\" (string): The Bitcoin address",
      "\"signature\" (string): The signature",
      "\"message\" (string): The message"
    ]
  },
  {
    "name": "verifytxoutproof",
    "description": "Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain.",
    "arguments": [
      "\"proof\" (string): The proof"
    ]
  },
  {
    "name": "walletcreatefundedpsbt",
    "description": "Creates and funds a transaction in the Partially Signed Transaction format.",
    "arguments": [
      "[{\"txid\":\"hex\",\"vout\":n,\"sequence\":n,\"weight\":n},...] (array): Inputs",
      "[{\"address\":amount,...},{\"data\":\"hex\"},...] (array): Outputs",
      "locktime (number, optional): The lock time",
      "options (object, optional): Additional options",
      "bip32derivs (boolean, optional): Include BIP32 derivations"
    ]
  },
  {
    "name": "walletdisplayaddress",
    "description": "Displays address on an external signer for verification.",
    "arguments": [
      "\"address\" (string): The Bitcoin address"
    ]
  },
  {
    "name": "walletlock",
    "description": "Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call `walletpassphrase` again before being able to call any methods which require the wallet to be unlocked.",
    "arguments": []
  },
  {
    "name": "walletpassphrase",
    "description": "Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending bitcoins.",
    "arguments": [
      "\"passphrase\" (string): The wallet passphrase",
      "timeout (number): The timeout in seconds"
    ]
  },
  {
    "name": "walletpassphrasechange",
    "description": "Changes the wallet passphrase from 'old passphrase' to 'new passphrase'.",
    "arguments": [
      "\"oldpassphrase\" (string): The old passphrase",
      "\"newpassphrase\" (string): The new passphrase"
    ]
  },
  {
    "name": "walletprocesspsbt",
    "description": "Updates a PSBT with input information from our wallet and then sign inputs that we can sign for. Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.",
    "arguments": [
      "\"psbt\" (string): The PSBT to update",
      "sign (boolean, optional): Sign the inputs",
      "sighashtype (string, optional): The sighash type",
      "bip32derivs (boolean, optional): Include BIP32 derivations",
      "finalize (boolean, optional): Finalize the transaction"
    ]
  }
]
