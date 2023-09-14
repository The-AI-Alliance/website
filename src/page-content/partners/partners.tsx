import React from 'react';
import { Column, Grid, Heading } from '@carbon/react';
import classnames from 'classnames';
import ContactPanel from '../contact/contactPanel';

import styles from './partners.module.scss';

const PartnersPage: React.FC = () => {
  return (
    <Grid className={styles.partners}>
      <>
        <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
          <Heading
            className={classnames(styles.heading, styles['heading--partners'])}
          >
            Partners
          </Heading>
        </Column>
        <Column
          className={styles.partners__list}
          xlg={{ span: 15, offset: 1 }}
          lg={16}
          md={8}
          sm={4}
        >
          TODO: logos
        </Column>
      </>

      <>
        <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
          <Heading
            className={classnames(styles.heading, styles['heading--benefits'])}
          >
            Benefits
          </Heading>
        </Column>
        <Column xlg={{ span: 7, offset: 1 }} lg={9} md={5} sm={4}>
          <p>
            The Alliance needs partners to succeed in its mission to create the
            world’s most trusted, safe, and advanced open-source AI models.
          </p>
          <h3>Partner benefits include the opportunity to:</h3>
        </Column>
        <Column
          className={styles.opportunities}
          xlg={{ span: 7, offset: 1 }}
          lg={8}
          md={4}
          sm={4}
        >
          <ul>
            <li>
              Multiply human and technology resources, and reduce duplicative
              work
            </li>
            <li>
              Counter proprietary activity from competitors seeking to restrict
              access to their models and shape regulation to constrain
              innovation from others
            </li>
            <li>
              Guide and access more capable and better validated base models,
              including those from different domains and modalities (beyond
              language, code, image generation)
            </li>
          </ul>
        </Column>
        <Column
          className={styles.opportunities}
          xlg={{ span: 7, offset: 8 }}
          lg={{ span: 8, offset: 8 }}
          md={{ span: 4, offset: 4 }}
          sm={4}
        >
          <ul>
            <li>
              Drive transparency in methods that assists in building trust with
              the public and customers
            </li>
            <li>
              Advance a simple and clear framework for open versus proprietary
              data/models and technology
            </li>
            <li>
              Ensure that healthy public narrative and reasonable regulation
              prevails, which is far better done coming from a group than
              individual companies
            </li>
          </ul>
        </Column>
      </>

      <>
        <Column xlg={{ span: 7, offset: 1 }} lg={9} md={5} sm={4}>
          <h3>
            Partners of various types can expect other industry-specific
            benefits, including:
          </h3>
        </Column>
        <Column
          className={styles.table}
          xlg={{ span: 14, offset: 1 }}
          lg={16}
          md={8}
          sm={4}
        >
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Potential Contributions</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Infrastructure Providers</th>
                <td>
                  Compute and storage capacity for training, tuning, serving.
                </td>
                <td>
                  Use case understanding; feedback to refine products; marketing
                  proof points and demonstrations.
                </td>
              </tr>
              <tr>
                <th>Data Providers</th>
                <td>Curated data sets across domains and modalities.</td>
                <td>
                  Feedback on quality and utility of data to improve curation,
                  marketing proof points and demonstrations.
                </td>
              </tr>
              <tr>
                <th>Model Builders</th>
                <td>Scientific and engineering talent to build models.</td>
                <td>
                  Skills and experience development, marketing proof points and
                  demonstrations.
                </td>
              </tr>
              <tr>
                <th>Tool Developers and Providers</th>
                <td>
                  Tools for data engineering; model training, tuning, and
                  validation; application integration and operations.
                </td>
                <td>
                  Use case understanding, feedback to refine products, marketing
                  proof points and demonstrations.
                </td>
              </tr>
              <tr>
                <th>Application Owners</th>
                <td>
                  Use case context and requirements, subject matter experts.
                </td>
                <td>
                  Models well-targeted to specific applications with proof
                  points, and trust in the methods used to build them.
                </td>
              </tr>
              <tr>
                <th>Research and Educational Institutions</th>
                <td>
                  Research staff and methods to enable and understand next
                  generation models.
                </td>
                <td>
                  Resources to implement new ideas; first to access largest most
                  capable models; paper and conference leadership; new course
                  development; hiring opportunities.
                </td>
              </tr>
            </tbody>
          </table>
        </Column>
      </>

      <ContactPanel className={styles.contactPanel} background="tilted" />
    </Grid>
  );
};

export default PartnersPage;
