export default ({ $storyapi, $config: { storyblokApiKey } }) => {
  $storyapi.accessToken = storyblokApiKey
}
