
import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly mensagemErro: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });
    this.mensagemErro = page.locator('[data-test="error"]');
  }

  async acessarPagina() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async realizarLoginComSucesso(usuario: string, senha: string) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(senha);
    await this.loginButton.click();
  }

  async obterMensagemErro() {
    return this.mensagemErro;
  }

}