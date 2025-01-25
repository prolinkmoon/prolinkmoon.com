
// on Alert
function showPopupAlert() {
    Swal.fire({
        icon: "info",
        title: "Oops...",
        html: `<p>looks like node/validator not started yet 😐 <br> possibility ( node not started yet, regenesis, maintenance, server-migration, or other technical error.)</p>`,
        background: "#111216 url(/banner-svg.svg)",
        color: "#fff",
        confirmButtonColor: "#FAD338",
        footer: '<a href="#">Follow our twitter for more information 😃</a>'
      });
}

// test
function showPopupAvail() {
    Swal.fire({
        title: "Avail",
        imageUrl: "/banner/avail.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "logo image",
        background: "#09090c url(/banner/bg-gif.gif)",
        color: "#fff",
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        html: `

        <p class="paragraph">Network: Mainnet</p>
        <p class="paragraph">Chain ID: blomberg-1</p>
        <p class="paragraph">Node version: v1.1.22</p>

        <p class="stake-with-us">Stake With Us</p>
        <div class="btn-stake-now">
        <a href="https://google.com" target="_blank">Stake Now</a>
        </div>
        
        <p class="services">Tools & Services</p>
        <div>
          <a href="https://google.com" target="_blank">
          <button class="btn101">Installation Guide</button></a>
          <a href="">
          <button class="btn101">RPC</button></a>
          <a href="">
          <button class="btn101">gRPC</button></a>
          <a href="">
          <button class="btn101">PEERS / SEEDS</button></a>
          <a href="">
          <button class="btn101">Node Snapshot</button></a>
          <a href="">
          <button class="btn101">State-sync</button></a>
          <a href="">
          <button class="btn101">Block Explorer</button></a>
        </div>`
      })
}

// Celestia
async function showPopupCelestia() {
  
  Swal.fire({
    title: "Celestia",
    imageUrl: "banner/celestia-banner.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "logo image",
    background: "#09090c url(banner/bg-gif.gif)",
    color: "#fff",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    html: `

        <p class="paragraph">Network: Mainnet</p>
        <p class="paragraph" id="chain-id">Chain id: Load ..</p>
        <p class="paragraph" id="node-version">Node version: Load ..</p>
        <div id="wrapBlockHeight">
          <p class="paragraph" id="block-height">Latest Block Height: Loading ...</p>
          <p class="paragraph" id="seconds"></p>
        </div>

        <p class="stake-with-us">Stake With Us</p>
        <div class="btn-stake-now">
        <a href="https://google.com" target="_blank">Stake Now</a>
        </div>
        
        <p class="services">Tools & Services</p>
        <div>
          <a href="https://google.com" target="_blank">
          <button class="btn101">Installation Guide</button></a>
          <a href="">
          <button class="btn101">RPC</button></a>
          <a href="">
          <button class="btn101">gRPC</button></a>
          <a href="">
          <button class="btn101">PEERS / SEEDS</button></a>
          <a href="">
          <button class="btn101">Node Snapshot</button></a>
          <a href="">
          <button class="btn101">State-sync</button></a>
          <a href="">
          <button class="btn101">Block Explorer</button></a>
        </div>`
  });  
    
  const rpcUrl = 'https://celestia-rpc.publicnode.com/'; // Replace with your specific RPC URL
  try {
    const response = await fetch(`${rpcUrl}/status`);
    const data = await response.json();
    const nodeVersion = data.result.node_info.version;
    const blockHeight = await data.result.sync_info.latest_block_height;
    const getChainId = await data.result.node_info.network;

    const chainId = document.getElementById('chain-id');
    chainId.textContent = `Chain-ID: ${getChainId}`;
    
    const blockHeightElement = document.getElementById('block-height');
    blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;  
    document.getElementById('node-version').innerText = `Node version: v${nodeVersion}`;
    console.log(`GET Node Version: ${nodeVersion} GET latest Block: ${blockHeight}`);
      
  } catch (error) {
      console.error('Error fetching RPC', error);
  };

let currentSecond = 0;
const countdownElement = document.getElementById('seconds');
const blockHeightElement = document.getElementById('block-height');
    
async function displaySecond() {
    currentSecond++;
    countdownElement.textContent = `/${currentSecond}s`;

    if (currentSecond <= 10) { // <=
        setTimeout(displaySecond, 1000); // Call itself after 1 second
    } else {
        currentSecond = 0; // Reset to 0 after 10 seconds
        countdownElement.textContent = `/${currentSecond}s`; // Update HTML display
        
        const rpcUrl = 'https://celestia-rpc.publicnode.com/';
        const response = await fetch(`${rpcUrl}/status`);
        const data = await response.json();
        const blockHeight = await data.result.sync_info.latest_block_height;
        //return
        blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;
        
        setTimeout(displaySecond, 1000); // Restart the counting
    }
};
displaySecond();  

};


