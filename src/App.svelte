<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import {onMount} from 'svelte';
  import Driver from 'driver.js'
  onMount(()=>{
    const dirver = new Driver({
      doneBtnText: '知道了', // Text on the final button
      closeBtnText: '关闭', // Text on the close button for this step
      nextBtnText: '下一步', // Next button text for this step
      prevBtnText: '上一步',
    });
    dirver.defineSteps([
      {
        element:"#logo-box",
        popover:{
          title:"提示",
          description:"这是logo区域"
        }
      },
      {
        element:".title",
        popover:{
          title:"提示",
          description:"这里是标题"
        }
      },
      {
        element:".card",
        popover:{
          title:"提示",
          description:"按钮在这里~,祝您使用愉快!"
        }
      }
    ])
    dirver.start();
  })
</script>

<main>
  <div id="logo-box">
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 class="title">Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
