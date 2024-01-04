import Image from 'next/image';
import { ContactHero } from '@/components/ContactHero';
import { Menu } from '@/components/Menu';

export default function CGV() {
  return (
    <>
      <div className="w-full bg-brown-100 relative h-min min-h-full">
        <div className="flex top-0 sticky w-full z-1 h-[20vh]">
          <div className="basis-4/12 p-6 flex flex-col justify-between">
            <Image
              src="/img/logo-description-white.png"
              width={300}
              height={300}
              alt="Logo Adaozan"
            />
          </div>
          <div className="basis-8/12 relative p-6 flex flex-col justify-between items-end">
            <span className="text-lg font-heading text-cream-100">
              Conditions générales
            </span>
            <span className="text-lg font-heading text-cream-100">
              Propriété intellectuelle, DOnnérs à caractaire personnel,
              Responsabilité et Conditions générales de Vente (CGV)
            </span>
          </div>
        </div>
        <Menu />

        <div className="flex flex-col border-b border-r-brown-100 bg-cream-100 relative text-brown-100 font-heading">
          <div className="flex flex-1 border-b border-brown-100 p-6 flex-col">
            <h2 className="mb-2 font-bold">
              CONDITIONS GENERALES DE VENTE (CGV)
            </h2>
            <p className="py-2">
              Les présentes conditions de vente visent à définir les relations
              commerciales entre la société Adaozan SAS propriétaire du site
              internet www.adaozan.fr et toute personne physique ou morale
              souhaitant procéder à une commande en ligne, dénommée ci-après “le
              client”. Toute commande entraine l&apos;acceptation des CGV sans
              restrictions ni réserves. Adaozan SAS conserve la possibilité de
              modifier à tout moment ces conditions de ventes.
            </p>
            <h3 className="font-bold pt-2">1- Caractéristiques</h3>
            <p className="py-2">
              Adaozan SAS commercialise des objets, mobilier et élément
              d&apos;aménagement valorisant les déchets de pommes, dont la liste
              des produits vendus dans la limite des stocks disponibles est
              consultable sur le site www.adaozan.fr.
            </p>

            <h3 className="pt-2 font-bold">2- Prix </h3>
            <p className="py-2">
              Les prix figurant sur le site sont des prix en Euros (€) toutes
              taxes comprises (TTC) tenant compte de la TVA applicable au jour
              de la commande. Adaozan SAS se réserve le droit de modifier ses
              prix à tout moment et notamment en cas de changement de données
              fiscales ou économiques. Les articles seront facturés sur la base
              des tarifs en vigueur au moment de l&apos;enregistrement de la
              commande. Les prix indiqués ne comprennent pas les frais de
              livraison, sauf mention contraire, facturés en supplément du prix
              des produits achetés suivant le contenu de la commande.
            </p>

            <h3 className="pt-2 font-bold">3- Livraison</h3>
            <p className="py-2">
              Les livraisons sont faites à l&apos;adresse indiquée par le
              client. Les délais de livraison ne sont donnés qu&apos;à titre
              indicatif ; si ceux-ci dépassent trente jours à compter de la
              commande, le contrat de vente pourra être résilié et le client
              remboursé. Adaozan SAS pourra fournir sur demande au client le
              numéro de suivi de son colis. Le client est livré à son domicile
              ou en point relais par le livreur choisi par Adaozan SAS. Les
              risques liés au transport sont à la charge du client à compter du
              moment où les articles quittent les locaux d&apos;Adaozan SAS. Le
              client est tenu de vérifier en présence du livreur, l&apos;état de
              l&apos;emballage de la marchandise et son contenu à la livraison.
              En cas de dommage pendant le transport, toute protestation doit
              être effectuée auprès du transporteur dans un délai de trois jours
              à compter de la livraison.
            </p>

            <h3 className="pt-2 font-bold">4- Modalités de paiement</h3>
            <p className="py-2">
              L&apos;intégralité du paiement doit être réalisé lors de la
              commande, par virement bancaire ou par chèque. Adaozan SAS
              conserve la propriété de l&apos;article jusqu&apos;au paiement
              intégral du prix par le client.
            </p>

            <h3 className="pt-2 font-bold">5- Droit de rétractation</h3>
            <p className="py-2">
              En vertu de l&apos;article L121-20 du Code de la consommation, le
              client dispose d&apos;un délai de quatorze jours ouvrables à
              compter de la livraison de leur commande pour exercer son droit de
              rétractation et ainsi faire retour du produit au vendeur pour
              échange ou remboursement sans pénalité. Les frais de retour
              resteront cependant intégralement à la charge du client.
            </p>

            <h3 className="pt-2 font-bold">6- Garanties </h3>
            <p className="py-2">
              Tous les produits fournis par Adaozan SAS bénéficient de la
              garantie légale prévue par les articles 1641 et suivants du Code
              civil. En cas de non-conformité d&apos;un produit vendu, il pourra
              être retourné à Adaozan SAS qui le reprendra, l&apos;échangera ou
              le remboursera. Toutes les réclamations, demandes d&apos;échange
              ou de remboursement doivent s&apos;effectuer par voie électronique
              à l&apos;adresse suivante : contact@adaozan.fr dans un délai de
              quatorze jours après livraison.
            </p>

            <h3 className="pt-2 font-bold">7- Service après-vente</h3>
            <p className="py-2">
              La communication à distance avec le service après-vente
              n&apos;entraine pas de coût supplémentaire.
            </p>

            <h3 className="pt-2 font-bold">8- Cas de force majeure</h3>
            <p className="py-2">
              Adaozan SAS se réserve le droit de modifier, retarder ou suspendre
              l&apos;exécution de la commande dans les cas de force majeure,
              tels qu&apos;ils sont définis par la jurisprudence, ainsi que dans
              le cas d&apos;évènements caractérisés entraînant une impossibilité
              d&apos;exécution tels que grèves, confinements, incendies,
              inondations, gels, blocages des voies de communication...
            </p>

            <h3 className="pt-2 font-bold">
              9- Modalités de règlement des litiges
            </h3>
            <p className="py-2">
              Les présentes conditions de vente à distance sont soumises à la
              loi française. Pour tous litiges ou contentieux, le Tribunal
              compétent sera celui de Quimper.
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-1 p-6 flex-col border-r border-brown-100">
              <h2 className="font-bold mb-4">PROPRIÉTÉ INTELLECTUELLE</h2>
              <p>
                Les éléments constitutifs du site www.adaozan.fr (identité
                graphique, textes, photographies...) sont la propriété exclusive
                d&apos;Adaozan SAS.
              </p>
              <p>
                Toute reproduction totale ou partielle de ce site sans
                autorisation préalable constituerait une contrefaçon prohibée
                par l&apos;article L.713-2 du Code de la propriété
                intellectuelle pouvant conduire à des poursuites (articles
                L.335-2 et suivants du Code de la propriété intellectuelle).
              </p>
            </div>
            <div className="flex flex-1 flex-col border-r border-brown-100 p-6 ">
              <h2 className="font-bold mb-4">DONNÉES PERSONNELLES</h2>
              <p>
                Adaozan SAS s&apos;engage à préserver la confidentialité des
                informations fournies par le client qu&apos;il serait amené à
                transmettre pour l&apos;utilisation de certains services. Toute
                information le concernant est soumise aux dispositions de la loi
                n° 78-17 du 6 janvier 1978. A ce titre, l&apos;internaute
                dispose d&apos;un droit d&apos;accès, de modification et de
                suppression des informations le concernant. Il peut en faire la
                demande à tout moment par mail à l&apos;adresse suivante :
                contact@adaozan.fr
              </p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-bold mb-4">RESPONSABILITÉ</h2>
              <p>
                Dans le processus de vente à distance, Adaozan SAS n&apos;est
                tenu que par une obligation de moyens. La responsabilité
                d&apos;Adaozan SAS ne saurait être engagée pour tous les
                inconvénients ou dommages inhérents à l&apos;utilisation du
                réseau internet, notamment une rupture de service, une intrusion
                extérieure ou la présence de virus informatiques, ou de tout
                fait qualifié de force majeure, conformément à la loi et à la
                jurisprudence.
              </p>
            </div>
          </div>
        </div>
        <ContactHero />
      </div>
    </>
  );
}