// Cosmos
async function showPopupCosmos() {
  
  Swal.fire({
    title: "Cosmos",
    imageUrl: "banner/cosmos-banner.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "logo image",
    background: "#09090c url(banner/bg-gif.gif)",
    color: "#fff",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    html: `

        <p class="paragraph">Network: Mainnet</p>
        <p class="paragraph" id="chain-id">Chain id: Load ..</p>
        <p class="paragraph" id="node-version">Node version: Load ..</p>
        <div id="wrapBlockHeight">
          <p class="paragraph" id="block-height">Latest Block Height: Loading ...</p>
          <p class="paragraph" id="seconds"></p>
        </div>

        <p class="stake-with-us">Stake With Us</p>
        <div class="btn-stake-now">
        <a href="https://google.com" target="_blank">Stake Now</a>
        </div>
        
        <p class="services">Tools & Services</p>
        <div>
          <a href="https://google.com" target="_blank">
          <button class="btn101">Installation Guide</button></a>
          <a href="">
          <button class="btn101">RPC</button></a>
          <a href="">
          <button class="btn101">gRPC</button></a>
          <a href="">
          <button class="btn101">PEERS / SEEDS</button></a>
          <a href="">
          <button class="btn101">Node Snapshot</button></a>
          <a href="">
          <button class="btn101">State-sync</button></a>
          <a href="">
          <button class="btn101">Block Explorer</button></a>
        </div>`
  });  
    
  const rpcUrl = 'https://cosmos-rpc.publicnode.com:443'; // Replace with your specific RPC URL
  try {
    const response = await fetch(`${rpcUrl}/status`);
    const data = await response.json();
    const nodeVersion = data.result.node_info.version;
    const blockHeight = await data.result.sync_info.latest_block_height;
    const getChainId = await data.result.node_info.network;

    const chainId = document.getElementById('chain-id');
    chainId.textContent = `Chain-ID: ${getChainId}`;
    
    const blockHeightElement = document.getElementById('block-height');
    blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;  
    document.getElementById('node-version').innerText = `Node version: v${nodeVersion}`;
    console.log(`GET Node Version: ${nodeVersion} GET latest Block: ${blockHeight}`);
      
  } catch (error) {
      console.error('Error fetching RPC', error);
  };

let currentSecond = 0;
const countdownElement = document.getElementById('seconds');
const blockHeightElement = document.getElementById('block-height');
    
async function displaySecond() {
    currentSecond++;
    countdownElement.textContent = `/${currentSecond}s`;

    if (currentSecond <= 10) { // <=
        setTimeout(displaySecond, 1000); // Call itself after 1 second
    } else {
        currentSecond = 0; // Reset to 0 after 10 seconds
        countdownElement.textContent = `/${currentSecond}s`; // Update HTML display
        
        const rpcUrl = 'https://cosmos-rpc.publicnode.com:443';
        const response = await fetch(`${rpcUrl}/status`);
        const data = await response.json();
        const blockHeight = await data.result.sync_info.latest_block_height;
        //return
        blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;
        
        setTimeout(displaySecond, 1000); // Restart the counting
    }
};
displaySecond();  

};


// Neutron
async function showPopupNeutron() {
  
  Swal.fire({
    title: "Neutron",
    imageUrl: "banner/neutron-banner.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "logo image",
    background: "#09090c url(banner/bg-gif.gif)",
    color: "#fff",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    html: `

        <p class="paragraph">Network: Mainnet</p>
        <p class="paragraph" id="chain-id">Chain id: Load ..</p>
        <p class="paragraph" id="node-version">Node version: Load ..</p>
        <div id="wrapBlockHeight">
          <p class="paragraph" id="block-height">Latest Block Height: Loading ...</p>
          <p class="paragraph" id="seconds"></p>
        </div>

        <p class="stake-with-us">Stake With Us</p>
        <div class="btn-stake-now">
        <a href="https://google.com" target="_blank">Stake Now</a>
        </div>
        
        <p class="services">Tools & Services</p>
        <div>
          <a href="https://google.com" target="_blank">
          <button class="btn101">Installation Guide</button></a>
          <a href="">
          <button class="btn101">RPC</button></a>
          <a href="">
          <button class="btn101">gRPC</button></a>
          <a href="">
          <button class="btn101">PEERS / SEEDS</button></a>
          <a href="">
          <button class="btn101">Node Snapshot</button></a>
          <a href="">
          <button class="btn101">State-sync</button></a>
          <a href="">
          <button class="btn101">Block Explorer</button></a>
        </div>`
  });  
    
  const rpcUrl = 'https://neutron-rpc.publicnode.com:443'; // Replace with your specific RPC URL
  try {
    const response = await fetch(`${rpcUrl}/status`);
    const data = await response.json();
    const nodeVersion = data.result.node_info.version;
    const blockHeight = await data.result.sync_info.latest_block_height;
    const getChainId = await data.result.node_info.network;

    const chainId = document.getElementById('chain-id');
    chainId.textContent = `Chain-ID: ${getChainId}`;
    
    const blockHeightElement = document.getElementById('block-height');
    blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;  
    document.getElementById('node-version').innerText = `Node version: v${nodeVersion}`;
    console.log(`GET Node Version: ${nodeVersion} GET latest Block: ${blockHeight}`);
      
  } catch (error) {
      console.error('Error fetching RPC', error);
  };

let currentSecond = 0;
const countdownElement = document.getElementById('seconds');
const blockHeightElement = document.getElementById('block-height');
    
async function displaySecond() {
    currentSecond++;
    countdownElement.textContent = `/${currentSecond}s`;

    if (currentSecond <= 10) { // <=
        setTimeout(displaySecond, 1000); // Call itself after 1 second
    } else {
        currentSecond = 0; // Reset to 0 after 10 seconds
        countdownElement.textContent = `/${currentSecond}s`; // Update HTML display
        
        const rpcUrl = 'https://neutron-rpc.publicnode.com:443';
        const response = await fetch(`${rpcUrl}/status`);
        const data = await response.json();
        const blockHeight = await data.result.sync_info.latest_block_height;
        //return
        blockHeightElement.textContent = `Latest Block Height: ${blockHeight}`;
        
        setTimeout(displaySecond, 1000); // Restart the counting
    }
};
displaySecond();  

};