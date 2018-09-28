/*
 * CalculationResult Messages
 *
 * This contains all the text for the CalculationItem component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  currency: {
    id: 'savings.components.CalculationItem.currency',
    defaultMessage: 'USD',
  },
  resultHeader: {
    id: 'savings.components.CalculationResult.header',
    defaultMessage: 'Your current savings',
  },
  savingLabel: {
    id: 'savings.components.CalculationResult.savingLabel',
    defaultMessage: 'You have to save ',
  },
  savingForLabel: {
    id: 'savings.components.CalculationResult.savingForLabel',
    defaultMessage: ' for ',
  },
  months: {
    id: 'savings.components.CalculationResult.months',
    defaultMessage: 'months',
  },
  infoImageAlt: {
    id: 'savings.components.CalculationInfo.image',
    defaultMessage: 'Piggy bank',
  },
  infoHeader: {
    id: 'savings.components.CalculationInfo.header',
    defaultMessage: 'How much money to save?',
  },
  infoDescriptionPartOne: {
    id: 'savings.components.CalculationInfo.descriptionOne',
    defaultMessage: 'This app is calculating ',
  },
  infoDescriptionPartTwo: {
    id: 'savings.components.CalculationInfo.descriptionTwo',
    defaultMessage: 'how much money',
  },
  infoDescriptionPartThree: {
    id: 'savings.components.CalculationInfo.descriptionThree',
    defaultMessage: ' you need to monthly save for your wishes. You can add multiple items (by the plus + button) you wish to buy. For every item you need to specify price and month count when you want to have saved money available. App will calculate minimal amount of money you should monthly save.',
  },
});