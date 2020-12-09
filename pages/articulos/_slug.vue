<template>
  <section>
    <h1 class="title is-1">
      {{ post.title }}
    </h1>
    <p>{{ post.body }}</p>
    <p>Ea ipsa facere ex enim labore omnis? Amet minus maxime blanditiis consectetur, soluta deleniti ipsam. Temporibus eius repellat, accusamus debitis laudantium, ratione voluptatibus, maiores perspiciatis labore illum id in velit!</p>
    <blockquote>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta natus ut explicabo mollitia, quia nobis! Corrupti rerum distinctio obcaecati culpa debitis architecto blanditiis. Libero doloribus earum ex dignissimos iste porro!</blockquote>
  </section>
</template>

<script>
export default {
  layout: 'articles',
  async asyncData ({ $axios, params }) {
    const post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    return { post }
  }
}
</script>
