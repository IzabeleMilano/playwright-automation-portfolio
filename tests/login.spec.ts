
import { expect, test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Tela de login', () => {
  test('Deve realizar login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarPagina();
    await loginPage.realizarLoginComSucesso('standard_user', 'secret_sauce');

    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  });

  test('Deve realizar login sem sucesso', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessarPagina();
    await loginPage.realizarLoginComSucesso('standard_user', '123456');

    await expect(
    await loginPage.obterMensagemErro()
    ).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
