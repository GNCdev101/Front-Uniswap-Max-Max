from playwright.sync_api import Page, expect

def test_verifications(page: Page):
    page.set_default_timeout(60000)
    # Verify the fee selection UI on the trade page
    page.goto("http://localhost:3000/trade")

    # Wait for the component to be visible
    open_position_form = page.locator("div.open-position-form")
    expect(open_position_form).to_be_visible()

    # Take a screenshot of the form
    open_position_form.screenshot(path="jules-scratch/verification/trade_page.png")

    # Verify the deposit functionality on the earn page
    page.goto("http://localhost:3000/earn/weth")

    # Wait for the component to be visible
    liquidity_card = page.locator("div.liquidity-card")
    expect(liquidity_card).to_be_visible()

    # Enter an amount in the input field
    amount_input = page.locator("input[type='number']")
    amount_input.fill("1.23")

    # Take a screenshot of the card
    liquidity_card.screenshot(path="jules-scratch/verification/earn_page.png")
