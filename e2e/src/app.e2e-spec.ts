import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Teste de Listagem', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Listagem de Usuarios');
  });
});
