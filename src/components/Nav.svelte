<script>
  //problema vou precisar da BASE_URL para gerar o menu
  const baseUrl = process.env.BASE_URL
  console.log(baseUrl)
	
	export let segment
	
</script>

<style type="text/stylus">
  @import '../styles/variables';
  
  nav 
    border-bottom: 1px solid rgba(255, 62, 0, 0.1)
    font-weight: 300
    padding: 0 1em

    ul 
      margin: 0
      padding: 0

      &::after 
        content: ""
        display: block
        clear: both
      

      li 
        display: block
        float: left

        a 
          text-decoration: none
          padding: 1em 0.5em
          display: block
          color: $dark-blue

          &.selected 
            position: relative
            display: inline-block

            &::after 
              position: absolute
              content: ""
              width: 100% - 1em
              height: 2px
              background-color: rgb(255, 62, 0)
              display: block
              bottom: -1px
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
