# Pixels

This is Jordanne's gallery of pixel art.
I'm having fun. Say no to anti-aliasing.

Built with Pug and SCSS.

Big shout-out to `image-rendering: crisp-edges`

## Deployment

1. Configure project to use GitHub pages
    * Settings > Pages
    * Choose default branch and save
2. Create an empty `.nojekyll` file in the root folder
3. Create private repository secret `ACTIONS_DEPLOY_KEY` as described [here](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key), which will be used for deployment.
4. Create a folder called `.github` in the root folder and create a folder `workflows` inside the `.github` folder.
5. Create a `.yml` file for defining the build and deploy process and place it inside `.github/workflows`. See `.github/workflows/build-and-deploy.yml`.
