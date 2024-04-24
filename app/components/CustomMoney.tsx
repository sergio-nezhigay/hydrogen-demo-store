import {useMoney} from '@shopify/hydrogen';
import {CurrencyCode} from '@shopify/hydrogen/storefront-api-types';

interface MoneyData {
  amount: string;
  currencyCode: CurrencyCode;
}

export function CustomMoney({data}: {data: MoneyData}) {
  const money = useMoney(data);
  return (
    <p>
      {' '}
      {`${money.withoutTrailingZerosAndCurrency} ${money.currencyNarrowSymbol}`}
    </p>
  );
}
